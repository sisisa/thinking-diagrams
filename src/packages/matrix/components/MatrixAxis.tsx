"use client";

import { MatrixAxis as MatrixAxisType } from "../types/matrix";

interface MatrixAxisProps {
  axis: MatrixAxisType;
  direction: "x" | "y";
  onUpdate: (
    values: Partial<MatrixAxisType>
  ) => void;
}

export default function MatrixAxis({
  axis,
  direction,
  onUpdate,
}: MatrixAxisProps) {
  return (
    <div
      className={
        direction === "x"
          ? "flex flex-col items-center gap-2"
          : "flex flex-col justify-between h-full min-h-80"
      }
    >

      <input
        className="w-full rounded border px-2 py-1 text-center font-bold"
        placeholder="Perspective"
        value={axis.name}
        onChange={(e) =>
          onUpdate({
            name: e.target.value,
          })
        }
      />

      <input
        className="w-full rounded border px-2 py-1 text-center text-sm"
        placeholder="説明"
        value={axis.description}
        onChange={(e) =>
          onUpdate({
            description: e.target.value,
          })
        }
      />

      {direction === "x" ? (
        <div className="flex justify-between gap-4 w-full">

          <input
            className="flex-1 rounded border px-2 py-1 text-center"
            placeholder="左ラベル"
            value={axis.startLabel}
            onChange={(e) =>
              onUpdate({
                startLabel: e.target.value,
              })
            }
          />

          <input
            className="flex-1 rounded border px-2 py-1 text-center"
            placeholder="右ラベル"
            value={axis.endLabel}
            onChange={(e) =>
              onUpdate({
                endLabel: e.target.value,
              })
            }
          />

        </div>
      ) : (
        <div className="flex flex-col gap-4">

          <input
            className="rounded border px-2 py-1 text-center"
            placeholder="上ラベル"
            value={axis.endLabel}
            onChange={(e) =>
              onUpdate({
                endLabel: e.target.value,
              })
            }
          />

          <input
            className="rounded border px-2 py-1 text-center"
            placeholder="下ラベル"
            value={axis.startLabel}
            onChange={(e) =>
              onUpdate({
                startLabel: e.target.value,
              })
            }
          />

        </div>
      )}

    </div>
  );
}