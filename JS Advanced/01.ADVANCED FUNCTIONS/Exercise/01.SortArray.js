function arraySort(array, sortingType) {
    let resultArray = '';
    if (sortingType === 'asc'){
         resultArray = array.sort((a,b) => a-b);
    } else {
        resultArray = array.sort((a,b) => b-a);
    }
    return(resultArray);
};
