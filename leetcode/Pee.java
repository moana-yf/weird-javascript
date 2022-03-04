import java.io.*;
import java.util.*;

public class Pee {

    static MyScanner in = new MyScanner(System.in);
    static int n = in.nextInt();
    static String[] s = new String[2000000];

    public static int evaluate(String[] tokens) {
        Deque<Integer> stack = new LinkedList<Integer>();
        int n = tokens.length;
        for (int i = 0; i < n; i++) {
            String token = tokens[i];
            if (isNumber(token)) {
                stack.push(Integer.parseInt(token));
            } else {
                int num2 = stack.pop();
                int num1 = stack.pop();
                switch (token) {
                    case "+":
                        stack.push(num1 + num2);
                        break;
                    case "-":
                        stack.push(num1 - num2);
                        break;
                    case "*":
                        stack.push(num1 * num2);
                        break;
                    case "/":
                        stack.push(num1 / num2);
                        break;
                    default:
                }
            }
        }
        return stack.pop();
    }

    public static void main(String[] args) {
        for (int i = 0; i < n; i++)
            s[i] = in.next();
        int result = evaluate(s);
        System.out.println();
    }

    public static boolean isNumber(String token) {
        return !("+".equals(token) || "-".equals(token) || "*".equals(token) || "/".equals(token));
    }

    static class MyScanner {
        // 输入优化
        public BufferedReader reader;
        public StringTokenizer st;

        MyScanner(InputStream in) {
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
