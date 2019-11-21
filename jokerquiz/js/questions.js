function getQuestions() {

  // Mock data
  const questions = [
    {
      text: '¿Cuál es el verdadero nombre del Joker?',
      image: 'img/question1.jpg',
      answers: [
        'Jack Napier',
        'Joe Wayne',
        'Arthur Fleck',
        'No se sabe realmente'
      ],
      correct: 3
    },
    {
      text: 'Al Joker se le conoce habitualmente como el Príncipe __________ del Crimen.',
      image: 'img/question2.jpg',
      answers: [
        'Loco',
        'Bufón',
        'Payaso',
        'Maestro'
      ],
      correct: 2
    },
    {
      text: '¿A qué compañera/o de Batman mató el Joker?',
      image: 'img/question3.jpg',
      answers: [
        'Batgirl (Barbara Gordon)',
        'Batgirl (Cassandra Cain)',
        'Robin (Damian Wayne)',
        'Robin (Jason Todd)'
      ],
      correct: 3
    },
    {
      text: '¿Cuál fue la primera aparición del Joker en los comics?',
      image: 'img/question4.jpg',
      answers: [
        'Batman #1',
        'Batman y Robin #1',
        'Detective Comics #42',
        'La broma asesina'
      ],
      correct: 0
    },
    {
      text: '¿De qué llevaba puesta una máscara el Joker en el arco argumental "Una muerte en la familia"?',
      image: 'img/question5.jpg',
      answers: [
        'De Batman',
        'De Robin',
        'De Alfred',
        'De su propia cara'
      ],
      correct: 3
    },
    {
      text: '¿A quién disparó y dejó en silla de ruedas el Joker en "La broma asesina"?',
      image: 'img/question6.jpg',
      answers: [
        'Tim Drake',
        'Barbara Gordon',
        'Comisario Gordon',
        'Jason Todd'
      ],
      correct: 1
    },
    {
      text: 'En la mayoría de las representaciones del personaje, ¿cómo fue "creado" el Joker?',
      image: 'img/question7.jpg',
      answers: [
        'Se cayó en un río contaminado de residuos tóxicos',
        'Se cayó en un tanque de productos químicos',
        'Se envenenó con su propia toxina de la risa',
        'Fue asesinado y resucitado por un payaso'
      ],
      correct: 1
    },
    {
      text: 'En "La broma asesina", ¿cómo se llamaba la esposa del Joker?',
      image: 'img/question8.jpg',
      answers: [
        'Joanie',
        'Jenny',
        'Jeannie',
        'No tenía esposa, no se sabe nada de su pasado'
      ],
      correct: 2
    },
    {
      text: 'El Joker originalmente formó parte de un grupo, conocido como...',
      image: 'img/question9.jpg',
      answers: [
        'Los Desheredados',
        'La Banda de la Capucha Roja',
        'La Banda del Triángulo Rojo',
        'La Corte de los Búhos'
      ],
      correct: 1
    },
    {
      text: '¿En cuál de los siguientes personajes ha tenido el Joker intereses amorosos a largo plazo?',
      image: 'img/question10.jpg',
      answers: [
        'Batgirl',
        'Catwoman',
        'Harley Quinn',
        'Poison Ivy'
      ],
      correct: 2
    }
  ]

  // Return data
  return questions
}