"use client";

import { useMatrix } from "../hooks/useMatrix";
import MatrixAxis from "./MatrixAxis";
import MatrixCell from "./MatrixCell";

export default function MatrixDiagram() {
  const {
    matrix,
    updateCell,
    updateXAxis,
    updateYAxis,
  } = useMatrix();

  return (
    <div className="flex flex-col gap-8 p-8">

      <div className="flex items-center justify-between">
        <input
          className="text-3xl font-bold border-b outline-none"
          value={matrix.title}
          readOnly
        />

        <button
          className="rounded border px-4 py-2"
          onClick={() => {
            console.log(JSON.stringify(matrix, null, 2));
          }}
        >
          JSON出力
        </button>
      </div>

      <div className="flex flex-col gap-6">

        <MatrixAxis
          axis={matrix.xAxis}
          direction="x"
          onUpdate={updateXAxis}
        />

        <div className="flex gap-6">

          <MatrixAxis
            axis={matrix.yAxis}
            direction="y"
            onUpdate={updateYAxis}
          />

          <div
            className="grid gap-2"
            style={{
              gridTemplateColumns: `repeat(${matrix.layout.cols}, minmax(220px,1fr))`,
            }}
          >
            {matrix.cells.map((cell) => (
              <MatrixCell
                key={cell.id}
                cell={cell}
                onUpdate={updateCell}
              />
            ))}
          </div>

        </div>

      </div>

    </div>
  );
}