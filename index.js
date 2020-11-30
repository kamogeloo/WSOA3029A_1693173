


//Second graph data
let covidData = [
    
    { x:20, y: 85},
    { x:30, y: 65},
    { x:40, y: 11},
    { x:50, y: 34},
    { x:60, y: 30},
    { x:70, y: 11},
    { x:80, y: 15},
    { x:90, y: 11},
    { x:100, y: 9},
]

let margin = 50;
let height = 500;
let width = 10;

let graphInfo = d3.select("#graph3");

graphInfo
.append("g")




let x1Scale = d3.scaleLinear()
.domain([0, 100])
 .range([0, 500]);
 



let y1Scale = d3.scaleLinear()
.domain([0, 100])
.range([height + width, 0]);

 graphInfo
.append("g")
.attr('transform', 'translate(50 , 10)')
.call(d3.axisLeft(y1Scale));


graphInfo
.append("g")
.attr('transform', 'translate(50, 520)')
.call(d3.axisBottom(x1Scale));
/*attr('transform', 'translate(0, 510)');*/

//Label for the y-axis
graphInfo
.append("text")
.attr("transform", "rotate(-90)")
.attr("y", 0 - margin.left)
.attr("x", 0 - (height/2))
.attr("dy", "1em")
.style("text-anchor", "middle")
.text("Percentage (%)")
.style('fill', 'white');

//Label for the x-axis
graphInfo
.append("text")
.attr("class", "x name")
.style("text-achor", "middle")
.attr("x",width + 250)
.attr("y", height - -80)
.text("Symptoms")
.style('fill', 'white');

//title of graph
graphInfo
.append("text")
.attr("class", "x name")
.style("text-achor", "middle")
.attr("x",width + 150)
.attr("y", height - 488)
.text("Most Common Symptoms of Covid-19")
.style('fill', 'white');

///////////////rectangles//////////////////////
//fever 
graphInfo
.append("rect")
.attr("class", "x name")
.attr("x",width + 83)
.attr("y", height - 430)
.attr("width", 25)
.attr("height", 25)
.style('fill', 'Red')
.text ('Fever');


//dry cough
graphInfo
.append("rect")
.attr("class", "x name")
.attr("x", width + 133)
.attr("y", height - 330)
.attr("width", 20)
.attr("height", 20)
.style ("fill", "darkOrange");

//heaches
graphInfo
.append("rect")
.attr("class", "x name")
.attr("x",width + 183)
.attr("y", height - 54)
.attr("width", 10)
.attr("height", 10)
.style('fill', 'Yellow');

//Fatigue
graphInfo
.append("rect")
.attr("class", "x name")
.attr("x",width + 233)
.attr("y", height - 170)
.attr("width",18 )
.attr("height", 18)
.style('fill', 'Orange');

//Phlem
graphInfo
.append("rect")
.attr("class", "x name")
.attr("x",width + 283)
.attr("y", height - 150)
.attr("width", 15)
.attr("height", 15)
.style('fill', 'Orange');

//MuscleAche
graphInfo
.append("rect")
.attr("class", "x name")
.attr("x",width + 333)
.attr("y", height - 53)
.attr("width", 10)
.attr("height", 10)
.style('fill', 'Yellow');

//ShortBreath
graphInfo
.append("rect")
.attr("class", "x name")
.attr("x",width + 383)
.attr("y", height - 75)
.attr("width", 12)
.attr("height", 12)
.style('fill', 'Yellow');

//SoreThroat
graphInfo
.append("rect")
.attr("class", "x name")
.attr("x",width + 433)
.attr("y", height - 53)
.attr("width",10)
.attr("height", 10)
.style('fill', 'Yellow');

//Chills
graphInfo
.append("rect")
.style("text-achor", "middle")
.attr("x",width + 483)
.attr("y", height - 43)
.attr("width", 8)
.attr("height", 8)
.style('fill', 'Yellow');


//////////////////////////////////////////text for labels////////////////////////////


//fever text
graphInfo
.append("text")
.attr("class", "x label")
.style("text-achor", "middle")
.attr("x",width + 130)
.attr("y", height - 420)
.text("Fever (88%)")
.style('fill', 'Red');

//dry cough
graphInfo
.append("text")
.attr("class", "x label")
.style("text-achor", "middle")
.attr("x",width + 173)
.attr("y", height - 318)
.text("Dry Cough (68%)")
.style('fill', 'darkOrange');

//heaches
graphInfo
.append("text")
.attr("class", "x label")
.style("text-achor", "middle")
.attr("x",width + 55)
.attr("y", height - 55)
.text("Headaches (14%)")
.style('fill', 'Yellow');

//Fatigue
graphInfo
.append("text")
.attr("class", "x label")
.style("text-achor", "middle")
.attr("x",width + 135)
.attr("y", height - 160)
.text("Fatigue (38%)")
.style('fill', 'Orange');

//Phlem
graphInfo
.append("text")
.attr("class", "x label")
.style("text-achor", "middle")
.attr("x",width + 330)
.attr("y", height - 140)
.text("Phlem (33%)")
.style('fill', 'Orange');

//MuscleAche
graphInfo
.append("text")
.attr("class", "x label")
.style("text-achor", "middle")
.attr("x",width + 230)
.attr("y", height - 15)
.text("MuscleAches (14%)")
.style('fill', 'Yellow');

//ShortBreath
graphInfo
.append("text")
.attr("class", "x label")
.style("text-achor", "middle")
.attr("x",width + 395)
.attr("y", height - 79)
.text("ShortBreath (18%)")
.style('fill', 'Yellow');

//SoreThroat
graphInfo
.append("text")
.attr("class", "x label")
.style("text-achor", "middle")
.attr("x",width + 480)
.attr("y", height - 50)
.text("SoreThroat (14%)")
.style('fill', 'Yellow');

//Chills
graphInfo
.append("text")
.attr("class", "x label")
.style("text-achor", "middle")
.attr("x",width + 530)
.attr("y", height - 30)
.text("Chills (11%)")
.style('fill', 'Yellow');

d3.selectAll("#graph3 rect")

.on("mouseover", function (){
    d3.select(this)
    
    .attr("width", 40)
    .attr("height", 40)
    .style('stroke', 'red')
    

    .on("mouseout", function (){
        d3.select(this)
        .transition()
        .delay(1000)
        .duration(1000)
        .attr("width", 15)
        .attr("height", 15)
        .style('stroke', 'none')
        
    })
})





//third graph

let graphData = d3.select("#graph2", "Slider");
graphData
.append("g")

//title of graph
graphData
.append("text")
.attr("class", "x name")
.style("text-achor", "middle")
.attr("x",width + 50)
.attr("y", height - 480)
.text("Most Common Symptoms of Covid-19")
.style('fill', 'white')

///////////////rectangles//////////////////////
//fever 
graphData
.append("circle")
.attr("class", "x name")
.attr("cx",width + 83)
.attr("cy", height - 430)
.attr("r", 25)
.style("fill", "red")
;


//dry cough
graphData
.append("circle")
.attr("class", "x name")
.attr("cx", width + 133)
.attr("cy", height - 330)
.attr("r", 20)
.style ("fill", "darkOrange");

//heaches
graphData
.append("circle")
.attr("class", "x name")
.attr("cx",width + 183)
.attr("cy", height - 54)
.attr("r", 8)
.style('fill', 'Yellow');

//Fatigue
graphData
.append("circle")
.attr("class", "x name")
.attr("cx",width + 233)
.attr("cy", height - 170)
.attr("r", 15)
.style('fill', 'Orange');

//Phlem
graphData
.append("circle")
.attr("class", "x name")
.attr("cx",width + 283)
.attr("cy", height - 150)
.attr("r", 13)
.style('fill', 'Orange');

//MuscleAche
graphData
.append("circle")
.attr("class", "x name")
.attr("cx",width + 333)
.attr("cy", height - 53)
.attr("r", 8)
.style('fill', 'Yellow');

//ShortBreath
graphData
.append("circle")
.attr("class", "x name")
.attr("cx",width + 383)
.attr("cy", height - 75)
.attr("r", 10)
.style('fill', 'Yellow');

//SoreThroat
graphData
.append("circle")
.attr("class", "x name")
.attr("cx",width + 433)
.attr("cy", height - 53)
.attr("r", 8)
.style('fill', 'Yellow');

//Chills
graphData
.append("circle")
.style("text-achor", "middle")
.attr("cx",width + 483)
.attr("cy", height - 43)
.attr("r", 5)
.style('fill', 'Yellow');


//////////////////////////////////////////text for labels////////////////////////////


//fever text
graphData
.append("text")
.attr("class", "x label")
.style("text-achor", "middle")
.attr("x",width + 130)
.attr("y", height - 420)
.text("Fever (88%)")
.style('fill', 'Red');

//dry cough
graphData
.append("text")
.attr("class", "x label")
.style("text-achor", "middle")
.attr("x",width + 173)
.attr("y", height - 318)
.text("Dry Cough (68%)")
.style('fill', 'darkOrange');

//heaches
graphData
.append("text")
.attr("class", "x label")
.style("text-achor", "middle")
.attr("x",width + 55)
.attr("y", height - 50)
.text("Headaches (14%)")
.style('fill', 'Yellow');

//Fatigue
graphData
.append("text")
.attr("class", "x label")
.style("text-achor", "middle")
.attr("x",width + 120)
.attr("y", height - 160)
.text("Fatigue (38%)")
.style('fill', 'Orange');

//Phlem
graphData
.append("text")
.attr("class", "x label")
.style("text-achor", "middle")
.attr("x",width + 315)
.attr("y", height - 140)
.text("Phlem (33%)")
.style('fill', 'Orange');

//MuscleAche
graphData
.append("text")
.attr("class", "x label")
.style("text-achor", "middle")
.attr("x",width + 230)
.attr("y", height - 15)
.text("MuscleAches (14%)")
.style('fill', 'Yellow');

//ShortBreath
graphData
.append("text")
.attr("class", "x label")
.style("text-achor", "middle")
.attr("x",width + 395)
.attr("y", height - 79)
.text("ShortBreath (18%)")
.style('fill', 'Yellow');

//SoreThroat
graphData
.append("text")
.attr("class", "x label")
.style("text-achor", "middle")
.attr("x",width + 450)
.attr("y", height - 55)
.text("SoreThroat (14%)")
.style('fill', 'Yellow');

//Chills
graphData
.append("text")
.attr("class", "x label")
.style("text-achor", "middle")
.attr("x",width + 500)
.attr("y", height - 40)
.text("Chills (11%)")
.style('fill', 'Yellow');


//menu
    
//code for menu   credit: https://youtu.be/H4MkGzoACpQ
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li, #button");
const image =document.querySelector(".aboutpage img");
const heading = document.querySelector(".aboutpage h1");
const body = document.querySelector("body");


hamburger.addEventListener("click", () => {

navLinks.classList.toggle("open");
links.forEach(link => {
link.classList.toggle("fade");
body.style.overflow = "hidden";
image.style.display = "none";
heading.style.display = "none";

});
});