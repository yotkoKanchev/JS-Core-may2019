function getInfo() {
    const stopNameElement = document.getElementById('stopName');
    const busesUlElement = document.getElementById('buses');
    busesUlElement.innerHTML = '';
    const stopId = document.getElementById('stopId').value;
    const url = `https://judgetests.firebaseio.com/businfo/${stopId}.json`;

    (() => {
        const req = new XMLHttpRequest();
        req.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200){

                let stop = JSON.parse(this.responseText);
                const {name, buses} = stop;
                stopNameElement.textContent = name;
                for (const bus in buses) {
                    const busId = bus;
                    const time = buses[bus];
                    let liElement = document.createElement('li');
                    liElement.textContent = `Bus ${busId} arrives in ${time} minutes`;
                    busesUlElement.appendChild(liElement);
                }
            } else if (this.readyState == 4 && this.status !== 200){
                stopNameElement.textContent = 'Error';
            }
        };

        req.open("GET", url, true);
        req.send();
    })();
}