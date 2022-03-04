#include <iostream>
#include <string>
#include <stack>

long long MOD_NUM = 10 ^ 9 + 7;

bool is_number(const std::string &s)
{
    std::string::const_iterator it = s.begin();
    while (it != s.end() && std::isdigit(*it))
    {
        ++it;
    }
    return !s.empty() && it == s.end();
}

double evaluate(std::string optor, double operand1, double operand2)
{
    if (optor == "+")
    {
        return operand1 + operand2;
    }
    else if (optor == "-")
    {
        return operand1 - operand2;
    }
    else if (optor == "*")
    {
        return operand1 * operand2;
    }
    else if (optor == "/")
    {
        return operand1 / operand2;
    }
    else
    {
        throw -1;
    }
}

int main()
{
    std::cout << "Enter the number of rows: ";
    int rows;
    std::cin >> rows;

    std::stack<double> expr;
    for (int i = 0; i < rows; i++)
    {
        std::string input;
        std::getline(std::cin, input);
        if (is_number(input))
        {
            expr.push(std::stof(input));
        }
        else
        {
            std::string optor = input;
            try
            {
                double operand1 = expr.top();
                expr.pop();
                double operand2 = expr.top();
                expr.pop();
                expr.push(evaluate(optor, operand1, operand2));
            }
            catch (int error)
            {
                std::cout << "Invalid" << std::endl;
            }
        }
    }
    std::cout << expr.top() << std::endl;

    return 0;
}