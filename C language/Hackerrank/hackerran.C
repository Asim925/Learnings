// ========================= Functions ========================= //

// #include <stdio.h>
// /*
// Add `int max_of_four(int a, int b, int c, int d)` here.
// */

// int max_of_four(int a, int b, int c, int d)
// {
//     if (a > b && a > c && a > d)
//         return a;
//     else if (b > a && b > c && b > d)
//         return b;
//     else if (c > a && c > b && c > d)
//         return c;
//     else
//         return d;
// }

// int main()
// {
//     int a, b, c, d;
//     scanf("%d %d %d %d", &a, &b, &c, &d);
//     int ans = max_of_four(a, b, c, d);
//     printf("%d", ans);

//     return 0;
// }

// ========================= pointers ========================= //

#include <stdio.h>

void update(int *a, int *b)
{
    // Complete this function
    int A = *a, B = *b;
    A = *a + *b;
    B = (*a - *b > 0 ? *a - *b : *b - *a);

    *a = A;
    *b = B;
}

int main()
{
    int a, b;
    int *pa = &a, *pb = &b;

    scanf("%d %d", &a, &b);
    update(pa, pb);
    printf("%d\n%d", a, b);

    return 0;
}