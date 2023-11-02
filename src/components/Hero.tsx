/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <header>
      <div className="mx-auto w-full  px-5 py-16 md:px-10 md:py-24 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-6xl">
            Écrivons maintenant les mots de demain
          </h1>
          <p className="mb-6 text-sm text-muted-foreground sm:text-xl lg:mb-8">
            Bénéficiez d'une véritable expertise dans le domaine de la
            communication digitale. Spiridise vous accompagne dans le
            déploiement d'une stratégie éditoriale numérique, destinée à
            améliorer votre branding et à optimiser votre présence en ligne.
          </p>
          <div>
            <Link className="mr-4" href="#solutions">
              <Button className="bg-orangespd hover:bg-orange-600 text-white">
                Découvrir
              </Button>
            </Link>
            <Link href="#contact">
              <Button className="bg-orangespd hover:bg-orange-600 text-white">
                Contact
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
