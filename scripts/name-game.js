var theName = prompt("What is the name?");

var vowelishes = "aefhilmnorsx";

for(i = 0; i < theName.length; i++){
  var vowelish = false;
  for(j = 0; j < vowelishes.length; j++){
    if(vowelishes[j] == theName[i]){
      vowelish = true;
    };
  };
  if(vowelish == true){
    window.alert("Gimmie an " + theName[i] + "!");
  }
  else{
    window.alert("Gimmie a " + theName[i] + "!");
  };
};

var spelledIt = false;

var lives = 5;

while(spelledIt == false){
  var spellIt = prompt("WHAT'S THAT SPELL!!!!!?????");
  if(spellIt == theName){
    spelledIt = true;
    window.alert("YEP!!!!!!! " + theName + "!!!!!!!!!");
    window.alert(theName + "!!!!!!!!!");
    window.alert(theName + "!!!!!!!!!");
    window.alert(theName + "!!!!!!!!!");

    var again;

    while(again != "Yes" & again != "No"){
      var again = prompt("Again!!!!!?????? (Yes/No)");
    }

    if(again == "Yes"){
      location.reload();
    }
  }
  else{
    lives -= 1;
    window.alert("HA HA! NOPE. You have " + lives + " tries left!!!...");
    if(lives <= 0){
      window.alert("YOU FAILED TO TYPE YOUR OWN NAME. YOUR NAME IS NOW...");
      window.alert("FART!!!!!!!! HA HA HA!!!!!");
      window.alert("FART!!!!!!!!");
      window.alert("FART!!!!!!!!");
      window.alert("FART!!!!!!!!");

      var tryAgain;

      while(tryAgain != "Yes" & tryAgain != "No"){
        var tryAgain = prompt("Wanna try again, FART? (Yes/No)");
      }
      break;
    }
  }
}

if(tryAgain == "Yes"){
  location.reload();
}
