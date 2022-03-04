#include <iostream>
#include <vector>
#include <thread>

int calc(int i)
{
    if (i < 3)
    {
        return 1;
    }

    return calc(i - 1) + calc(i - 2);
}

int fibonacci(int i)
{
    int result = calc(i);

    std::cout << ("Result: %d \n", result) << std::endl;

    return result;
}

int main()
{
    std::vector<std::thread> vec;
    for (int i = 0; i < 5; i++)
    {
        std::thread t(fibonacci, i * 10);
    }
}
