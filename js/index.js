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
const cancelEditButton = document.getElementById("cancel-edit-gem-button");

const createButton = document.getElementById("create-gem-button");
const findButton = document.getElementById("find-button");
const cancelFindButton = document.getElementById("cancel-find-button");
const sortByPurityAscButton = document.getElementById("sort-by-purity-asc-button");
const sortByPurityDescButton = document.getElementById("sort-by-purity-desc-button");
const findInput = document.getElementById("find-input-name");

const uniqueNameInput = document.getElementById("create-input-name");
const weightInput = document.getElementById("create-input-weight");
const priceInput = document.getElementById("create-input-price");
const hardnessInput = document.getElementById("create-input-hardness");
const purityInput = document.getElementById("create-input-purity");
const sortInput = document.getElementById("create-input-sort");
const gemsContainer = document.getElementById("gems-container");
const totalPriceContainer = document.getElementById("total-price-container");

createGemDiv.addEventListener("click", (event) => {
    event.preventDefault();

    rightBlock.style.display = "none";
    leftBlock.style.display = "none";
    createGemBlock.style.display = "block";
    createGemDiv.style.display = "none";
    cancelEditButton.style.display = "none";
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

    const { uniqueName, weight, price, hardness, purity, sort } = getInputValues();

    clearInputs();

    postGem({
        uniqueName,
        weight,
        price,
        hardness,
        purity,
        sort
    }).then((res) => {
        if (res.status === 400) {
            throw new Error("Gem with name '" + uniqueName + "' already exists!");
        }

        refetchAllGems();

        createGemBlock.style.display = "none";
        rightBlock.style.display = "block";
        leftBlock.style.display = "block";
        createGemDiv.style.display = "block";

    }).catch(e => alert(e));

});

findButton.addEventListener("click", async (event) => {
    event.preventDefault();

    const allGems = await getAllGems();
    let foundGems = [];

    for (const i in allGems) {
        if (allGems[i].uniqueName.search(findInput.value) !== -1) {
            foundGems.push(allGems[i]);
        }
    }

    renderGemsList(foundGems);
    countTotalPrice(foundGems);
});

cancelFindButton.addEventListener("click", (event) => {
    event.preventDefault();

    findInput.value = "";

    refetchAllGems();
});

sortByPurityDescButton.addEventListener("click", async (event) => {
    event.preventDefault();

    const allGems = Object.values(await getAllGems());

    console.log(allGems);

    const sortedGems = allGems.sort((gem1, gem2) => {
        return gem1.purity - gem2.purity;
    });

    renderGemsList(sortedGems);
    countTotalPrice(sortedGems);
});

sortByPurityAscButton.addEventListener("click", async (event) => {
    event.preventDefault();

    const allGems = Object.values(await getAllGems());

    console.log(allGems);

    const sortedGems = allGems.sort((gem1, gem2) => {
        return gem2.purity - gem1.purity;
    });

    renderGemsList(sortedGems);
    countTotalPrice(sortedGems);
});

const countTotalPrice = (gems) => {
    let totalPrice = 0;
    for (const i in gems) {
        totalPrice += gems[i].price;
    }
    renderTotalPrice(totalPrice);
};

const gemTemplate = ({ id, uniqueName, weight, price, hardness, purity, sort }) => `
<li id="${id}">
  <img
    src="https://us.123rf.com/450wm/ryzhi/ryzhi1609/ryzhi160900080/64720839-realistic-shining-green-emerald-jewel-isolated-on-white-background-colorful-gemstone-that-can-be-use.jpg"
    class="card-image" alt="gem_image">
  <div class="card-body">
    <h4 class="card-name">${uniqueName}</h4>
    <p class="card-text">Sort: ${sort}</p>
    <p class="card-text">Weight: ${weight} carats</p>
    <p class="card-text">Price: ${price} $</p>
    <p class="card-text">Hardness: ${hardness} by Mohs</p>
    <p class="card-text">Purity: ${purity} cond. units</p> 
  </div>
  <div class="card-buttons">   
    <button onclick="editGemById(${id})">Edit</button>     
    <button onclick="deleteGemById('${id}')">Delete</button>   
  </div>  
</li>`;

function deleteGemById(id) {
    deleteGem(id).then(refetchAllGems);
}

let idOfGemToEdit;

editButton.addEventListener("click", (event) => {
    event.preventDefault();

    const body = getInputValues();

    clearInputs();

    editGem(idOfGemToEdit, body).then(refetchAllGems);

    createGemBlock.style.display = "none";
    rightBlock.style.display = "block";
    leftBlock.style.display = "block";
    createGemDiv.style.display = "block";
    createGemTitle.style.display = "block";
    editGemTitle.style.display = "none";
    editButton.style.display = "none";
    createButton.style.display = "block";

});

cancelEditButton.addEventListener("click", (event) => {
    event.preventDefault();

    clearInputs();

    createGemBlock.style.display = "none";
    rightBlock.style.display = "block";
    leftBlock.style.display = "block";
    createGemDiv.style.display = "block";
    createGemTitle.style.display = "block";
    editGemTitle.style.display = "none";
    editButton.style.display = "none";
    createButton.style.display = "block";
    cancelEditButton.style.display = "block";
    cancelCreateGemButton.style.display = "block";
});

async function editGemById(id) {
    const allGems = await getAllGems();
    let gemToEdit;

    id = parseInt(id);

    for (const i in allGems) {
        if (parseInt(allGems[i].id) === parseInt(id)) {
            gemToEdit = allGems[i];
            break;
        }
    }

    idOfGemToEdit = id;

    createGemBlock.style.display = "block";
    rightBlock.style.display = "none";
    leftBlock.style.display = "none";
    createGemDiv.style.display = "none";
    createGemTitle.style.display = "none";
    editGemTitle.style.display = "block";
    editButton.style.display = "block";
    createButton.style.display = "none";
    cancelEditButton.style.display = "block";
    cancelCreateGemButton.style.display = "none";

    uniqueNameInput.value = gemToEdit.uniqueName;
    weightInput.value = gemToEdit.weight;
    priceInput.value = gemToEdit.price;
    hardnessInput.value = gemToEdit.hardness;
    purityInput.value = gemToEdit.purity;
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
    uniqueNameInput.value = "";
    weightInput.value = "";
    priceInput.value = "";
    hardnessInput.value = "";
    purityInput.value = "";
};

const addGemToPage = ({ id, uniqueName, weight, price, hardness, purity, sort }) => {
    gemsContainer.insertAdjacentHTML(
        "afterbegin",
        gemTemplate({ id, uniqueName, weight, price, hardness, purity, sort })
    );
};

const getInputValues = () => {
    if (validateInputForms()) {
        return {
            uniqueName: uniqueNameInput.value,
            weight: weightInput.value,
            price: priceInput.value,
            hardness: hardnessInput.value,
            purity: purityInput.value,
            sort: sortInput.value
        }
    };
};

const renderGemsList = (gems) => {
    gemsContainer.innerHTML = "";
    for (const i in gems) {
        addGemToPage(gems[i]);
    }
};

const validateInputForms = () => {
    if (!uniqueNameInput.value.trim().length) {
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

const refetchAllGems = async () => {
    const allGems = await getAllGems();
    renderGemsList(allGems);
    countTotalPrice(allGems);
};




// ================================================================================================
// WORKING WITH SERVER
// ================================================================================================

const BASE_URL = "http://localhost:8080/api";
const RESOURCE_URL = `${BASE_URL}/gems`;

const baseRequest = async ({ urlPath = "/", method = "GET", body = null }) => {
    try {
        const requestParams = {
            method,
            headers: {
                'Content-Type': 'application/json'
            }
        };
        if (body) {
            requestParams.body = JSON.stringify(body);
        };
        return await fetch(`${RESOURCE_URL}${urlPath}`, requestParams);

    } catch (error) {

    }
};

const getAllGems = async () => {
    const rawResponse = await baseRequest({ method: "GET" });
    return rawResponse.json();
};

const postGem = (body) => {
    return baseRequest({ method: "POST", body });
};

const editGem = (id, body) => {
    return baseRequest({ urlPath: `/${id}`, method: "PUT", body });
};

const deleteGem = (id) => {
    return baseRequest({ urlPath: `/${id}`, method: "DELETE" });
};



// =========================================================================================
// EXECUTED CODE
// =========================================================================================

refetchAllGems();

(function () {
    createGemBlock.style.display = "none";
    rightBlock.style.display = "block";
    leftBlock.style.display = "block";
    createGemDiv.style.display = "block";
})();















