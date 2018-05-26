document.querySelector('#startAppForm').addEventListener('submit', e => {
  document.querySelector('.overlay').classList.add('hidden');
  new Monopoly();
});

import {default as Monopoly} from "./modules/monopolyApp/Monopoly.js";
