
const fs = require('fs');

/*
Varsha's controller functions
*/
exports.getUser = function(req, res, next) {
    var username = req.params.username;
    var password = req.params.password;
    
    fs.writeFile ("input.json", JSON.stringify(data), function(err) {
    if (err) throw err;
    console.log('complete');
    })
    res.json(respBody);
}

exports.login = function(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
    var token = false;
    fs.readFile('/Users/dashuduc/Documents/varsha/api/api/releases/users.json', 'utf8',(err, fileContent) => {
        if( err ) {
            res.json({"sucess": "false"});
        } else {
          data = JSON.parse(fileContent.toString());
          
          data.forEach(function(user){
            if (user.username == username && user.password == password){
                token = true
            }
          })


          res.json({"sucess": token});
          
        }

    })
    

    
}

exports.register = function(req, res) {
    
    var username = req.body.username;
    var password = req.body.password;
    var email = req.body.email;
    var contact = req.body.contact;
    var userObject = {
        "username": username,
        "password": password,
        "email": email,
        "contact": contact 
    }
    
    fs.readFile('/Users/dashuduc/Documents/varsha/api/api/releases/users.json', 'utf8',(err, fileContent) => {
        if( err ) {
        } else {
          data = JSON.parse(fileContent.toString());
          console.log(fileContent);
          data.push(userObject);
          fs.writeFile ("/Users/dashuduc/Documents/varsha/api/api/releases/users.json", JSON.stringify(data), function(err) {
            if (err) throw err;
            console.log('complete');
            res.json({"sucess": "true"});
            })
        }
    })

 
}

exports.addToList = function(req, res, next) {
    var name = req.body.name;
    var description = req.body.description;
    
    var list = {
        "name": name,
        "description": description
    }
    
    fs.readFile('/Users/dashuduc/Documents/varsha/api/api/releases/todolist.json', 'utf8',(err, fileContent) => {
        if( err ) {
        } else {
          data = JSON.parse(fileContent.toString());
          data.push(list);
          fs.writeFile ("/Users/dashuduc/Documents/varsha/api/api/releases/todolist.json", JSON.stringify(data), function(err) {
            if (err) throw err;
            console.log('complete');
            res.json({"sucess": "true"});
            })
        }
    })
}

exports.getToDoList = function(req, res, next) {
    fs.readFile('/Users/dashuduc/Documents/varsha/api/api/releases/todolist.json', 'utf8',(err, fileContent) => {
        if( err ) {
            
        } else {
          data = JSON.parse(fileContent.toString());
          res.json(data);
          
        }

    })
}

exports.deleteFromList = function(req, res, next) {
    var name  = req.body.name;
    fs.readFile('/Users/dashuduc/Documents/varsha/api/api/releases/todolist.json', 'utf8',(err, fileContent) => {
        if( err ) {
            res.json({"sucess": "false"});
        } else {
          data = JSON.parse(fileContent.toString());
          for (var i = 0; i < data.length; i++) {
            if (data[i].name == name)
            {
                console.log(data[i].name);
              data.splice(i,1)
              fs.writeFile ("/Users/dashuduc/Documents/varsha/api/api/releases/todolist.json", JSON.stringify(data), function(err) {
                if (err) throw err;
                console.log('complete');
                })
            }
          }
        //   data.forEach(function(list){
        //       console.log(list);
        //     if(list.name == name){
        //         data.pop(list)
        //     }
        //   })
          
        }

    })
    res.json({"sucess": "true"});
}


/*
Varsha's controller functions end
*/
