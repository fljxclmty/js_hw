// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(firstNumber, secondNumber, thirdNumber) {
    return (firstNumber >= secondNumber && firstNumber >= thirdNumber) ? firstNumber :
        (secondNumber >= firstNumber && secondNumber >= thirdNumber) ? secondNumber : thirdNumber;

}





const theLargest = findLargest(10, 2, 10)
console.log(theLargest);
