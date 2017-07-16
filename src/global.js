// a global namespace for all your stuff
import Action from './action.js';

class GlobalObject {
  constructor() {
    this.actions = [];
  }

  addAction(exp) {
    const action = new Action(exp, this);
    this.actions.push(action);
    return action;
  }

  exeActions() {
    this.actions.map((a) => a.exe());
    this.clearActions();
  }

  clearActions() {
    this.actions.length = 0;
  }
}

const Global = new GlobalObject();

export default Global;
