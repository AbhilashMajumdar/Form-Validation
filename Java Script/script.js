let username = document.getElementById("username");
let password = document.getElementById("password");
let flag = 1;

function validateForm()
{
    if(username.value == "")
    {
        document.getElementById("usererror").innerHTML = "Username is empty";
        flag=0;
    }
    else if(username.value.length < 8)
    {
        document.getElementById("usererror").innerHTML = "minimum 8 characters required";
        flag=0;
    }
    else
    {
        document.getElementById("usererror").innerHTML = "";
        flag=1;
    }

    if(password.value == "")
    {
        document.getElementById("userpass").innerHTML = "Password is empty";
        flag=0;
    }
    else if(password.value.length < 4)
    {
        document.getElementById("userpass").innerHTML = "minimum 4 characters required";
        flag=0;
    }
    else
    {
        document.getElementById("userpass").innerHTML = "";
        flag=1;
    }
    
    if(flag)
    {
        return true;
    }
    else
    {
        return false;
    }
}