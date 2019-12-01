let car = {
    manufacturer: 'audi',
    model: 'a8',
    year: '2018',
    avgSpeed: '150',
    getAllPropeties: function() {
        return `${this.manufacturer} ${this.model} ${this.year}  ${this.avgSpeed}`;
    },
    whatTime: function(dist) {
        return ('Нужно всего ' + (Math.trunc(dist / car.avgSpeed)) + ' часов/часа');
    },
    displayAll: function() {
        for (let property in car) alert(property);
    }
}

let operations = {
    numerator: '12',
    denominator: '6',
    getSum: function() {
        return `${+this.numerator + +this.denominator}`;
    },
    getSubtraction: function() {
        return `${+this.numerator - +this.denominator}`;
    },
    getMultiply: function() {
        return `${+this.numerator * +this.denominator}`;
    },
    getDivide: function() {
        return `${+this.numerator / +this.denominator}`;
    },
    getCut: function() {
        var nod = function nod(a, b) {
            return b ? nod(b, a % b) : a;
        };
        nod = nod(operations.numerator, operations.denominator);
        return ('num ' + (+operations.numerator / nod) + '  den ' + (+operations.numerator / nod));
    },
}

let SetTimeObject = {
    newHours: 23,
    newMinutes: 12,
    newSeconds: 10,
    getAllTime: function() {
        let timeset = new Date();
        timeset.setHours(this.newHours, this.newMinutes, this.newSeconds)
        console.log(timeset);
        let newHours = (this.newHours >= 10) ? timeset.getHours() : '0' + timeset.getHours();
        let newMinutes = (this.newMinutes >= 10) ? timeset.getMinutes() : '0' + timeset.getMinutes();
        let newSecondsr = (this.newSeconds >= 10) ? timeset.getSeconds() : '0' + timeset.getSeconds();
        let newSetTime = newHours + ':' + newMinutes + ':' + newSecondsr;
        return ('now is set time: ' + newSetTime);
    },

    setSecondsProperty: function(newSec) {
        let timeset = new Date();
        timeset.setSeconds(newSec);
        console.log(timeset);
        let newHours = (timeset.getHours() >= 10) ? timeset.getHours() : '0' + timeset.getHours();
        let newMinutes = (timeset.getMinutes() >= 10) ? timeset.getMinutes() : '0' + timeset.getMinutes();
        let newSecondsr = (timeset.getSeconds() >= 10) ? timeset.getSeconds() : '0' + timeset.getSeconds();
        let newSetTime = newHours + ':' + newMinutes + ':' + newSecondsr;
        return ('now is set time: ' + newSetTime);
    },

    setMinutesProperty: function(newMin) {
        let timeset = new Date();
        timeset.setMinutes(newMin);
        let newHours = (timeset.getHours() >= 10) ? timeset.getHours() : '0' + timeset.getHours();
        let newMinutes = (timeset.getMinutes() >= 10) ? timeset.getMinutes() : '0' + timeset.getMinutes();
        let newSecondsr = (timeset.getSeconds() >= 10) ? timeset.getSeconds() : '0' + timeset.getSeconds();
        let newSetTime = newHours + ':' + newMinutes + ':' + newSecondsr;
        return ('now is set time: ' + newSetTime);
    },
    setHoursProperty: function(newHour) {
        let timeset = new Date();
        timeset.setHours(newHour);
        let newHours = (timeset.getHours() >= 10) ? timeset.getHours() : '0' + timeset.getHours();
        let newMinutes = (timeset.getMinutes() >= 10) ? timeset.getMinutes() : '0' + timeset.getMinutes();
        let newSecondsr = (timeset.getSeconds() >= 10) ? timeset.getSeconds() : '0' + timeset.getSeconds();
        let newSetTime = newHours + ':' + newMinutes + ':' + newSecondsr;
        return ('now is set time: ' + newSetTime);
    },
}