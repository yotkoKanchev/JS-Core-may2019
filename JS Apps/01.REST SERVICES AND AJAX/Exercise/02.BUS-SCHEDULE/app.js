function solve() {

    let baseUrl = `https://judgetests.firebaseio.com/schedule/`;
    let currentStopId = 'depot';
    let currentStop = '';

    let departButtonElement = document.getElementById('depart');
    let arriveButtonElement = document.getElementById('arrive');
    let spanElement = document.querySelector('span.info');

    function depart() {
        let url = baseUrl + currentStopId + '.json';

        fetch(url)
            .then(request => request.json())
            .then(data => loadStop(data))
    }

    function arrive() {
        spanElement.textContent = `Arriving at ${currentStop.name}`;
        currentStopId = currentStop.next;
        arriveButtonElement.disabled = true;
        departButtonElement.disabled = false;
    }

    function loadStop(data) {
        currentStop = data;
        spanElement.textContent = `Next stop ${currentStop.name}`;
        currentStopId = currentStop.next;
        arriveButtonElement.disabled = false;
        departButtonElement.disabled = true;
    }

    return {
        depart,
        arrive
    }
}


let result = solve();