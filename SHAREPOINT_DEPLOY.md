# Guia de Deploy para SharePoint Online

## Configuração Atual
O projeto está configurado para gerar um arquivo HTML único com todos os assets inline, compatível com SharePoint Online.

## Estrutura de Materiais
O projeto inclui uma pasta `public/materiais/` com subpastas para cada aula:
- `public/materiais/aula-01/` - Panorama Geral e Diretrizes
- `public/materiais/aula-02/` - Transações Controladas
- `public/materiais/aula-03/` - Métodos e Ajustes
- `public/materiais/aula-04/` - Commodities
- `public/materiais/aula-05/` - Obrigações Acessórias
- `public/materiais/aula-06/` - Reorganizações Societárias
- `public/materiais/aula-07/` - Intangíveis e Serviços
- `public/materiais/aula-08/` - Ruling e Perspectivas

**Importante**: Após o build, a pasta `dist/materiais/` deve ser enviada junto com o `index.html` para o SharePoint.

## Passos para Deploy

### 1. Gerar Build para SharePoint
```bash
npm run build
```

### 2. Localizar Arquivos
Após o build, você encontrará na pasta `dist/`:
- `index.html` - Arquivo principal com tudo inline
- `materiais/` - Pasta com todos os materiais de apoio das aulas
- **Ambos são necessários para funcionamento completo!**

### 3. Upload para SharePoint

#### Opção A: Biblioteca de Documentos (Atual)
1. Acesse sua biblioteca de documentos no SharePoint
2. Faça upload do `index.html`
3. Faça upload da pasta `materiais/` completa (mantenha a estrutura de subpastas)
4. Clique com botão direito no arquivo `index.html` → "Copiar link"
5. Use o link direto para acessar

#### Opção B: Páginas do Site (Recomendado)
1. Vá em "Páginas do Site" no seu site SharePoint
2. Clique em "Nova" → "Página"
3. Adicione uma Web Part "Incorporar"
4. Cole o código HTML do arquivo `index.html`

#### Opção C: Site Pages com Upload
1. Acesse "Site Contents" → "Site Pages"
2. Upload do arquivo `index.html`
3. Acesse via URL: `https://seusite.sharepoint.com/SitePages/index.html`

### 4. Configurações de Segurança

Se ainda não funcionar, peça ao administrador para:

1. **Permitir Scripts Personalizados**:
   ```
   Set-SPOSite -Identity https://seusite.sharepoint.com -DenyAddAndCustomizePages $false
   ```

2. **Configurar CSP (Content Security Policy)**:
   - Adicionar exceções para inline scripts/styles

### 5. Teste
- Abra o link em uma nova aba anônima
- Verifique se não há erros no console (F12)

## Troubleshooting

### Página em Branco
- Verifique se JavaScript está habilitado
- Teste em navegador diferente
- Abra F12 e veja erros no console

### Erro 403/404
- Verifique permissões da biblioteca
- Tente a Opção B (Web Part Incorporar)

### Scripts Bloqueados
- Use a Opção B (Web Part)
- Peça para admin habilitar scripts customizados

## Links Úteis
- [Configurar scripts customizados no SharePoint](https://docs.microsoft.com/en-us/sharepoint/allow-or-prevent-custom-script)
- [Web Parts do SharePoint](https://support.microsoft.com/en-us/office/use-the-embed-web-part-721f3b2f-437f-45b5-9f62-29b7dd44410b)