let users = [];

fetch("https://pacific-falls-79530.herokuapp.com/show-items/")
.then((res) => res.json())
.then((data) => {
    console.log(data);
    users =data;
})

function signIn(){
    const form =document.getElementById("myid");
    let inputs =form.getElementsByTagName("input");

    let = email = inputs[0].value;
    let = password = inputs[1].value;
    console.log(email);
    console.log(password);

    let loggedIn = users.filter((user)=>{
        return user.email == email && user.password== password;
    });
    console.log(loggedIn);

    if(loggedIn.length > 0) {
        localStorage.setItem("user",JSON.stringify(loggedIn[0]))
        JSON.parse(localStorage.getItem("user"))
        alert("You are now logged in")
        window.location.href = "./products.html"
    } else {
        alert("credintials invalid");
    }
};

