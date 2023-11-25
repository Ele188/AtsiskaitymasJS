const cardWrapper = document.getElementById("card-wrapper");
const postAdBtn = document.getElementById("post-ad-btn");
const burger_button = document.getElementById("burger-button");

postAdBtn.addEventListener("click", () => {
  window.location.replace("./add-car.html");
});

burger_button.addEventListener('click', ()=> {
    
  navbar.classList.toggle("navbar-active");
});


const fetchCars = async () => {
    const result = await fetch("https://655cf28725b76d9884fe31d6.mockapi.io/cars");
    
    const cars = await result.json();

    cars.sort((a, b) => a.price - b.price);


    cars.forEach((car) => {
      const carCard = document.createElement("a");
      carCard.href = `./about-car.html`;
      carCard.classList.add("car-card");
      carCard.addEventListener("click", ()=>{
        localStorage.setItem("carId", car.id);
      } )

      const image = document.createElement("img");
      image.src = car.image_url;

      console.log(car)

      const carBrand = document.createElement("h2");
      carBrand.innerHTML = car.brand;

      const bodyType = document.createElement("h3");
      bodyType.innerHTML = car.body_type;

      const price = document.createElement("h4");
      price.innerHTML = car.price + " €";

      carCard.append(image);
      carCard.append(carBrand);
      carCard.append(bodyType);
      carCard.append(price);
      cardWrapper.append(carCard);

      carCard.addEventListener('click', () => {
        console.log(car);
      })
      
      })
    };

    

  fetchCars();