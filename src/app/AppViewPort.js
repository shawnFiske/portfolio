export default class AppViewPort {
  
  constructor() {
    this.list = [];
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
      this.list.push(component);
  }

  updateAllComponents() {
    for(var i = 0; i < this.list.length; i++){
      this.list[i].update();
    }
  }

  updateComponentByName(name) {
    for(var i = 0; i < this.list.length; i++){
      if(this.list[i].name == name) {
        this.list[i].update();
      }
    }
  }
}

export var __useDefault = true;