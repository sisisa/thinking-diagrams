
'use client';
import MatrixDiagram from "@/src/packages/matrix/components/MatrixDiagram";
import { useState, useEffect } from 'react';

// 表示する複数のコンポーネント
const ComponentB = () => <div className="p-8 text-2xl">2つ目のコンポーネント</div>;
const ComponentC = () => <div className="p-8 text-2xl">3つ目のコンポーネント</div>;

const components = [<MatrixDiagram key="0" />, <ComponentB key="1" />, <ComponentC key="2" />];

export default function Page() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 左・右キーの処理
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        setCurrentIndex((prev) => (prev + 1) % components.length);
      } else if (e.key === 'ArrowLeft') {
        setCurrentIndex((prev) => (prev - 1 + components.length) % components.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <main>
      <div className="flex gap-4 pt-4">
        <button 
          onClick={() => setCurrentIndex((prev) => (prev - 1 + components.length) % components.length)}
          className="px-4 py-2 bg-gray-200 rounded"
        >
          ← 前へ
        </button>
        <button 
          onClick={() => setCurrentIndex((prev) => (prev + 1) % components.length)}
          className="px-4 py-2 bg-gray-200 rounded"
        >
          次へ →
        </button>
      </div>
      
      <div className="mb-4">
        {components[currentIndex]}
      </div>

    </main>
  );
}
