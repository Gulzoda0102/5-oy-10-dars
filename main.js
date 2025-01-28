// // const userName = prompt("Enter your favorite color");

// // const newTag = document.createElement("h1");
// // newTag.textContent = userName;

// // newTag.style.backgroundColor = "pink";
// // newTag.style.textAlign = "center";
// // newTag.style.color = "white";

// // document.body.style.backgroundColor = userName;

// // document.body.appendChild(newTag)




// // const width = prompt("Ism kiriting");
// // const height = prompt("Ism kiriting");
// // const bg = prompt("Ism kiriting");

// // const newTag = document.createElement("div");
// // newTag.style.width =`${width}px`;
// // new newTag.style.height = `${height}px`;
// // newTag.style.backgroundColor = `${bg}`;

// // document.body.appendChild(newTag)







// // const title = document.getElementsByClassName("Gulzoda");
// // console.log(title);

// // title.style.backgroundColor = "pink";
// // title.textContent ="alina"



// // const newTag = document.createElement("div");
// // newTag.textContent = "Hello, world!";

// // newTag.className = "Hello world!";
// // document.body.appendChild()




// // const title = document.querySelector("Gulzoda");
// // title.innerHTML =`<div class ="guli">Salom</div>`;



// const pupile =[
//     {
//         ism:"Safina",
//         familiyasi:"bot"
//         yosh:19,
//         tugilgan_yil: 2002,
//         turi: "chirigan"
//     },
//     {
//         ism:"Sitora",
//         familiyasi:"bot"
//         yosh:18,
//         tugilgan_yil: 2003,
//         turi: "chirigan"
//     },
//     {
//         ism:"Dilmuhammad",
//         familiyasi:"bot"
//         yosh:16,
//         tugilgan_yil: 2005,
//         turi: "chirigan"
//     },
//     {
//         ism:"Mahmud",
//         familiyasi:"bot"
//         yosh:15,
//         tugilgan_yil: 2006,
//         turi: "chirigan"
//     },
//     {
//         ism:"Shahzoda",
//         familiyasi:"bot"
//         yosh:14,
//         tugilgan_yil: 2007,
//         turi: "chirigan"
//     },
// ]

// const userName = +prompt("Your date ")





// const width = prompt("WIDTH kiriting");
// const height = prompt("HEIGHT kiriting");
// const bg = prompt("BG kiriting");

// const newTag = document.createElement("div");
// newTag.style.width = `${width}px`;
// newTag.style.height = `${height}px`;
// newTag.style.backgroundColor = `${bg}`;
// document.body.appendChild(newTag)
// const title = document.getElementById("bot");
// console.log(title);
// const newTag = document.createElement("div");
// newTag.textContent = "Box";
// document.body.appendChild(newTag);

// title.style.backgroundColor = "red"

// title.textContent = "Mahmmud";

// const title = document.getElementById("bot");
// console.log(title);
// const title = document.querySelector("#bot");
// const title = document.querySelector(".said");
// newTag.className = "header"

// title.innerHTML = `<div class="safina">Salom</div>`








function showName() {
  
    let name = prompt("Ismingizni kiriting");
    
    let h1 = document.createElement("h1");
    h1.textContent = name;

  
    h1.style.fontSize = "50px";
    h1.style.color = "black";
    h1.style.textAlign = "center";

    document.body.appendChild(h1);
}

showName();
