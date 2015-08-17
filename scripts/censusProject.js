$(document).ready(function() {



  $( "#Lorems" ).draggable({
  });

//generates sortable table
  $('#table tbody').empty();
  var str = "";
  // var array =data1['employees']
  for (var i = 0; i < array.length; i++) {
    str += "<tr>";
    for (var key in array[i]) {
      str += "<td>" + array[i][key] + "</td>";
    }
    str += "</tr>";

  }
  $("#table").append(str);
  $('#table').width(1000);

  var variable;


//ajax calls for pie chart and bar graph table
  $.ajax({
    type: "GET",
    url: "languagePercent.json",
    dataType: "json",
    success: Adams,
  }).fail(function(data) {
    console.log("failed");

  });

  $.ajax({
    type: "GET",
    url: "language.json",
    dataType: "json",
    success: language,
  }).fail(function(data) {
    console.log("failed");

  });



  // $("#btnTestIt").click(function() {
  //   doSomething(data);
  // });

  //calls table sort .js
  $('#table').sortTable({
    colIndex: [0, 1, 2, 3,4],
    sortFunctions: [sortAlpha,sortAlpha,sortAsc,sortAsc,sortAsc],
    sortableClassName: 'MonkeyBurrito'
  });

  $('ul#tools').prepend('<li class="print"><a href="#print">Click me to print</a></li>');
  $('ul#tools li.print a').click(function() {
   window.print();
   return false;
 });



});

////////////PIE CHART DATA//////////////////////
var variable;

function Adams(returnedData, status) {
  variable = returnedData;
  var countyArry1 = new Array();

  $.each(variable.ColoradoCounties["Adams County"], function(obj, currentElement) {
    countyArry1.push([currentElement.language, parseInt(currentElement.value)]);
  });
  pieChart('chart1', countyArry1);
  Arapahoe();
}


function Arapahoe() {
  var countyArry2 = new Array();

  $.each(variable.ColoradoCounties["Arapahoe County"], function(obj, currentElement) {
    countyArry2.push([currentElement.language, parseInt(currentElement.value)]);
  });
  pieChart('chart2', countyArry2);
  Broomfield();
}

function Broomfield() {
  var countyArry3 = new Array();

  $.each(variable.ColoradoCounties["Broomfield County"], function(obj, currentElement) {
    countyArry3.push([currentElement.language, parseInt(currentElement.value)]);
  });
  pieChart('chart3', countyArry3);

  Denver();
}

function Denver() {
  var countyArry4 = new Array();

  $.each(variable.ColoradoCounties["Denver County"], function(obj, currentElement) {
    countyArry4.push([currentElement.language, parseInt(currentElement.value)]);
  });
  pieChart('chart4', countyArry4);
  Jefferson();
}

function Jefferson() {
  var countyArry5 = new Array();

  $.each(variable.ColoradoCounties["Jefferson County"], function(obj, currentElement) {
    countyArry5.push([currentElement.language, parseInt(currentElement.value)]);
  });
  pieChart('chart5', countyArry5);

  Elbert();
}

function Elbert() {
  var countyArry6 = new Array();

  $.each(variable.ColoradoCounties["Elbert County"], function(obj, currentElement) {
    countyArry6.push([currentElement.language, parseInt(currentElement.value)]);
  });
  pieChart('chart6', countyArry6);


}

/////////////////BAR GRAPH DATA ////////////////////////////
function language(returnedData, status) {
  var languageArray = new Array();
  $.each(returnedData.langugeAtHome, function(obj, currentElement) {
    languageArray.push([currentElement.language, parseInt(currentElement.amount)]);
  });

  console.log(languageArray);
  graph(languageArray);

  $("#acord").accordion({
    heightStyle: "content"
  });
}


/////////////////BAR GRAPH FUNCTION///////////////////
function graph(data) {

  var plot3 = $.jqplot('chart7', [data], {    
    title: 'English Speaking',
        series: [{
      renderer: $.jqplot.BarRenderer
    }],
        axesDefaults: {        
      tickRenderer: $.jqplot.CanvasAxisTickRenderer,
        tickOptions: {          
            angle: -30,
            fontSize: '10pt'        
          }    
    },
    axes: {
      xaxis: {
        renderer: $.jqplot.CategoryAxisRenderer,
      },
      yaxis: {
        renderer: $.jqplot.LogAxisRenderer
      }
    },
  });


}
////////////////////PIE CHART FUNCTION/////////////////
function pieChart(divID, data) {
  var options = {

    seriesDefaults: {
      renderer: jQuery.jqplot.PieRenderer,
      rendererOptions: {
        dataLabelThreshold: 0.5,
        showDataLabels: true,
        dataLabelPositionFactor: 1.2,
      }
    },
    legend: {
      show: true,
      location: 'ne',
      xoffset: 112
    }
  };



  $.jqplot(divID, [data], options);

}
