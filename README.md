# AutoPrime Motors - Avaliação Final (Linguagens de Programação)

Projeto acadêmico desenvolvido como requisito de Avaliação Final para a disciplina de Linguagens de Programação, focado em desenvolvimento web front-end semântico, seguro, moderno e responsivo.

## 👥 Metadados do Projeto
- **Instituição:** Facens
- **Disciplina:** Linguagens de Programação
- **Professor:** Abimael de Oliveira
- **Tema:** Carros e Performance Automotiva
- **Integrantes:** - Luiz Eduardo Ferreira Lopes Silva (RA: 250695)
  - Luan Gomes Marques (RA: 251501)
- **Data de Entrega:** 07/06/2026

## 🌐 Páginas do Projeto
O site é composto por três páginas conectadas entre si:
1. `index.html`: Home com carrossel dinâmico otimizado, apresentação da empresa e cards de serviços em destaque.
2. `galeria.html`: Layout grid listando modelos do acervo e projetos de customização.
3. `contato.html`: Formulário de contato estruturado com validação nativa/customizada e integração de iframe seguro do Google Maps.

## 🛠️ Tecnologias e Boas Práticas Utilizadas
- **HTML5 (Semântica e Acessibilidade):** Estruturação rigorosa com tags semânticas, uso de atributos ARIA para leitores de tela em menus responsivos e atributos `title` descritivos em iframes.
- **CSS3:** Estilização própria em arquivo único externo, uso de variáveis globais (`:root`), Flexbox avançado para rodapés e seções, e efeítos visuais interativos (Transform/Hover).
- **Bootstrap 5.3.3:** Framework base para responsividade (Grid layout), Navbar, botões e Carrossel.
- **Segurança Front-end:** Implementação de SRI (Subresource Integrity) com hashes criptográficos na importação do Bootstrap (CSS e JS) via CDN, prevenindo injeções de código malicioso.
- **JavaScript (ES6):** Manipulação de DOM externa limpa e escalável, substituindo a sobrescrita de eventos (`onscroll`) pelo uso moderno do `addEventListener`.

## ⚙️ Funcionalidades JS Implementadas
- **Botão Voltar ao Topo:** Identifica o evento de scroll vertical da página e exibe dinamicamente o botão para retorno suave.
- **Destaque Visual Dinâmico:** Escuta de eventos `mouseenter` e `mouseleave` manipulando o `classList` de elementos específicos (Cards).
- **Validação de Formulário:** Interceptação do evento `submit` bloqueando comportamentos padrão (`preventDefault`) se inputs obrigatórios estiverem vazios ou preenchidos com espaços em branco.

## 📦 Padrão de Versionamento (Git)
Este projeto adota a prática de **Commits Atômicos** e segue o padrão **Conventional Commits** para garantir um histórico limpo e rastreável. 

**Últimas melhorias registradas:**
- `style(css): adiciona controle de altura do carrossel e flexbox na secao about`
- `fix(html): corrige integridade do bootstrap, acessibilidade e iframe do mapa`
- `refactor(js): atualiza evento onscroll para addEventListener`

---

> **🔗 Link do Repositório:** `https://github.com/luizeflss/af-linguagens-programacao-autoprimemotors`