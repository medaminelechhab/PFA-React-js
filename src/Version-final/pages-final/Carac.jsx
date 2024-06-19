import React from "react";
import Carte from "../Composent-final/Carte";
import temps from "../../assets/images/icon-time.webp";
import tarifs from "../../assets/images/icon-tarifs.webp";
import expertise from "../../assets/images/icon-expertise.webp";
import flexibilite from "../../assets/images/icon-flexibilite.webp";
import reduction from "../../assets/images/icon-reduction.webp";
import vision from "../../assets/images/icon-vision.webp";

export default function Carac() {
  return (
    <div className="flex flex-col mx-32 items-center py-8  bg-gray-200 rounded-3xl">
      <h2 className="text-2xl font-bold text-gray-600 mb-10">
        Les avantages de confier une mission à un freelance
      </h2>
      <div className="flex ">
        <Carte
          imgSrc={temps}
          title="Rapidité"
          description="Que ce soit pour une mission courte ou pour des missions sur le long terme, vous trouverez toujours un freelance disponible sur Codeur.com pour réaliser votre projet dans vos délais."
        />
        <Carte
          imgSrc={tarifs}
          title="Tarifs attractifs"
          description="Lorsque vous confiez un projet à une agence ou à une entreprise, cette dernière a des frais fixes qui se répercutent sur la facture. Le travailleur freelance propose généralement ses services à un tarif plus attractif qu'une entreprise traditionnelle."
        />
        <Carte
          imgSrc={expertise}
          title="Expertise"
          description="Quand vous faites appel à un freelance, vous faites réaliser votre projet à un spécialiste dans un domaine très précis. C'est d'autant plus vrai dans le secteur informatique, où il existe de nombreux langages de programmation et des technologies variées."
        />
      </div>
      <div className="flex mt-10">
        <Carte
          imgSrc={flexibilite}
          title="Flexibilité"
          description="Un freelance est un entrepreneur généralement plus adaptable qu'une grande entreprise qui dispose de process longs et complexes. Vous pouvez plus facilement procéder à des ajustements dans les missions que vous lui attribuez."
        />
        <Carte
          imgSrc={reduction}
          title="Investissement réduit"
          description="Lorsque vous faites appel à un freelance, il utilise ses propres outils de travail (matériel, logiciels). Votre entreprise réalise ainsi des économies, en évitant une embauche et les cotisations qui l'accompagnent, tout en limitant les investissements matériels associés."
        />
        <Carte
          imgSrc={vision}
          title="Vision extérieure"
          description="Un freelance apporte un regard neuf votre projet. Le choix vous revient de lui demander de réaliser sa mission en tant qu’exécutant ou en tant que spécialiste capable d’apporter des idées innovantes pour votre entreprise."
        />
      </div>
    </div>
  );
}
