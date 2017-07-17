// a global namespace for all your stuff
import Action from './action.js';
/**
  * helps you in keeping track of state between setup, draw, and events.
  * @class GlobalObject
*/
class GlobalObject {
  constructor() {
    this.actions = [];
  }
  /**
    * Creates a new action for Global to execute
    * @name Global.addAction
    * @param {Function} exp the expression the user wants executed after the draw loop.
    * @returns {Action} the new Action just added to the Global.actions list
  */
  addAction(exp) {
    const action = new Action(exp, this);
    this.actions.push(action);
    return action;
  }

  /**
    * executes all actions in the Global.actions list
    * and then clears the list
    * @name Global.exeActions
  */
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
