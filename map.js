let map;
let service;
let infowindow;
let markers = [];

function loadMap(){
    var location = {lat: 42.361145, lng: -71.057083};
    infowindow = new google.maps.InfoWindow();
    
    /* TESTING VARIABLES */
    //location = {lat: 41.573360, lng: -70.460670};

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: location,
        disableDefaultUI: true
    });

    const request = {
        radius: 16093,
        location: location,
        keyword: "Burger"
    };
    console.log("loading");

    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, (results, status) => {
        if (status == google.maps.places.PlacesServiceStatus.OK && results){
            for(let i = 0; i < results.length; i++){
                createMarker(results[i]);
            }
        }
    });
}

function createMarker(place) {
    if (!place.geometry || !place.geometry.location) return;
    const marker = new google.maps.Marker({
      map,
      position: place.geometry.location,
      title: place.name,
        icon: "images/hamburger.png"
    });
    markers.push(marker);

    const request = {
        placeId: place.place_id
    };

    service.getDetails(request, (placeObject, status) => {
        let placeContent;
        if(status === google.maps.places.PlacesServiceStatus.OK &&
            placeObject){
            placeContent = 
            '<div id="content">' +
            '<div id="siteNotice">' +
            "</div>" +
            '<h1 id="firstHeading" class="firstHeading">' + placeObject.name + '</h1>' +
            '<div id="bodyContent">' +
            
            "<p><a href='" + placeObject.url +"'>" + placeObject.formatted_address +"</a>" + "</p>"+
            "<p>" + "<b>Address: </b>" + placeObject.adr_address + "</p>" +
            "<p>Rating (out of 5): " + placeObject.rating + "</p>"+
            "<p>Total Ratings: " + placeObject.user_ratings_total + "</p>"+
            "</div>" +
            "</div>";
        }else{
            placeContent = 
            '<div id="content">' +
            '<div id="siteNotice">' +
            "</div>" +
            '<h1 id="firstHeading" class="firstHeading">' + place.name + '</h1>' +
            '<div id="bodyContent">' +
            "<p>" + place.name +"</p>" +
            "<p>Rating (out of 5): " + place.rating +"</p>" +
            "<p>Total Ratings: " + place.user_ratings_total +"</p>" +
            
            "</div>" +
            "</div>";
        }
        

    const infowindow = new google.maps.InfoWindow({
        content: placeContent,
        title: place.name,
        // maxWidth: 200
    });
    marker.addListener("click", () => {
        infowindow.open(map, marker);
        console.log(place.name);
    });
    });
  }