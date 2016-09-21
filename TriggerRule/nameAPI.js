var request = require('request');

function main(param){
    var name = param.name || 'Gianluca';
    var requestObj = {
        name:name,
    }
    return new Promise(function(resolve, reject){
        console.log("in nameAPI")
        request({
                url : "https://api.genderize.io/",
                qs : requestObj
            }, function(err, resp, body){
                if (!err && resp.statusCode == 200) {
                    console.log('in resolve' + resp.body)
                    var obj = JSON.parse(resp.body)
                    if(obj.probability >  0.7){
                        if(obj.gender == 'male'){
                            resolve({msg: "Hey Mister, nice tie!"})
                        }else{
                            resolve({msg : "Hey Mrs, nice skirt!"})
                        }
                    }else{
                        resolve({msg: "Hi there!"})
                    }
                }else{
                    reject({err: err });
                }
            })
    })
}
