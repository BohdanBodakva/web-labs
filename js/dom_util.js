const nameInput = document.getElementById("create-input-name");
const weightInput = document.getElementById("create-input-weight");
const priceInput = document.getElementById("create-input-price");
const hardnessInput = document.getElementById("create-input-hardness");
const purityInput = document.getElementById("create-input-purity");
const sortInput = document.getElementById("create-input-sort");
const mineralityInput = document.getElementById("create-input-minerality");
const gemsContainer = document.getElementById("gems-container");

const getGemId = (id) => `gem-${id}`;

const gemTemplate = ({ id, name, weight, price, hardness, purity, sort, minerality }) => `
<li id="${getGemId(id)}">
  <img
    src="https://us.123rf.com/450wm/ryzhi/ryzhi1609/ryzhi160900080/64720839-realistic-shining-green-emerald-jewel-isolated-on-white-background-colorful-gemstone-that-can-be-use.jpg"
    class="card-image" alt="gem image">
  <div class="card-body">
    <h4 class="card-name">${name}</h4>
    <p class="card-text">Sort: ${sort}</p>
    <p class="card-text">Minerality: ${minerality}</p>
    <p class="card-text">Weight: ${weight} carats</p>
    <p class="card-text">Price: ${price} $</p>
    <p class="card-text">Hardness: ${hardness} by Mohs</p>
    <p class="card-text">Purity: ${purity} cond. units</p> 
  </div>
</li>`;

export const clearInputs = () => {
  nameInput.value = "";
  weightInput.value = "";
  priceInput.value = "";
  hardnessInput.value = "";
  purityInput.value = "";
};

export const addGemToPage = ({ id, name, weight, price, hardness, purity, sort, minerality }) => {
  gemsContainer.insertAdjacentHTML(
    "afterbegin",
    gemTemplate({ id, name, weight, price, hardness, purity, sort, minerality })
  );
};

export const getInputValues = () => {
  return {
    name: nameInput.value,
    weight: weightInput.value,
    price: priceInput.value,
    hardness: hardnessInput.value,
    purity: purityInput.value,
    sort: sortInput.value,
    minerality: mineralityInput.value
  };
};

export const renderGems = (gem) => {
  gemsContainer.innerHTML = "";

  for (const gem of gems) {
    addItemToPage(gem);
  }
}




