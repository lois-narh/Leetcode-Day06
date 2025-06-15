/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const stack = [];
    const brackets = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (const char of s) {
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        } else if (char in brackets) {
            if (stack.length === 0 || stack.pop() !== brackets[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
};
