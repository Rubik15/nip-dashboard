
let machine = {
    id: '212707',
    type: 'horizontal-cut',
    owner: 'isolkappa',
    factory: 'battipaglia',
    country: 'italy',
    qtodo: 12.0,
    qdone: 10.0,
    actualLocRecipe: 'IK120050EPS10020G',
    actualPlantRecipe: 'IK12PCS1PPDIK1000',
    actualBatch: 'LOT1234567',
    actualLoggedOperator: 'S.Divone',
    state: 1
};

function returnPercent(machine){
    return ((machine.qdone/machine.qtodo)*100).toPrecision(2);
}

console.log(returnPercent(machine));