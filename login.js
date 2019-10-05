function login(){
    var username = document.getElementById("uname").value;
    var password = document.getElementById("password").value;
    if(username=="Pratham" && password=="pr47h4m"){
        window.open("https://prathamjaiswal.github.io/CodeTalks/home.html"/*,"_self","_parent"*/);

    }else{
        window.alert("Invalid Username or Password");
    }
}