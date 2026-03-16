package lab2;

public class algorytm {
	public static void main(String[] args) {
		int liczba = 100;
		int dzielnik = 2;
		while(true) {
			if(dzielnik<liczba) {
				System.out.println("Liczba jest liczba jest pierwszą");
				break;
			}else if(liczba%dzielnik==0) {
				System.out.println("Liczba jest podzielna przez dzielnik i nie jest pierwsza");
				break;
				
			}
			dzielnik++;
			
		}
		

	}

}
