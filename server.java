import java.util.*;
public class server {
public static void main(String[] args) {

Scanner sc = new Scanner(System.in);
int n = sc.nextInt();
int m = sc.nextInt();
int[][] a = new int[n][m];
int []row=new int[n];
int maxVal = 0;

for (int i = 0; i < n; i++) {
    for (int j = 0; j < m; j++) {
        a[i][j] = sc.nextInt();
        maxVal = Math.max(maxVal, a[i][j]);
    }
}

int low = 1;
int high = maxVal;
int ans = 1;

while (low <= high) {
    int mid = (low+high) / 2;
    boolean flag = false;
    boolean flag1 = false;
    Arrays.fill(row,0);
    for (int j = 0; j < m; j++) {
        boolean found = false;
        for (int i = 0; i < n; i++) {
            if (a[i][j] >= mid) {
                found = true;
              
                row[i]++;
                if(row[i]>1)
                  {
                    flag1=true;
                    break;
                  }
            }
        }
        if (!found) {
            flag = true;
            break;
        }
    }

    if (flag) {
        high = mid - 1;
    } else if(flag1){

            low = mid + 1;
            ans = mid;
        }
        else {
            high = mid - 1;
        }
    }
    System.out.println(ans);
}
}