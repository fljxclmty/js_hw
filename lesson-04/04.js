/*
Напишите функцию `doubleEachCharacter`, которая принимает строку и возвращает новую строку, где каждый символ из исходной строки повторяется дважды.

Входные данные:

- **`str`**: Строка, символы которой нужно удвоить.

Выходные данные:

- Новая строка с каждым символом, повторенным дважды.

Пример работы функции: `doubleEachCharacter('hello')` вернёт `'hheelllloo'`
*/

function doubleEachCharacter(str) {
    str = str.split(""); 
    let newArr = []; 
    for (let i = 0; i < str.length; i++) {
        const element = str[i]; 
        newArr.push(element); 
        newArr.push(element);
        
    } 
    const newStr = newArr.join(""); 
    return newStr
} 

console.log(doubleEachCharacter('hello'));

