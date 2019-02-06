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
  update(){
    let cel = new CreateEl();
    let count = -1;
    const newData = [];

    //newData = createPages (data, this.pageSize)
    //console.log("page count", this.pageSize);

    console.dir(this.createPages(this.data, this.pageSize));

    //*//create component view page data
    for(var index = this.currentPage; index < (this.currentPage + this.pageSize); index++) {
      if(this.data[index] != undefined) { 
        newData.push(this.data[index]);
      }
    };//*/

    //create html and populate data
    //TODO: make template external to component
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

  createPages (data, pageSize) {
    var pageData = [];
    pageData[0] = [];
    var page = [];
    var pageNumber = 0;
    var currentPage = 0;

    console.log("array size: ", data.length, pageSize, data.length/pageSize);

    for(var index = 0; index < data.length; index++) {
      if(pageNumber < pageSize) { 
        page.push(data[index]);
        console.log("pages: ", index, currentPage, pageNumber);
        pageNumber += 1;
      }else{
        currentPage += 1;
        pageNumber = 0;
        console.dir(page);
        console.log("pages: ", index, currentPage, pageNumber);
        //pageData[currentPage][pageNumber].push(page);
        console.log("test..");
        page = [];
        page.push(data[index]);
        pageNumber += 1;
      }
    };
    pageData[currentPage][pageNumber] = page;
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