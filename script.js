let sellerName = 'Bora';
let buyerName = 'Kunthea';
let applePricePerKg = 1;
let orangePricePerKg = 2;
let grapePricePerKg = 3;
let appleQuantityKg =2 ;
let orangeQuantityKg = 3;
let grapeQuantityKg = 2.5 ;

let fruitPrice = {
    applePrice:1,
    orangePrice:2,
    grapePrice:3,
};

let fruitQuantity = {
    appleQuantity:2,
    orangeQuantity:3,
    grapeQuantity:2.5,
};

let fruits = [

    {
        name:"Apple",
        price:1,
        quantity:2,
    },

    {
        name:"Orange",
        price:2,
        quantity:3,
    },

    {
        name:"Grape",
        price:3,
        quantity:2.5,
    }

];

let fruit=['Apple','Orange','Grape'];
let fruitsPrice=[1,2,3];
let fruitsQuantity=[2,3,2.5];

console.log(fruit,fruitsPrice,fruitsQuantity);
console.log(fruitPrice.applePrice);

let total =fruitsPrice[0]*fruitsQuantity[0]+fruitsPrice[1]*fruitsQuantity[1]+fruitsPrice[2]*fruitsQuantity[2];

console.log('$'+total);

const age = 0.1;
if(age>=0){
    if(age<3){
        console.log("Babies");
    }else if(age<16){
        console.log('Children');
    }else if(age<30){
        console.log('Young Adults');
    }else if(age<45){
        console.log('Middle-aged Adults');
    }else {
        console.log('Above 45');
    }
} else{
    console.log('Invalid Age');
}

let count =0;

if(true) count++;
if(true) count++;
if(false) count++;
if(true) count++;
if(false) count--;

console.log(count);

// for(let i=100; i>0;i--){
//     console.log(i);
// }

// for(let i=0; i-0; i++){
//     console.log(i)
// }

let friends = [
    {fullname: "jonh", gender: "M"},
    {fullname: "jane", gender: "F"},
    {fullname: "joho", gender: "M"},
    {fullname: "janna", gender: "F"},
    {fullname: "jenny", gender: "M"},
];

let countMale = 0;
let countFemale =0;

for(let i=0 ; i<friends.length; i++){
    if(friends[i].gender==="M"){
        console.log("Mr."+friends[i].fullname)
    } if(friends[i].gender==="F"){
        console.log("Ms."+friends[i].fullname);
    }
    
}
