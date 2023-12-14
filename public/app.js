
    // Header

    let hamburger = document.querySelector("#hamburger");
    let headerDown  = document.querySelector(".header-down");
    let cross  = document.querySelector("#cross");
    
    hamburger.addEventListener("click", ()=> {
        headerDown.style.display = "flex";
        hamburger.style.display = "none";
        cross.style.display = "flex";
    });
    
    cross.addEventListener("click", ()=> {
        headerDown.style.display = "none";
        hamburger.style.display = "flex";
        cross.style.display = "none";
    });
    

    function scrollToServices() {
        const servicesSection = document.getElementById('servicesSection');
        servicesSection.scrollIntoView({ behavior: 'smooth' });
    }


    
const Carpentry = {
        username : "RahulKumar94",
        content : "Today's immersion in the realm of Artificial Intelligence was both invigorating and enlightening! Embracing the unfolding possibilities of AI has been an incredible journey. Witnessing how AI is revolutionizing industries across the globe fuels my passion for innovation and technology. The constant evolution in this field excites me - the potential to create, improve, and impact lives is immense. #AI #Innovation #TechEnthusiast",
    }

 