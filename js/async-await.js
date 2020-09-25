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

const addBand = (name) => {
    const callback = (resolve, reject) => {
        setTimeout(() => {
            bands.push({name});
            resolve(name);
        }, 2000);
    }
    return new Promise(callback);
};

const runAsyncMethods = async () => {
    try{
        await addBand('Queen');
        await addBand('AC/DC');
        getBands();
    } catch(error){
        console.error(error);
    }
};

runAsyncMethods();
