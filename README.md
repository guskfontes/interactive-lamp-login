# interactive-lamp-login

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/guskfontes/interactive-lamp-login)
# 💡 Interactive Lamp Login (Data Dashboard)

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=F7DF1E)

> **Atividade 05** - Evolução Full Stack & Data Engineering.
> Uma interface de login interativa focada em UX (User Experience) e conforto visual para profissionais de dados.

![Preview do Projeto](./preview.gif)
*(Dica: Substitua isso por um print ou gif da sua tela)*

## 📋 Sobre o Projeto

Este projeto é uma implementação Frontend de uma tela de autenticação gamificada. A ideia central é transformar o ato de "fazer login" em uma interação física: o usuário precisa puxar a cordinha da lâmpada para iluminar o ambiente e revelar o formulário.

O conceito visual foi pensado para **Engenheiros de Dados** que trabalham longas horas:
* **Estado Inicial:** Ambiente escuro (Dark Mode total) para descanso visual.
* **Estado Ativo:** Iluminação controlada (Azul Naval/Ciano) que mantém o conforto ocular, evitando o clarão branco tradicional.

## 🚀 Funcionalidades

* **Interatividade Realista:** Animação CSS da cordinha com física de pêndulo (`swing`) e resposta elástica ao clique.
* **Dark/Light Mode Dinâmico:** Transição suave de cores controlada por variáveis CSS (`:root`) e JavaScript.
* **Z-Index Layering:** Manipulação avançada de camadas para garantir que o fio saia de "dentro" da lâmpada visualmente.
* **Glassmorphism:** Formulário com estilo de vidro fosco, moderno e elegante.
* **Responsividade:** Layout flexível que centraliza os elementos independente do tamanho da tela.

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estrutura semântica.
* **CSS3:** Flexbox, Keyframes Animations, CSS Variables, Transições.
* **JavaScript (Vanilla):** Manipulação de DOM e lógica de estado (Toggle Class).

## 📂 Estrutura do Código

O desafio principal foi a lógica do cabo (Switch Cord) para garantir que ele não "saísse" da lâmpada ao ser puxado. Solução aplicada:

```css
/* Trecho do CSS */
.switch-cord {
    position: absolute;
    top: 50px; /* Escondido dentro da cúpula */
    z-index: 5; /* Atrás da cúpula (z-index 20) */
    /* ... */
}

.cord-line {
    height: 250px; /* Comprimento extra para suportar a animação */
}