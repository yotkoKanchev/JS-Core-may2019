function stopwatch() {
    let startButtonElement = document.getElementById('startBtn');
    let stopButtonElement = document.getElementById('stopBtn');
    let timeDivElement = document.getElementById('time');
    let counter ;

    startButtonElement.addEventListener('click', (f) => {
        startButtonElement.disabled = true;
        stopButtonElement.disabled = false;
        counter = setInterval(() => {
            timer(timeDivElement)
        }, 1000);

    });

    stopButtonElement.addEventListener('click', (f) => {
        if (stopButtonElement.disabled === false) {
            startButtonElement.disabled = false;
            stopButtonElement.disabled = true;
            timeDivElement.textContent = '00:00';
            clearInterval(counter);
        }
    });

    function timer(timeElement) {
        let minutes = Number(timeElement.textContent.substr(0, 2));
        let seconds = Number(timeElement.textContent.substring(3));

        seconds ++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }

        let time = minutes < 10 ? `0${minutes}:` : `${minutes}:`;
        time += seconds < 10 ? `0${seconds}` : `${seconds}`;
        timeElement.textContent = time;
    }
}