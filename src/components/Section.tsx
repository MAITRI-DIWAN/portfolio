import Reveal from "./Reveal";

export default function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl scroll-mt-20 px-4 py-20 sm:px-6">
      <Reveal className="mb-12 text-center">
        <p className="mb-2 font-mono text-sm uppercase tracking-widest text-accent-2">{eyebrow}</p>
        <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>
      </Reveal>
      {children}
    </section>
  );
}
