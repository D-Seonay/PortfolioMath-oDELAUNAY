// data.ts

export const projectsData = [
  {
    number: 1,
    category: 'Scolaire',
    title: 'Photothèque de Chatons',
    imageSrc: '/projects/Project1.jpg',
    description:
      "Petite photothèque de chatons en Symfony avec une base de donnée développé dans le cadre d'un cours.",
    githubLink: 'https://github.com/D-Seonay/ChatonsBDD',
  },
    {
        number: 2,
        category: 'Personnel',
        title: 'Card Flip Revise',
        imageSrc: '/projects/Project2.jpg',
        description:
            "FlipRevisionCard : Ce projet est une révision de la fonctionnalité de retournement de carte (card flip) en utilisant React.",
        githubLink: 'https://github.com/D-Seonay/FRC',
    },
    {
        number: 3,
        category: 'Personnel',
        title: 'Pokedex',
        imageSrc: '/projects/Project3.jpg',
        description:
            "Pokedex développé en utilisant Node.js et l'API PokeApiV2",
        githubLink: 'https://github.com/D-Seonay/Pokedex'
    },
    {
        number: 4,
        category: 'Scolaire',
        title: 'Gestionnaire de bibliothèque',
        imageSrc: '/projects/Project4.jpg',
        description:
            "Projet gestionnaire de bibliothèque en Python.",
        githubLink: 'https://github.com/D-Seonay/GestionnaireDeBibliotheque'
    }
    
] as const;