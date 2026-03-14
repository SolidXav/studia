
### Data types:

>[!info]
>**Prymityw (Typ prosty)** - "Czyste" wartości, które nie mają żadnych dodatkowych metod. Zaczynają się zawsze z małej litery(int, double, boolean). Służą do przechowywania prostej wartości. Nie mogą być null. Szybkie i zajmują mało miejsca.
>
**Obiekt (Typ referencyjny)** - Struktura, która zawiera dane oraz metody (instrukcje). Przechowuje adres do miejsca w pamięci. Zaczynają się zazwyczaj z wielkiej litery (String, Integer). Mają metody (string.toLowerCase()). Mogą mieć wartość null. 
>
>**Char** - zapisujemy za pomocą $'c'$, **String** - zapisujemy za pomocą $"string"$.


| Z:            | Do:     | Metoda:                                   |
| ------------- | ------- | ----------------------------------------- |
| int           | String  | String.valueOf(n),<br>Integer.toString(n) |
| String        | int     | Integer.parseInt(s)                       |
| double        | String  | String.valueOf(d)                         |
| String        | double  | Double.parseDouble(s)                     |
| char          | String  | String.valueOf('c')                       |
| String        | char    | str.charAt(jakis index)                   |
| String        | char[]  | str.toCharArray()                         |
| boolean       | String  | String.valueOf(true)                      |
| String        | boolean | Boolean.parseBoolean("true")              |
| int           | double  | double d = i;                             |
| double        | int     | int i = (int) d;                          |
| any primitive | String  | String.valueOf(val)                       |



> [!info] String
> ```java
> string.repeat(ilosc) 
> //Tak jak mnozenie stringa w python
> string.toUpperCase()
> //Zmienia calego str na wielkie znaki
> ```

### Instrukcje warunkowe


>[!info] Operator trójargumentowy - skrócone if-else
>```java
>String wynik = warunek ? wynik_true : wynik_false;
>// Przykład:
>int wiek = 19; String status = (wiek >= 18) ? "Dorosły" : "Małoletni"; System.out.println(status); // Wypisze: Dorosły
>```



### Logika


| &&  | \|\| | !warunek | &         | \|       | ^   |
| --- | ---- | -------- | --------- | -------- | --- |
| and | or   | negacja  | pełne and | pełne or | xor |

# Java.util

>[!info] Tworzenie zwykłych tablic (Arrays)
>```java
>String[] pustaTalica = new String[5];
>// Tworzy pustą tablicę o sztywnym rozmiarze 5 elementów
>int[][] szachownica = new int[8][8]
>// Tworzy tablicę dwuwymiarową
>```

>[!info] Tworzenie Zbiorów
>```java
>Set<String> mojHashSet = new HashSet<>();
>// Tworzy zbior, w którym nie ma duplikatów. Kolejność elementów wewnątrz jest nieprzewidywalna.
>Set<String> mojTreeSet = new TreeSet<>();
>// Tworzy zbiór drzewo. Nie ma duplikatów, ale elementy są od razu automatycznie posortowane
>Set<String> mojLinkedHashSet = new LinkedHashSet<>();
>// Tworzy zbiór bez duplikatów, ale w przeciwieństwie do Hash pamięta kolejnośc dodawania elementów
>```

>[!info] Tworzenie map/słowników
>```java
>Map<String, Integer> mojaHashMapa = new HashMap<>();
>// Tworzy mapę przechowującą pary klucz - String -> Wartość. Kolejność par jest losowa.
>Map<String, Integer> mojaTreeMapa = new TreeMap<>();
>// Tworzy mapę opartą na drzewie. Elementy są automatycznie sortowane rosnąco względem kluczy.
>Map<String, Integer> mojLinkedHashMap = new LinkedHashMap<>();
>// Tworzy mapę, która pamięta dokładną kolejność, w jakiej pary klucz-wartość zostały do niej dodane.
>```

>[!info] Tworzenie list
>```java
>List<String> moja arrayLista = new ArrayList<>();
>// Tworzy najpopularniejszą listę. Zwykła, "rozciągliwa tablica". Bardzo szybka do odczytu - używaj domyślnie.
>List<String> mojaLinkedLista = new LinkedList<>();
>// Tworzy listę wiązaną. Używaj tylko wtedy, gdy musisz ciągle dodawać lub usuwać elementy z samego początku/środka.
>```

>[!info] Tworzenie gotowych (niemodyfikowalnych) kolekcji
>```java
>List<String> gotowaLista = List.of("A","B","C");
>// Tworzy małą listę. Tylko do odczytu
>Set<Integer> gotowySet = Set.of(1,2,3);
>// Tworzy mały zbiór bez duplikatów
>Map<String, Integer> gotowaMapa = Map.of("K1", 100, "K2", 200);
>// Tworzy mapę z konkretnymi parami
>```

>[!info] Operacje na listach (java.util.Collections)
>```java
>Collections.sort(lista);
>// Najszybszy sposób na ułożenie elementów (domyślnie rosnąco).
>Collections.reverse(lista);
>// zamienia kolejność elementów na przeciwną.
>Collections.shuffle(lista);
>// losowo zmienia kolejność.
>Collections.binarySearch(lista, element);
>// Bardzo szybkie szukanie w posortowanej liście.
>Collections.swap(lista, i, j);
>// zamienia miejscami elementy o indeksach i oraz j.
>```

>[!info] Tworzenie specjalnych List i Setów
>```java
>Collections.singletonList("tylkoJa");
>// tworzy niemodyfikowalną listę z jednym obiektem.
>Collections.emptyList();
>// Tworzy pustą listę
>Collections.emptySet();
>// Tworzy pusty set
>Collections.unmodifiableList(lista);
>// tworzy "widok" listy, którego nie da się zmienić
>```

>[!info] Operacje wspólne (Listy i Sety)
>```java
>Collections.frequency(kolekcja, obiekt);
>// zwraca informację, ile razy dany element występuje
>Collections.min(kolekcja);
>Collections.max(kolekcja);
>// min i max w kolekcji
>Collections.fill(lista, "X");
>// zamienia wszystkie elementy listy na podaną wartość.
>```


>[!info] Sety (Zbiory) - unikalność danych
>
> **HashSet** - Najszybszy, ale nie gwarantuje żadnej kolejności.
> **TreeSet** - Automatycznie sortuje elementy (np. alfabetycznie).
> **LinkedHashSet** - Zachowuje kolejność, w jakiej dodawałeś elementy (pamięta "historię" dodawania).

>[!info]  Podstawowe operacje na ArrayList (java.util.ArrayList)
>```java
>lista.add("element);
>// Dodaje nowy element na koniec listy.
>lista.get(0);
>// Pobiera element z podanego indeksu
>lista.size();
>// Zwraca aktualną listę elementów 
>lista.isEmpty();
>// zwraca true, jeśli nie ma żadnych elementów
>lista.set(index, "nowy element");
>// Zastępuje stary element pod podanym indeksem 
>lista.remove(index);
>// Usuwa element z podanego indeksu i automatycznie przesuwa
>lista.clear();
>// Usuwa absolutnie wszystkie elementy.
>```

>[!info] Konwersje Listy i Tablicy
>```java
>lista.toArray(new String[0]);
>// Zamienia ArrayList<String> z powrotem na zwykłą tablicę String
>Arrays.asList("a","b","c");
>// Szybkie tworzenie listy ze z góry podanych elementów
>new ArrayList<>(Arrays.asList(zwyklaTablica));
>// Konwertuje zwykłą tablicę na pełnoprawną, modyfikowalną ArrayListę.
>```

>[!info] Przydatne operacje na zwykłych tablicach
>```java
>Arrays.toString(tablica);
>// Zamienia zwykłą tablicę na czytelny string
>Arrays.sort(tablica);
>// Sortuje elementy 
>Arrays.equals(tablica1, tablica2);
>// Sprawdza, czy dwie tablice mają dokładnie te same elementy w takiej samej kolejności
>```

