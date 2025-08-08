const navLinks = document.querySelectorAll('.navegacao ul li a');
const sections = Array.from(navLinks).map(link => {
    const id = link.getAttribute('href').substring(1);
    return document.getElementById(id);
});

function setActiveNav(index) {
    navLinks.forEach((link, i) => {
        if (i === index) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + window.innerHeight / 3;

    let currentIndex = 0;
    for (let i = 0; i < sections.length; i++) {
        if (sections[i].offsetTop <= scrollPos) {
            currentIndex = i;
        } else {
            break;
        }
    }
    setActiveNav(currentIndex);
});

window.addEventListener('load', () => {
    setActiveNav(0);
});

const openButtons = document.querySelectorAll('.skills > div');
const skillCards = document.querySelectorAll('.cartao-skills');
const closeButtons = document.querySelectorAll('.btn-fechar');

const skillDetails = {
    HTML: [
        "Estruturação semântica de páginas (HTML5)",
        "Boas práticas de acessibilidade (WCAG)",
        "Uso correto de headings e hierarquia de conteúdo",
        "SEO on-page (meta tags, atributos alt, Open Graph)",
        "Formulários acessíveis e otimizados",
        "Integração de microdados / schema.org",
        "Performance na renderização (lazy loading, preload)"
    ],
    CSS: [
        "Layout responsivo com Flexbox e CSS Grid",
        "Criação de animações com @keyframes e transições suaves",
        "Uso de pseudo-elementos e pseudo-classes (::before, :nth-child)",
        "Mobile-first design com media queries",
        "Customização com variáveis CSS (:root)",
        "Estruturação de estilos escaláveis (BEM / ITCSS)",
        "Técnicas de otimização de performance (minificação, critical CSS)"
    ],
    JavaScript: [
        "Manipulação avançada do DOM",
        "Eventos e delegação para melhor performance",
        "Consumo de APIs REST e tratamento de JSON",
        "Programação assíncrona (async/await, Promises)",
        "ES6+ (desestruturação, spread/rest, módulos)",
        "Validação de formulários no front-end",
        "Criação de componentes reutilizáveis sem frameworks",
        "Controle de estado simples no front-end"
    ],
    "Git & GitHub": [
        "Controle de versão com Git (commit, branch, merge, rebase)",
        "Uso de tags e releases",
        "Resolução de conflitos de merge",
        "Boas práticas de mensagens de commit",
        "Pull requests e code review no GitHub",
        "Uso de Issues e Projects para organização",
        "Deploy via GitHub Pages",
        "Integração com CI/CD básico (GitHub Actions)"
    ]
};

function openCard(skillName) {
    const card = document.getElementById('cartaoSkills');
    const title = card.querySelector('h2');
    const list = card.querySelector('ul');

    title.textContent = skillName;
    list.innerHTML = '';
    skillDetails[skillName].forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
    });

    card.classList.add('ativo');
}

function closeCard() {
    document.getElementById('cartaoSkills').classList.remove('ativo');
}

openButtons.forEach(div => {
    div.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-fechar')) return;
        const skillName = div.querySelector('h2').textContent.trim();
        openCard(skillName);
    });
});

closeButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        closeCard();
    });
});

const lightLayer = document.getElementById('luz-do-mouse');
const gradienteTamanho = 200; // mesmo valor de background-size (200px)

window.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX - gradienteTamanho / 2;
  const mouseY = e.clientY - gradienteTamanho / 2;
  lightLayer.style.backgroundPosition = `${mouseX}px ${mouseY}px`;
});