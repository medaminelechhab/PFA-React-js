import React from 'react'
import QAResponse from './composants/QAResponse '

export default function Qa() {
  return (
    <div className='ml-28 mt-12'>
      <div className='flex flex-col'>
      <div>
        <div className='inline-block w-1/2'>
      <QAResponse
      question="Comment recevoir des devis gratuitement ?"
      reponse="Lorsque vous déposez une mission sur Codeur.com, soyez le plus précis possible pour recevoir des devis pertinents ! Précisez le contour des missions à confier au travailleur indépendant, les technologies que vous utilisez, les compétences que vous recherchez. Essayez d'évaluer au mieux le budget dont vous disposez pour recevoir des propositions en adéquation avec votre projet."
      />
    </div>
    <div className='inline-block w-1/2'>
      <QAResponse
      question="Faut-il signer un contrat avec un freelance ?"
      reponse="Signer un devis ou un contrat quand vous travaillez avec d'autres entreprises, c'est mettre une sécurité pour les deux parties qui collaborent.

      Vous hésitez à embaucher un freelance pour réaliser votre projet ? Travailler avec un freelance, c'est travailler avec un prestataire indépendant. Mais c'est avant tout un professionnel comme un autre, quel que soit son statut. Signer un devis ou un contrat commercial permet de définir les contours de la mission que vous lui confiez, les conditions de votre collaboration ainsi que les obligations de chacune des deux parties.
      
      Pensez à inclure le maximum de détails dans votre brief et demandez au freelance d'être exhaustif dans son devis, comme vous le feriez avec n'importe quelle autre entreprise."
      />
    </div>
    </div>
    <div className='mt-6'>
        <div className='inline-block w-1/2'>
      <QAResponse
      question="Comment choisir le meilleur freelance informatique sur Codeur.com ?"
      reponse="Définissez bien votre besoin pour obtenir des propositions des freelances les plus adaptés à votre projet. Le secteur informatique et le développement informatique sont vastes et il existe de nombreuses spécialités. Un entrepreneur est souvent spécialisé dans une technologie ou dans un langage de programmation. Ainsi, si vous cherchez à faire réaliser une application mobile ou un site internet, ce ne sont pas les mêmes indépendants dont vous aurez besoin.

      Pour trouver le meilleur freelance informatique pour réaliser votre mission, soyez le plus précis possible lorsque vous déposez votre offre !"
      />
    </div>
    <div className='inline-block w-1/2'>
      <QAResponse
      question="Comment payer le freelance sélectionné ?"
      reponse="Payez votre freelance comme vous payez vos prestataires habituels ! Codeur.com est une plateforme de freelance qui met en relation les freelances et les porteurs de projets comme vous.

      Lorsque vous choisissez de travailler avec un freelance, il vous suffit de signer son devis pour accepter ses conditions. Pour le paiement, discutez des modalités avec le freelance directement.
      
      De manière générale, le virement est le moyen de paiement le plus utilisé."
      />
    </div>
    <div className='mt-6'> 
    <div className='inline-block w-1/2'>
      <QAResponse
      question="De quel statut disposent les freelances de Codeur.com ?"
      reponse="La plupart des freelances disposent soit d'une micro entreprise, soit d'une entreprise individuelle. Certaines agences proposent également leurs services sur Codeur.com !

      Trouver un freelance sur notre plateforme, c'est choisir un professionnel spécialisé dans son domaine d'activité, avec la possibilité de comparer des offres de prestataires de tous horizons."
      />
    </div>
    </div>
    </div>
    </div>
    </div>

  )
}

