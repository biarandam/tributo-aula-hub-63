import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, FileText, Download, Calendar, Clock, MapPin, MessageSquare, Upload } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";

const lessons = [
  {
    id: 1,
    title: "Panorama Geral e Diretrizes",
    date: "26/09/2025",
    objectives: [
      "Compreender os conceitos fundamentais de preços de transferência",
      "Identificar as principais regulamentações aplicáveis",
      "Reconhecer a importância estratégica do tema para empresas multinacionais"
    ],
    materials: [
      { name: "Slides - Panorama Geral PT.pdf", type: "pdf", size: "2.3 MB" },
      { name: "Lei 9.430/96 - Artigos Relevantes.pdf", type: "pdf", size: "890 KB" },
      { name: "Caso Prático - Empresa XYZ.docx", type: "doc", size: "1.2 MB" }
    ]
  },
  {
    id: 2,
    title: "Transações Controladas, Delineamento e Comparabilidade",
    date: "08/10/2025",
    objectives: [
      "Dominar os conceitos de transações controladas",
      "Aplicar critérios de delineamento adequado",
      "Analisar fatores de comparabilidade"
    ],
    materials: []
  },
  {
    id: 3,
    title: "Métodos, Ajustes e Efeitos em Outros Tributos",
    date: "20/10/2025",
    objectives: [
      "Estruturar aplicação dos métodos de precificação",
      "Identificar necessidades de ajustes",
      "Compreender impactos em outros tributos"
    ],
    materials: []
  },
  {
    id: 4,
    title: "Commodities",
    date: "01/11/2025",
    objectives: [
      "Aplicar regras específicas para commodities",
      "Realizar análises econômicas específicas",
      "Interpretar regulamentação especial"
    ],
    materials: []
  },
  {
    id: 5,
    title: "Serviços Intragrupo, SBVA e Cost Sharing",
    date: "13/11/2025",
    objectives: [
      "Dominar precificação de serviços intragrupo",
      "Compreender aplicação do SBVA",
      "Aplicar regras de cost sharing"
    ],
    materials: []
  },
  {
    id: 6,
    title: "Intangíveis",
    date: "25/11/2025",
    objectives: [
      "Compreender precificação de intangíveis",
      "Aplicar métodos específicos para intangíveis",
      "Analisar casos práticos complexos"
    ],
    materials: []
  },
  {
    id: 7,
    title: "Reestruturações de Negócios e Operações Financeiras",
    date: "07/12/2025",
    objectives: [
      "Analisar impactos de reestruturações",
      "Aplicar regras para operações financeiras",
      "Desenvolver soluções práticas"
    ],
    materials: []
  },
  {
    id: 8,
    title: "Medidas de Simplificação e Documentação",
    date: "19/12/2025",
    objectives: [
      "Aplicar medidas de simplificação disponíveis",
      "Estruturar documentação completa",
      "Consolidar conhecimentos adquiridos"
    ],
    materials: []
  }
];

const LessonPage = () => {
  const { id } = useParams();
  const lessonId = parseInt(id || "1");
  const lesson = lessons.find(l => l.id === lessonId);
  const [notes, setNotes] = useState("");

  if (!lesson) {
    return <div>Aula não encontrada</div>;
  }

  const prevLesson = lessonId > 1 ? lessonId - 1 : null;
  const nextLesson = lessonId < 8 ? lessonId + 1 : null;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-primary text-white">
        <div className="container mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 text-white/80 mb-2">
                <Calendar className="h-4 w-4" />
                <span>{lesson.date}</span>
                <Separator orientation="vertical" className="h-4 bg-white/30" />
                <Clock className="h-4 w-4" />
                <span>8h30 - 9h30</span>
                <Separator orientation="vertical" className="h-4 bg-white/30" />
                <MapPin className="h-4 w-4" />
                <span>Escritório SP - Hungria</span>
              </div>
              <h1 className="text-3xl font-bold font-heading">
                Aula {lesson.id}: {lesson.title}
              </h1>
            </div>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              Em breve
            </Badge>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Learning Objectives */}
            <Card className="shadow-corporate">
              <CardHeader>
                <CardTitle className="text-xl font-heading">Objetivos de Aprendizagem</CardTitle>
                <CardDescription>
                  Ao final desta aula, você será capaz de:
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {lesson.objectives.map((objective, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex items-center justify-center w-6 h-6 bg-primary/10 rounded-full shrink-0 mt-0.5">
                        <span className="text-xs font-medium text-primary">{index + 1}</span>
                      </div>
                      <span className="text-foreground">{objective}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Materials */}
            <Card className="shadow-corporate">
              <CardHeader>
                <CardTitle className="text-xl font-heading flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Materiais de Apoio
                </CardTitle>
                <CardDescription>
                  Documentos, slides e recursos complementares para esta aula
                </CardDescription>
              </CardHeader>
              <CardContent>
                {lesson.materials.length > 0 ? (
                  <div className="space-y-3">
                    {lesson.materials.map((material, index) => (
                      <div key={index} className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center justify-center w-10 h-10 bg-accent rounded-lg">
                            <FileText className="h-5 w-5 text-accent-foreground" />
                          </div>
                          <div>
                            <h4 className="font-medium">{material.name}</h4>
                            <p className="text-sm text-muted-foreground">{material.size}</p>
                          </div>
                        </div>
                        <Button size="sm" variant="outline">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    ))}
                    <Separator className="my-4" />
                    <Button variant="outline" className="w-full">
                      <Download className="h-4 w-4 mr-2" />
                      Baixar Todos os Materiais
                    </Button>
                  </div>
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Materiais serão disponibilizados antes da aula</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Notes Section */}
            <Card className="shadow-corporate">
              <CardHeader>
                <CardTitle className="text-xl font-heading flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  Anotações Pessoais
                </CardTitle>
                <CardDescription>
                  Espaço para suas anotações e comentários sobre esta aula
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Adicione suas anotações aqui..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="min-h-[120px] resize-none"
                />
                <div className="flex justify-end mt-4">
                  <Button size="sm">
                    Salvar Anotações
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Navigation */}
            <Card className="shadow-corporate">
              <CardHeader>
                <CardTitle className="text-lg font-heading">Navegação</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {prevLesson && (
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link to={`/aula/${prevLesson}`}>
                      <ChevronLeft className="h-4 w-4 mr-2" />
                      Aula Anterior
                    </Link>
                  </Button>
                )}
                {nextLesson && (
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link to={`/aula/${nextLesson}`}>
                      <ChevronRight className="h-4 w-4 mr-2" />
                      Próxima Aula
                    </Link>
                  </Button>
                )}
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link to="/">
                    <Calendar className="h-4 w-4 mr-2" />
                    Voltar ao Cronograma
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Quick Info */}
            <Card className="shadow-corporate">
              <CardHeader>
                <CardTitle className="text-lg font-heading">Informações da Aula</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Data:</span>
                  <span className="font-medium">{lesson.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Horário:</span>
                  <span className="font-medium">8h30 - 9h30</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Duração:</span>
                  <span className="font-medium">1 hora</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Local:</span>
                  <span className="font-medium">SP - Hungria</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Materiais:</span>
                  <span className="font-medium">{lesson.materials.length} arquivos</span>
                </div>
              </CardContent>
            </Card>

            {/* Upload Section */}
            <Card className="shadow-corporate">
              <CardHeader>
                <CardTitle className="text-lg font-heading flex items-center gap-2">
                  <Upload className="h-5 w-5" />
                  Upload de Materiais
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Coordenadores podem adicionar materiais complementares
                </p>
                <Button variant="outline" className="w-full" disabled>
                  <Upload className="h-4 w-4 mr-2" />
                  Adicionar Arquivo
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonPage;