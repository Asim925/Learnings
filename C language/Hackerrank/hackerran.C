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

// #include <stdio.h>

// void update(int *a, int *b)
// {
//     // Complete this function
//     int A = *a, B = *b;
//     A = *a + *b;
//     B = (*a - *b > 0 ? *a - *b : *b - *a);

//     *a = A;
//     *b = B;
// }

// int main()
// {
//     int a, b;
//     int *pa = &a, *pb = &b;

//     scanf("%d %d", &a, &b);
//     update(pa, pb);
//     printf("%d\n%d", a, b);

//     return 0;
// }

// ========================= if else ========================= //

// #include <stdio.h>
// int main()
// {
//     int n = 5;
//     if (n == 1)
//         printf("one");
//     else if (n == 2)
//         printf("two");
//     else if (n == 3)
//         printf("three");
//     else if (n == 4)
//         printf("four");
//     else if (n == 5)
//         printf("five");
//     else if (n == 6)
//         printf("six");
//     else if (n == 7)
//         printf("seven");
//     else if (n == 8)
//         printf("eight");
//     else if (n == 9)
//         printf("nine");
//     else
//         printf("Greater than 9");
//     return 0;
// }

// ========================= loop ========================= //

#include <stdio.h>
int main()
{
    int a, b;
    scanf("%d\n%d", &a, &b);
    // Complete the code.
    for (int i = a; i <= b; i++)
    {
        if (i == 1)
            printf("one");
        else if (i == 2)
            printf("two");
        else if (i == 3)
            printf("three");
        else if (i == 4)
            printf("four");
        else if (i == 5)
            printf("five");
        else if (i == 6)
            printf("six");
        else if (i == 7)
            printf("seven");
        else if (i == 8)
            printf("eight");
        else if (i == 9)
            printf("nine");
        else if (i > 9 && i % 2 == 0)
            printf("even");
        else
            printf("odd");

        printf("\n");
    }
    return 0;
}
