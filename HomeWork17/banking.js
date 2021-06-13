class Account {
  constructor(name, balance) {
    this._name = name;
    this._balance = balance;
  }
  //   get id() {
  //     return this._id;
  //   }
  //   set id(id) {
  //     if (typeof id === "number") {
  //   this._id =id
  //       return;
  //     }
  //     throw new Error("Wrong id");
  //   }
  get name() {
    return this._name;
  }
  set name(name) {
    if (typeof name === "string") {
      this._name = name;
      return;
    }
    throw new Error("Please enter your name");
  }
  get balance() {
    return this._balance;
  }
  set balance(balance) {
    if (typeof balance === "number") {
      this._balance = balance;
      return;
    }
    throw new Error("Error");
  }
  credit(amount) {
    return this._balance + amount;
  }
  debit(amount) {
    if (amount > this._balance) {
      return "Amount exceeded balance.";
    }
    this._balance - amount;
    return;
  }

  transferTo(anotherAccount, amount) {
    this.debit(amount);
    anotherAccount.credit(amount);
    return this.balace;
  }
  static ideentyfyAccount(accountFirst, accountSecond) {
    return accountFirst.id === accountSecond.id;
  }
  toString() {
    let id = 0;
    let result = `Saving account's ${this.id} ${this._name} balance is ${this.balace}`;
    id++;
    return result;
  }
}

let savingAcc = new Account("Saving account", 2000);
let cardAcc = new Account("Card account", 1000);
console.log(savingAcc); // Account { id: 0, _name: 'Saving account',_balance: 2000 }
console.log(cardAcc); // Account { id: 1, _name: 'Card account', _balance:1000 }
console.log(savingAcc.balance); // 2000
console.log(savingAcc.credit(400)); // 2400
console.log(savingAcc.balance); // 2400
console.log(savingAcc.debit(9000)); //6600                  -----
console.log(savingAcc.transferTo(cardAcc, 1000)); // 1400   -----
console.log(savingAcc.balance); // 1400
console.log(cardAcc.balance); // 2000
let anotherAcc = savingAcc;
console.log(Account.identifyAccounts(savingAcc, anotherAcc)); // true
console.log(Account.identifyAccounts(savingAcc, cardAcc)); // false
console.log(savingAcc.toString()); // Saving account's account balance is $1400.
