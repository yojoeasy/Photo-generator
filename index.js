const btn1 = document.querySelector(".btn");
const imgContainer1= document.querySelector(".image-container");
btn1.addEventListener("click", () => {
    imgNum = 10;
    addNewImg();
});

function addNewImg(){
    for (let index = 0; index < imgNum; index++)
     {
        const newImg1 = document.createElement("img");
        newImg1.src = `https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}`

        imgContainer1.appendChild(newImg1); 
        
    };
    
};