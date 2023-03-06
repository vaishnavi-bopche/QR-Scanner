button = document.getElementById("button");
        inputtext=document.getElementById("inputtext");
        button.addEventListener('click', () => {
            input=inputtext.value;
            if(!input) return;
            document.getElementById("button").innerHTML = " Generating QR code.... ";
            setTimeout(() => {
                document.getElementById("button").innerHTML = "QR code Generated! ";                
            }, 2000);
           str=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input}`;
            document.getElementById("img1").innerHTML=`<img src=${str} alt="imgg">`;
            
        })

        inputtext.addEventListener('keyup',()=>{
            if(!inputtext.value){
                button.innerText="Generate QR Code...";
                document.getElementById("img1").innerHTML="";
            }
        })