function handleFormSubmit(event) {
    event.preventDefault();
    
    const dt = $("#datepicker").val();
    const creatureType = $("#creatureType :radio:checked").attr('id');
    const weight = $("#slider").slider("option", "value");
    const height = $("#slider2").slider("option", "value");
    const numberEyes = $("#spinnereyes").spinner("option", "value"); 
    const numberArms = $("#spinnerarms").spinner("option", "value"); 
    const numberLegs = $("#spinnerlegs").spinner("option", "value"); 
    const json = "{sitingDate:" + dt + "," + "creatureType:" + creatureType + "," + "weight:" + weight + "," + "height:" + height +  "," + "numberOfEyes:" + numberEyes + "," +  "numberOfArms:" + numberArms  + "," +  "numberOfLegs :" + numberLegs + "," +
    "color:" + 	$( "#swatch" ).css("background-color") + "}";
    const heading = "<h4>Alien Sighting Report Data<h4>"
    results.innerHTML = heading + json;
}

$( function() {
  $("#spinnereyes").spinner({min: 0, max:100, value: 3});
  $( "#spinnerarms" ).spinner({min: 0, max:117, value: 7});
  $( "#spinnerlegs" ).spinner({min: 0, max:21, value: 17});
});