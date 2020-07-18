/* Feet to Miles Assignment
********************************************/

function feetToMile (feet){
    var mile = feet / 5280;
    return mile;
}

var result = feetToMile(3000000);
console.log(result + ' miles');


/*  Wood Calculator Assignment
*******************************************/

function woodCalculator(chair, table, bed){
    var woodChair = chair * 1;
    var woodTable = table * 3;
    var woodBed = bed * 5;
    
    var calculateWood = woodChair + woodTable +woodBed;
    return calculateWood;
}

var result = woodCalculator (5, 6 ,7);
console.log(result + ' pieces qubic wood');


/* Brick Calculator Assignment
************************************************/

function brickCalculator (buildingSize){
    var oneToTen = buildingSize * 15000;
    var elvToTwen = buildingSize * 12000;
    var twenToInfininty =buildingSize * 10000;

    if(buildingSize <= 10){
        return oneToTen;
    }else if (buildingSize > 10 && buildingSize <= 20){
        return elvToTwen + (3000 * 10); 
    } else{
        return twenToInfininty + (10 * 7000);
    }
}

var result = brickCalculator(21);
console.log(result);


/* tiny Friends Assignment
***********************************/

function tinyFriend(friendName){
    var lowest = friendName[0];
     count = 0;
     for(i = 0 ; i < friendName.length; i++){
         var current = friendName[i];
         if (current < lowest){
             lowest = current;
         }
         var char = friendName[i];
         if( char == " "){
             count++;
         }

     }
     count++;
   return lowest;

}

var result = tinyFriend(["samin mia"  , "rakibull mia", "rahi mia", "rokin mia"]);
console.log(result);
