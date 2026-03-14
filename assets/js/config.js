/* ─────────────────────────────────────────────────────────
   config.js — jedyne miejsce, w którym dodajesz treści
   ───────────────────────────────────────────────────────── */
window.SH = {

  /* semestry widoczne w zakładkach */
  semesters: [
    { id: 'stc', label: 'Statystyka - Ćw' },
    { id: 'stw', label: 'Statystyka - Wyk' },
    {id: 'poc', label: 'Programowanie obiektowe - Ćw' },
    {id: 'pow', label: 'Programowanie obiektowe - Wyk' },
    {id: 'mc', label: 'Mikroekonomia - Ćw' },
    {id: 'mw', label: 'Mikroekonomia - Wyk' },
    {id: 'matc', label: 'Matematyka - Ćw' },
    {id: 'matw', label: 'Matematyka - Wyk' },
  ],

  /* ── PLIKI DO POBRANIA ─────────────────────────────────
     path: ścieżka relatywna do katalogu /files/
     type: 'java' | 'r' | 'other'
  */
  files: {
    stc: {
      java: [
        // { name: 'Lab01_Hello.java', path: 'java/sem1/Lab01_Hello.java', size: '2 KB' },
      ],
      r: [
         { name: 'rossmann.qmd', path: 'r/sem1/rossmann.qmd', size: '1 KB' },
      ],
    },
    stw: {
      java: [],
      r: [
        {name: 'wyk1.r', path: 'r/sem1/wyk1.r', size: '1 KB' },
      ],
    },
  },

  /* ── QUIZY ─────────────────────────────────────────────
     file: ścieżka do pliku quiz.html w /quizzes/
  */
  quizzes: {
    sem1: [
      { id: 'java-basics', name: 'Podstawy Javy', subject: 'Java',
        file: 'sem1/java/quiz.html', questions: 5, difficulty: 'łatwy' },
    ],
    sem2: [],
  },

  /* ── NOTATKI ───────────────────────────────────────────
     file: ścieżka do pliku .md w /notes/
  */
  // Notatki ładowane są przez pliki notes/data-<id>.js
  // Dodaj plik notes/data-mojanotka.js i zarejestruj tutaj.
  notes: [
    { id: 'java', name: 'Java Cheatsheet', emoji: '☕',
      desc: 'Typy danych, String, Collections, Sety i więcej.' },
  ],
};
