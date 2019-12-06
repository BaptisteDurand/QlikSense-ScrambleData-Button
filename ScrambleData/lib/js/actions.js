/**
 * 
 * @param {*} element 
 * @param {*} fieldsListToScramble 
 * @param {*} qix 
 * @param {*} selectionToGet 
 */
function onSubmit(element, fieldsListToScramble, qix, selectionToGet) {
    element.onclick = function(){
        // let arrayValues  = [];
 
        // Scrambling each fields contains of the rows.
        fieldsListToScramble.rows.forEach(function(row){
            //I get Selected, or Possible or, etc...
            if(row.qState === selectionToGet){ 
                //arrayValues.push(row.qText);
                //console.log('Scramble : '+row.qText);

                //Here I scramble the data
                qix.app.scramble(row.qText);
                }
            });
            // console.log('Has been Scrambled : ')
            // console.log(arrayValues);    
    }
}