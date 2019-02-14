import Component from "../Component.js";
import CreateEl from "../../../app/utils/HtmlElementUtils.js";
import EventConsts from "../../../app/utils/EventConstants.js";

////////////////////////////////////////////////////////////////////////////////////
// Flex Grid Component:
// Usage:
// app.registerComponent("<name>", "<id of tag>", <Flexgrid instance>, <num shown on each page>, <JSON data>);
//
////////////////////////////////////////////////////////////////////////////////////
export default class FlexGrid extends Component {
  constructor(cls, data) {
    super(cls, data);

    this.newData = null;
  }

  //called when component needs to be rebuilt
  update(){
    this.buildPage();
  }

  buildPage(currentPage = 0) {
    let cel = new CreateEl();
    let count = -1;
    

    if(this.newData == null) {
      console.log("build pages");
      this.newData = this.createPages(this.data, this.pageSize);
    }

    console.dir(this.newData);
    console.log("stuff", currentPage);

    //create html and populate data
    //TODO: make template external to component
    var markup = `
    ${this.newData[currentPage].map(info => `<artical class='FlexGrid' id=${count += 1}>
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
    cel.addEventByClass('FlexGridPageDown', EventConsts.CLICK_EVENT, this.pageDown.bind(this, currentPage, Math.ceil(this.data.length/this.pageSize)));
    cel.addEventByClass('FlexGridPageUp', EventConsts.CLICK_EVENT, this.pageUp.bind(this, currentPage, Math.ceil(this.data.length/this.pageSize)));
  }

  createPages (data, pageSize) {
    var pageData = new Array(Math.ceil(data.length/pageSize));
    var currentPage = 0;

    console.log("array size: ", data.length, pageSize, Math.ceil(data.length/pageSize));
    for (var index = 0; index < data.length/pageSize; ++index) {
      pageData[index] = new Array(pageSize);
      for (var pageIndex = 0; pageIndex < pageSize; ++pageIndex){
        currentPage += 1;
        if(data[currentPage] != undefined) {
          pageData[index][pageIndex] = data[currentPage];
        }
      }
    }
    return pageData;
  }

  showDescription (data) {
    event.preventDefault();
    console.log("element mouse over: ", event.currentTarget, data);
  }

  //Increament the pages
  pageUp (currentPage, numPages) {
    
    currentPage += 1;

    if(currentPage > numPages) {
      currentPage = numPages - 1;
    }

    this.buildPage(currentPage);
  }

  //Decreament the pages
  pageDown (currentPage, numPages) {
    
    currentPage -= 1;

    if(currentPage < 0) {
      currentPage = 0;
    }

    this.buildPage(currentPage);
  }
}

export var __useDefault = true;