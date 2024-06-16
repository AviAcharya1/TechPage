function initMap() {
    const conferenceLocation = { lat: 37.7749, lng: -122.4194 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: conferenceLocation,
    });
    const marker = new google.maps.Marker({
        position: conferenceLocation,
        map: map,
    });
}

document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for registering, ' + document.getElementById('name').value + '!');
});
