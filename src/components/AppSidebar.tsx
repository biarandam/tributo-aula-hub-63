import { useState } from "react";
import { Calendar, BookOpen, Users, MapPin, Clock } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";

const lessons = [
  { title: "Aula 1", url: "/aula/1", date: "11/09/2025" },
  { title: "Aula 2", url: "/aula/2", date: "25/09/2025" },
  { title: "Aula 3", url: "/aula/3", date: "09/10/2025" },
  { title: "Aula 4", url: "/aula/4", date: "23/10/2025" },
  { title: "Aula 5", url: "/aula/5", date: "06/11/2025" },
  { title: "Aula 6", url: "/aula/6", date: "20/11/2025" },
  { title: "Aula 7", url: "/aula/7", date: "04/12/2025" },
  { title: "Aula 8", url: "/aula/8", date: "18/12/2025" },
];

export function AppSidebar() {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;
  const isLessonActive = lessons.some((lesson) => isActive(lesson.url));
  
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive 
      ? "bg-primary/10 text-primary font-medium border-r-2 border-primary" 
      : "hover:bg-muted/50 text-muted-foreground hover:text-foreground";

  return (
    <Sidebar className="w-72 transition-all duration-300 border-r bg-card">
      <SidebarHeader className="p-6 border-b">
        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-primary">
            Preços de Transferência
          </h2>
          <div className="text-sm text-muted-foreground space-y-1">
            <div className="flex items-center gap-2">
              <Users className="h-3 w-3" />
              <span>GNC e FPL</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-3 w-3" />
              <span>18h - 19h</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-3 w-3" />
              <span>Escritório SP - Hungria</span>
            </div>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="p-2">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs uppercase tracking-wider text-muted-foreground px-3">
            Programa de Treinamento
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <NavLink to="/" end className={getNavCls}>
                    <Calendar className="h-4 w-4 shrink-0" />
                    <span>Visão Geral</span>
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-4">
          <SidebarGroupLabel className="text-xs uppercase tracking-wider text-muted-foreground px-3">
            Cronograma de Aulas
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {lessons.map((lesson) => (
                <SidebarMenuItem key={lesson.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={lesson.url} className={getNavCls}>
                      <BookOpen className="h-4 w-4 shrink-0" />
                      <div className="flex-1 text-left">
                        <div className="font-medium">{lesson.title}</div>
                        <div className="text-xs text-muted-foreground">
                          {lesson.date}
                        </div>
                      </div>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}