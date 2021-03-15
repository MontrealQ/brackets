module.exports = function check(str, bracketsConfig) {
    const brackets = bracketsConfig.map((arrElement) => arrElement.join(""));
    let isUpdated = true;
    while (isUpdated) {
        isUpdated = false;
        brackets.forEach((arrElement) => {
            const newStr = str.replace(arrElement, "");
            if (newStr !== str) {
                str = newStr;
                isUpdated = true;
            }
        });
    }
    return !str;
};
