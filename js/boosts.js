

//player boosts
var playerRank = 0.1;

//research boosts

//defence boosts
var armour = 8;
var shields = 8;
//attack boosts
var weapons = 7;
var laser = 2;
var ion = 3;
var plasma = 2;

//This section is used to calculate the current hp of the ship
// var addHealth = (baseHealth * armourBonus) / 100;
// var currentHealth = baseHealth + addHealth;

function boostArmour() {
    var armourLevel = 6;
    var armourBonus = armour * armourLevel;
    var currentArmour = document.getElementById('message');
    currentArmour.textContent = armourBonus;
}
boostArmour();

