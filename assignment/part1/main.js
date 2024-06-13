// ~ Daniel Poh Ting Fong TP056258 ~ //
// Part 1 - Imperative Programming

// 0.0 Importing Data from JSON File
const data = require('./my.json');
const readline = require('readline');


// 1.0 Search & Display City Information

// Function 1 - User Input Approach
function searchAndDisplayCityInformation() {
    const inter1 = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let wrongInputCnt = 0;

    function askQuestion() {
        inter1.question('Enter city name of your choice: ', function (cityName) {
            let cityFound = false;
            for (const city of data) {
                if (city.city.toLowerCase() === cityName.toLowerCase()) {
                    cityFound = true;
                    const newline = '\n';
                    const decoline_repeater = "-".repeat(45);

                    // JSON format
                    console.log(newline);
                    console.log("JSON Format");
                    console.log(decoline_repeater);
                    console.log(city);
                    console.log(newline);

                    // Command Line format
                    console.log("CLI Format");
                    console.log(decoline_repeater);
                    console.log(`| City:               ${city.city.padEnd(21)} |`);
                    console.log(`| Latitude:           ${city.lat.padEnd(21)} |`);
                    console.log(`| Longitude:          ${city.lng.padEnd(21)} |`);
                    console.log(`| Country:            ${city.country.padEnd(21)} |`);
                    console.log(`| ISO2:               ${city.iso2.padEnd(21)} |`);
                    console.log(`| Admin Name:         ${city.admin_name.padEnd(21)} |`);
                    console.log(`| Capital:            ${city.capital.padEnd(21)} |`);
                    console.log(`| Population:         ${city.population.toString().padEnd(21)} |`);
                    console.log(`| Population Proper:  ${city.population_proper.toString().padEnd(21)} |`);
                    console.log(decoline_repeater);
                    break;
                }
            }

            if (!cityFound) {
                wrongInputCnt++;
                if (wrongInputCnt > 3) {
                    console.log("---------------------------------------");
                    console.log("//     City not found! Exiting...     //");
                    console.log("---------------------------------------");
                    inter1.close();
                } else {
                    console.log("---------------------------------------");
                    console.log("// City not found! Please try again. //");
                    console.log("---------------------------------------");
                    askQuestion();
                }
            } else {
                inter1.close();
            }
        });
    }
    askQuestion();
}

// Function 2 - Different Approach just call the function with city name
function sADCI2(cityname) {
    for (let city = 0; city < data.length; city++) {
        citydata = data[city];
        const newline = '\n';
        const decoline_repeater = "-".repeat(45);

        if (citydata.city === cityname) {

            // JSON format
            console.log(newline);
            console.log("JSON Format")
            console.log(decoline_repeater);
            console.log(citydata);
            console.log(newline);

            // Command Line format
            console.log("CLI Format");
            console.log(decoline_repeater);
            console.log(`| City:               ${citydata.city.padEnd(21)} |`);
            console.log(`| Latitude:           ${citydata.lat.padEnd(21)} |`);
            console.log(`| Longitude:          ${citydata.lng.padEnd(21)} |`);
            console.log(`| Country:            ${citydata.country.padEnd(21)} |`);
            console.log(`| ISO2:               ${citydata.iso2.padEnd(21)} |`);
            console.log(`| Admin Name:         ${citydata.admin_name.padEnd(21)} |`);
            console.log(`| Capital:            ${citydata.capital.padEnd(21)} |`);
            console.log(`| Population:         ${citydata.population.toString().padEnd(21)} |`);
            console.log(`| Population Proper:  ${citydata.population_proper.toString().padEnd(21)} |`)
            console.log(decoline_repeater);

        }
    }
}


// 1.1 Calculate Total Population

// Function 1 
function calculateTotalPopulation() {
    let totalPopulation = 0;
    let totalPopulationProper = 0;

    for (const city of data) {
        // coersion to convert string to number
        totalPopulation += +city.population;
        totalPopulationProper += +city.population_proper;
    }
    return "Total Population: " + totalPopulation + "\nTotal Population Proper: " + totalPopulationProper;
}

// Function 2
function cTP2() {
    let totalPopulation = 0;
    let totalPopulationProper = 0;
    for (let city = 0; city < data.length; city++) {
        totalPopulation += +data[city].population;
        totalPopulationProper += +data[city].population_proper;
    }
    return "Total Population: " + totalPopulation + "\nTotal Population Proper: " + totalPopulationProper;
}


// 1.2 Relationship Between Two Cities (Comparison)

// Calculate distance between two cities - Formulas
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Earth Radius in KM
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance.toFixed(2);
}

function deg2rad(deg) {
    return deg * (Math.PI / 180);
}

// Function 1 
function rbTCa(city1, city2) {
    const inter2 = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let wrongInputCnt = 0;

    function askQuestion() {
        inter2.question(`Enter a first city to compare: `, function (name1) {
            inter2.question(`Enter a second city to compare: `, function (name2) {
                let city1Data = {};
                let city2Data = {};

                for (const city of data) {
                    if (city.city === name1) {
                        city1Data = city;
                    } else if (city.city === name2) {
                        city2Data = city;
                    }
                }

                if (Object.keys(city1Data).length === 0 || Object.keys(city2Data).length === 0) {
                    wrongInputCnt++;
                    if (wrongInputCnt > 2) {
                        console.log("--------------------------------------------");
                        console.log("//     Invalid city names! Exiting...     //");
                        console.log("--------------------------------------------");
                        inter2.close();
                    } else {
                        console.log("-------------------------------------------");
                        console.log("// Invalid city names! Please try again. //");
                        console.log("-------------------------------------------");
                        askQuestion();
                    }
                } else {
                    const comparisonTable = [
                        { City: city1Data.city, Population: city1Data.population, Latitude: city1Data.lat, Longitude: city1Data.lng },
                        { City: city2Data.city, Population: city2Data.population, Latitude: city2Data.lat, Longitude: city2Data.lng }
                    ];

                    console.table(comparisonTable);

                    if (city1Data.population > city2Data.population) {
                        console.log(`* ${city1} has a larger population than ${city2}.`);
                    } else if (city1Data.population < city2Data.population) {
                        console.log(`* ${city2} has a larger population than ${city1}.`);
                    } else {
                        console.log(`* ${city1} and ${city2} have the same total population!`);
                    }

                    // Calculate distance between cities
                    const distance = calculateDistance(city1Data.lat, city1Data.lng, city2Data.lat, city2Data.lng);
                    console.log(`* The distance between ${city1} and ${city2} is approximately ${distance} km.`);

                    inter2.close();
                }
            });
        });
    }
    askQuestion();
}

// Function 2
function rbTCa2(city1, city2) {
    let city1Data = {};
    let city2Data = {};

    for (let city = 0; city < data.length; city++) {
        if (data[city].city === city1) {
            city1Data = data[city];
        } else if (data[city].city === city2) {
            city2Data = data[city];
        }
    }

    if (city1Data.population > city2Data.population) {
        return `* ${city1} has a larger population than ${city2}.`;
    } else if (city1Data.population < city2Data.population) {
        return `* ${city2} has a larger population than ${city1}.`;
    } else {
        return `* ${city1} and ${city2} have the same total of population!`;
    }
}

// Test Cases
// console.log('1.1 | Search & Display City Information');
// searchAndDisplayCityInformation();
// sADCI2('Kuala Lumpur');

// console.log('1.2 | Calculate Total Population');
// console.log(calculateTotalPopulation());
// console.log(cTP2());

console.log('1.3 | Relationship Between Two Cities');
rbTCa('Kangar', 'Kuala Lumpur');
// console.log(rbTCa2('Kangar', 'Kuala Lumpur'));


