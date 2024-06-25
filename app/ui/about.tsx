import SectionHeader from "@/app/ui/navigation/sectionHeader";

export default function About({ text }: { text: string }) {
  return (
    <main>
      <article className="p-16" id="about">
        <SectionHeader sectionTitle="About me" />
        <div>
          <span>{text}</span>
        </div>
      </article>
    </main>
  );
}
