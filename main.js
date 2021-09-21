let error_msg_obj = document.getElementById('error-message');
let error_logo_obj = document.getElementById('error');
let validate_button_obj = document.getElementsByClassName('arrow_pannel')[0];
let mail_form_obj = document.getElementById('email_input');
let mail_pannel_obj = document.getElementsByClassName('mail_pannel')[0];



validate_button_obj.addEventListener('click', () => 
{
    if(!mail_form_obj.validity.valid)
    {
        console.log("NOT VALID");
        error_msg_obj.style.display = "inline";
        error_logo_obj.style.display = "inline";
        mail_pannel_obj.style.border = "2px solid red";
    }
    else
    {
        console.log(" VALID");

        error_msg_obj.style.display = "none";
        error_logo_obj.style.display = "none";
        mail_pannel_obj.style.border = "1px hsl(0, 36%, 70%) solid";
    }
});