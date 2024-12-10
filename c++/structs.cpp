
#include <iostream>


void line(char a, int lenght b){
    for(int i = 0; i < b; i++){
        std::cout << a;
    }
    std::cout;
}

struct Student {
    std::string name;
    std::string surname;
};

std::istream operator>>(std::istream is, Student &S){
    S.name >> S.surname
}

void viewCidByDiease(
    std::string file1,
    std::string file2,
    std::string county,
    std::string gender,
    int year,
){
    std::cout << "COUNTY NAME : " << county << std::endl;
    std::cout << "GENDER/SEX : " << county << std::endl;
    std::cout << "YEAR : " << county << std::endl;
    line("=", 100);
    std::cout << "DIS-CODE  DIS-NAME    COUT    RATE" << std::endl;
    line("=", 100);

}


int main (){


}