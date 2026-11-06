import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">React-остров</p>

      <p className="mt-4 text-5xl font-bold tracking-tight tabular-nums" aria-live="polite">
        {count}
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => setCount((value) => value + 1)}
          className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-500"
        >
          Увеличить
        </button>
        <button
          type="button"
          onClick={() => setCount(0)}
          className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
        >
          Сбросить
        </button>
      </div>
    </div>
  );
}
