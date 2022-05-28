window.a=10;

function login(event) {
    var student_details=[
       {
            id:23,
            number:9977886655,
            pwd:1234
        },
       {
            id:24,
            number:9977886655,
            pwd:1234
        },
         {
            id:25,
            number:9977886655,
            pwd:1234
        }
      ]

      
    var na = document.getElementById("number").value;
    var pw = document.getElementById("password").value;
  
    student_details.forEach(function(student){
        if(student.number==na){
            window.location="https://www.w3schools.com/jsref/met_win_alert.asp"
        }
        else{
            alert("invalid credentials")
        }
    })


    
  }
  