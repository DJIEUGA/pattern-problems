class Solution {
    static void pattern(int N) {
        for (int r = 1; r <= N; r++) {
            // print empty spaces before the stars
            for (int c = 1; c <= r - 1; c++) {
                System.out.print(" ");
            }
            // print the stars
            for (int c = (2 * N - r) + 1; c > r; c--) {
                System.out.print("*");
            }
            // print empty spaces after the stars
            for (int c = 1; c <= r - 1; c++) {
                System.out.print(" ");
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        int n = 5;
        pattern(n);
    }
}