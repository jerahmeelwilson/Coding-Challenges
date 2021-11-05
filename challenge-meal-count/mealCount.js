var list1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C',
        meal: 'vegetarian' },
    { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript',
        meal: 'standard' },
    { firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby',
        meal: 'vegan' },
    { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C',
        meal: 'vegetarian' },
    ];


function mealCount (arr){
    let veganCount = 0;
    let vegetarianCount = 0;
    let standardCount = 0;
    let diabeticCount = 0;
    let glutenIntCount = 0;

    arr.forEach(element => {
        if(element.meal == "vegan"){
            veganCount++;
        } else if(element.meal == "vegetarian"){
            vegetarianCount++;
        } else if(element.meal == "standard"){
            standardCount++;
        } else if(element.meal == "diabeticCount"){
            diabeticCount++;
        } else if(element.meal == "glutenIntCount"){
            glutenIntCount++;
        }
    });

    return {
        vegetarian : vegetarianCount,
        vegan : veganCount,
        standardCount: standardCount,
        diabetic: diabeticCount,
        glutenIntolerant: glutenIntCount,
    }
}

console.log(mealCount(list1));

