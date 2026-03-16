package lab2;

public class JavaConditions {

	public static void main(String[] args) {
		int number = 10;
		if(number<10) {
			System.out.println("Mniejsze niz 10");
			
		} else {
			System.out.println("Wieksze lub rowne 10");
		}
		String color = "black";
		switch(color) {
		case "black":
			System.out.println("Jestem czarny");
			break;
		case "yellow":
			System.out.println("Jestem zolty");
			break;
		case "blue":
			System.out.println("Jestem niebieski");
			break;
		default:
			System.out.println("Nie wiem jaki mam kolor");
			break;
		}

	}

}
