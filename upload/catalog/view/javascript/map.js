function changeGoogleMap() {
    let MarkerArray = [
        {
            location: {lat: 44.426765, lng: 26.102537},
            content: "<h2>Bucuresti 1</h2>",
            id: 123
        },
        {
            location: {lat: 44.427, lng: 26.15},
            content: "<h2>Bucuresti 2</h2>",
            id: 456
        }
    ];

    initMap(
        {lat: 44.426765, lng: 26.102537},
        MarkerArray
    )
}

function initMap(center, markers) {

    var options = {
        center: center,
        zoom: 13
    }

    map = new google.maps.Map(document.getElementById('map'), options)

    for (let i = 0; i < markers.length; i++) {
        addGoogleMarker(markers[i])
    }
}

function addGoogleMarker(property) {
    const marker = new google.maps.Marker({
        position: property.location,
        map: map
    });

    const detailWindow = new google.maps.InfoWindow({
        content: property.content
    });

    marker.addListener("click", () => {
        detailWindow.open(map, marker)
        document.getElementById('result').value = property.id
    })
}