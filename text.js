
//function talkInput(){
//document.getElemmentById("chat-area").textContent += inputTalk;
//question = "Player: " + inputTalk + "<br>";
//document.getElementById("chat-area").innerHTML += question;


//var Attack = question.search(/Attack/i);
//var Pickup = question.search(/Pick Up/i);
//var Use = question.search(/Use/i);
//var MoveW = question.search(/Move West/i);
//var MoveE = question.search(/Move East/i);
//var MoveN = question.search(/Move North/i);
//var MoveS = question.search(/Move South/i);
//var Look = question.search(/Look Around/i);
//var x = question.search(/link/i);
//var y = question.search(/special/i);
//var z = question.search(/mistake/i);
//var da = new Date(Date.now());
//var img = ["http://new3.fjcdn.com/comments/Fun+fact+diamonds+are+not+valuable+previous+or+rare+but+_c6d2a1d43b3782715a23aadfc13b0050.jpg",
//"http://i2.kym-cdn.com/photos/images/original/000/783/510/50f.jpg"];

//var reaction = ["I am well, I am glad to see the direction that society has gone.", "I am the MASTER OF THE UNIVERSE!!!!, I am always well",
//"I ponder, I think, Mind wanders, it's pink, I leave, I arrive, I am Steve, and  I sure can jive.", "I is not my time.",
//"Nothing has an end or a beginning because nothing ever existed in the first place."];

//var notListening = ["Huh, I never noticed how grey the sky looks when you look at it through cement.",
//"I have an answer to a lot, but my knowledge in not infinte.",
//"You have a chance to talk to the MASTER OF THE UNIVERSE!!!! and you choose to talk about this!!!!",
//"NO, just no, I have a history with that that you can't understand!"];

function randomNumberGenerator(min, max){
return Math.floor(Math.random()*(max-min+1)+min);
}
//console.log(Hero);

//inputTalk = document.getElementById("input").value = null;

var text
var hero = false
var part1 = true
var part2 = false
var part3 = false
var part4 = false
//fight1 variables
var fight1Turn1 = true
var fight1Turn2 = false
var fight1Turn3 = false
var fightOneTurnOne = false
var fightOneTurnTwo = false
var fight1TurnTwo = false
var fight1TurnThree = false
var fightOneTurn2 = false
var fightOneTurnFour = false
var fightOneTurn3 = false
var goblin1Life = 5
//cave variables
var Traveller = false
var Powerplay = false
var Puzzle = false
//general stats
var heroHealth = 10
var inventory = false
var coins = 0
var inputTalk
var question

function run1(){
  inputTalk = document.getElementById("input").value;
  if(inputTalk == "1" && part1 == true){
    text = "Choose A Character: 1. The Hero  2. The Builder  3. The Wizard"
    document.getElementById("chat-area").innerHTML += text
    part1 = false
    part2 = true
    inputTalk= ""
    document.getElementById("input").value = null
  }
  if(inputTalk == "1" && part2 == true){
    text = "</br>" + "You have chosen wisely my friend, to the north, there is a village, to the south, there is a forest, to the east, there is a cave, to the west, there is a mountain" + "</br>" +
    "Choose one of the following directions(type in the indicated number)" + "<br>" + "1. North" + "</br>" + " 2. South" + "</br>" +
    "3. East" + "</br>" + "4. West"
    document.getElementById("chat-area").innerHTML += text
    part2 = false
    part3 = true
    hero = true
    inputTalk=""
    document.getElementById("input").value = null
  }
  if(hero == true && inputTalk == "1" && part3 == true && inventory == false){
    text = "</br>" + "There are a variety of shops and stores, one sells weapons, another sells potions, another will give you cold hard cash for your items, but you have neither cash or items, so I suggest you just go back" +
    "</br>" + "0. Go back"
    document.getElementById("chat-area").innerHTML += text
    inputTalk= ""
    document.getElementById("input").value = null
  }
if(hero == true && inputTalk == "0" && part3 == true){
  text = "</br>" + "You have chosen wisely my friend, to the north, there is a village, to the south, there is a forest, to the east, there is a cave, to the west, there is a mountain" + "</br>" +
  "Choose one of the following directions(type in the indicated number)" + "<br>" + "1. North" + "</br>" + " 2. South" + "</br>" +
  "3. East" + "</br>" + "4. West"
  document.getElementById("chat-area").innerHTML += text
  inputTalk=""
  document.getElementById("input").value = null
}
if(hero == true && inputTalk == "2" && part3 == true){
  text = "</br>" + "A goblin appears, you must fight it, which attack would you like to use" + "</br>" +
   "A. use slash" + "</br>" + "B. use uppercut"
  document.getElementById("chat-area").innerHTML += text
  inputTalk=""
  document.getElementById("input").value = null
}
//first A
if(hero == true && inputTalk == "A" && fight1Turn1 == true && part3 == true && fightOneTurnOne == false && fight1TurnThree == false && fightOneTurnTwo == false && fightOneTurnFour == false){
  text = "</br>" + "The goblin took 2 damage, it has 3 life left, goblin uses arrow boomerang attack, press C to continue"
  document.getElementById("chat-area").innerHTML += text
  goblin1Life = goblin1Life - 2
  fight1Turn1 = false
  fight1Turn2 = true
  inputTalk=""
  document.getElementById("input").value = null
}
var boomerang = randomNumberGenerator(1,2)
  if(randomNumberGenerator(1,2) == 1 && hero == true && inputTalk == "C" && part3 == true && fight1Turn2 == true){
    text = "</br>" + "The goblin inflicts three damage to your life." + "</br>" + "A. use slash" + "</br>" + "B. use uppercut"
    document.getElementById("chat-area").innerHTML += text
    heroHealth = heroHealth - 3
    inputTalk=""
    document.getElementById("input").value = null
  }
  if(randomNumberGenerator(1,2) == 2 && hero == true && inputTalk == "C" && part3 == true && fight1Turn2 == true){
    text = "</br>" + "The goblin missed, it inflicted 0 damage to your life" + "</br>" + "A. use slash" + "</br>" + "B. use uppercut"
    document.getElementById("chat-area").innerHTML += text
    inputTalk=""
    document.getElementById("input").value = null
  }
  //first B
 if(hero == true && inputTalk == "B" && fight1Turn2 == false && fight1TurnTwo == false && fight1TurnThree == false && fight1Turn3 == false && fightOneTurnOne == false && fightOneTurnTwo == false && part3 == true && fightOneTurnFour == false && fightOneTurn2 == false){
   text = "</br>" + "The goblin took 1 damage, it has 4 life left, the goblin is dazed, and it does not attack. Would you like to" +
   "</br>" + "A. use slash" + "</br>" + "B. use uppercut"
   document.getElementById("chat-area").innerHTML += text
   goblin1Life = goblin1Life - 3
   fightOneTurnOne = true
   inputTalk=""
   document.getElementById("input").value = null
 }
 //first A, second A
 if(hero == true && inputTalk == "A" && fight1Turn2 == true && part3 == true){
   text = "</br>" + "The goblin took 2 more damage, it has 1 life left, goblin uses boomerang, press C to continue."
   document.getElementById("chat-area").innerHTML += text
   goblin1Life = goblin1Life - 2
   fight1Turn2 = false
   fight1Turn3 = true
   inputTalk=""
   document.getElementById("input").value = null
   console.log("ji");
 }
 if(randomNumberGenerator(1,2) == 1 && hero == true && inputTalk == "C" && part3 == true && fight1Turn3 == true){
   text = "</br>" + "The goblin inflicts three damage to your life. Would you like to" + "</br>" + "A. use slash" + "</br>" + "B. use uppercut"
   document.getElementById("chat-area").innerHTML += text
   heroHealth = heroHealth - 3
   inputTalk=""
   document.getElementById("input").value = null
 }
 if(randomNumberGenerator(1,2) == 2 && hero == true && inputTalk == "C" && part3 == true && fight1Turn3 == true){
   text = "</br>" + "The goblin missed, it inflicted 0 damage to your life, would you like to" + "</br>" + "A. use slash" + "</br>" + "B. use uppercut"
   document.getElementById("chat-area").innerHTML += text
   inputTalk=""
   document.getElementById("input").value = null
 }
 //first B, then A
 if(hero == true && inputTalk == "A" && part3 == true && fight1Turn2 == false && fightOneTurnOne == true){
   text = "</br>" + "The goblin took 2 more damage, it has 2 life left, you MUST press C to continue"
   document.getElementById("chat-area").innerHTML += text
   goblin1Life = goblin1Life - 2
   fightOneTurnOne = false
   fightOneTurnTwo = true
   inputTalk=""
   document.getElementById("input").value = null
   console.log("hi");
 }
 //first A, then B
 if(hero == true && inputTalk == "B" && part3 == true && fight1Turn2 == true){
   text = "</br>" + "The goblin is dazed so it can not attack and 1 damage is inflicted, the goblin has 2 life left, would you like to" + "</br>" +
   "A. use slash" + "</br>" + "B. use uppercut"
   document.getElementById("chat-area").innerHTML += text
   goblin1Life = goblin1Life - 1
   fight1Turn2 = false
   fight1TurnTwo = true
   inputTalk=""
   document.getElementById("input").value = null
 }
 //first B, second B
 if(hero == true && inputTalk == "B" && part3 == true && fightOneTurnOne == true && fight1Turn2 == false){
   text = "</br>" + "Trying uppercut again was ineffective since the goblin was already dazed, but he takes one damage and wakes up, press C to continue"
   document.getElementById("chat-area").innerHTML += text
   goblin1Life = goblin1Life - 1
   fightOneTurnOne = false
   fightOneTurn2 = true
   inputTalk=""
   document.getElementById("input").value = null
 }
 if(randomNumberGenerator(1,2) == 1 && hero == true && inputTalk == "C" && part3 == true && fightOneTurnOne == false && fightOneTurnTwo == true){
   text = "</br>" + "The goblin uses boomerang and inflicts three damage to your life" + "</br>" + "A. use slash" + "</br>" + "B. use uppercut"
   document.getElementById("chat-area").innerHTML += text
   heroHealth = heroHealth - 3
   inputTalk=""
   document.getElementById("input").value = null
 }
 if(randomNumberGenerator(1,2) == 2 && hero == true && inputTalk == "C" && part3 == true && fightOneTurnOne == false && fightOneTurnTwo == true){
   text = "</br>" + "The goblin uses boomerang but he misses, no damage is inflicted to your life" + "</br>" +
   "A. use slash" + "</br>" + "B. use uppercut"
   document.getElementById("chat-area").innerHTML += text
   inputTalk=""
   document.getElementById("input").value = null
 }
 //if(randomNumberGenerator(1,2) == 1 && hero == true && inputTalk == "C" && part3 == true && fight1Turn2 == false && fightOneTurnOne == true){
   //text = "</br>" + "The goblin uses boomerang and inflicts three damage to your life, would you like to" + "</br>" + "A. use slash" + "</br>" + "B. use uppercut"
   //document.getElementById("chat-area").innerHTML += text
   //heroHealth = heroHealth - 3
   //inputTalk=""
   //document.getElementById("input").value = null
 //}
 //if(randomNumberGenerator(1,2) == 2 && hero == true && inputTalk == "C" && part3 == true && fight1Turn2 == false && fightOneTurnOne == true){
   //text = "</br>" + "The goblin uses boomerang but he misses, no damage is inflicted to your life, would you like to" + "</br>" +
   //"A. use slash" + "</br>" + "B. use uppercut"
   //document.getElementById("chat-area").innerHTML += text
   //inputTalk=""
   //document.getElementById("input").value = null
 //}
 //first A, second A, third A
 if(hero == true && inputTalk == "A" && part3 == true && fight1Turn3 == true && fight1Turn2 == false){
   text = "</br>" + "<marquee>" + "The goblin is slayed! Collect your prize of five coins and a new fighting move, Boomerang Sword! Press C to continue." +
   "</marquee>"
   document.getElementById("chat-area").innerHTML += text
   inventory = true
   coins = coins + 5
   inputTalk=""
   document.getElementById("input").value = null
 }
 //first A, second A, then B
 if(hero == true && inputTalk == "B" && part3 == true && fight1Turn3 == true && fight1Turn2 == false){
   text = "</br>" + "<marquee>" + "The goblin is slayed! Collect your prize of five coins and a new fighting move, Boomerang Sword! Press C to continue." +
   "</marquee>"
   document.getElementById("chat-area").innerHTML += text
   inventory = true
   coins = coins + 5
   inputTalk=""
   document.getElementById("input").value = null
 }
 //first A, then B, then A
 if(hero == true && inputTalk == "A" && part3 == true && fight1Turn2 == false && fight1TurnTwo == true){
   text = "</br>" + "<marquee>" + "The goblin is slayed! Collect your prize of five coins and a new fighting move, Boomerang Sword! Press C to continue." +
   "</marquee>"
   document.getElementById("chat-area").innerHTML += text
   inventory = true
   coins = coins + 5
   inputTalk=""
   document.getElementById("input").value = null
 }
 //first A, then B, then B
 if(hero == true && inputTalk == "B" && part3 == true && fight1Turn2 == false && fight1TurnTwo == true){
   text = "</br>" + "The goblin takes one damage but is already dazed and cannot be dazed again, so it wakes up, press C to continue"
   document.getElementById("chat-area").innerHTML += text
   inputTalk=""
   document.getElementById("input").value = null
 }
 if(randomNumberGenerator(1,2) == 1 && hero == true && inputTalk == "C" && part3 == true && fight1Turn2 == false && fight1TurnTwo == true){
   text = "</br>" + "It's the goblin's turn to attack and it hits straight on inflicting three damage" + "</br>" +
   "A. use slash" + "</br>" + "B. use uppercut"
   document.getElementById("chat-area").innerHTML += text
   heroHealth = heroHealth - 3
   fight1TurnTwo = false
   fight1TurnThree = true
   inputTalk=""
   document.getElementById("input").value = null
 }
 if(randomNumberGenerator(1,2) == 2 && hero == true && inputTalk == "C" && part3 == true && fight1Turn2 == false && fight1TurnTwo == true){
   text = "</br>" + "It's the goblin's turn to attack and he missed completely, inflicting zero damage" + "</br>" +
   "A. use slash" + "</br>" + "B. use uppercut"
   document.getElementById("chat-area").innerHTML += text
   fight1TurnTwo = false
   fight1TurnThree = true
   inputTalk=""
   document.getElementById("input").value = null
}
//first A, then B, then B, then A
if(hero == true && inputTalk == "A" && part3 == true && fight1TurnTwo == false && fight1TurnThree == true){
  text = "</br>" + "<marquee>" + "The goblin is slayed! Collect your prize of five coins and a new fighting move, Boomerang Sword! Press C to continue." +
  "</marquee>"
  document.getElementById("chat-area").innerHTML += text
  inventory = true
  coins = coins + 5
  inputTalk=""
  document.getElementById("input").value = null
}
//first A, then B, then B, then B
if(hero == true && inputTalk == "B" && part3 == true && fight1TurnTwo == false && fight1TurnThree == true){
  text = "</br>" + "<marquee>" + "The goblin is slayed! Collect your prize of five coins and a new fighting move, Boomerang Sword! Press C to continue." +
  "</marquee>"
  document.getElementById("chat-area").innerHTML += text
  inventory = true
  coins = coins + 5
  inputTalk=""
  document.getElementById("input").value = null
}
//first B, then A, then A
if(hero == true && inputTalk == "A" && part3 == true && fightOneTurnTwo == true && fightOneTurnOne == false){
  text = "</br>" + "<marquee>" + "The goblin is slayed! Collect your prize of five coins and a new fighting move, Boomerang Sword! Press C to continue." +
  "</marquee>"
  document.getElementById("chat-area").innerHTML += text
  inventory = true
  coins = coins + 5
  inputTalk=""
  document.getElementById("input").value = null
}
//first B, then A, then B
if(hero == true && inputTalk == "B" && part3 == true && fightOneTurnTwo == true && fightOneTurnOne == false){
  text = "</br>" + "The goblin is dazed again, it is unable to attack and takes one damage" + "</br>" +
  "A. use slash" + "</br>" + "B. use uppercut"
  document.getElementById("chat-area").innerHTML += text
  goblin1Life = goblin1Life - 1
  fightOneTurnTwo = false
  fightOneTurnFour = true
  inputTalk=""
  document.getElementById("input").value = null
}
//first B, then A, then B, then A
if(hero == true && inputTalk == "A" && part3 == true && fightOneTurnFour === true && fightOneTurnTwo == false){
  text = "</br>" + "<marquee>" + "The goblin is slayed! Collect your prize of five coins and a new fighting move, Boomerang Sword! Press C to continue." +
  "</marquee>"
  document.getElementById("chat-area").innerHTML += text
  inventory = true
  coins = coins + 5
  inputTalk=""
  document.getElementById("input").value = null
}
//first B, then A, then B, then B
if(hero == true && inputTalk == "B" && part3 == true && fightOneTurnFour == true && fightOneTurnTwo == false){
  text = "</br>" + "<marquee>" + "The goblin is slayed! Collect your prize of five coins and a new fighting move, Boomerang Sword! Press C to continue." +
  "</marquee>"
  document.getElementById("chat-area").innerHTML += text
  inventory = true
  coins = coins + 5
  inputTalk=""
  document.getElementById("input").value = null
}

if(randomNumberGenerator(1,2) == 1 && hero == true && inputTalk == "C" && part3 == true && fightOneTurn2 == true && fightOneTurnOne == false){
  text = "</br>" + "The goblin's boomerang hits you straight in the face, you take three damage." + "</br>" +
  "A. use slash" + "</br>" + "B. use uppercut"
  document.getElementById("chat-area").innerHTML += text
  heroHealth = heroHealth - 3
  fightOneTurn2 == false
  fightOneTurn3 == true
  inputTalk=""
  document.getElementById("input").value = null
}
if(randomNumberGenerator(1,2) == 2 && hero == true && inputTalk == "C" && part3 == true && fightOneTurn2 == true && fightOneTurnTwo == false){
  text = "</br>" + "It's the goblin's boomerang missed and he almost hit himself! You take no damage." + "</br>" +
  "A. use slash" + "</br>" + "B. use uppercut"
  document.getElementById("chat-area").innerHTML += text
  fightOneTurn2 == false
  fightOneTurn3 == true
  inputTalk=""
  document.getElementById("input").value = null
}

//first B, then B, then B
 if(hero == true && inputTalk == "A" && part3 == true && fightOneTurn3 == true && fightOneTurn2 == false){
   text = "</br>" + "The goblin is successfully dazed! it has 2 life left and cannot attack, hit em hard!" +
   "</br>" + "A. use slash" + "</br>" + "B. use uppercut"
   document.getElementById("chat-area").innerHTML += text
   inputTalk=""
   document.getElementById("input").value = null
 }






 if(hero == true && inputTalk == "3" && part3 == true){
   text = "</br>" + "You enter the dark cave, you see two paths you can take, left or right, choose wisely." + "</br>" +
   "1. Left" + "</br>" + "2. Right"
   document.getElementById("chat-area").innerHTML += text
   part3 = false
   part4 = true
   inputTalk=""
   document.getElementById("input").value = null
 }
 if(hero == true && inputTalk == "1" && part4 == true && Traveller == false && Powerplay == false){
   text = "</br>" + "You look around the Traveller's Repose and see objects on the floor, you can now type Look ____ based on the name of the noun of interest to discover things, there are also to paths."
   + "</br>" + "1. Left" + "</br>" + "2. Right"
   document.getElementById("chat-area").innerHTML += text
   Traveller = true
   inputTalk=""
   document.getElementById("input").value = null
 }
 if(hero == true && inputTalk == "Look Traveller's Repose" && part4 == true && Traveller == true){
   text = "</br>" + "You look around and see a Scroll, a Bone, and a Ruby there are also still two paths" + "</br>" + "1. Left"
    + "</br>" + "2. Right"
    document.getElementById("chat-area").innerHTML += text
    inputTalk=""
    document.getElementById("input").value = null
 }
 if(hero == true && inputTalk == "1" && part4 == true && Traveller == true){
   text = "</br>" + "You walk past a Sign, you see a man in front of you, the man speaks" + "</br>" +
   "Man: Let's play a game, you are the fly, I'll go first, I am the frog, who eats the fly" + "</br>" +
   "1. Hero: I am Ms. Piggy" + "</br>" + "Or" + "</br>" + "2. Hero: I am the Lillypad"
   document.getElementById("chat-area").innerHTML += text
   Traveller = false
   Powerplay = true
   inputTalk=""
   document.getElementById("input").value = null
 }
 if(hero == true && inputTalk == "Look Sign" && part4 == true && Powerplay == true){
   text = "</br>" + "Sign: This room is called The Puzzle"
   document.getElementById("chat-area").innerHTML += text
   inputTalk=""
   document.getElementById("input").value = null
 }
 if(hero == true && inputTalk == "Look The Puzzle" && part4 == true && Powerplay == true){
   text = "</br>" + "The back wall reads this: You can pick up the items you see around the room by typing 'Pickup' and then the item"
   document.getElementById("chat-area").innerHTML += text
   inputTalk=""
   document.getElementById("input").value = null
 }
 if(hero == true && inputTalk == "1" && part4 == true && Powerplay == true){
   text = "</br>" + "Hero: I am Ms. Piggy, I command the frog, using his love for me against him" + "</br>" +
   "Man: I am Jim Henson, I command all the muppets" + "</br>" + "1. Hero: I am the bank" + "</br>" + "Or" + "</br>" + "2. Hero: I am the audience"
   document.getElementById("chat-area").innerHTML += text
   Powerplay = false
   Puzzle = true
   inputTalk=""
   document.getElementById("input").value = null
 }
}







//if(Hero > -1){
  //document.getElementById("chat-area").innerHTML += "A goblin attacks you, do you a. attack  b. defend  c. run away" + "<br>";
  //if(Attack > -1){
    //document.getElementById("chat-area").innerHTML += "Your sword impails it and it turns to smoke" + "</br>"
  //}
  //else if(Defend > -1){
  //document.getElementById("chat-area").innerHTML += "The Goblin's club overpowers you and die" + "</br>"
//}
//else if(Retreat > -1){
  //document.getElementById("chat-area").innerHTML += "You ran away" + "</br>"
//}
//}

//else if(Builder > -1){
  //document.getElementById("chat-area").innerHTML += "MASTER OF THE UNIVERSE!!!!: I am a little past my prime. " + "<br>";
//}

//else if(Wizard > -1){
//document.getElementById("chat-area").innerHTML += "MASTER OF THE UNIVERSE!!!!: The time is " + da + "." + "<br>";
//}
//else if(u > -1){
  //document.getElementById("chat-area").innerHTML += "MASTER OF THE UNIVERSE!!!!: According to my primary sources, the year is " + da.getFullYear() + "." + "<br>";
//}
//else if(v > -1){
  //document.getElementById("chat-area").innerHTML += "MASTER OF THE UNIVERSE!!!!: Today is the " + da.getDay() + "th day of the week not that that matters much." + "<br>";
//}
//else if(w > -1){
//  document.getElementById("chat-area").innerHTML += "MASTER OF THE UNIVERSE!!!!: The date is the " + da.getDate() + "th day of the " + da.getMonth() + "th + 1th month. Is that that the type of date you meant?" + "<br>";
//}
 //else if(e > -1){
  //var x = document.createElement("IMG");
  //x.setAttribute("src", img[randomNumberGenerator(0,1)]);
  //x.setAttribute("width", "350");
  //x.setAttribute("alt", "img");
  //document.getElementById("chat-area").innerHTML +=  "MASTER OF THE UNIVERSE!!!!: So you want a picture do you?";
  //document.getElementById("chat-area").appendChild(x);
  //document.getElementById("chat-area").innerHTML += "<br>";

//}
//else if(x > -1){
  //document.getElementById("chat-area").innerHTML +=  " MASTER OF THE UNIVERSE!!!!: So you want a webpage link do you?  Backwards words" + "<bdo dir = " + "rtl" + ">"
   //+ "  MASTER OF THE UNIVERSE!!!!: So you want a webpage link do you?  " + "</bdo>" + "<a href=" + "http://www.hostgator.com/" + ">Link</a> <br>";
//}
//else if(y > -1){
//document.getElementById("chat-area").innerHTML += "<marquee>" + "MASTER OF THE UNIVERSE!!!!: So you want to see something special do you?" + "<bdi>" + "إيان" + "</bdi>" + "</marquee>" + "<br>";
//}
//else if(z > -1){
//document.getElementById("chat-area").innerHTML += "<strike>" + "<dl>" + "<dt>" + "MASTER OF THE UNIVERSE!!!!:" + "</dt>" + "<dd>" + "This is a bigger mistake. " + "</dd>" + "</dl>" + "</strike>" + "<br>";
//}
//else if(f > -1){
//document.getElementById("chat-area").innerHTML += "<details>" + "<summary>" + "<dfn>" + "MASTER OF THE UNIVERSE!!!!: This is the best I can offer." + "</dfn>" + "</summary>" + "<p>" + "Just kidding" + "</p>" + "</details>" + "<br>";
//}

//else{
  //document.getElementById("chat-area").innerHTML += "MASTER OF THE UNIVERSE!!!!: " + notListening[randomNumberGenerator(0,3)]  + "<br>";
//}

//}

function askInput(){
var asker = ["What is your occupation?", "How old are you?", "Do you even code bro?"];

function randomNumberGenerator(min, max){
return Math.floor(Math.random()*(max-min+1)+min);
}

document.getElementById("chat-area").innerHTML += "MASTER OF THE UNIVERSE!!!!: " + asker[randomNumberGenerator(0,2)] + "<br>";


}


function uniKeyCode(event) {
    var key = event.keyCode;
    if(key == 13){
      talkInput();
    }
}
