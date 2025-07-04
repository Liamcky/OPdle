const Gender = Object.freeze({
  Male: 0,
  Female: 1,
  Others: 2
});

const Status = Object.freeze({
  Alive: 0,
  Dead: 1,
  Unknown: 2
});

const Race = Object.freeze({
  Human: 0,
  Fishman: 1,
  Giant: 2
});

const Devilfruit = Object.freeze({
  None: 0,
  Paramecia: 1,
  Zoan: 2,
  Logia: 3
});

const Haki = Object.freeze({
  NONE: 0,
  OBSERVATION: 1,
  ARMAMENT: 2,
  BOTH: 3,
  CONQUEROR: 4
});

const Crew = Object.freeze({
  STRAWHAT_PIRATES: 0,
  MARINE: 1,
  REVOLUTIONARY_ARMY: 2,
  RED_HAIR_PIRATES: 3,
  BLACKBEARD_PIRATES: 4,
  HEART_PIRATES: 5,
  KID_PIRATES: 6,
  BIG_MOM_PIRATES: 7,
  BEASTS_PIRATES: 8,
  CROSS_GUILD: 9,
  BAROQUE_WORKS: 10,
  CP9: 11,
  CP0: 12,
  WHITEBEARD_PIRATES: 13,
  ROGER_PIRATES: 14,
  DONQUIXOTE_PIRATES: 15,
  KUJA_PIRATES: 16,
  ARLONG_PIRATES: 17,
  THRILLER_BARK_CREW: 18,
  SHICHIBUKAI: 19,
  WORLD_GOVERNMENT: 20,
  GIANT_WARRIORS_PIRATES: 21,
  RUMBAR_PIRATES: 22,
  NEO_MARINE: 23,
  SUN_PIRATES: 24,
  HAPPO_NAVY: 25,
  GERMA_66: 26,
  FIRE_TANK_PIRATES: 27,
  ON_AIR_PIRATES: 28,
  BEAUTY_PIRATES: 29,
  BONNEY_PIRATES: 30,
  ALVIDA_PIRATES: 31,
  BUGGY_PIRATES: 32
});

const CrewName = Object.freeze({
  [Crew.BUGGY_PIRATES]: "Buggy Pirates",
  [Crew.ALVIDA_PIRATES]: "Alvida Pirates",
  [Crew.STRAWHAT_PIRATES]: "Straw Hat Pirates",
  [Crew.MARINE]: "Marines",
  [Crew.REVOLUTIONARY_ARMY]: "Revolutionary Army",
  [Crew.RED_HAIR_PIRATES]: "Red-Hair Pirates",
  [Crew.BLACKBEARD_PIRATES]: "Blackbeard Pirates",
  [Crew.HEART_PIRATES]: "Heart Pirates",
  [Crew.KID_PIRATES]: "Kid Pirates",
  [Crew.BIG_MOM_PIRATES]: "Big Mom Pirates",
  [Crew.BEASTS_PIRATES]: "Beasts Pirates",
  [Crew.CROSS_GUILD]: "Cross Guild",
  [Crew.BAROQUE_WORKS]: "Baroque Works",
  [Crew.CP9]: "CP9",
  [Crew.CP0]: "CP0",
  [Crew.WHITEBEARD_PIRATES]: "Whitebeard Pirates",
  [Crew.ROGER_PIRATES]: "Roger Pirates",
  [Crew.DONQUIXOTE_PIRATES]: "Donquixote Pirates",
  [Crew.KUJA_PIRATES]: "Kuja Pirates",
  [Crew.ARLONG_PIRATES]: "Arlong Pirates",
  [Crew.THRILLER_BARK_CREW]: "Thriller Bark Pirates",
  [Crew.SHICHIBUKAI]: "Shichibukai",
  [Crew.WORLD_GOVERNMENT]: "World Government",
  [Crew.GIANT_WARRIORS_PIRATES]: "Giant Warrior Pirates",
  [Crew.RUMBAR_PIRATES]: "Rumbar Pirates",
  [Crew.NEO_MARINE]: "Neo Marine",
  [Crew.SUN_PIRATES]: "Sun Pirates",
  [Crew.HAPPO_NAVY]: "Happo Navy",
  [Crew.GERMA_66]: "Germa 66",
  [Crew.FIRE_TANK_PIRATES]: "Fire Tank Pirates",
  [Crew.ON_AIR_PIRATES]: "On-Air Pirates",
  [Crew.BEAUTY_PIRATES]: "Beauty Pirates",
  [Crew.BONNEY_PIRATES]: "Bonney Pirates"
});


const Origin = Object.freeze({
  EAST_BLUE: 0,
  WEST_BLUE: 1,
  SOUTH_BLUE: 2,
  NORTH_BLUE: 3,
  GRANDLINE: 4
});

const OriginName = Object.freeze({
  [Origin.EAST_BLUE]: "East Blue",
  [Origin.WEST_BLUE]: "West Blue",
  [Origin.SOUTH_BLUE]: "South Blue",
  [Origin.NORTH_BLUE]: "North Blue",
  [Origin.GRANDLINE]: "Grandline"
});
  
const Saga = Object.freeze({
  "East Blue": 0,
  "Alabasta": 1,
  "Sky Island": 2,
  "Water 7": 3,
  "Thriller Bark": 4,
  "Summit War": 5,
  "Fish-Man Island": 6,
  "Dressrosa": 7,
  "Whole Cake Island": 8,
  "Wano Country": 9,
  "Final": 10
});

const Arc = Object.freeze({
  //East Blue
  ROMANCE_DAWN: 0,
  ORANGE_TOWN: 1,
  SYRUP_VILLAGE: 2,
  BARATIE: 3,
  ARLONG_PARK: 4,
  LOGUETOWN: 5,
  //Alabasta
  REVERSE_MOUNTAIN: 10,
  WHISKEY_PEAK: 11,
  LITTLE_GARDEN: 12,
  DRUM_ISLAND: 13,
  ALABASTA: 14,
  //Sky Island
  JAYA: 20,
  SKYPIEA: 21,
  //Water 7
  LONG_RING_LONG_LAND: 30,
  WATER_SEVEN: 31,
  ENIES_LOBBY: 32,
  POST_ENIES_LOBBY: 33,
  //Thriller Bark
  THRILLER_BARK: 40,
  //Summit War
  SABAODY_ARCHIPELAGO: 50,
  AMAZON_LILY: 51,
  IMPEL_DOWN: 52,
  MARINEFORD: 53,
  POST_WAR: 54,
  //Fishman Island
  RETURN_TO_SABAODY: 60,
  FISHMAN_ISLAND: 61,
  //Dressrosa
  PUNK_HAZARD: 70,
  DRESSROSA: 71,
  //Whole Cake Island
  ZOU: 80,
  WHOLE_CAKE_ISLAND: 81,
  REVERIE: 82,
  //Wano Country
  WANO_COUNTRY: 90,
  //Final
  EGGHEAD: 100,
  ELBAPH: 101
});

const ArcName = Object.freeze({
  [Arc.ROMANCE_DAWN]: "Romance Dawn",
  [Arc.ORANGE_TOWN]: "Orange Town",
  [Arc.SYRUP_VILLAGE]: "Syrup Village",
  [Arc.BARATIE]: "Baratie",
  [Arc.ARLONG_PARK]: "Arlong Park",
  [Arc.LOGUETOWN]: "Loguetown",

  [Arc.REVERSE_MOUNTAIN]: "Reverse Mountain",
  [Arc.WHISKEY_PEAK]: "Whiskey Peak",
  [Arc.LITTLE_GARDEN]: "Little Garden",
  [Arc.DRUM_ISLAND]: "Drum Island",
  [Arc.ALABASTA]: "Alabasta",

  [Arc.JAYA]: "Jaya",
  [Arc.SKYPIEA]: "Skypiea",

  [Arc.LONG_RING_LONG_LAND]: "Long Ring Long Land",
  [Arc.WATER_SEVEN]: "Water 7",
  [Arc.ENIES_LOBBY]: "Enies Lobby",
  [Arc.POST_ENIES_LOBBY]: "Post-Enies Lobby",

  [Arc.THRILLER_BARK]: "Thriller Bark",

  [Arc.SABAODY_ARCHIPELAGO]: "Sabaody Archipelago",
  [Arc.AMAZON_LILY]: "Amazon Lily",
  [Arc.IMPEL_DOWN]: "Impel Down",
  [Arc.MARINEFORD]: "Marineford",
  [Arc.POST_WAR]: "Post-War",

  [Arc.RETURN_TO_SABAODY]: "Return to Sabaody",
  [Arc.FISHMAN_ISLAND]: "Fish-Man Island",

  [Arc.PUNK_HAZARD]: "Punk Hazard",
  [Arc.DRESSROSA]: "Dressrosa",

  [Arc.ZOU]: "Zou",
  [Arc.WHOLE_CAKE_ISLAND]: "Whole Cake Island",
  [Arc.REVERIE]: "Reverie",

  [Arc.WANO_COUNTRY]: "Wano Country",
  
  [Arc.EGGHEAD]: "Egghead",
  [Arc.ELBAPH]: "Elbaph"
});

const SagaArcs = Object.freeze({
  "East Blue": [
    Arc.ROMANCE_DAWN,
    Arc.ORANGE_TOWN,
    Arc.SYRUP_VILLAGE,
    Arc.BARATIE,
    Arc.ARLONG_PARK,
    Arc.LOGUETOWN
  ],
  "Alabasta": [
    Arc.REVERSE_MOUNTAIN,
    Arc.WHISKEY_PEAK,
    Arc.LITTLE_GARDEN,
    Arc.DRUM_ISLAND,
    Arc.ALABASTA
  ],
  "Skypiea": [
    Arc.JAYA,
    Arc.SKYPIEA
  ],
  "Water 7": [
    Arc.LONG_RING_LONG_LAND,
    Arc.WATER_SEVEN,
    Arc.ENIES_LOBBY,
    Arc.POST_ENIES_LOBBY
  ],
  "Thriller Bark": [
    Arc.THRILLER_BARK
  ],
  "Summit War": [
    Arc.SABAODY_ARCHIPELAGO,
    Arc.AMAZON_LILY,
    Arc.IMPEL_DOWN,
    Arc.MARINEFORD,
    Arc.POST_WAR
  ],
  "Fish-Man Island": [
    Arc.RETURN_TO_SABAODY,
    Arc.FISHMAN_ISLAND
  ],
  "Dressrosa": [
    Arc.PUNK_HAZARD,
    Arc.DRESSROSA
  ],
  "Whole Cake Island": [
    Arc.ZOU,
    Arc.WHOLE_CAKE_ISLAND,
    Arc.REVERIE
  ],
  "Wano Country": [
    Arc.WANO_COUNTRY
  ],
  "Final": [
    Arc.EGGHEAD,
    Arc.ELBAPH
  ]
});

let characters = [];

fetch('characters.json')
  .then(data => characters = data.characters);














