import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route, Outlet } from "react-router-dom";
import { AppSidebar } from "@/components/AppSidebar";
import ProjectBrasilia from "./brasilia/ProjectBrasilia";
import HomePage from "./pages/HomePage";
import LessonPage from "./pages/LessonPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const HubLayout = () => (
  <SidebarProvider>
    <div className="flex min-h-screen w-full">
      <AppSidebar />
      <div className="flex-1 flex flex-col">
        <header className="h-14 flex items-center border-b bg-card px-4 sticky top-0 z-40">
          <SidebarTrigger className="mr-4" />
          <h1 className="font-semibold text-foreground">
            Programa de Treinamento - Preços de Transferência
          </h1>
        </header>
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  </SidebarProvider>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/" element={<ProjectBrasilia />} />
          <Route path="/project-brasilia" element={<ProjectBrasilia />} />
          <Route element={<HubLayout />}>
            <Route path="/hub" element={<HomePage />} />
            <Route path="/aula/:id" element={<LessonPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
