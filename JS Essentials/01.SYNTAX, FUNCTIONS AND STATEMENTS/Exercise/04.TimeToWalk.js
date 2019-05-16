function calculateWalkTime(stepsCount, footPrintLength, speed){
    let distanceWalked = stepsCount * footPrintLength;    
    let speedInMetersPerSecond = speed * 1000 / (60 * 60);

    let additionalTime = Math.floor(distanceWalked / 500) * 60;

    let totalSeconds = additionalTime + distanceWalked / speedInMetersPerSecond;

    let hours = Math.floor(totalSeconds / (60 * 60));
    let minutes = Math.floor((totalSeconds - hours * 60 * 60) / 60);
    let seconds = Math.ceil(totalSeconds % 60);

    if (hours < 10) {
        hours = '0' + hours;
    }

    if (minutes < 10) {
        minutes = '0' + minutes;
    }

   if (seconds < 10) {
        seconds = '0' + seconds;
    }

    console.log(`${hours}:${minutes}:${seconds}`);
}
