/* eslint-disable react/no-unescaped-entities */
import {
  Gem,
  BookHeart,
  PenTool,
  Users,
  Target,
  Megaphone,
} from "lucide-react";

export function Solutions() {
  return (
    <section id="solutions">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
        <h2 className="mx-auto max-w-screen-3xl text-center text-3xl font-bold md:text-5xl ">
          Nos <span className="text-primary">solutions</span> digitales dédiées
        </h2>
        <p className="mx-auto mb-8 mt-4 max-w-3xl text-center text-muted-foreground md:mb-12 lg:mb-16">
          Votre entreprise est unique, et nous le savons.
          <br /> C’est pourquoi nous puisons parmi une variété de techniques
          d’écriture pour créer un contenu d’exception qui vous ressemble.
          Toutes nos méthodes ont été largement éprouvées afin de vous fournir
          les résultats que vous escomptez.
        </p>

        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-6">
          <div className="grid gap-4 rounded-md bg-card border border-solid border-border  p-8 md:p-10">
            <p className="text-4xl">💎</p>
            <div>
              <p className="text-xl md:text-2xl  font-semibold">
                Vendre avec le{" "}
                <span className="text-orangespd">Copywriting</span>{" "}
              </p>
              <p className="italic">L’art d’écrire pour convaincre</p>
            </div>
            <p className="text-sm text-muted-foreground">
              Utilisé dans les domaines du marketing de contenu et de la
              publicité digitale, le copywriting consiste à persuader ses
              prospects de passer à l'action.
            </p>
          </div>

          <div className="grid gap-4 rounded-md bg-card border border-solid border-border  p-8 md:p-10">
            <p className="text-4xl">🥇</p>
            <div>
              <p className="text-xl md:text-2xl  font-semibold">
                Engager avec le <span className="text-orangespd">SEO</span>{" "}
              </p>
              <p className="italic">Atteignez des sommets</p>
            </div>
            <p className="text-sm text-muted-foreground">
              Aussi connu sous le nom de référencement naturel, l'optimisation
              SEO vise à améliorer le positionnement d'un site web afin de lui
              permettre d'atteindre le Graal : la 1re page des résultats.
            </p>
          </div>

          <div className="grid gap-4 rounded-md bg-card border border-solid border-border  p-8 md:p-10">
            <p className="text-4xl">🧠</p>
            <div>
              <p className="text-xl md:text-2xl font-semibold">
                Expliquer avec la{" "}
                <span className="text-orangespd">Rédaction Web</span>
              </p>
              <p className="italic">Apprendre, comprendre, entreprendre</p>
            </div>
            <p className="text-sm text-muted-foreground">
              Cette technique généraliste permet de désigner tout type de
              rédaction utilisée sur le web. Elle est souvent à visée
              didactique, c'est-à-dire qu'elle cherche à instruire le lecteur
              (un peu comme maintenant).
            </p>
          </div>

          <div className="grid gap-4 rounded-md bg-card border border-solid border-border  p-8 md:p-10">
            <p className="text-4xl">🪄</p>
            <div>
              <p className="text-xl md:text-2xl  font-semibold">
                Raconter avec le{" "}
                <span className="text-orangespd">Storytelling</span>{" "}
              </p>
              <p className="italic">Il était une fois…</p>
            </div>
            <p className="text-sm text-muted-foreground">
              Oui mais non. Si cette méthode sert à conter, elle doit le faire
              avec originalité et honnêteté. Bien amenée, la rédaction créative
              nourrit l'image de votre marque. Car cette histoire, c'est la
              vôtre.
            </p>
          </div>

          <div className="grid gap-4 rounded-md bg-card border border-solid border-border  p-8 md:p-10">
            <p className="text-4xl">✒️</p>
            <div>
              <p className="text-xl md:text-2xl  font-semibold">
                Réécrire avec le{" "}
                <span className="text-orangespd">Ghostwriting</span>{" "}
              </p>
              <p className="italic">Imposez votre style</p>
            </div>
            <p className="text-sm text-muted-foreground">
              Pas de fantôme ici : le ghostwriting désigne la compétence, pour
              un auteur, d'écrire à la place de celui qui ne trouve pas les
              mots. Biographie ou récit, multiples sont les cas de figure où
              l'on aurait bien besoin d'un petit coup de plume !
            </p>
          </div>
          <div className="grid gap-4 rounded-md bg-card border border-solid border-border  p-8 md:p-10">
            {" "}
            <p className="text-4xl">📢</p>
            <div>
              <p className="text-xl md:text-2xl  font-semibold">
                Fédérer avec le{" "}
                <span className="text-orangespd">Community Management</span>{" "}
              </p>
              <p className="italic">Tous ensemble, tous ensemble </p>
            </div>
            <p className="text-sm text-muted-foreground">
              Créer une communauté à partir d’un intérêt commun, c’est là tout
              l’enjeu du community management. Développement durable, jeux vidéo
              ou ressources humaines, valorisez vos actions en les partageant
              sur les réseaux sociaux.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
