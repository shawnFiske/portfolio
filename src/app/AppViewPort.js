export default class AppViewPort {
  
  constructor() {
    this.components = [];
  }
  
  test() {
    return "test called: " + this.name;
  }

  registerComponent(name, tag, Component, object) {
    let component = null;
    if(object == null || object == undefined) {
      component = new Component(tag);
      component.name = name;
    }else{
      component = new Component(tag, object);
      component.name = name;
    }
      this.components.push(component);
  }

  updateAllComponents() {
    for(var i = 0; i < this.components.length; i++){
      this.components[i].update();
    }
  }

  updateComponentByName(name) {
    for(var i = 0; i < this.components.length; i++){
      if(this.components[i].name == name) {
        this.components[i].update();
      }
    }
  }
}

export var __useDefault = true;