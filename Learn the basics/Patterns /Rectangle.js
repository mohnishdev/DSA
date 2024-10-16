

//  Trick to solve the pattern based problems 

/**
 
 * * * * *
 * * * * *
 * * * * *
 * * * * *
 * * * * *
 */

function runDSA() {
    let pattern = "";

    // Loop to create the pattern
    for (let row = 1; row <= 5; row++) { // 5 rows
        for (let columns = 1; columns <= 5; columns++) { // 4 columns per row
            pattern += "* "; // Add star and space
        }
        pattern += "<br>"; // HTML line break after each row
    }

    // Display the result on the DOM
    document.getElementById('output').innerHTML = pattern; // Use innerHTML to handle <br>
}
