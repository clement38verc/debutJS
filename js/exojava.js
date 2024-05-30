/*const animaux = ["chat","chien","oiseaux","poules","canard","lion","tortue"];

animaux[0]="souris";

animaux.push("serpent")

animaux.pop();

animaux.unshift("pigeon");

animaux.shift();


for (let i=0; i<animaux.length; i++){
console.log(animaux[i]) 
}

for (let animal of animaux){
    console.log(animal);
}

animaux.forEach(animal => {
    console.log(animal)
    
});


animaux.forEach((animal, index)=>{
    console.log(index, animal);

})


const arr = ["jean","victor",["tony",8,22],"xavier"];
for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

const tab=[["sarah","tania"],["rose","viviane"],["eric","rudolphe"],["marc","andré"]];
for (let i=0;i<tab.length;i++){
    for(let j=0;j<tab[i].length;j++){
        console.log(tab[i][j])
    }
}



 for(const name of tab){
    for(const surname of name){
        console.log(surname)
    }
}

const isNumber = [2,4,6,8,10];
isNumber.map(num=>{
    console.log(num*2);
})

const heights = [160,175,184,193,205,237,365,386,499];
const above205= heights.filter(height=>{
    return height > 205;
})
console.log(above205);

const animaux = ["chat","chien","oiseaux","poules","canard","lion","tortue"];

console.log(animaux.sort()) ;

const numbers = [55,73,[45,[65,21],8,96],12,34,98,21,34];

console.log(numbers.flat(2));

let string="abcd";
console.log(string[3]);

let stringTab=["y","v","z"];
console.log(stringTab.join(""));

const animaux = ["chat","chien","oiseaux","poules","canard","lion","tortue"];

console.log(animaux.slice(2,6 ));



// EXO COUR 

const tab = ["Paul", "Jane", "Dupont", "Fred", "Elena"];
tab.pop();
tab.shift();
console.log(tab);



const numbers = [85,93,83,47,25,45,20,46,33,54,11];
console.log(numbers.sort().reverse());



const tab = ["Paul", "Jane", "Dupont", "Fred", "Elena"];
tab[0]="marc"

const tab = ["","a","xavier",false,8,0,12,NaN,true];;
const result = tab.filter(i => i);
console.log(result);


const names = ["Adrien", "Alo","paul", "Victor", "Alexandre", "Aurelie", "Antoine"];
const result = names.filter((word) =>  word[0]=="A" && word.length > 4);

console.log(result);
   



const names = ["André", "Jean", "Victor", [18,27,45,29], "Andréa"];
for (let i=0;i<names.length;i++){
    for (let j=0;j<names[i].length;j++){
        console.log(names[i][j]);
    }
}


for(const name of names){
    for(const surname of name){
        console.log(surname)
    }
} 


const names = ["André", "Jean", "Victor", "Andréa"];
console.log(names.join("-"));


const isNumber = [4,32,7,8];
isNumber.map(num=>{
    console.log(num+"€");
})



tab = [[[8,"a"],[9,"b"],[10,"c"]],[[11,"d"],[12,"e"],[13,"f"]],[[14,"i"],[15,"j"],[16,"k"]]];
console.log(tab[2][1]);


const names = ["Adrien", "paul", "Victor", "Alexandre", "Aurelie", "Antoine"];
names.forEach((element) => console.log("bonjour "+ element));


function sayHello(name){
    console.log("bonjour " + name);
}

sayHello("jhon")


function major(age){
    if (age<18){
        return "mineur";
    }
    else if(age>=18){
        return"majeur";
    }
    else{
        return"not a number";
    }
}

console.log(major("19"));

const dateInfo = Date.now();
console.log(dateInfo);

const dateInfo2 = new Date();
console.log(dateInfo2);
console.log(dateInfo2.getDate());
console.log(dateInfo2.toLocaleDateString());


//let user = new Object () //syntax "constructeur d'object"
let user = {
    name: "jhon",
    age: 30,
    "like birds" : true
}

user.isAdmin = true;

console.log(user[]);

function makeUser(name, age){
    return{
        name: name,
        age: age
    }
    }
let user = makeUser("john",30);
console.log(user)*/



let user = {
    name: "jhon",
    age: 30,
    isAdmin: true
}


for (let key in user){
    console.log(key);
    console.log(user[key]);
}
