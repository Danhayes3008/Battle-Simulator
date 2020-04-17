// Human ships

// Civilian ships
var espionageProbe = {
    Armour: "100",
    Armour_type: "Light",
    Size: "Small",
    Shield: "0",
    Speed: "500000",
    Battle_speed: "50",
    Warmup_time: "08",
    cargo_capacity: "5",
    Fuel_usage: "0.1",
    blocking_ability: "0.8",
    Diameter:"28"
}

var solarSatelite = {
    Armour: "200",
    Armour_type: "Light",
    Size: "Small",
    Shield: "10",
    Battle_speed: "10",
    blocking_ability: "1",
    Diameter:"31"
}

var smallCargo = {
    Armour: "400",
    Armour_type: "Light",
    Size: "Small",
    Shield: "10",
    Speed: "500",
    Battle_speed: "190",
    Warmup_time: "268",
    cargo_capacity: "5000",
    Fuel_usage: "1",
    blocking_ability: "0.75",
    Diameter:"30"
}

var largeCargo = {
    Armour: "1400",
    Armour_type: "Light",
    Size: "Medium",
    Shield: "25",
    Speed: "300",
    Battle_speed: "140",
    Warmup_time: "346",
    cargo_capacity: "25000",
    Fuel_usage: "5",
    blocking_ability: "0.75",
    Diameter:"57"
}

var recycler = {
    Armour: "1600",
    Armour_type: "Light",
    Size: "Small",
    Shield: "10",
    Speed: "250",
    Battle_speed: "150",
    Warmup_time: "379",
    cargo_capacity: "20000",
    Fuel_usage: "30",
    debris_collection_speed: "333",
    blocking_ability: "1",
    Diameter: "39"
}

var colonyShip = {
    Armour: "3800",
    Armour_type: "Strengthened",
    Size: "Medium",
    Shield: "100",
    Speed: "50",
    Battle_speed: "100",
    Warmup_time: "849",
    cargo_capacity: "100000",
    Fuel_usage: "30",
    blocking_ability: "1",
    Diameter:"76"
}

var scienceShip = {
    Armour: "4500",
    Armour_type: "strengthened",
    Size: "large",
    Shield: "2000",
    Speed: "500",
    Battle_speed: "210",
    Warmup_time: "268",
    cargo_capacity: "600",
    Fuel_usage: "40",
    blocking_ability: "2",
    Diameter:"72"
}

var metalHarvester = {
    Armour: "11000",
    Armour_type: "Large",
    Size: "Flagship",
    Shield: "10",
    Speed: "25",
    Battle_speed: "25",
    Warmup_time: "1200",
    cargo_capacity: "100000",
    Fuel_usage: "50000",
    blocking_ability: "1",
    Diameter:"53"
}

var mineralHarvester = {
    Armour: "170000",
    Armour_type: "Light",
    Size: "Flagship",
    Shield: "10",
    Speed: "25",
    Battle_speed: "25",
    Warmup_time: "1200",
    cargo_capacity: "100000",
    Fuel_usage: "50000",
    blocking_ability: "1",
    Diameter:"53"
}

var gasHarvester = {
    Armour: "230000",
    Armour_type: "Light",
    Size: "Flagship",
    Shield: "10",
    Speed: "25",
    Battle_speed: "25",
    Warmup_time: "1200",
    cargo_capacity: "100000",
    Fuel_usage: "50000",
    blocking_ability: "1",
    Diameter:"53"
}

// military ships

var viking = {
    Armour: "200",
    Armour_type: "Strengthened",
    Size: "Small",
    Shield: "15",
    Speed: "200",
    Battle_speed: "175",
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

var fighter = {
    Armour: "400",
    Armour_type: "Light",
    Size: "Small",
    Shield: "10",
    Speed: "1000",
    Battle_speed: "550",
    Warmup_time: "190",
    cargo_capacity: "50",
    Fuel_usage: "2",
    damage_per_round: "30",
    attack_per_shot: "6",
    shots_per_volly: "1",
    period_between_volleys: "10",
    attack_range: "260",
    blocking_ability: "1.5",
    Diameter:"28"
}

var stealthFighter = {
    Armour: "100",
    ArmourType: "Strengthened",
    Size: "medium",
    Shield: "25",
    Speed: "600",
    BattleSpeed: "480",
    WarmupTime: "245",
    cargoCapacity: "100",
    FuelUsage: "8",
    damagePerRound: "75",
    attack_per_shot: "9",
    shots_per_volly: "1",
    period_between_volleys: "6",
    attack_range: "290",
    blocking_ability: "1",
    Diameter:"45"
}

var cruiser = {
    Armour: "2500",
    Armour_type: "Strengthened",
    Size: "medium",
    Shield: "50",
    Speed: "400",
    Battle_speed: "430",
    Warmup_time: "300",
    cargo_capacity: "800",
    Fuel_usage: "30",
    damage_per_round: "250",
    attack_per_shot: "10",
    shots_per_volly: "4",
    period_between_volleys: "8",
    attack_range: "260",
    blocking_ability: "1",
    Diameter:"74"
}

var battleship = {
    Armour: "6000",
    Armour_type: "heavy",
    Size: "medium",
    Shield: "200",
    Speed: "300",
    Battle_speed: "400",
    Warmup_time: "346",
    cargo_capacity: "1500",
    Fuel_usage: "65",
    damage_per_round: "500",
    attack_per_shot: "60",
    attackDelay: "2",
    shots_per_volly: "1",
    period_between_volleys: "6",
    attack_range: "450",
    blocking_ability: "1",
    Diameter:"95"
}

var bomber = {
    Armour: "8000",
    Armour_type: "Heavy",
    Size: "large",
    Shield: "1000",
    Speed: "100",
    Battle_speed: "240",
    Warmup_time: "600",
    cargo_capacity: "500",
    Fuel_usage: "100",
    damage_per_round: "1875",
    attack_per_shot: "300",
    shots_per_volly: "1",
    period_between_volleys: "8",
    attack_range: "700",
    blocking_ability: "1",
    Diameter:"86"
}

var battlecruiser = {
    Armour: "7000",
    Armour_type: "strengthened",
    Size: "large",
    Shield: "40",
    Speed: "250",
    Battle_speed: "300",
    Warmup_time: "379",
    cargo_capacity: "900",
    Fuel_usage: "60",
    damage_per_round: "600",
    attack_per_shot: "60",
    shots_per_volly: "2",
    period_between_volleys: "10",
    attack_range: "425",
    blocking_ability: "1",
    Diameter:"94"
}

var destroyer = {
    Armour: "11000",
    Armour_type: "heavy",
    Size: "large",
    Shield: "500",
    Speed: "200",
    Battle_speed: "300",
    Warmup_time: "424",
    cargo_capacity: "2000",
    Fuel_usage: "100",
    damage_per_round: "1000",
    attack_per_shot: "500",
    shots_per_volly: "1",
    period_between_volleys: "25",
    attack_range: "400",
    blocking_ability: "1",
    Diameter:"93"
}

var Deathstar = {
    Armour: "900000",
    Armour_type: "heavy",
    Size: "flagshop",
    Shield: "50000",
    Speed: "40",
    Battle_speed: "170",
    Warmup_time: "949",
    cargo_capacity: "500000",
    Fuel_usage: "1000",
    damage_per_round: "150000",
    attack_per_shot: "20000",
    attackDelay: "2",
    shots_per_volly: "3",
    period_between_volleys: "20",
    attack_range: "750",
    blocking_ability: "1.7",
    Diameter:"127"
}