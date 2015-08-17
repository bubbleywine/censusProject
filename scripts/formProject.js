$(document).ready(function() {

  $("form[name=personalInfo]").parsley();


  $("#txtState").change(function() {
    // ajax here
    $.ajax({
      type: "GET",
      url: "usCities.json",
      dataType: "json",
      success: getCityNames,
    }).fail(function(data) {
      console.log("failed");

    });
  });

  $('input[name= "rentOwn"]:radio').change(function() {
    if ($(this).val() == "Own") {
      $("#mortgageDiv").css("display", "block");
      $("#monthRentDiv").css("display", "none");

    } else if ($(this).val() == "Rent") {
      $("#monthNoMortgage").css("display", "none");
      $("#monthMortgage").css("display", "none");
      $("#mortgageDiv").css("display", "none");
      $("#monthRentDiv").css("display", "block");
    }
  }).prop("checked", false);

  $('input[name= "mortgage"]:radio').change(function() {
    if ($(this).val() == "Yes") {
      $("#monthMortgage").css("display", "block");
      $("#monthNoMortgage").css("display", "none");

    } else if ($(this).val() == "No") {
      $("#monthMortgage").css("display", "none");
      $("#monthNoMortgage").css("display", "block");
    }


  }).prop("checked", false);


  $("input").focus(function() {
    $(this).css("background-color", "lightcyan");
  });

  $("input").blur(function() {
    $(this).css("background-color", "white");
  });

  $('#txtBirtDate').datepicker({
    changeMonth: true,
    changeYear: true,
    dateFormat: 'dd-mm-yy',
    defaultDate: new Date(2015, 00, 01)
  });


  $("#txtAge").spinner({
    min: 0

  });

  $("#over16Emp").spinner({
    min: 0

  });

  $("#travelTime").spinner({
    min: 0

  });

  $("#departTimeHour").spinner({});

  $("#bankVisit").spinner({
    min: 0
  });

  $("#acord").accordion({
    heightStyle: "content"
  });

  $("#departmentNames").bind("mousedown", function(e) {
    e.metaKey = true;
  }).selectable();

  $("#txtNumberOfPeople").spinner({
    min: 0,
    max: 70
  });

  $("#monthCostMortgage").slider({
    min: 0,
    max: 5000,
    values: [2500],
    slide: function(event, ui) {
      $("#amount").val("$" + ui.values[0]);
    }
  });
  $("#amount").val("$" + $("#monthCostMortgage").slider("values", 0));



  $("#monthCostNoMortgage").slider({
    min: 0,
    max: 5000,
    values: [2500],
    slide: function(event, ui) {
      $("#amount2").val("$" + ui.values[0]);
    }
  });
  $("#amount2").val("$" + $("#monthCostNoMortgage").slider("values", 0));



  $("#monthCostRent").slider({
    min: 0,
    max: 5000,
    values: [2500],
    slide: function(event, ui) {
      $("#amount3").val("$" + ui.values[0]);
    }
  });
  $("#amount3").val("$" + $("#monthCostRent").slider("values", 0));


  $("#button").button();
  


  $('select>option:eq(0)').prop('selected', true);



  $.ajax({
    type: "GET",
    url: "usCities.json",
    dataType: "json",
    success: getStateNames,
  }).fail(function(data) {
    console.log("failed");


  });


});
