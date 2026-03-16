package lab2;

public class Weryfikacja {

	public static void main(String[] args) {
		int wiek = -3;
		if(wiek<0) {
			System.out.println("Podany wiek nie może być ujemny!");
		}else if(wiek>=18) {
			System.out.println("Program przeznaczony wyłącznie dla dzieci!");
		}else {
			System.out.println("Witaj w programie dla dzieci!");
		}

	}

}
