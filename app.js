// add to cart

let productsCounterEl = document.getElementById("products-count");
// console.log(productsCounterEl);

let addToCartBtns = document.querySelectorAll(".add-btn");
// console.log(addToCartBtns);

for (let i = 0; i < addToCartBtns.length; i++) {
  addToCartBtns[i].addEventListener("click", function () {
    let prevProductsCount = +productsCounterEl.textContent;
    productsCounterEl.textContent = prevProductsCount + 1;
  });
}
let likeBtns = document.querySelectorAll(".wish-list");
console.log(likeBtns);

likeBtns.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    // console.log("clicked");

    //  if( btn.classList.contains("liked")){
    //         btn.classList.remove(liked);
    //  } else {
    //     btn.classList.add("liked");
    //  }
    // console.log(this);
    e.target.classList.toggle("liked");
    //  e.target.style.background = "red";
    e.target.style.transition = "all 2s ease-out";
  })
);

let moreDetailsBtns = document.querySelectorAll(".more-btn");
let modal = document.querySelector(".modal");
let closeBtn = document.querySelector(".btn-close");

moreDetailsBtns.forEach((item) => item.addEventListener("click", openModal));
closeBtn.addEventListener("click", closeModal);

function openModal() {
  modal.classList.add("show");
  modal.classList.remove("hide");
}

function closeModal() {
  modal.classList.remove("show");
  modal.classList.add("hide");
}

modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    closeModal();
  }
});

document.querySelector(".submit-form").addEventListener("click", function (e) {
  e.preventDefault();
});

// modal.addEventListener("click",function (e){
// console.log(e.target);
// })

modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    closeModal();
  }
});

document.querySelector(".submit-form").addEventListener("click", function (e) {
  e.preventDefault();
});

// function showModalByScroll(){
//     if(window.scrollY >= document.body.scrollHeight/2){
//         openModal();
//         window.removeEventListener("scroll",showModalByScroll);
//     }

// }

// window.addEventListener("scroll", showModalByScroll);

// setTimeout(openModal,3000);

// AOS.init();

// let audi = {
//     model: "A4",
//     color:"black",
//     year:2008
// }
// let bmw = {
//     model: "328",
//     color:"grey",
//     year:2020
// }
// let lexus = {
//     model: "es350",
//     color:"write",
//     year:2010
// }

// class Car {
//   constructor(model, color, year) {
//     this.model = model;
//     this.year = year;
//     this.color = color;
//   }
//   hi = function () {
//     console.log("Hi" + this.model);
//   };
// }

// let audi = new Car("A4", "black", 2008);
// let lexus = new Car("328", "grey", 2020);
// let bmw = new Car("es350", "write", 2010);

// audi.hi;
// lexus.hi;
// bmw.hi;

const inrecementBtns = document.querySelectorAll(".increment-btn");
const derecementBtns = document.querySelectorAll(".decrement-btn");
const productsCount = document.querySelectorAll(".product-quantity input");




function Counter(incrementBtn, decrementBtn, inputField) {
    this.domRefs = {
        incrementBtn,
        decrementBtn,
        inputField,
    };
    this.toggleButtonState = function () {
        let count = +this.domRefs.inputField.value;
        this.domRefs.decrementBtn.disabled = count <= 1;
        this.domRefs.incrementBtn.disabled = count >= 10;
    };
    this.toggleButtonState();
    this.increment = function(){
        this.domRefs.inputField.value = +this.domRefs.inputField.value + 1;
        this.toggleButtonState();
        
    }
    this.decrement = function(){
        this.domRefs.inputField.value = +this.domRefs.inputField.value - 1;
        this.toggleButtonState();
   
    };
    this.domRefs.incrementBtn.addEventListener("click", this.increment.bind(this));
    this.domRefs.decrementBtn.addEventListener("click", this.decrement.bind(this));
    
}
let counters = [];
// const counter1 = new Counter(inrecementBtns, derecementBtns, productsCount);
// console.log(counter1);

productsCount.forEach((item, i) => (counters[i] = new Counter(inrecementBtns[i], derecementBtns[i], item))
  );



