
#include <iostream>;

/*
NOTE:
	1. To ensure that the months are resolved to the relevant indexes, I ingored index 0 altogether (it does not represent any month)
	2. The validation rules and loop condiitons will mainly handle and enforce this behaviour
	3. The data that is not changing is defined as constants at the top to allow accessibility at a global scope
	4. In the class, I also defined private utility functions to be used in multiple places in the code
	5. The overloaded constructor with two paremeters simply calls the setdate() method and this ensures the Do not repeat yourself (DRY) principle
	6. To effectively work with date objects in some areas of the code, the Date struct/record was defined.
*/

const std::string MONTHS[13] = { "", "January", "Febrary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" };
const int MONTH_DAYS[13] = { 0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 };
const std::string DAYS[7] = { "Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" };


struct Date {
	int day;
	int month;
};


class date2013 {

private:
	int m;
	int d;

	int getDayofYear(Date date) {
		int index = 1;
		int previousDays = date.day;
		while (index < date.month) {
			previousDays += MONTH_DAYS[index];
			index++;
		}
		return previousDays;
	}

	Date getDate(int day) {
		Date date;

		int previousDays = 0;
		for (int i = 1; i <= 12; i++) {
			previousDays += MONTH_DAYS[i];
			if (previousDays >= day) {
				int lastMonthLastDay = previousDays - MONTH_DAYS[i];
				date.month = i;
				date.day = day - lastMonthLastDay; // Get the specific day
				return date;
			}
		}
		
		// if not found - invalid date
		date.day = -1;
		date.month = -1;
		return date;
	}


public:
	date2013() {
		d = 1;
		m = 1;
	}
	date2013(int dd) {
		if (!(dd > 0 && dd <= 365)) {
			std::cout << "The specified value is not within a legal bound!" << std::endl;
			m, d = -1, -1;
			exit(1);
		}
		else {
			Date date = getDate(dd);
			m = date.month;
			d = date.day;
		}

		
	}
	date2013(int dd, int mm) {
		setdate(dd, mm); // ensure DRY principle
	}


	void setdate(int dd, int mm) {
		bool m_condition = mm >= 1 && mm <= 12;
		bool d_condition = dd >= 1 && dd <= MONTH_DAYS[mm]; // between the range of this month
		if (m_condition && d_condition) {
			m = mm;
			d = dd;
		}
		else {
			std::cout << "The specified date is not found in 2013" << std::endl;
			m, d = -1, -1;
			exit(1);
		}
	}


	void print(){
		if (m == -1 && d == -1) {
			std::cout << "a date not in 2013" << std::endl;
			exit(1);
		}

		Date currentDate;
		currentDate.day = d;
		currentDate.month = m;

		int day = getDayofYear(currentDate);
		int dayofWeekIndex = (2 + day - 1) % 7;
		std::cout << DAYS[dayofWeekIndex] << ", " << MONTHS[currentDate.month] << " "<<currentDate.day << ", 2013";
	}

	void plusday(int days) {
		Date currentDate;
		currentDate.month = m;
		currentDate.day = d;


		int currentDayofYear = getDayofYear(currentDate);
		int newDayofYear = currentDayofYear + days;

		if (newDayofYear > 365) {
			std::cout << "After adding the days, they now extend beyond legitimate bound" << std::endl;
			exit(1);
		}
		else {
			Date newDate;
			newDate = getDate(newDayofYear);
			m = newDate.month;
			d = newDate.day;
		}
	}
};


int main() {

	int day, month, difference;

	// default constuctor and print (The program should be able to print the default date
	date2013 object;
	std::cout << "The default date is : ";
	object.print();
	std::cout<< std::endl;

	// constructor with one parameter with second and third output line
	date2013 object1(70);
	date2013 obj(365);
	object1.print();
	std::cout << std::endl;
	obj.print();
	std::cout << std::endl;

	// constructor with two parameters
	// Kindly input any date here
	std::cin >> day >> month >> difference;
	date2013 object2(day, month);
	std::cout << difference << " days after ";
	object2.print();
	object2.plusday(difference);
	std::cout << " is ";
	object2.print();
	std::cout << std::endl;

	std::cin >> day >> month >> difference;
	date2013 object3(day, month);
	std::cout << difference << " days after ";
	object3.print();
	object3.plusday(difference);
	std::cout << " is ";
	object3.print();
	std::cout << std::endl;

	// setdate method
	object2.setdate(13,12);
	object2.print();
	std::cout << std::endl;

	// plusday method
	object2.plusday(3);
	object2.print();
	std::cout << std::endl;

	object2.plusday(17);
	object2.print();
	std::cout << std::endl;


	return 0;
}
