package lab2;

public class LiczbyParzysteNieparzyste {

	public static void main(String[] args) {
		int zakres = 34;
		
		for(int i = 0;i<=zakres;i++) {
			if(testuj(i)) {
				System.out.println("tak");
			}else {
				System.out.println("nie");
			}
	}
	}
	public static boolean testuj(int liczba){
		return liczba%2!=0;
	
	}

}