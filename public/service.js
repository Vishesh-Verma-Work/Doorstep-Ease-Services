const buttons = document.querySelectorAll("#btn");
const buttons2 = document.querySelectorAll("#btn2");
const opt = document.querySelectorAll(".opt");


buttons.forEach(button => {
    button.addEventListener("click", function() {
        
        opt.forEach(opt => {
            opt.style.display = "inline";
           
         
        });
       

    });
});


