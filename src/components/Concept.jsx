import React from 'react'
import user from '../icons/user.png'
import calendar from '../icons/calendar.png'
import euro from '../icons/euro.png'

function Concept() {
  return (
    <div className='ml-32 mt-12  border rounded-lg border-gray-300 w-6/12 p-6 bg-white shadow-md'>
      <h1 className='text-2xl font-bold mb-2'>Concept de code en Trois dimensions</h1>
      <div className='flex items-center'>
        
        <p className='text-gray-600 font-semibold ml-2'><span className='text-5xl text-green-500 mr-1'>.</span>Ouvert · 500 € à 1000 € · 36 vue</p>
      </div>

      <button className="mt-4 bg-green-500 hover:bg-green-700 text-white font-medium text-sm py-2 px-4 rounded-full">
        Publier un projet similaire
      </button>

      <div className='border-t mt-6 mb-4 border-gray-200'></div>

      <p className='text-gray-600 text-sm font-medium mb-2'>Je souhaite proposer, à des programmateurs, une idée novatrice qui peut être très utile dans de nombreux secteurs d'activité comme la médecine, la modélisation, les jeux vidéos ou bien la cryptographie.</p>
      <p className='text-gray-600 mb-2 text-sm font-medium'>Cette dernière consiste à créer un code en trois dimensions. Un code (qui peut être lu de haut en bas, de gauche à droite et en profondeur) ouvre de nouvelles possibilités dans les domaines cités et offre ainsi une flexibilité nouvelles. Ce qui améliore la compréhension des phénomènes complexes et des relations entre les données. Je recherche donc des programmateurs qui, visualisent les différents avantages de ce type de code. Je souhaite donc collaborer avec vous pour créer de nouveaux codes afin d'améliorer la modélisation 3D des données médicales par exemple ou autre. Je souhaite surtout proposer l'idée car d'après ChatGPT cela peut être révolutionnaire. Exemple :</p>
      <pre className='bg-gray-100 p-4 rounded text-gray-800 mb-4 text-sm font-medium'>
        <code>
          {`import numpy as np\nimport matplotlib.pyplot as plt\nfrom mpl_toolkits.mplot3d import Axes3D\n\n# Création de données 3D\nx = np.linspace(-5, 5, 100)\ny = np.linspace(-5, 5, 100)\nx, y = np.meshgrid(x, y)\nz = np.sin(np.sqrt(x**2 + y**2))\n\n# Affichage en 3D\nfig = plt.figure()\nax = fig.add_subplot(111, projection='3d')\nax.plot_surface(x, y, z, cmap='viridis')\nax.set_xlabel('X')\nax.set_ylabel('Y')\nax.set_zlabel('Z')\n\nplt.show()`}
        </code>
      </pre>

      <div className='flex items-center mb-3'>
        <div className='flex justify-center items-center border rounded-full w-7 h-7 bg-blue-100'>
          <img className='w-3 h-3' src={euro} alt='' />
        </div>
        <h1 className='ml-2 text-gray-600 text-sm font-medium'>Budget indicatif : </h1>
        <h1 className='ml-1 font-bold text-gray-600 text-base'>500 € à 1 000 €</h1>
      </div>

      <div className='flex items-center mb-3'>
        <div className='flex justify-center items-center border rounded-full w-7 h-7 bg-blue-100'>
          <img className='w-3 h-3' src={calendar} alt='' />
        </div>
        <h1 className='ml-2 text-gray-600 text-sm font-medium'>Publication : </h1>
        <h1 className='ml-1 font-bold text-gray-600 text-base'>20 mai 2024 à 21h08</h1>
      </div>

      <div className='flex items-center mb-3'>
        <div className='flex justify-center items-center border rounded-full w-7 h-7 bg-blue-100'>
          <img className='w-3 h-3' src={user} alt='' />
        </div>
        <h1 className='ml-2 text-gray-600 text-sm font-medium'>Profils recherchés : </h1>
        <h1 className='ml-1 font-bold text-gray-600 text-base'> Développeur spécifique, Développeur Machine Learning</h1>
      </div>
    </div>
  )
}

export default Concept
