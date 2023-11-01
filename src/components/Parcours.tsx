/* eslint-disable react/no-unescaped-entities */
import { Search, PartyPopper, PackagePlus, Pencil, Speech } from "lucide-react";

export function Parcours() {
  return (
    <section id="parcours">
      <div className="mx-auto w-full max-w-3xl px-5 py-12 md:px-10 md:py-16 lg:py-20">
        <h2 className="mb-8 text-center text-3xl font-bold md:mb-12 md:text-5xl lg:mb-16">
          Get Started In 4 Easy Steps
        </h2>

        <div className="mx-auto grid max-w-2xl gap-6">
          <div className="flex items-center justify-center gap-6 rounded-[60px] bg-[#f2f2f7] px-6 py-4 transition md:hover:bg-black md:hover:text-white">
            <div className="md:flex h-20 w-20 flex-none items-center justify-center rounded-full hidden">
              <Speech size={40} />
            </div>
            <div className="flex flex-col items-start gap-2.5">
              <h5 className="text-xl font-bold">Brief</h5>
              <p className="text-sm opacity-50 sm:text-base">
                Ensemble, nous convenons d'un cahier des charges détaillé selon
                vos attentes. Nous adaptons notre discours à votre audience
                cible, ainsi qu'aux supports de destination : blog, médias
                sociaux ...
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-6 rounded-[60px] bg-[#f2f2f7] px-6 py-4 transition md:hover:bg-black md:hover:text-white">
            <div className="md:flex h-20 w-20 flex-none items-center justify-center rounded-full hidden">
              <Search size={40} />
            </div>
            <div className="flex flex-col items-start gap-2.5">
              <h5 className="text-xl font-bold">Recherches</h5>
              <p className="text-sm opacity-50 sm:text-base">
                En fonction de vos besoins, nous effectuons des recherches
                poussées afin de concevoir un contenu web de qualité, pertinent
                et créatif.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-6 rounded-[60px] bg-[#f2f2f7] px-6 py-4 transition md:hover:bg-black md:hover:text-white">
            <div className="md:flex h-20 w-20 flex-none items-center justify-center rounded-full hidden">
              <Pencil size={40} />
            </div>
            <div className="flex flex-col items-start gap-2.5">
              <h5 className="text-xl font-bold">Rédaction</h5>
              <p className="text-sm opacity-50 sm:text-base">
                C'est ici que s'opère la magie ... ✨ Nous créons votre contenu
                selon les directives que vous nous fournissez.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-6 rounded-[60px] bg-[#f2f2f7] px-6 py-4 transition md:hover:bg-black md:hover:text-white">
            <div className="md:flex h-20 w-20 flex-none items-center justify-center rounded-full  hidden">
              <PartyPopper size={40} />
            </div>
            <div className="flex flex-col items-start gap-2.5">
              <h5 className="text-xl font-bold">Livraison</h5>
              <p className="text-sm opacity-50 sm:text-base">
                À l'ère du numérique l'envoi n'a jamais été aussi rapide !
                Fichiers, .doc, .pdf ou document Google, c'est vous qui
                choisissez votre option préférée.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-6 rounded-[60px] bg-[#f2f2f7] px-6 py-4 transition md:hover:bg-black md:hover:text-white">
            <div className="md:flex h-20 w-20 flex-none items-center justify-center rounded-full hidden">
              <PackagePlus size={40} />
            </div>
            <div className="flex flex-col items-start gap-2.5">
              <h5 className="text-xl font-bold">Retouche</h5>
              <p className="text-sm opacity-50 sm:text-base">
                Pour garantir votre satisfaction, nous proposons des retouches
                comprises dans le devis initial, pour un budget maîtrisé en
                toutes circonstances.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
