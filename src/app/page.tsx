import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import ProjectCarousel from "@/components/ProjectCarousel";
import ContactForm from "@/components/ContactForm";
import {
  about,
  aboutHeading,
  profile,
  skillGroups,
  stats,
} from "@/data/portfolio";

const contactLinks = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: FaEnvelope },
  { label: "LinkedIn", value: "maitri-diwan", href: profile.socials.linkedin, icon: FaLinkedin },
  { label: "GitHub", value: "MAITRI-DIWAN", href: profile.socials.github, icon: FaGithub },
].filter((l) => l.href);

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main" className="flex-1">
        <Hero />

        {/* About */}
        <Section id="about" eyebrow="About me" title={aboutHeading}>
          <div className="grid items-center gap-12 md:grid-cols-2">
            <Reveal className="space-y-4 text-lg leading-relaxed text-muted">
              {about.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </Reveal>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, idx) => (
                <Reveal key={s.label} delay={idx * 0.1}>
                  <div className="rounded-xl border border-border bg-surface p-6 text-center transition hover:border-accent">
                    <div className="gradient-text text-4xl font-extrabold">
                      <Counter value={s.value} suffix={s.suffix} />
                    </div>
                    <div className="mt-2 text-sm text-muted">{s.label}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Section>

        {/* Projects */}
        <Section id="projects" eyebrow="My work" title="Projects">
          <Reveal>
            <ProjectCarousel />
          </Reveal>
        </Section>

        {/* Skills */}
        <Section id="skills" eyebrow="What I use" title="Tech Stack">
          <div className="space-y-10">
            {skillGroups.map((g) => (
              <Reveal key={g.group}>
                <h3 className="mb-4 text-center font-semibold text-muted">{g.group}</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {g.items.map(({ name, icon: Icon, color }) => (
                    <div
                      key={name}
                      className="group flex w-32 flex-col items-center gap-3 rounded-xl border border-border bg-surface p-5 transition hover:-translate-y-1 hover:border-accent"
                    >
                      <Icon size={40} style={{ color }} className="transition group-hover:scale-110" />
                      <span className="text-center text-sm">{name}</span>
                    </div>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" eyebrow="Get in touch" title="Let's Connect 🚀">
          <div className="grid gap-10 md:grid-cols-2">
            <Reveal className="flex flex-col gap-4">
              <p className="text-lg text-muted">
                Have a role, a project or an idea? My inbox is open, and I usually reply within a day.
              </p>
              {contactLinks.map(({ label, value, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noreferrer"
                  className="flex items-center gap-4 rounded-xl border border-border bg-surface p-5 transition hover:-translate-y-0.5 hover:border-accent"
                >
                  <span className="rounded-lg bg-accent/15 p-3 text-accent">
                    <Icon size={22} />
                  </span>
                  <span>
                    <span className="block font-semibold">{label}</span>
                    <span className="block text-sm text-muted">{value}</span>
                  </span>
                </a>
              ))}
            </Reveal>
            <Reveal delay={0.15}>
              <ContactForm />
            </Reveal>
          </div>
        </Section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-muted sm:flex-row sm:px-6">
          <p>© 2026 {profile.name}. All rights reserved.</p>
          <div className="flex gap-5">
            {contactLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                aria-label={label}
                className="transition hover:text-accent"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
