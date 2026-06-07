# AutoPrime Motors - Avaliação Final (Linguagens de Programação)

Projeto acadêmico desenvolvido como requisito de Avaliação Final para a disciplina de Linguagens de Programação, focado em desenvolvimento web front-end semântico, moderno e responsivo.

##  Metadados do Projeto
- **Instituição:** Facens
- **Disciplina:** Linguagens de Programação
- **Professor:** Abimael de Oliveira
- **Tema:** Carros e Performance Automotiva
- **Integrantes:** - Luiz Eduardo Ferreira Lopes Silva (RA: 250695)
  - Luan Gomes Marques (RA: 251501)
- **Data de Entrega:** 07/06/2026

##  Páginas do Projeto
O site é composto por três páginas conectadas entre si:
1. `index.html`: Home com carrossel dinâmico, apresentação da empresa e cards de serviços em destaque.
2. `galeria.html`: Layout grid listando modelos do acervo e projetos de customização.
3. `contato.html`: Formulário de contato estruturado com validação nativa/customizada e integração de iframe do Google Maps.

##  Tecnologias Utilizadas
- **HTML5:** Utilização rigorosa de estruturação semântica.
- **CSS3:** Estilização própria em arquivo único externo, uso de variáveis globais (`:root`), Flexbox em múltiplos contêineres e efeítos visuais interativos (Transform/Hover).
- **Bootstrap 5.3.3:** Framework base para responsividade avançada (Grid layout), Navbar, botões e Carrossel.
- **JavaScript (ES6):** Manipulação de DOM externa para funcionalidades de interatividade do usuário e dupla camada de validação em formulários.

##  Funcionalidades JS Implementadas
- **Botão Voltar ao Topo:** Identifica o evento de scroll vertical da página e exibe dinamicamente o botão para retorno suave.
- **Destaque Visual Dinâmico:** Escuta de eventos `mouseenter` e `mouseleave` manipulando o `classList` de elementos específicos (Cards).
- **Validação de Formulário:** Interceptação do evento `submit` bloqueando comportamentos padrão (`preventDefault`) se inputs obrigatórios estiverem vazios ou preenchidos com espaços em branco.

---

> **Link do Repositório:** `https://github.com/luizeflss/af-linguagens-programacao-autoprimemotors`