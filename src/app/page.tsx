import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Parcours } from "@/components/Parcours";
import { Solutions } from "@/components/Solutions";
import { Stats } from "@/components/Stats";
import { FAQ } from "@/components/FAQ";
import { Collaborations } from "@/components/Collaborations";
import { LastArticles } from "@/components/LastArticles";

export default function Home() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Hero />
      <Collaborations />
      <Solutions />
      <Stats />
      <Parcours />
      <About />
      <LastArticles />
      <Contact />
      <FAQ />
    </div>
  );
}
