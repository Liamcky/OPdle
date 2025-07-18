const backgroundElement = document.getElementById("background");

//7 images for daily change 
const imageCount = 7;

//Get day index (0 = Sunday, 6 = Saturday)
const today = new Date().getDay();

//get filename per image count > 1
const imageNumber = (today % imageCount);
const imagePath = `/assets/background/bg${imageNumber}.jpg`;

backgroundElement.style.backgroundImage = `url(${imagePath})`;
backgroundElement.style.backgroundSize = "cover";
backgroundElement.style.backgroundPosition = "center";
