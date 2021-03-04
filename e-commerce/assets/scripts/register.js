function registration(){
    const list = document.getElementById('user');
    const inputs = list.getElementsByTagName("input");
    console.log(inputs);
    const reg = {name:inputs[0].value,
                email:inputs[1].value,
                password:inputs[2].value

    }

    console.log(reg);

    fetch(" http://127.0.0.1:5000/register/",{
        method: "POST",
        body:JSON.stringify(reg),
        headers: {
            "Content-type":"application/json; charset=UTF-8",
        },
        })
        .then((response) => response.json())
        .then((json)=> {
            console.log(json);
            alert("you are successfully registered ");
            document.getElementById("user").reset();
        });
    }