const createGemDiv = document.getElementById("create-gem-div");
const leftBlock = document.getElementById("left-block");
const rightBlock = document.getElementById("right-block");
const createGemBlock = document.getElementById("create-gem-block");

const cancelCreateGemButton = document.getElementById("cancel-create-gem-button");

const createGemTitle = document.getElementById("create-gem-title");
const editGemTitle = document.getElementById("edit-gem-title");

const cardEditButtons = document.getElementsByClassName("card-edit-button");
const cardDeleteButton = document.getElementById("card-delete-button");

const editButton = document.getElementById("edit-gem-button");

const createButton = document.getElementById("create-gem-button");
const findButton = document.getElementById("find-button");
const cancelFindButton = document.getElementById("cancel-find-button");
const sortByPurityAscButton = document.getElementById("sort-by-purity-asc-button");
const sortByPurityDescButton = document.getElementById("sort-by-purity-desc-button");
const findInput = document.getElementById("find-input-name");

const nameInput = document.getElementById("create-input-name");
const weightInput = document.getElementById("create-input-weight");
const priceInput = document.getElementById("create-input-price");
const hardnessInput = document.getElementById("create-input-hardness");
const purityInput = document.getElementById("create-input-purity");
const sortInput = document.getElementById("create-input-sort");
const mineralityInput = document.getElementById("create-input-minerality");
const gemsContainer = document.getElementById("gems-container");
const totalPriceContainer = document.getElementById("total-price-container");

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

createGemDiv.addEventListener("click", (event) => {
    event.preventDefault();

    rightBlock.style.display = "none";
    leftBlock.style.display = "none";
    createGemBlock.style.display = "block";
    createGemDiv.style.display = "none";
});

cancelCreateGemButton.addEventListener("click", (event) => {
    event.preventDefault();

    createGemBlock.style.display = "none";
    rightBlock.style.display = "block";
    leftBlock.style.display = "block";
    createGemDiv.style.display = "block";
});

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

    createGemBlock.style.display = "none";
    rightBlock.style.display = "block";
    leftBlock.style.display = "block";
    createGemDiv.style.display = "block";
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
    const totalPrice = gems.reduce((accumulator, gem) => accumulator + parseFloat(gem.price), 0);
    renderTotalPrice(totalPrice);
};

const getGemId = (id) => `gem-${id}`;

const gemTemplate = ({ id, name, weight, price, hardness, purity, sort, minerality }) => `
<li id="${getGemId(id)}">
  <img
    src="https://us.123rf.com/450wm/ryzhi/ryzhi1609/ryzhi160900080/64720839-realistic-shining-green-emerald-jewel-isolated-on-white-background-colorful-gemstone-that-can-be-use.jpg"
    class="card-image" alt="gem_image">
  <div class="card-body">
    <h4 class="card-name">${name}</h4>
    <p class="card-text">Sort: ${sort}</p>
    <p class="card-text">Minerality: ${minerality}</p>
    <p class="card-text">Weight: ${weight} carats</p>
    <p class="card-text">Price: ${price} $</p>
    <p class="card-text">Hardness: ${hardness} by Mohs</p>
    <p class="card-text">Purity: ${purity} cond. units</p> 
  </div>
  <div class="card-buttons">    
    <button onclick="updateGem('${id}')">Edit</button>     
    <button onclick="deleteGem('${id}')">Delete</button>   
  </div>  
</li>`;

function deleteGem(id) {
    console.log(id);
    console.log(gems);
    for (let i = 0; i < gems.length; i++) {
        if (gems[i].id === id) {
            gems.splice(i, 1);
            break;
        }
    }
    countTotalPrice(gems);
    renderGemsList(gems);
}

editButton.addEventListener("click", (event) => {
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

    createGemBlock.style.display = "none";
    rightBlock.style.display = "block";
    leftBlock.style.display = "block";
    createGemDiv.style.display = "block";
});

function updateGem(id) {
    let gemToUpdate;
    for (let i = 0; i < gems.length; i++) {
        if (gems[i].id === id) {
            gemToUpdate = gems[i];
            break;
        }
    }

    createGemBlock.style.display = "block";
    rightBlock.style.display = "none";
    leftBlock.style.display = "none";
    createGemDiv.style.display = "none";
    createGemTitle.style.display = "none";
    editGemTitle.style.display = "block";
    cancelCreateGemButton.style.display = "none";
    editButton.style.display = "block";
    createButton.style.display = "none";

    nameInput.value = gemToUpdate.name;
    weightInput.value = gemToUpdate.weight;
    priceInput.value = gemToUpdate.price;
    hardnessInput.value = gemToUpdate.hardness;
    purityInput.value = gemToUpdate.purity;

    deleteGem(id);
}

const totalPriceTemplate = (totalPrice) => `<h3><b>${totalPrice} $</b></h3>`;

const renderTotalPrice = (totalPrice) => {
    totalPriceContainer.innerHTML = "";
    totalPriceContainer.insertAdjacentHTML(
        "afterbegin",
        totalPriceTemplate(totalPrice)
    );
};

const clearInputs = () => {
    nameInput.value = "";
    weightInput.value = "";
    priceInput.value = "";
    hardnessInput.value = "";
    purityInput.value = "";
};

const addGemToPage = ({ id, name, weight, price, hardness, purity, sort, minerality }) => {
    gemsContainer.insertAdjacentHTML(
        "afterbegin",
        gemTemplate({ id, name, weight, price, hardness, purity, sort, minerality })
    );
};

const getInputValues = () => {
    // if (validateInputForms()) {
    return {
        name: nameInput.value,
        weight: weightInput.value,
        price: priceInput.value,
        hardness: hardnessInput.value,
        purity: purityInput.value,
        sort: sortInput.value,
        minerality: mineralityInput.value
    }
    // };
};

const renderGemsList = (gems) => {
    gemsContainer.innerHTML = "";
    for (const i in gems) {
        addGemToPage(gems[i]);
    }
};

const validateInputForms = () => {
    if (!nameInput.value.trim().length) {
        alert("Field NAME cannot be empty")
        return false;
    }
    if (!weightInput.value.trim().length) {
        alert("Field WEIGHT cannot be empty")
        return false;
    }
    if (!priceInput.value.trim().length) {
        alert("Field PRICE cannot be empty")
        return false;
    }
    if (!hardnessInput.value.trim().length) {
        alert("Field HARDNESS cannot be empty")
        return false;
    }
    if (hardnessInput.value < 10) {
        alert("Hardness cannot be < 10")
        return false;
    }
    if (!purityInput.value.trim().length) {
        alert("Field PURITY cannot be empty")
        return false;
    }
    if (purityInput.value < 5) {
        alert("Purity cannot be < 5")
        return false;
    }
    return true;
};



















