import Component from "../Component.js";
import CreateEl from "../../../app/utils/HtmlElementUtils.js";

export default class FlexGrid extends Component {
  constructor(cls, data) {
    super(cls, data);
  }

  update(){
    let cel = new CreateEl();
    let count = -1;
    console.log('updateComonent...', this.data, this.cls, this.name);
    console.log('First Line...', this.data.length);
    
    const markup = `<section>
    ${this.data.map(info => `<artical class="FlexGrid" id=${count += 1}>
        <div>
          <a href="${info.projectUrl}" target="_blank">
            <img alt="${info.projectName}" src="${info.imageUrl}">
          </a>
        </div>
        <span class="projectTitle">
              ${info.projectName}
        </span>
        </artical>`).join('')}
      </section>`;
    
    this.addContentByClass(this.cls, markup); 
    cel.addEventByClass('FlexGrid', "mouseover", this.showDescription);
  }

  showDescription (event) {
    event.preventDefault();
    console.log("element mouse over: ", event.currentTarget.getElementById("id").value, this.data[event.currentTarget.getElementById("id").value]);
  }
}

export var __useDefault = true;