import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/modules/dashboard/ui/components/dashboard-sidebar";

interface Props {
  children: React.ReactNode ;
}

const Layout = ({children}: Props) =>{
return (
  <SidebarProvider>
    <DashboardSidebar/>
    <main className="flex w-screen  h-screen w-full flex-1 flex-col  bg-muted">
    {children}
    </main>
  </SidebarProvider>
)
}

export default Layout;