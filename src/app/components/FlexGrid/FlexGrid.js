import Component from "../Component.js";
import CreateEl from "../../../app/utils/HtmlElementUtils.js";

export default class FlexGrid extends Component {
  constructor(cls, data) {
    super(cls, data);
    this.startpage = 0;
    this.numPages = 9;
  }

  //called when component needs to be rebuilt
  update(){
    let cel = new CreateEl();
    let count = -1;
    const newData = [];
    console.log('Data Count...', this.data.lenght);

    for(var index = this.startpage; index < this.numPages; index++) {
      newData.push(this.data[index]);
    }
    console.log("Page: "+ newData);

    const markup = `
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
    cel.addEventByClass('FlexGrid', "mouseover", this.showDescription);
  }

  showDescription (event) {
    event.preventDefault();
    console.log("element mouse over: ", event.currentTarget.getElementById("id").value, this.data[event.currentTarget.getElementById("id").value]);
  }
}

export var __useDefault = true;