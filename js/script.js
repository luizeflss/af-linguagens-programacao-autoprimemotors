/*
Projeto: AutoPrime Motors
Disciplina: Linguagens de Programação
Professor: Abimael de Oliveira
Alunos: Luiz Eduardo Ferreira Lopes Silva (RA: 250695) e Luan Gomes Marques (RA: 251501)
Data de Entrega: 07/06/2026
*/

document.addEventListener('DOMContentLoaded', () => {

    /* =========================================================================
       FUNCIONALIDADE 1: Botão Voltar ao Topo com Scroll Suave
       ========================================================================= */
    const btnTop = document.getElementById("btnTop");

    if (btnTop) {
        // Mostra o botão ao rolar a página para baixo
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                btnTop.style.display = "block";
            } else {
                btnTop.style.display = "none";
            }
        });

        // Rola suavemente para o topo ao clicar
        btnTop.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }


    /* =========================================================================
       FUNCIONALIDADE 2: Destaque Visual/Hover Dinâmico nos Cards via JS
       ========================================================================= */
    const cards = document.querySelectorAll('.js-card-hover');

    cards.forEach(card => {
        // Quando o mouse entra no card, aplica a classe de borda vermelha do CSS
        card.addEventListener('mouseenter', () => {
            card.classList.add('js-highlight-active');
        });

        // Quando o mouse sai, remove a classe
        card.addEventListener('mouseleave', () => {
            card.classList.remove('js-highlight-active');
        });
    });


    /* =========================================================================
       FUNCIONALIDADE 3: Validação Customizada do Formulário de Contato
       ========================================================================= */
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            
            // Pega todos os inputs exigidos dentro do form
            const inputs = contactForm.querySelectorAll('input[required], select[required], textarea[required]');
            let formValid = true;

            // Varre campo por campo verificando se está apenas com espaços ou vazio
            inputs.forEach(input => {
                if (input.value.trim() === '') {
                    formValid = false;
                    // Adiciona classe de erro visual do Bootstrap nativo
                    input.classList.add('is-invalid'); 
                } else {
                    input.classList.remove('is-invalid');
                    input.classList.add('is-valid');
                }
            });

            // Previne o envio padrão caso haja campos vazios
            if (!formValid) {
                event.preventDefault();
                alert('Por favor, preencha todos os campos obrigatórios corretamente.');
            } else {
                // Alerta de sucesso apenas para demonstração didática
                event.preventDefault(); // Retirar em produção para o backend processar
                alert('Formulário enviado com sucesso! A equipe AutoPrime entrará em contato.');
                contactForm.reset();
                
                // Limpa as classes de validação após sucesso
                inputs.forEach(i => i.classList.remove('is-valid'));
            }
        });

        // Remove a borda vermelha assim que o usuário começa a digitar
        contactForm.querySelectorAll('input, select, textarea').forEach(input => {
            input.addEventListener('input', () => {
                if(input.value.trim() !== '') {
                    input.classList.remove('is-invalid');
                }
            });
        });
    }
});