// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".create-form").on("submit", function(event) {
        event.preventDefault();
  
      var newBurger = {
        name: $("#burgerEntry").val().trim()
      };
      console.log(newBurger);
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("New Burger Added");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".eat-burger").on("click", function(event) {
      var id = $(this).data("id");
      var confirmEat = $(this).data("newEaten") ===false;

      
  
      var confirmEatState = {
        devour: confirmEat
      };
      console.log(`id: ${id} 
      Eaten: ${confirmEatState.devour}`);

      $.ajax(`/api/burgers/${id}`, {
        type: "PUT",
        data: confirmEatState
      }).then(
        function() {
          console.log(`changed eaten state to: ${confirmEat}`);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
})
  
//     // $(".delete-cat").on("click", function(event) {
//     //   var id = $(this).data("id");
  
//     //   // Send the DELETE request.
//     //   $.ajax("/api/cats/" + id, {
//     //     type: "DELETE"
//     //   }).then(
//     //     function() {
//     //       console.log("deleted cat", id);
//     //       // Reload the page to get the updated list
//     //       location.reload();
//     //     }
//     //   );
//     // });
//   })