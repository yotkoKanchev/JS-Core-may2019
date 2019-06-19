function attachEventsListeners() {
    let daysInput = document.getElementById('days');
    let hoursInput = document.getElementById('hours');
    let minutesInput = document.getElementById('minutes');
    let secondsInput = document.getElementById('seconds');

    let daysButtonElement = document.getElementById('daysBtn');
    let hoursButtonElement = document.getElementById('hoursBtn');
    let minutesButtonElement = document.getElementById('minutesBtn');
    let secondsButtonElement = document.getElementById('secondsBtn');

    daysButtonElement.addEventListener('click', () => {
        let days = Number(daysInput.value);
        hoursInput.value = days * 24;
        minutesInput.value = days * 24 * 60;
        secondsInput.value = days * 24 * 60 * 60;
    });

    hoursButtonElement.addEventListener('click', () => {
        let hours = Number(hoursInput.value);
        daysInput.value = hours / 24;
        minutesInput.value = hours * 60;
        secondsInput.value = hours * 60 * 60;
    });

    minutesButtonElement.addEventListener('click', () => {
        let minutes = Number(minutesInput.value);
        daysInput.value = minutes / (24 * 60);
        hoursInput.value = minutes / 60;
        secondsInput.value = minutes * 60;
    });

    secondsButtonElement.addEventListener('click', () => {
        let seconds = Number(secondsInput.value);
        daysInput.value = seconds / (24 * 60 * 60);
        hoursInput.value = seconds / (60 * 60);
        minutesInput.value = seconds / 60;
    });
}

// Mert's solution :
// function attachEventsListeners() {
//     let buttons = document.querySelectorAll('div input:last-child');
//
//     for (const button of buttons) {
//         button.addEventListener('click', (e) => {
//             let currentTextInput = e.target.parentNode.children[1];
//             let value = +currentTextInput.value;
//             let currentId = currentTextInput.id;
//
//             let convertedTime = [];
//
//             if (currentId === 'days') {
//                 convertedTime['days'] = value;
//                 convertedTime['hours'] = value * 24;
//                 convertedTime['minutes'] = value * 1440;
//                 convertedTime['seconds'] = value * 86400;
//
//             } else if (currentId === 'hours') {
//                 convertedTime['days'] = value / 24;
//                 convertedTime['hours'] = value;
//                 convertedTime['minutes'] = value * 60;
//                 convertedTime['seconds'] = value * 3600;
//
//             } else if (currentId === 'minutes') {
//                 convertedTime['days'] = value / 1440;
//                 convertedTime['hours'] = value / 60;
//                 convertedTime['minutes'] = value;
//                 convertedTime['seconds'] = value * 60;
//
//             } else if (currentId === 'seconds') {
//                 convertedTime['days'] = value / 86400;
//                 convertedTime['hours'] = value / 3600;
//                 convertedTime['minutes'] = value / 60;
//                 convertedTime['seconds'] = value;
//             }
//
//             for (const currentButton of buttons) {
//                 let input = currentButton.parentNode.children[1];
//                 input.value = convertedTime[input.id];
//             }
//         });
//     }
// }