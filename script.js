const inputItems = document.getElementById('itemsTextarea');
const submit = document.getElementById('selectButton');
const output = document.getElementById('output');

// console.log(getRandomFromItems());

function getRandomFromItems(numOfItems) {
    const items = inputItems.value.split('\n');
    let selectedItems = [];
    numOfItems = document.getElementById('numberOfItems').value;
    
    while(selectedItems.length < numOfItems) {
        const selectedIndex = Math.floor(Math.random() * items.length);
        
        if(!selectedItems.includes(items[selectedIndex])) {
            selectedItems.push(items[selectedIndex]);
        }
    }

    output.innerText = selectedItems;

    // console.log(selectedItems)

    // return selectedItems;
}

submit.addEventListener('click', getRandomFromItems);
