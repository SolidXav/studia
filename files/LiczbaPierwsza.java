package lab2;

public class LiczbaPierwsza {

	public static void main(String[] args) {

		int zakresOd = 10;
		int zakresDo = 110;
		for (int i = zakresOd; i <= zakresDo; i++) {
			if (czyPierwsza(i)) {
				System.out.println(i + "jest");
			} else {
				System.err.println(i + "nie");
			}
		}
	}

	public static boolean czyPierwsza(int liczba) {
		for (int i = 2; i < liczba; i++) {
			if (liczba % i == 0) {
				return false;

			}
		}
		return true;
	}
}
