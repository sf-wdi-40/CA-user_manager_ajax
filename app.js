$(document).ready(function() {

    // RESTful convention
    // Stands for Representational State Transfer

    // GET -> Read
    // POST -> Create
    // PUT -> Update
    // DELETE -> Destroy

    function userEntryTemplate(person) {
        return `
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
    }

    $.ajax({
        type: "GET",
        url: "http://myapi-profstream.herokuapp.com/api/99e553/persons"
    })
    .then(function(persons) {
        //Step 1: Loop through "persons" data
        //Step 2: Dynamically create HTML (table row) with data
        //Step 3: Append new HTML to DOM

        var $tbody = $("tbody");

        // persons.forEach(function(person) {
        //     var newHtml = userEntryTemplate(person);
        //
        //     $tbody.append(newHtml);
        // });

        for (var i = 0; i < persons.length; i++) {
            var newHtml = userEntryTemplate(persons[i]);

            $tbody.append(newHtml);
        }
    })
    .catch(function(err) {
        console.log(err);
    });

    $("#new-person-form").on("submit", function(event) {
        event.preventDefault();

        //Step 1: Capture information from form into a new object
        //Step 2: Perform a POST AJAX request to the same endpoint as the GET
        //Step 3: Create new HTML dynamically from information entered on the form and append to tbody
        //Step 4: Hide modal and clear form
            // $("#add-user-modal").modal("hide");
            // $("#new-person-form")[0].reset();

        // $.ajax({
        //     type: "POST",
        //     url: "your endpoint",
        //     data: object of data from form
        // });

        var newPerson = {
            firstname: $("input[name='firstname']").val(),
            lastname: $("input[name='lastname']").val(),
            username: $("input[name='username']").val(),
            email: $("input[name='email']").val()
        };

        $.ajax({
            type: "POST",
            url: "http://myapi-profstream.herokuapp.com/api/99e553/persons",
            data: newPerson
        })
        .then(function(person) {
            var newHtml = userEntryTemplate(person);

            //Append newly-created HTML to the DOM
            $("tbody").append(newHtml);

            //Hide the modal
            $("#add-user-modal").modal("hide");
            //Reset the form
            $("#new-person-form")[0].reset();
        })
        .catch(function(err) {
            console.log(err);
        });
    });

});
