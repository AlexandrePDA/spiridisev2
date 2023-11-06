import Link from "next/link";

type Article = {
  tag: string;
  title: string;
  resume: string;
  date: string;
  timeRead: number;
  link: string;
};

export function LastArticles() {
  const listArticle: Article[] = [
    {
      tag: "Financement",
      title: "Comment financer les voitures à l'ouverture de son auto-école ?",
      resume:
        "Tous les voyants sont au vert et vous êtes prêt·e à ouvrir votre propre auto-école ? L'excitation est palpable, mais une question épineuse vous trotte dans la tête : comment financer les voitures à double commande qui composeront votre flotte ? Attachez vos ceintures, nous partons explorer les différentes options qui s’offrent à vous ! ",
      date: "31 octobre 2023",
      timeRead: 4,
      link: "https://www.shine.fr/blog/auto-ecole-financer-locaux-voitures/",
    },
    {
      tag: "Assurance",
      title: "Tout ce qu’il faut savoir sur les assurances professionnelles",
      resume:
        "Les assurances professionnelles donnent souvent du fil à retordre aux entrepreneur·ses. Certaines sont obligatoires, d’autres non, et cela varie en fonction des secteurs d’activité. Il peut parfois être compliqué de choisir les biens et personnes à assurer. Dans ce guide, nous avons réuni tout ce qu’il faut savoir sur les 3 grandes catégories d’assurances professionnelles.",
      date: "30 octobre 2023",
      timeRead: 9,
      link: "https://www.shine.fr/blog/guide-assurances-professionnelles/",
    },
    {
      tag: "Assurance",
      title: "Le calendrier des échéances fiscales en micro-entreprise",
      resume:
        "Comme tous les statuts juridiques, le régime de la micro-entreprise comporte des charges sociales et fiscales. En tant que micro-entrepreneur·se, vous devez respecter les délais de déclaration et de règlement. Si vous dérogez à la règle, vous encourez des sanctions financières. Voici donc vos impératifs et les dates d’échéances fiscales à respecter en tant qu’auto-entrepreneur·se !",
      date: "12 octobre 2023",
      timeRead: 5,
      link: "https://www.shine.fr/blog/calendrier-fiscal-micro-entrepreneur/",
    },
  ];

  return (
    <section>
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-12 md:text-5xl">
            Mes <span className="text-primary">derniers</span> articles
          </h2>

          <div className="mb-12 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
            {/* article */}
            {listArticle.map((article, index) => (
              <Link
                href={article.link}
                key={index}
                className="flex w-full flex-col gap-4 rounded-md border border-solid border-border px-4 py-8  md:max-w-xs md:px-0 md:py-0"
              >
                <div className="px-6 py-4">
                  <p className="mb-4 text-xs font-semibold uppercase text-muted-foreground">
                    {/* tag article */}
                    {article.tag}
                  </p>
                  <p className="mb-4 text-xl text-primary font-semibold">
                    {/* title article */}
                    {article.title}
                  </p>
                  <p className="mb-6 text-muted-foreground">
                    {/* resume article */}
                    {article.resume}
                  </p>
                  <div className="mx-auto flex max-w-lg flex-row items-start">
                    <div className="flex flex-col items-start">
                      <div className="flex flex-col items-start text-sm text-orangespd lg:flex-row">
                        {/* date article */}
                        {article.date}
                        <p className="ml-2 mr-2 hidden lg:block">-</p>
                        {/* time read article */}
                        <p>{article.timeRead} mins </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
