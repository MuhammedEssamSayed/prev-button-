var imgs = Array.from(document.getElementsByClassName("img-fluid"));
var imageContainer = document.querySelector(".light-container");
var closeBtn = document.getElementById("closeBtn");
var prevBtn = document.getElementById("prevBtn");
var nxtBtn = document.getElementById("nxtBtn");
var currentImg = 0;

for(var i = 0 ; i<imgs.length ; i++)
{
    imgs[i].addEventListener("click" ,  showImg);
}

function  showImg(e)
{
    imageContainer.style.display = "flex";
   var imgSrc =  e.target.src;
   currentImg = imgs.indexOf(e.target);
  imageContainer.firstElementChild.style.backgroundImage = `url(${imgSrc})`
} 
//close button ;

closeBtn.addEventListener("click" , closeImg);

function closeImg()
{
    imageContainer.style.display = "none";
}
//next bytton ;

nxtBtn.addEventListener('click' , nextImage)
function nextImage()
{
    currentImg++ ;
    if(currentImg == imgs.length)
    {
        currentImg = 0;
    }
imageContainer.firstElementChild.style.backgroundImage  = `url(${imgs[currentImg].src})`
    }


//prev button 
    
prevBtn.addEventListener('click', previousImage);

function previousImage(){
    currentImg-=1;
    if (currentImg < 0) {
        currentImg = imgs.length - 1;
    }

    imageContainer.firstElementChild.style.backgroundImage  = `url(${imgs[currentImg].src})`

}


