"use client"

import { useEffect, type CSSProperties } from "react"
import Image from "next/image"
import { useLang } from "@/lib/language-context"

const linkStyle: CSSProperties = {
  color: "var(--accent)",
  textDecoration: "none",
  fontFamily: "var(--syne)",
  fontSize: "0.85rem",
  textTransform: "uppercase",
  fontWeight: 600,
}

const navStyle: CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  width: "100%",
  zIndex: 100,
  padding: "12px 20px",
  backgroundColor: "#0e0e0e",
  mixBlendMode: "normal",
}

const navInnerStyle: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  maxWidth: "1400px",
  margin: "0 auto",
  gap: "8px",
}

const t = {
  es: {
    nav: ["TRABAJOS", "SOBRE MÍ", "CONTACTO"],
    heroSub: "Desarrollador Full Stack · React · TypeScript · Node.js",
    aboutHeadline: "DESARROLLADOR FULL STACK ORIENTADO A CREAR EXPERIENCIAS QUE IMPORTAN.",
    aboutText:
      "Desarrollador Full Stack con experiencia en frontend y backend. Trabajo con React, TypeScript, Node.js y NestJS para crear aplicaciones seguras, mantenibles y centradas en el usuario. Conocimientos en ciberseguridad aplicados al desarrollo. Concepción, Chile.",
    marquee: "REACT — TYPESCRIPT — NODE.JS — NESTJS — TAILWIND — POSTGRESQL — PYTHON — GIT —",
    archive: "ARCHIVE",
    skillsTitle1: "HABILIDADES",
    skillsTitle2: "TÉCNICAS",
    skillsText:
      "JavaScript · TypeScript · React · Angular · Node.js · NestJS · Python · Django · PostgreSQL · MySQL · Tailwind · Git. Ingeniería en Informática — Duoc UC. Certificado en Ciberseguridad — Cisco.",
    cta: "HABLEMOS — YA",
    location: "CONCEPCIÓN, CHILE // DISPONIBLE PARA PROYECTOS",
    year: "AÑO",
    private: "PRIVADO",
    demo: "DEMO",
    code: "CÓDIGO",
    projects: [
      {
        category: "001 / FULL STACK",
        desc: "Plataforma de generación de números cuánticos. React, Tailwind, GSAP, NestJS, PostgreSQL, TypeORM. Seguridad XSS, sanitización y manejo seguro de tokens.",
      },
      {
        category: "002 / FRONTEND",
        desc: "Landing page profesional para GPS inalámbrico Jimi LL301. Next.js 16, TypeScript, Tailwind v4, diseño premium AIDA.",
      },
      {
        category: "003 / FRONTEND",
        desc: "Landing page para plataforma GPS inteligente de flotas en Chile. Next.js 16, TypeScript, Tailwind v4.",
      },
      {
        category: "004 / FRONTEND",
        desc: "App web interactiva con personajes bíblicos, animaciones avanzadas y efectos visuales con GSAP. React, Tailwind.",
      },
      {
        category: "005 / BACKEND",
        desc: "API REST completa para gestión de videojuegos. Node.js, Express, operaciones CRUD completas.",
      },
    ],
  },
  en: {
    nav: ["WORK", "ABOUT", "CONTACT"],
    heroSub: "Full Stack Developer · React · TypeScript · Node.js",
    aboutHeadline: "FULL STACK DEVELOPER BUILDING EXPERIENCES THAT MATTER.",
    aboutText:
      "Full Stack Developer with experience in frontend and backend. I work with React, TypeScript, Node.js and NestJS to build secure, maintainable and user-centered applications. Cybersecurity knowledge applied to development. Concepción, Chile.",
    marquee: "REACT — TYPESCRIPT — NODE.JS — NESTJS — TAILWIND — POSTGRESQL — PYTHON — GIT —",
    archive: "ARCHIVE",
    skillsTitle1: "TECH",
    skillsTitle2: "STACK",
    skillsText:
      "JavaScript · TypeScript · React · Angular · Node.js · NestJS · Python · Django · PostgreSQL · MySQL · Tailwind · Git. Computer Engineering — Duoc UC. Cybersecurity Certificate — Cisco.",
    cta: "LET'S — WORK",
    location: "CONCEPCIÓN, CHILE // AVAILABLE FOR PROJECTS",
    year: "YEAR",
    private: "PRIVATE",
    demo: "DEMO",
    code: "CODE",
    projects: [
      {
        category: "001 / FULL STACK",
        desc: "Quantum random number generation platform. React, Tailwind, GSAP, NestJS, PostgreSQL, TypeORM. XSS security, sanitization and secure token handling.",
      },
      {
        category: "002 / FRONTEND",
        desc: "Professional landing page for Jimi LL301 wireless GPS. Next.js 16, TypeScript, Tailwind v4, premium AIDA design.",
      },
      {
        category: "003 / FRONTEND",
        desc: "Landing page for intelligent fleet GPS platform in Chile. Next.js 16, TypeScript, Tailwind v4.",
      },
      {
        category: "004 / FRONTEND",
        desc: "Interactive web app with biblical characters, advanced animations and GSAP visual effects. React, Tailwind.",
      },
      {
        category: "005 / BACKEND",
        desc: "Complete REST API for video game management. Node.js, Express, full CRUD operations.",
      },
    ],
  },
}

function ProjectLinks({ links }: { links: { label: string; href: string }[] }) {
  return (
    <div className="project-links" style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginTop: "16px" }}>
      {links.map((link) =>
        link.href === "#" ? (
          <span key={link.label} style={{ ...linkStyle, color: "#888", cursor: "default" }}>
            {link.label}
          </span>
        ) : (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            {link.label}
          </a>
        ),
      )}
    </div>
  )
}

export default function Home() {
  const { lang, toggleLang } = useLang()
  const copy = t[lang]

  useEffect(() => {
    // Mouse Blob Follower
    const blob = document.getElementById("cursor-blob")
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX
      const y = e.clientY
      if (blob) {
        blob.style.transform = `translate(${x - 200}px, ${y - 200}px)`
      }
    }
    document.addEventListener("mousemove", handleMouseMove)

    // Parallax Effect
    const handleScroll = () => {
      if (window.innerWidth < 768) return

      const scroll = window.pageYOffset

      const heroLine1 = document.getElementById("hero-line-1")
      const heroLine2 = document.getElementById("hero-line-2")
      if (heroLine1) {
        heroLine1.style.transform = `translateY(${scroll * 0.15}px)`
      }
      if (heroLine2) {
        heroLine2.style.transform = `translateY(${scroll * -0.2}px)`
      }

      const heroImg = document.getElementById("hero-img")
      if (heroImg) {
        heroImg.style.transform = `translate(-50%, calc(-50% + ${scroll * 0.2}px)) scale(${1 + scroll * 0.0005})`
      }

      // Floating labels in project section
      const labels = document.querySelectorAll(".floating-label")
      labels.forEach((label, index) => {
        const direction = index % 2 === 0 ? 1 : -1
        ;(label as HTMLElement).style.transform = `translateY(${scroll * 0.1 * direction}px)`
      })
    }
    window.addEventListener("scroll", handleScroll)
    handleScroll()

    // Simple reveal on enter (Intersection Observer)
    const observerOptions = {
      threshold: 0.1,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active")
        }
      })
    }, observerOptions)

    document.querySelectorAll(".reveal-text").forEach((text) => {
      observer.observe(text)
    })

    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        const href = (anchor as HTMLAnchorElement).getAttribute("href")
        if (!href || href === "#") return
        e.preventDefault()
        document.querySelector(href)?.scrollIntoView({
          behavior: "smooth",
        })
      })
    })

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <div className="blob" id="cursor-blob"></div>

      <nav style={navStyle}>
        <div style={navInnerStyle}>
          <div className="logo">
            <Image
              src="/cedriccreed_blanco.svg"
              width={120}
              height={40}
              alt="cedriccreed"
              className="object-contain h-8 w-auto"
            />
          </div>
          <ul className="nav-links">
            <li>
              <a href="#work">{copy.nav[0]}</a>
            </li>
            <li>
              <a href="#about">{copy.nav[1]}</a>
            </li>
            <li>
              <a href="#contact">{copy.nav[2]}</a>
            </li>
            <li>
              <button
                type="button"
                onClick={toggleLang}
                className="text-sm font-bold tracking-widest hover:text-[#ff3e00] transition-colors duration-200"
              >
                {lang === "es" ? "EN" : "ES"}
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <main>
        {/* HERO SECTION */}
        <section id="hero" style={{ paddingTop: "80px" }}>
          <div className="hero-img relative" id="hero-img">
            <Image
              src="/foto-cedric-lavin.png"
              alt="Cedric Lavin"
              fill
              className="object-cover object-center"
              priority
              style={{ filter: "none" }}
            />
          </div>
          <div className="hero-title-container container text-center" style={{ width: "100%" }}>
            <span
              className="huge-type"
              id="hero-line-1"
              style={{
                display: "block",
                willChange: "transform",
                fontSize: "clamp(4rem, 12vw, 10rem)",
              }}
            >
              CEDRIC
            </span>
            <span
              className="huge-type outline-text"
              id="hero-line-2"
              style={{
                display: "block",
                willChange: "transform",
                fontSize: "clamp(4rem, 12vw, 10rem)",
              }}
            >
              LAVIN
            </span>
            <p
              style={{
                fontSize: "1.25rem",
                marginTop: "24px",
                fontWeight: 300,
                color: "#888",
                letterSpacing: "0.05em",
              }}
            >
              {copy.heroSub}
            </p>
          </div>
        </section>

        {/* INTRO */}
        <section id="about">
          <div className="container">
            <div style={{ maxWidth: "800px" }}>
              <h2
                style={{
                  fontSize: "3rem",
                  fontFamily: "var(--syne)",
                  marginBottom: "40px",
                }}
              >
                {copy.aboutHeadline}
              </h2>
              <p
                style={{
                  fontSize: "clamp(1rem, 4vw, 1.5rem)",
                  fontWeight: 300,
                  color: "#888",
                }}
              >
                {copy.aboutText}
              </p>
            </div>
          </div>
        </section>

        {/* MARQUEE */}
        <div className="scrolling-marquee">
          <div className="marquee-inner">
            <span className="huge-type outline-text">{copy.marquee} </span>
            <span className="huge-type outline-text">{copy.marquee} </span>
          </div>
        </div>

        {/* WORK SECTION */}
        <section id="work" className="container">
          <div className="sticky-type">{copy.archive}</div>

          {/* Project 1 — QRNG */}
          <div className="project-row">
            <div className="project-info">
              <span style={{ fontFamily: "var(--syne)", color: "var(--accent)" }}>{copy.projects[0].category}</span>
              <h3 className="huge-type" style={{ fontSize: "6rem", margin: "20px 0" }}>
                QRNG
              </h3>
              <p>{copy.projects[0].desc}</p>
              <div className="divider"></div>
              <p>
                {copy.year}: 2025
              </p>
              <ProjectLinks links={[{ label: copy.private, href: "#" }]} />
            </div>
            <div className="project-media">
              <div className="project-image relative">
                <Image
                  src="/sequre-quantum.png"
                  alt="QRNG Platform"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
              <div className="floating-label huge-type outline-text" style={{ fontSize: "8rem" }}>
                QUANTUM
              </div>
            </div>
          </div>

          {/* Project 2 — GPS LL301 */}
          <div className="project-row" style={{ flexDirection: "row-reverse" }}>
            <div className="project-info">
              <span style={{ fontFamily: "var(--syne)", color: "var(--accent)" }}>{copy.projects[1].category}</span>
              <h3 className="huge-type" style={{ fontSize: "6rem", margin: "20px 0" }}>
                GPS LL301
              </h3>
              <p>{copy.projects[1].desc}</p>
              <div className="divider"></div>
              <p>
                {copy.year}: 2026
              </p>
              <ProjectLinks
                links={[
                  { label: copy.demo, href: "https://pandpage-gps-ll-301.vercel.app/" },
                  { label: copy.code, href: "https://github.com/cedriccreed/pandpage-gps-LL301" },
                ]}
              />
            </div>
            <div className="project-media">
              <div className="project-image relative">
                <Image
                  src="/biogps-page-web.png"
                  alt="GPS LL301 Landing"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div
                className="floating-label huge-type outline-text"
                style={{ fontSize: "8rem", right: "-20px", left: "auto" }}
              >
                CHILE
              </div>
            </div>
          </div>

          {/* Project 3 — BIOGPS */}
          <div className="project-row">
            <div className="project-info">
              <span style={{ fontFamily: "var(--syne)", color: "var(--accent)" }}>{copy.projects[2].category}</span>
              <h3 className="huge-type" style={{ fontSize: "6rem", margin: "20px 0" }}>
                BIOGPS
              </h3>
              <p>{copy.projects[2].desc}</p>
              <div className="divider"></div>
              <p>
                {copy.year}: 2026
              </p>
              <ProjectLinks links={[{ label: copy.demo, href: "https://landpage-biogps.vercel.app/" }]} />
            </div>
            <div className="project-media">
              <div className="project-image relative">
                <Image
                  src="/biogps-page-web.png"
                  alt="BioGPS Platform"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="floating-label huge-type outline-text" style={{ fontSize: "8rem" }}>
                FLOTAS
              </div>
            </div>
          </div>

          {/* Project 4 — BÍBLICOS */}
          <div className="project-row" style={{ flexDirection: "row-reverse" }}>
            <div className="project-info">
              <span style={{ fontFamily: "var(--syne)", color: "var(--accent)" }}>{copy.projects[3].category}</span>
              <h3 className="huge-type" style={{ fontSize: "6rem", margin: "20px 0" }}>
                BÍBLICOS
              </h3>
              <p>{copy.projects[3].desc}</p>
              <div className="divider"></div>
              <p>
                {copy.year}: 2025
              </p>
              <ProjectLinks
                links={[
                  { label: copy.demo, href: "https://personajes-biblicos.vercel.app/" },
                  { label: copy.code, href: "https://github.com/cedriccreed/personajes-biblicos" },
                ]}
              />
            </div>
            <div className="project-media">
              <div className="project-image relative">
                <Image
                  src="/personajes-biblicos.png"
                  alt="Personajes Bíblicos"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div
                className="floating-label huge-type outline-text"
                style={{ fontSize: "8rem", right: "-20px", left: "auto" }}
              >
                GSAP
              </div>
            </div>
          </div>

          {/* Project 5 — API REST */}
          <div className="project-row">
            <div className="project-info">
              <span style={{ fontFamily: "var(--syne)", color: "var(--accent)" }}>{copy.projects[4].category}</span>
              <h3 className="huge-type" style={{ fontSize: "6rem", margin: "20px 0" }}>
                API REST
              </h3>
              <p>{copy.projects[4].desc}</p>
              <div className="divider"></div>
              <p>
                {copy.year}: 2025
              </p>
              <ProjectLinks
                links={[
                  {
                    label: copy.code,
                    href: "https://github.com/cedriccreed/API-REST-Videojuegos-Node.js",
                  },
                ]}
              />
            </div>
            <div className="project-media">
              <div className="project-image relative">
                <Image
                  src="/api-rest.png"
                  alt="API REST Videojuegos"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="floating-label huge-type outline-text" style={{ fontSize: "8rem" }}>
                NODE
              </div>
            </div>
          </div>
        </section>

        {/* OVERLAPPING COMPOSITION SECTION */}
        <section>
          <div className="container composition">
            <div className="comp-item-1">
              <div className="comp-image relative overflow-hidden" style={{ minHeight: "280px" }}>
                <Image
                  src="/biogps-page-web.png"
                  alt="BioGPS"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
            <div className="comp-item-2">
              <div className="comp-image relative overflow-hidden" style={{ minHeight: "320px" }}>
                <Image
                  src="/personajes-biblicos.png"
                  alt="Personajes Bíblicos"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
            <div className="comp-item-3">
              <div
                style={{
                  background: "#0e0e0e",
                  padding: "40px",
                  color: "#ffffff",
                }}
              >
                <h4 style={{ fontFamily: "var(--syne)", fontSize: "2rem", lineHeight: 1 }}>
                  <span style={{ display: "block", color: "#ffffff" }}>{copy.skillsTitle1}</span>
                  <span
                    style={{
                      display: "block",
                      color: "transparent",
                      WebkitTextStroke: "1px white",
                    }}
                  >
                    {copy.skillsTitle2}
                  </span>
                </h4>
                <p style={{ marginTop: "20px", color: "#888" }}>{copy.skillsText}</p>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer id="contact">
          <div className="container">
            <div className="footer-cta">
              <a href="mailto:cedriclavin@gmail.com">{copy.cta}</a>
            </div>
            <div className="divider"></div>
            <div
              className="footer-bar"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontFamily: "var(--syne)",
                fontSize: "0.8rem",
                textTransform: "uppercase",
                color: "#555",
                flexWrap: "wrap",
                gap: "24px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <Image
                  src="/cedriccreed_blanco.svg"
                  width={100}
                  height={32}
                  alt="cedriccreed"
                  className="object-contain h-6 w-auto"
                />
                <div>© 2026 CEDRIC LAVIN</div>
              </div>
              <div className="footer-links" style={{ display: "flex", gap: "30px", flexWrap: "wrap" }}>
                <a href="mailto:cedriclavin@gmail.com" style={{ color: "inherit", textDecoration: "none" }}>
                  EMAIL
                </a>
                <a
                  href="https://github.com/cedriccreed"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  GITHUB
                </a>
                <a
                  href="https://www.linkedin.com/in/cedric-lavin-alarcon-b9949424a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  LINKEDIN
                </a>
              </div>
              <div>{copy.location}</div>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
