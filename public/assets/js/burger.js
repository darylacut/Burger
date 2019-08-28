// fully loads DOM before handlers are attached
$(function() {
    $(".eat").on("click", function(event) {
      var id = $(this).data("id");
      var newEat = $(this).data("neweat");
  
      var newEatState = {
        devoured: newEat
      };
  
      // Sends the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newEatState
      }).then(
        function() {
          console.log("changed eat to", newEat);
          // Reloads the page to get the updated list
          location.reload();
        }
      );
    });
  
    $("#newBurgBtn").on("click", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        name: $("#burg").val(),
        devoured: false
      };
  
      // Sends the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger" + newBurger);
          // Reloads the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);
          // Reloads the page to get the updated list
          location.reload();
        }
      );
    });

  });