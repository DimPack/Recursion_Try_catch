'use strict'

// Написати рекурсивну функцію, яка приймає два числа і повертає найбільший спільний дільник цих чисел. (Алгоритм Евкліда)
// https://vseosvita.ua/library/embed/001m1m-f727.docx.html
// getDivider(45,15) ->15
// getDivider(24,15) -> 3
// getDivider(24,23) -> 1

// Обов'язково кидатися помилками і ловити - обробляти виключення!!!

/**
 * 
 * @param {number} num1 
 * @param {number} num2 
 * @returns number
 */
function getDivider(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || num1 === null || num2 === null) {
        throw new TypeError('the arguments of the condition are not numbers');
    }

    if (num2 === 0) {
        return num1;
    } else {
        return getDivider(num2, num1 % num2);
    }
}

try {
    console.log(getDivider(9000, 6375));
} catch (error) {
    console.error(error.message);
}

// *написати таку ж функцію але без рекурсії, а з застосуванням циклу

/**
 * 
 * @param {number} num1 
 * @param {number} num2 
 * @returns number
 */
function getDividerСycle(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || num1 === null || num2 === null) {
        throw new TypeError('the arguments of the condition are not numbers');
    }
    while(num2 !== 0) {
        let gcd = num2;
        num2 = num1 % num2;
        num1 = gcd;
    }
    return num1;
}

try {
    console.log(getDividerСycle(1207, 1349));
} catch (error) {
    console.error(error.message);
}
