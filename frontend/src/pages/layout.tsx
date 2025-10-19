import type { PropsWithChildren } from "react";

const AppLayout = ({ children }: PropsWithChildren) => (
  <div className="w-full min-h-screen bg-slate-100 p-0 m-0">
    <main className="mx-auto max-w-5xl space-y-8 px-4 py-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-slate-900">Restr'O'Monitor</h1>
        <p className="text-sm text-slate-600">
          Track platform availability and coverage your outlets.
        </p>
      </header>
      {children}
    </main>
  </div>
);

export default AppLayout;