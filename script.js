// Mobile Menu Toggle
const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const mobileMenu = document.getElementById("mobileMenu");
const navbar = document.getElementById("navbar");

openMenu.addEventListener("click", () => {
    mobileMenu.classList.remove("-translate-x-full");
    document.body.classList.add("overflow-hidden");
    navbar.classList.remove("backdrop-blur");
});

closeMenu.addEventListener("click", () => {
    mobileMenu.classList.add("-translate-x-full");
    document.body.classList.remove("overflow-hidden");
    navbar.classList.add("backdrop-blur");
});

// Theme Toggle
const themeToggle = document.getElementById("themeToggle");
const logo = document.getElementById("logo");
const colorSplash = document.getElementById("colorSplash");
const faqSplash = document.getElementById("faqSplash");
const landingText = document.getElementById("landing-text");
const logoFooter = document.getElementById("logo-footer");

themeToggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
    if (document.documentElement.classList.contains("dark")) {
        logo.src = "./assets/logo-light.svg";
        themeToggle.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon-icon lucide-moon"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/></svg>`;
        colorSplash.src = "./assets/color-splash.svg";
        faqSplash.src = "./assets/color-splash.svg";
        landingText.src = "./assets/landing-text-dark.svg";
        logoFooter.src = "./assets/logo-light.svg";
    } else {
        logo.src = "./assets/logo-dark.svg";
        themeToggle.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-icon lucide-sun"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`;
        colorSplash.src = "./assets/color-splash-light.svg";
        faqSplash.src = "./assets/color-splash-light.svg";
        landingText.src = "./assets/landing-text-light.svg";
        logoFooter.src = "./assets/logo-dark.svg";
    }
});

const logos = ["framer", "huawei", "instagram", "microsoft", "walmart"];
const track = document.getElementById("logo-track");

track.innerHTML = [...logos, ...logos].map((name) => `<img class="mx-11" src="./assets/companies-logo/${name}.svg" alt="${name.charAt(0).toUpperCase() + name.slice(1)}" width="100" height="100" draggable="false"/>`).join("");



const featuresData = [
    {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="text-purple-500 size-8 mt-4"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>`,
        title: "Android Development",
        description: "Building modern, reactive apps with Kotlin and Jetpack Compose for superior performance.",
    },
    {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="text-purple-500 size-8 mt-4"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>`,
        title: "Laravel & PHP",
        description: "Crafting robust backend systems and APIs using the power of Laravel and PHP.",
    },
    {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="text-purple-500 size-8 mt-4"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>`,
        title: "Python & Django",
        description: "Developing scalable web applications and data solutions with Django and Python.",
    },
    {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="text-purple-500 size-8 mt-4"><path d="M20 7h-9m3.3-3L11 7l3.3 3M4 17h9m-3.3-3L13 17l-3.3 3"/></svg>`,
        title: "Javascript Ecosystem",
        description: "Creating interactive frontends and real-time features with modern JS frameworks.",
    },
];

const features = document.getElementById("features");
features.innerHTML = featuresData.map((feature) => `<div class="p-6 rounded-xl space-y-3 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/20 max-w-80 md:max-w-66">
            ${feature.icon}
            <h3 class="text-base font-medium">${feature.title}</h3>
            <p class="text-slate-400 line-clamp-2">${feature.description}</p>
        </div>`).join("");

// Project Showcase Data
const projectsData = [
    {
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1000",
        title: "ZenFit Android App",
        category: "Android / Kotlin / Jetpack Compose",
        description: "A premium fitness tracking experience with reactive UI, real-time health metrics, and local data persistence."
    },
    {
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000",
        title: "LaraCommerce Platform",
        category: "Web / Laravel / PHP",
        description: "A robust e-commerce engine featuring automated inventory, stripe integration, and a sleek admin dashboard."
    },
    {
        image: "https://images.unsplash.com/photo-1551288049-bbda38a5f850?q=80&w=1000",
        title: "PyInsights Analytics",
        category: "Web / Django / Python",
        description: "Real-time business intelligence dashboard with custom data visualizations and advanced reporting capabilities."
    }
];

const projectShowcase = document.getElementById("project-showcase");
projectShowcase.innerHTML = projectsData.map(project => `
    <div class="group relative overflow-hidden rounded-2xl bg-white dark:bg-[#0F172A]/40 border border-slate-200 dark:border-slate-800 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(146,63,239,0.15)] max-w-sm">
        <div class="aspect-video w-full overflow-hidden relative">
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-end p-6">
                 <p class="text-white text-sm font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">View Project Details</p>
            </div>
            <img src="${project.image}" alt="${project.title}" class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
        </div>
        <div class="p-8">
            <div class="flex items-center gap-2 mb-3">
                <span class="px-2 py-1 rounded bg-purple-100 dark:bg-purple-900/30 text-[10px] font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-purple-800/50">${project.category}</span>
            </div>
            <h3 class="text-xl font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">${project.title}</h3>
            <p class="mt-3 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">${project.description}</p>
            <div class="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
               <button class="text-sm font-semibold text-slate-900 dark:text-slate-200 hover:text-purple-600 dark:hover:text-purple-400 transition flex items-center gap-2 group/btn">
                 Explore Case Study
                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transform group-hover/btn:translate-x-1 transition-transform"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
               </button>
            </div>
        </div>
    </div>
`).join("");


const pricingData = [
    {
        title: "Basic Plan",
        price: 29,
        features: [
            "5 Projects",
            "10 GB Storage",
            "Basic Support",
            "Community Access",
            "Basic code review",
        ],
        buttonText: "Get Started",
    },
    {
        title: "Pro Plan",
        price: 79,
        mostPopular: true,
        features: [
            "50 Projects",
            "100 GB Storage",
            "Priority Support",
            "Team Collaboration",
            "Advanced Analytics",
            "Premium Code Review",
        ],
        buttonText: "Upgrade Now",
    },
    {
        title: "Enterprise Plan",
        price: 149,
        features: [
            "Unlimited Projects",
            "1 TB Storage",
            "24/7 Dedicated Support",
            "Custom Integrations",
            "SLA Guarantee",
        ],
        buttonText: "Contact Sales",
    },
];

const pricingContainer = document.getElementById("pricing");

pricingContainer.innerHTML = pricingData.map(plan => `
      <div class="p-6 rounded-2xl max-w-75 w-full shadow-[0px_4px_26px] shadow-black/6 
        ${plan.mostPopular
        ? "relative pt-12 bg-gradient-to-b from-indigo-600 to-violet-600 text-white"
        : "bg-white/50 dark:bg-gray-800/50 border border-slate-200 dark:border-slate-800"}">

        ${plan.mostPopular
        ? `<div class="flex items-center text-xs gap-1 py-1.5 px-2 text-purple-600 absolute top-4 right-4 rounded bg-white font-medium">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sparkles-icon lucide-sparkles"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"/><path d="M20 2v4"/><path d="M22 4h-4"/><circle cx="4" cy="20" r="2"/></svg>
              <p>Most Popular</p>
            </div>`
        : ""}

        <p class="font-medium ${plan.mostPopular ? "text-white" : ""}">${plan.title}</p>
        <h4 class="text-3xl font-semibold mt-1 ${plan.mostPopular ? "text-white" : ""}">
          $${plan.price}<span class="font-normal text-sm ${plan.mostPopular ? "text-white" : "text-slate-300"}">/mo</span>
        </h4>

        <hr class="my-8 ${plan.mostPopular ? "border-gray-300" : "border-slate-300 dark:border-slate-700"}" />

        <div class="space-y-2 ${plan.mostPopular ? "text-white" : "text-slate-600 dark:text-slate-300"}">
          ${plan.features.map(f => `
            <div class="flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${plan.mostPopular ? "text-white" : "text-purple-600"}"><path d="M20 6 9 17l-5-5"/></svg>
              <span>${f}</span>
            </div>
          `).join("")}
        </div>

        <button class="transition w-full py-3 rounded-lg font-medium mt-8 
          ${plan.mostPopular
        ? "bg-white hover:bg-slate-100 text-slate-800"
        : "bg-purple-600 hover:bg-purple-700 text-white"}">
          ${plan.buttonText}
        </button>
      </div>
    `).join("");

// FAQ Data
const faqsData = [
    {
        question: "What is this SaaS app used for?",
        answer: "This app helps businesses manage their workflows more efficiently by automating tasks, tracking performance, and integrating with third-party tools."
    },
    {
        question: "Is there a free trial available?",
        answer: "Yes, we offer a 14-day free trial with full access to all features. No credit card is required to start the trial."
    },
    {
        question: "Can I change my subscription plan later?",
        answer: "Absolutely! You can upgrade or downgrade your plan at any time from your account settings."
    },
    {
        question: "How is my data secured?",
        answer: "We use industry-standard encryption, regular security audits, and secure data centers to ensure your data is safe and protected."
    },
    {
        question: "Do you offer customer support?",
        answer: "Yes, our support team is available 24/7 via live chat and email. We also have a help center with detailed documentation and tutorials."
    }
];

const faqContainer = document.getElementById("faq-container");

faqContainer.innerHTML = faqsData.map((faq, index) => `
      <div class="border-b border-slate-300 dark:border-purple-900 py-4 cursor-pointer w-full" data-index="${index}">
        <div class="flex items-center justify-between">
          <h3 class="text-base font-medium">${faq.question}</h3>
          <!-- ChevronDown icon placeholder -->
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 transition-transform duration-500 ease-in-out" data-chevron><path d="m6 9 6 6 6-6"/></svg>
        </div>
        <p class="faq-answer text-sm text-slate-600 dark:text-slate-300 transition-all duration-500 ease-in-out max-w-xl opacity-0 max-h-0 overflow-hidden -translate-y-2">
          ${faq.answer}
        </p>
      </div>
    `).join("");

// Accordion Logic
const faqItems = document.querySelectorAll("#faq-container > div");

faqItems.forEach(item => {
    const chevron = item.querySelector("[data-chevron]");
    const answer = item.querySelector(".faq-answer");

    item.addEventListener("click", () => {
        const isOpen = answer.classList.contains("opacity-100");

        // Close all
        faqItems.forEach(i => {
            i.querySelector(".faq-answer").classList.remove("opacity-100", "max-h-[500px]", "translate-y-0", "pt-4");
            i.querySelector(".faq-answer").classList.add("opacity-0", "max-h-0", "-translate-y-2");
            i.querySelector("[data-chevron]").classList.remove("rotate-180");
        });

        // Toggle current
        if (!isOpen) {
            answer.classList.add("opacity-100", "max-h-[500px]", "translate-y-0", "pt-4");
            answer.classList.remove("opacity-0", "max-h-0", "-translate-y-2");
            chevron.classList.add("rotate-180");
        }
    });
});