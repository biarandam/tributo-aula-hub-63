import { Calendar, Users, MapPin, Clock, BookOpen, Monitor } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-training.jpg";

const lessons = [
  { id: 1, title: "Introdução aos Preços de Transferência", date: "11/09/2025", status: "upcoming" },
  { id: 2, title: "Métodos de Precificação", date: "25/09/2025", status: "upcoming" },
  { id: 3, title: "Documentação Comprobatória", date: "09/10/2025", status: "upcoming" },
  { id: 4, title: "Análise Econômica", date: "23/10/2025", status: "upcoming" },
  { id: 5, title: "Regulamentação Nacional", date: "06/11/2025", status: "upcoming" },
  { id: 6, title: "Aspectos Internacionais", date: "20/11/2025", status: "upcoming" },
  { id: 7, title: "Casos Práticos", date: "04/12/2025", status: "upcoming" },
  { id: 8, title: "Revisão e Avaliação", date: "18/12/2025", status: "upcoming" },
];

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative bg-gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        <div className="relative container mx-auto px-6 py-20">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
              Treinamento sobre Preços de Transferência
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Programa de capacitação interna desenvolvido para fortalecer o conhecimento 
              em regulamentação e práticas de preços de transferência no Brasil.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="flex items-center gap-3 text-white/90">
                <Users className="h-5 w-5 shrink-0" />
                <div>
                  <div className="font-medium">Coordenação</div>
                  <div className="text-sm">GNC e FPL</div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <Calendar className="h-5 w-5 shrink-0" />
                <div>
                  <div className="font-medium">Período</div>
                  <div className="text-sm">Set - Dez 2025</div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <Clock className="h-5 w-5 shrink-0" />
                <div>
                  <div className="font-medium">Horário</div>
                  <div className="text-sm">18h - 19h</div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <MapPin className="h-5 w-5 shrink-0" />
                <div>
                  <div className="font-medium">Local</div>
                  <div className="text-sm">SP - Hungria</div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
              <Monitor className="h-5 w-5" />
              <span className="text-white/90">
                Transmissão online simultânea para escritórios do Rio de Janeiro e Brasília
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Program Overview */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="shadow-corporate">
              <CardHeader>
                <CardTitle className="text-2xl font-heading">Sobre o Programa</CardTitle>
                <CardDescription className="text-base">
                  Um programa estruturado em 8 encontros quinzenais para desenvolvimento 
                  de competências especializadas em preços de transferência.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-accent rounded-lg">
                    <h4 className="font-semibold text-accent-foreground mb-2">Formato</h4>
                    <p className="text-sm text-muted-foreground">
                      Aulas presenciais com duração de 1 hora, realizadas quinzenalmente
                    </p>
                  </div>
                  <div className="p-4 bg-accent rounded-lg">
                    <h4 className="font-semibold text-accent-foreground mb-2">Metodologia</h4>
                    <p className="text-sm text-muted-foreground">
                      Combinação de teoria, casos práticos e discussões interativas
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Lessons Calendar */}
            <Card className="shadow-corporate">
              <CardHeader>
                <CardTitle className="text-xl font-heading">Cronograma das Aulas</CardTitle>
                <CardDescription>
                  Clique em qualquer aula para acessar os materiais e conteúdo específico
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {lessons.map((lesson) => (
                    <Link key={lesson.id} to={`/aula/${lesson.id}`}>
                      <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer group">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                            <BookOpen className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium group-hover:text-primary transition-colors">
                              Aula {lesson.id}: {lesson.title}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {lesson.date} • Quinta-feira • 18h-19h
                            </p>
                          </div>
                        </div>
                        <Badge variant="secondary">
                          Em breve
                        </Badge>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Access Sidebar */}
          <div className="space-y-6">
            <Card className="shadow-corporate">
              <CardHeader>
                <CardTitle className="text-lg font-heading">Acesso Rápido</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link to="/aula/1">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Próxima Aula
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="h-4 w-4 mr-2" />
                  Calendário Completo
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Monitor className="h-4 w-4 mr-2" />
                  Link da Transmissão
                </Button>
              </CardContent>
            </Card>

            {/* Program Info */}
            <Card className="shadow-corporate">
              <CardHeader>
                <CardTitle className="text-lg font-heading">Informações do Programa</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total de aulas:</span>
                    <span className="font-medium">8 encontros</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Frequência:</span>
                    <span className="font-medium">Quinzenal</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Dia da semana:</span>
                    <span className="font-medium">Quintas-feiras</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duração:</span>
                    <span className="font-medium">1 hora por aula</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Início:</span>
                    <span className="font-medium">11/09/2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Término:</span>
                    <span className="font-medium">18/12/2025</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;