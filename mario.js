

printPyramid(5);
drawPyramid(5);

drawPyramidExt(10);


/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
function printPyramid(height) {
    //console.log("Uh oh... the pyramid is under construction.");
    //console.log("Check back soon, our developers are hard at work as we speak!");

    for (let i=0; i<height; i++){
        console.log(" ".repeat(height-i-1)+"#".repeat(i+2));
    }
    // TODO
    // print that pyramid!

}

function drawPyramid(height=5,symb="#") {
    const container = document.getElementById("pyramid");
    
    for (let i=0; i<height; i++){
       let div = document.createElement('div');
       div.innerHTML += "<p>"+"&nbsp".repeat(height-i-1)+symb.repeat(i+2)
       
       container.appendChild(div);

    }
    if (height >0) {
        document.getElementById("construction").style.display = "none";
    }

}

function drawPyramidExt(height){
    const container = document.getElementById("pyramid");
    for (let i=0; i<height; i++){
        let div = document.createElement('div');

        
        for (let j=0; j<height-i-1; j++){
            let div_ch= document.createElement('div');
            div_ch.className = "square";
            div_ch.style.background = "white";
            div.appendChild(div_ch);
        }

        for (let j=0; j<i+2; j++) {
            let div_ch= document.createElement('div');
            div_ch.className="square";
            div.appendChild(div_ch);
        }
 
        container.appendChild(div);

    }
 
}