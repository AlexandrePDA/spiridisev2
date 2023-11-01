/* eslint-disable react/no-unescaped-entities */
"use client";
import { Mail, Linkedin, ExternalLink, CalendarDays } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

{
  /* gerer l'envois bloquer si les champs ne sont pas remplis */
}

export function Contact() {
  const [Loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setLoading(true);

    const name: string = event.target[0].value;
    const email: string = event.target[1].value;
    const projectBrief: string = event.target[2].value;

    // Création de l'objet à envoyer
    const payload = {
      name: name,
      email: email,
      brief: projectBrief,
    };
    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (response.ok) {
        console.log("Email envoyé avec succès:", data);
        setLoading(false);
      } else {
        console.error("Erreur lors de l'envoi de l'email:", data.error);
        setLoading(false);
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi de la requête:", error);
      setLoading(false);
    }
  };

  return (
    <section id="contact">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
        <div className="grid items-center gap-8 sm:gap-20 lg:grid-cols-2">
          <div className="flex flex-col justify-between  max-w-3xl">
            <h2 className="mb-2 text-3xl text-primary font-bold md:text-5xl">
              Let's build something exciting together!
            </h2>

            {/* mini card contact */}
            <div className=" flex items-center gap-4 mt-4 p-4 rounded-md ">
              <Mail color="#F76B15" />
              <div>
                <h2 className=" text-base font-medium ">Pour se renseigner</h2>
                <Link
                  className="mt-2 text-sm font-bold text-blue-500  cursor-pointer hover:text-blue-800 dark:hover:text-blue-400"
                  href="mailto:contact@spiridise.com"
                >
                  Envoyez un email
                </Link>
              </div>
            </div>

            <div className=" flex items-center gap-4 p-4 rounded-md  ">
              <Linkedin color="#F76B15" />
              <div>
                <h2 className=" text-base font-medium ">
                  Pour un premier contact
                </h2>
                <Link
                  className="mt-2 text-sm font-bold text-blue-500  cursor-pointer hover:text-blue-800 dark:hover:text-blue-400"
                  href="https://www.linkedin.com/in/amel-addoun-84a13519a"
                >
                  Rejoignez-moi sur Linkedin
                </Link>
              </div>
            </div>

            <div className=" flex items-center gap-4 p-4 rounded-md ">
              <ExternalLink color="#F76B15" />
              <div>
                <h2 className=" text-base font-medium ">
                  Pour débuter un projet
                </h2>
                <Link
                  className="mt-2 text-sm font-bold text-blue-500  cursor-pointer hover:text-blue-800 dark:hover:text-blue-400"
                  href="https://www.malt.fr/profile/ameladdoun"
                >
                  Échangeons sur Malt
                </Link>
              </div>
            </div>

            <div className=" flex items-center gap-4 p-4 rounded-md  ">
              <CalendarDays color="#F76B15" />
              <div>
                <h2 className=" text-base font-medium ">
                  Pour prendre un rendez-vous
                </h2>
                <Link
                  className="mt-2 text-sm font-bold text-blue-500  cursor-pointer hover:text-blue-800 dark:hover:text-blue-400"
                  href="https://calendly.com/amel-addoun"
                >
                  Rencontrons-nous sur Calendly
                </Link>
              </div>
            </div>
          </div>
          <div className="mx-auto max-w-xl  text-center">
            <p className="mx-auto mb-6 mt-4 max-w-lg text-sm text-muted-foreground lg:mb-8">
              Lorem ipsum dolor sit amet consectetur adipiscing elit ut
              aliquam,purus sit amet luctus magna fringilla urna
            </p>

            <form
              onSubmit={handleSubmit}
              className="mx-auto mb-4 max-w-[400px] text-left"
              name="wf-form-password"
              method="post"
            >
              <div>
                <label
                  htmlFor="name"
                  className="mb-1 font-medium text-muted-foreground"
                >
                  Nom
                </label>
                <input
                  placeholder="John Doe"
                  id="name"
                  name="name"
                  type="text"
                  className="mb-4 block h-9 w-full rounded-md border border-solid border-border px-3 py-6 pl-4 text-sm bg-white text-primary"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="email"
                  className="mb-1 font-medium text-muted-foreground"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  placeholder="hello@example.com"
                  type="text"
                  className="mb-4 block h-9 w-full rounded-md border border-solid border-border px-3 py-6 pl-4 text-sm bg-white text-primary"
                />
              </div>
              <div className="mb-5 md:mb-6 lg:mb-8">
                <label
                  htmlFor="field"
                  className="mb-1 font-medium text-muted-foreground"
                >
                  Brief projet
                </label>
                <textarea
                  id="field"
                  placeholder=""
                  name="field"
                  className="mb-2.5 block h-auto min-h-[128px] w-full rounded-md border border-solid border-border p-3 text-sm bg-white text-primary"
                  defaultValue=" "
                />
              </div>
              <input
                type="submit"
                value="Envoyer"
                className="inline-block w-full cursor-pointer rounded-md bg-primary px-6 py-3 text-center font-semibold text-white"
                disabled={Loading}
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
