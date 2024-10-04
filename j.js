const msg = document.getElementById("msg")
form.addEventListener('submit',e=>){
e.preventDefault()
fetch(scripturl,{method: 'POST', body: new FormData(form)});
.then(responce =>{
    msg.innerHTML = "message sent successfully"
})
}