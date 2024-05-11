import React from 'react'
import Carte from './composants/Carte'
import temps from '../icons/icon-time.webp'
import tarifs from '../icons/icon-tarifs.webp'
import expertise from '../icons/icon-expertise.webp'
import flexibilite from '../icons/icon-flexibilite.webp'
import reduction from '../icons/icon-reduction.webp'
import vision from '../icons/icon-vision.webp'

export default function Carac() {
  return (
    <div className='flex flex-col items-center mt-4'>
        <h2 className='text-3xl font-bold text-gray-600 mb-16'>Les avantages de confier une mission à un freelance</h2>
    <div className='flex mb-14'>
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
    <div className='flex'>
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
    
    
  )
}
