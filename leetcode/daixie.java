import java.io.*;
import java.util.*;

public class daixie {
    static myScanner in = new myScanner(System.in);
    static int n = in.nextInt();
    static String[] s = new String[2000000];
    static char[] opsta = new char[2000000];
    static long[] numsta = new long[2000000];
    static int opt = 0;
    static int numt = 0;

    public static void main(String[] args) {
        for (int i = 0; i < n; i++)
            s[i] = in.next();

        for (int i = n - 1; i >= 0; i--) {
            char[] ss = s[i].toCharArray();
            if (s[i].length() == 1 && (ss[0] < '0' || ss[0] > '9')) {
                // System.out.print(s[i]);
                if (numt < 2) {
                    System.out.print("Invalid\n");
                    System.exit(0);
                }
                long x = numsta[--numt];
                long y = numsta[--numt];
                if (ss[0] == '+')
                    x = (x + y) % 1000000007;
                else if (ss[0] == '-')
                    x = (x - y + 1000000007) % 1000000007;
                else {
                    if (y == 0) {
                        System.out.print("Invalid\n");
                        System.exit(0);
                    }
                    x = x * y % 1000000007;
                }
                numsta[numt++] = x;
                // System.out.print(x + "nn");
            } else
                numsta[numt++] = to_long(s[i]);
        }
        if (numt != 1) {
            System.out.print("Invalid\n");
            System.exit(0);
        }
        System.out.print((numsta[0] + 1000000007) % 1000000007);
    }

    private static long to_long(String s) {
        long ans = 0, f = 1;
        char[] ss = s.toCharArray();
        for (int i = 0; i < s.length(); i++) {
            if (ss[i] == '-')
                f = -f;
            else
                ans = ans * 10 + (ss[i] - '0');
        }
        // System.out.print(ans + "to");
        return ans * f % 1000000007;
    }

    static class myScanner {
        // 输入优化
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