function login__(){}
var name = document.getElementById("name").value
var password = document.getElementById("password").value
    login_details={
        name_:name,
        password_:password,
    }
    
    return console.log([login_details.name_,login_details.password_])
    }





    function login(){
        var name = document.getElementById("name").value
        var password = document.getElementById("password").value
        login_details={
            name_:name,
            password_:password,
        }
        return console.log([login_details.name_,login_details.password_])
    }