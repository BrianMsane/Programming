import java.util.Date;

public class Hello {
    public static void main(String[] args){

        Date today = new Date();
        String msg = "Hello, world";
        String name = "Brian";
        char grade = 'A';
        byte age = 50;

        System.out.println(msg + " I am learning Java on " + today);
        System.out.println("My name is " + name + " I am " + age + " years old");
        System.out.println("For this course I got "+ grade);
    }
}
