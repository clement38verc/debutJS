/* let avion = {
    siege : "velour",
    prix : 500,
    age : 10,
    type : "boeing"
}
avion.type = "airbus"
console.log(avion);

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

   
  let sum = 0;
  for (let key in salaries){
    sum += salaries[key];
} 

console.log(sum);

function age(x){
    if(x<18){
        return ("vous netes pas majeurs");

    }
    else if (18<=x<49){
        return ("vous etes majeurs mais pas seniors");
    }
    else if (50<=x<59){
        return ("vous etes seniors mais pas encore retraité");
    }
    else {
        return ("vous etes retraité profité de votre temps");
    }

}
console.log(age(45)); 

function alpha(){
    let chaine="webmaster";
    let tab=[];
    for (let i=0 ; i < chaine.length ; i++){
        tab.push(chaine[i]);
    } 
    tab.sort();
    return tab.join("")
}
console.log(alpha());

const library = [ 
    {
        title:  'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }];


for (key in library[1]){
    if (key == "author"){
    console.log(key + " " + library[1][key]);
    }   
}


const longMonths = ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre'];
function moisactuelle(){


const d = new Date();
const mois= d.getMonth();

    return longMonths[mois];
}

console.log(moisactuelle()); */







