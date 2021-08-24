



var imagesLoop =  Array.from(document.getElementsByClassName("img-fluid"));
 //ezay amsk l 3onsor 
var imageContainer = document.querySelector(".light-container");
console.log(imagesLoop)


//event elly hay7sl 
for(var i = 0 ; i <imagesLoop.length ; i++)
{

    imagesLoop[i].addEventListener("click" , clickImg)
}

function clickImg(e)
{
    //action
    imageContainer.style.display = "flex";
   var imgSrc = e.target.src;
   imageContainer.firstElementChild.style.backgroundImage = `url(${imgSrc})`

}

















// var images = Array.from(document.querySelectorAll(".item img")); //return nodelist

// var lightContainer = document.querySelector(".light-container");

// for(var i = 0 ; i <images.length ; i++)
// {
//     images[i].addEventListener("click" , showImage);
// }

// function showImage(e)
// {

//     var imgSrc = e.target.src;
//     lightContainer.firstElementChild.style.backgroundImage = `url(${imgSrc})`;
//     lightContainer.style.display = "flex";
// }