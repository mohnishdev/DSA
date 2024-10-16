

//  Trick to solve the pattern based problems 

/**
        * 
        * * 
        * * * 
        * * * * 
        * * * * *
 */

function runDSA() {
    let pattern = "";

    for (let row = 1; row <= 5; row++) {
        pattern += "* ";
        for (let columns = 1; columns < row; columns++) {
            pattern += "* ";
        }
        pattern += "<br>";
    }

    document.getElementById('output').innerHTML = pattern;
}
