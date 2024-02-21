// console.log("loaded")
var url = window.location.href
var pg = url.slice(-2, -1) //[-2];
var base = url.slice(0, -2)

// if (url.includes("http://0.0.0.0:8000/")) {
// 	base = "http://0.0.0.0:8000/"
// } 

var next = base + String(Number(pg) + 1)
var prev = base + String(Number(pg) - 1)


function control(e) {
    if (e.keyCode === 39) {
    	// console.log(url)
        // console.log(pg)
		window.open(next,"_self")
    // } else if (e.keyCode === 38) {
    //     console.log('up pressed')
    } else if (e.keyCode === 37) {
        // console.log('left pressed')
        window.open(prev,"_self")
    } else {
    	console.log("Press ← or → ")
    }


    // else if (e.keyCode === 40) {
    //     console.log('down pressed')
    // }
}
document.addEventListener('keyup', control)