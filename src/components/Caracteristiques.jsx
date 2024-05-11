import React from 'react'
import Card from './composants/Card'
import Message from '../icons/message.jpg'
import Montre from '../icons/montre.jpg'
import Gratuit from '../icons/gratuit.jpg'


export default function Caracteristiques() {
  return (
    <div className="flex justify-center">
      <Card
        imageSrc={Message}
        title="Simple"
        description="Décrivez votre projet en quelques mots sur la plateforme"
      />
      <Card
        imageSrc={Montre}
        title="Rapide"
        description="Recevez une dizaine de devis en quelques minutes"
      />
      <Card
        imageSrc={Gratuit}
        title="Gratuit"
        description="Choisissez le freelance idéal pour votre projet, sans obligation"
      />
    </div>
  )
}
