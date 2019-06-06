function solve(matrix) {

    let bills = [];
    let balance = 0;

    for (let row of matrix) {
        if (row.length > 2) { //insert money
            insert(row);
        } else if (row.length === 2) { // withdraw money
            withdraw(row);
        } else { // report the count
            let askedBill = Number(row[0]);
            let askedBillCount = bills.filter((x) => x === askedBill).length;
            console.log(`Service Report: Banknotes from ${askedBill}$: ${askedBillCount}.`);
        }
    }

    function insert(row) {
        let cash = 0;

        for (let bill of row) {
            bills.push(Number(bill));
            cash += Number(bill);
        }
        balance += cash;

        console.log(`Service Report: ${cash}$ inserted. Current balance: ${balance}$.`);
    }

    function withdraw(row) {
        let currentBalance = Number(row[0]);
        let moneyToWithdraw = Number(row[1]);

        if (currentBalance < moneyToWithdraw) {
            console.log(`Not enough money in your account. Account balance: ${currentBalance}$.`)
        } else {
            if (balance < moneyToWithdraw){
                console.log(`ATM machine is out of order!`);
            } else{
                bills.sort((a,b) => b-a);
                let moneyLeft = moneyToWithdraw;

                while (moneyLeft > 0){
                    for (let i = 0; i < bills.length; i++) {
                        if (bills[i] <= moneyLeft){
                            moneyLeft-= bills[i];
                            currentBalance-= bills[i];
                            bills.splice(i,1);
                            i--;
                        }
                    }
                }
                balance -= moneyToWithdraw;
                console.log(`You get ${moneyToWithdraw}$. Account balance: ${currentBalance}$. Thank you!`)
            }
        }
    }
}
