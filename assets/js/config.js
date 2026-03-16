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
        // { name: 'Lab01_Hello.java', path: 'java/sem1/Lab01_Hello.java', size: '2 KB', date: '2026-03-10' },
      ],
      r: [
         { name: 'Zajęcia 12.03.2026', path: 'rossmann.qmd', size: '1 KB', date: '2026-03-12' },
      ],
    },
    stw: {
      java: [],
      r: [
        { name: 'Wykład 10.03.2026', path: 'wyk1.r', size: '1 KB', date: '2026-03-10' },
      ],
    },
     poc: {
        java: [
           {name: 'algorytm', path: 'algorytm.java', size: '1 KB', date: '2026-3-16' },
            {name: 'JavaCasting', path: 'JavaCasting.java', size: '1 KB', date: '2026-3-16' },
            {name: 'JavaConditions', path: 'JavaConditions.java', size: '1 KB', date: '2026-3-16' },
            {name: 'kalkulator', path: 'kalkulator.java', size: '1 KB', date: '2026-3-16' },
            {name: 'Liczba Pierwsza', path: 'LiczbaPierwsza.java', size: '1 KB', date: '2026-3-16' },
            {name: 'LiczbyParzyste', path: 'LiczbyParzysteNieparzyste.java', size: '1 KB', date: '2026-3-16' },
            {name: 'loops', path: 'loops.java', size: '1 KB', date: '2026-3-16' },
            {name: 'Rokprzestepny', path: 'RokPrzestepny.java', size: '1 KB', date: '2026-3-16' },
            {name: 'Weryfikacja', path: 'Weryfikacja.java', size: '1 KB', date: '2026-3-16' },
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
     file: ścieżka relatywna do pliku .md w katalogu notes/
     Wrzuć plik .md z Obsidiana do katalogu notes/ i zarejestruj tutaj.
     Notatki pogrupowane wg semestru (klucz = id semestru).
  */
  notes: {
    poc: [
      { id: 'java', name: 'Java Cheatsheet', emoji: '☕',
        desc: 'Cheatsheet do programowania w java.',
        file: 'java.md' },
    ],
  },
};
