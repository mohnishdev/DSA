
//  Trick to solve the pattern based problems 

/**
       *
      *** 
     *****
    *******

 */

function runDSA() {
    let pattern = "";


    for (let row = 1; row <= 4; row++) {
        // for (let columns = 1 , count = 0; count <= row; columns += 2){
        //     pattern += `*`;
        // }
        // count++
        pattern += "<br>";
    }

    document.getElementById('output').innerHTML = pattern;
}
