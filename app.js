$(document).ready(function() {

    // RESTful convention
    // Stands for Representational State Transfer

    // GET -> Read
    // POST -> Create
    // PUT -> Update
    // DELETE -> Destroy

    $.ajax({
        type: "GET",
        url: "http://myapi-profstream.herokuapp.com/api/99e553/persons"
    })
    .then(function(data) {
        //Step 1: Loop through "persons" data
        //Step 2: Dynamically create HTML (table row) with data
        //Step 3: Append new HTML to DOM
    })
    .catch(function(err) {
        console.log(err);
    });

});
