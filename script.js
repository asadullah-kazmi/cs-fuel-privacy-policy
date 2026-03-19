const navToggle = document.querySelector(".nav-toggle");
const navList = document.querySelector("#nav-list");
const navLinks = [...document.querySelectorAll("#nav-list a")];
const reveals = [...document.querySelectorAll(".reveal")];
const reducedMotionQuery = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
);
let reducedMotion = reducedMotionQuery.matches;

const yearEl = document.querySelector("#year");
const effectiveDateEl = document.querySelector("#effective-date");

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (effectiveDateEl && effectiveDateEl.textContent.trim() === "") {
  effectiveDateEl.textContent = "EFFECTIVE_DATE";
}

if (navToggle && navList) {
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    navList.classList.toggle("open");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navToggle.setAttribute("aria-expanded", "false");
      navList.classList.remove("open");
    });
  });

  document.addEventListener("click", (event) => {
    if (!navList.classList.contains("open")) {
      return;
    }

    const target = event.target;
    if (!(target instanceof Node)) {
      return;
    }

    if (!navList.contains(target) && !navToggle.contains(target)) {
      navToggle.setAttribute("aria-expanded", "false");
      navList.classList.remove("open");
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navList.classList.contains("open")) {
      navToggle.setAttribute("aria-expanded", "false");
      navList.classList.remove("open");
      navToggle.focus();
    }
  });
}

const setActiveNavLink = () => {
  const scrollY = window.scrollY + 140;
  let currentSectionId = "";

  const sections = [...document.querySelectorAll("article.policy-card[id]")];
  for (const section of sections) {
    if (section.offsetTop <= scrollY) {
      currentSectionId = section.id;
    }
  }

  navLinks.forEach((link) => {
    const href = link.getAttribute("href") || "";
    const isActive = currentSectionId && href === `#${currentSectionId}`;
    link.classList.toggle("active", Boolean(isActive));
    if (isActive) {
      link.setAttribute("aria-current", "location");
      if (!navList.classList.contains("open")) {
        link.scrollIntoView({ inline: "nearest", block: "nearest" });
      }
    } else {
      link.removeAttribute("aria-current");
    }
  });
};

if (typeof reducedMotionQuery.addEventListener === "function") {
  reducedMotionQuery.addEventListener("change", (event) => {
    reducedMotion = event.matches;
    if (reducedMotion) {
      reveals.forEach((node) => node.classList.add("is-visible"));
    }
  });
}

if (reducedMotion) {
  reveals.forEach((node) => node.classList.add("is-visible"));
} else if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px",
    },
  );

  reveals.forEach((node, index) => {
    node.style.transitionDelay = `${Math.min(index * 45, 280)}ms`;
    observer.observe(node);
  });
} else {
  reveals.forEach((node) => node.classList.add("is-visible"));
}

window.addEventListener("scroll", setActiveNavLink, { passive: true });
window.addEventListener("load", setActiveNavLink);
window.addEventListener("resize", setActiveNavLink);
