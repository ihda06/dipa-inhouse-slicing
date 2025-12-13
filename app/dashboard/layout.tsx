import HeaderDashboard from "@/components/dashboard/layout/Header";
import SidebarDashboard from "@/components/dashboard/layout/Sidebar";

import { SidebarProvider } from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-[#111316] h-screen">
        {/* Sidebar */}
        <SidebarDashboard />
        <div className="flex relative w-full h-screen flex-1 flex-col">
          {/* Header */}
          <HeaderDashboard />
          {/* Main Content */}
          <main className="flex-1 w-full overflow-y-auto p-3" tabIndex={-1}>
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
