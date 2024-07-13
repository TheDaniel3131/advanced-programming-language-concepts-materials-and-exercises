// APLC Assignment (Part 2) - Functional Programming

let CITIES = [];

// 0.0 - Fetch Data from JSON file
fetch("my.json")
  .then((response) => response.json())
  .then((data) => {
    CITIES = data;
    // console.log(CITIES); // Just to check if data is loaded
  })
  .catch((error) => console.error("Error loading the JSON data: ", error));


// Question 1

// 1.0 - City Information Details
const displayCityDetails = (city) => {
  return `
    <h3>CITY DETAILS:</h3> 
    <p>City: ${city.city}</p>
    <p>Capital: ${city.capital}</p>
    <p>Admin Name: ${city.admin_name}</p>
    <p>Country: ${city.country}</p>
    <p>Longitude: ${city.lng}</p>
    <p>Latitude: ${city.lat}</p>
    <p>Population: ${city.population}</p>
    <p>Population Proper: ${city.population_proper}</p>
  `;
}

// 1.1 - Set Error Message
const displayError = () => {
  return `<h3>Error! City was not found!</h3>`;
}

// 1.2 - Search & Display City Information
const domSearch = () => {
  const searchValue = document.getElementById("search").value;
  const city = search(searchValue);
  document.getElementById("details").innerHTML = city ? displayCityDetails(city) : displayError();
}

// 1.3 - Search for A City
const search = (city) => CITIES.find((c) => c.city.toLowerCase() === city.toLowerCase())

// 1.4 - Display Search Results
const displaySearch = (cityName) => {
  const city = search(cityName);
  return city ? `${city.city} Details: ${JSON.stringify(city)}` : `City was not found!`;
}


// Question 2 

// 2.1 - Calculate the Total Population
const domPopulation = () => {
  document.getElementById("total_population").innerHTML = `
    ${totalPopulation()}
    `;
}

const domFindPopulation = () => {
  const searchValue = document.getElementById("search2").value.trim();
  document.getElementById('totalPopulationCity').innerHTML = `
    ${totalPopulationOfCity(searchValue)}
  `;
}

// 2.2 - Calculate Total Population Everywhere
const totalPopulation = () => {
  const totalPopulation = CITIES.reduce((total, city) => total + parseInt(city.population), 0);
  return `Total Population of Malaysia is: ${totalPopulation}`;
}

// 2.3 - Calculate Total Population of a Given City 
const totalPopulationOfCity = (cityName) => {
  const city = search(cityName);
  return city ? `The population of ${city.city} is: ${city.population}` : "City was not found!";
}

// 2.4 - Calculate Total Population of a Given Admin Name
const totalPopulationOfAdminName = (adminName) => {
  const total = CITIES.filter(city => city.admin_name.toLowerCase() === adminName.toLowerCase())
    .reduce((total, city) => total + parseInt(city.population), 0);
  return `Total Population of ${adminName}: ${total}`;
}


// Question 3

// 3.0 - Run Query 
const runQuery = async (query) => {
  try {
    const response = await fetch('http://localhost:3000/query', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Fetch error:', error);
    return [];
  }
};

// 3.1 - Find The Relationship of 2 Cities
const domCityRelationship = async (event) => {
  const elementId = event.target.id;
  const city1 = document.getElementById("city1").value.trim();
  const city2 = document.getElementById("city2").value.trim();
  const city3 = document.getElementById("city3").value.trim();

  let result = '';
  if (elementId === "distance") {
    result = await whosFurther(city1, city2, city3);
  } else if (elementId === "region") {
    result = await findRelationship(city1, city2);
  } else if (elementId === "differentRegions") {
    result = await checkDifferentRegions();
  }
  document.getElementById("result").textContent = result;
};

// Use this for testing.
// document.getElementById("distance").addEventListener("click", domCityRelationship);
// document.getElementById("region").addEventListener("click", domCityRelationship);

// 3.2 - Calculate Geographical Distance
const calculateDistance = (city1, city2) => {
  const toRadians = (deg) => (deg * Math.PI) / 180;

  const R = 6371; // Earth's radius in km
  const dLat = toRadians(city2.lat - city1.lat);
  const dLon = toRadians(city2.lng - city1.lng);
  const lat1 = toRadians(city1.lat);
  const lat2 = toRadians(city2.lat);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return (R * c).toFixed(2);
};

// 3.3 - Compare Cities (Find out the relationship between 2 cities)

// Parameters cityName1 and cityName2 are the cities that are being compared
// Parameter staticCity is the city that we are checking for the distance
// Function returns which city is closer to the static city

const whosFurther = (cityName1, cityName2, staticCityName) => {
  const city1 = search(cityName1);
  const city2 = search(cityName2);
  const staticCity = search(staticCityName);

  console.log("City 1:", city1);
  console.log("City 2:", city2);
  console.log("Static City:", staticCity);

  if (!city1 || !city2 || !staticCity) {
    return `One or more cities not found.`;
  }

  const distance1 = calculateDistance(city1, staticCity);
  const distance2 = calculateDistance(city2, staticCity);

  if (distance1 < distance2) {
    return `${city1.city} is closer to ${staticCity.city} than ${city2.city} is closer to ${staticCity.city}. ${city1.city} is ${distance1} to ${staticCity.city} and ${city2.city} is ${distance2} to ${staticCity.city}.`;
  } else {
    return `${city2.city} is closer to ${staticCity.city} than ${city1.city} is closer to ${staticCity.city}. ${city1.city} is ${distance1} to ${staticCity.city} and ${city2.city} is ${distance2} to ${staticCity.city}.`;
  }
};

// 3.4 - Check If Two Cities Have The Same Admin Region
const findRelationship = (city1Name, city2Name) => {
  const city1 = search(city1Name);
  const city2 = search(city2Name);

  if (!city1 || !city2) {
    return `One or both cities not found.`;
  }

  const sameRegion = city1.admin_name === city2.admin_name;
  return sameRegion
    ? `${city1Name} and ${city2Name} are in the same administrative region (${city1.admin_name}).`
    : `${city1Name} and ${city2Name} are in different administrative regions (${city1.admin_name} and ${city2.admin_name}, respectively).`;
};
