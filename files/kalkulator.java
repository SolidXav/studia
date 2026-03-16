package lab2;

public class kalkulator {

	public static void main(String[] args) {
		int a = 7;
		int b = 5;
		System.out.println(dodaj(a,b));
		System.out.println(dodaj_czarnucha("Wiktor"));
	}
	public static int dodaj(int a, int b) {
		int result = a + b;
		return result;
		
	}
	public static String dodaj_czarnucha(String a) {
		String result = a + " " + "jest czarnuchem";
		return result;
	}

}