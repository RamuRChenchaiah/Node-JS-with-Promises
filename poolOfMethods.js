const Promise = require('promise');


var pipe = function(){
    return new Promise(function(resolve, reject){
         resolve({"message": "Data as received for this step (1)"})
    }).then(function(responseFromAboveStep){
        return new Promise(function(resolve, reject){
        	responseFromAboveStep["manipulationsInStep (2)"] = "otherManipulatedData"
            resolve(responseFromAboveStep)
        })
    }).catch(function(error){
         Promise.reject({"error": error})        
    })  
}

module.exports.pipe = pipe;
