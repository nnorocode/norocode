const SITE_CONFIG = {
  whatsapp: "",
  email: "nnorocode@gmail.com",
  instagram: "https://www.instagram.com/norocode/",
  linkedin: "https://www.linkedin.com/company/nnorocode",
};

// Replace the demonstration content below as soon as validated numbers and cases are available.
const CONTENT_CONFIG = {
  metrics: [
    { value: "+56%", label: "ganho de eficiência" },
    { value: "+1,2k", label: "usuários impactados" },
    { value: "+32", label: "produtos em evolução" },
    { value: "+686h", label: "economizadas por mês" },
  ],
  cases: [
    {
      category: "SaaS",
      title: "Noro Clinic",
      description: "Gestão para clínicas com uma experiência pensada para organizar a operação.",
      image: "./assets/generated/noro-clinic.jpg",
    },
    {
      category: "Aplicativo",
      title: "Beauty Clinic",
      description: "Leitura e projeção visual de procedimentos estéticos com comparativo de antes e depois.",
      image: "./assets/generated/beauty-clinic.jpg",
    },
    {
      category: "Jogos",
      title: "Simulador de investimentos",
      description: "Jogo de decisões financeiras em que cada escolha de investimento produz resultados.",
      image: "./assets/generated/investment-game.jpg",
    },
    {
      category: "Aplicativo",
      title: "Busca de melhores preços",
      description: "Aplicativo para comparar produtos e encontrar as melhores oportunidades de compra.",
      image: "./assets/generated/best-price-app.jpg",
    },
    {
      category: "Aplicativo",
      title: "Aprendizado de mercado financeiro",
      description: "Aplicativo para ensinar pessoas a operarem no mercado financeiro.",
      image: "./assets/generated/market-learning-app.jpg",
    },
    {
      category: "Aplicativo",
      title: "Comparativo de pratos",
      description: "Aplicativo para comparar preços de pratos entre restaurantes.",
      image: "./assets/generated/restaurant-price-app.jpg",
    },
    {
      category: "Jogos",
      title: "Spit Snake",
      description: "Experiência arcade com ritmo rápido e identidade própria.",
      image: "./assets/generated/spit-snake.jpg",
    },
    {
      category: "Jogos",
      title: "Achando o caminho de casa",
      description: "Jogo de percurso e descoberta com desafios de navegação.",
      image: "./assets/generated/home-path-game.jpg",
    },
    {
      category: "SaaS",
      title: "Segurança do trabalho",
      description: "Plataforma SaaS voltada à organização de rotinas de segurança do trabalho.",
      image: "./assets/generated/work-safety-saas.jpg",
    },
    {
      category: "SaaS",
      title: "Marketplace de SaaS",
      description: "Vitrine para pessoas e empresas anunciarem seus SaaS em um marketplace digital.",
      image: "./assets/generated/saas-marketplace.jpg",
    },
    {
      category: "Aplicativo",
      title: "Estudo pelo WhatsApp",
      description: "Rotina de estudos com IA, acompanhamento pelo WhatsApp e histórico por aluno.",
      image: "./assets/generated/whatsapp-study-ai.jpg",
    },
    {
      category: "Jogos",
      title: "Solução de conflitos",
      description: "Jogo de estratégia para resolver trânsito, lotação urbana e desastres naturais.",
      image: "./assets/generated/conflict-resolution-game.jpg",
    },
    {
      category: "Aplicativo",
      title: "Avaliador de produtos",
      description: "Comparação inteligente com pontos positivos, negativos e veredito de compra.",
      image: "./assets/generated/product-comparison-app.jpg",
    },
    {
      category: "Software",
      title: "Conheça outros produtos",
      description: "Novas ideias, soluções e produtos digitais em evolução dentro da NORO CODE.",
      image: "./assets/generated/more-products.jpg",
      action: "Conhecer outros produtos",
    },
  ],
};

const toast = document.querySelector(".toast");
let toastTimer;

function showToast(message) {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("show");
  toastTimer = window.setTimeout(() => toast.classList.remove("show"), 4200);
}

function handleUnconfigured(event, label) {
  event.preventDefault();
  showToast(`${label} ainda não configurado. Atualize SITE_CONFIG em script.js antes da publicação.`);
}

document.querySelectorAll('[data-contact="whatsapp"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    if (!SITE_CONFIG.whatsapp) {
      handleUnconfigured(event, "WhatsApp");
      return;
    }
    event.preventDefault();
    window.open(`https://wa.me/${SITE_CONFIG.whatsapp}`, "_blank", "noopener,noreferrer");
  });
});

document.querySelectorAll(".contact-email").forEach((link) => {
  link.textContent = SITE_CONFIG.email;
  link.href = `mailto:${SITE_CONFIG.email}`;
});

document.querySelectorAll(".social-link").forEach((link) => {
  const social = link.dataset.social;
  const url = SITE_CONFIG[social];
  if (url) {
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  } else {
    link.addEventListener("click", (event) => handleUnconfigured(event, social));
  }
});

function renderMetrics() {
  const container = document.querySelector("[data-metrics]");
  container.innerHTML = CONTENT_CONFIG.metrics
    .map(
      (metric) => `
        <article class="metric-card reveal">
          <strong>${metric.value}</strong>
          <h3>${metric.label}</h3>
          ${metric.detail ? `<p>${metric.detail}</p>` : ""}
        </article>`,
    )
    .join("");
}

function renderCases() {
  const container = document.querySelector("[data-cases]");
  container.innerHTML = CONTENT_CONFIG.cases
    .map(
      (item, index) => `
        <article class="case-card reveal">
          <div class="case-visual" aria-hidden="true">
            <img src="${item.image}" alt="" loading="lazy" />
            <b>${String(index + 1).padStart(2, "0")}</b>
          </div>
          <div class="case-content">
            <p class="mini-label">${item.category}</p>
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <a class="case-action" href="${SITE_CONFIG.instagram}" target="_blank" rel="noopener noreferrer">${item.action || "Conhecer produto"} <i>↗</i></a>
          </div>
        </article>`,
    )
    .join("");
}

renderMetrics();
renderCases();

const navToggle = document.querySelector(".nav-toggle");
const navigation = document.querySelector(".site-nav");

navToggle.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

document.querySelectorAll(".vision-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".vision-tab").forEach((item) => {
      const active = item === tab;
      item.classList.toggle("active", active);
      item.setAttribute("aria-selected", String(active));
    });
    document.querySelectorAll(".vision-panel").forEach((panel) => {
      panel.classList.toggle("active", panel.dataset.vision === tab.dataset.panel);
    });
  });
});

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("visible")),
    { threshold: 0.12 },
  );
  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
} else {
  document.querySelectorAll(".reveal").forEach((element) => element.classList.add("visible"));
}
