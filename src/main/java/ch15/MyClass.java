package ch15;

class A {
	//변수
	int b = 10;
	String s = "자바";
	
	//메소드
	void prn() {
		System.out.println("b:" + b);
	}
}

public class MyClass {
	public static void main(String[] args) {
		//클래스(붕어빵을 만드는 틀) : 객체(붕어빵)을 만드는 틀
		//클래스는 반드시 대문자로 시작하고, 클래스를 생성(new)을 하면 객체가 만들어짐.
		//객체안에는 변수와 메소드가 존재
		String s = new String();
		s= "qwer";
		System.out.println(s.length());
		System.out.println(s.toUpperCase());
		
		A a1 = new A();
		//레퍼런스 변수 : 생성된 객체를 가르키고 있는 변수
		//클래스에 선언된 변수와 메소드 사용방법
		//레퍼런스 변수.변수, 레퍼런스 변수.메소드
		a1.b = 20;
		a1.prn();
		System.out.println(a1.s.length());
		//반지름이 5인 원의 넓이를 출력
		//자바에서 상수는 모든 철자를 대문자로 표기
		System.out.println(5*5*Math.PI);
	}
}
