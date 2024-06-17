// ~ Daniel Poh Ting Fong TP056258 ~ //
// Part 1 - Imperative Programming

// Additional - CLI:
function displayMenu() {
    console.log(`
         =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
                         
                     -    Malaysian Cities Database Program  -

         =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
            
                     1. Search and display city information
                     2. Calculate the total population
                     3. Find the relationship between two cities
                     4. Exit
             
         =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    `);
}

function handleMenuInput(choice) {
    switch (choice) {
        case '1':
            searchAndDisplayCityInformation();
            break;
        case '2':
            console.log(calculateTotalPopulation());
            break;
        case '3':
            rbTCa();
            break;
        case '4':
            console.log('Exiting Program...');
            process.exit(0);
            break;
        default:
            console.log('Invalid option. Please try again!');
            main();
    }
}

function main() {
    displayMenu();
    const mainMenu = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    mainMenu.question('Select menu option: ', function (choice) {
        mainMenu.close();
        console.clear();
        handleMenuInput(choice);
    });
}


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
        console.log("---------------------------------------------------------");
        inter1.question('Enter city name of your choice: ', function (cityName) {
            console.log("---------------------------------------------------------");
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
                    main();
                } else {
                    console.log("---------------------------------------");
                    console.log("// City not found! Please try again. //");
                    console.log("---------------------------------------");
                    askQuestion();
                }
            } else {
                inter1.close();
                main();
            }
        });
    }
    askQuestion();
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

    console.log("----------------------------------------------------------------------------------------------------");
    console.log("\n");
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
function rbTCa() {
    const inter2 = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let wrongInputCnt = 0;

    function askQuestion() {
        console.log("----------------------------------------------------------------------------------------------------");
        console.log("\n");
        inter2.question(`Enter a first city to compare: `, function (name1) {
            inter2.question(`Enter a second city to compare: `, function (name2) {

                console.log("\n");
                console.log("----------------------------------------------------------------------------------------------------");

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
                        console.log("                   //          Invalid city names! Exiting...              //              ");
                        console.log("----------------------------------------------------------------------------------------------------");
                        inter2.close();
                    } else {
                        console.log("                   //          Invalid city names! Please try again.       //              ");
                        askQuestion();
                    }
                } else {
                    const comparisonTable = [
                        { City: city1Data.city, Population: city1Data.population, Latitude: city1Data.lat, Longitude: city1Data.lng },
                        { City: city2Data.city, Population: city2Data.population, Latitude: city2Data.lat, Longitude: city2Data.lng }
                    ];

                    console.table(comparisonTable);

                    if (city1Data.population > city2Data.population) {
                        console.log(`* ${city1Data.city} has a larger population than ${city2Data.city}.`);
                    } else if (city1Data.population < city2Data.population) {
                        console.log(`* ${city2Data.city} has a larger population than ${city1Data.city}.`);
                    } else {
                        console.log(`* ${city1Data.city} and ${city2Data.city} have the same total population!`);
                    }

                    // Calculate distance between cities
                    const distance = calculateDistance(city1Data.lat, city1Data.lng, city2Data.lat, city2Data.lng);
                    console.log(`* The distance between ${city1Data.city} and ${city2Data.city} is approximately ${distance} km.`);

                    inter2.close();
                    main();
                }
            });
        });
    }
    askQuestion();
}


// Test Cases

// console.log('1.1 | Search & Display City Information');
// searchAndDisplayCityInformation();
// sADCI2('Kuala Lumpur');

// console.log('1.2 | Calculate Total Population');
// console.log(calculateTotalPopulation());
// console.log(cTP2());

// console.log('1.3 | Relationship Between Two Cities');
// rbTCa('Kangar', 'Kuala Lumpur');
// console.log(rbTCa2('Kangar', 'Kuala Lumpur'));



// Run Program
main();


