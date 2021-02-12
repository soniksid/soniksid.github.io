#include <stdio.h>
int main(void) {    

// while loop
int i=0;
while ( i < 10){
	printf("Do some work buddy!\n");
	i++;
}

// for loop to print a structure

{
	for(int i = 0; i <6; i++)
	{
		for(int j=5; j>1; j--)
		{
			printf("i is %d", &i);
			printf("$");
		}
	printf("\n");
	}
	return 0;
}
}
