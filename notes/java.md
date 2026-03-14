
### Data types:

>[!info]
>**Prymityw (Typ prosty)** - "Czyste" wartości, które nie mają żadnych dodatkowych metod. Zaczynają się zawsze z małej litery(int, double, boolean). Służą do przechowywania prostej wartości. Nie mogą być null. Szybkie i zajmują mało miejsca.
>
**Obiekt (Typ referencyjny)** - Struktura, która zawiera dane oraz metody (instrukcje). Przechowuje adres do miejsca w pamięci. Zaczynają się zazwyczaj z wielkiej litery (String, Integer). Mają metody (string.toLowerCase()). Mogą mieć wartość null. 
>
>**Char** - zapisujemy za pomocą $'c'$, **String** - zapisujemy za pomocą $"string"$.

$$ D = 3213 + 1$$
>[!important] test
>hej

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

### String


> [!info]
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


| &&  | \|\| |
| --- | ---- |
| and | or   |

# Java.util

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

