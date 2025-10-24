import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/modules/dashboard/ui/components/dashboard-sidebar";
import { DashboardNavbar } from "@/modules/dashboard/ui/components/dashboard-navbar";

interface Props {
  children: React.ReactNode ;
}

const Layout = ({children}: Props) =>{
return (
  <SidebarProvider>
    <DashboardSidebar/>
    <main className="flex w-screen  h-screen w-full flex-1 flex-col  bg-muted">
      <DashboardNavbar/>
    {children}
    </main>
  </SidebarProvider>
)
}

export default Layout;