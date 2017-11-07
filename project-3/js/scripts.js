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
    $('#example2').DataTable({
      "ajax": 'per-school.txt'
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
            ['Graduation Rate', 86.5, 89.1, 88.9, 91.6],
            ['Met UNC Minimum Composite Score', 58.8, 64, 65.9, 63.3]
        ],
        type: 'bar',
        colors: {
            'Graduation Rate': '#b6cdd6',
            'Met UNC Minimum Composite Score': '#126384'
        },
    },
    bar: {
         width: {
             ratio: 0.5 // this makes bar width 50% of length between ticks
         }
        // or
        //width: 100 // this makes bar width 100px
    },
    axis: {
        x: {
            type: 'categorized',
            categories: ['NC', 'Orange County', 'Cedar Ridge HS', 'Orange HS']
        },
        y: {
            label: 'Percent',
        }

    }

});

  var pieChart = c3.generate({
      bindto: '#pie-chart',
      data: {
          // iris data from R
          columns: [
              ['NC Females - Met Minimum', 62.2],
              ['NC Females - Did Not Meet Minimum', 37.8]
          ],
          type : 'pie',
          colors: {
              'NC Females - Met Minimum': '#577d64',
              'NC Females - Did Not Meet Minimum': '#73a785'
          },
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
              ['OC Females - Met Minimum', 68.4],
              ['OC Females - Did Not Meet Minimum', 31.6]
          ],
          type : 'pie',
          colors: {
              'OC Females - Met Minimum': '#577d64',
              'OC Females - Did Not Meet Minimum': '#73a785'
          },
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
              ['NC Males - Met Minimum', 55.4],
              ['NC Males - Did Not Meet Minimum', 44.6]
          ],
          type : 'pie',
          colors: {
              'NC Males - Met Minimum': '#577d64',
              'NC Males - Did Not Meet Minimum': '#73a785'
          },
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
              ['OC Males - Met Minimum', 59.7],
              ['OC Males - Did Not Meet Minimum', 40.3]
          ],
          type : 'pie',
          colors: {
              'OC Males - Met Minimum': '#577d64',
              'OC Males - Did Not Meet Minimum': '#73a785'
          },
          onclick: function (d, i) { console.log("onclick", d, i); },
          onmouseover: function (d, i) { console.log("onmouseover", d, i); },
          onmouseout: function (d, i) { console.log("onmouseout", d, i); }
      }
  });

  var chart2 = c3.generate({
    bindto: '#chart-2',
    data: {
        columns: [
            ['Reading', 31.8, 44.8, 47.7, 43.2],
            ['Writing', 29.2, 33.3, 40.7, 27.2],
            ['Math', 28.5, 34.9, 38.4, 32.5],
            ['English', 42.8, 53.4, 58.1, 50],
            ['Science', 21.9, 31, 31.8, 30.6]
        ],
        type: 'bar',
        colors: {
            'Reading': '#e82f26',
            'Writing': '#7ca8b9',
            'Math': '#64493a',
            'English': '#de8362',
            'Science': '#73a785'
        },
    },
    bar: {
         width: {
             ratio: 0.6 // this makes bar width 50% of length between ticks
         }
        // or
        //width: 100 // this makes bar width 100px
    },
    axis: {
        x: {
            type: 'categorized',
            categories: ['NC', 'Orange County', 'Cedar Ridge HS', 'Orange HS']
        },
        y: {
            label: 'Percent Meeting UNC Requirements',
        }
    }
    });

}
