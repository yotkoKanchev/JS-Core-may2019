function getPersonalBMI(name, age, weight, height) {
    let bmi = Math.round(weight / (Math.pow(height/100,2)));

    let currentPerson = {
        name,
        'personalInfo' : {
            age,
            weight,
            height
        },
        'BMI' : bmi,
    };
    let status = '';

    if (bmi < 18.5){
        status = 'underweight';
    } else if ( bmi < 25){
        status = 'normal';
    } else if (bmi < 30){
        status = 'overweight';
    }   else if (bmi >= 30) {
        status = 'obese';
        currentPerson.recommendation = 'admission required';
    }

    currentPerson.status = status;
    return currentPerson;
}
