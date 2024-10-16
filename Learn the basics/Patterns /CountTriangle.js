//  Trick to solve the pattern based problems 

/**
        1 
        1 2  
        1 2 3 
        1 2 3 4 
        1 2 3 4 5
 */

function runDSA() {
    let pattern = "";

    for (let row = 1; row <= 5; row++) {
        for (let columns = 1; columns <= row; columns++) {
            pattern += `${columns} `;
        }
        pattern += "<br>";
    }

    document.getElementById('output').innerHTML = pattern;
}
