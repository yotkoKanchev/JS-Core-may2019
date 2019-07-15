function loadCommits() {
    let username = document.getElementById('username').value;
    let repository = document.getElementById('repo').value;
    let ulElement = document.getElementById('commits');
    ulElement.innerHTML = '';

    let url = `https://api.github.com/repos/${username}/${repository}/commits`;

    fetch(url)
            .then((response) => handler(response)
            .then((data) => loadListItems(data))
            .catch((error) => {
                let liElement = document.createElement('li');
                liElement.textContent = `Error: ${response.status} (${response.statusText})`;
                ulElement.appendChild(liElement);
            }));


    function handler(response) {
        if (response.status >= 400) {
            console.log('has to catch the error');
        }

        return response.json();
    }

    function loadListItems(data) {
        let fragment = document.createDocumentFragment();

        for (const item of data) {
            let name = item.commit.author.name;
            let message = item.commit.message;
            let liElement = document.createElement('li');
            liElement.textContent = `${name}: ${message}`;
            fragment.appendChild(liElement);
        }

        ulElement.appendChild(fragment);
    }
}

