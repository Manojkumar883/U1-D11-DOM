
document.getElementById("textChanger").onclick = function(){
    document.getElementById("changingH1").innerText = "EURONICS PHONE SHOP";
}


document.getElementById("background").onclick = function(){
    document.getElementById("changing-background-color").style.backgroundColor= "#DDE5B6";
}

document.getElementById("fakeaddress").onclick = function(){
    document.getElementById("footer").innerHTML = "THIS IS FAKE ADDRESS";
}

    // document.getElementByClass(".amazonLink").onclick = function(){
    //  document.getElementById("clickToanchorTags").style.fontSize="20px" 
    // }
    const addClass= function addClass(){
        const linkClass= document.querySelector("amazonLink")
        linkClass.classlist.add= "amazonLink";

    }
addClass();

// 
const hideContainer= function (){
    const images= document.elemenByClass("Images");
    for(let i=0; i< images.length; i++) {
        const singleImg = images [i];
        singleImg.classList.toggle("hidden");
    }
}
