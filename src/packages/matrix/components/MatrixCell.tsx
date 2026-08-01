"use client";

import { MatrixCell as MatrixCellType } from "../types/matrix";

interface MatrixCellProps {
  cell: MatrixCellType;
  onUpdate: (
    id: string,
    data: {
      title?: string;
      details?: string[];
    }
  ) => void;
}

export default function MatrixCell({
  cell,
  onUpdate,
}: MatrixCellProps) {
  const updateTitle = (title: string) => {
    onUpdate(cell.id, {
      title,
    });
  };

  const updateDetail = (index: number, value: string) => {
    const details = [...cell.details];
    details[index] = value;

    onUpdate(cell.id, {
      details,
    });
  };

  return (
    <div className="border rounded-md p-3 bg-white min-h-40 flex flex-col gap-3">

      <input
        className="w-full rounded border px-2 py-1 font-semibold"
        placeholder="タイトル"
        value={cell.title}
        onChange={(e) => updateTitle(e.target.value)}
      />

      <div className="flex flex-col gap-2">
        {cell.details.map((detail, index) => (
          <input
            key={index}
            className="w-full rounded border px-2 py-1 text-sm"
            placeholder={`詳細 ${index + 1}`}
            value={detail}
            onChange={(e) =>
              updateDetail(index, e.target.value)
            }
          />
        ))}
      </div>

    </div>
  );
}