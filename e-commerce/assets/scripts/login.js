let users = [];

fetch("http://127.0.0.1:5000/show-items/")
.then((res) => res.json())
.then((data) => {
    console.log(data)
    users =data
})

function signIn(){
    const form =document.getElementById("myid")
    let inputs =form.getElementsByTagName("input")

    let = mail = inputs[0].value
    let = pasword = inputs[1].value
    console.log(mail)
    console.log(pasword)

    let loggedIn = users.filter((user)=>{
        return (
            user.password == pasword && user.email == mail
        );
    });
    console.log(loggedIn);

    if(loggedIn.length > 0) {
        alert("You are now logged in")
        window.location.href = "./products.html"
    } else {
        alert("credintials invalid")
    }
};

