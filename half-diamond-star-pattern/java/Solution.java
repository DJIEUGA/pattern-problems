class Solution {
    static void pattern(int N) {
        for (int r = 1; r <= 2*N-1; r++) {
            int stars = r;
            if(r>N) stars = 2*N-r;
            for (int c = 1; c <= stars; c++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
    public static void main(String[] args) {
        int n = 5;
        pattern(n);
    }
}