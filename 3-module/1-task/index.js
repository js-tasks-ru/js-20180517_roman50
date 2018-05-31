/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
    return data.filter( (obj) => obj.age <= age )
               .map( (obj)=> obj.name + ', ' + obj.balance )
               .join('\n');
}

