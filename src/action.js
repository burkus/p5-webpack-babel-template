// Action class
export default class Action {
  /*
    action is the lambda expression to be executed - required
    action takes as an argument a reference to Global
    handler is a reference to the Global in charge - required
  */
  constructor(action, handler) {
    this.expression = action;
    this.onState = null;
    this.handler = handler;
  }

  forState(condExp) {
    if(!condExp) {
      return this.handler;
    }
    else {
      this.onState = condExp;
      return this.handler;
    }
  }

  exe() {
    if(this.onState === null) {
      this.expression(this.handler);
    }
    else if(this.onState(this.handler)) {
      this.expression(this.handler);
    }
  }
}
