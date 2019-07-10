function loadRepos() {
	const repos = document.getElementById('repos');
	repos.innerHTML = '';
	const username = document.getElementById("username").value;
	const url = `https://api.github.com/users/${username}/repos`;

	fetch(url)
		.then((response) => response.json())
		.then((data) => displayRepos(data))
		.catch((err) => displayErrror(err))

	function createRepo(name, url) {
		const listItem = document.createElement('li');
		const aItem = document.createElement('a');
		aItem.textContent = name;
		aItem.href = url;
		listItem.appendChild(aItem);
			return listItem;
	}

	function displayRepos(repoItems) {
		repoItems.forEach(repo => {
			const {full_name, html_url} = repo;
			const repoItem = createRepo(full_name, html_url);
			repos.appendChild(repoItem);
		});
	}

	function displayErrror(err) {
		const listItem = document.createElement('li');
		listItem.textContent = err;
		repos.appendChild(listItem);
	}
}