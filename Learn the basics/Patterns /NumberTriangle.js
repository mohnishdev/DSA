//  Trick to solve the pattern based problems 

/**
        1 
        2 2 
        3 3 3 
        4 4 4 4 
        5 5 5 5 5
 */

        function runDSA() {
            let pattern = "";
        
            for (let row = 1; row <= 5; row++) {
                for (let columns = 1; columns <= row; columns++) {
                    pattern += `${row} `;
                }
                pattern += "<br>";
            }
        
            document.getElementById('output').innerHTML = pattern;
        }
        