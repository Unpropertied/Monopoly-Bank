export class Transaction {
  constructor(amount, payer, reciever, id) {
    this._id = id;
    this._amount = amount;
    this._payer = payer;
    this._reciever = reciever;
  }
}

class MoneyManager {
  constructor() {
    this._paychain = [];
  }

  get paychain() { return this._paychain }
  set paychain(paychain) { this._paychain = paychain }

  add(amount, payer, reciever){
    if(typeof amount == 'Transaction') {
      this.paychain.push(amount);
    } else {
      this.paychain.push(new Transaction(amount, payer, reciever));
    }
  }
}

export default new MoneyManager();