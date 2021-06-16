const fs = require('fs');
const path = require("path");
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const folder = `baza_danych`;

const storeData = (data, path2) => {
    try {
        fs.writeFileSync(path2, JSON.stringify(data))
    } catch (err) {
        console.error(err)
    }
}

const readData = (path2) => {
    try {
        text = fs.readFileSync(path.resolve(__dirname, path2), { encoding: 'utf8', flag: 'r' });
        console.log(text);
    } catch (err) {
        console.error(err)
    }
}

function baza() {
    readline.question(`Baza Danych\no - odczytaj plik\nw - zapisz plik\n> `, answer => {
        if (answer == `w`) {
            readline.question(`Podaj tytuł pliku: `, dataPath => {
                readline.question(`Stworzono plik: ${dataPath}\nZawartość:\n> `, data => {
                    console.log(`Treść pliku ${dataPath}:\n${data}`);
                    dataPath = `./` + folder + `/` + dataPath + `.txt`;
                    storeData(data, dataPath);
                    readline.close();
                });
            });
        } else if (answer == `o`) {
            readline.question(`Podaj tytuł pliku: `, dataPath => {
                console.log(`Treść pliku ${dataPath}:`);
                dataPath = `../` + folder + `/` + dataPath + `.txt`;
                readData(dataPath);
                readline.close();
            });
        } else {
            baza();
        }
    });
}
baza();