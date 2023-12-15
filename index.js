const express = require("express");
const app = express();
const path = require("path");
// const methodOverride = require('method-override')    

// const { v4: uuidv4 } = require('uuid');

// app.use(methodOverride('_method'))
app.use(express.static('public'));
app.use(express.urlencoded ({extended : true}));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let port = 8080;

app.listen(port, ()=> {
    console.log(`Server is listening on port : ${port}`);
});

app.get("/home", (req,res)=>{
    res.render("index.ejs");
});

app.get("/about", (req,res)=>{
    res.render("about.ejs");
});

app.get("/contact", (req,res)=>{
    res.render("contact.ejs");
});

app.get("/addservices", (req,res)=>{
    res.render("addservices.ejs");
});



app.get("/service/Carpentry", (req,res)=>{
    res.render("service.ejs", { mainData : Carpentry , serviceName : "Carpentry Services"});
});

app.get("/service/Plumber", (req,res)=>{
    res.render("service.ejs", { mainData : Plumber , serviceName : "Plumber Services"});
});


app.get("/service/Electrician", (req,res)=>{
    res.render("service.ejs", { mainData : Electrician , serviceName : "Electrical Services"});
});

app.get("/service/PestControlServices", (req,res)=>{
    res.render("service.ejs", { mainData : PestControlServices , serviceName : "Pest Control Services"});
});

app.get("/service/InteriorDesign", (req,res)=>{
    res.render("service.ejs", { mainData : InteriorDesign, serviceName : "Interior Desiging Services" });
});

app.get("/service/HVACServices", (req,res)=>{
    res.render("service.ejs", { mainData : HVACServices , serviceName : "HVACServices"});
});

app.get("/service/CivilWork", (req,res)=>{
    res.render("service.ejs", { mainData : CivilWork , serviceName : "Civil Work Services"});
});

app.get("/service/PaintServices", (req,res)=>{
    res.render("service.ejs", { mainData : PaintServices , serviceName : "Paint Services"});
});

app.get("/service/RoofingRepairs", (req,res)=>{
    res.render("service.ejs", { mainData : RoofingRepairs , serviceName : "Roofing Repairs Services"});
});

app.get("/service/KitchenCleaning", (req,res)=>{
    res.render("service.ejs", { mainData : KitchenCleaning , serviceName : "Kitchen Cleaning Services"});
});

app.get("/service/HomeCleaning", (req,res)=>{
    res.render("service.ejs", { mainData : HomeCleaning , serviceName : "Home Cleaning Services"});
});

app.get("/service/WaterPurification", (req,res)=>{
    res.render("service.ejs", { mainData : WaterPurification , serviceName : "Water Purification Services"});
});







 
  //DATA


const Carpentry = [
    {
        name : "Furniture Making",
        des : "Crafting custom furniture pieces tailored to the client's specifications." 
    },

    {
        name : "Cabinetry",
        des : " Designing and installing kitchen or storage cabinets."
    },

    {
        name : "Wooden Flooring",
        des : "Installing, repairing, or refinishing wooden floors." 
    },

    {
        name : "Deck Construction",
        des : "Building outdoor decks or patios using wood as the primary material."
    }
]

const Electrician = [
    {
        name: "Wiring Installation",
        des: "Installing electrical wiring for new construction or renovation projects."
    },
    {
        name: "Electrical Repairs",
        des: "Diagnosing and fixing electrical faults, ensuring safety and functionality."
    },
    {
        name: "Lighting Solutions",
        des: "Providing solutions for indoor and outdoor lighting installation."
    },
    {
        name: "Electrical Appliance Setup",
        des: "Installing and setting up various electrical appliances."
    }
];

const Plumber = [
    {
        name: "Pipe Installation",
        des: "Installation of pipes for water supply or drainage systems."
    },
    {
        name: "Fixture Repairs",
        des: "Repairing faucets, sinks, showers, and other plumbing fixtures."
    },
    {
        name: "Drain Cleaning",
        des: "Clearing clogs and blockages in drains and pipes."
    },
    {
        name: "Water Heater Services",
        des: "Installation, repair, or maintenance of water heaters."
    }
];

const HomeCleaning = [
    {
        name: "General Cleaning",
        des: "Thorough cleaning of living spaces, including dusting, vacuuming, and mopping."
    },
    {
        name: "Deep Cleaning",
        des: "Intensive cleaning that includes hard-to-reach areas and meticulous cleaning of surfaces."
    },
    {
        name: "Specialized Services",
        des: "Specialized cleaning services for upholstery, carpets, or specific household items."
    },
    {
        name: "Post-Construction Cleanup",
        des: "Removing debris, dust, and residue after construction or renovation projects."
    }
];

const WaterPurification = [
    {
        name: "Reverse Osmosis Systems",
        des: "Installation and maintenance of reverse osmosis systems for water purification."
    },
    {
        name: "Filtration Systems",
        des: "Installation and servicing of water filtration systems to ensure clean drinking water."
    },
    {
        name: "Water Softening",
        des: "Implementing systems to reduce water hardness, improving water quality."
    },
    {
        name: "Routine Inspections",
        des: "Regular check-ups and inspections of purification systems for optimal functionality."
    }
];


const PestControlServices = [
    {
        name: "Insect Control",
        des: "Identification and elimination of various insects and pests."
    },
    {
        name: "Rodent Removal",
        des: "Trapping and removal of rodents like rats and mice."
    },
    {
        name: "Preventive Measures",
        des: "Implementing preventive measures to stop future infestations."
    },
    {
        name: "Eco-Friendly Solutions",
        des: "Using environmentally friendly pest control methods."
    }
];


const InteriorDesign = [
    {
        name: "Space Planning",
        des: "Optimizing space utilization and layout planning for functionality and aesthetics."
    },
    {
        name: "Color Consultation",
        des: "Assistance in selecting suitable color schemes for interiors."
    },
    {
        name: "Furniture Selection",
        des: "Assisting in choosing furniture that complements the design."
    },
    {
        name: "Decorative Elements",
        des: "Selection and placement of decorative elements like artwork and accessories."
    }
];


const HVACServices = [
    {
        name: "Installation",
        des: "Installation of heating and cooling systems according to specifications."
    },
    {
        name: "Repair & Maintenance",
        des: "Routine maintenance and repair services for HVAC systems."
    },
    {
        name: "Air Quality Enhancement",
        des: "Improving indoor air quality through filtration and purification."
    },
    {
        name: "Efficiency Optimization",
        des: "Enhancing system efficiency and reducing energy consumption."
    }
];


const CivilWork = [
    {
        name: "Foundation Repair",
        des: "Repairing and reinforcing building foundations."
    },
    {
        name: "Structural Maintenance",
        des: "Maintenance and repair work for structural integrity."
    },
    {
        name: "Concrete Work",
        des: "Installation and repair of concrete structures."
    },
    {
        name: "Demolition Services",
        des: "Safe and controlled demolition services."
    }
];


const PaintServices = [
    {
        name: "Interior Painting",
        des: "Painting and finishing services for interior walls and surfaces."
    },
    {
        name: "Exterior Painting",
        des: "Painting and protective coatings for exteriors."
    },
    {
        name: "Color Consultation",
        des: "Professional advice on color selection and schemes."
    },
    {
        name: "Surface Preparation",
        des: "Surface cleaning, sanding, and priming before painting."
    }
];


const RoofingRepairs = [
    {
        name: "Leak Repair",
        des: "Locating and fixing leaks in roofs."
    },
    {
        name: "Shingle Replacement",
        des: "Replacing damaged or worn-out shingles."
    },
    {
        name: "Gutter Maintenance",
        des: "Cleaning and repairing gutters to prevent water damage."
    },
    {
        name: "Flashing Repair",
        des: "Repairing and securing flashing around chimneys and vents."
    }
];


const KitchenCleaning = [
    {
        name: "Deep Cleaning",
        des: "Thorough cleaning of kitchen surfaces, appliances, and areas."
    },
    {
        name: "Appliance Sanitization",
        des: "Sanitizing and cleaning kitchen appliances to maintain hygiene."
    },
    {
        name: "Grout & Tile Cleaning",
        des: "Removing grime and dirt from grout and tile surfaces."
    },
    {
        name: "Organizing Services",
        des: "Organizing kitchen spaces and storage areas."
    }
];


