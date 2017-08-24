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
    .then(function(persons) {
        //Step 1: Loop through "persons" data
        //Step 2: Dynamically create HTML (table row) with data
        //Step 3: Append new HTML to DOM

        var $tbody = $("tbody");

        persons.forEach(function(person) {
            var newHtml = `
                <tr>
                    <td>
                        ${person.firstname}
                    </td>
                    <td>
                        ${person.lastname}
                    </td>
                    <td>
                        ${person.username}
                    </td>
                    <td>
                        ${person.email}
                    </td>
                    <td>
                        <a href="#" class="btn btn-primary">Edit</a>
                    </td>
                </tr>
            `;

            $tbody.append(newHtml);
        });
    })
    .catch(function(err) {
        console.log(err);
    });

});
