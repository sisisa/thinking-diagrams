"use client";

import { MatrixCell as MatrixCellType } from "../types/matrix";

interface MatrixCellProps {
  cell: MatrixCellType;
  onUpdate: (
    id: string,
    data: {
      detail1?: string;
      detail2?: string;
    }
  ) => void;
}

export default function MatrixCell({
  cell,
  onUpdate,
}: MatrixCellProps) {
  const updateDetail1 = (detail1: string) => {
    onUpdate(cell.id, {
      detail1,
    });
  };

  const updateDetail2 = (detail2: string) => {
    onUpdate(cell.id, {
      detail2,
    });
  };

  return (
    <div className="border rounded-md p-3 bg-white flex flex-col">
      <input
        className="w-full px-2 py-1 mb-2 font-bold"
        placeholder="詳細1"
        value={cell.detail1}
        onChange={(e) => updateDetail1(e.target.value)}
      />

       <input
        className="w-full px-2 py-1 font-bold"
        placeholder="詳細2"
        value={cell.detail2}
        onChange={(e) => updateDetail2(e.target.value)}
      />
    </div>
  );
}