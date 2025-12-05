export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
          Dashboard Overview
        </h1>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {/* KPI Cards Placeholder */}
        {[
          { title: "Total Revenue", value: "$45,231.89", change: "+20.1%" },
          { title: "Active Products", value: "+2350", change: "+180.1%" },
          { title: "Low Stock Items", value: "12", change: "-19%" },
          { title: "Pending Orders", value: "5", change: "+201" },
        ].map((kpi, i) => (
          <div
            key={i}
            className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
          >
            <h3 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              {kpi.title}
            </h3>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                {kpi.value}
              </span>
              <span className="text-xs font-medium text-green-600">
                {kpi.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
          <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-50">
            Recent Activity
          </h3>
          <div className="mt-4 h-64 flex items-center justify-center text-zinc-500">
            Chart Placeholder
          </div>
        </div>
        <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
          <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-50">
            Stock Alerts
          </h3>
          <div className="mt-4 h-64 flex items-center justify-center text-zinc-500">
            List Placeholder
          </div>
        </div>
      </div>
    </div>
  );
}
