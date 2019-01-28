//Entry Point
import View from "./app/ComponentManager.js";
import FlexGridComp from "./app/components/FlexGrid/FlexGrid.js";
import CreateEl from "./app/utils/HtmlElementUtils.js";
import EventConsts from "./app/utils/EventConstants.js";

let app = new View();
let cel = new CreateEl();

document.body.onload = init;

function init(e) {
    const data = [
          {"projectName": "Supply Connect 1", "projectUrl": "https://surplusconnection.herokuapp.com/#/home", "imageUrl": "./images/surplus_connection.png", "description": "Project 1 Description     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt ultricies lacus, in consequat arcu gravida a. Nunc ut vestibulum tellus, ac aliquam erat. Duis et auctor mi, vitae sollicitudin urna. Praesent sit amet feugiat odio. Vivamus nibh leo, condimentum sit amet eros vel, rutrum fringilla lacus."},
          {"projectName": "Kitchen Sink 1", "projectUrl": "http://kitchensinkapp.herokuapp.com/", "imageUrl": "./images/kitchen_sink.png", "description": "Project 2 Description      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt ultricies lacus, in consequat arcu gravida a. Nunc ut vestibulum tellus, ac aliquam erat. Duis et auctor mi, vitae sollicitudin urna. Praesent sit amet feugiat odio. Vivamus nibh leo, condimentum sit amet eros vel, rutrum fringilla lacus."},
          {"projectName": "Booster Draft Simulator 1", "projectUrl": "http://www.wizards.com/mtg/flash/draftsimulator/magicDrafter.html", "imageUrl": "./images/booster_draft.png", "description": "Project 3 Description      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt ultricies lacus, in consequat arcu gravida a. Nunc ut vestibulum tellus, ac aliquam erat. Duis et auctor mi, vitae sollicitudin urna. Praesent sit amet feugiat odio. Vivamus nibh leo, condimentum sit amet eros vel, rutrum fringilla lacus."},
      
          {"projectName": "Supply Connect 2", "projectUrl": "https://surplusconnection.herokuapp.com/#/home", "imageUrl": "./images/surplus_connection.png", "description": "Project 1 Description     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt ultricies lacus, in consequat arcu gravida a. Nunc ut vestibulum tellus, ac aliquam erat. Duis et auctor mi, vitae sollicitudin urna. Praesent sit amet feugiat odio. Vivamus nibh leo, condimentum sit amet eros vel, rutrum fringilla lacus."},
          {"projectName": "Kitchen Sink 2", "projectUrl": "http://kitchensinkapp.herokuapp.com/", "imageUrl": "./images/kitchen_sink.png", "description": "Project 2 Description      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt ultricies lacus, in consequat arcu gravida a. Nunc ut vestibulum tellus, ac aliquam erat. Duis et auctor mi, vitae sollicitudin urna. Praesent sit amet feugiat odio. Vivamus nibh leo, condimentum sit amet eros vel, rutrum fringilla lacus."},
          {"projectName": "Booster Draft Simulator 2", "projectUrl": "http://www.wizards.com/mtg/flash/draftsimulator/magicDrafter.html", "imageUrl": "./images/booster_draft.png", "description": "Project 3 Description      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt ultricies lacus, in consequat arcu gravida a. Nunc ut vestibulum tellus, ac aliquam erat. Duis et auctor mi, vitae sollicitudin urna. Praesent sit amet feugiat odio. Vivamus nibh leo, condimentum sit amet eros vel, rutrum fringilla lacus."},
      
          {"projectName": "Supply Connect 3", "projectUrl": "https://surplusconnection.herokuapp.com/#/home", "imageUrl": "./images/surplus_connection.png", "description": "Project 1 Description     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt ultricies lacus, in consequat arcu gravida a. Nunc ut vestibulum tellus, ac aliquam erat. Duis et auctor mi, vitae sollicitudin urna. Praesent sit amet feugiat odio. Vivamus nibh leo, condimentum sit amet eros vel, rutrum fringilla lacus."},
          {"projectName": "Kitchen Sink 3", "projectUrl": "http://kitchensinkapp.herokuapp.com/", "imageUrl": "./images/kitchen_sink.png", "description": "Project 2 Description      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt ultricies lacus, in consequat arcu gravida a. Nunc ut vestibulum tellus, ac aliquam erat. Duis et auctor mi, vitae sollicitudin urna. Praesent sit amet feugiat odio. Vivamus nibh leo, condimentum sit amet eros vel, rutrum fringilla lacus."},
          {"projectName": "Booster Draft Simulator 3", "projectUrl": "http://www.wizards.com/mtg/flash/draftsimulator/magicDrafter.html", "imageUrl": "./images/booster_draft.png", "description": "Project 3 Description      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt ultricies lacus, in consequat arcu gravida a. Nunc ut vestibulum tellus, ac aliquam erat. Duis et auctor mi, vitae sollicitudin urna. Praesent sit amet feugiat odio. Vivamus nibh leo, condimentum sit amet eros vel, rutrum fringilla lacus."}
        ];

    // add html to tag by class name - will effect all elements with the same class name
    cel.addContentByClass('box', '<a href="" class="test">What is happening</a>');
    cel.addEventByClass('test', EventConsts.CLICK_EVENT, eventCb);

    //Register FlexGrid component to manager 
    app.registerComponent("myFlexGrid", "view", FlexGridComp, data);
    
    //call update on components
    app.updateAllComponents();
    //app.updateComponentByName("myFlexGrid");
}

function eventCb(event)
{
    event.preventDefault();
    console.log("element clicked", event.currentTarget);
    cel.addContentToElement(event.currentTarget, '<a href="" class="test">This is happening</a');
    cel.addEventToElement(event.currentTarget, EventConsts.CLICK_EVENT, init);
}