var data;
var school = [];
var gradRate = [];
var metUNCMin = [];
var metMinFemale = [];
var metMinMale = [];


$(document).ready(function(){
    $('#example').DataTable({
      "ajax": 'overall-data.txt'
    });
    loadData();
    loadData1();

});

function loadData(){

  $.ajax({
        type:"GET",
        url:"per-school.json",
        dataType:"json",
        success: createCharts
  });
}

// function parseData(data){
//   console.log(data);
//   for (var i = 0, len = data.length; i < len; ++i){
//     school.push(data[i]["School"]);
//     gradRate.push(data[i]["Grad Rate"]);
//     metUNCMin.push(data[i]["Met UNC Min"]);
//   }
//   createCharts();
// }
function loadData1(){
  $.ajax({
    type:"GET",
    url:"overall-female-male.json",
    dataType: "json",
    success: parseData
  });

}

function parseData(data){
  console.log(data);
  for (var i = 0, len = data.length; i < len; ++i) {
         //sets data to arrays for charts
         metMinFemale.push(data[i]["Percentage of: Female OC"]);
         metMinMale.push(data[i]["Percentage of: Male"]);
  }
  createCharts();
}

function createCharts(){

  var chart = c3.generate({
    bindto: '#chart',
    data: {
        columns: [
            ['Grad Rate', 86.5, 89.1, 88.9, 91.6],
            ['Met UNC Minimum', 58.8, 64, 65.9, 63.3]
        ],
        type: 'bar'
    },
    bar: {
         width: {
             ratio: 0.5 // this makes bar width 50% of length between ticks
         }
        // or
        //width: 100 // this makes bar width 100px
    }

});

  var pieChart = c3.generate({
      bindto: '#pie-chart',
      data: {
          // iris data from R
          columns: [
              ['Females in NC', 62.2],
              ['Did Not', 37.8]
          ],
          type : 'pie',
          onclick: function (d, i) { console.log("onclick", d, i); },
          onmouseover: function (d, i) { console.log("onmouseover", d, i); },
          onmouseout: function (d, i) { console.log("onmouseout", d, i); }
      }
  });

  var pieChart2 = c3.generate({
      bindto: '#pie-chart-2',
      data: {
          // iris data from R
          columns: [
              ['Females in Orange County', 68.4],
              ['Did Not', 31.6]
          ],
          type : 'pie',
          onclick: function (d, i) { console.log("onclick", d, i); },
          onmouseover: function (d, i) { console.log("onmouseover", d, i); },
          onmouseout: function (d, i) { console.log("onmouseout", d, i); }
      }
  });

  var pieChart3 = c3.generate({
      bindto: '#pie-chart-3',
      data: {
          // iris data from R
          columns: [
              ['Males in NC', 55.4],
              ['Did Not', 44.6]
          ],
          type : 'pie',
          onclick: function (d, i) { console.log("onclick", d, i); },
          onmouseover: function (d, i) { console.log("onmouseover", d, i); },
          onmouseout: function (d, i) { console.log("onmouseout", d, i); }
      }
  });

  var pieChart4 = c3.generate({
      bindto: '#pie-chart-4',
      data: {
          // iris data from R
          columns: [
              ['Males in Orange County', 59.7],
              ['Did Not', 40.3]
          ],
          type : 'pie',
          onclick: function (d, i) { console.log("onclick", d, i); },
          onmouseover: function (d, i) { console.log("onmouseover", d, i); },
          onmouseout: function (d, i) { console.log("onmouseout", d, i); }
      }
  });

  var chart2 = c3.generate({
    bindto: '#chart-2',
    data: {
        columns: [
            ['Reading', 31.8, 44.8, 43.2, 47.7],
            ['Writing', 29.2, 33.3, 27.2, 40.7],
            ['Math', 28.5, 34.9, 32.5, 38.4],
            ['English', 42.8, 53.4, 50, 58.1],
            ['Science', 21.9, 31, 30.6, 31.8]
        ],
        type: 'bar'
    },
    bar: {
         width: {
             ratio: 0.5 // this makes bar width 50% of length between ticks
         }
        // or
        //width: 100 // this makes bar width 100px
    }
    });

}
