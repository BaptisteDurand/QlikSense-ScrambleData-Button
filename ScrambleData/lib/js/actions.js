/**
 * 
 * @param {*} element 
 * @param {*} fieldsSource 
 * @param {*} qix 
 * @param {*} selectionToGet 
 */
function onSubmitScrambling(element, app, fieldsSource, qix, selectionToGet) {
    element.onclick = function(){
        // let arrayValues  = [];

        let fieldToScramble = app.field(fieldsSource).getData();

        // Scrambling each fields contains of the rows.
        fieldToScramble.OnData.bind( function(){
            fieldToScramble.rows.forEach(function(row){
                //I get Selected, or Possible or, etc...
                if(row.qState === selectionToGet){ 
                    //arrayValues.push(row.qText);
                    //console.log('Scramble : '+row.qText);
                    //Here I scramble the data
                    qix.app.scramble(row.qText);
                }
            });
        });
    }
};


/**
 * 
 * @param {*} element 
 * @param {*} app 
 */
function onSubmitSave(element, app, newAppName) {
    element.onclick = function(){
        // let arrayValues  = [];
        //qix.save();
        app.doSave(newAppName).then(function(){
   			 console.log('App Saved');
		});
    
    }
}