function solve(array) {
    let profitList = [];

    for (let row of array) {
        let currentObj = {};

        let currentTown = profitList.find(x => x.town === row.town);

        if (!currentTown) {
            currentObj['town'] = row.town;
            currentObj['profit'] = row.price;
            currentObj['vignetteCount'] = 1;
            currentObj['modelsList'] = [];

            let modelObject = {};
            modelObject['model'] = row.model;
            modelObject['count'] = 1;
            modelObject['price'] = row.price;
            currentObj.modelsList.push(modelObject);

            profitList.push(currentObj);
        } else {
            currentTown.profit += row.price;
            currentTown.vignetteCount++;

            let currentModel = currentTown.modelsList.find(m => m.model === row.model);
            if (!currentModel) {
                let modelObject = {};
                modelObject['model'] = row.model;
                modelObject['count'] = 1;
                modelObject['price'] = row.price;

                currentTown.modelsList.push(modelObject);
            } else {
                currentModel.count++;
                if (currentModel.price < row.price) {
                    currentModel.price = row.price;
                }
            }
        }
    }

    let sortedList = profitList.sort((a, b) => {
        return b.profit - a.profit || b.vignetteCount - a.vignetteCount || a.town.localeCompare(b.town);
    });

    let bestTown = sortedList[0];
    let bestTownName = bestTown.town;
    let bestTownProfit = sortedList[0].profit;
    console.log(`${bestTownName} is most profitable - ${bestTownProfit} BGN`);

    let sortedModelList = bestTown.modelsList.sort((a, b) => {
        return b.count - a.count || b.price - a.price || a.model.localeCompare(b.model);
    });

    let bestModel = sortedModelList[0].model;
    console.log(`Most driven model: ${bestModel}`);

    for (let i = 0; i < array.length; i++) {
        if (array[i].model !== bestModel) {
            array.splice(i--, 1);
        }
    }

    let numbersList = [];
    for (let row of array) {
        let currentObj = {};
        let currentTown = numbersList.find(x => x.town === row.town);

        if (!currentTown) {
            currentObj['town'] = row.town;
            currentObj['platesList'] = [];
            currentObj.platesList.push(row.regNumber);
            numbersList.push(currentObj);
        } else {
            currentTown.platesList.push(row.regNumber);
        }
    }

    numbersList.sort((a, b) => {
        return a.town.localeCompare(b.town);
    });

    for (let row of numbersList) {
        let sortedPlatesList = row.platesList.sort((a, b) => {
            return a.localeCompare(b);
        });
        let result = row.town + ': ' + sortedPlatesList.join(', ');
        console.log(result);
    }
}
