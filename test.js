var data = [
    {
        "name": "Boston Burger Co-Boylston",
        "image": "images/top_rests/bostonburgerco.jpg",
        "desc": "With enormous customized shakes to fabulous burgers, Boston Burger Company seriously has some of the best burgers in Massachusetts"
    },
    {
        "name": "Tasty Burger",
        "image": "images/top_rests/tastyburger.jpg",
        "desc": "Quickly get the tastiest burgers in Boston at Tasty Burger! Locations in Fenway, Backbay, Harvard Square, Downtown, and more all over Boston!"
    },
    {
        "name": "Roxy's Grilled Cheese & Burgers",
        "image": "images/top_rests/roxys.jpg",
        "desc": "With creative, cheesy sandwiches and burgers, order an enormous sandwich here! Located in allston and one of a kind."
    },
    {
        "name": "Wahlburgers",
        "image": "images/top_rests/wahl.jpg",
        "desc": "Owned by famous actor Mark Wahlburg, order burgers, shakes, fries and more here. Perfect spot to grab a quick bite or head out with friends."
    }
    ,
    {
        "name": "LoLa Burger Boston",
        "image": "images/top_rests/lola.jpg",
        "desc": "With enormous customized shakes to fabulous burgers, Boston Burger Company seriously has some of the best burgers in Massachusetts"
    }
    ,
    {
        "name": "UBURGER",
        "image": "images/top_rests/uburger.jpg",
        "desc": "With enormous customized shakes to fabulous burgers, Boston Burger Company seriously has some of the best burgers in Massachusetts"
    }
    ,
    {
        "name": "Shake Shack",
        "image": "images/top_rests/shakeshack.png",
        "desc": "With enormous customized shakes to fabulous burgers, Boston Burger Company seriously has some of the best burgers in Massachusetts"
    }
    ,
    {
        "name": "Mr. Bartley's Burger Cottage",
        "image": "images/top_rests/bartley.jpg",
        "desc": "With enormous customized shakes to fabulous burgers, Boston Burger Company seriously has some of the best burgers in Massachusetts"
    }
    ,
    {
        "name": "The Gallows",
        "image": "images/top_rests/gallows.jpg",
        "desc": "With enormous customized shakes to fabulous burgers, Boston Burger Company seriously has some of the best burgers in Massachusetts"
    }

]


function addFeature(name, image_url, desc){
    var feature = document.createElement("div");
    feature.className = "feature";
    
    imageClass = document.createElement("div");
    imageClass.className = "image rounded";
    image = document.createElement("IMG");
    image.setAttribute("src", image_url);
    imageClass.appendChild(image);
    feature.appendChild(imageClass);
    hi = document.getElementById("grid");

    content = document.createElement("div");
    content.className = "content";
    header = document.createElement("header");

    h4 = document.createElement("h4");
    h4.textContent = name;
    paragraph = document.createElement("p");
    paragraph.textContent = desc;

    header.appendChild(h4);
    content.appendChild(header);
    content.appendChild(paragraph);
    feature.appendChild(content);
    grid.appendChild(feature);
}

function populateGrid(){
    for(var i = 0; i < data.length; i++){
        var current = data[i];
        addFeature(current.name, current.image, current.desc);
    }
}

populateGrid();
