# Jordan Shoes CodeLab

Um projeto de showcase de tênis Jordan desenvolvido com Next.js para aprendizado e experimentação.

## Tecnologias

- **Next.js 15** - Framework React
- **React 19** - Biblioteca para interfaces
- **TypeScript** - Tipagem estática
- **Jest** - Testes unitários
- **Cypress** - Testes end-to-end

## Pré-requisitos

- Node.js 20+
- npm

## Instalação e uso

```bash
# Clone o repositório
git clone https://github.com/lucasrodriguescunha/jordan-shoes-codelab.git

# Entre no diretório
cd jordan-shoes-codelab

# Instale as dependências
npm install

# Execute em desenvolvimento
npm run dev
```

Acesse http://localhost:3000 para ver o resultado.

## Scripts disponíveis

```bash
npm run dev              # Servidor de desenvolvimento (com Turbopack)
npm run build            # Build para produção  
npm start                # Servidor de produção
npm test                 # Executar testes unitários
npm run test:watch       # Testes em modo watch
npm run test:coverage    # Testes com cobertura
npm run lint             # Verificar código
npm run cypress:open     # Abrir Cypress interativo
npm run cypress:run      # Executar testes E2E
npm run e2e              # Executar testes E2E completos
```

## Estrutura

```
├── app/           # Páginas e layouts (App Router)
├── components/    # Componentes React reutilizáveis
├── public/        # Arquivos estáticos (imagens, ícones)
├── __tests__/     # Testes unitários
├── cypress/       # Testes end-to-end
└── types/         # Definições de tipos TypeScript
```

Desenvolvido com ❤️ por Lucas Rodrigues Cunha
