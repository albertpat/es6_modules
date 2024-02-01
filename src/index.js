import WishList from "./wishlist";

const submitForm = document.querySelector("#submitForm");
let makeInput = document.querySelector("#makeInput");
let modelInput = document.querySelector("#modelInput");
let yearInput = document.querySelector("#yearInput");
const paraMake = document.querySelector("#car-make");
const paraModel = document.querySelector("#car-model");
const paraYear = document.querySelector("#car-year");
const removeButton = document.querySelector("#removeBtn");
const wishListElement = document.querySelector("#wishListContainer > ul");
const wishList = new WishList();

submitForm.addEventListener("submit", addCar);

removeButton.addEventListener("click", removeCar);

function showCarDetails(car) {
  paraMake.textContent = car.make;
  paraModel.textContent = car.model;
  paraYear.textContent = car.year;

  removeButton.disabled = false;
  removeButton.setAttribute("data-carId", car.id);
}

function updateDomList() {
 
  wishListElement.innerHTML = "";

  wishList.list.forEach((car) => {
    const carli = document.createElement("li");
    carli.textContent = `Make:${car.make} Mode:${car.model}`;

    carli.addEventListener("click", () => showCarDetails(car));
    wishListElement.appendChild(carli);
  });
}

function addCar(event) {
  event.preventDefault();

  let make = makeInput.value;
  let model = modelInput.value;
  let year = yearInput.value;
  wishList.add(make, model, year);
  updateDomList();
}

function removeCar() {
  let carId = Number(removeButton.getAttribute("data-carId"));
  wishList.remove(carId);

  updateDomList();

  paraMake.textContent = "";
  paraModel.textContent = "";
  paraYear.textContent = "";
  removeButton.disabled = true;
  console.log(carId);
}

