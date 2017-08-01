
    $("button").on("click", function() {

      var gipher = $(this).attr("data-gif");

      var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        gipher + "&api_key=4c9b1a57466941959c515cca4c8dd676&limit=10";

        // function keyup(e) {
        // 	inputTextValue = e.target.value;
        // 	$("#mydiv").text(inputTextValue);

        $("#add-button").click(function() {
			 $('#mydiv').append('<button data-role="button" data-inline="true" data-mini="true" data-theme="b")> button </button>').trigger('create');

			 var userButton = $("user-data").val().trim();
			 console.log(userButton);

			 }); 
    	// }
      $.ajax({
        url: queryURL,
        method: "GET"
      }).done(function(response) {
         
        console.log(response);
 
          var results = response.data;
        
			

          for (var i = 0; i < results.length; i++) {

	         var gifDiv  = $("<div>");
	         var rating = results[i].rating
	         var p = $("<p>").text("Rating: " + rating);
	         var gifImage = $("<img>");

	         gifImage.attr("src", results[i].images.fixed_height.url);
	         gifDiv.append(p);
	         gifDiv.append(gifImage);
	         $("#gifs-appear-here").prepend(gifDiv);
        }

      });
    });
