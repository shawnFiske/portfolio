//Entry Point
import WebApp from "./app/AppViewPort.js";
import Grid from "./app/components/FlexGrid/FlexGrid.js";
import CreateEl from "./app/utils/HtmlElementUtils.js";
import EventConsts from "./app/utils/EventConstants.js";

let app = new WebApp();
let cel = new CreateEl();


document.body.onload = init;

function init(e) {
    const dogs = [
        { name: 'Snickers', age: 2 },
        { name: 'Hugo', age: 8 },
        { name: 'Sunny', age: 1 },
        { name: 'Bunny', age: 4 },
        { name: 'Runny', age: 3 },
        { name: 'Munny', age: 6 }
    ];

    const data = [
          {"projectName": "Supply Connect", "projectUrl": "https://surplusconnection.herokuapp.com/#/home", "imageUrl": "./images/surplus_connection.png", "description": "Project 1 Description     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt ultricies lacus, in consequat arcu gravida a. Nunc ut vestibulum tellus, ac aliquam erat. Duis et auctor mi, vitae sollicitudin urna. Praesent sit amet feugiat odio. Vivamus nibh leo, condimentum sit amet eros vel, rutrum fringilla lacus."},
          {"projectName": "Kitchen Sink", "projectUrl": "http://kitchensinkapp.herokuapp.com/", "imageUrl": "./images/kitchen_sink.png", "description": "Project 2 Description      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt ultricies lacus, in consequat arcu gravida a. Nunc ut vestibulum tellus, ac aliquam erat. Duis et auctor mi, vitae sollicitudin urna. Praesent sit amet feugiat odio. Vivamus nibh leo, condimentum sit amet eros vel, rutrum fringilla lacus."},
          {"projectName": "Booster Draft Simulator", "projectUrl": "http://www.wizards.com/mtg/flash/draftsimulator/magicDrafter.html", "imageUrl": "./images/booster_draft.png", "description": "Project 3 Description      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt ultricies lacus, in consequat arcu gravida a. Nunc ut vestibulum tellus, ac aliquam erat. Duis et auctor mi, vitae sollicitudin urna. Praesent sit amet feugiat odio. Vivamus nibh leo, condimentum sit amet eros vel, rutrum fringilla lacus."},
      
          {"projectName": "Supply Connect", "projectUrl": "https://surplusconnection.herokuapp.com/#/home", "imageUrl": "./images/surplus_connection.png", "description": "Project 1 Description     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt ultricies lacus, in consequat arcu gravida a. Nunc ut vestibulum tellus, ac aliquam erat. Duis et auctor mi, vitae sollicitudin urna. Praesent sit amet feugiat odio. Vivamus nibh leo, condimentum sit amet eros vel, rutrum fringilla lacus."},
          {"projectName": "Kitchen Sink", "projectUrl": "http://kitchensinkapp.herokuapp.com/", "imageUrl": "./images/kitchen_sink.png", "description": "Project 2 Description      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt ultricies lacus, in consequat arcu gravida a. Nunc ut vestibulum tellus, ac aliquam erat. Duis et auctor mi, vitae sollicitudin urna. Praesent sit amet feugiat odio. Vivamus nibh leo, condimentum sit amet eros vel, rutrum fringilla lacus."},
          {"projectName": "Booster Draft Simulator", "projectUrl": "http://www.wizards.com/mtg/flash/draftsimulator/magicDrafter.html", "imageUrl": "./images/booster_draft.png", "description": "Project 3 Description      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt ultricies lacus, in consequat arcu gravida a. Nunc ut vestibulum tellus, ac aliquam erat. Duis et auctor mi, vitae sollicitudin urna. Praesent sit amet feugiat odio. Vivamus nibh leo, condimentum sit amet eros vel, rutrum fringilla lacus."},
      
          {"projectName": "Supply Connect", "projectUrl": "https://surplusconnection.herokuapp.com/#/home", "imageUrl": "./images/surplus_connection.png", "description": "Project 1 Description     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt ultricies lacus, in consequat arcu gravida a. Nunc ut vestibulum tellus, ac aliquam erat. Duis et auctor mi, vitae sollicitudin urna. Praesent sit amet feugiat odio. Vivamus nibh leo, condimentum sit amet eros vel, rutrum fringilla lacus."},
          {"projectName": "Kitchen Sink", "projectUrl": "http://kitchensinkapp.herokuapp.com/", "imageUrl": "./images/kitchen_sink.png", "description": "Project 2 Description      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt ultricies lacus, in consequat arcu gravida a. Nunc ut vestibulum tellus, ac aliquam erat. Duis et auctor mi, vitae sollicitudin urna. Praesent sit amet feugiat odio. Vivamus nibh leo, condimentum sit amet eros vel, rutrum fringilla lacus."},
          {"projectName": "Booster Draft Simulator", "projectUrl": "http://www.wizards.com/mtg/flash/draftsimulator/magicDrafter.html", "imageUrl": "./images/booster_draft.png", "description": "Project 3 Description      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tincidunt ultricies lacus, in consequat arcu gravida a. Nunc ut vestibulum tellus, ac aliquam erat. Duis et auctor mi, vitae sollicitudin urna. Praesent sit amet feugiat odio. Vivamus nibh leo, condimentum sit amet eros vel, rutrum fringilla lacus."}
        ];


    cel.addContentByClass('box', '<a href="" class="test">What is happening</a>');
    cel.addEventByClass('test', EventConsts.CLICK_EVENT, eventCb);
    
    console.log(cel.getById('comp'))

    //app.registerComponent(Grid, './data/projects.json');
    app.registerComponent("myFlexGrid", "view", Grid, data)
    app.updateAllComponents();
    //app.updateComponentByName("myFlexGrid");
    console.log('test1..');
}

function eventCb(event)
{
    event.preventDefault();
    console.log("element clicked", event.currentTarget);
    cel.addContentToElement(event.currentTarget, '<a href="" class="test">This is happening</a');
    cel.addEventToElement(event.currentTarget, EventConsts.CLICK_EVENT, init);
}