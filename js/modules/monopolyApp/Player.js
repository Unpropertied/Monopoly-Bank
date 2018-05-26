export default class Player {
  constructor(username, initialOptions) {
    this._username = username || this.getRandomName();
    this._money = initialOptions.money || 0;
  }

  get username() { return this._username }
  set username(name) { this._username = name }

  get money() { return this._money }
  set money(money) { this._money = money }

  get moneyString() { return this.money + ' $' }

  pay(amount, reciever) {
    this.money -= amount;
    if (reciever) {
      reciever.recieve(amount);
    }
  }

  recieve(amount, payer) {
    this.money += amount;
    if (payer) {
      payer.pay(amount);
    }
  }

  getRandomName() {
    const names = [
      'Perry', 'Alesia', 'Yasuko', 'Mirta', 'Iola',
      'Charleen', 'Delena', 'Carolina', 'Hilda', 'Giuseppe',
      'Andera', 'Lilly', 'Deane', 'Cassaundra', 'Thora',
      'Ester', 'Loriann', 'Denice', 'Lashawn', 'Zella',
      'Arthur', 'Harriet', 'Jazmin', 'Darin', 'Dwain',
      'Melida', 'Daphine', 'Louella', 'Cleora', 'Cassey',
      'Melanie', 'Charisse', 'Gertrud', 'Wei', 'Evelin',
      'Rosalinda', 'Kaylene', 'Danyell', 'Julieann', 'Fae',
      'George', 'Jonelle', 'Kenyatta', 'Jeniffer', 'Alvin',
      'Roxanne', 'Alia', 'Florence', 'Norris', 'Karleen'
    ];

    return names[~~(Math.random() * names.length)];
  }
}