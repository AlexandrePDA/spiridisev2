"use client";

import React, { useRef, useState, useEffect } from "react";
import CountUp from "react-countup";

export function Stats() {
  const divRef = useRef<HTMLDivElement | null>(null);
  const [estVisible, setEstVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          console.log("Utilisateur est sur la section");
          setEstVisible(true);
        } else {
          console.log("Utilisateur a quitté la section");
          setEstVisible(false);
        }
      },
      {
        threshold: 0.5, // au moins 50% de l'élément doit être visible
      }
    );
    if (divRef.current) {
      observer.observe(divRef.current);
    }
    return () => {
      if (divRef.current) {
        observer.unobserve(divRef.current);
      }
    };
  }, []);

  return (
    <section ref={divRef}>
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
        <h2 className="text-center text-primary text-3xl font-bold md:text-5xl">
          Des chiffres & des lettres
        </h2>
        <p className="mx-auto mb-8 mt-4 max-w-lg items-center text-center text-sm text-muted-foreground sm:text-base md:mb-12 lg:mb-16">
          Lorem ipsum dolor sit amet consectetur adipiscing elit ut
          aliquam,purus sit amet luctus magna fringilla urna
        </p>

        <div className="mx-auto flex w-full max-w-4xl flex-col flex-wrap justify-between gap-5 px-16 py-8 sm:flex-row md:gap-6">
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-sm">Mots rédigés</p>
            <h2
              style={{
                fontVariant: "tabular-nums",
              }}
              className="text-3xl font-bold md:text-6xl"
            >
              +
              {estVisible && (
                <CountUp
                  duration={2}
                  end={500}
                  scrollSpyDelay={8}
                  scrollSpyOnce={true}
                />
              )}
              K
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-sm">Collaborations</p>
            <h2
              className="text-3xl font-bold md:text-6xl"
              style={{
                fontVariant: "tabular-nums",
              }}
            >
              +{estVisible && <CountUp duration={2} end={50} />}
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-sm">Sujets</p>
            <h2
              className="text-3xl font-bold md:text-6xl"
              style={{
                fontVariant: "tabular-nums",
              }}
            >
              +{estVisible && <CountUp duration={2} end={30} />}
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <p className="text-sm">Langues maîtrisées</p>
            <h2
              className="text-3xl font-bold md:text-6xl"
              style={{
                fontVariant: "tabular-nums",
              }}
            >
              {estVisible && <CountUp duration={2.5} end={3} />}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
