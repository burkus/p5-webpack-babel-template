/**
  * A wrapper class for lambda expressions passed to Global.actions
  * @class Action
  * @param {Function} action The expression to be invoked
  * @param {GlobalObject} handler A reference to Global for convenience
*/
export default class Action {
  constructor(action, handler) {
    this.expression = action;
    this.onState = null;
    this.handler = handler;
  }
  /**
    * adds a necessary condition for the action to execute
    * @name Action.forState
    * @param {Function} condExp conditional expression
    * @returns {GlobalObject} the handler of the action.
  */
  forState(condExp) {
    if(!condExp) {
      return this.handler;
    }
    else {
      this.onState = condExp;
      return this.handler;
    }
  }

  /**
    * Executes the expression
    * @name Action.exe
  */
  exe() {
    if(this.onState === null) {
      this.expression(this.handler);
    }
    else if(this.onState(this.handler)) {
      this.expression(this.handler);
    }
  }
}
