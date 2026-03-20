(function(){const chaiStyles = {
  "chai-p-2": "padding:2px; ",
  "chai-m-1": "margin:1px; ",
  "chai-c-o": "color:orange; ",
  "chai-f-70": "font-size:70px; ",
  "chai-b-3-s-r":"border:3px solid red;"
};

let h1Element = document.getElementById("h1");
console.log(h1Element);

let allClasses = h1Element.className; // all classes inside one string
console.log(allClasses);

// element pe attached classes in array form
let allClassesArr = allClasses.trim().split(" ");
console.log(allClassesArr);

//check if class in array exist as  key  in the chaiStyles object

allClassesArr.forEach((clas) => {
  if (clas in chaiStyles) {
    

    // overwrites so avoiding 
    // h1Element.setAttribute("style", 'color:red');

    h1Element.style.cssText+=chaiStyles[clas]
    h1Element.classList.remove(clas);
  } else {
    console.log("failed to apply colors");
  }
});

console.log(h1Element);

// allClassesArr.forEach((clas) => {
//   if ("chai-c-o" in chaiStyles) {
//     h1Element.setAttribute("style", chaiStyles["chai-c-o"]);
//     h1Element.classList.remove("chai-c-o");
//   } else {
//     console.log("failed to apply colors");
//   }
// });

//console.log(h1Element);

}
)()
