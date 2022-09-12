import {
  addGemToPage,
  clearInputs,
  getInputValues,
  renderGemsList,
  renderTotalPrice
} from "./dom_util.js";

const createButton = document.getElementById("create-button");
const findButton = document.getElementById("find-button");
const cancelFindButton = document.getElementById("cancel-find-button");
const sortByPurityAscButton = document.getElementById("sort-by-purity-asc-button");
const sortByPurityDescButton = document.getElementById("sort-by-purity-desc-button");
const findInput = document.getElementById("find-input-name");

let gems = [];
let currentGems = [];

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

  gems.push(newGem);
  currentGems = gems;
  addGemToPage(newGem);
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

  countTotalPrice(gems);
  currentGems = gems;
});

findButton.addEventListener("click", (event) => {
  event.preventDefault();

  const foundGems = gems.filter(gem => gem.name.search(findInput.value) !== -1);

  renderGemsList(foundGems);

  currentGems = foundGems;
  countTotalPrice(foundGems);
});

cancelFindButton.addEventListener("click", (event) => {
  event.preventDefault();

  findInput.value = "";
  renderGemsList(gems);

  countTotalPrice(gems);
  currentGems = gems;
});

sortByPurityDescButton.addEventListener("click", (event) => {
  event.preventDefault();

  const sortedGems = gems.sort((gem1, gem2) => {
    return gem1.purity - gem2.purity;
  });

  renderGemsList(sortedGems);
  currentGems = sortedGems;
});

sortByPurityAscButton.addEventListener("click", (event) => {
  event.preventDefault();

  const sortedGems = gems.sort((gem1, gem2) => {
    return gem2.purity - gem1.purity;
  });

  renderGemsList(sortedGems);
  currentGems = sortedGems;
});

const countTotalPrice = (gems) => {
  const totalPrice = gems.reduce((a, b) => a + parseInt(b.price), 0);
  renderTotalPrice(totalPrice);
}



renderGemsList(gems);
















