import Component from "../Component.js";
import CreateEl from "../../../app/utils/HtmlElementUtils.js";
import EventConsts from "../../../app/utils/EventConstants.js";

export default class FlexGrid extends Component {
  constructor(cls, data) {
    super(cls, data);
    this.startpage = 0;
    this.pageInc = 6;
    this.currentMaxPage = this.startpage + this.pageInc;
  }

  //called when component needs to be rebuilt
  update(){
    let cel = new CreateEl();
    let count = -1;
    const newData = [];

    console.log('Data Count...', this.data.length, this.currentMaxPage);

    //create component view page dataS
    for(var index = this.startpage; index < this.currentMaxPage; index++) {
      newData.push(this.data[index]);
    };

    console.log("Page: "+ newData);

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

    markup += '<section><button class="pageDown"><</button><button class="pageUp">></button></section>';
    
    this.addContentByClass(this.cls, markup); 
    
    cel.addEventByClass('FlexGrid', "mouseover", this.showDescription);
    cel.addEventByClass('pageDown', EventConsts.CLICK_EVENT, this.pageDown);
    cel.addEventByClass('pageUp', EventConsts.CLICK_EVENT, this.pageUp);
  }

  showDescription (event) {
    event.preventDefault();
    console.log("element mouse over: ", event.currentTarget);
  }

  //Increament the pages
  pageUp (event) {
    console.log('Data Count...', this.currentMaxPage, event.currentTarget);

    /*
    this.startpage += this.pageInc;

    if(startpage > this.data.lenght) {
      this.startpage = this.data.lenght - this.pageInc;
    }
    this.currentMaxPage = this.startpage + this.pageInc;

    console.log("pageUp: "+ this.startpage +" max: "+ this.currentMaxPage);
    */
  }

  //Decreament the pages
  pageDown (event) {
    console.log('Data Count...', this.currentMaxPage, event.currentTarget);
    /*
    this.startpage = this.startpage - this.pageInc;

    if( this.startpage < 0) {
      this.startpage = 0;
    }
    this.currentMaxPage = this.startpage + this.pageInc;

    console.log("pageDown: "+ this.startpage +" max: "+ this.currentMaxPage);
    */
  }
}

export var __useDefault = true;