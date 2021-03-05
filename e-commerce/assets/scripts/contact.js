function contacting(){
    const list = document.getElementById('sending');
    const inputs = list.getElementsByTagName("input");
    const textarea= list.getElementsByTagName("textarea")
    console.log(inputs);
    const reg = {name:inputs[0].value,
                email:inputs[1].value,
                message:textarea[2].value

    }

    console.log(reg);

    fetch(" http://127.0.0.1:5000/send-email/",{
        method: "POST",
        body:JSON.stringify(reg),
        headers: {
            "Content-type":"application/json; charset=UTF-8",
        },
        })
        .then((response) => response.json())
        .then((json)=> {
            console.log(json);
            alert("email sent");
            document.getElementById("sending").reset();
        });
    }