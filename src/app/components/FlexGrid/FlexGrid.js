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
  }

  //called when component needs to be rebuilt
  update(currentPage = 0){
    let cel = new CreateEl();
    let count = -1;
    var newData = null;

    if(newData == null) {
      newData = this.createPages(this.data, this.pageSize);
    }

    //console.dir(newData);
    console.log(currentPage);

    //create html and populate data
    //TODO: make template external to component
    var markup = `
    ${newData[currentPage].map(info => `<artical class='FlexGrid' id=${count += 1}>
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

    this.update(currentPage);
  }

  //Decreament the pages
  pageDown (currentPage, numPages) {
    
    currentPage -= 1;

    if(currentPage < 0) {
      currentPage = 0;
    }

    this.update(currentPage);
  }
}

export var __useDefault = true;