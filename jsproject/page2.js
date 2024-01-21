function upDate(previewPic) {
    console.log("Event triggered!"); // Check if the event is triggering

    // Use console.log to print information about the previewPic variable
    console.log("Alt: ", previewPic.alt);
    console.log("Source: ", previewPic.src);

    // Change the text of the element with id 'image'
    document.getElementById('image').textContent = previewPic.alt;

    // Change the background image of the element with id 'image'
    document.getElementById('image').style.backgroundImage = `url('${previewPic.src}')`;
}
function undo() {
    // Update the background image of the element with id 'image' back to the original value
    document.getElementById('image').style.backgroundImage = "url('')";
    
    // Update the text of the element with id 'image' back to the original text
    document.getElementById('image').textContent = "Hover over an image below to display here.";
}
