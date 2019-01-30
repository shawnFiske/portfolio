import Component from "../Component.js";
import CreateEl from "../../../app/utils/HtmlElementUtils.js";
import EventConsts from "../../../app/utils/EventConstants.js";

export default class FlexGrid extends Component {
  constructor(cls, data) {
    super(cls, data);
  }

  //called when component needs to be rebuilt
  update(){
    let cel = new CreateEl();
    let count = -1;
    const newData = [];

    console.log("page count", this.pageInc);

    //create component view page dataS
    for(var index = this.currentPage; index < (this.currentPage + this.pageInc); index++) {
      if(this.data[index] != undefined) { 
        newData.push(this.data[index]);
      }
    };

    //create html and populate data
    var markup = `
    ${newData.map(info => `<artical class="FlexGrid" id=${count += 1}>
        <div>
          <a href="${info.projectUrl}" target="_blank">
            <img alt="${info.projectName}" src="${info.imageUrl}">
          </a>
        </div>
        <span class="projectTitle">
              ${info.projectName}
        </span>
        </artical>`).join('')}
    `;
    
    this.addContentByClass(this.cls, markup); 
    
    //cel.addEventByClass('FlexGrid', "mouseover", this.showDescription);
    cel.addEventByClass('FlexGridPageDown', EventConsts.CLICK_EVENT, this.pageDown.bind(this, this.currentPage, this.pageInc, this.data.length));
    cel.addEventByClass('FlexGridPageUp', EventConsts.CLICK_EVENT, this.pageUp.bind(this, this.currentPage, this.pageInc, this.data.length));
  }

  showDescription (data) {
    event.preventDefault();
    console.log("element mouse over: ", event.currentTarget, data);
  }

  //Increament the pages
  pageUp (currentPage, pageInc, size) {

    this.currentPage = this.currentPage + this.pageInc;

    if( (this.currentPage + this.pageInc) > size) {
      this.currentPage = size - this.pageInc;
    }

    this.update();
  }

  //Decreament the pages
  pageDown (currentPage, pageInc, size) {
 
    this.currentPage = this.currentPage - this.pageInc;

    if( this.currentPage < 0) {
      this.currentPage = 0;
    }

    this.update();
  }
}

export var __useDefault = true;