/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let shortnumbers: number[] = [];
    if (numbers.length > 1) {
        shortnumbers = numbers.filter(
            (element, index, array) =>
                index === 0 || index === array.length - 1,
        );
    } else if (numbers.length === 1) {
        shortnumbers[0] = numbers[0];
        shortnumbers[1] = numbers[numbers.length - 1];
    }

    return shortnumbers;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const triplenumbers = numbers.map((num: number): number => num * 3);
    return triplenumbers;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const shiny = numbers.map((num: string): number =>
        Number.isNaN(parseInt(num)) ? 0 : parseInt(num),
    );
    return shiny;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const numbers: string[] = amounts.map((str: string): string =>
        str.replace("$", ""),
    );
    const shiny = numbers.map((num: string): number =>
        Number.isNaN(parseInt(num)) ? 0 : parseInt(num),
    );
    return shiny;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const newstr = messages.filter(
        (str: string): boolean => str[str.length - 1] !== "?",
    );
    const newstr2 = newstr.map((str: string): string =>
        str[str.length - 1] === "!" ? str.toUpperCase() : str,
    );

    return newstr2;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const shortwords = words.filter((str) => str.length < 4).length;
    return shortwords;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const RGBs = colors.every(
        (str) => str === "red" || str === "blue" || str === "green",
    );
    return RGBs;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }
    const sum: string = addends
        .reduce((total: number, num: number) => total + num, 0)
        .toString();
    const joined = addends.join("+");
    return sum.concat("=", joined);
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    if (values.every((num) => num > 0)) {
        const finalval = [...values];
        finalval.splice(
            values.length,
            0,
            values.reduce((total, num) => total + num, 0),
        );

        return finalval;
    }
    let doadd: boolean = true;
    const arrlength: number = values.findIndex((num) => num < 0);
    const finalval = [...values];

    finalval.splice(
        arrlength + 1,
        0,
        values.reduce((total, num): number => {
            if (doadd && num > 0) {
                return total + num;
            } else {
                doadd = false;
                return total;
            }
        }, 0),
    );
    return finalval;
}
