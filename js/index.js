
let i = "a";

let jobname = document.getElementById("jobname");
let salary = document.getElementById("salary");
let vacancey = document.getElementById("vacancey");
let skills = document.getElementById("skills");
let jobDesc = document.getElementById("jobDesc");
let jobImg = document.getElementById("jobImg");
const width_threshold = 480;
var element1 = document. getElementById('1');
var element2 = document. getElementById('2');
var element3 = document. getElementById('3');
var element4 = document. getElementById('4');
var element5 = document. getElementById('5');
var element6 = document. getElementById('6');
var element7 = document. getElementById('7');
var home = document.getElementById("remove");
var home2 = document.getElementById("remove2");
var maine = document.getElementById("mainContent");

console.log(home);

let mydata;
loadDoc1();



function fun1(){
  i="a";
  a=mydata.a;
  home.style.display="block";
  home2.style.display="none";
  element1.classList. add('active');
  element2.classList. remove('active');
  element3.classList. remove('active');
  element4.classList. remove('active');
  element5.classList. remove('active');
  element6.classList. remove('active');
  element7.classList. remove('active');
  caller();
}
function fun2(){
  i="b";
  a=mydata.b;
  home.style.display="block";
  home2.style.display="none";
  element1.classList. remove('active');
  element2.classList. add('active');
  element3.classList. remove('active');
  element4.classList. remove('active');
  element5.classList. remove('active');
  element6.classList. remove('active');
  element7.classList. remove('active');
  caller();
}
function fun3(){
  i="c";
  a=mydata.c;
  home.style.display="block";
  home2.style.display="none";
  element1.classList. remove('active');
  element2.classList. remove('active');
  element3.classList. add('active');
  element4.classList. remove('active');
  element5.classList. remove('active');
  element6.classList. remove('active');
  element7.classList. remove('active');
  caller();
}
function fun4(){
  i="d";
  a=mydata.d;
  home.style.display="block";
  home2.style.display="none";
  element1.classList. remove('active');
  element2.classList. remove('active');
  element3.classList. remove('active');
  element4.classList. add('active');
  element5.classList. remove('active');
  element6.classList. remove('active');
  element7.classList. remove('active');
  caller();
}
function fun5(){
  i="f";
  a=mydata.f;
  console.log(a);
  home.style.display="none";
  home2.style.display="block";
  maine.innerText=a.mainee;
  element1.classList. remove('active');
  element2.classList. remove('active');
  element3.classList. remove('active');
  element4.classList. remove('active');
  element5.classList. add('active');
  element6.classList. remove('active');
  element7.classList. remove('active');
  
}
function fun6(){
  i="d";
  a=mydata.g;
  home.style.display="none";
  home2.style.display="block";
  maine.innerText=a.mainee;
  element1.classList. remove('active');
  element2.classList. remove('active');
  element3.classList. remove('active');
  element4.classList. remove('active');
  element5.classList. remove('active');
  element6.classList. add('active');
  element7.classList. remove('active');
}
function fun7(){
  i="d";
  a=mydata.h;
  home.style.display="none";
  home2.style.display="block";
  maine.innerText=a.mainee;
  element1.classList. remove('active');
  element2.classList. remove('active');
  element3.classList. remove('active');
  element4.classList. remove('active');
  element5.classList. remove('active');
  element6.classList. remove('active');
  element7.classList. add('active');
}

function caller(){
  drawLineChart();
  drawPieChart();
  drawBarChart();
  values();
}

function values(){
  jobname.innerText = a.name;
  salary.innerText = a.salary;
  vacancey.innerText = a.vacancey;
  skills.innerText = a.skills;
  jobDesc.innerHTML = a.Desc;
  jobImg.src= a.jobImg;
}

$("button").click(function(){
  $("this.ul").addClass("active");
});



function loadDoc1() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      
      mydata = JSON.parse(this.responseText);
      
     

      }
  };
  xhttp.open("GET", "js/data.json", false);
  xhttp.send();
}

let a = mydata.a;

function drawLineChart() {

 // console.log(mydata);
  
 /* console.log(mydata.a.named);
  console.log(mydata.b.named);
  console.log(mydata.c.named);*/
  
  if ($("#lineChart").length) {
    ctxLine = document.getElementById("lineChart").getContext("2d");
   /* console.log(ctxLine);
    console.log(ctxLine.canvas);
    console.log(lineChart);*/
    optionsLine = {
      scales: {
        yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "salary in 1k Rs. per anum"
            }
          }
        ]
      }
    };

    
    optionsLine.maintainAspectRatio =
      $(window).width() < width_threshold ? false : true;

    configLine = {
      type: "line",
      data: {
        labels: [
          "<1yr",
          "1-4yr",
          "5-9yr",
          "10-19yr",
        ],
        datasets: [
          {
            label: "India",
            data: a.value1,
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            
            pointRadius: 0
          },
          {
            label: "UK",
            data: a.value2,
            fill: false,
            borderColor: "rgba(255,99,132,1)",
            
            pointRadius: 0
          },
          {
            label: "Australia",
            data: a.value3,
            fill: false,
            borderColor: "rgba(153, 102, 255, 1)",
            
            pointRadius: 0
          }
        ]
      },
      options: optionsLine
    };

    lineChart = new Chart(ctxLine, configLine);
  }
}

function drawBarChart() {
  if ($("#barChart").length) {
    ctxBar = document.getElementById("barChart").getContext("2d");

    optionsBar = {
      responsive: true,
      scales: {
        yAxes: [
          {
            barPercentage: 0.5,
            ticks: {
              beginAtZero: true
            },
            scaleLabel: {
              display: true,
              labelString: " "
            }
          }
        ]
      }
    };

    optionsBar.maintainAspectRatio =
      $(window).width() < width_threshold ? false : true;

    /**
     * COLOR CODES
     * Red: #F7604D
     * Aqua: #4ED6B8
     * Green: #A8D582
     * Yellow: #D7D768
     * Purple: #9D66CC
     * Orange: #DB9C3F
     * Blue: #3889FC
     */

    configBar = {
      type: "horizontalBar",
      data: {
        labels: ["","india","australia","UK",""],
        datasets: [
          {
            label: "competitor",
            data: a.value4,
            backgroundColor: [
              "#D7D768",
              "#9D66CC",
              "#F7604D",
              "#4ED6B8",
              "#A8D582", 
            ],
            borderWidth: 0
          }
        ]
      },
      options: optionsBar
    };

    barChart = new Chart(ctxBar, configBar);
  }
}

function drawPieChart() {
  
  if ($("#pieChart").length) {
    var chartHeight = 300;

    $("#pieChartContainer").css("height", chartHeight + "px");

    ctxPie = document.getElementById("pieChart").getContext("2d");

    optionsPie = {
      responsive: true,
      maintainAspectRatio: false,
      layout: {
        padding: {
          left: 10,
          right: 10,
          top: 10,
          bottom: 10
        }
      },
      legend: {
        position: "top"
      }
    };

    configPie = {
      type: "pie",
      data: {
        datasets: [
          {
            data: a.value5,
            backgroundColor: ["#F7604D", "#4ED6B8", "#A8D582"],
            label: "salary"
          }
        ],
        labels: [
          "United Kindom $ per year",
          "Australia $ per year",
          "India $ per year"
        ]
      },
      options: optionsPie
    };

    pieChart = new Chart(ctxPie, configPie);
  }
}

//jobname.innerText=mydata.i.named;


function updateLineChart() {
  if (lineChart) {
    lineChart.options = optionsLine;
    lineChart.update();
  }
}
function updatePieChart() {
  if (pieChart) {
    pieChart.options = optionsPie;
    pieChart.update();
  }
}
function updateBarChart() {
  if (barChart) {
    barChart.options = optionsBar;
    barChart.update();
  }
  
}
