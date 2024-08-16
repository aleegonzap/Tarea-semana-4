let number = 0;
let data = null; // Variable to store the retrieved data
const videoArea = document.getElementById("video");
const titleArea = document.getElementById("title");
const contentArea = document.getElementById("content");
const button = document.getElementById('btn');

function getData() {
  function getData() {
    console.log("getData function called"); // 
  }  
  if (data === null) {
    const request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (request.readyState == 4) {
        if (request.status == 200) {
          // Store the retrieved data
          data = JSON.parse(request.responseText);
          // Update content
          updateContent();
        }
      }
    }
    request.open("GET", "ajax.json");
    request.send();
  } else {
    // If data is already retrieved, update content
    updateContent();
  }
}

function updateContent() {
  // Update content using the stored data
  titleArea.innerHTML = data[number].title;
  contentArea.innerHTML = data[number].content;
  videoArea.setAttribute("src", data[number].url);
  // Increment number or reset to 0
  number = (number + 1) % data.length;
}

function changeVideo() {
  button.addEventListener('click', e => {
    // Call getData to ensure data is available
    getData();
  });
}

window.onload = changeVideo;
