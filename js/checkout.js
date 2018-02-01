var _scannerIsRunning = false;

width2 = screen.width;
height2 = screen.height;

function startScanner() {
  Quagga.init({
    inputStream: {
      name: "Live",
      type: "LiveStream",
      target: document.querySelector('#scanner-container'),
      constraints: {
        width: width2,
        height: height2,
        facingMode: "environment"
      },
    },
    decoder: {
      readers: [
        "ean_reader"
      ],
      debug: {
        showCanvas: true,
        showPatches: true,
        showFoundPatches: true,
        showSkeleton: true,
        showLabels: true,
        showPatchLabels: true,
        showRemainingPatchLabels: true,
        boxFromPatches: {
          showTransformed: true,
          showTransformedBox: true,
          showBB: true
        }
      }
    },

  }, function(err) {
    if (err) {
      console.log(err);
      return
    }

    console.log("Initialization finished. Ready to start");
    Quagga.start();

    // Set flag to is running
    _scannerIsRunning = true;
  });

  Quagga.onProcessed(function(result) {
    var drawingCtx = Quagga.canvas.ctx.overlay,
      drawingCanvas = Quagga.canvas.dom.overlay;

    if (result) {
      if (result.boxes) {
        drawingCtx.clearRect(0, 0, parseInt(drawingCanvas.getAttribute("width")), parseInt(drawingCanvas.getAttribute("height")));
        result.boxes.filter(function(box) {
          return box !== result.box;
        }).forEach(function(box) {
          Quagga.ImageDebug.drawPath(box, {
            x: 0,
            y: 1
          }, drawingCtx, {
            color: "green",
            lineWidth: 2
          });
        });
      }

      if (result.box) {
        Quagga.ImageDebug.drawPath(result.box, {
          x: 0,
          y: 1
        }, drawingCtx, {
          color: "#00F",
          lineWidth: 2
        });
      }

      if (result.codeResult && result.codeResult.code) {
        Quagga.ImageDebug.drawPath(result.line, {
          x: 'x',
          y: 'y'
        }, drawingCtx, {
          color: 'red',
          lineWidth: 3
        });
      }
    }
  });


  Quagga.onDetected(function(result) {
    console.log("Barcode detected and processed : [" + result.codeResult.code + "]", result);
    // TODO adding name instead of showing isbn
    document.getElementById("displayBarcode").innerHTML = 'Do you want to check out book ' + result.codeResult.code + '?';
    Quagga.stop();
    document.getElementById("scanner-container").innerHTML = '';
    document.getElementById("scanButton").style.display = 'none';
    document.getElementById("cancelButton").style.display = 'inline';
    document.getElementById("checkoutButton").style.display = 'inline';
  });
}

document.getElementById("cancelButton").addEventListener("click", function() {
  document.location.href = "checkout.html";
}, false);

function checkOutBook(){
  return true;
}

document.getElementById("checkoutButton").addEventListener("click", function() {
  if(checkOutBook()){
    document.getElementById("displayBarcode").innerHTML = 'You have checked out the book until ';
    document.getElementById("scanButton").style.display = 'none';
    document.getElementById("cancelButton").style.display = 'none';
    document.getElementById("checkoutButton").style.display = 'none';
    document.getElementById("okButton").style.display = 'inline';
  }
}, false);

document.getElementById("okButton").addEventListener("click", function() {
  document.location.href = "main.html";
}, false);

// Start/stop scanner
document.getElementById("scanButton").addEventListener("click", function() {
  if (_scannerIsRunning) {
    Quagga.stop();
    document.getElementById('scanButton').value = "Scan";
  } else {
    document.getElementById('scanButton').value = "Stop";
    startScanner();
  }
}, false);
