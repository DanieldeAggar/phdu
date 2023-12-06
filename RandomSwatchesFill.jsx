var mySelection = app.activeDocument.selection;
var myDoc = app.activeDocument;

if (mySelection instanceof Array) {
  var selSwatches = myDoc.swatches.getSelected();

  if (selSwatches !== null && selSwatches.length !== 0) {
    for (var i = 0; i < mySelection.length; i++) {
      if (mySelection[i].typename === "PathItem" || mySelection[i].typename === "CompoundPathItem") {
        var selItem = mySelection[i];
        selItem.filled = true;

        var swatchIndex = Math.floor(Math.random() * selSwatches.length);

        if (selSwatches[swatchIndex] && selSwatches[swatchIndex].color) {
          var swatchColor = selSwatches[swatchIndex].color;

          if (selItem.typename === "PathItem") {
            selItem.fillColor = swatchColor;
          } else if (selItem.pathItems.length > 0) {
            selItem.pathItems[0].fillColor = swatchColor;
          }
        } else {
          alert("El color seleccionado no es válido.");
        }
      }
    }
  } else {
    alert("No hay colores seleccionados.");
  }
} else {
  alert("No hay elementos seleccionados.");
}