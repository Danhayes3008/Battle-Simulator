// Human Military Ships

var viking = {
    armour: "200",
    Armour_type: "Strengthened",
    Size: "Small",
    Shield: "15",
    Speed: "200",
    BattleSpeed: "175",
    Warmup_time: "424",
    cargo_capacity: "250",
    Fuel_usage: "1",
    damage_per_round: "25",
    attack_per_shot: "7",
    shots_per_volly: "1",
    period_between_volleys: "14",
    attack_range: "360",
    blocking_ability: "1",
    Diameter:"49"
}


function battle() {
    var armourBoost = 6;
    var weaponBoost = 7;

     attackersArmourLevel = document.getElementById("attackersArmourLevel").value;
    var attackersWeaponLevel = document.getElementById("attackersWeaponLevel").value;
    var defendersArmourLevel = document.getElementById("defendersArmourLevel").value;
    var defendersWeaponLevel = document.getElementById("defendersWeaponLevel").value;

    var totalAttackersArmourBoost = armourBoost * attackersArmourLevel;
    var attackersArmourBoost = (viking.armour * totalAttackersArmourBoost) / 100;
    var totalArmour = viking.armour + attackersArmourBoost;
    document.write("Total Armour for Attackers: " + attackersArmourLevel + "<br />");
    document.write("Total Weapons for Attackers: " + attackersWeaponLevel + "<br />");
    document.write("Total Armour for Attackers: " + defendersArmourLevel + "<br />");
    document.write("Total Weapons for Attackers: " + defendersWeaponLevel + "<br />");
}
battle();
console.log(battle);