/**********************************************************************			
	Name: Thomas Mielke
	Class: TECH 273
	Date: 21NOV2023
	Proj: Project 5
**********************************************************************/

/**********************************************************************			
Function Name: randomNumber1to3()
Parameters: None
Return Value: value of number variable 
Description: This function generates a random whole number between 1 and 6. The resulting value (1, 2, 3, 4, 5, or 6) is stored in the number variable and returned so it can be used in another function.
**********************************************************************/
function randomNumber1to6() { // Declares the funciton randomNumber1to6()
    let number = Math.floor((Math.random() * 6) + 1); // Math.random chooses a random number between 0 and 1 (one is not included). Multiplying it by 6  increases the possible resulting number from 0 to 6 (six is not included). Adding the 1 makes it so that a 0 cannot be rolled. Math.floor rounds the number down to the nearest whole number. After all of this is done, the resulting value is assigned to the number variable.
    return number; // The value of number is returned so that it can be used by the function startRace().
}