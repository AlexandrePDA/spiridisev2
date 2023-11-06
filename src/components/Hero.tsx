/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <header>
      <div className="mx-auto w-full  px-5 py-16 md:px-10 md:py-24 lg:py-32">
        <div className="flex flex-col items-center mx-auto max-w-3xl text-center">
          <div className="text-center">
            <h1 className="mb-4 text-4xl font-extrabold md:text-6xl">
              VOS IDÉES. NOS MOTS. <br />
              <span className="bg-text-gradient  bg-clip-text text-transparent">
                NOTRE HISTOIRE.
              </span>
            </h1>
          </div>
          <p className="mb-6 text-sm text-muted-foreground sm:text-xl lg:mb-8">
            Expert de la communication digitale, Spiridise vous accompagne dans
            le déploiement d’une stratégie éditoriale sur-mesure. Développez
            votre image de marque, optimisez votre présence en ligne et faites
            rayonner vos idées.
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
