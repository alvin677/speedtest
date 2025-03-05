// CppSpeedTest.cpp : This file contains the 'main' function. Program execution begins and ends there.

#include <iostream>
#include <chrono>
#include <vector>
//#pragma comment(linker, "/STACK:400000024")
int main()
{
    std::vector<int> array = std::vector<int>();
    std::chrono::steady_clock::time_point t1 = std::chrono::steady_clock::now();
    for (int i = 0; i < 100000000; i++) {
        array.push_back(i);
    }
    std::chrono::steady_clock::time_point t2 = std::chrono::steady_clock::now();
    auto d_nano = std::chrono::duration_cast<std::chrono::nanoseconds>(t2 - t1).count();
    std::cout << d_nano << " ns\n";
}
