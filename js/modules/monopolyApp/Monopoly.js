import {default as App} from "../app/App.js";
import Player from "./Player.js";

export default class Monopoly extends App {
  constructor(options) {
    super(options);

    console.log(document.querySelector('#loginPlayerName').value);

    this.user = new Player(document.querySelector('#loginPlayerName').value, {money: 0});

    document.querySelector('#ownPlayerName').innerText = this.user.username;
    document.querySelector('#ownPlayerMoney').innerText = this.user.moneyString;
  }
}