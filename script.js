const Saga = Object.freeze({
  "East Blue" = 0,
  "Alabasta" = 1,
  "Sky Island" = 2,
  "Water 7" = 3,
  "Thriller Bark" = 4,
  "Summit War" = 5,
  "Fish-Man Island" = 6,
  "Dressrosa" = 7,
  "Whole Cake Island" = 8,
  "Wano Country" = 9,
  "Final" = 10
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













