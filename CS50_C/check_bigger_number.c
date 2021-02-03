// Condition to check bigger no.

#include <stdio.h>
int main(void){

int x, y, z;

	printf("Write any three numbers:\n");
	scanf("%d %d %d", &x, &y, &z);
	if (x > y && x > z)
		{
			printf("x");
		}
	else if (y > x && y > z)
		{
			printf("y");
		}
	else
			printf("z");

}