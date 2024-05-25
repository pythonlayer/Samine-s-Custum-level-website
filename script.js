// Function to handle level downloads from a predefined directory
function downloadLevel(filename) {
    var element = document.createElement('a');
    element.setAttribute('href', 'levels/' + filename);
    element.setAttribute('download', filename);
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}

// Function to handle level downloads from a full URL
function urlLevel(url) {
    var element = document.createElement('a');
    element.setAttribute('href', url);
    element.setAttribute('download', '');
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}


// Function to show information about the 'Reflourished' mod
function showModInfo(modName) {
    // Display an alert with information about the mod
    alert('This level is part of the ' + modName + ' mod for Plants vs Zombies 2.');
}

// You can add more functions or code as needed for your webpage
