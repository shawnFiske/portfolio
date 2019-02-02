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

    //newData = createPages (data, this.pageSize)
    console.log("page count", this.pageSize);

    //*//create component view page data
    for(var index = this.currentPage; index < (this.currentPage + this.pageSize); index++) {
      if(this.data[index] != undefined) { 
        newData.push(this.data[index]);
        var answer = this.pageSize % index;
        console.log("answer = ",answer, index);
      }
    };//*/

    //create html and populate data
    var markup = `
    ${newData.map(info => `<artical class='FlexGrid' id=${count += 1}>
        <div>
          <a href='${info.projectUrl}' target='_blank'>
            <img alt='${info.projectName}' src='${info.imageUrl}'>
          </a>
        </div>
        <span class='projectTitle'>
              ${info.projectName}
        </span>
        </artical>`).join('')}
    `;
    
    this.addContentByClass(this.cls, markup); 
    
    //cel.addEventByClass('FlexGrid', "mouseover", this.showDescription);
    cel.addEventByClass('FlexGridPageDown', EventConsts.CLICK_EVENT, this.pageDown.bind(this, this.currentPage, this.pageSize, this.data.length));
    cel.addEventByClass('FlexGridPageUp', EventConsts.CLICK_EVENT, this.pageUp.bind(this, this.currentPage, this.pageSize, this.data.length));
  }

  createPages (data, perPage) {
    var pageData = [];
    var pages = [];

    for(var index = 0; index < data.length; index++) {
      if(index < perPage) { 
        pageData.push(data[index]);
      }
    };

    return pageData;
  }

  showDescription (data) {
    event.preventDefault();
    console.log("element mouse over: ", event.currentTarget, data);
  }

  //Increament the pages
  pageUp (currentPage, pageSize, size) {

    this.currentPage = this.currentPage + this.pageSize;

    if( (this.currentPage + this.pageSize) > size) {
      this.currentPage = size - this.pageSize;
    }

    this.update();
  }

  //Decreament the pages
  pageDown (currentPage, pageSize, size) {
 
    this.currentPage = this.currentPage - this.pageSize;

    if( this.currentPage < 0) {
      this.currentPage = 0;
    }

    this.update();
  }
}

export var __useDefault = true;