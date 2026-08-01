export interface MatrixAxis {
  /**
   * Perspective1 などの内部識別子
   */
  id: string;

  /**
   * Perspective1
   */
  name: string;

  /**
   * 作業時間
   */
  description: string;

  /**
   * 左・下側
   */
  startLabel: string;

  /**
   * 右・上側
   */
  endLabel: string;
}

export interface MatrixCell {

  id: string;

  row: number;

  col: number;

  title: string;

  description?: string;

}

export interface MatrixLayout {

  rows: number;

  cols: number;

  cellWidth: number;

  cellHeight: number;

}

export interface MatrixData {

  title: string;

  xAxis: MatrixAxis;

  yAxis: MatrixAxis;

  layout: MatrixLayout;

  cells: MatrixCell[];

}