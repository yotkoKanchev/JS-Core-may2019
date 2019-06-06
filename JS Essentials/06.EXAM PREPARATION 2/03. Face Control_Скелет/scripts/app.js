function getData() {
    let inputText = JSON.parse(document.getElementsByTagName('textarea')[0].value);
    let peopleInElement = document.querySelector('#peopleIn p');
    let peopleOutElement = document.querySelector('#peopleOut p');
    let blacklistedElement = document.querySelector('#blacklist p');

    let lastElement = inputText.pop();

    let peopleInList = [];
    let peopleOutList = [];
    let blacklist = [];

    for (let person of inputText) {
        let currentPerson = {
            'firstName': person.firstName,
            'lastName': person.lastName
        };

        let personInBlacklist = blacklist.find(p => p.firstName === currentPerson.firstName
            && p.lastName === currentPerson.lastName);
        let personInPeopleInList = peopleInList.find(p => p.firstName === currentPerson.firstName
            && p.lastName === currentPerson.lastName);
        let personIndexInPeopleInList = peopleInList.findIndex(p => p.firstName === currentPerson.firstName
            && p.lastName === currentPerson.lastName);

        if (person['action'] === 'peopleIn') {
            if (!personInBlacklist) {
                peopleInList.push(currentPerson);
            }
        } else if (person['action'] === 'peopleOut') {
            if (personInPeopleInList) {
                peopleOutList.push(currentPerson);
                peopleInList.splice(personIndexInPeopleInList, 1);
            }
        } else if (person['action'] === 'blacklist') {
            if (personInPeopleInList) {
                peopleOutList.push(currentPerson);
                peopleInList.splice(personIndexInPeopleInList, 1);
            }
            blacklist.push(currentPerson);
        }
    }
    let output = {
        'peopleIn' : peopleInList,
        'peopleOut' : peopleOutList,
        'blacklist' : blacklist
    };

    if (lastElement['criteria'] !== '' && lastElement['action'] !== '') {

        let criteria = lastElement['criteria'];
        let action = lastElement['action'];

        output[action] = output[action].sort((a, b) => a[criteria].localeCompare(b[criteria]));
    }

    peopleInElement.textContent = output['peopleIn'].map(e => JSON.stringify(e)).join(' ');
    peopleOutElement.textContent = output['peopleOut'].map(e => JSON.stringify(e)).join(' ');
    blacklistedElement.textContent = output['blacklist'].map(e => JSON.stringify(e)).join(' ');
}