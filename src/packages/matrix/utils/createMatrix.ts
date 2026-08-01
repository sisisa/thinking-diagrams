// 初期生成専用のロジック
import { MatrixCell, MatrixData } from "../types/matrix";

export function createMatrix(rows = 2, cols = 2): MatrixData {
  const cells: MatrixCell[] = [];

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      cells.push({
        id: crypto.randomUUID(),
        row,
        col,
        title: "",
        details: [],
      });
    }
  }

  return {
    title: "新しいマトリクス",

    xAxis: {
      id: "x",
      name: "Perspective1",
      description: "",
      startLabel: "低",
      endLabel: "高",
    },

    yAxis: {
      id: "y",
      name: "Perspective2",
      description: "",
      startLabel: "低",
      endLabel: "高",
    },

    layout: {
      rows,
      cols,
      cellWidth: 220,
      cellHeight: 160,
    },

    cells,
  };
}