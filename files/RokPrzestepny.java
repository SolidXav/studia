package lab2;

public class RokPrzestepny {

	public static void main(String[] args) {
		int rok = 2344;
		
		if(czy400(rok) || czy4i100(rok)) {
			System.out.println(rok + " jest");
		}else {
			System.err.println(rok + " nie jest");
		}
	}
	public static boolean czy400(int rok) {
		return rok%400==0;
	}
	public static boolean czy4i100(int rok) {
		return rok%4==0 && rok%100!=0;
	}


}