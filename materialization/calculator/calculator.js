window.addEventListener("load", function() {
  let txtX = document.getElementById("txt-x")
  let txtY = document.getElementById("txt-y")
  let btnAdd = document.getElementById("btn-add")
  let txtSum = document.getElementById("txt-sum")

  btnAdd.onclick = function() {
    let x = parseInt(txtX.value);
    let y = parseInt(txtY.value);

    txtSum.value = x+y;
  }
})

