import java.io.*;
import java.util.*;

public class PE {

    // static Boolean isOperand(char c){
    // return Character.isDigit(c);
    // }

    static void evaluatePrefix(String exprsn) {
        Stack<Long> stack = new Stack<Long>();
        long result = 0;

        for (int j = exprsn.length() - 1; j >= 0; j--) {
            char check = exprsn.charAt(j);

            if (check == '*' || check == '+' || check == '-') {
                try {
                    long o1 = stack.pop();
                    long o2 = stack.pop();
                    if (check == '*') {
                        result = (o1 * o2) % 1000000007;
                    } else if (check == '+') {
                        result = (o1 + o2) % 1000000007;
                    } else if (check == '-') {
                        result = (o1 - o2) % 1000000007;
                    }
                    stack.push(result);
                } catch (EmptyStackException e) {
                    System.out.println("Invalid");
                    return;
                }
            } else {
                stack.push((long) (exprsn.charAt(j)));
            }
        }
        System.out.println(stack.peek());
        return;

    }

    /* Driver program to test above function */
    public static void main(String[] args) {
        myScanner input = new myScanner(System.in);
        int n = input.nextInt();
        // String exprsn = input.next();
        // exprsn = exprsn.substring(1,exprsn.length() - 1);
        String expression = new String();

        for (int i = 0; i < n; i++) {
            expression = expression + input.next();
        }
        // input.close();

        evaluatePrefix(expression);
    }

    static class myScanner {
        public BufferedReader reader;
        public StringTokenizer st;

        myScanner(InputStream in) {
            reader = new BufferedReader(new InputStreamReader(in));
            st = null;
        }

        public int nextInt() {
            return Integer.parseInt(next());
        }

        public String next() {
            while (st == null || !st.hasMoreTokens()) {
                try {
                    st = new StringTokenizer(reader.readLine());
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
            return st.nextToken();
        }
    }

}