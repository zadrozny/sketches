var tickle = document.getElementById("tickle")

tickle.addEventListener("click", function(){
    tickle.className = "excited"
    var foo = tickle.className
    console.log(foo)
    // console.log("foo")
})


var kick = document.getElementById("kick")

kick.addEventListener("click", function(){
    kick.className = "scared"
})