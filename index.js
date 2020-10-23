function Responsivemenu(){
    let menubar = document.getElementById("menulist");
    if(menubar.className === "navi"){
        menubar.className += "responsive";
    }
    else{
        menubar.className = "navi";
    }
}
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

let graphArea = d3.select("#graph2");
graphArea
.append("g")
/*.attr('transform', 'translate(50, 50)');*/



let x1Scale = d3.scaleLinear()
.domain([0, 100])
 .range([0, 500]);
 



let y1Scale = d3.scaleLinear()
.domain([0, 100])
.range([height + width, 0]);

 graphArea
.append("g")
.attr('transform', 'translate(50 , 10)')
.call(d3.axisLeft(y1Scale));


graphArea
.append("g")
.attr('transform', 'translate(50, 520)')
.call(d3.axisBottom(x1Scale));
/*attr('transform', 'translate(0, 510)');*/

//Label for the y-axis
graphArea
.append("text")
.attr("transform", "rotate(-90)")
.attr("y", 0 - margin.left)
.attr("x", 0 - (height/2))
.attr("dy", "1em")
.style("text-anchor", "middle")
.text("Percentage (%)")
.style('fill', 'white');

//Label for the x-axis
graphArea
.append("text")
.attr("class", "x name")
.style("text-achor", "middle")
.attr("x",width + 250)
.attr("y", height - -80)
.text("Symptoms")
.style('fill', 'white');

//title of graph
graphArea
.append("text")
.attr("class", "x name")
.style("text-achor", "middle")
.attr("x",width + 150)
.attr("y", height - 488)
.text("Most Common Symptoms of Covid-19")
.style('fill', 'white')
.append("circle")
.attr("fill", "yellow");

//fever text
graphArea
.append("text")
.attr("class", "x name")
.style("text-achor", "middle")
.attr("x",width + 100)
.attr("y", height - 419)
.text("Fever (88%)")
.style('fill', 'Red');


//dry cough
graphArea
.append("text")
.attr("class", "x name")
.style("text-achor", "middle")
.attr("x",width + 150)
.attr("y", height - 315)
.text("Dry Cough (68%)")
.style('fill', 'darkOrange');

//heaches
graphArea
.append("text")
.attr("class", "x name")
.style("text-achor", "middle")
.attr("x",width + 200)
.attr("y", height - 45)
.text("Headaches (14%)")
.style('fill', 'Yellow');

//Fatigue
graphArea
.append("text")
.attr("class", "x name")
.style("text-achor", "middle")
.attr("x",width + 250)
.attr("y", height - 160)
.text("Fatigue (38%)")
.style('fill', 'Orange');

//Phlem
graphArea
.append("text")
.attr("class", "x name")
.style("text-achor", "middle")
.attr("x",width + 300)
.attr("y", height - 135)
.text("Phlem (33%)")
.style('fill', 'Orange');

//MuscleAche
graphArea
.append("text")
.attr("class", "x name")
.style("text-achor", "middle")
.attr("x",width + 270)
.attr("y", height - 25)
.text("MuscleAches (14%)")
.style('fill', 'Yellow');

//ShortBreath
graphArea
.append("text")
.attr("class", "x name")
.style("text-achor", "middle")
.attr("x",width + 400)
.attr("y", height - 65)
.text("ShortBreath (18%)")
.style('fill', 'Yellow');

//SoreThroat
graphArea
.append("text")
.attr("class", "x name")
.style("text-achor", "middle")
.attr("x",width + 450)
.attr("y", height - 50)
.text("SoreThroat (14%)")
.style('fill', 'Yellow');

//Chills
graphArea
.append("text")
.attr("class", "x name")
.style("text-achor", "middle")
.attr("x",width + 500)
.attr("y", height - 30)
.text("Chills (11%)")
.style('fill', 'Yellow');
//label for x variables
/*graphArea
.append ("text")
.attr("class","x axis")
.attr("transform", "translate(85, " + height  + ")")
.text("fever");*/



//placement shape and color of circles
graphArea
.selectAll("name")
.data(covidData)
.enter()
.append("circle")
.attr("cx", function (d) {
    return x1Scale(d.x);
})
.attr("cy", function (d){
    return y1Scale(d.y);
})
.attr("r",5)
.attr('stroke', 'white')
.style( "fill", "#843b62");

d3.selectAll("circle")
.on("mouseover", function (){
    d3.select(this)
    .attr("r", 10)
    .attr('stroke', 'red')
    .style("fill", "#ffb997")

    .on("mouseout", function (){
        d3.select(this)
        .attr("r", 5)
        .attr('stroke', 'white')
        .style("fill", "#843b62")
    })
})







//third graph
