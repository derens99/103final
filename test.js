var data = [
    /*{
        "name": "Boston Burger Co-Boylston",
        "image": "images/craigie.jpg",
        "desc": "With enormous customized shakes to fabulous burgers, Boston Burger Company seriously has some of the best burgers in Massachusetts"
    }, I'm assuming this a duplicate because of the test, but I'll leave it here just in case its going to be a different restaraunt than the first*/
    {
        "name": "Tasty Burger",
        "image": "images/craigie.jpg",
        "desc": "With enormous customized shakes to fabulous burgers, Boston Burger Company seriously has some of the best burgers in Massachusetts"
    }
    ,
    {
        "name": "Roxy's Grilled Cheese & Burgers",
        "image": "images/craigie.jpg",
        "desc": "With enormous customized shakes to fabulous burgers, Boston Burger Company seriously has some of the best burgers in Massachusetts"
    }
    ,
    {
        "name": "Wahlburgers",
        "image": "images/craigie.jpg",
        "desc": "With enormous customized shakes to fabulous burgers, Boston Burger Company seriously has some of the best burgers in Massachusetts"
    }
    ,
    {
        "name": "LoLa Burger Boston",
        "image": "images/craigie.jpg",
        "desc": "With enormous customized shakes to fabulous burgers, Boston Burger Company seriously has some of the best burgers in Massachusetts"
    }
    ,
    {
        "name": "UBURGER",
        "image": "images/craigie.jpg",
        "desc": "With enormous customized shakes to fabulous burgers, Boston Burger Company seriously has some of the best burgers in Massachusetts"
    }
    ,
    {
        "name": "Shake Shack",
        "image": "images/craigie.jpg",
        "desc": "With enormous customized shakes to fabulous burgers, Boston Burger Company seriously has some of the best burgers in Massachusetts"
    }
    ,
    {
        "name": "Mr. Bartley's Burger Cottage",
        "image": "images/craigie.jpg",
        "desc": "With enormous customized shakes to fabulous burgers, Boston Burger Company seriously has some of the best burgers in Massachusetts"
    }
    ,
    {
        "name": "The Gallows",
        "image": "images/craigie.jpg",
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
    header.appendChild(paragraph);
    content.appendChild(header);
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
