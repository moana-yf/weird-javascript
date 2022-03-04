#include <stack>
#include <iostream>
#include <string>
#include <vector>

bool isNumber(std::string &token)
{
    return !(token == "+" || token == "-" || token == "*");
}

long long evaluate(std::deque<std::string> expr)
{
    std::stack<long long> operands;
    for (int i = 0; i < expr.size(); i++)
    {
        std::string &token = expr[i];
        if (isNumber(token))
        {
            operands.push(stoll(token));
        }
        else
        {
            long long operand1 = operands.top();
            operands.pop();
            long long operand2 = operands.top();
            operands.pop();
            switch (token[0])
            {
            case '+':
                operands.push(operand1 + operand2);
                break;
            case '-':
                operands.push(operand1 - operand2);
                break;
            case '*':
                operands.push(operand1 * operand2);
                break;
            }
        }
    }
    return operands.top();
}

int main()
{
    std::deque<std::string> input;
    int size;
    std::cin >> size;
    for (int i = 0; i < size; i++)
    {
        std::string x;
        std::cin >> x;
        input.push_back(x);
    }
    long long result = evaluate(input);
    std::cout << result << std::endl;
    return 0;
}