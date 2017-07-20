
function TypeError(message) {
  this.name = "TypeError";
  this.message = message;
}

class Types {
  constructor() {
    this.models = {};
  }

  add(name, struct) {
    if(typeof struct === 'object') {
      if(name in this.models) {
        throw new TypeError(`Model with name: ${name} already exists`);
      } else {
        let model = {};
        model.blueprint = struct;
        model.keys = Object.keys(struct);
        model.args = [];
        model.keys.forEach((key) => {
           model.args.push(typeof struct[key]);
        });
        this.models[name] = model;
      }
    }
    else {
      throw new TypeError(
        `Attempted to create new Model ${name}
        but object provided ${struct} was not the correct type`
      );
    }
  }

  new(name, ...rest) {
    if(!name) {
      throw `Function ${this.new} expected a string but found ${typeof name}`;
    }
    /*
     * If name and model exist, proceed.
     * If no arguments are passed in the form of rest
     * we just clone and return the blueprint.
     * Otherwise, we clone and then overwrite the default values.
     * Order and types MUST match up as they are ordered in the
     * blueprint.
    */
    else if(name in this.models) {
      const model = this.models[name];
      let obj = Object.assign({}, model.blueprint);

      if(rest.length > 0) {
        rest.forEach((arg, index) => {
          if(arg) {
            if(typeof arg === model.args[index]) {
              obj[model.keys[index]] = arg;
            }
            else {
              throw new TypeError(
                `Type mismatch when creating new model
                 Expected ${model.args[index]}
                 but found ${typeof arg}`
               );
            }
          }
        });
      }
      return obj;
    }
    else {
      throw new TypeError(`Model with name ${name} not found`);
    }
  }
}

const types = new Types();
export default types;
