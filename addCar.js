const button = document.getElementById("add-button");
const postAdBtn = document.getElementById("post-ad-btn")
const burger_button = document.getElementById("burger-button");

const brand = document.getElementById("brand");
const model = document.getElementById("model");
const first_registration_date = document.getElementById("first_registration_date");
const body_type = document.getElementById("body_type");
const fuel_type = document.getElementById("fuel_type");
const gearbox = document.getElementById("gearbox");
const engine_capacity = document.getElementById("engine_capacity");
const power_kw= document.getElementById("power_kw");
const color = document.getElementById("color");
const comment = document.getElementById("comment");
const price = document.getElementById("price");
const contact_number = document.getElementById("contact_number");
const country = document.getElementById("country");
const city = document.getElementById("city");
const image_url = document.getElementById("image_url");
const ad_link = document.getElementById("ad_link");

const success_message = document.getElementById("success_message");

const addCar = async () =>  {
     
    const car ={
        brand: brand.value,
        model: model.value,
        first_registration_date: first_registration_date.value,
        body_type: body_type.value,
        fuel_type: fuel_type.value,
        gearbox: gearbox.value,
        engine_capacity: engine_capacity.value,
        power_kw: power_kw.value,
        color: color.value,
        comment: comment.value,
        price: price.value,
        contact_number: contact_number.value,
        country: country.value,
        city: city.value,
        image_url: image_url.value,
        ad_link: ad_link.value,
    };

try{
    await fetch("https://655cf28725b76d9884fe31d6.mockapi.io/cars",
    {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(car),
    }
);

success_message.textContent = "The request has been submitted successfully!";

console.log(success_message.textContent);

setTimeout(() => {
    window.location.replace('./index.html')
}, 3000)

}catch(err) {
    console.log(err);
}

};


button.addEventListener("click", addCar);

burger_button.addEventListener('click', ()=> {
    
    navbar.classList.toggle("navbar-active");
});

postAdBtn.addEventListener('click', () => {
    window.location.replace("./add-car.html");
  });

    