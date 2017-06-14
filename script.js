unction checkerBoard(){

  var divs=[]
  for (var i = 0; i < 63; i++) {
    divs[i]=document.createElement("div")
    divs[i].id="div"+i;
    divs[i].style.width="11.1%"
    divs[i].style.paddingBottom="11.1%"
    divs[i].style.backgroundColor="red"
    divs[i].style.float="left"
    if (i%2==0) {
        divs[i].style.backgroundColor="black"
    }
    document.getElementsByClassName('board')[0].appendChild(divs[i])
  }
}


function RandomColors(){
  var r
  var g
  var b
  var divs=[]
  for (var i = 0; i < 63; i++) {
     r = Math.floor(Math.random() * 256);
     g = Math.floor(Math.random() * 256);
     b = Math.floor(Math.random() * 256);
    divs[i]=document.createElement("div")
    divs[i].id="div"+i;
    divs[i].style.width="11.1%"
    divs[i].style.paddingBottom="11.1%"
    divs[i].style.backgroundColor="rgb("+r+","+g+","+b+")"
    divs[i].style.float="left"
    document.getElementsByClassName('board')[0].appendChild(divs[i])
  }
}
