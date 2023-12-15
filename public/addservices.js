const upperDropdown = document.getElementById('upperDropdown');
    const lowerDropdown = document.getElementById('lowerDropdown');
  
    
    const subOptions = {
        plumbing: ['Pipe Installation', 'Fixture Repairs', 'Drain Cleaning', 'Water Heater Services'],
        carpentry: ['Furniture Making', 'Cabinetry', 'Wooden Flooring', 'Deck Construction'],
        HomeCleaning: ['General Cleaning','Deep Cleaning','Specialized Services','Post-Construction Cleanup'],
        PaintServices: ['Interior Painting','Exterior Painting','Color Consultation','Surface Preparation'],
        Electrician: ['Wiring Installation','Electrical Repairs','Lighting Solutions','Electrical Appliance Setup'],
        WaterPurification: ['Reverse Osmosis Systems','Filtration Systems','Water Softening','Routine Inspections'],
        InteriorDesign: ['Space Planning','Color Consultation','Furniture Selection','Decorative Elements'],
        KitchenCleaning: ['Deep Cleaning','Appliance Sanitization','Grout & Tile Cleaning','Organizing Services'],
        PestControlServices: ['Insect Control','Rodent Removal','Preventive Measures','Eco-Friendly Solutions'],
        RoofingRepairs: ['Leak Repair','Shingle Replacement','Gutter Maintenance','Flashing Repair'],
        CivilWork: ['Foundation Repair','Structural Maintenance','Concrete Work','Demolition Services'],
        HVACServices: ['Installation','Repair & Maintenance','Air Quality Enhancement','Efficiency Optimization'],
    };
  
    
    function updateLowerDropdown() {
      const selectedOption = upperDropdown.value;
      const options = subOptions[selectedOption];
  
     
      lowerDropdown.innerHTML = '';
  
      options.forEach((option) => {
        const newOption = document.createElement('option');
        newOption.value = option;
        newOption.textContent = option;
        lowerDropdown.appendChild(newOption);
      });
    }
  
   
    upperDropdown.addEventListener('change', updateLowerDropdown);
  
    
    updateLowerDropdown();