window.QUIZ_DATA = {
  title:   'Podstawy Javy',
  subject: 'Java — Semestr 1',
  questions: [
    {
      question: 'Co wyświetli poniższy kod?',
      code: 'System.out.println("Hello" + 1 + 2);',
      options: ['Hello12','Hello3','Błąd kompilacji','3Hello'],
      answer: 0,
      explanation: 'Konkatenacja odbywa się od lewej: "Hello"+1 → "Hello1", potem "Hello1"+2 → "Hello12".'
    },
    {
      question: 'Które słowo kluczowe służy do dziedziczenia w Javie?',
      options: ['implements','extends','inherits','super'],
      answer: 1,
      explanation: 'Klasa dziedziczy po innej za pomocą "extends". "implements" służy do implementacji interfejsu.'
    },
    {
      question: 'Jaki jest domyślny zakres widoczności składowej bez modyfikatora dostępu?',
      options: ['public','private','protected','package-private'],
      answer: 3,
      explanation: 'Brak modyfikatora = package-private (dostępne tylko w tym samym pakiecie).'
    },
    {
      question: 'Który typ w Javie jest typem referencyjnym?',
      options: ['int','double','boolean','String'],
      answer: 3,
      explanation: 'String to obiekt (typ referencyjny). int, double, boolean to typy prymitywne.'
    },
    {
      question: 'Co to jest JVM?',
      options: [
        'Java Virtual Machine — środowisko uruchomieniowe',
        'Java Variable Manager',
        'Just-in-time Version Module',
        'Java Visual Monitor'
      ],
      answer: 0,
      explanation: 'JVM (Java Virtual Machine) interpretuje i wykonuje bytecode Javy, zapewniając przenośność programów.'
    },
  ]
};
