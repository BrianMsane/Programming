#include<iostream>
#include<fstream>
#include<iomanip>


void drawLine(char a, int length){
    for(int i =0; i < length; i++){
        std::cout << a;
    }
    std::endl;
}


void viewCidDataByDisease(string filename1, string filename2, int code){
    
    // print header section
    std::cout << "SUMMARY BY INFECTIOUS DISEASE" << std::endl;
    drawLine("=", 100);
    std::cout << std::setw(10)<< "DIS-CODE" 
        << std::setw(10)<< "DIS-CODE"
        << std::setw(50)<< "DIS-NAME"
        << std::setw(10)<< "YEAR"
        << std::setw(10)<< "COUNTY"
        << std::setw(10)<< "GENDER"
        << std::setw(10)<< "COUNT"
        << std::setw(10)<< "RATE"
        << std::endl;
    drawLine("=", 100);

    // logic
    std::ifstream cid_data;
    cid_data.open(filename1, std::ios::in);
    std::string first_line, dis_code, dis_name;
    int total_count = 0;
    float total_rate = 0.0;

    getline(cid_data, first_line); // skip the header
    while (getline(cid_data, firstline)){
        std::istringstream inputLine;
        inputLine >> dis_code >> disname;

        if (dis_code == code){
            std::cout << std::setw(10) << dis_code
                << std::setw(50) << dis_name;
            
            std::ifstream dis_data;
            std::string lineFile2;
            dis_data.open(filename2, std::ios::in);
            getline(dis_data, lineFile2);
            int disease_code, year, count, pop;
            std::string county, sex;

            while (getline(dis_data, lineFile2)){
                std::istringstream inputLine2;
                inputLine2 >> disease_code >> county >> year >> sex >> count >> pop;

                if (disease_code == dis_code){
                    if (count != 0){
                        float rate = (count * 100000 / pop);
                        total_count += count;
                        total_rate += rate;
                        std::cout << std::setw(10) << year
                            << std::setw(10) << county
                            << std::setw(10) << sex
                            << std::setw(10) << count
                            << std::setw(10) << std::setprecision(2) << rate
                            << std::endl;
                        }
                }
            }
            dis_data.close();
        }
        cid_data.close();

        drawLine("=", 100);
        std::cout << std::setw(10) << "TOTALS"
            << std::setw(80) << ""
            << std::setw(10) << total_count
            << std::setw(10) << std::setprecision(2) << total_rate
            << std::endl;
        drawLine("=", 100);
    }
}

int main (){
    viewCidDataByDisease(
        "disease_info.txt",
        "cid_data.txt",
        1
    );
    return 0;
}