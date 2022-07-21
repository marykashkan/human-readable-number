module.exports = function toReadable (number) {
    const n = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const d = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const h = 'hundred';
    const x = +number.toString()[0];
    const y = +number.toString()[1];
    const z = +number.toString()[2];
    const k = +number.toString().slice(-2);
    let zero = 'zero';
    let resultOne = n[number];
    let resultTwo = d[x] + ' ' + n[y];
    let resultThree = n[x] + ' ' + h + ' ' + n[k];
    let resultFour = n[x] + ' ' + h + ' ' + d[y] + ' ' + n[z];    

    if (number === 0) {
        return zero;
    } else if ((number >= 1) && (number < 20)) {
        return resultOne;
    } else if ((number >= 20) && (number < 100)) {
        return resultTwo.trim();  
    } else if ((number >= 100) && (number < 1000)) {
        if (k < 20) {
            return resultThree.trim();
        };
        return resultFour.trim();
    };
};
