

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

    let count = 5;


    for (let row = 1; row <= 5; row++) {
        let acc = 1;
        
        for (let columns = 1; columns <=count; columns++) {
            console.log(columns);

            pattern += `${acc}`;
            acc++
        }
        count--
        pattern += "<br>";
    }

    document.getElementById('output').innerHTML = pattern;
}
