// セルの更新専用のロジック
import { MatrixData } from "../types/matrix";

export function updateCell(
  matrix: MatrixData,
  id: string,
  values: {
    title?: string;
    description?: string;
  }
): MatrixData {

  return {

    ...matrix,

    cells: matrix.cells.map(cell => {

      if (cell.id !== id) return cell;

      return {

        ...cell,

        ...values,

      };

    }),

  };

}

export function updateXAxis(
  matrix: MatrixData,
  values: Partial<MatrixData["xAxis"]>
): MatrixData {
  return {
    ...matrix,
    xAxis: {
      ...matrix.xAxis,
      ...values,
    },
  };
}

export function updateYAxis(
  matrix: MatrixData,
  values: Partial<MatrixData["yAxis"]>
): MatrixData {
  return {
    ...matrix,
    yAxis: {
      ...matrix.yAxis,
      ...values,
    },
  };
}