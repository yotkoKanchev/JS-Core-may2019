function attachEvents() {

    document.getElementById('phonebook').innerHTML = '';
    document.getElementById('btnLoad').addEventListener('click', load);
    document.getElementById('btnCreate').addEventListener('click', create);

    let url = `https://phonebook-nakov.firebaseio.com/phonebook.json`;

    function load() {
        document.getElementById('phonebook').innerHTML = '';

        fetch(url)
            .then(req => req.json())
            .then(data => {
                let values = Object.values(data);

                for (const value of values) {
                    let name = value.person;
                    let phoneNumber = value.phone;
                    let delBtn = document.createElement('button');
                    delBtn.textContent = "Delete";
                    let listItem = document.createElement('li');
                    listItem.textContent = `${name}: ${phoneNumber}   `;
                    listItem.appendChild(delBtn);
                    document.getElementById('phonebook').appendChild(listItem);

                    delBtn.addEventListener('click', (ev) => {
                        debugger;
                        let currentLi = ev.target.parentNode;
                        let args = currentLi.textContent.split(' ').filter(x => x !== '');
                        let currentName = args[0];
                        currentName = currentName.substring(0, currentName.length - 1);
                        let currentNumber = args[1];
                        let idToRemove = '';

                        let allIds = Object.keys(data);
                        for (const id of allIds) {
                            if (data[id].person === currentName && data[id].phone === currentNumber) {
                                idToRemove = id;
                                break;
                            }
                        }
                        currentLi.remove();

                        fetch('https://phonebook-nakov.firebaseio.com/phonebook' + '/' + idToRemove + '.json', {
                            method: "delete",
                            body: JSON.stringify(idToRemove)
                        })
                            .then(res => res.json());
                    });
                }
            });
    }

    function create() {
        document.getElementById('phonebook').innerHTML = '';
        let personName = document.getElementById('person').value;
        let personNumber = document.getElementById('phone').value;

        if (personName && personNumber) {
            let currentPerson = {"person": personName, "phone": personNumber};
            fetch(url, {
                method: 'post',
                body: JSON.stringify(currentPerson)
            })
                .then(res => res.json());
        }
        load();

        document.getElementById('person').value = '';
        document.getElementById('phone').value = '';
    };

}

attachEvents();