#include<stdio.h> // preprocessor directive 

// void printHello(const char religion) {
//     if(religion == 'i') printf("madni \n");
//     else printf("hello");
// }


 // ------ exercise: sum ------ //

// int add(int n) {
//     // printf("the sun is: %d\n", (n*(n+1))/2);
//     if(n == 1) return 1;
//     return  n + add(n - 1);
// }

 // ------ exercise: FABIONACCI sum ------ //
// int fabionacci(int n) {
//    if (n == 1) return 1;
//    if (n == 0) return 0;
//    int muneer  =  fabionacci(n-1) + fabionacci(n-2);
//    // printf("%d \n", muneer);   
//    return muneer;
// }


int main() {
    
 // ============================ format specifiers ============================ //
    // int age = 20;
    // printf("Age: %d\n", age); // format specifier for the integer.
   
    // float PI = 3.142789;
    // printf("PI: %f\n", PI); // format specifier for the float.
   
    // char star = '*';jj
    // printf("character: %c \n", star); // format specifier for the char.

 // ============================ output - input ============================ //
    // int value;
    // printf("value likh jaldi: ");
    // scanf("%d", &value); // scanf for input. "&" addresses that vairable (to store in falan variable)
    // printf("yele jo tune likha: %d \n", value); 

 // ------ exercise: sum ------ //
    // int a,b;
    // printf("give the value of 'a': "); scanf("%d", &a);
    // printf("give the value of 'b': "); scanf("%d", &b);
    // printf("the sum is %d \n", a+b);

 // ------ exercise: area of reactangle  ------ //
    // float length, breadth;
    // printf("tell me whats length? : "); scanf("%f", &length);
    // printf("tell me whats breadth? : "); scanf("%f", &breadth);

    // printf("the area of the square is: %f \n", length*breadth);

 // ------ exercise: area of circle  ------ //
    // float radius;
    // printf("enter the value of the radius: "); scanf("%f", &radius);
    // printf("the area of the circle is: %f \n", 3.142*radius*radius );

 // ============================ type conversion ============================ //
    // int a = 1.9999; // this is wrong because its float and throws error
    // printf("%d",a);
    // a = (int) 1.9999; // this forces the float to be integer ...

 // ============================ artihmatic rules.. ============================ //
    // int haggu = 4 * 9 / 6 * 2; // it doesnt follow the BODMAS...  same priority set.. then it will calculate left to right.
    // // we have priority rules. " *, /, % " then we have " +, - "
    // printf("%d", haggu);

 // ============================  loops.. ============================ //

    // int sum = 0;
    // for(int i=1; i<=10; i++) {
    //     sum+=i;
    //     printf("%d \n", 10-i+1);
    // } 
    // printf("%d", sum);

 // ------ exercise: take if no. are even else stop ------ //
//   int n;
//   do {
//     printf("enter number");
//     scanf("%d", &n);
    
//   } 
//   while(n % 2 == 0);


 // ============================  funcrions and recursion.... ============================ //
    // printHello('i');
  
   //  printf("%d\n", add(4));

//   fabionacci(4);


 // ============================  pointers ============================ //

    return 0;
}