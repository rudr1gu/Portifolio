# 💼 Portfólio Pessoal - Rudr1gu

[![GitHub followers](https://img.shields.io/github/followers/rudr1gu?style=social)](https://github.com/rudr1gu)
[![GitHub stars](https://img.shields.io/github/stars/rudr1gu?style=social)](https://github.com/rudr1gu)

Um portfólio pessoal moderno e responsivo construído com **React**, **TypeScript**, **Tailwind CSS** e **Vite**. Apresenta informações profissionais, habilidades técnicas, projetos destacados e formas de contato.

## 🎯 Sobre o Projeto

Este é um portfólio pessoal de um **Software Engineer Analyst** que demonstra competências em desenvolvimento full-stack. A aplicação oferece uma experiência visual atraente com:

- ✨ Design moderno e responsivo
- 🌙 Suporte a tema claro/escuro
- 📱 Totalmente otimizado para dispositivos móveis
- ⚡ Performance otimizada com Vite
- 🎨 Animações suaves com Framer Motion
- 🔒 Tipo-seguro com TypeScript

## 🚀 Tecnologias Utilizadas

### Frontend
- **React** ^18.3.1 - Biblioteca JavaScript para construção de interfaces
- **TypeScript** ^5.5.3 - Superset de JavaScript com tipagem estática
- **Tailwind CSS** ^3.4.1 - Framework CSS utilitário
- **Vite** ^5.4.2 - Build tool rápido
- **Framer Motion** ^12.4.1 - Biblioteca de animações
- **React Icons** ^5.4.0 - Conjunto de ícones React
- **Lucide React** ^0.344.0 - Ícones minimalistas

### DevOps & Build
- **ESLint** ^9.9.1 - Linter para manter código consistente
- **PostCSS** ^8.4.35 - Transformador de CSS
- **Autoprefixer** ^10.4.18 - Adiciona prefixos de vendor ao CSS

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── about/                 # Seção Sobre
│   │   └── About.tsx
│   │   └── modalabout/
│   │       └── ModalAbout.tsx
│   ├── contact/               # Seção Contato
│   │   └── Contact.tsx
│   ├── footer/                # Rodapé
│   │   └── Footer.tsx
│   ├── home/                  # Seção Hero/Início
│   │   └── Home.tsx
│   ├── navbar/                # Barra de Navegação
│   │   └── Navbar.tsx
│   ├── project/               # Seção Projetos
│   │   ├── Project.tsx
│   │   ├── Projects.ts        # Dados dos projetos
│   │   └── projectcard/
│   │       └── ProjectCard.tsx
│   └── skill/                 # Seção Habilidades
│       ├── Skill.tsx
│       ├── skillsData.tsx     # Dados das habilidades
│       └── skillcard/
│           └── SkillCard.tsx
├── context/
│   └── ThemeContext.tsx       # Context para tema claro/escuro
├── App.tsx                    # Componente raiz
├── main.tsx                   # Ponto de entrada
└── index.css                  # Estilos globais
```

## 🎨 Componentes Principais

### 1. **Home (Hero Section)**
- Apresentação visual impressionante com background dinâmico
- Links para redes sociais (GitHub, LinkedIn, Instagram)
- Gradiente atrativo com imagem de fundo

### 2. **Navbar**
- Navegação fixa e responsiva
- Menu hambúrguer para dispositivos móveis
- Botão de alternância de tema (claro/escuro)
- Scroll suave entre seções

### 3. **About (Sobre)**
- Informações pessoais
- Modal interativo para mais detalhes

### 4. **Skill (Habilidades)**
- Organizada em categorias:
  - **Frontend**: TypeScript, ReactJS, Angular, Tailwind, Bootstrap
  - **Backend**: Java, Spring Boot, Node.js, AdonisJS, PHP, Laravel
  - **Banco de Dados**: MySQL, SQLite, PostgreSQL, Firebase, MongoDB
  - **DevOps & Deploy**: Azure, Vercel, Render, Netlify

### 5. **Project (Projetos)**
Apresenta 6 projetos principais:

- **Conectados** - Rede colaborativa com sistema gamificado (Angular, Node.js, MySQL, Azure, Vercel, PWA)
- **Calculadora de Materiais Drywall** - Ferramenta de cálculo (HTML, CSS, JavaScript)
- **Blog Pessoal** - Projeto de aprendizado com Spring Boot (Java, Spring Boot, React, Tailwind, Swagger, JUnit)
- **AikiFome Delivery** - Projeto integrador com Scrum (Java, Spring Boot, React, Tailwind, Swagger, JUnit)
- **Quiz Educativo** - Aplicação interativa para feira tecnológica (JavaScript, HTML, CSS)
- **API Bing Maps** - Consulta de geolocalização com PWA (PWA, HTML, CSS, JavaScript)

### 6. **Contact (Contato)**
- Formulário de contato
- Links de comunicação

### 7. **Footer**
- Informações finais
- Links de navegação

### 8. **Theme Context**
- Sistema de tema claro/escuro
- Persiste a preferência do usuário no localStorage
- Aplicado globalmente em toda a aplicação

## 🛠️ Configuração e Instalação

### Pré-requisitos
- Node.js 16.x ou superior
- npm ou yarn

### Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/rudr1gu/portifolio-pessoal.git
cd Portifolio
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute o servidor de desenvolvimento**
```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`

## 📦 Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Constrói a aplicação para produção |
| `npm run lint` | Verifica erros de linting com ESLint |
| `npm run preview` | Prévia da build de produção |

### Deploy no Vercel

```bash
npm install -g vercel
vercel
```

### Build para Produção

```bash
npm run build
```

Os arquivos otimizados estarão na pasta `dist/`

## 🎨 Personalizações

### Tailwind CSS
Configuração em `tailwind.config.js` para customizar cores, fonts e breakpoints.

### Vite Config
Arquivo `vite.config.ts` otimizado com:
- Plugin React
- Otimização de dependências (lucide-react excluído)

### ESLint
Configuração em `eslint.config.js` para manter consistência de código

## 🔧 Desenvolvimento

### Convenções de Código

- **Componentes**: PascalCase (ex: `Home.tsx`)
- **Arquivos de dados**: camelCase (ex: `skillsData.tsx`)
- **Pastas**: lowercase (ex: `components/`)
- **CSS**: Tailwind CSS classes
- **TypeScript**: Tipagem forte em todos os componentes

### Adicionar Novos Componentes

1. Crie a pasta em `src/components/`
2. Crie o arquivo `.tsx` com o componente
3. Exporte como componente padrão
4. Importe e use em `App.tsx` ou em outro componente

## 📱 Responsividade

A aplicação utiliza breakpoints do Tailwind CSS:
- `md:` - 768px (tablets)
- `lg:` - 1024px (desktops)
- Mobile-first approach

## 🌙 Tema Escuro/Claro

Sistema implementado via React Context:
- Detecta preferência do sistema
- Permite alternância manual via botão
- Persiste escolha do usuário
- Aplicável globalmente com classe `dark`

## 🔐 Segurança

- TypeScript para tipagem segura
- React em modo StrictMode
- Sem dependências vulneráveis
- Código otimizado e minificado em produção

## 📊 Performance

- Vite para build rápido
- Lazy loading de componentes possível
- Otimização de imagens
- Code splitting automático

## 🤝 Contribuições

Este é um projeto pessoal, mas fique livre para fazer fork e adaptá-lo para seu próprio portfólio!

## 📞 Contato

- **GitHub**: [github.com/rudr1gu](https://github.com/rudr1gu)
- **LinkedIn**: [linkedin.com/in/rudr1gu](https://linkedin.com/in/rudr1gu)
- **Instagram**: [@rudr1gu](https://instagram.com/rudr1gu)

## 📄 Licença

Este projeto é de uso pessoal. Sinta-se livre para usar como inspiração para seu próprio portfólio.

---

Desenvolvido com ❤️ por **Rudr1gu** - Software Engineer Analyst
