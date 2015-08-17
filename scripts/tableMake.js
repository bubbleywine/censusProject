var listOfNumbers = [72000, 60000, 85000, 90000, 95000];
var data = {
  "Population": [{
    "county": "Douglas County",
    "Population Census, April 1, 2010": "285465",
    "Veterans 2009-2013": "19635",
    "High school graduate or higher 2009-2013": "97.5",
    "Total employment 2013": "91934"
  }, {
    "county": "Elbert County",
    "Population Census, April 1, 2010": "23086",
    "Veterans 2009-2013": "2328",
    "High school graduate or higher 2009-2013": "96.6",
    "Total employment 2013": "2271"
  }, {
    "county": "Arapahoe County",
    "Population Census, April 1, 2010": "572003",
    "Veterans 2009-2013": "42954",
    "High school graduate or higher 2009-2013": "91.4",
    "Total employment 2013": "259423"
  }, {
    "county": "Denver County",
    "Population Census, April 1, 2010": "600158",
    "Veterans 2009-2013": "34001",
    "High school graduate or higher 2009-2013": "85.4",
    "Total employment 2013": "399744"
  }, {
    "county": "Adams County",
    "Population Census, April 1, 2010": "441603",
    "Veterans 2009-2013": "27662",
    "High school graduate or higher 2009-2013": "81.4",
    "Total employment 2013": "137849"
  }]
};

var array = data.Population;

function doSomething(data1) {
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
}

function sortAlpha(a, b) {
  var aLower = a[0].toLowerCase();
  var bLower = b[0].toLowerCase();
  if (aLower > bLower) {
    return 1;
  }
  if (aLower < bLower) {
    return -1;
  }

}

function sortAlphaReverse(a, b) {
  var aLower = a[0].toLowerCase();
  var bLower = b[0].toLowerCase();
  if (aLower < bLower) {
    return 1;
  }
  if (aLower > bLower) {
    return -1;
  }

}

function sortAsc(a, b) {
  var aNum =parseInt(a[0]);
  var bNum =parseInt(b[0]);

  if (aNum < bNum) {
    return true;

  } else {
    return false;
  }
}


function sortDsc(a, b) {
  if (a[0] > b[0]) {
    return true;

  } else {
    return false;
  }
}
