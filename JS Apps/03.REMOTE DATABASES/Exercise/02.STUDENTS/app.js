window.addEventListener('load', uploadStudents);

let tbodyElement = document.querySelector('tbody');
const APPID = 'kid_HyWEuZT-H';
const USERNAME = 'guest';
const PASSWORD = 'guest';
const GET_BASE_64 = btoa(USERNAME + ':' + PASSWORD);
const GETAUTH = {"Authorization": 'Basic ' + GET_BASE_64};

function uploadStudents() {
    let url = `https://baas.kinvey.com/appdata/${APPID}/students`;

    fetch(url, {
        headers: GETAUTH
    })
        .then(handler)
        .then(data => {
            data.sort((a, b) => {
                return a.ID - b.ID
            });

            data.forEach(st => {
                let firstName = st.firstName;
                let lastName = st.lastName;
                let grade = st.grade;
                let facultyNumber = st.facultyNumber;
                let id = st.ID;

                let newTr = createTr([id, firstName, lastName, facultyNumber, grade]);
                tbodyElement.appendChild(newTr);
            })
        })
}

function createTr(arguments) {
    let trElement = document.createElement('tr');

    arguments.forEach(arg => {
        let thElement = document.createElement('th');
        thElement.textContent = arg;
        trElement.appendChild(thElement);
    });

    return trElement;
}

function handler(response) {
    if (response.status >= 400) {
        throw new Error(`Something went wrong. Error: ${response.statusText}`)
    }

    return response.json();
}