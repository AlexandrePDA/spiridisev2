"use client";
import Image from "next/image";
import Link from "next/link";
/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import myphoto from "../../public/assets/myphoto.jpg";

type Card = {
  description: string;
  name: string;
  href: string;
};

export function About() {
  const [randomCards, setRandomCards] = useState<Card[]>([]);

  const cards: Card[] = [
    {
      description:
        "Nous avions un projet de rédaction à faire rapidement. Amel a su relever le défi en respectant l'ensemble des contraintes et s'est montrée disponible, à l'écoute, et rapide dans son exécution. Au plaisir de retravailler avec toi !",
      name: "Dollivan - Digital Starter",
      href: "https://www.malt.fr/profile/ameladdoun",
    },
    {
      description:
        "Je suis totalement satisfaite de la prestation d'Amel, je ne peux que la recommander !",
      name: "Fatoumata - Maison Nialé",
      href: "https://www.malt.fr/profile/ameladdoun",
    },
    {
      description:
        "Amel a été réactive et a su nous délivrer un travail de qualité.",
      name: "Thomas - P&P Production",
      href: "https://www.malt.fr/profile/ameladdoun",
    },
    {
      description:
        "I had the chance to work with Amel on a Cybersecurity documentation. Even though she was not familiar with the subject she managed to bring her perspective and her inputs were quite impressive. I cannot recommend enough to contract her with any type of work.",
      name: "Sid Bouziane - Chief Innovation Officier",
      href: "https://www.linkedin.com/in/amel-addoun/details/recommendations/?detailScreenTabIndex=0",
    },
    {
      description:
        "J'ai eu l'occasion de travailler avec Amel sur une mission de rédaction web. Très réactive et l'écoute, c'est une très bonne communiquante qui s'adapte parfaitement aux attentes de ses clients et collaborateurs. C'est un réel plaisir de pouvoir collaborer de nouveau avec elle à l'avenir et je la recommande",
      name: "Regis David Somé - Chargé SEO",
      href: "https://www.linkedin.com/in/amel-addoun/details/recommendations/?detailScreenTabIndex=0",
    },
  ];

  useEffect(() => {
    const getRandomIndex = () => Math.floor(Math.random() * cards.length);

    let firstIndex = getRandomIndex();
    let secondIndex = getRandomIndex();

    // Assurez-vous que les deux indices sont différents
    while (firstIndex === secondIndex) {
      secondIndex = getRandomIndex();
    }

    setRandomCards([cards[firstIndex], cards[secondIndex]]);
  }, []);

  return (
    <section id="about">
      <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-10 md:py-16 lg:py-20">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-10">
          <div className="flex flex-col gap-8 lg:w-3/5">
            <h2 className="mb-8 text-3xl font-bold text-primary md:text-5xl">
              Derrière Spiridise, l'envie de rendre accessible le pouvoir des
              mots bien choisis 🚀
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground p-4">
              Biberonnée au plaisir des belles lettres, j'ai toujours aimé être
              au service des mots. Cela fait plus de trois (belles) années que
              j’ai décidé d’ouvrir Spiridise, la solution rédaction pour les
              entreprises qui visent à étendre leur visibilité sur le web. Après
              un parcours universitaire naturellement orienté vers une licence
              de Lettres Modernes puis un Master II de Science Politique, j'ai
              pu développer mes compétences rédactionnelles, mon esprit critique
              et mes capacités analytiques. Aujourd’hui, j’accompagne les
              entreprises pour les aider à développer leur image de marque et à
              transmettre les messages qui leur tiennent à cœur.
            </p>

            <div className="my-8 h-px w-full bg-gray-200 dark:bg-muted-foreground"></div>

            {/* card avis */}
            <div className="md:flex gap-4 w-full">
              {randomCards.map((card, index) => (
                <Link
                  href={card.href}
                  key={index}
                  className="cursor-pointer md:w-1/2 w-full"
                >
                  <div className="mb-4 md:mb-0 md:gap-4 ">
                    <div className="flex flex-col gap-4 rounded-md border border-border  border-solid bg-card p-6 md:p-4">
                      <p className="text-sm">{card.description}</p>
                      <div className="flex items-center gap-2 sm:gap-x-4">
                        <div className="flex items-center gap-x-2">
                          <p className="text-sm font-semibold sm:text-base">
                            {card.name}
                          </p>
                        </div>

                        <div className="h-5 w-px bg-[#636262]"></div>
                        <div className="flex items-center gap-x-2">
                          <p className="text-sm font-semibold sm:text-base">
                            5.0
                          </p>
                          <div className="flex text-[#f6ad1b]">
                            <svg
                              className="h-4 w-4"
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              height="100%"
                              preserveAspectRatio="xMidYMid meet"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="currentColor"
                                d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"
                              ></path>
                            </svg>
                            <svg
                              className="h-4 w-4"
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              height="100%"
                              preserveAspectRatio="xMidYMid meet"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="currentColor"
                                d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"
                              ></path>
                            </svg>
                            <svg
                              className="h-4 w-4"
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              height="100%"
                              preserveAspectRatio="xMidYMid meet"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="currentColor"
                                d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"
                              ></path>
                            </svg>
                            <svg
                              className="h-4 w-4"
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              height="100%"
                              preserveAspectRatio="xMidYMid meet"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="currentColor"
                                d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"
                              ></path>
                            </svg>
                            <svg
                              className="h-4 w-4"
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              height="100%"
                              preserveAspectRatio="xMidYMid meet"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="currentColor"
                                d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="w-full rounded-md  max-[991px]:h-[475px] lg:w-2/5 sm:hidden lg:block">
            <Image
              alt="my photo"
              className="object-cover w-full max-[991px]:h-[475px] rounded-md "
              width={400}
              height={200}
              src={myphoto}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
