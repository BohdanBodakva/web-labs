import {
  addGemToPage,
  clearInputs,
  getInputValues,
  renderGems
} from "./dom_util.js";

const createButton = document.getElementById("create-button");
// const findButton = document.getElementById("find-button");
// const cancelFindButton = document.getElementById("cancel-find-button");

let gems = [];

const addGem = ({ name, weight, price, hardness, purity, sort, minerality }) => {
  const generatedId = uuid.v1();

  const newGem = {
    id: generatedId,
    name,
    weight,
    price,
    hardness,
    purity,
    sort,
    minerality
  }

  for (const gem in gems) {
    if (gem.name == newGem.name) {
      console.log("veres");
    }
  }

  gems.push(newGem);
  addGemToPage(newGem);

  console.log(gems);



}

createButton.addEventListener("click", (event) => {
  event.preventDefault();

  const { name, weight, price, hardness, purity, sort, minerality } = getInputValues();

  clearInputs();

  addGem({
    name,
    weight,
    price,
    hardness,
    purity,
    sort,
    minerality
  });


});

















