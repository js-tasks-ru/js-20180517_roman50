let calendar = {
    from: new Date('2018-01-01T15:09:10Z'),
    to: new Date('2018-02-01T10:09:10Z')
};

calendar[Symbol.iterator] = function () {
    let current = this.from;
    let last = this.to;
    let dayFormated = '';

    // не понял как вернуть первое значение без искуственного уменьшения
    // инициализирующего значения
    // current.setDate(current.getDate() - 1);

    return {
        next() {
            if (current <= last) {

                current.setDate(current.getDate() + 1);
                dayFormated = ("0" + current.getDate()).slice(-2);

                if (current.getDay() === 0 ||
                    current.getDay() === 6) {
                    dayFormated = "[" + dayFormated + "]";
                }

                return {
                    done: false,
                    value: dayFormated
                }
            } else {
                return {
                    done:true
                }
            }
        }
    }
};



