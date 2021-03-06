export default class ComponentManager {
  
  constructor() {
    this.components = [];
  }

  //Register a compnent to the manager
  // usage: 
  // import View from "./app/ComponentManager.js";
  // let app = new View();
  //
  // app.registerComponent("myFlexGrid", "view", FlexGridComp, data)
  // app.updateComponentByName("myFlexGrid");
  // or
  // app.updateAllComponents();
  registerComponent(name, tag, Component, pageSize = 0, object) {
    let component = null;
    if(object == null || object == undefined) {
      component = new Component(tag);
      component.name = name;
      component.pageSize = pageSize;
    }else{
      component = new Component(tag, object);
      component.name = name;
      component.pageSize = pageSize;
    }
      this.components.push(component);
  }

  // Update all registers components
  updateAllComponents() {
    for(var i = 0; i < this.components.length; i++){
      this.components[i].update();
    }
  }

  // update component by name
  updateComponentByName(name) {
    for(var i = 0; i < this.components.length; i++){
      if(this.components[i].name == name) {
        this.components[i].update();
      }
    }
  }

  updateComponentPageView(name, itemCount) {
    for(var i = 0; i < this.components.length; i++){
      if(this.components[i].name == name) {
        this.components[i].pagInc = itemCount;
      }
    }
  }
}

export var __useDefault = true;