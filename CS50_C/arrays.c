// Making araays

#include<stdio.h>

int main(void){

int marks[6];
	for(int i=0 ; i<6; i++)
	{
		marks[i] = i + 50;
		printf("Marks[%d]\n", marks[i]);
	}
	return 0;
}

