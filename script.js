const sections = Array.from(document.querySelectorAll(".page-section"));
const navigationLinks = Array.from(document.querySelectorAll(".nav-links a"));
const internalLinks = Array.from(document.querySelectorAll('a[href^="#"]'));
const experienceYears = document.getElementById("experience-years");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const careerStartDate = new Date(2024, 2);
const currentDate = new Date();
const totalMonths = (currentDate.getFullYear() - careerStartDate.getFullYear()) * 12
    + currentDate.getMonth() - careerStartDate.getMonth();
const elapsedMonths = Math.max(totalMonths, 0);

if (experienceYears) {
    experienceYears.textContent = `${Math.floor(elapsedMonths / 12)} yrs ${elapsedMonths % 12} mos`;
}

function showView(viewId) {
    const activeSection = sections.find(section => section.id === viewId);

    if (!activeSection) {
        return;
    }

    sections.forEach(section => {
        section.hidden = section !== activeSection;
    });

    navigationLinks.forEach(link => {
        if (link.getAttribute("href") === `#${viewId}`) {
            link.setAttribute("aria-current", "page");
        } else {
            link.removeAttribute("aria-current");
        }
    });

    const title = activeSection.querySelector("h1");
    document.title = activeSection.id === "home"
        ? "Adarsh K. | Full Stack Developer - Fintech & Accessibility"
        : `${title ? title.textContent : "Portfolio"} | Adarsh K.`;

    activeSection.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "start"
    });
}

internalLinks.forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault();
        showView(link.getAttribute("href").slice(1));
    });
});

showView("home");
