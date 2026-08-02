import { MatrixCell, MatrixData } from "../types/matrix";

export function resizeMatrix(
  matrix: MatrixData,
  rows: number,
  cols: number
): MatrixData {

  const cells: MatrixCell[] = [];

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const exists = matrix.cells.find(
        cell =>
          cell.row === row &&
          cell.col === col
      );

      if (exists) {
        cells.push(exists);
      } else {
        cells.push({
          id: crypto.randomUUID(),
          row,
          col,
          detail1: "",
          detail2: "",
        });
      }
    }
  }
  return {
    ...matrix,
    layout: {
      ...matrix.layout,
      rows,
      cols,
    },
    cells,
  };
}