export default class App {
  constructor(options = {
    user: ""
  }) {
    this._user = options.user;
  }

  set user(user) {
    this._user = user;
  }

  get user() {
    return this._user;
  }
}