import Link from "next/link";

type Article = {
  tag: string;
  title: string;
  resume: string;
  date: string;
  timeRead: number;
  link: string;
  client: string;
};

export function LastArticles() {
  const listArticle: Article[] = [
    {
      tag: "Free-lance",
      title: "Les avantages à être freelance",
      resume:
        "La voie qui mène au statut de freelance peut sembler longue et sinueuse. Synonyme d’instabilité, elle apparaît pour beaucoup comme un saut dans l’inconnu qui effraie. L’idée de quitter le confort du salariat pour l’aventure du freelancing peut générer des inquiétudes quant à la stabilité financière et à l’incertitude d’un avenir professionnel inédit.",
      date: "11 décembre 2023",
      timeRead: 5,
      link: "https://talks.freelancerepublik.com/avantages-freelance/",
      client: "Freelance Republik",
    },
    {
      tag: "Entreprise",
      title: "Comment réussir la vente de son entreprise haut la main ?",
      resume:
        "Une entreprise, ce n’est pas comme un canapé que l’on vend en 3 clics via Le Bon Coin. Il faut préparer son projet, faire des calculs, choisir le mode de cession adapté et trouver un repreneur. Une fois ces étapes passées, la vente de votre société peut avoir lieu. Qu’il s’agisse de la vente d’une SARL ou d’une SAS, voici les étapes à suivre pour vendre son entreprise étape par étape.",
      date: "28 novembre 2023",
      timeRead: 6,
      link: "https://www.shine.fr/blog/vendre-entreprise/",
      client: "Shine",
    },
    {
      tag: "Administratif",
      title:
        "Livre de recettes pour les auto-entrepreneurs : conseils et modèles pour une gestion efficace",
      resume:
        "La gestion comptable représente souvent une difficulté dans le quotidien des auto-entrepreneurs, qui peuvent rapidement se retrouver submergés. Même si ce statut juridique offre une simplicité bienvenue, il n’en reste pas moins une entreprise comportant son lot d’obligations, comme celle de tenir un livre de recettes. Et quand on ne sait pas de quoi il s’agit, c’est la panique.",
      date: "27 novembre 2023",
      timeRead: 5,
      link: "https://talks.freelancerepublik.com/livre-recettes-auto-entrepreneurs/",
      client: "Freelance Republik",
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
                      <div className="text-primary my-2">
                        {/* client article */}
                        {article.client}
                      </div>
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
