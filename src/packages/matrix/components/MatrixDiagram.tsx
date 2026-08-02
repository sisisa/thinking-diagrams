"use client";

import { useMatrix } from "../hooks/useMatrix";
import MatrixAxis from "./MatrixAxis";
import MatrixCell from "./MatrixCell";

export default function MatrixDiagram() {
  const {
    matrix,
    setMatrix,
    updateCell,
    updateXAxis,
    updateYAxis,
  } = useMatrix();

  // マトリクスのjsonデータをコピー。他の箇所に実装時は配列に格納してデータを保存出来るようにする
  const handleCopyClick = async () => {
    try {
      // 見やすく整形（不要なら null, 2 は削除）
      const jsonString = JSON.stringify(matrix, null, 2);      
      await navigator.clipboard.writeText(jsonString);
      alert('JSONデータをコピーしました！');
    } catch (error) {
      console.error('コピーに失敗しました', error);
    }
  };

  const updateMainTitle = (mainTitle: string) => {
    setMatrix((prevMatrix) => ({
      ...prevMatrix,
      main_title: mainTitle,
    }));
  };

  return (
    <div className="flex flex-col gap-8 p-8">
      <div className="flex items-center">
        <input
          className="text-3xl font-bold outline-none"
          value={matrix.main_title}
          onChange={(e) => updateMainTitle(e.target.value)}
        />
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

          {/* この部分が画面上に表示されるセル */}
          <div
            className="grid gap-2 w-full"
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

      <div className="flex gap-8 p-8 justify-end">
        <button
            className="text-[#333333] bg-[#FFFFFF] rounded rounded-md border py-2 w-64 justify-end"
            onClick={() => {
              console.log(JSON.stringify(matrix, null, 2));
            }}
          >
            PNG出力
        </button>

        <button
            className="text-[#333333] bg-[#FFFFFF] rounded rounded-md border py-2 w-64 justify-end"
            onClick={handleCopyClick}
          >
            JSON出力
          </button>
      </div>
    </div>
  );
}