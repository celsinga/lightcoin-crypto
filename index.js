class Account {

  constructor(username) {
    this.username = username;
    this.transactions = [];
  }

  get balance() {
    for (let i = 0; i < this.transactions.length; i++) {
      return (this.transactions[0].amount - this.transactions[1].amount);
    }
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }

}

class Transaction {

  constructor(amount, account) {
    this.amount  = amount;
    this.account = account;
  }

  commit() {
    this.time = new Date();

    this.account.addTransaction(this);
  }

}

class Deposit extends Transaction {

  get value() {
    return this.amount
  }

}

class Withdrawal extends Transaction {

  get value() {
    return -this.amount;
  }

}

const myAccount = new Account('billybob');

console.log(`Starting Balance for ${myAccount.username}:`, myAccount.amount);

const t1 = new Deposit(120.00, myAccount);
t1.commit();

const t2 = new Withdrawal(50.00, myAccount);
t2.commit();

console.log(`Ending Balance for ${myAccount.username}:`, myAccount.balance);
