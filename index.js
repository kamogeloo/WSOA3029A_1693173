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


//fever text
graphArea
.append("rect")
.attr("class", "x name")
.attr("x",width + 83)
.attr("y", height - 430)
.attr("width", 15)
.attr("height", 15)
.style('fill', 'Red')
.text ('Fever')
;


//dry cough
graphArea
.append("rect")
.attr("class", "x name")
.attr("x", width + 133)
.attr("y", height - 330)
.attr("width", 15)
.attr("height", 15)
.style ("fill", "darkOrange");

//heaches
graphArea
.append("rect")
.attr("class", "x name")
.attr("x",width + 183)
.attr("y", height - 54)
.attr("width", 15)
.attr("height", 15)
.style('fill', 'Yellow');

//Fatigue
graphArea
.append("rect")
.attr("class", "x name")
.attr("x",width + 233)
.attr("y", height - 170)
.attr("width",15 )
.attr("height", 15)
.style('fill', 'Orange');

//Phlem
graphArea
.append("rect")
.attr("class", "x name")
.attr("x",width + 283)
.attr("y", height - 150)
.attr("width", 15)
.attr("height", 15)
.style('fill', 'Orange');

//MuscleAche
graphArea
.append("rect")
.attr("class", "x name")
.attr("x",width + 333)
.attr("y", height - 53)
.attr("width", 15)
.attr("height", 15)
.style('fill', 'Yellow');

//ShortBreath
graphArea
.append("rect")
.attr("class", "x name")
.attr("x",width + 383)
.attr("y", height - 75)
.attr("width", 15)
.attr("height", 15)
.style('fill', 'Yellow');

//SoreThroat
graphArea
.append("rect")
.attr("class", "x name")
.attr("x",width + 433)
.attr("y", height - 53)
.attr("width",15)
.attr("height", 15)
.style('fill', 'Yellow');

//Chills
graphArea
.append("rect")
.style("text-achor", "middle")
.attr("x",width + 483)
.attr("y", height - 43)
.attr("width", 15)
.attr("height", 15)
.style('fill', 'Yellow');
//label for x variables
/*graphArea
.append ("text")
.attr("class","x axis")
.attr("transform", "translate(85, " + height  + ")")
.text("fever");*/



//placement shape and color of circles
/*graphArea
.selectAll("name")
.data(covidData)
.enter()
.append("circle")
.attr("cx", function (d) {
    return x1Scale(d.x);
})
.attr("cy", function (d){
    return y1Scale(d.y);
})f
.attr("r",5)
.attr('stroke', 'white')
.style( "fill", "#843b62");*/

d3.selectAll("rect")

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
