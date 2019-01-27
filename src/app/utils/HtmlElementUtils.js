export default class HtmlAddEllementUtils {
  
  constructor() { }

  //Content Methods
  addContentByClass(cl, content) {
    let targets = document.querySelectorAll("." + cl);
    for (var i = targets.length - 1; i >= 0; --i){
      targets[i].innerHTML = content; 
    }
  }

  addContentToElement(element, content) {
      element.innerHTML = content; 
  }


  addContentById(id, content) {
    let el = document.appendChild(content);
    let target = this.getById(id);
    target.appendChild(el);
  }

  addHtmlById(id, html) {
    let target = this.getById(id);
    target.innerHTML = html;
  }

  //Event Methods
  addEventByClass(cl, eventType, cb) {
    let targets = document.querySelectorAll("." + cl);
    //var clickEvent = new CustomEvent("clickIt", {detail: {data: "test",	time: new Date()},bubbles: true,cancelable: true});
    //let clickEvent = this.createEvent("CustomEvent");
    //clickEvent.initCustomEvent("clickIt", true, true, {'data': data});
    //this.dispatchEvent(clickEvent);

    for (var i = targets.length - 1; i >= 0; --i){
      targets[i].addEventListener(eventType, cb); 
    }
  }

  addEventToElement(element, eventType, cb) {
    element.addEventListener(eventType, cb); 
  }

  getById(id){
    return document.getElementById(id);
  }

  getByClass(cl){
    return document.getElementsByClassName(cl);
  }

}

export var __useDefault = true;