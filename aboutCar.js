const button = document.getElementById("add-new-car");
const burger_button = document.getElementById("burger-button");

const carId = localStorage.getItem("carId");

const carBrand = document.getElementById("car-brand");
const carModel = document.getElementById("car-model");
const price = document.getElementById("price");
const carImage = document.getElementById("car-image");
const firstRegistrationDate = document.getElementById("first-registration-date");
const bodyType = document.getElementById("body-type");
const fuelType = document.getElementById("fuel-type");
const gearbox = document.getElementById("gearbox");
const engineCapacity = document.getElementById("engine-capacity");
const powerKw = document.getElementById("power-kw");
const color = document.getElementById("color");
const comment = document.getElementById("comment");
const contactNumber = document.getElementById("contact-number");
const country = document.getElementById("country");
const city = document.getElementById("city");
const adLink = document.getElementById("ad-link");

  console.log(carId);

  const carDetails = async () => {
    const response = await fetch(`https://655cf28725b76d9884fe31d6.mockapi.io/cars/${carId}`);
    const car = await response.json();

    carBrand.textContent = car.brand;
    carModel.textContent = car.model;
    price.textContent =  car.price + " €";
    carImage.src = car.image_url;
    firstRegistrationDate.textContent = "First registration: " + car.first_registration_date;
    bodyType.textContent = "Body type: " + car.body_type;
    fuelType.textContent = "Fuel type: " + car.fuel_type;
    gearbox.textContent = "Gearbox: " + car.gearbox;
    engineCapacity.textContent = "Engine capacity: " + car.engine_capacity;
    powerKw.textContent = "Power(kw): " + car.power_kw;
    color.textContent = "Color: " + car.color;
    comment.textContent = "Comment: " + car.comment;
    contactNumber.textContent = "Contact number: " + car.contact_number;
    country.textContent = "Country: " + car.country;
    city.textContent = "City: " + car.city;
    adLink.textContent = "Link to the ad";
    adLink.href = car.ad_link;





  };


  button.addEventListener('click', () => {
    window.location.replace("./add-car.html");
  });
  
  burger_button.addEventListener('click', ()=> {
      
    navbar.classList.toggle("navbar-active");
  });

  carDetails();