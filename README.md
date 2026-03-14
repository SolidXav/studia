# StudyHub

Centrum nauki na GitHub Pages — quizy, notatki, pliki z zajęć.

## Uruchomienie

**GitHub Pages:** Settings → Pages → Source: `main`, folder `/`

**Lokalnie:** otwórz `index.html` w przeglądarce.

---

## Dodawanie treści

Cały content zarządzany jest przez jeden plik: **`assets/js/config.js`**

### Plik do pobrania

```js
// config.js → files.sem1.java
{ name: 'Lab01.java', path: 'java/sem1/Lab01.java', size: '2 KB' }
```
Następnie wgraj fizyczny plik do `files/java/sem1/`.

### Quiz

1. Skopiuj `quizzes/_template/` → `quizzes/sem1/moj-quiz/`
2. Wypełnij `questions.js`
3. Dodaj wpis w `config.js`:
```js
// config.js → quizzes.sem1
{ id: 'moj-quiz', name: 'Mój Quiz', subject: 'Java',
  file: 'sem1/moj-quiz/quiz.html', questions: 10, difficulty: 'łatwy' }
```

### Notatka (plik .md)

1. Wgraj plik `notes/moje-notatki.md`
2. Dodaj w `config.js`:
```js
// config.js → notes
{ id: 'moje', name: 'Moje notatki', emoji: '📝',
  desc: 'Krótki opis.', file: 'moje-notatki.md' }
```

---

## Struktura

```
├── index.html
├── assets/
│   ├── css/base.css
│   └── js/
│       ├── config.js   ← edytuj, aby dodawać treści
│       └── shared.js
├── quizzes/
│   ├── index.html
│   ├── _template/      ← szablon quizu
│   └── sem1/java/      ← gotowy przykładowy quiz
├── files/
│   ├── index.html
│   ├── java/sem1/, java/sem2/
│   └── r/sem1/, r/sem2/
└── notes/
    ├── index.html
    └── viewer.html
```
