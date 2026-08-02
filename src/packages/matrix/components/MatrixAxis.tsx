"use client";

import { MatrixAxis as MatrixAxisType } from "../types/matrix";
interface MatrixAxisProps {
  axis: MatrixAxisType;
  direction: "x" | "y";
  onUpdate: (values: Partial<MatrixAxisType>) => void;
}

export default function MatrixAxis({
  axis,
  direction,
  onUpdate,
}: MatrixAxisProps) {
  // X軸
  if (direction === "x") {
    return (
      <div className="flex flex-col gap-3">
        {/* Perspective名 */}
        <input
          className="w-48 mx-auto grid place-items-center rounded px-2 py-1 text-center font-bold"
          placeholder="Perspective"
          value={axis.name}
          onChange={(e) =>
            onUpdate({
              name: e.target.value,
            })
          }
        />

        {/* Perspectiveの説明 */}
        <input
          className="px-2 py-1 text-center font-bold"
          placeholder="説明"
          value={axis.description}
          onChange={(e) =>
            onUpdate({
              description: e.target.value,
            })
          }
        />

        {/* 左右ラベル */}
        <div className="grid grid-cols-2 gap-4">
          <input
            className="px-2 py-1 text-center"
            placeholder="左ラベル"
            value={axis.startLabel}
            onChange={(e) =>
              onUpdate({
                startLabel: e.target.value,
              })
            }
          />

          <input
            className="px-2 py-1 text-center"
            placeholder="右ラベル"
            value={axis.endLabel}
            onChange={(e) =>
              onUpdate({
                endLabel: e.target.value,
              })
            }
          />
        </div>
      </div>
    );
  }

  // Y軸
  return (
    <div
      className="grid gap-3"
      style={{
        gridTemplateColumns: "56px 56px 72px",
      }}
    >
      {/* 
          1列目：Perspective
      */}
      <textarea
        className="resize-none p-2 text-center font-bold"
        style={{
          writingMode: "vertical-rl",
          textOrientation: "upright",
          height: "400px",
          width: "48px",
        }}
        placeholder="Perspective"
        value={axis.name}
        onChange={(e) =>
          onUpdate({
            name: e.target.value,
          })
        }
      />

      {/* 
          2列目：説明
       */}
      <textarea
        className="resize-none p-2 text-center font-bold"
        style={{
          writingMode: "vertical-rl",
          textOrientation: "upright",
          height: "400px",
          width: "48px",
        }}
        placeholder="説明"
        value={axis.description}
        onChange={(e) =>
          onUpdate({
            description: e.target.value,
          })
        }
      />

      {/* 
          3列目：上ラベル・下ラベル
       */}
      <div className="flex flex-col justify-between gap-3">
        {/* 上ラベル */}
        <textarea
          className="text-lg resize-none p-2 text-center"
          style={{
            writingMode: "vertical-rl",
            textOrientation: "upright",
            height: "100px",
            width: "48px",
          }}
          placeholder="上ラベル"
          value={axis.endLabel}
          onChange={(e) =>
            onUpdate({
              endLabel: e.target.value,
            })
          }
        />

        {/* 下ラベル */}
        <textarea
          className="text-lg resize-none p-2 text-center"
          style={{
            writingMode: "vertical-rl",
            textOrientation: "upright",
            height: "100px",
            width: "48px",
          }}
          placeholder="下ラベル"
          value={axis.startLabel}
          onChange={(e) =>
            onUpdate({
              startLabel: e.target.value,
            })
          }
        />
      </div>
    </div>
  );
}