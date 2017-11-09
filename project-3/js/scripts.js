var data;
var school = [];
var gradRate = [];
var metUNCMin = [];
var metMinFemaleOC = [];
var metMinFemaleNC = [];
var notMeetFemaleOC = [];
var notMeetFemaleNC = [];
var metMinMaleOC = [];
var metMinMaleNC = [];
var notMeetMaleOC = [];
var notMeetMaleNC = [];
var english = [];
var reading = [];
var writing = [];
var science = [];
var math = [];


$(document).ready(function(){
    $('#example').DataTable({
      "ajax": 'overall-data.txt'
    });
    // $('#example2').DataTable({
    //   "ajax": 'per-school.txt'
    // });
    loadData();
    loadData2();
    //loadData1();


});

function loadData(){

  $.ajax({
        type:"GET",
        url:"per-school.json",
        dataType:"json",
        success: parseData
  });
}

function loadData2(){
  $.ajax({
    type: "GET",
    url:"met-min.json",
    dataType: "json",
    success: parseData2
  });
}

function parseData(data){
  console.log(data);
  for (var i = 0, len = data.length; i < len; ++i){
    gradRate.push(data[i]["Grad Rate"]);
    metUNCMin.push(data[i]["Met UNC Min"]);
    english.push(data[i]["Met Benchmark English"]);
    reading.push(data[i]["Met Benchmark Reading"]);
    writing.push(data[i]["Met Benchmark Writing"]);
    science.push(data[i]["Met Benchmark Science"]);
    math.push(data[i]["Met Benchmark Math"]);
  }
  createCharts();
}

function parseData2(data){
  console.log(data);
  for (var i = 0, len = data.length; i < len; ++i){
    metMinFemaleOC.push(data[i]["Percentage of: Female OC"]);
    notMeetFemaleOC.push(data[i]["Percentage of: Female Did Not OC"]);
    metMinFemaleNC.push(data[i]["Percentage of: Female NC"]);
    notMeetFemaleNC.push(data[i]["Percentage of: Female Did Not NC"]);
    metMinMaleOC.push(data[i]["Percentage of: Male OC"]);
    notMeetMaleOC.push(data[i]["Percentage of: Male Did Not OC"]);
    metMinMaleNC.push(data[i]["Percentage of: Male OC"]);
    notMeetMaleNC.push(data[i]["Percentage of: Male Did Not OC"]);
  }
  createCharts2();
}




// function loadData1(){
//   $.ajax({
//     type:"GET",
//     url:"overall-female-male.json",
//     dataType: "json",
//     success: parseData
//   });
//
// }

// function parseData1(data){
//   console.log(data);
//   for (var i = 0, len = data.length; i < len; ++i) {
//          //sets data to arrays for charts
//          metMinFemale.push(data[i]["Percentage of: Female OC"]);
//          metMinMale.push(data[i]["Percentage of: Male"]);
//   }
//   createCharts();
// }

function createCharts(){

  var chart = c3.generate({
    bindto: '#chart',
    data: {
        json: {
            'Graduation Rate': gradRate,
            'Met UNC Minimum': metUNCMin
        },
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

var chart2 = c3.generate({
  bindto: '#chart-2',
  data: {
      json: {
          'English': english,
          'Reading': reading,
          'Writing': writing,
          'Science': science,
          'Math': math,
      },
      type: 'bar',
      colors: {
          'English': '#e82f26',
          'Reading': '#7ca8b9',
          'Writing': '#64493a',
          'Science': '#de8362',
          'Math': '#73a785',
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

function createCharts2(){

  var pieChart = c3.generate({
      bindto: '#pie-chart',
      data: {
          // iris data from R
          columns: [
              ['NC Females - Met Minimum', 62.2],
              ['NC Females - Did Not Meet Minimum', 37.8],
          ],
          type : 'pie',
          colors: {
              'NC Females - Met Minimum': '#577d64',
              'NC Females - Did Not Meet Minimum': '#73a785',
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

}
