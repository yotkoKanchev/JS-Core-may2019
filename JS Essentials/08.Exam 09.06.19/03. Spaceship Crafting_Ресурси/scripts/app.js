function spaceshipCrafting() {

    let titaniumCoreElement = document.getElementById('titaniumCoreFound');
    let aluminiumCoreElement = document.getElementById('aluminiumCoreFound');
    let magnesiumCoreElement = document.getElementById('magnesiumCoreFound');
    let carbonCoreElement = document.getElementById('carbonCoreFound');
    let lossesElement = document.getElementById('lossesPercent');

    if (titaniumCoreElement && aluminiumCoreElement && magnesiumCoreElement && carbonCoreElement && lossesElement) {
        let titaniumCore = Number(titaniumCoreElement.value);
        let aluminiumCore = Number(aluminiumCoreElement.value);
        let magnesiumCore = Number(magnesiumCoreElement.value);
        let carbonCore = Number(carbonCoreElement.value);
        let losses = Number(lossesElement.value);


        let lossPercentage = losses / 4;

        let titaniumBars = Math.round((titaniumCore - (titaniumCore * (lossPercentage / 100))) / 25);
        let aluminiumBars = Math.round((aluminiumCore - (aluminiumCore * (lossPercentage / 100))) / 50);
        let magnesiumBars = Math.round((magnesiumCore - (magnesiumCore * (lossPercentage / 100))) / 75);
        let carbonBars = Math.round((carbonCore - (carbonCore * (lossPercentage / 100))) / 100);

        let undefinedShipObj = {
            'THE-UNDEFINED-SHIP': 0
        };

        let nulMasterObj = {
            'NULL-MASTER': 0
        };

        let JSONCrewShipObj = {
            'JSON-CREW': 0
        };

        let falseFleetShipObj = {
            'FALSE-FLEET': 0
        };

        while (titaniumBars >= 2 && aluminiumBars >= 2 && magnesiumBars >= 3 && carbonBars >= 1) {
            if (titaniumBars >= 7 && aluminiumBars >= 9 && magnesiumBars >= 7 && carbonBars >= 7) {
                titaniumBars -= 7;
                aluminiumBars -= 9;
                magnesiumBars -= 7;
                carbonBars -= 7;
                undefinedShipObj["THE-UNDEFINED-SHIP"]++;
            }

            if (titaniumBars >= 5 && aluminiumBars >= 7 && magnesiumBars >= 7 && carbonBars >= 5) {
                titaniumBars -= 5;
                aluminiumBars -= 7;
                magnesiumBars -= 7;
                carbonBars -= 5;
                nulMasterObj["NULL-MASTER"]++;
            }

            if (titaniumBars >= 3 && aluminiumBars >= 5 && magnesiumBars >= 5 && carbonBars >= 2) {
                titaniumBars -= 3;
                aluminiumBars -= 5;
                magnesiumBars -= 5;
                carbonBars -= 2;
                JSONCrewShipObj["JSON-CREW"]++;
            }

            if ((titaniumBars >= 2 && aluminiumBars >= 2 && magnesiumBars >= 3 && carbonBars >= 1)) {
                titaniumBars -= 2;
                aluminiumBars -= 2;
                magnesiumBars -= 3;
                carbonBars -= 1;
                falseFleetShipObj["FALSE-FLEET"]++;
            }

            if (titaniumBars < 2 || aluminiumBars < 2 || magnesiumBars < 3 || carbonBars < 1) {
                break;
            }
        }

        let barsArray = [];
        barsArray.push(`${titaniumBars} titanium bars`);
        barsArray.push(`${aluminiumBars} aluminum bars`);
        barsArray.push(`${magnesiumBars} magnesium bars`);
        barsArray.push(`${carbonBars} carbon bars`);

        let barsElement = document.getElementById('outputs').getElementsByTagName('p')[0];
        barsElement.textContent = barsArray.join(', ');

        let result = [];

        if (undefinedShipObj["THE-UNDEFINED-SHIP"] > 0) {
            result.push(`${undefinedShipObj["THE-UNDEFINED-SHIP"]} THE-UNDEFINED-SHIP`)
        }

        if (nulMasterObj["NULL-MASTER"] > 0) {
            result.push(`${nulMasterObj["NULL-MASTER"]} NULL-MASTER`)
        }

        if (JSONCrewShipObj["JSON-CREW"] > 0) {
            result.push(`${JSONCrewShipObj["JSON-CREW"]} JSON-CREW`)
        }

        if (falseFleetShipObj["FALSE-FLEET"] > 0) {
            result.push(`${falseFleetShipObj["FALSE-FLEET"]} FALSE-FLEET`)
        }

        let buildSpaceships = document.getElementById('builtSpaceships').getElementsByTagName('p')[0];
        buildSpaceships.textContent = result.join(', ');
    }

}