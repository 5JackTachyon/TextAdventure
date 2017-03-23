
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
var sly = false
var hero = false
var part1 = true
var part2 = false
var part3 = false
var part4 = false
var part5 = false
var part6 = false
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
var fightATurnA = false
var fightATurn1 = false
var fight1TurnA = false
var fightOneTurnA = false
var fightATurnOne = false
var fightBTurnB = false
var fightCTurnC = false
var goblin1Life = 5
//cave variables
var firstcave = false
var Traveller = false
var Powerplay = false
var Puzzle = false
var Money = false
var humanity = false
var society = false
var school = false
var Gamble = false
var Entertainment = false

var duel = false
var fence = false
var clash = false
var feint = false
var parry = false
var strangerDanger = false
var swordplay = false

var cavern = false
var narrow = false
var dark = false
var darkness = false
var darker = false
var rock = false
var rocky = false
var cold = false
var colder = false
var darkers = false
var coldest = false
var coldead = false
var freeze = false
var freezer = false
var freezest = false

var pickle = false
var torch = false
var sword = false
var chest = false
var bone = false
var key = false
var bowAndArrow = false
var strengthPotion = 0
var morphPotion = 0

var Skyward = false
var Shishkebab = false
var Fallen = false

var once = false
//general stats
var heroHealth = 10
var inventory = false
var coins = 0
var inputTalk
var question

var weapons = false
var potions = false

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
  if(hero == true && heroHealth < 0){
    text = "</br>" + "You lose all your health and you die, press 1 to continue."
    document.getElementById("chat-area").innerHTML += text
    hero = false
    part1 = true
    sly = false
    part2 = false
    part3 = false
    part4 = false
    part5 = false
    part6 = false
    fight1Turn1 = false
    fight1Turn2 = false
    fight1Turn3 = false
    fightOneTurnOne = false
    fightOneTurnTwo = false
    fight1TurnTwo = false
    fight1TurnThree = false
    fightOneTurn2 = false
    fightOneTurnFour = false
    fightOneTurn3 = false
    fightATurnA = false
    fightATurn1 = false
    fight1TurnA = false
    fightOneTurnA = false
    fightATurnOne = false
    fightBTurnB = false
    fightCTurnC = false
    goblin1Life = 5
    firstcave = false
    Traveller = false
    Powerplay = false
    Puzzle = false
    Money = false
    humanity = false
    society = false
    school = false
    Gamble = false
    Entertainment = false
    duel = false
    fence = false
    clash = false
    feint = false
    parry = false
    strangerDanger = false
    swordplay = false
    cavern = false
    narrow = false
    dark = false
    darkness = false
    darker = false
    rock = false
    rocky = false
    cold = false
    colder = false
    darkers = false
    coldest = false
    coldead = false
    freeze = false
    freezer = false
    freezest = false
    pickle = false
    torch = false
    sword = false
    chest = false
    bone = false
    key = false
    strengthPotion = 0
    morphPotion = 0
    bowAndArrow = false
    Skyward = false
    Shishkebab = false
    Fallen = false
    once = false
    heroHealth = 10
    inventory = false
    coins = 0
    weapons = false
    potions = false
    inputTalk=""
    document.getElementById("input").value = null
  }
  if(hero == true && goblin1Life < 0){
    text = "</br>" + "<marquee>" + "The goblin is slayed! Collect your prize of five coins and a new fighting move, Boomerang Sword! Press 0 to continue." +
    "</marquee>"
    document.getElementById("chat-area").innerHTML += text
    inventory = true
    coins = coins + 5
    fight1Turn2 = false
    fight1Turn3 = false
    fightOneTurnOne = false
    fightOneTurnTwo = false
    fight1TurnTwo = false
    fight1TurnThree = false
    fightOneTurn2 = false
    fightOneTurnFour = false
    fightOneTurn3 = false
    inputTalk=""
    inputTalk = "0"
    document.getElementById("input").value = null
  }
  if(hero == true && inputTalk == "4" && part3 == true && sly == false){
    text = "</br>" + "You see a beast guarding the mountain, it doesn't seem wise, but do you want to approach it."  + "</br>" +  "1. approach" + "</br>" + "2. go back"
    document.getElementById("chat-area").innerHTML += text
    sly = true
    part3 = false
    part5 = true
    inputTalk=""
    document.getElementById("input").value = null
  }
  if(hero == true && inputTalk == "1" && part5 == true && sly == true){
    text = "</br>" + "You die, press 1 to restart."
    document.getElementById("chat-area").innerHTML += text
    hero = false
    part1 = true
    sly = false
    part2 = false
    part3 = false
    part4 = false
    part5 = false
    part6 = false
    fight1Turn1 = false
    fight1Turn2 = false
    fight1Turn3 = false
    fightOneTurnOne = false
    fightOneTurnTwo = false
    fight1TurnTwo = false
    fight1TurnThree = false
    fightOneTurn2 = false
    fightOneTurnFour = false
    fightOneTurn3 = false
    fightATurnA = false
    fightATurn1 = false
    fight1TurnA = false
    fightOneTurnA = false
    fightATurnOne = false
    fightBTurnB = false
    fightCTurnC = false
    goblin1Life = 5
    firstcave = false
    Traveller = false
    Powerplay = false
    Puzzle = false
    Money = false
    humanity = false
    society = false
    school = false
    Gamble = false
    Entertainment = false
    duel = false
    fence = false
    clash = false
    feint = false
    parry = false
    strangerDanger = false
    swordplay = false
    cavern = false
    narrow = false
    dark = false
    darkness = false
    darker = false
    rock = false
    rocky = false
    cold = false
    colder = false
    darkers = false
    coldest = false
    coldead = false
    freeze = false
    freezer = false
    freezest = false
    pickle = false
    torch = false
    sword = false
    chest = false
    bone = false
    key = false
    bowAndArrow = false
    strengthPotion = 0
    morphPotion = 0
    Skyward = false
    Shishkebab = false
    Fallen = false
    once = false
    heroHealth = 10
    inventory = false
    coins = 0
    weapons = false
    potions = false
    inputTalk=""
    document.getElementById("input").value = null
  }
  if(hero == true && inputTalk == "2" && part5 == true && sly == true){
    text = "</br>" + "Good choice, press 0 to continue."
    document.getElementById("chat-area").innerHTML += text
    sly = false
    part5 = false
    part3 = true
    inputTalk=""
    document.getElementById("input").value = null
  }
  if(hero == true && inputTalk == "1" && part3 == true && coins == 0){
    text = "</br>" + "There are a variety of shops and stores, one sells weapons, another sells potions, but you have no money, so I suggest you just go back" +
    "</br>" + "0. Go back"
    document.getElementById("chat-area").innerHTML += text
    inputTalk= ""
    document.getElementById("input").value = null
  }
  if(hero == true && inputTalk == "1" && part3 == true && coins > 0){
    text = "</br>" + "There are a variety of shops and stores, one sells weapons, another sells potions, another will give you cold hard cash for your items, would you like to.." +
    "</br>" +"1. Buy weapons"+"</br>"+"2. Buy potions"+"</br>" + "3. Go back"
    document.getElementById("chat-area").innerHTML += text
    part3 = false
    part6 = true
    inputTalk= ""
    document.getElementById("input").value = null
  }
  if(hero == true && inputTalk == "1" && part6 == true && coins > 0 && weapons == false){
    text = "</br>" + "For sale there is.." + "</br>" + "1. (10 coins) a metal sword(better than the stupid little wooden sword of yours)" +
    "</br>" +"2. (10 coins) a new fighting move, Shishkebab"+"</br>"+"3. (15 coins) A bow and arrow"+"</br>" + "4. Go back"
    document.getElementById("chat-area").innerHTML += text
    weapons = true
    inputTalk= ""
    document.getElementById("input").value = null
  }
  if(hero == true && inputTalk == "2" && part6 == true && coins > 0 && potions == false){
    text = "</br>" + "For sale there is.." + "</br>" + "1. (5 coins) a health potion(restores 5 health)" +
    "</br>" +"2. (5 coins) strength potion(increases your attack temporarily)"+"</br>"+
    "3. (10 coins) morph potion(transforms your enemy into a passive little animal)"+"</br>" + "4. Go back"
    document.getElementById("chat-area").innerHTML += text
    potions = true
    inputTalk= ""
    document.getElementById("input").value = null
  }
  if(hero == true && inputTalk == "3" && part6 == true && coins > 0){
    text = "</br>" + "press 0 to continue"
    document.getElementById("chat-area").innerHTML += text
    part6 = false
    part3 = true
    inputTalk= ""
    document.getElementById("input").value = null
  }
  if(hero == true && inputTalk == "1" && part6 == true && weapons == true && coins > 0){
    text = "</br>" + "You bought a metal sword! Press 2 to buy Shishkebab, 3 to buy a bow and arrow, and 4 to go back"
    document.getElementById("chat-area").innerHTML += text
    weapons = false
    coins = coins - 10
    sword = true
    inputTalk= ""
    document.getElementById("input").value = null
  }
  if(hero == true && inputTalk == "2" && part6 == true && weapons == true && coins > 0){
    text = "</br>" + "You bought a new move! Press 1 to get a metal sword, 3 to buy a bow and arrow, and 4 to go back"
    document.getElementById("chat-area").innerHTML += text
    weapons = false
    coins = coins - 10
    Shishkebab = true
    inputTalk= ""
    document.getElementById("input").value = null
  }
  if(hero == true && inputTalk == "3" && part6 == true && weapons == true && coins > 0){
    text = "</br>" + "You bought a bow and arrow! Press 1 to get a metal sword, 2 to buy Shishkebab, and 4 to go back"
    document.getElementById("chat-area").innerHTML += text
    weapons = false
    coins = coins - 15
    bowAndArrow = true
    inputTalk= ""
    document.getElementById("input").value = null
  }
  if(hero == true && inputTalk == "4" && part6 == true){
    text = "</br>" + "press 0 to continue"
    document.getElementById("chat-area").innerHTML += text
    part6 = false
    part3 = true
    inputTalk= ""
    document.getElementById("input").value = null
  }
  if(hero == true && inputTalk == "1" && part6 == true && coins > 0){
    text = "</br>" + "You got a health potion. Press 2 to buy strength potion, 3 to buy morph potion and 4 to go go back"
    document.getElementById("chat-area").innerHTML += text
    potions = false
    coins = coins - 5
    heroHealth = heroHealth + 5
    inputTalk= ""
    document.getElementById("input").value = null
  }
  if(hero == true && inputTalk == "2" && part6 == true && coins > 0){
    text = "</br>" + "You got a strength potion. Press 1 to buy health potion, 3 to buy morph potion and 4 to go go back"
    document.getElementById("chat-area").innerHTML += text
    potions = false
    coins = coins - 5
    strengthPotion = strengthPotion + 1
    inputTalk= ""
    document.getElementById("input").value = null
  }
  if(hero == true && inputTalk == "3" && part6 == true && coins > 0){
    text = "</br>" + "You got a morph potion. Press 1 to buy health potion, 2 to buy strength potion and 4 to go go back"
    document.getElementById("chat-area").innerHTML += text
    potions = false
    coins = coins - 10
    morphPotion = morphPotion + 1
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
   if(Shishkebab == true){
     text += "</br>" + "D. Shishkebab"
   }
   if(Fallen == true){
     text += "</br>" + "E. Fallen"
   }
   if(Skyward == true){
     text += "</br>" + "You can not use Skyward Sword yet"
   }
  document.getElementById("chat-area").innerHTML += text
  inputTalk=""
  document.getElementById("input").value = null
}
//first A
if(hero == true && inputTalk == "A" && fight1Turn1 == true && part3 == true && fightOneTurnOne == false && fight1TurnThree == false && fightOneTurnTwo == false && fightOneTurnFour == false){
  text = "</br>" + "The goblin took 2 damage, it has 3 life left, goblin uses arrow boomerang attack, press C to continue"
  if(sword == true){
    goblin1Life--
  }
  if(Shishkebab == true){
    text += "</br>" + "D. Shishkebab"
  }
  if(Fallen == true){
    text += "</br>" + "E. Fallen"
  }
  if(Skyward == true){
    text += "</br>" + "You can not use Skyward Sword yet"
  }
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
   if(sword == true){
     goblin1Life--
   }
   if(Shishkebab == true){
     text += "</br>" + "D. Shishkebab"
   }
   if(Fallen == true){
     text += "</br>" + "E. Fallen"
   }
   if(Skyward == true){
     text += "</br>" + "You can not use Skyward Sword yet"
   }
   goblin1Life = goblin1Life - 3
   fightOneTurnOne = true
   inputTalk=""
   document.getElementById("input").value = null
 }
 //first D
 if(hero == true && inputTalk == "D" && fight1Turn2 == false && fight1TurnTwo == false && fight1TurnThree == false && fight1Turn3 == false && fightOneTurnOne == false && fightOneTurnTwo == false && part3 == true && fightOneTurnFour == false && fightOneTurn2 == false){
   text = "</br>" + "The goblin took 1 damage, it has 4 life left, goblin uses boomerang, press C to continue." +
   "</br>" + "A. use slash" + "</br>" + "B. use uppercut"
   document.getElementById("chat-area").innerHTML += text
   if(sword == true){
     goblin1Life--
   }
   if(Shishkebab == true){
     text += "</br>" + "D. Shishkebab"
   }
   if(Fallen == true){
     text += "</br>" + "E. Fallen"
   }
   if(Skyward == true){
     text += "</br>" + "You can not use Skyward Sword yet"
   }
   goblin1Life = goblin1Life - 1
   fight1TurnA = true
   inputTalk=""
   document.getElementById("input").value = null
 }
 //first E
 if(hero == true && inputTalk == "E" && fight1Turn2 == false && fight1TurnTwo == false && fight1TurnThree == false && fight1Turn3 == false && fightOneTurnOne == false && fightOneTurnTwo == false && part3 == true && fightOneTurnFour == false && fightOneTurn2 == false){
   text = "</br>" + "The goblin took 3 damage, you took 1 damage, goblin uses boomerang, press C to continue." +
   "</br>" + "A. use slash" + "</br>" + "B. use uppercut"
   document.getElementById("chat-area").innerHTML += text
   if(sword == true){
     goblin1Life--
   }
   if(Shishkebab == true){
     text += "</br>" + "D. Shishkebab"
   }
   if(Fallen == true){
     text += "</br>" + "E. Fallen"
   }
   if(Skyward == true){
     text += "</br>" + "You can not use Skyward Sword yet"
   }
   goblin1Life = goblin1Life - 3
   heroHealth = heroHealth - 1
   fightATurn1 = true
   inputTalk=""
   document.getElementById("input").value = null
 }
 //first A, second A
 if(hero == true && inputTalk == "A" && fight1Turn2 == true && part3 == true){
   text = "</br>" + "The goblin took 2 more damage, it has 1 life left, goblin uses boomerang, press C to continue."
   document.getElementById("chat-area").innerHTML += text
   if(sword == true){
     goblin1Life--
   }
   if(Shishkebab == true){
     text += "</br>" + "D. Shishkebab"
   }
   if(Fallen == true){
     text += "</br>" + "E. Fallen"
   }
   if(Skyward == true){
     text += "</br>" + "You can not use Skyward Sword yet"
   }
   goblin1Life = goblin1Life - 2
   fight1Turn2 = false
   fight1Turn3 = true
   inputTalk=""
   document.getElementById("input").value = null
   console.log("ji");
 }
 if(randomNumberGenerator(1,2) == 1 && hero == true && inputTalk == "C" && part3 == true && fight1Turn3 == true){
   text = "</br>" + "The goblin inflicts three damage to your life. Would you like to" + "</br>" + "A. use slash" + "</br>" + "B. use uppercut"
   if(sword == true){
     goblin1Life--
   }
   if(Shishkebab == true){
     text += "</br>" + "D. Shishkebab"
   }
   if(Fallen == true){
     text += "</br>" + "E. Fallen"
   }
   if(Skyward == true){
     text += "</br>" + "You can not use Skyward Sword yet"
   }
   document.getElementById("chat-area").innerHTML += text
   heroHealth = heroHealth - 3
   inputTalk=""
   document.getElementById("input").value = null
 }
 if(randomNumberGenerator(1,2) == 2 && hero == true && inputTalk == "C" && part3 == true && fight1Turn3 == true){
   text = "</br>" + "The goblin missed, it inflicted 0 damage to your life, would you like to" + "</br>" + "A. use slash" + "</br>" + "B. use uppercut"
   if(sword == true){
     goblin1Life--
   }
   if(Shishkebab == true){
     text += "</br>" + "D. Shishkebab"
   }
   if(Fallen == true){
     text += "</br>" + "E. Fallen"
   }
   if(Skyward == true){
     text += "</br>" + "You can not use Skyward Sword yet"
   }
   document.getElementById("chat-area").innerHTML += text
   inputTalk=""
   document.getElementById("input").value = null
 }
 //first A, then D
 if(hero == true && inputTalk == "D" && fight1Turn2 == true && part3 == true){
   text = "</br>" + "The goblin took 1 more damage, it has 2 life left, goblin uses boomerang, press C to continue."
   document.getElementById("chat-area").innerHTML += text
   if(sword == true){
     goblin1Life--
   }
   if(Shishkebab == true){
     text += "</br>" + "D. Shishkebab"
   }
   if(Fallen == true){
     text += "</br>" + "E. Fallen"
   }
   if(Skyward == true){
     text += "</br>" + "You can not use Skyward Sword yet"
   }
   goblin1Life = goblin1Life - 2
   fight1Turn2 = false
   fightATurnA = true
   inputTalk=""
   document.getElementById("input").value = null
   console.log("ji");
 }
 //first A, then E
 if(hero == true && inputTalk == "E" && fight1Turn2 == true && part3 == true){
   text = "</br>" + "<marquee>" + "The goblin is slayed! Collect your prize of five coins and a new fighting move, Boomerang Sword! Press 1. North, 3. East, or 4. West." +
   "</marquee>"
   document.getElementById("chat-area").innerHTML += text
   inventory = true
   heroHealth = heroHealth - 1
   coins = coins + 5
   fight1Turn2 = false
   inputTalk=""
   document.getElementById("input").value = null
   console.log("ji");
 }
 //first B, then A
 if(hero == true && inputTalk == "A" && part3 == true && fight1Turn2 == false && fightOneTurnOne == true){
   text = "</br>" + "The goblin took 2 more damage, it has 2 life left, you MUST press C to continue"
   document.getElementById("chat-area").innerHTML += text
   if(sword == true){
     goblin1Life--
   }
   if(Shishkebab == true){
     text += "</br>" + "D. Shishkebab"
   }
   if(Fallen == true){
     text += "</br>" + "E. Fallen"
   }
   if(Skyward == true){
     text += "</br>" + "You can not use Skyward Sword yet"
   }
   goblin1Life = goblin1Life - 2
   fightOneTurnOne = false
   fightOneTurnTwo = true
   inputTalk=""
   document.getElementById("input").value = null
   console.log("hi");
 }
 //first B, then D
 if(hero == true && inputTalk == "D" && part3 == true && fight1Turn2 == false && fightOneTurnOne == true){
   text = "</br>" + "The goblin took 1 more damage, it has 3 life left, you MUST press C to continue"
   document.getElementById("chat-area").innerHTML += text
   if(sword == true){
     goblin1Life--
   }
   if(Shishkebab == true){
     text += "</br>" + "D. Shishkebab"
   }
   if(Fallen == true){
     text += "</br>" + "E. Fallen"
   }
   if(Skyward == true){
     text += "</br>" + "You can not use Skyward Sword yet"
   }
   goblin1Life = goblin1Life - 1
   fightOneTurnOne = false
   fightOneTurnA = true
   inputTalk=""
   document.getElementById("input").value = null
   console.log("hi");
 }
 //first B, then E
 if(hero == true && inputTalk == "E" && part3 == true && fight1Turn2 == false && fightOneTurnOne == true){
   text = "</br>" + "The goblin took 3 more damage, it has 1 life left, you took 1 damage, you MUST press C to continue"
   document.getElementById("chat-area").innerHTML += text
   if(sword == true){
     goblin1Life--
   }
   if(Shishkebab == true){
     text += "</br>" + "D. Shishkebab"
   }
   if(Fallen == true){
     text += "</br>" + "E. Fallen"
   }
   if(Skyward == true){
     text += "</br>" + "You can not use Skyward Sword yet"
   }
   goblin1Life = goblin1Life - 3
   heroHealth = heroHealth - 1
   fightOneTurnOne = false
   fightATurnOne = true
   inputTalk=""
   document.getElementById("input").value = null
   console.log("hi");
 }
 //first A, then B
 if(hero == true && inputTalk == "B" && part3 == true && fight1Turn2 == true){
   text = "</br>" + "The goblin is dazed so it can not attack and 1 damage is inflicted, the goblin has 2 life left, would you like to" + "</br>" +
   "A. use slash" + "</br>" + "B. use uppercut"
   document.getElementById("chat-area").innerHTML += text
   if(sword == true){
     goblin1Life--
   }
   if(Shishkebab == true){
     text += "</br>" + "D. Shishkebab"
   }
   if(Fallen == true){
     text += "</br>" + "E. Fallen"
   }
   if(Skyward == true){
     text += "</br>" + "You can not use Skyward Sword yet"
   }
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
   if(sword == true){
     goblin1Life--
   }
   if(Shishkebab == true){
     text += "</br>" + "D. Shishkebab"
   }
   if(Fallen == true){
     text += "</br>" + "E. Fallen"
   }
   if(Skyward == true){
     text += "</br>" + "You can not use Skyward Sword yet"
   }
   goblin1Life = goblin1Life - 1
   fightOneTurnOne = false
   fightOneTurn2 = true
   inputTalk=""
   document.getElementById("input").value = null
 }
 if(randomNumberGenerator(1,2) == 1 && hero == true && inputTalk == "C" && part3 == true && fightOneTurnOne == false && fightOneTurnTwo == true){
   text = "</br>" + "The goblin uses boomerang and inflicts three damage to your life" + "</br>" + "A. use slash" + "</br>" + "B. use uppercut"
   if(sword == true){
     goblin1Life--
   }
   if(Shishkebab == true){
     text += "</br>" + "D. Shishkebab"
   }
   if(Fallen == true){
     text += "</br>" + "E. Fallen"
   }
   if(Skyward == true){
     text += "</br>" + "You can not use Skyward Sword yet"
   }
   document.getElementById("chat-area").innerHTML += text
   heroHealth = heroHealth - 3
   inputTalk=""
   document.getElementById("input").value = null
 }
 if(randomNumberGenerator(1,2) == 2 && hero == true && inputTalk == "C" && part3 == true && fightOneTurnOne == false && fightOneTurnTwo == true){
   text = "</br>" + "The goblin uses boomerang but he misses, no damage is inflicted to your life" + "</br>" +
   "A. use slash" + "</br>" + "B. use uppercut"
   if(sword == true){
     goblin1Life--
   }
   if(Shishkebab == true){
     text += "</br>" + "D. Shishkebab"
   }
   if(Fallen == true){
     text += "</br>" + "E. Fallen"
   }
   if(Skyward == true){
     text += "</br>" + "You can not use Skyward Sword yet"
   }
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
   text = "</br>" + "<marquee>" + "The goblin is slayed! Collect your prize of five coins and a new fighting move, Boomerang Sword! Press 1. North, 3. East, or 4. West." +
   "</marquee>"
   document.getElementById("chat-area").innerHTML += text
   inventory = true
   coins = coins + 5
   fight1Turn3 = false
   inputTalk=""
   document.getElementById("input").value = null
 }
 //first A, then A, then D
 if(hero == true && inputTalk == "D" && part3 == true && fight1Turn3 == true && fight1Turn2 == false){
   text = "</br>" + "<marquee>" + "The goblin is slayed! Collect your prize of five coins and a new fighting move, Boomerang Sword! Press 1. North, 3. East, or 4. West." +
   "</marquee>"
   document.getElementById("chat-area").innerHTML += text
   inventory = true
   coins = coins + 5
   fight1Turn3 = false
   inputTalk=""
   document.getElementById("input").value = null
 }
 //first A, then A, then E
 if(hero == true && inputTalk == "E" && part3 == true && fight1Turn3 == true && fight1Turn2 == false){
   text = "</br>" + "<marquee>" + "The goblin is slayed! Collect your prize of five coins and a new fighting move, Boomerang Sword! Press 1. North, 3. East, or 4. West." +
   "</marquee>"
   document.getElementById("chat-area").innerHTML += text
   inventory = true
   heroHealth = heroHealth - 1
   coins = coins + 5
   fight1Turn3 = false
   inputTalk=""
   document.getElementById("input").value = null
 }
 //first A, second A, then B
 if(hero == true && inputTalk == "B" && part3 == true && fight1Turn3 == true && fight1Turn2 == false){
   text = "</br>" + "<marquee>" + "The goblin is slayed! Collect your prize of five coins and a new fighting move, Boomerang Sword! Press 1. North, 3. East, or 4. West." +
   "</marquee>"
   document.getElementById("chat-area").innerHTML += text
   inventory = true
   coins = coins + 5
   fight1Turn3 == false
   inputTalk=""
   document.getElementById("input").value = null
 }
 //first A, then B, then A
 if(hero == true && inputTalk == "A" && part3 == true && fight1Turn2 == false && fight1TurnTwo == true){
   text = "</br>" + "<marquee>" + "The goblin is slayed! Collect your prize of five coins and a new fighting move, Boomerang Sword! Press 1. North, 3. East, or 4. West." +
   "</marquee>"
   document.getElementById("chat-area").innerHTML += text
   inventory = true
   coins = coins + 5
   fight1TurnTwo = false
   inputTalk=""
   document.getElementById("input").value = null
 }
 //first A, then B, then E
 if(hero == true && inputTalk == "E" && part3 == true && fight1Turn2 == false && fight1TurnTwo == true){
   text = "</br>" + "<marquee>" + "The goblin is slayed! Collect your prize of five coins and a new fighting move, Boomerang Sword! Press 1. North, 3. East, or 4. West." +
   "</marquee>"
   document.getElementById("chat-area").innerHTML += text
   inventory = true
   heroHealth = heroHealth - 1
   coins = coins + 5
   fight1TurnTwo = false
   inputTalk=""
   document.getElementById("input").value = null
 }
 //first A, then B, then B
 if(hero == true && inputTalk == "B" && part3 == true && fight1Turn2 == false && fight1TurnTwo == true){
   text = "</br>" + "The goblin takes one damage but is already dazed and cannot be dazed again, so it wakes up, press C to continue"
   if(sword == true){
     goblin1Life--
   }
   if(Shishkebab == true){
     text += "D. Shishkebab"
   }
   if(Fallen == true){
     text += "E. Fallen"
   }
   if(Skyward == true){
     text += "You can not use Skyward Sword yet"
   }
   document.getElementById("chat-area").innerHTML += text
   inputTalk=""
   document.getElementById("input").value = null
 }
 //first A, then B, then D
 if(hero == true && inputTalk == "D" && part3 == true && fight1Turn2 == false && fight1TurnTwo == true){
   text = "</br>" + "The goblin takes one damage, press C to continue"
   if(sword == true){
     goblin1Life--
   }
   if(Shishkebab == true){
     text += "D. Shishkebab"
   }
   if(Fallen == true){
     text += "E. Fallen"
   }
   if(Skyward == true){
     text += "You can not use Skyward Sword yet"
   }
   document.getElementById("chat-area").innerHTML += text
   goblin1Life = goblin1Life - 1
   fightBTurnB = true
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
   if(sword == true){
     goblin1Life--
   }
   if(Shishkebab == true){
     text += "</br>" + "D. Shishkebab"
   }
   if(Fallen == true){
     text += "</br>" + "E. Fallen"
   }
   if(Skyward == true){
     text += "</br>" + "You can not use Skyward Sword yet"
   }
   document.getElementById("chat-area").innerHTML += text
   fight1TurnTwo = false
   fight1TurnThree = true
   inputTalk=""
   document.getElementById("input").value = null
}
//first A, then B, then B, then A
if(hero == true && inputTalk == "A" && part3 == true && fight1TurnTwo == false && fight1TurnThree == true){
  text = "</br>" + "<marquee>" + "The goblin is slayed! Collect your prize of five coins and a new fighting move, Boomerang Sword! Press 1. North, 3. East, or 4. West." +
  "</marquee>"
  document.getElementById("chat-area").innerHTML += text
  inventory = true
  coins = coins + 5
  fight1TurnThree = false
  inputTalk=""
  document.getElementById("input").value = null
}
//first A, then B, then B, then D
if(hero == true && inputTalk == "D" && part3 == true && fight1TurnTwo == false && fight1TurnThree == true){
  text = "</br>" + "<marquee>" + "The goblin is slayed! Collect your prize of five coins and a new fighting move, Boomerang Sword! Press 1. North, 3. East, or 4. West." +
  "</marquee>"
  document.getElementById("chat-area").innerHTML += text
  inventory = true
  coins = coins + 5
  fight1TurnThree = false
  inputTalk=""
  document.getElementById("input").value = null
}
//first A, then B, then B, then E
if(hero == true && inputTalk == "E" && part3 == true && fight1TurnTwo == false && fight1TurnThree == true){
  text = "</br>" + "<marquee>" + "The goblin is slayed! Collect your prize of five coins and a new fighting move, Boomerang Sword! Press 1. North, 3. East, or 4. West." +
  "</marquee>"
  document.getElementById("chat-area").innerHTML += text
  inventory = true
  heroHealth = heroHealth - 1
  coins = coins + 5
  fight1TurnThree = false
  inputTalk=""
  document.getElementById("input").value = null
}
//first A, then B, then B, then B
if(hero == true && inputTalk == "B" && part3 == true && fight1TurnTwo == false && fight1TurnThree == true){
  text = "</br>" + "<marquee>" + "The goblin is slayed! Collect your prize of five coins and a new fighting move, Boomerang Sword! Press 1. North, 3. East, or 4. West." +
  "</marquee>"
  document.getElementById("chat-area").innerHTML += text
  inventory = true
  coins = coins + 5
  fight1TurnThree = false
  inputTalk=""
  document.getElementById("input").value = null
}
//first B, then A, then A
if(hero == true && inputTalk == "A" && part3 == true && fightOneTurnTwo == true && fightOneTurnOne == false){
  text = "</br>" + "<marquee>" + "The goblin is slayed! Collect your prize of five coins and a new fighting move, Boomerang Sword! Press 1. North, 3. East, or 4. West." +
  "</marquee>"
  document.getElementById("chat-area").innerHTML += text
  inventory = true
  fightOneTurnTwo = false
  coins = coins + 5
  inputTalk=""
  document.getElementById("input").value = null
}
//first B, then A, then E
if(hero == true && inputTalk == "E" && part3 == true && fightOneTurnTwo == true && fightOneTurnOne == false){
  text = "</br>" + "<marquee>" + "The goblin is slayed! Collect your prize of five coins and a new fighting move, Boomerang Sword! Press 1. North, 3. East, or 4. West." +
  "</marquee>"
  document.getElementById("chat-area").innerHTML += text
  inventory = true
  heroHealth = heroHealth - 1
  fightOneTurnTwo = false
  coins = coins + 5
  inputTalk=""
  document.getElementById("input").value = null
}
//first B, then A, then B
if(hero == true && inputTalk == "B" && part3 == true && fightOneTurnTwo == true && fightOneTurnOne == false){
  text = "</br>" + "The goblin is dazed again, it is unable to attack and takes one damage" + "</br>" +
  "A. use slash" + "</br>" + "B. use uppercut"
  if(sword == true){
    goblin1Life--
  }
  if(Shishkebab == true){
    text +=  "</br>" + "D. Shishkebab"
  }
  if(Fallen == true){
    text += "</br>" + "E. Fallen"
  }
  if(Skyward == true){
    text += "</br>" + "You can not use Skyward Sword yet"
  }
  document.getElementById("chat-area").innerHTML += text
  goblin1Life = goblin1Life - 1
  fightOneTurnTwo = false
  fightOneTurnFour = true
  inputTalk=""
  document.getElementById("input").value = null
}
//first B, then A, then D
if(hero == true && inputTalk == "D" && part3 == true && fightOneTurnTwo == true && fightOneTurnOne == false){
  text = "</br>" + "The goblin takes 1 damage, press C to continue" + "</br>" +
  "A. use slash" + "</br>" + "B. use uppercut"
  if(sword == true){
    goblin1Life--
  }
  if(Shishkebab == true){
    text +=  "</br>" + "D. Shishkebab"
  }
  if(Fallen == true){
    text += "</br>" + "E. Fallen"
  }
  if(Skyward == true){
    text += "</br>" + "You can not use Skyward Sword yet"
  }
  document.getElementById("chat-area").innerHTML += text
  goblin1Life = goblin1Life - 1
  fightOneTurnTwo = false
  fightCTurnC = true
  inputTalk=""
  document.getElementById("input").value = null
}
//first B, then A, then B, then A
if(hero == true && inputTalk == "A" && part3 == true && fightOneTurnFour === true && fightOneTurnTwo == false){
  text = "</br>" + "<marquee>" + "The goblin is slayed! Collect your prize of five coins and a new fighting move, Boomerang Sword! Press 1. North, 3. East, or 4. West." +
  "</marquee>"
  document.getElementById("chat-area").innerHTML += text
  inventory = true
  coins = coins + 5
  fightOneTurnFour = false
  inputTalk=""
  document.getElementById("input").value = null
}
//first B, then A, then B, then D
if(hero == true && inputTalk == "D" && part3 == true && fightOneTurnFour === true && fightOneTurnTwo == false){
  text = "</br>" + "<marquee>" + "The goblin is slayed! Collect your prize of five coins and a new fighting move, Boomerang Sword! Press 1. North, 3. East, or 4. West." +
  "</marquee>"
  document.getElementById("chat-area").innerHTML += text
  inventory = true
  coins = coins + 5
  fightOneTurnFour = false
  inputTalk=""
  document.getElementById("input").value = null
}
//first B, then A, then B, then E
if(hero == true && inputTalk == "E" && part3 == true && fightOneTurnFour === true && fightOneTurnTwo == false){
  text = "</br>" + "<marquee>" + "The goblin is slayed! Collect your prize of five coins and a new fighting move, Boomerang Sword! Press 1. North, 3. East, or 4. West." +
  "</marquee>"
  document.getElementById("chat-area").innerHTML += text
  inventory = true
  heroHealth = heroHealth - 1
  coins = coins + 5
  fightOneTurnFour = false
  inputTalk=""
  document.getElementById("input").value = null
}
//first B, then A, then B, then B
if(hero == true && inputTalk == "B" && part3 == true && fightOneTurnFour == true && fightOneTurnTwo == false){
  text = "</br>" + "<marquee>" + "The goblin is slayed! Collect your prize of five coins and a new fighting move, Boomerang Sword! Press 1. North, 3. East, or 4. West." +
  "</marquee>"
  document.getElementById("chat-area").innerHTML += text
  inventory = true
  coins = coins + 5
  fightOneTurnFour = false
  inputTalk=""
  document.getElementById("input").value = null
}

if(randomNumberGenerator(1,2) == 1 && hero == true && inputTalk == "C" && part3 == true && fightOneTurn2 == true && fightOneTurnOne == false){
  text = "</br>" + "The goblin's boomerang hits you straight in the face, you take three damage." + "</br>" +
  "A. use slash" + "</br>" + "B. use uppercut"
  if(sword == true){
    goblin1Life--
  }
  if(Shishkebab == true){
    text += "</br>" + "D. Shishkebab"
  }
  if(Fallen == true){
    text += "</br>" + "E. Fallen"
  }
  if(Skyward == true){
    text += "</br>" + "You can not use Skyward Sword yet"
  }
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
  if(sword == true){
    goblin1Life--
  }
  if(Shishkebab == true){
    text += "</br>" + "D. Shishkebab"
  }
  if(Fallen == true){
    text += "</br>" + "E. Fallen"
  }
  if(Skyward == true){
    text += "</br>" + "You can not use Skyward Sword yet"
  }
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
   if(sword == true){
     goblin1Life--
   }
   if(Shishkebab == true){
     text += "</br>" + "D. Shishkebab"
   }
   if(Fallen == true){
     text += "</br>" + "E. Fallen"
   }
   if(Skyward == true){
     text += "</br>" + "You can not use Skyward Sword yet"
   }
   document.getElementById("chat-area").innerHTML += text
   inputTalk=""
   document.getElementById("input").value = null
 }






 if(hero == true && inputTalk == "3" && part3 == true && firstcave == false){
   text = "</br>" + "You enter the dark cave, you see two paths you can take, left or right, choose wisely." + "</br>" +
   "1. Left" + "</br>" + "2. Right"
   document.getElementById("chat-area").innerHTML += text
   part3 = false
   part4 = true
   inputTalk=""
   document.getElementById("input").value = null
 }
 if(hero == true && inputTalk == "1" && part4 == true && Traveller == false && Powerplay == false && Puzzle == false && Money == false && humanity == false && society == false && firstcave == false && school == false && Gamble == false && Entertainment == false && duel == false && fence == false &&
 sword == false && feint == false && parry == false && strangerDanger == false && swordplay == false && cavern == false && narrow == false && dark == false && darkness == false && darker == false && rock == false && rocky == false && cold == false && colder == false && darkers == false && coldest == false && coldead == false
  && freeze == false && freezer == false && freezest == false && clash == false){
   text = "</br>" + "You look around the Traveller's Repose and see objects on the floor, you can now type Look ____ based on the name of the noun of interest to discover things, there are also to paths."
   + "</br>" + "1. Left" + "</br>" + "2. Right"
   document.getElementById("chat-area").innerHTML += text
   Traveller = true
   inputTalk=""
   document.getElementById("input").value = null
 }
 if(hero == true && inputTalk == "Look Traveller's Repose" && part4 == true && Traveller == true){
   text = "</br>" + "You look around and see a Scroll, a Pickle, and a Ruby there are also still two paths" + "</br>" + "1. Left"
    + "</br>" + "2. Right"
    document.getElementById("chat-area").innerHTML += text
    inputTalk=""
    document.getElementById("input").value = null
 }
 if(hero == true && inputTalk == "Pickup Pickle" && part4 == true && Traveller == true){
   text = "</br>" + "You pick up a Pickle, the time will come where this can be used, you'll know when" + "</br>" + "1. Left"
    + "</br>" + "2. Right"
    document.getElementById("chat-area").innerHTML += text
    pickle = true
    inputTalk=""
    document.getElementById("input").value = null
 }
 if(hero == true && inputTalk == "Pickup Scroll" && part4 == true && Traveller == true){
   text = "</br>" + "You pick up a Scroll that reads 'on the right hand entrance of the cave, go Left, Right, Straight, Straight, Right, Back, Left, Left'"
   + "</br>" + "1. Left"
    + "</br>" + "2. Right"
    document.getElementById("chat-area").innerHTML += text
    inputTalk=""
    document.getElementById("input").value = null
 }
 if(hero == true && inputTalk == "Pickup Ruby" && part4 == true && Traveller == true){
   text = "</br>" + "You pick up a Ruby, you are rich! Go to the market and buy more stuff!" + "</br>" + "1. Left"
    + "</br>" + "2. Right"
    document.getElementById("chat-area").innerHTML += text
    Inventory = true
    coins = coins + 15
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
 if(hero == true && inputTalk == "2" && part4 == true && Traveller == true){
   text = "</br>" + "You enter a Dark Room, you see a skeleton warrior appear" + "</br>" +
   "Skeleton Warrior: I challenge you to duel! Accept or Die(accept is your only choice) your move!" + "</br>" +
   "(A.)____ you--->__skeleton____(charge)" + "</br>" + "Or" + "</br>" + "(B.)____you / ____skeleton____(block)"
   document.getElementById("chat-area").innerHTML += text
   inputTalk=""
   document.getElementById("input").value = null
 }
 if(hero == true && inputTalk == "Look Dark Room" && part4 == true && Traveller == true){
   text = "</br>" + "You look around and see a Torch, a Sword, and a Chest" + "</br>" + "But you must battle the skeleton, type A or B"
   document.getElementById("chat-area").innerHTML += text
   inputTalk=""
   document.getElementById("input").value = null
 }
 if(hero == true && inputTalk == "Pickup Torch" && part4 == true && Traveller == true){
   text = "</br>" + "You pick up a Torch, since it is so dark, this can be very useful" + "</br>" + "A."
    + "</br>" + "B."
    document.getElementById("chat-area").innerHTML += text
    torch = true
    inputTalk=""
    document.getElementById("input").value = null
  }
  if(hero == true && inputTalk == "Pickup Sword" && part4 == true && Traveller == true){
    text = "</br>" + "That stupid little wooden sword you had before is useless now, you have a metal sword! But you still have to press A or B"
     document.getElementById("chat-area").innerHTML += text
     sword = true
     inputTalk=""
     document.getElementById("input").value = null
   }
   if(hero == true && inputTalk == "Pickup Chest" && part4 == true && Traveller == true){
     text = "</br>" + "You pick up a chest, but it is locked, and you do not have the key. But you still have to Attack or Block"
      document.getElementById("chat-area").innerHTML += text
      chest = true
      inputTalk=""
      document.getElementById("input").value = null
    }
   if(hero == true && inputTalk == "Pickup Ruby" && part4 == true && Traveller == true){
     text = "</br>" + "You pick up a Ruby, you are rich! Go to the market and buy more stuff!" + "</br>" + "1. Left"
      + "</br>" + "2. Right"
      document.getElementById("chat-area").innerHTML += text
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

 if(hero == true && inputTalk == "2" && part4 == true && Powerplay == true){
   text = "</br>" + "Hero: I am the Lillypad" + "</br>" +
   "Man: Nice try, but you obviously don't understand how this works, you have to counter mine, like I say, 'I am the mouse' you say 'I am the cat that chases the mouse' and I say 'I am the dog that chases the cat' and you say 'I am the flea that plagues the dog' and so on."
   document.getElementById("chat-area").innerHTML += text
   Powerplay = false
   Traveller = true
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
 if(hero == true && inputTalk == "1" && part4 == true && Puzzle == true){
   text = "</br>" + "Hero: I am the bank, without my  loans you would be desolate."  + "</br>" +
   "Man: I am money, without me you would be nothing." + "</br>" + "1. Hero: I am greed" + "</br>" + "Or" + "</br>" +
   "2. Hero: I am the wealthy"
   document.getElementById("chat-area").innerHTML += text
   Puzzle = false
   Money = true
   inputTalk=""
   document.getElementById("input").value = null
 }
 if(hero == true && inputTalk == "1" && part4 == true && Money == true){
  text = "</br>" + "Hero: I am greed, without me there would be money, I consume it without savoring." + "</br>" +
  "Man: I am Man, I am the root of all evil" + "</br>" + "1. Hero: I am mortality, the thing that kills all" + "</br>" +
  "Or" + "</br>" + "2. Hero: I am the child, uncorrupt by greed"
  document.getElementById("chat-area").innerHTML += text
  Money = false
  humanity = true
  inputTalk=""
  document.getElementById("input").value = null
  }
  if(hero == true && inputTalk == "1" && part4 == true && humanity == true){
    text = "</br>" + "Hero: I am mortality" + "</br>" + "Man: I am, I am, you win traveler, take 5 coins, and a new fighting move, Skyward Sword"
    + "the man gives you his gifts and tells you how to get out of the cave, you are back to the start, press 0 to continue."
    document.getElementById("chat-area").innerHTML += text
    humanity = false
    part4 = false
    part3 = true
    imputTalk=""
    document.getElementById("input").value = null
  }
  if(hero == true && inputTalk == "2" && part4 == true && humanity == true){
    text= "</br>" + "Hero: I am the child" + "</br>" + "Man: I am the teacher, who molds and shapes the child's mind" + "</br>"
    + "1. Hero: I am the schoolboard" + "</br>" + "Or" + "</br>" + "2. Hero: I am the union"
    document.getElementById("chat-area").innerHTML += text
    humanity = false
    firstcave = true
    inputTalk=""
    document.getElementById("input").innerHTML = null
  }
  if(hero == true && inputTalk == "1" && part4 == true && firstcave == true){
    text = "</br>" + "Hero: I am the schoolboard, I command the teachers" + "</br>" +
    "Man: I am the parents, who complain to the school board and  make it cower to me" + "</br>" + "1. Hero: I am heartbreak" + "</br>" + "Or" +"</br>"
     + "2. Hero: I am the boss"
     document.getElementById("chat-area").innerHTML += text
     firstcave = false
     school = true
     inputTalk=""
     document.getElementById("input").innerHTML += text
  }
  if(hero == true && inputTalk == "1" && part4 == true && school == true){
    text = "</br>" + "Hero: I am heartbreak, I am the thing that breaks the parent's bonds" + "</br>" +
    "Man: I am the lawyer, who prospers from these events" + "</br>" + "YOU LOSE! and are forced to give up five coins, press 0 to continue"
     document.getElementById("chat-area").innerHTML += text
     school = false
     coins = coins - 5
     part4 = false
     part3 = true
     inputTalk=""
     document.getElementById("input").innerHTML += text
  }
  if(hero == true && inputTalk == "2" && part4 == true && school == true){
    text = "</br>" + "Hero: I am the boss, I command all" + "</br>" +
    "Man: I am, I am, you win traveler, take 5 coins, and a new fighting move, Skyward Sword"
    + "the man gives you his gifts and tells you how to get out of the cave, you are back to the start, press 0 to continue."
     document.getElementById("chat-area").innerHTML += text
     school = false
     part4 = false
     part3 = true
     Skyward = true
     inputTalk=""
     document.getElementById("input").innerHTML += text
  }
  if(hero == true && inputTalk == "2" && part4 == true && firstcave == true){
    text= "</br>" + "Hero: I am the union, I protect and manipulate the teachers" + "</br>" + "Man: I am ..." + "</br>" +
    "Suddenly the cave rubbles and begins to collapse, the man bails, your greed consumes you and you run over to steal his stuff, but the cave collapses and you die, press 1 to continue"
    document.getElementById("chat-area").innerHTML += text
    hero = false
    part1 = true
    sly = false
    part2 = false
    part3 = false
    part4 = false
    part5 = false
    part6 = false
    fight1Turn1 = false
    fight1Turn2 = false
    fight1Turn3 = false
    fightOneTurnOne = false
    fightOneTurnTwo = false
    fight1TurnTwo = false
    fight1TurnThree = false
    fightOneTurn2 = false
    fightOneTurnFour = false
    fightOneTurn3 = false
    fightATurnA = false
    fightATurn1 = false
    fight1TurnA = false
    fightOneTurnA = false
    fightATurnOne = false
    fightBTurnB = false
    fightCTurnC = false
    goblin1Life = 5
    firstcave = false
    Traveller = false
    Powerplay = false
    Puzzle = false
    Money = false
    humanity = false
    society = false
    school = false
    Gamble = false
    Entertainment = false
    duel = false
    fence = false
    clash = false
    feint = false
    parry = false
    strangerDanger = false
    swordplay = false
    cavern = false
    narrow = false
    dark = false
    darkness = false
    darker = false
    rock = false
    rocky = false
    cold = false
    colder = false
    darkers = false
    coldest = false
    coldead = false
    freeze = false
    freezer = false
    freezest = false
    pickle = false
    torch = false
    sword = false
    chest = false
    bone = false
    key = false
    bowAndArrow = false
    strengthPotion = 0
    morphPotion = 0
    Skyward = false
    Shishkebab = false
    Fallen = false
    once = false
    heroHealth = 10
    inventory = false
    coins = 0
    weapons = false
    potions = false
    inputTalk=""
    document.getElementById("input").innerHTML = null
  }
  if(hero == true && inputTalk == "2" && part4 == true && Money == true){
    text = "</br>" + "Hero: I am the wealthy, I need not banks for I have more money than even them."  + "</br>" +
    "Man: I am gambling which destroys the wealth of mankind." + "</br>" + "1. Hero: I am addiction" + "</br>" + "Or" + "</br>" +
    "2. Hero: I am chance"
    document.getElementById("chat-area").innerHTML += text
    Money = false
    Gamble = true
    inputTalk=""
    document.getElementById("input").value = null
  }
  if(hero == true && inputTalk == "1" && part4 == true && Gamble == true){
    text = "</br>" + "Hero: I am addiction, the thing that drives gambling, without it you would have no purpose"  + "</br>" +
    "Man: I am therapy, I treat addiction" + "</br>" + "1. Hero: I am therapist" + "</br>"  + "Man: looks like we have a draw, you may leave."
    document.getElementById("chat-area").innerHTML += text
    Gamble = false
    inputTalk=""
    document.getElementById("input").value = null
  }
  if(hero == true && inputTalk == "2" && part4 == true && Gamble == true){
    text = "</br>" + "Hero: I am chance, I am the hope and the certainty that one lucky soul will not be decrepit from the gamblers lure."  + "</br>" +
    "Man: I am despair, I counter all hope." + "</br>" + "1. Hero: I am optimism, I am contageous" + "</br>" +
    "Man: looks like we are at a draw, let's start over, press 1 to do so"
    document.getElementById("chat-area").innerHTML += text
    Gamble = false
    Traveller = true
    inputTalk=""
    document.getElementById("input").value = null
  }
  if(hero == true && inputTalk == "2" && part4 == true && Puzzle == true){
    text = "</br>" + "Hero: I am the audience, I am the reason for you to continue your work, I am your reception, you are but a slave to me"
    + "</br>" + "Man: I am the critics, write the things that make you come to see the entertainment and what makes you don't." + "</br>"
     + "1. Hero: I am hype, I am enthusiasm" + "</br>" + "Or" + "</br>" + "2. Hero: I am loyalty"
    document.getElementById("chat-area").innerHTML += text
    Puzzle = false
    Entertainment = true
    inputTalk=""
    document.getElementById("input").value = null
  }
  if(hero == true && inputTalk == "1" && part4 == true && Entertainment == true){
    text = "</br>" + "Hero: I am hype, I am enthusiasm, I ignore the critics" + "</br>" + "Man: I am disapointment, I bring the object of hype down further."
     + "</br>" + "Hero: I am, I am, you win, take five coins as a token of your victory [press 0 to continue]"
    document.getElementById("chat-area").innerHTML += text
    Entertainment = false
    coins = coins - 5
    part4 =  false
    part3 = true
    inputTalk=""
    document.getElementById("input").value = null
  }
  if(hero == true && inputTalk == "2" && part4 == true && Entertainment == true){
    text = "</br>" + "Hero: I am loyalty, I am what brings fans in the end because they feel that they owe me." + "</br>"
    + "</br>" + "Man: I am betrayal, I break loyalty" + "</br>" + "1. Hero: I am punishment I keep loyalty in line" + "</br>" +
    "Man: Looks like we are at a draw, lets start over, press 1 to do so"
    document.getElementById("chat-area").innerHTML += text
    Entertainment = false
    Traveller = true
    inputTalk=""
    document.getElementById("input").value = null
  }
  //A
  if(hero == true && pickle == false && inputTalk == "A" && part4 == true && Traveller == true){
    text = "</br>" + "Skeleton: My turn" + "</br>" + "____you--->___/ __skeleton____ (block)" + "</br>" + "nothing happens" + "</br>" +
    "(A.)____<--you__skeleton____(retreat)" + "</br>" + "Or" + "</br>" + "(B.)____you / ____skeleton____(block)"
  if(pickle == true){
     text += "</br>" +
      "As you got to choose you position, the skeleton notices the pickle you carry with you, hids eyes(or what is left of them) are filled with fear" +
      "</br>" + "Skeleton: You carry the pickle of cursebreaking, you are unlike any human I have ever battled, take my gold and prizes, then leave me alone! (Press 0 to escape)"
      document.getElementById("chat-area").innerHTML += text
      Fallen = true
      coins = coins + 5
      Traveller = false
      part4 = false
      part3 = true
      inputTalk=""
      document.getElementById("input").value = null
    }
    else{
      text += ""

    document.getElementById("chat-area").innerHTML += text
    Traveller = false
    duel = true
    inputTalk=""
    document.getElementById("input").value = null
  }
  }

  if(hero == true && pickle == true && inputTalk == "A" && part4 == true && Traveller == true){
    text = "</br>" + "Skeleton: My turn" + "</br>" + "____you--->___/ __skeleton____ (block)" + "</br>" + "nothing happens" + "</br>" +
    "(A.)____<--you__skeleton____(retreat)" + "</br>" + "Or" + "</br>" + "(B.)____you / ____skeleton____(block)" + "</br>" +
    "As you got to choose you position, the skeleton notices the pickle you carry with you, hids eyes(or what is left of them) are filled with fear" +
    "</br>" + "Skeleton: You carry the pickle of cursebreaking, you are unlike any human I have ever battled, take my gold and prizes, then leave me alone!(press 0 to continue)"
    document.getElementById("chat-area").innerHTML += text
    Fallen = true
    coins = coins + 5
    Traveller = false
    part4 = false
    part3 = true
    inputTalk=""
    document.getElementById("input").value = null
  }
  //B
  if(hero == true && inputTalk == "B" && part4 == true && Traveller == true && pickle == false){
    text = "</br>" + "Skeleton: My turn" + "</br>" + "____you / ___ <--skeleton____ (attack)" + "</br>" + "nothing happens" + "</br>" +
    "(A.)____<--you__skeleton____(retreat)" + "</br>" + "Or" + "</br>" + "(B.)____you---> <--skeleton____(charge)"
    if(pickle == true){
       text += "</br>" +
        "As you got to choose you position, the skeleton notices the pickle you carry with you, hids eyes(or what is left of them) are filled with fear" +
        "</br>" + "Skeleton: You carry the pickle of cursebreaking, you are unlike any human I have ever battled, take my gold and prizes, then leave me alone!(press 0 to continue)"
        document.getElementById("chat-area").innerHTML += text
        Fallen = true
        coins = coins + 5
        Traveller = false
        part4 = false
        part3 = true
        inputTalk=""
        document.getElementById("input").value = null
      }
      else{
        text += ""

    document.getElementById("chat-area").innerHTML += text
    Traveller = false
    feint = true
    inputTalk=""
    document.getElementById("input").value = null
  }
  }
  if(hero == true && inputTalk == "C" && part4 == true && feint == true){
    text = "</br>" + "Press 0 to continue"
    document.getElementById("chat-area").innerHTML += text
    feint = false
    part4 = false
    part3 = true
    inputTalk=""
    document.getElementById("input").value = null
  }
  if(hero == true && inputTalk == "C" && part4 == true && duel == true){
    text = "</br>" + "Press 0 to continue"
    document.getElementById("chat-area").innerHTML += text
    duel = false
    part4 = false
    part3 = true
    inputTalk=""
    document.getElementById("input").value = null
  }
  if(hero == true && inputTalk == "B" && part4 == true && Traveller == true && pickle == true){
    text = "</br>" + "Skeleton: My turn" + "</br>" + "____you / ___ <--skeleton____ (block)" + "</br>" + "nothing happens" + "</br>" +
    "(A.)____<--you__skeleton____(retreat)" + "</br>" + "Or" + "</br>" + "(B.)____you / ____skeleton____(block)" + "</br>" +
    "As you got to choose you position, the skeleton notices the pickle you carry with you, hids eyes(or what is left of them) are filled with fear" +
    "</br>" + "Skeleton: You carry the pickle of cursebreaking, you are unlike any human I have ever battled, take my gold and prizes, then leave me alone!(press 0 to continue)"
    document.getElementById("chat-area").innerHTML += text
    Fallen = true
    coins = coins + 5
    Traveller = false
    part4 = false
    part3 = true
    inputTalk=""
    document.getElementById("input").value = null
  }//AA
  if(hero == true && inputTalk == "A" && part4 == true && duel == true){
    text = "</br>" + "Skeleton: My turn" + "</br>" + "____<---you___<---__skeleton____ (charge)" + "</br>" + "he is coming right at you!" + "</br>" +
    "(A.)____ you ----><---skeleton____(charge!!!)" + "</br>" + "Or" + "</br>" + "(B.)____you / __<---skeleton____(block)"
    document.getElementById("chat-area").innerHTML += text
    duel = false
    fence = true
    inputTalk=""
    document.getElementById("input").value = null
  }
  //BA
  if(hero == true && inputTalk == "A" && part4 == true && feint == true){
    text = "</br>" + "Skeleton: My turn" + "</br>" + "____ <--you ___ <--skeleton____ (charge)" + "</br>" + "nothing happens" + "</br>" +
    "(A.)____you /__skeleton____(block)" + "</br>" + "Or" + "</br>" + "(B.)____you---><---skeleton____(charge!!!)"
    document.getElementById("chat-area").innerHTML += text
    feint = false
    parry = true
    inputTalk=""
    document.getElementById("input").value = null
  }
  //ABX
  if(hero == true && inputTalk == "B" && part4 == true && duel == true){
    text = "</br>" + "Skeleton: My turn" + "</br>" + "____you /___<---__skeleton____ (charge)" + "</br>" + "nothing happens," + "</br>" +
    "Skeleton: I am weary of the chase, let's change things up" + "</br>" + "He rearranges his bones and cages our hero" + "</br>" +
    "One day later...." + "</br>" + "You wake up, the cage is blown to  pieces, and a man appears in front of you, do you" + "</br>" +
    "A. attack the stranger" + "</br>" + "Or" + "</br>" + "B. try to befriend the stranger"
    document.getElementById("chat-area").innerHTML += text
    duel = false
    strangerDanger = true
    inputTalk=""
    document.getElementById("input").value = null
  }
  //BBX
  if(hero == true && inputTalk == "B" && part4 == true && feint == true){
    text = "</br>" + "Skeleton: My turn" + "</br>" + "____ you---> ___ <--skeleton____ (charge)" + "</br>" + "you go head to head and collide" + "</br>" +
    "You get the skeleton's coins and a bone, but loose health, press 0 to continue"
    document.getElementById("chat-area").innerHTML += text
    feint = false
    part4 = false
    part3 = true
    inventory = true
    coins = coins + 5
    heroHealth = heroHealth - 3
    bone = true
    inputTalk=""
    document.getElementById("input").value = null
  }
  //AAAX
  if(hero == true && inputTalk == "A" && part4 == true && fence == true){
    text = "</br>" + "Skeleton: My turn" + "</br>" + "____you--><---__skeleton____ (charge)" + "</br>" + "you go head to head and collide" + "</br>" +
    "You get the skeleton's coins and a bone, but loose health, press 0 to continue"
    document.getElementById("chat-area").innerHTML += text
    fence = false
    part4 = false
    part3 = true
    inventory = true
    coins = coins + 5
    heroHealth = heroHealth - 3
    bone = true
    inputTalk=""
    document.getElementById("input").value = null
  }//AAB
  if(hero == true && inputTalk == "B" && part4 == true && fence == true){
    text = "</br>" + "Skeleton: My turn" + "</br>" + "____you/___/__skeleton____ (block)" + "</br>" + "he defends!" + "</br>" +
    "(A.)____ you ----> /skeleton____(charge!!!)" + "</br>" + "Or" + "</br>" + "(B.)____ <--you _/skeleton____(block)"
    document.getElementById("chat-area").innerHTML += text
    fence = false
    swordplay = true
    inputTalk=""
    document.getElementById("input").value = null
  }
//BAA
if(hero == true && inputTalk == "A" && part4 == true && parry == true){
  text = "</br>" + "Skeleton: My turn" + "</br>" + "____ you /___ <--skeleton____ (charge)" + "</br>" + "nothing happens and out of anger and impatience.." +
  "</br>" + "Skeleton: Remodus tercerius, yoyoama, cowtera." + "</br>" + "The incatation prevents you from blocking." +  "</br>" +
  "(A.)____ you ----> <---skeleton____(charge!!!)" + "</br>" + "Or" + "</br>" + "(B.)____ <--you _<---skeleton____(run)"
  document.getElementById("chat-area").innerHTML += text
  parry = false
  clash = true
  inputTalk=""
  document.getElementById("input").value = null
}
//BABX
if(hero == true && inputTalk == "B" && part4 == true && parry == true){
  text = "</br>" + "Skeleton: My turn" + "</br>" + "____ you ---> <--skeleton____ (charge)"  + "</br>" + "how reckless, you die."
  document.getElementById("chat-area").innerHTML += text
  parry = false
  inputTalk=""
  document.getElementById("input").value = null
}
//AABA
if(hero == true && inputTalk == "A" && part4 == true && swordplay == true){
  text = "</br>" + "Skeleton: My turn" + "</br>" + "____you--->_____skeleton____ (nothing)" + "</br>" + "Just as he puts down his shield you shishkebab him and he is defeated"
  + "</br>" +"You get money and a key, press 0 to continue"
  document.getElementById("chat-area").innerHTML += text
  swordplay = false
  part4 = false
  part3 = true
  key = true
  coins = coins + 5
  inputTalk=""
  document.getElementById("input").value = null
}
//AABB
if(hero == true && inputTalk == "B" && part4 == true && swordplay == true){
  text = "</br>" + "Skeleton: My turn" + "</br>" + "____<--you___!!!!!__skeleton____ (shake)" + "</br>" + "Your battling has caused the cave to collapse, you are trapped and you die"
  document.getElementById("chat-area").innerHTML += text
  swordplay = false
  inputTalk=""
  document.getElementById("input").value = null
}
//BAAA
if(hero == true && inputTalk == "A" && part4 == true && clash == true){
  text = "</br>" + "Skeleton: My turn" + "</br>" + "____ you---> skeleton____ (charge)" + "</br>" + "You crush your enemy" +
  "</br>" + "Hero: You were a fool  to take away my ability to block, that only makes me want to attack more!" + "</br>" + "He gives up and gives you coins and a key, press 0 to continue"
  document.getElementById("chat-area").innerHTML += text
  clash = false
  part4 = false
  part3 = true
  key = true
  coins = coins + 10
  inputTalk=""
  document.getElementById("input").value = null
}
//BAAB
if(hero == true && inputTalk == "B" && part4 == true && clash == true){
  text = "</br>" + "Skeleton: My turn" + "</br>" + "____ <---you___ <--skeleton____ (charge)" + "</br>" + "You did about the stupidest thing to do, running without a block, and the skeleton throws his sword into your back, and you die, press 1 to restart"
  document.getElementById("chat-area").innerHTML += text
  hero = false
  part1 = true
  sly = false
  part2 = false
  part3 = false
  part4 = false
  part5 = false
  part6 = false
  fight1Turn1 = false
  fight1Turn2 = false
  fight1Turn3 = false
  fightOneTurnOne = false
  fightOneTurnTwo = false
  fight1TurnTwo = false
  fight1TurnThree = false
  fightOneTurn2 = false
  fightOneTurnFour = false
  fightOneTurn3 = false
  fightATurnA = false
  fightATurn1 = false
  fight1TurnA = false
  fightOneTurnA = false
  fightATurnOne = false
  fightBTurnB = false
  fightCTurnC = false
  goblin1Life = 5
  firstcave = false
  Traveller = false
  Powerplay = false
  Puzzle = false
  Money = false
  humanity = false
  society = false
  school = false
  Gamble = false
  Entertainment = false
  duel = false
  fence = false
  clash = false
  feint = false
  parry = false
  strangerDanger = false
  swordplay = false
  cavern = false
  narrow = false
  dark = false
  darkness = false
  darker = false
  rock = false
  rocky = false
  cold = false
  colder = false
  darkers = false
  coldest = false
  coldead = false
  freeze = false
  freezer = false
  freezest = false
  pickle = false
  torch = false
  sword = false
  chest = false
  bone = false
  key = false
  bowAndArrow = false
  strengthPotion = 0
  morphPotion = 0
  Skyward = false
  Shishkebab = false
  Fallen = false
  once = false
  heroHealth = 10
  inventory = false
  coins = 0
  weapons = false
  potions = false
  inputTalk=""
  document.getElementById("input").value = null
}
if(hero == true && key == true && chest == true && once == false){
  text = "</br>" + "Your key opens the chest and you receive 20 gold and a new move, Shishkebab"
  document.getElementById("chat-area").innerHTML += text
  coins = coins + 20
  Shishkebab = true
  once = true
  inputTalk=""
  document.getElementById("input").value = null
}
if(hero == true && inputTalk == "2" && part4 == true && firstcave == false && cavern == false && narrow == false && dark == false && darkness == false &&  darker == false && rock == false && rocky == false && cold == false && colder == false && darkers == false && coldest == false && coldead == false
&& freeze == false && freezer == false && freezest == false){
  text = "</br>" + "You enter a long dark dank cavern you can't see much but you can see the paths" + "</br>" +
  "1. Left" + "</br>" + "2. Straight" + "</br>" +  "3. Right"
  if(torch == true){
     text += "</br>" + "Your scroll is talking about this area, use it. You see that to the right there is a dead end, the other two paths look fine."
    }
    else{
      text += ""
    }
  document.getElementById("chat-area").innerHTML += text
  cavern = true
  inputTalk=""
  document.getElementById("input").value = null
}
//1
if(hero == true && inputTalk == "1" && part4 == true && cavern == true){
  text = "</br>" + "Pretty much the same as last time." + "</br>" +
  "1. Left" + "</br>" + "2. Straight" + "</br>" +  "3. Right" + "</br>" + "4. Back"
  if(torch == true){
     text += "</br>" + "All paths look fine. Listen to your scroll if you have it!"
    }
    else{
      text += ""
    }
  document.getElementById("chat-area").innerHTML += text
  cavern = false
  narrow = true
  inputTalk=""
  document.getElementById("input").value = null
}
//2
if(hero == true && inputTalk == "2" && part4 == true && cavern == true){
  text = "</br>" + "More darkness." + "</br>" +
  "1. Left" + "</br>" + "2. Straight" + "</br>" +  "3. Right" + "</br>" + "4. Back"
  if(torch == true){
     text += "</br>" + "Again, the right is a dead end, the other paths look fine. If you have your scroll, listen to it!"
    }
    else{
      text += ""
    }
  document.getElementById("chat-area").innerHTML += text
  cavern = false
  dark = true
  inputTalk=""
  document.getElementById("input").value = null
}
//3X
if(hero == true && inputTalk == "3" && part4 == true && cavern == true){
  text = "</br>" + "It is a dead end, press 1 or 2." + "</br>" +
  "1. Left" + "</br>" + "2. Straight" + "</br>" +  "3. Right" + "</br>" + "4. Back"
  if(torch == true){
     text += "</br>" + "Press 4 to go back, it works. If you have your scroll, listen to it!"
    }
    else{
      text += ""
    }
  document.getElementById("chat-area").innerHTML += text
  inputTalk=""
  document.getElementById("input").value = null
}
//11
if(hero == true && inputTalk == "1" && part4 == true && narrow == true){
  text = "</br>" + "More of the same." + "</br>" +
  "1. Left" + "</br>" + "2. Straight" + "</br>" +  "3. Right" + "</br>" + "4. Back"
  if(torch == true){
     text += "</br>" + "The left path look fine, the straight path looks long, windy and dangerous, the right path is shimmering, like there is something of value in there."
    }
    else{
      text += ""
    }
  document.getElementById("chat-area").innerHTML += text
  narrow = false
  rock = true
  inputTalk=""
  document.getElementById("input").value = null
}
//12
if(hero == true && inputTalk == "2" && part4 == true && narrow == true){
  text = "</br>" + "More lack of light." + "</br>" +
  "1. Left" + "</br>" + "2. Straight" + "</br>" +  "3. Right" + "</br>" + "4. Back"
  if(torch == true){
     text += "</br>" + "The left path doesn't look like it leads anywhere, but there is writing on the wall that might mean something, the straight path looks omnious and so does the right path, pressing 4 to go back is always an option."
    }
    else{
      text += ""
    }
  document.getElementById("chat-area").innerHTML += text
  narrow = false
  rocky = true
  inputTalk=""
  document.getElementById("input").value = null
}
//13
if(hero == true && inputTalk == "3" && part4 == true && narrow == true){
  text = "</br>" + "Do you expect anything to change?" + "</br>" +
  "1. Left" + "</br>" + "2. Straight" + "</br>" +  "3. Right" + "</br>" + "4. Back"
  if(torch == true){
     text += "</br>" + "The left path is a dead end, but it is like a room, with objects in it, looks like a horder might have lived in there, the straight path looks fine, and the right path looks like it doesn't lead anywhere."
    }
    else{
      text += ""
    }
  document.getElementById("chat-area").innerHTML += text
  narrow = false
  cold = true
  inputTalk=""
  document.getElementById("input").value = null
}
//14
if(hero == true && inputTalk == "4" && part4 == true && narrow == true){
  text = "</br>" + "Back to the previous room." + "</br>" +
  "1. Left" + "</br>" + "2. Straight" + "</br>" +  "3. Right" + "</br>" + "4. Back"
  if(torch == true){
     text += "</br>" + "It actually takes you back two rooms as you look at a familiar area."
    }
    else{
      text += ""
    }
  document.getElementById("chat-area").innerHTML += text
  narrow = false
  cavern = true
  inputTalk=""
  document.getElementById("input").value = null
}
//21
if(hero == true && inputTalk == "1" && part4 == true && dark == true){
  text = "</br>" + "It." + "</br>" +
  "1. Left" + "</br>" + "2. Straight" + "</br>" + "3. Back"
  if(torch == true){
     text += "</br>" + "Looks like you only have three options this time, to the left there is a room with cave drawings, straight there is a the shimmering of water maybe? Or you could always go back."
    }
    else{
      text += ""
    }
  document.getElementById("chat-area").innerHTML += text
  dark = false
  darker = true
  inputTalk=""
  document.getElementById("input").value = null
}
//22
if(hero == true && inputTalk == "1" && part4 == true && dark == true){
  text = "</br>" + "It." + "</br>" +
  "1. Left" + "</br>" + "2. Straight" + "</br>" +  "3. Right" + "</br>" + "4. Back"
  if(torch == true){
     text += "</br>" + "You know that the paths to the left and right are either dead ends or traps by their stench, but from the straight path comes light and the sounds of nature."
    }
    else{
      text += ""
    }
  document.getElementById("chat-area").innerHTML += text
  dark = false
  darkers = true
  inputTalk=""
  document.getElementById("input").value = null
}
//23X
if(hero == true && inputTalk == "1" && part4 == true && dark == true){
  text = "</br>" + "Dead end, try a different button." + "</br>" +
  "1. Left" + "</br>" + "2. Straight" + "</br>" +  "3. Right" + "</br>" + "4. Back"
  if(torch == true){
     text += "</br>" + "Press 4 to go back, it works. But be careful again since it takes you two rooms back."
    }
    else{
      text += ""
    }
  document.getElementById("chat-area").innerHTML += text
  dark = false
  cavern = true
  inputTalk=""
  document.getElementById("input").value = null
}
//24
if(hero == true && inputTalk == "4" && part4 == true && dark == true){
  text = "</br>" + "Back to the previous room." + "</br>" +
  "1. Left" + "</br>" + "2. Straight" + "</br>" +  "3. Right" + "</br>" + "4. Back"
  if(torch == true){
     text += "</br>" + "Only do this when you really have to, there is an unexpected twist, as you look at the cave writings on the wall."
    }
    else{
      text += ""
    }
  document.getElementById("chat-area").innerHTML += text
  dark = false
  cavern = true
  inputTalk=""
  document.getElementById("input").value = null
}
//111
if(hero == true && inputTalk == "1" && part4 == true && rock == true){
  text = "</br>" + "Keep on trudging." + "</br>" +
  "1. Left"
  if(torch == true){
     text += "</br>" + "Only one option, suspious."
    }
    else{
      text += ""
    }
  document.getElementById("chat-area").innerHTML += text
  rock = false
  darkness = true
  inputTalk=""
  document.getElementById("input").value = null
}
//112X
if(hero == true && inputTalk == "2" && part4 == true && rock == true){
  text = "</br>" + "Insanity plagues you. Press 1 to restart"
  if(torch == true){
     text += "</br>" + "Looks like you are incapable of escaping due to bad mental health, sorry."
    }
    else{
      text += ""
    }
  document.getElementById("chat-area").innerHTML += text
  hero = false
  part1 = true
  sly = false
  part2 = false
  part3 = false
  part4 = false
  part5 = false
  part6 = false
  fight1Turn1 = false
  fight1Turn2 = false
  fight1Turn3 = false
  fightOneTurnOne = false
  fightOneTurnTwo = false
  fight1TurnTwo = false
  fight1TurnThree = false
  fightOneTurn2 = false
  fightOneTurnFour = false
  fightOneTurn3 = false
  fightATurnA = false
  fightATurn1 = false
  fight1TurnA = false
  fightOneTurnA = false
  fightATurnOne = false
  fightBTurnB = false
  fightCTurnC = false
  goblin1Life = 5
  firstcave = false
  Traveller = false
  Powerplay = false
  Puzzle = false
  Money = false
  humanity = false
  society = false
  school = false
  Gamble = false
  Entertainment = false
  duel = false
  fence = false
  clash = false
  feint = false
  parry = false
  strangerDanger = false
  swordplay = false
  cavern = false
  narrow = false
  dark = false
  darkness = false
  darker = false
  rock = false
  rocky = false
  cold = false
  colder = false
  darkers = false
  coldest = false
  coldead = false
  freeze = false
  freezer = false
  freezest = false
  pickle = false
  torch = false
  sword = false
  chest = false
  bone = false
  key = false
  bowAndArrow = false
  strengthPotion = 0
  morphPotion = 0
  Skyward = false
  Shishkebab = false
  Fallen = false
  once = false
  heroHealth = 10
  inventory = false
  coins = 0
  weapons = false
  potions = false
  inputTalk=""
  document.getElementById("input").value = null
}
//113X
if(hero == true && inputTalk == "3" && part4 == true && rock == true){
  text = "</br>" + "Looks you found a secret passage, there is ten gold and a torch. Now try a different button." + "</br>" +
  "1. Left" + "</br>" + "2. Straight" + "</br>" +  "3. Right" + "</br>" + "4. Back"
  if(torch == true){
     text += "</br>" + "Well you already have a torch but you have another one now."
    }
    else{
      text += ""
    }
  document.getElementById("chat-area").innerHTML += text
  rock = false
  narrow = true
  coins = coins + 5
  torch = true
  inputTalk=""
  document.getElementById("input").value = null
}
//114
if(hero == true && inputTalk == "4" && part4 == true && rock == true){
  text = "</br>" + "Back to the previous room." + "</br>" +
  "1. Left" + "</br>" + "2. Straight" + "</br>" +  "3. Right" + "</br>" + "4. Back"
  if(torch == true){
     text += "</br>" + "Takes you back two rooms."
    }
    else{
      text += ""
    }
  document.getElementById("chat-area").innerHTML += text
  rock = false
  narrow = true
  inputTalk=""
  document.getElementById("input").value = null
}
//121X
if(hero == true && inputTalk == "1" && part4 == true && rocky == true){
  text = "</br>" + "You found a special room, it says, to avoid traps, go back and go right. You go back and try a different button"
  + "</br>" + "1. Left" + "</br>" + "2. Straight" + "</br>" +  "3. Right" + "</br>" + "4. Back"
  if(torch == true){
     text += "</br>" + "You should probably listen to this."
    }
    else{
      text += ""
    }
  document.getElementById("chat-area").innerHTML += text
  rocky = false
  narrow = true
  inputTalk=""
  document.getElementById("input").value = null
}
//122X
if(hero == true && inputTalk == "2" && part4 == true && rocky == true){
  text = "</br>" + "You hit a trap and die, press 1 to restart"
  if(torch == true){
     text += "</br>" + "The end."
    }
    else{
      text += ""
    }
  document.getElementById("chat-area").innerHTML += text
  hero = false
  part1 = true
  sly = false
  part2 = false
  part3 = false
  part4 = false
  part5 = false
  part6 = false
  fight1Turn1 = false
  fight1Turn2 = false
  fight1Turn3 = false
  fightOneTurnOne = false
  fightOneTurnTwo = false
  fight1TurnTwo = false
  fight1TurnThree = false
  fightOneTurn2 = false
  fightOneTurnFour = false
  fightOneTurn3 = false
  fightATurnA = false
  fightATurn1 = false
  fight1TurnA = false
  fightOneTurnA = false
  fightATurnOne = false
  fightBTurnB = false
  fightCTurnC = false
  goblin1Life = 5
  firstcave = false
  Traveller = false
  Powerplay = false
  Puzzle = false
  Money = false
  humanity = false
  society = false
  school = false
  Gamble = false
  Entertainment = false
  duel = false
  fence = false
  clash = false
  feint = false
  parry = false
  strangerDanger = false
  swordplay = false
  cavern = false
  narrow = false
  dark = false
  darkness = false
  darker = false
  rock = false
  rocky = false
  cold = false
  colder = false
  darkers = false
  coldest = false
  coldead = false
  freeze = false
  freezer = false
  freezest = false
  pickle = false
  torch = false
  sword = false
  chest = false
  bone = false
  key = false
  bowAndArrow = false
  strengthPotion = 0
  morphPotion = 0
  Skyward = false
  Shishkebab = false
  Fallen = false
  once = false
  heroHealth = 10
  inventory = false
  coins = 0
  weapons = false
  potions = false
  inputTalk=""
  document.getElementById("input").value = null
}
//123X
if(hero == true && inputTalk == "3" && part4 == true && rocky == true){
  text = "</br>" + "You hit a trap and die, press 1 to restart"
  if(torch == true){
     text += "</br>" + "The end."
    }
    else{
      text += ""
    }
  document.getElementById("chat-area").innerHTML += text
  hero = false
  part1 = true
  sly = false
  part2 = false
  part3 = false
  part4 = false
  part5 = false
  part6 = false
  fight1Turn1 = false
  fight1Turn2 = false
  fight1Turn3 = false
  fightOneTurnOne = false
  fightOneTurnTwo = false
  fight1TurnTwo = false
  fight1TurnThree = false
  fightOneTurn2 = false
  fightOneTurnFour = false
  fightOneTurn3 = false
  fightATurnA = false
  fightATurn1 = false
  fight1TurnA = false
  fightOneTurnA = false
  fightATurnOne = false
  fightBTurnB = false
  fightCTurnC = false
  goblin1Life = 5
  firstcave = false
  Traveller = false
  Powerplay = false
  Puzzle = false
  Money = false
  humanity = false
  society = false
  school = false
  Gamble = false
  Entertainment = false
  duel = false
  fence = false
  clash = false
  feint = false
  parry = false
  strangerDanger = false
  swordplay = false
  cavern = false
  narrow = false
  dark = false
  darkness = false
  darker = false
  rock = false
  rocky = false
  cold = false
  colder = false
  darkers = false
  coldest = false
  coldead = false
  freeze = false
  freezer = false
  freezest = false
  pickle = false
  torch = false
  sword = false
  chest = false
  bone = false
  key = false
  bowAndArrow = false
  strengthPotion = 0
  morphPotion = 0
  Skyward = false
  Shishkebab = false
  Fallen = false
  once = false
  heroHealth = 10
  inventory = false
  coins = 0
  weapons = false
  potions = false
  inputTalk=""
  document.getElementById("input").value = null
}
//124
if(hero == true && inputTalk == "4" && part4 == true && rocky == true){
  text = "</br>" + "Back to the previous room." + "</br>" +
  "1. Left" + "</br>" + "2. Straight" + "</br>" +  "3. Right" + "</br>" + "4. Back"
  if(torch == true){
     text += "</br>" + "There is a catch."
    }
    else{
      text += ""
    }
  document.getElementById("chat-area").innerHTML += text
  rocky = false
  narrow = true
  inputTalk=""
  document.getElementById("input").value = null
}
//131X
if(hero == true && inputTalk == "1" && part4 == true && cold == true){
  text = "</br>" + "You found a secret room, it has a picture on the wall that teaches you a new move, Shishkebab, you also find a Pickle, try another button." + "</br>" +
  "1. Left" + "</br>" + "2. Straight" + "</br>" +  "3. Right" + "</br>" + "4. Back"
  if(torch == true){
     text += "</br>" + "This is one weird pickle, it has an image of a skeleton dying on it, if you have gone South, you know what your new move is useful for."
    }
    else{
      text += ""
    }
  document.getElementById("chat-area").innerHTML += text
  cold = false
  narrow = true
  Shishkebab = true
  Bone = true
  inputTalk=""
  document.getElementById("input").value = null
}
//132
if(hero == true && inputTalk == "2" && part4 == true && cold == true){
  text = "</br>" + "Whew, no traps here." + "</br>" +
  "1. Left" + "</br>" + "2. Straight" + "</br>" +  "3. Right" + "</br>" + "4. Back"
  if(torch == true){
     text += "</br>" + "Your instinct is right, there are no traps, looks safe to continue The left path looks like a dead end, the straight path looks safe, and the right path smells of nature and freedom."
    }
    else{
      text += ""
    }
  document.getElementById("chat-area").innerHTML += text
  cold = false
  colder = true
  inputTalk=""
  document.getElementById("input").value = null
}
//133X
if(hero == true && inputTalk == "3" && part4 == true && cold == true){
  text = "</br>" + "It's a dead end, try a different button." + "</br>" +
  "1. Left" + "</br>" + "2. Straight" + "</br>" +  "3. Right" + "</br>" + "4. Back"
  if(torch == true){
     text += "</br>" + "Don't hit back, just try a different button as if you were in the previous room."
    }
    else{
      text += ""
    }
  document.getElementById("chat-area").innerHTML += text
  cold = false
  narrow = true
  inputTalk=""
  document.getElementById("input").value = null
}
//134
if(hero == true && inputTalk == "4" && part4 == true && cold == true){
  text = "</br>" + "Back to the previous room." + "</br>" +
  "1. Left" + "</br>" + "2. Straight" + "</br>" +  "3. Right" + "</br>" + "4. Back"
  if(torch == true){
     text += "</br>" + "This actually takes you back two rooms."
    }
    else{
      text += ""
    }
  document.getElementById("chat-area").innerHTML += text
  cold = false
  narrow = true
  inputTalk=""
  document.getElementById("input").value = null
}
//211X
if(hero == true && inputTalk == "1" && part4 == true && darker == true){
  text = "</br>" + "Dead end. Try a different button." + "</br>" +
  "1. Left" + "</br>" + "2. Straight" + "</br>" +  "3. Right" + "</br>" + "4. Back"
  if(torch == true){
     text += "</br>" + "Try a different button."
    }
    else{
      text += ""
    }
  document.getElementById("chat-area").innerHTML += text
  darker = false
  dark = true
  inputTalk=""
  document.getElementById("input").value = null
}
//212X
if(hero == true && inputTalk == "2" && part4 == true && darker == true){
  text = "</br>" + "You find a room with twenty gold" + "</br>" +
  "1. Left" + "</br>" + "2. Straight" + "</br>" +  "3. Right" + "</br>" + "4. Back"
  if(torch == true){
     text += "</br>" + "Now you can buy things in the market, try a different button now as if you were in the previous room."
    }
    else{
      text += ""
    }
  document.getElementById("chat-area").innerHTML += text
  darker = false
  dark = true
  coins = coins + 20
  inputTalk=""
  document.getElementById("input").value = null
}
//214
if(hero == true && inputTalk == "4" && part4 == true && darker == true){
  text = "</br>" + "Back to the previous room." + "</br>" +
  "1. Left" + "</br>" + "2. Straight" + "</br>" +  "3. Right" + "</br>" + "4. Back"
  if(torch == true){
     text += "</br>" + "If you haven't tried doing this before now, good for you."
    }
    else{
      text += ""
    }
  document.getElementById("chat-area").innerHTML += text
  darker = false
  dark = true
  inputTalk=""
  document.getElementById("input").value = null
}
//221X
if(hero == true && inputTalk == "1" && part4 == true && darkers == true){
  text = "</br>" + "You hit a dead end. Try a different button." + "</br>" +
  "1. Left" + "</br>" + "2. Straight" + "</br>" +  "3. Right" + "</br>" + "4. Back"
  if(torch == true){
     text += "</br>" + "That sounds good, try a different button, but not back."
    }
    else{
      text += ""
    }
  document.getElementById("chat-area").innerHTML += text
  darkers = false
  dark = true
  inputTalk=""
  document.getElementById("input").value = null
}
//222X
if(hero == true && inputTalk == "2" && part4 == true && darkers == true){
  text = "</br>" + "You have escaped the cave, press 0 to continue."
  if(torch == true){
     text += "</br>" + "Awesome! No tricks here."
    }
    else{
      text += ""
    }
  document.getElementById("chat-area").innerHTML += text
  darkers = false
  part4 = false
  part3 = true
  heroHealth = heroHealth - 3
  inputTalk=""
  document.getElementById("input").value = null
}
//223X
if(hero == true && inputTalk == "3" && part4 == true && darkers == true){
  text = "</br>" + "You die, press 1 to restart"
  if(torch == true){
     text += "</br>" + "Sorry, nothing you can do."
    }
    else{
      text += ""
    }
    hero = false
    part1 = true
    sly = false
    part2 = false
    part3 = false
    part4 = false
    part5 = false
    part6 = false
    fight1Turn1 = false
    fight1Turn2 = false
    fight1Turn3 = false
    fightOneTurnOne = false
    fightOneTurnTwo = false
    fight1TurnTwo = false
    fight1TurnThree = false
    fightOneTurn2 = false
    fightOneTurnFour = false
    fightOneTurn3 = false
    fightATurnA = false
    fightATurn1 = false
    fight1TurnA = false
    fightOneTurnA = false
    fightATurnOne = false
    fightBTurnB = false
    fightCTurnC = false
    goblin1Life = 5
    firstcave = false
    Traveller = false
    Powerplay = false
    Puzzle = false
    Money = false
    humanity = false
    society = false
    school = false
    Gamble = false
    Entertainment = false
    duel = false
    fence = false
    clash = false
    feint = false
    parry = false
    strangerDanger = false
    swordplay = false
    cavern = false
    narrow = false
    dark = false
    darkness = false
    darker = false
    rock = false
    rocky = false
    cold = false
    colder = false
    darkers = false
    coldest = false
    coldead = false
    freeze = false
    freezer = false
    freezest = false
    pickle = false
    torch = false
    sword = false
    chest = false
    bone = false
    key = false
    bowAndArrow = false
    strengthPotion = 0
    morphPotion = 0
    Skyward = false
    Shishkebab = false
    Fallen = false
    once = false
    heroHealth = 10
    inventory = false
    coins = 0
    weapons = false
    potions = false
  document.getElementById("chat-area").innerHTML += text
  darkers = false
  inputTalk=""
  document.getElementById("input").value = null
}
//224
if(hero == true && inputTalk == "4" && part4 == true && darker == true){
  text = "</br>" + "Back to the previous room." + "</br>" +
  "1. Left" + "</br>" + "2. Straight" + "</br>" +  "3. Right" + "</br>" + "4. Back"
  if(torch == true){
     text += "</br>" + "Note: It takes you back two rooms not one."
    }
    else{
      text += ""
    }
  document.getElementById("chat-area").innerHTML += text
  darkers = false
  dark = true
  inputTalk=""
  document.getElementById("input").value = null
}
//1111
if(hero == true && inputTalk == "1" && part4 == true && rock == true){
  text = "</br>" + "Keep, keep on trudging." + "</br>" +
  "1. Left"
  if(torch == true){
     text += "</br>" + "You are stuck in an endless cycle, sorry."
    }
    else{
      text += ""
    }
  document.getElementById("chat-area").innerHTML += text
  rock = false
  darkness = true
  inputTalk=""
  document.getElementById("input").value = null
}
//11111 rewind
if(hero == true && inputTalk == "1" && part4 == true && darkness == true){
  text = "</br>" + "Keep, keep, keep on trudging." + "</br>" +
  "1. Left"
  if(torch == true){
     text += "</br>" + "You are stuck in an endless cycle, sorry."
    }
    else{
      text += ""
    }
  document.getElementById("chat-area").innerHTML += text
  darkness= false
  rock = true
  inputTalk=""
  document.getElementById("input").value = null
}
//1321X
if(hero == true && inputTalk == "1" && part4 == true && colder == true){
  text = "</br>" + "Nothing here, the way out is right, go back and go right." + "</br>" +
  "1. Left" + "</br>" + "2. Straight" + "</br>" +  "3. Right" + "</br>" + "4. Back"
  if(torch == true){
     text += "</br>" + "Actually they lied about going back, this room already does that, just hit 2."
    }
    else{
      text += ""
    }
  document.getElementById("chat-area").innerHTML += text
  colder = false
  cold = true
  inputTalk=""
  document.getElementById("input").value = null
}
//1322
if(hero == true && inputTalk == "2" && part4 == true && colder == true){
  text = "</br>" + "Same safety." + "</br>" +
  "1. Left" + "</br>" + "2. Straight" + "</br>" +  "3. Right" + "</br>" + "4. Back"
  if(torch == true){
     text += "</br>" + "First path looks wealthy, informative, and leads nowhere, you are warned not to go straight, and the right path looks like it continues but there is something odd about it."
    }
    else{
      text += ""
    }
  document.getElementById("chat-area").innerHTML += text
  colder = false
  coldest = true
  inputTalk=""
  document.getElementById("input").value = null
}
//1323X
if(hero == true && inputTalk == "3" && part4 == true && colder == true){
  text = "</br>" + "You made it out! Press 1 to continue" + "</br>" +
  "1. Left" + "</br>" + "2. Straight" + "</br>" +  "3. Right" + "</br>" + "4. Back"
  if(torch == true){
     text += "</br>" + "You made it out, but you have found a new challenge, be careful."
    }
    else{
      text += ""
    }
  document.getElementById("chat-area").innerHTML += text
  colder = false
  Traveller = true
  inputTalk=""
  document.getElementById("input").value = null
}
//13221
if(hero == true && inputTalk == "1" && part4 == true && coldest == true){
  text = "</br>" + "Turn back, going right in the previous room will found you solice you also find five gold." + "</br>" +
  "1. Left" + "</br>" + "2. Straight" + "</br>" +  "3. Right" + "</br>" + "4. Back"
  if(torch == true){
     text += "</br>" + "Again, you are already going back, no need to press back, just go right."
    }
    else{
      text += ""
    }
  document.getElementById("chat-area").innerHTML += text
  coldest = false
  colder = true
  coins = coins + 5
  inputTalk=""
  document.getElementById("input").value = null
}
//13222
if(hero == true && inputTalk == "2" && part4 == true && coldest == true){
  text = "</br>" + "You were warned, try again." + "</br>" +
  "1. Left" + "</br>" + "2. Straight" + "</br>" +  "3. Right" + "</br>" + "4. Back"
  if(torch == true){
     text += "</br>" + "What did I say."
    }
    else{
      text += ""
    }
  document.getElementById("chat-area").innerHTML += text
  coldest = false
  cavern = true
  inputTalk=""
  document.getElementById("input").value = null
}
//13223
if(hero == true && inputTalk == "3" && part4 == true && coldest == true){
  text = "</br>" + "Any forward direction will kill you, any backward direction will be a forward direction" + "</br>" +
  "1. Left" + "</br>" + "2. Straight" + "</br>" +  "3. Right" + "</br>"
  if(torch == true){
     text += "</br>" + "This riddle is misleading, think of the coma as a semicolon and that the two statements are unrelated."
    }
    else{
      text += ""
    }
  document.getElementById("chat-area").innerHTML += text
  coldest = false
  coldead = true
  inputTalk=""
  document.getElementById("input").value = null
}
//132231
if(hero == true && inputTalk == "1" && part4 == true && coldead == true){
  text = "</br>" + "You die, press 1 to restart"
  if(torch == true){
     text += "</br>" + "Should of listened to my warning."
    }
    else{
      text += ""
    }
  document.getElementById("chat-area").innerHTML += text
  hero = false
  part1 = true
  sly = false
  part2 = false
  part3 = false
  part4 = false
  part5 = false
  part6 = false
  fight1Turn1 = false
  fight1Turn2 = false
  fight1Turn3 = false
  fightOneTurnOne = false
  fightOneTurnTwo = false
  fight1TurnTwo = false
  fight1TurnThree = false
  fightOneTurn2 = false
  fightOneTurnFour = false
  fightOneTurn3 = false
  fightATurnA = false
  fightATurn1 = false
  fight1TurnA = false
  fightOneTurnA = false
  fightATurnOne = false
  fightBTurnB = false
  fightCTurnC = false
  goblin1Life = 5
  firstcave = false
  Traveller = false
  Powerplay = false
  Puzzle = false
  Money = false
  humanity = false
  society = false
  school = false
  Gamble = false
  Entertainment = false
  duel = false
  fence = false
  clash = false
  feint = false
  parry = false
  strangerDanger = false
  swordplay = false
  cavern = false
  narrow = false
  dark = false
  darkness = false
  darker = false
  rock = false
  rocky = false
  cold = false
  colder = false
  darkers = false
  coldest = false
  coldead = false
  freeze = false
  freezer = false
  freezest = false
  pickle = false
  torch = false
  sword = false
  chest = false
  bone = false
  key = false
  bowAndArrow = false
  strengthPotion = 0
  morphPotion = 0
  Skyward = false
  Shishkebab = false
  Fallen = false
  once = false
  heroHealth = 10
  inventory = false
  coins = 0
  weapons = false
  potions = false
  inputTalk=""
  document.getElementById("input").value = null
}
//1322312
if(hero == true && inputTalk == "2" && part4 == true && coldead == true){
  text = "</br>" + "You die, press 1 to restart"
  if(torch == true){
     text += "</br>" + "Its true."
    }
    else{
      text += ""
    }
  document.getElementById("chat-area").innerHTML += text
  hero = false
  part1 = true
  sly = false
  part2 = false
  part3 = false
  part4 = false
  part5 = false
  part6 = false
  fight1Turn1 = false
  fight1Turn2 = false
  fight1Turn3 = false
  fightOneTurnOne = false
  fightOneTurnTwo = false
  fight1TurnTwo = false
  fight1TurnThree = false
  fightOneTurn2 = false
  fightOneTurnFour = false
  fightOneTurn3 = false
  fightATurnA = false
  fightATurn1 = false
  fight1TurnA = false
  fightOneTurnA = false
  fightATurnOne = false
  fightBTurnB = false
  fightCTurnC = false
  goblin1Life = 5
  firstcave = false
  Traveller = false
  Powerplay = false
  Puzzle = false
  Money = false
  humanity = false
  society = false
  school = false
  Gamble = false
  Entertainment = false
  duel = false
  fence = false
  clash = false
  feint = false
  parry = false
  strangerDanger = false
  swordplay = false
  cavern = false
  narrow = false
  dark = false
  darkness = false
  darker = false
  rock = false
  rocky = false
  cold = false
  colder = false
  darkers = false
  coldest = false
  coldead = false
  freeze = false
  freezer = false
  freezest = false
  pickle = false
  torch = false
  sword = false
  chest = false
  bone = false
  key = false
  bowAndArrow = false
  strengthPotion = 0
  morphPotion = 0
  Skyward = false
  Shishkebab = false
  Fallen = false
  once = false
  heroHealth = 10
  inventory = false
  coins = 0
  weapons = false
  potions = false
  inputTalk=""
  document.getElementById("input").value = null
}
//1322313
if(hero == true && inputTalk == "3" && part4 == true && coldead == true){
  text = "</br>" + "You die, press 1 to restart"
  if(torch == true){
     text += "</br>" + "Puzzles aren't your strength I see."
    }
    else{
      text += ""
    }
  document.getElementById("chat-area").innerHTML += text
  hero = false
  part1 = true
  sly = false
  part2 = false
  part3 = false
  part4 = false
  part5 = false
  part6 = false
  fight1Turn1 = false
  fight1Turn2 = false
  fight1Turn3 = false
  fightOneTurnOne = false
  fightOneTurnTwo = false
  fight1TurnTwo = false
  fight1TurnThree = false
  fightOneTurn2 = false
  fightOneTurnFour = false
  fightOneTurn3 = false
  fightATurnA = false
  fightATurn1 = false
  fight1TurnA = false
  fightOneTurnA = false
  fightATurnOne = false
  fightBTurnB = false
  fightCTurnC = false
  goblin1Life = 5
  firstcave = false
  Traveller = false
  Powerplay = false
  Puzzle = false
  Money = false
  humanity = false
  society = false
  school = false
  Gamble = false
  Entertainment = false
  duel = false
  fence = false
  clash = false
  feint = false
  parry = false
  strangerDanger = false
  swordplay = false
  cavern = false
  narrow = false
  dark = false
  darkness = false
  darker = false
  rock = false
  rocky = false
  cold = false
  colder = false
  darkers = false
  coldest = false
  coldead = false
  freeze = false
  freezer = false
  freezest = false
  pickle = false
  torch = false
  sword = false
  chest = false
  bone = false
  key = false
  bowAndArrow = false
  strengthPotion = 0
  morphPotion = 0
  Skyward = false
  Shishkebab = false
  Fallen = false
  once = false
  heroHealth = 10
  inventory = false
  coins = 0
  weapons = false
  potions = false
  inputTalk=""
  document.getElementById("input").value = null
}
//1322314
if(hero == true && inputTalk == "4" && part4 == true && coldead == true){
  text = "</br>" + "Puzzle solved!" + "</br>" +
  "1. Left" + "</br>" +  "3. Right" + "</br>"
  if(torch == true){
     text += "</br>" + "Left keeps going, right ends"
    }
    else{
      text += ""
    }
  document.getElementById("chat-area").innerHTML += text
  coldead = false
  freeze = true
  inputTalk=""
  document.getElementById("input").value = null
}
//13223143
if(hero == true && inputTalk == "3" && part4 == true && freeze == true){
  text = "</br>" + "Close, but no cigar, try another button." + "</br>" +
  "1. Left" + "</br>" +  "3. Right" + "</br>"
  if(torch == true){
     text += "</br>" + "What did I say."
    }
    else{
      text += ""
    }
  document.getElementById("chat-area").innerHTML += text
  freeze = false
  coldead = true
  inputTalk=""
  document.getElementById("input").value = null
}
//13223141
if(hero == true && inputTalk == "1" && part4 == true && freeze == true){
  text = "</br>" + "Exit to your right." + "</br>" +
  "1. Left" + "</br>" +  "3. Right" + "</br>"
  if(torch == true){
     text += "</br>" + "But is it though."
    }
    else{
      text += ""
    }
  document.getElementById("chat-area").innerHTML += text
  freeze = false
  freezer = true
  inputTalk=""
  document.getElementById("input").value = null
}
//132231411
if(hero == true && inputTalk == "1" && part4 == true && freezer == true){
  text = "</br>" + "You  have escaped! You get 30 gold, a Sword, and a new fighting move, The Fallen. Press 0 to continue" + "</br>" +
  "1. Left" + "</br>" +  "3. Right" + "</br>"
  if(torch == true){
     text += "</br>" + "Good thinking, but did you have the scroll."
    }
    else{
      text += ""
    }
  document.getElementById("chat-area").innerHTML += text
  freezer = false
  part4 = false
  part3 = true
  Fallen = true
  coins = coins + 30
  sword = true
  inputTalk=""
  document.getElementById("input").value = null
}
//132231413
if(hero == true && inputTalk == "3" && part4 == true && freezer == true){
  text = "</br>" + "You escaped, press 2 to continue"
  if(torch == true){
     text += "</br>" + "There is a new challenge ahead, home you brought your pickle."
    }
    else{
      text += ""
    }
  document.getElementById("chat-area").innerHTML += text
  freezer = false
  Traveller = true
  inputTalk=""
  document.getElementById("input").value = null
}
}
//lRSS RBLL




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
