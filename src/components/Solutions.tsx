/* eslint-disable react/no-unescaped-entities */
import { Gem, BookHeart, PenTool, Users, Target } from "lucide-react";

export function Solutions() {
  return (
    <section id="solutions">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
        <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold md:text-5xl">
          Nos solutions digitales dédiées
        </h2>
        <p className="mx-auto mb-8 mt-4 max-w-lg text-center text-[#636262] md:mb-12 lg:mb-16">
          Lorem ipsum dolor sit amet consectetur adipiscing elit ut
          aliquam,purus sit amet luctus magna fringilla urna
        </p>

        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-6">
          <div className="grid gap-4 rounded-md border border-solid border-[#cdcdcd] p-8 md:p-10">
            <Gem size={40} />
            <p className="text-xl font-semibold">Vendre ? Copywriting</p>
            <p className="text-sm text-[#636262]">
              Utilisé dans les domaines du marketing de contenu et de la
              publicité digitale, le copywriting consiste à persuader ses
              prospects de passer à l'action.
            </p>
          </div>

          <div className="grid gap-4 rounded-md border border-solid border-[#cdcdcd] p-8 md:p-10">
            <Target size={40} />
            <p className="text-xl font-semibold">Engager ? SEO</p>
            <p className="text-sm text-[#636262]">
              Aussi connu sous le nom de référencement naturel, l'optimisation
              SEO vise à améliorer le positionnement d'un site web afin de lui
              permettre d'atteindre le Graal : la première page des résultats.
            </p>
          </div>

          <div className="grid gap-4 rounded-md border border-solid border-[#cdcdcd] p-8 md:p-10">
            <Users size={40} />
            <p className="text-xl font-semibold">Expliquer ? Rédaction Web</p>
            <p className="text-sm text-[#636262]">
              Cette technique généraliste permet de désigner tout type de
              rédaction utilisée sur le web. Elle est souvent à visée
              didactique, c'est-à-dire qu'elle cherche à instruire le lecteur
              (un peu comme maintenant).
            </p>
          </div>

          <div className="grid gap-4 rounded-md border border-solid border-[#cdcdcd] p-8 md:p-10">
            <BookHeart size={40} />
            <p className="text-xl font-semibold">Raconter ? Storytelling</p>
            <p className="text-sm text-[#636262]">
              Il était une fois ... Oui mais non. Si cette méthode sert à
              conter, elle doit le faire avec originalité et honnêteté. Bien
              amenée, la rédaction créative nourrit l'image de votre marque. Car
              cette histoire, c'est la vôtre.
            </p>
          </div>

          <div className="grid gap-4 rounded-md border border-solid border-[#cdcdcd] p-8 md:p-10">
            <PenTool size={40} />
            <p className="text-xl font-semibold">Réécrire ? Ghostwritting</p>
            <p className="text-sm text-[#636262]">
              Pas de fantôme ici, ne craignez rien. Le ghostwriting désigne la
              compétence, pour un auteur, d'écrire à la place de celui qui ne
              trouve pas les mots. Biographie, récit ou même thèse
              universitaire, multiples sont les cas de figure où l'on aurait
              bien besoin d'un petit coup de plume !
            </p>
          </div>

          <div className="grid gap-4 rounded-md border border-solid border-[#cdcdcd] p-8 md:p-10">
            <p className="text-xl font-semibold">Pipedrive</p>
            <p className="text-sm text-[#636262]">
              Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,
              purus sit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
