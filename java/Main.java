import java.util.Date;

public class Main {
    public static void main( String [] args){

    //primitive data types - variables
        byte age = 22;
        short salary = 22000;
        int id = 898_999_000;
        boolean isMale = true;
        float price = 77.99F;
        double weight = 56.99;
        long viewsCount = 999_999_999_999L;
        char grade = 'A';
        final float  PI = 3.143F; // constants
        double result = (double) 10 / double(3); // type casting
        price++;
        ++age;
        age -= 2; //augmented operations (same as c++)

    //reference data types -variables
        Date now = new Date();
        System.out.println(now);
        System.out.println(age);
        System.out.println(salary);

    // arrays
        int [] numbers = new int[5];
        int [] newNumbers = {1, 2, 3, 4, 5, 5, 6, 7}; // initialization
        newNumbers.length
        numbers[0] = 1;
        numbers[1] = 10;
        System.out.println(Arrays.toString(Arrays.sort(numbers)));
        System.out.println(Arrays.toString(newNumbers));
        System.out.println(newNumbers.length);

        // multi-dimensional arrays
        int [][] dimArray = new int[2][3];
        int [][] newDimArray = {{1, 2, 3}, {4, 5, 6}};
        dimArray[1][1] = 3;
        System.out.println(Arrays.deepToString(dimArray));

    // logical operators (&&, ||, !)
        int temperature = 25;
        boolean isWarm = temperature > 20 && temperature < 30;
        System.out.println(isWarm);

        boolean = hasHighIncome = true;
        boolean = hasGoodCredit = false;
        boolean = hasCriminalRecord = true;
        boolean isEligible = (hasHighIncome || hasGoodCredit) && !hasCriminalRecord;
        System.out.println(isEligible)


    // if statements
     String day = "Friday";
     boolean inMood = true;
     if (day == "Friday" && inMood) {
        System.out.println("It's a Friday so let's get coding man")
     } else if (day == "Friday" && !inMood) {
        System.out.println("Better study today man!")
     } else {
        String message = "You better read a pyschology book!";
        System.out.println(message);
     }
    }

    // tenary operator
    int income = 120_000;
    String className = (income >= 200_000) ? "First Class" : "Economy";

    // switch statments
    switch (day){
        case "Monday":
            System.out.print("Your schedule is tight today so get coffee and get going!");
            break;
        case "Tuesday":
            System.out.println("");
            break;
        default:
            System.out.println("Just any other day, do what you want")
    }

    // fizz-buzz (learning how to structure the order of your condition statements)
    Scanner scanner = new Scanner(System.in);
    System.out.print("Number: ");
    int num = scanner.nextInt();

    if (num % 5 == 0){
        String response = (num % 3) ? "FizzBuzz" : "Fizz"
        System.out.println(response);
    } else if (num % 3 == 0){
        System.out.println("Buzz");
    } else {
        System.out.println(num);
    }

    // For loops (better in situations when you know ahead of time the number of iterations to make)
    for (index = 0; index < 5; index++){
        System.out.print(index);
    }

    // while loops (better if we don't know how many iterations the code will make)
    int i = 0;
    while (i > 0){
        System.out.print(i)
        i--;
    }
    String input = "";
    while (!input.equals("quit")){
        System.out.print("input: ");
        input = scanner.next().toLowerCase();
    }

    // do..while loops (gets executed at least once)
    do {
        System.out.print("input: ");
        input = scanner.next().toLowerCase();
        if input.equals("pass")
            continue;
        if (input.equals("quit")){
            break;
        }
        System.out.println(input);
    } while(!input.equals('quit'));

    // for..each loop (iterate over arrays or collections)
    String[] fruits = {"apple", "mango", "orange"};
    for (String fruit: fruits){
        System.out.println(fruit)
    }

    // Morgate calculator
    final int = MONTHS_IN_YEAR = 12;

    while (true){
        System.out.print('Principal ($1K - $1M): ')
        int principal = scanner.nextInt();
        if (inputValue < 1000 && > 1_000_000){
            System.out.println("Enter a number between 1,000 and 1,000,000");
            continue;
        } else {
            while (true){
                System.out.println("Annual Interest Rate: ");
                int interest = scanner.nextInt();
                if (interest > 0 && interest <= 30)
                    System.out.print("Period (Years): ");
                    int years = scanner.nextInt();
                    if (years > 0 && <= 30){
                        numberOfPayments = years * MONTHS_IN_YEAR;
                    } else{
                        System.out.println("Enter a value greater than 0 and less than or equals to 30");
                    }
                    // calculate and print the morgate
                    double morgate = principal * Math.pow(1 _ monthlyInterest)
                    // break here!
                else
                    System.out.println("Enter a value greater than 0 and less than or equals to 30");
                    continue;
            }
        }
    }
}