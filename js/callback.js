const bands = [
    { name: 'Iron Maiden'},
    { name: 'Megadeth'},
];

const bandList = document.getElementById('bandList');

const getBands = () => {
    setInterval(() => {  
        let output = '';
        bands.forEach((item, idx) => {
            output += `<li>${item.name}</li>`;
        });

        bandList.innerHTML = output;

    }, 1000);
};

const addBand = (name, callback) => {
    setTimeout(() => {
        bands.push({name});
        callback();
    }, 2000);
};

addBand('Queen', getBands);