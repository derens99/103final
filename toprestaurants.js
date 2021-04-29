var data = [
    {
        "name": "Boston Burger Co-Boylston",
        "image": "images/top_rests/bostonburgerco.jpg",
        "subtitle": "Boylston St | Boston",
        "desc": "With enormous customized shakes to fabulous burgers, Boston Burger Company seriously has some of the best burgers in Massachusetts"
    },
    {
        "name": "Tasty Burger",
        "subtitle": "Fenway | Boston",
        "image": "images/top_rests/tastyburger.jpg",
        "desc": "Quickly get the tastiest burgers in Boston at Tasty Burger! Locations in Fenway, Backbay, Harvard Square, Downtown, and more all over Boston!"
    },
    {
        "name": "Roxy's Grilled Cheese & Burgers",
        "subtitle": "Allston | Boston",
        "image": "images/top_rests/roxys.jpg",
        "desc": "With creative, cheesy sandwiches and burgers, order an enormous sandwich here! Located in allston and one of a kind."
    },
    {
        "name": "Wahlburgers",
        "subtitle": "Fenway | Boston",
        "image": "images/top_rests/wahl.jpg",
        "desc": "Owned by famous actor Mark Wahlburg, order burgers, shakes, fries and more here. Perfect spot to grab a quick bite or head out with friends."
    }
    ,
    {
        "name": "LoLa Burger Boston",
        "image": "images/top_rests/lola.jpg",
        "subtitle": "Seaport | Boston",
        "desc": "With fine dining, Lola Burger takes burger excursions to the next fancy level. The fancy environment leverages itself to produce finest quiality burgers, over quantity which we often see with burgers."
    }
    ,
    {
        "name": "UBURGER",
        "subtitle": "Kenmore Sq | Boston",
        "image": "images/top_rests/uburger.jpg",
        "desc": "Located right in kenmore square next to Myles Standish, this burger joint has the some of the best burgers and Oreo shakes around. Good prices and tasty pattys mark this restaurant different than others."
    }
    ,
    {
        "name": "Shake Shack",
        "subtitle": "Seaport | Boston",
        "image": "images/top_rests/shakeshack.png",
        "desc": "World famous shake shack has top notch everything. From the Shack burger with its signature shack sauce, cheesy fries, and shack shakes, everything here is delicious."
    }
    ,
    {
        "name": "Mr. Bartley's Burger Cottage",
        "subtitle": "Mass Ave | Cambridge",
        "image": "images/top_rests/bartley.jpg",
        "desc": "Located in Harvard square, students love dining here to buy burgers, salads, and dinners. NFL and patriots legend Julian Edelman even created his own signature burger here. Have to try."
    }
    ,
    {
        "name": "The Gallows",
        "subtitle": "South End | Boston",
        "image": "images/top_rests/gallows.jpg",
        "desc": "With all types of American food, the Gallows offers all types of exclusive dinners, on top of Bostons finest Burgers. Come in for either a snack, quick bite to eat, or dine in for a full meal and drinks. The menu also changes weekly!"
    }

]


function addFeature(name, image_url, desc, subtitle){
    var feature = document.createElement("div");
    feature.className = "feature";
    
    imageClass = document.createElement("div");
    imageClass.className = "image rounded";
    image = document.createElement("IMG");
    image.setAttribute("src", image_url);
    imageClass.appendChild(image);
    feature.appendChild(imageClass);
    hi = document.getElementById("grid");

    subtitle_element = document.createElement("p");
    subtitle_element.textContent = subtitle;

    content = document.createElement("div");
    content.className = "content";
    header = document.createElement("header");

    h4 = document.createElement("h4");
    h4.textContent = name;
    paragraph = document.createElement("p");
    paragraph.textContent = desc;

    header.appendChild(h4);
    header.appendChild(subtitle_element);
    content.appendChild(header);
    content.appendChild(paragraph);
    feature.appendChild(content);
    grid.appendChild(feature);
}

function populateGrid(){
    for(var i = 0; i < data.length; i++){
        var current = data[i];
        addFeature(current.name, current.image, current.desc, current.subtitle);
    }
}

populateGrid();
