$("#the-file-input").change(function() {
    console.log(this.files);
});

// render the image in our view
function renderImage(file) {

  // generate a new FileReader object
  var reader = new FileReader();

  // inject an image with the src url
  reader.onload = function(event) {
    the_url = event.target.result
    $('#imageContainer').html("<img src='" + the_url + "' style='width:100%; height:100%;' id='barcodeImage'/>")
  }

  // when the file is read it triggers the onload event above.
  reader.readAsDataURL(file);
}

// handle input changes
$("#the-file-input").change(function() {
    console.log(this.files)

    // grab the first image in the FileList object and pass it to the function
    renderImage(this.files[0])
});

Quagga.init({
    inputStream : {
      name : "Live",
      type : "LiveStream",
      target: document.querySelector('#barcodeImage')
    },
    decoder : {
      readers : ["code_128_reader"]
    }
  }, function(err) {
      if (err) {
          console.log(err);
          return
      }
      console.log("Initialization finished. Ready to start");
      Quagga.start();
  });
