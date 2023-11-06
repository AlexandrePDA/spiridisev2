/* eslint-disable react/no-unescaped-entities */
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <h2 className="mb-2 p-4 text-primary text-3xl font-bold md:text-5xl text-center">
        FAQ
      </h2>
      <Accordion
        type="single"
        collapsible
        className="w-full p-4 md:w-1/2 mx-auto mt-12"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>J'ai un projet, comment on fait ?</AccordionTrigger>
          <AccordionContent>
            Si vous disposez d'un cahier des charges, vous me partagez les
            détails de votre projet. Au contraire, si votre idée est encore
            floue, nous pouvons la travailler ensemble. Dans tous les cas, nous
            en discutons autour d'un appel, d'un visio, d'un mail ou d'un café.
            Une fois le contrat signé, l'aventure peut commencer ! 🚀
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            Combien coûte la rédaction d'un article ?
          </AccordionTrigger>
          <AccordionContent>
            Il n'existe pas de prix unique pour la rédaction d'un article. La
            tarification dépend de facteurs variés mentionnés dans le cahier des
            charges. Contactez-moi pour obtenir un devis personnalisé. 📩
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            Quand vais-je recevoir mes livrables ?
          </AccordionTrigger>
          <AccordionContent>
            À la date convenue lors de la signature du contrat. Des envois
            intermédiaires sont prévus tout au long de la mission afin de vous
            permettre un suivi constant de l'évolution de vos contenus.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
