class Transaction {
    constructor(accountIdFrom, accountIdTo, amount, currency) {
        this.accountIdFrom = accountIdFrom;
        this.accountIdTo = accountIdTo;
        this.amount = amount;
        this.date = currency;
    }

    commit() {
        console.log('COMMIT!');
    }
}

const currentUser = {
    name: 'John',
    roleID: 4,
};

const transactionProxy = new Proxy(Transaction, {
    construct(target, argArray, newTarget) {
        console.log('INFO:'+  (Date()).toString() + ' Transactions details: ' + argArray.join('|'));
        // return new target(...argArray);
        return new Proxy(new target(...argArray), {
            get(target, p, receiver) {
                if(p === 'amount' && currentUser.roleID > 2) {
                    throw new Error('You do not allowed to see the amount of transaction!');
                }
                return target[p];
            },
            set(target, p, value, receiver) {
                if (currentUser.roleID > 1) {
                    throw new Error('You do not have access to edit transactions!');
                }

                target[p] = value;
            },
            has(target, p) {
                return !!target[p];
            }
            // apply(target, thisArg, argArray) {
            //     console.log('4');
            //     // return target.apply(thisArg, ...argArray)
            // }
        })
    },
    apply(target, thisArg, argArray) {
        console.log('3');
        // return target.apply(thisArg, ...argArray)
    }
});

const p = new transactionProxy(
    'YTT:99898099898320138',
    'YTT:998980998983206558',
    300,
    'USD'
);


// console.log(p.amount);
console.log('amount' in p);
// p.amount = 99999;
console.log(p);

if (p.someProperty === 'value') {
    // code
}

p.commit();

