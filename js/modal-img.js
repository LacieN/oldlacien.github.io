// Reference: https://stackoverflow.com/questions/47798971/several-modal-images-on-page
//            https://stackoverflow.com/questions/53932232/how-to-prevent-body-scrolling-while-modal-is-open

var modal = document.getElementById('myModal');
var images = document.getElementsByClassName('myImages');
var modalImg = document.getElementById("img01");
// var captionText = document.getElementById("caption");

for (var i = 0; i < images.length; i++) {
  var img = images[i];
  img.onclick = function(evt) {
    modal.style.display = "block";
    modalImg.src = this.src;
    // captionText.innerHTML = this.alt;
    document.body.style.overflow = "hidden";
    document.body.style.height = "100%";
  }
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
  document.body.style.overflow = "auto"; 
  document.body.style.height = "auto"; 
}

window.onclick = function(event) {
if (event.target == modal) {
  modal.style.display = "none";
  document.body.style.overflow = "auto"; 
  document.body.style.height = "auto";  
}
}