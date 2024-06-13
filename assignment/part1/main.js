// ~ Daniel Poh Ting Fong TP056258 ~ //
// Part 1 - Imperative Programming

// 0.0 Importing Data from JSON File
const data = require('./my.json');


// 1.0 Search & Display City Information

// Function 1
function searchAndDisplayCityInformation(cityName) {
    for (const city of data) {
        if (city.city === cityName) {
            console.log(city);
        }
    }
}


// Function 2
function sADCI2(cityname) {
    for (let city = 0; city < data.length; city++) {
        citydata = data[city];
        if (citydata.city === cityname) {
            console.log(citydata);
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


// 1.2 Relationship Between Two Cities (Could be Comparison)

// Function 1
// Population
function rbTCa(city1, city2) {
    let city1Data = {};
    let city2Data = {};

    for (const city of data) {
        if (city.city === city1) {
            city1Data = city;
        } else if (city.city === city2) {
            city2Data = city;
        }
    }

    if (city1Data.population > city2Data.population) {
        return `${city1} has a larger population than ${city2}.`;
    } else if (city1Data.population < city2Data.population) {
        return `${city2} has a larger population than ${city1}.`;
    }
    return `${city1} and ${city2} have the same total of population!`;
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
        return `${city1} has a larger population than ${city2}.`;
    } else if (city1Data.population < city2Data.population) {
        return `${city2} has a larger population than ${city1}.`;
    } else {
        return `${city1} and ${city2} have the same total of population!`;
    }
}



// Test Cases
// console.log('1.1 | Search & Display City Information');
// console.log(searchAndDisplayCityInformation('Kangar'));
// console.log(searchAndDisplayCityInformation('Kuala Lumpur'));
// console.log(sADCI2('Kangar'));

// console.log('1.2 | Calculate Total Population');
// console.log(calculateTotalPopulation());
// console.log(cTP2());

// console.log('1.3 | Relationship Between Two Cities');
// console.log(rbTCa('Kangar', 'Kuala Lumpur'));
// console.log(rbTCa2('Kangar', 'Kuala Lumpur'));


