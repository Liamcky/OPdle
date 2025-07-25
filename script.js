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
  Giant: 2,
  SeaKing: 3,
  Mink: 4,
  Animal: 5
});

const Devilfruit = Object.freeze({
  None: 0,
  Paramecia: 1,
  Zoan: 2,
  Logia: 3
});

const Haki = Object.freeze({
  NONE: 0,
  OBSERVATION: 1 << 0,
  ARMAMENT: 1 << 1,
  CONQUEROR: 1 << 2
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
  BLACK_CAT_PIRATES: 31,
  BUGGY_PIRATES: 32,
  DON_KRIEG_PIRATES: 33,
  NONE: 34,
  ALVIDA_PIRATES: 35,
  BLIKING_PIRATES: 36
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
  [Crew.BONNEY_PIRATES]: "Bonney Pirates",
  [Crew.BLACK_CAT_PIRATES]: "Black Cat Pirates",
  [Crew.DON_KRIEG_PIRATES]: "Don Krieg Pirates",
  [Crew.NONE]: "no crew",
  [Crew.ALVIDA_PIRATES]: "Alvida Pirates",
  [Crew.BLIKING_PIRATES]: "Bliking Pirates"
});


const Origin = Object.freeze({
  EAST_BLUE: 0,
  WEST_BLUE: 1,
  SOUTH_BLUE: 2,
  NORTH_BLUE: 3,
  GRANDLINE: 4,
  SKY_ISLANDS: 5,
  REDLINE: 6
});

const OriginName = Object.freeze({
  [Origin.EAST_BLUE]: "East Blue",
  [Origin.WEST_BLUE]: "West Blue",
  [Origin.SOUTH_BLUE]: "South Blue",
  [Origin.NORTH_BLUE]: "North Blue",
  [Origin.GRANDLINE]: "Grandline",
  [Origin.SKY_ISLANDS]: "Sky Islands",
  [Origin.REDLINE]: "Redline"
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
let berrysvg = "M208.648 0.650 C 183.224 4.600,163.047 19.005,151.038 41.776 C 139.684 63.307,138.827 84.390,148.162 112.567 C 149.163 115.589,150.269 118.698,150.619 119.475 C 150.970 120.252,151.654 121.924,152.139 123.191 C 154.403 129.102,162.396 145.767,169.229 158.826 C 170.775 161.781,172.039 164.260,172.039 164.336 C 172.039 164.678,163.311 164.413,160.257 163.979 C 148.897 162.364,135.898 159.167,109.375 151.466 C 83.518 143.958,77.665 142.322,68.827 140.136 C 44.111 134.022,25.174 133.380,22.492 138.565 C 21.281 140.908,22.514 147.090,24.792 150.093 C 27.101 153.137,29.433 154.131,35.362 154.598 C 43.026 155.201,52.721 158.634,60.122 163.365 C 61.075 163.975,62.000 164.474,62.177 164.474 C 62.355 164.474,62.500 164.622,62.500 164.803 C 62.500 164.984,62.722 165.132,62.993 165.132 C 63.265 165.132,63.487 165.243,63.487 165.378 C 63.488 165.514,64.191 166.064,65.050 166.601 C 65.909 167.138,66.760 167.744,66.941 167.948 C 67.122 168.152,68.158 168.993,69.243 169.817 C 76.663 175.446,85.780 185.493,92.304 195.230 C 96.457 201.429,100.597 208.602,102.842 213.487 C 103.299 214.482,104.083 216.184,104.583 217.270 C 106.439 221.295,107.242 223.155,107.424 223.849 C 107.472 224.030,108.271 226.152,109.199 228.565 C 116.377 247.211,121.525 272.642,123.350 298.473 C 124.214 310.700,124.022 348.594,123.020 363.816 C 121.795 382.423,119.776 400.296,117.595 411.856 C 117.135 414.291,116.691 416.653,116.607 417.105 C 116.523 417.558,116.381 418.224,116.293 418.586 C 116.204 418.947,115.974 419.984,115.783 420.888 C 115.213 423.584,114.775 425.307,113.738 428.947 C 113.197 430.847,112.725 432.549,112.690 432.730 C 111.586 438.390,105.708 451.024,101.763 456.215 C 100.884 457.372,99.720 458.936,99.178 459.691 C 91.042 471.007,83.146 474.702,73.520 471.696 C 62.723 468.325,56.130 458.216,59.584 450.329 C 61.157 446.739,65.070 444.737,70.516 444.737 C 79.024 444.737,83.826 431.043,79.723 418.475 C 76.739 409.333,71.276 404.616,59.539 401.048 C 54.460 399.503,44.621 398.529,36.678 398.784 C 15.528 399.464,0.176 415.679,0.177 437.336 C 0.179 451.205,4.920 464.636,14.112 476.809 C 15.690 478.900,22.922 486.184,23.419 486.184 C 23.580 486.184,24.039 486.495,24.438 486.875 C 37.754 499.535,71.164 503.412,97.618 495.366 C 114.062 490.364,130.283 478.589,135.980 467.516 C 136.283 466.928,136.711 466.449,136.933 466.450 C 137.290 466.453,143.999 467.197,147.039 467.571 C 148.552 467.757,163.236 469.404,176.645 470.891 C 182.525 471.543,187.780 472.135,188.322 472.207 C 189.977 472.425,195.132 473.019,196.875 473.193 C 197.780 473.283,200.055 473.509,201.931 473.695 C 203.808 473.882,209.703 474.547,215.032 475.175 C 220.362 475.802,225.710 476.318,226.917 476.320 C 230.796 476.328,230.715 476.250,230.459 479.737 C 230.018 485.744,227.414 505.505,226.120 512.664 C 225.826 514.293,225.519 515.995,225.439 516.447 C 225.359 516.900,224.923 518.898,224.470 520.888 C 224.017 522.878,223.296 526.061,222.867 527.961 C 222.439 529.860,221.544 533.191,220.879 535.362 C 220.213 537.533,219.633 539.457,219.589 539.638 C 219.545 539.819,219.349 540.356,219.153 540.831 C 218.957 541.306,218.625 542.334,218.415 543.115 C 217.363 547.020,211.653 558.931,209.329 562.067 C 208.902 562.643,208.553 563.260,208.553 563.437 C 208.553 563.615,208.435 563.810,208.292 563.871 C 208.149 563.931,207.209 565.016,206.204 566.283 C 199.230 575.068,190.178 579.652,177.971 580.578 C 155.337 582.296,141.843 568.683,149.453 551.809 C 150.538 549.404,150.875 548.917,153.264 546.304 C 155.491 543.867,161.128 540.422,164.145 539.653 C 173.528 537.262,181.666 530.759,184.510 523.378 C 186.524 518.152,186.713 507.979,184.838 505.719 C 184.629 505.468,184.555 505.263,184.672 505.263 C 185.014 505.263,183.919 503.295,182.328 501.048 C 179.207 496.639,171.418 492.015,165.384 490.988 C 164.889 490.904,164.355 490.755,164.196 490.656 C 163.427 490.181,154.814 489.481,149.836 489.489 C 145.013 489.496,141.977 489.757,136.516 490.631 C 132.045 491.348,119.174 497.147,118.476 498.760 C 118.416 498.899,118.189 499.013,117.973 499.013 C 117.388 499.013,111.665 503.887,109.211 506.475 C 91.455 525.197,83.041 556.069,90.013 576.915 C 96.371 595.926,117.126 615.983,138.322 623.601 C 146.272 626.457,148.402 627.129,153.096 628.259 C 168.450 631.955,188.736 632.834,203.125 630.426 C 207.152 629.752,208.999 629.367,213.487 628.266 C 218.629 627.004,223.022 625.586,226.115 624.191 C 227.040 623.774,228.166 623.326,228.618 623.197 C 234.094 621.628,246.780 612.971,253.853 605.977 C 258.078 601.800,265.789 592.089,265.789 590.947 C 265.789 590.836,266.139 590.274,266.567 589.698 C 267.345 588.650,272.039 580.126,272.039 579.761 C 272.039 579.654,272.834 577.763,273.805 575.557 C 275.799 571.027,278.572 562.742,279.758 557.770 C 280.989 552.609,281.841 548.706,282.209 546.546 C 282.394 545.461,282.759 543.314,283.020 541.776 C 283.281 540.238,283.592 538.024,283.712 536.854 C 283.831 535.685,283.985 534.638,284.054 534.526 C 284.647 533.567,285.197 516.226,285.197 498.497 L 285.197 478.618 287.924 478.618 C 323.350 478.618,363.726 461.337,381.302 438.651 C 383.601 435.684,386.810 431.064,387.079 430.336 C 387.194 430.025,387.372 429.696,387.476 429.605 C 388.009 429.140,390.640 424.004,392.869 419.079 C 400.769 401.617,402.366 373.416,396.875 348.310 C 390.526 319.280,372.943 294.947,349.671 282.986 C 342.170 279.130,340.425 273.498,345.883 270.761 C 351.189 268.101,361.842 257.636,361.842 255.085 C 361.842 254.851,361.970 254.611,362.127 254.550 C 362.593 254.372,365.018 248.596,365.641 246.183 C 373.947 214.008,352.775 180.640,316.927 169.411 C 304.596 165.548,296.316 164.685,268.257 164.339 C 253.642 164.158,239.528 163.273,235.691 162.296 C 234.989 162.118,234.897 161.885,231.930 152.796 C 231.044 150.082,228.961 143.939,227.300 139.145 C 225.639 134.350,223.567 128.355,222.696 125.822 C 219.903 117.706,216.196 107.301,215.938 106.851 C 215.800 106.611,217.080 107.757,218.781 109.399 C 234.631 124.687,257.934 125.145,277.138 110.548 C 297.400 95.146,304.931 68.688,295.449 46.217 C 284.831 21.051,266.107 6.246,238.158 0.917 C 232.932 -0.080,214.422 -0.247,208.648 0.650 M192.780 205.345 C 193.751 207.381,194.575 209.194,194.611 209.375 C 194.647 209.556,195.268 210.962,195.991 212.500 C 197.456 215.614,198.407 217.760,198.541 218.257 C 198.590 218.438,199.249 219.992,200.007 221.711 C 201.745 225.654,202.057 226.399,202.149 226.819 C 202.190 227.006,202.974 229.004,203.891 231.260 C 204.808 233.516,206.236 237.212,207.065 239.474 C 207.893 241.735,208.664 243.808,208.776 244.079 C 208.889 244.350,209.968 247.533,211.174 251.151 L 213.367 257.730 212.274 257.925 C 211.673 258.033,209.221 258.004,206.824 257.861 C 204.428 257.718,199.862 257.593,196.678 257.583 C 193.494 257.574,189.783 257.472,188.432 257.358 L 185.974 257.150 185.600 254.973 C 184.601 249.161,179.305 234.274,176.326 228.901 C 176.161 228.605,175.389 227.125,174.609 225.612 C 173.829 224.099,173.080 222.813,172.944 222.752 C 172.808 222.692,172.697 222.462,172.697 222.241 C 172.697 221.727,167.451 213.196,166.039 211.413 C 165.449 210.669,164.805 209.749,164.607 209.367 C 164.113 208.416,159.578 202.564,158.942 202.056 C 158.528 201.726,161.630 201.645,174.721 201.645 L 191.016 201.645 192.780 205.345 M271.425 202.743 C 290.624 209.362,298.580 232.381,286.203 245.500 C 283.586 248.275,275.932 253.289,274.315 253.289 C 274.172 253.289,273.639 253.462,273.130 253.673 C 272.621 253.884,272.093 254.088,271.957 254.125 C 271.822 254.163,271.674 254.224,271.628 254.260 C 271.583 254.297,271.324 254.376,271.053 254.437 C 270.781 254.498,268.717 255.083,266.466 255.738 C 261.950 257.052,261.695 257.051,261.409 255.703 C 261.300 255.190,260.827 253.141,260.359 251.151 C 259.891 249.161,259.436 247.163,259.347 246.711 C 258.965 244.769,254.455 227.006,253.083 222.039 C 251.746 217.205,247.945 203.717,247.497 202.220 C 247.335 201.681,247.975 201.645,257.790 201.648 L 268.257 201.651 271.425 202.743 M302.284 301.340 C 304.626 301.880,308.242 303.599,310.197 305.102 C 312.785 307.091,317.434 312.045,317.434 312.812 C 317.434 312.934,317.693 313.321,318.010 313.672 C 320.341 316.254,324.675 327.470,325.692 333.553 C 328.874 352.579,327.748 367.065,321.777 383.921 C 316.900 397.688,305.248 414.459,294.390 423.340 C 293.405 424.146,292.347 425.034,292.039 425.314 C 289.943 427.217,284.466 430.299,284.002 429.835 C 283.880 429.713,283.655 427.206,283.503 424.264 C 282.527 405.360,279.973 371.605,278.780 361.842 C 278.702 361.209,278.112 356.028,277.469 350.329 C 276.489 341.647,275.525 333.859,274.844 329.112 C 273.942 322.828,272.157 310.982,271.523 307.072 C 270.542 301.025,270.536 301.388,271.628 301.222 C 273.664 300.914,300.889 301.018,302.284 301.340 M225.322 304.359 C 225.529 305.308,226.287 309.638,227.006 313.980 C 227.725 318.322,228.376 322.245,228.453 322.697 C 228.791 324.693,230.562 338.198,230.739 340.132 C 233.385 369.082,233.389 369.174,233.381 403.454 C 233.373 437.499,233.365 437.681,231.806 437.923 C 230.802 438.079,151.585 437.494,151.382 437.329 C 151.328 437.285,152.105 435.827,153.108 434.090 C 158.479 424.787,165.130 410.011,170.689 395.031 C 172.028 391.425,176.355 378.874,176.602 377.882 C 176.635 377.748,176.722 377.452,176.793 377.224 C 177.793 374.053,181.334 361.848,181.686 360.362 C 181.942 359.276,182.903 355.502,183.820 351.974 C 184.738 348.446,185.563 345.115,185.655 344.572 C 185.746 344.030,186.573 340.267,187.491 336.211 C 188.409 332.155,189.513 326.826,189.944 324.369 C 190.375 321.912,191.362 316.324,192.139 311.952 L 193.550 304.002 196.857 303.813 C 198.676 303.708,204.679 303.462,210.197 303.266 C 215.715 303.069,220.378 302.858,220.559 302.796 C 220.740 302.734,221.801 302.672,222.917 302.658 L 224.945 302.632 225.322 304.359 "
let score = parseInt(localStorage.getItem("score")) || 0;
let highscore = parseInt(localStorage.getItem("highscore")) || 0;
let maxGuesses = 5;
let countGuesses = 0;
let characters = [];
let roundcharacters = [];
let target = null;
fetch('characters.json')
  .then(response => response.json())
  .then(data => {
    characters = data;
    roundcharacters = [...characters];
    target = characters[Math.floor(Math.random() * characters.length)];
}).catch(error => console.error('error on load:', error));

const search = document.getElementById("search");
const suggestions = document.getElementById("suggestions");
const reset = document.getElementById("reset");
const targetName = document.getElementById("target-name");
const attributeList = document.getElementById("attribute-list");
const scoreEl = document.getElementById("score");
const highscoreEl = document.getElementById("highscore");
const showtarget = document.getElementById("showtarget");
const closeBtn = document.querySelector(".close");
const table = document.getElementById("guessTable");
const tbody = document.getElementById("guessBody");

scoreEl.textContent = score;
highscoreEl.textContent = highscore;

const attributeLabels = {
  name: "Name",
  crew: "Crew",
  bounty: "Bounty", 
  devilfruit: "Devil Fruit",
  haki: "Haki",
  height: "Height",
  gender: "Gender",
  status: "Status",
  race: "Race",
  origin: "Origin",
  arc: "Arc",
  saga: "Saga"
};

search.addEventListener("input", () => {
  const query = search.value.toLowerCase();
  suggestions.innerHTML = "";

  if (query.length === 0) return;

  const matches = roundcharacters.filter(c => c.name.toLowerCase().includes(query));
  matches.forEach(match => {
    const div = document.createElement("div");
    div.textContent = match.name;
    div.addEventListener("click", () => {
      validateCharacter(match);
      suggestions.innerHTML = "";
      search.value = "";
    });
    suggestions.appendChild(div);
  });
});
function resolveValue(key, value, fullObj = null) {
  switch (key) {
    case "crew":
      return CrewName[value] ?? "Unknown";
    case "origin":
      return OriginName[value] ?? "Unknown";
    case "arc":
      return ArcName[value] ?? "Unknown";
    case "gender":
      return Object.keys(Gender).find(k => Gender[k] === value);
    case "status":
      return Object.keys(Status).find(k => Status[k] === value);
    case "race":
      return Object.keys(Race).find(k => Race[k] === value);
    case "devilfruit":
      return Object.keys(Devilfruit).find(k => Devilfruit[k] === value);
    case "haki":
      return hakiToString(value);
    case "saga":
      return fullObj ? getSagaByArc(fullObj.arc) : "Unknown";
    case "bounty":
      return formatBounty(value);
    case "height":
      return value.toFixed(2).replace('.', ',');
    default:
      return value;
  }
}

function hakiToString(haki) {
  if (haki === 0) return "None";
  const types = [];
  if (haki & Haki.OBSERVATION) types.push("Observation");
  if (haki & Haki.ARMAMENT) types.push("Armament");
  if (haki & Haki.CONQUEROR) types.push("Conqueror");
  return types.join(", ");
}

function formatBounty(bounty) {
  if (bounty >= 1_000_000_000) {
    return parseFloat((bounty / 1_000_000_000).toFixed(3)).toString().replace('.', ',') + ' Mrd.';
  } else if (bounty >= 1_000_000) {
    return parseFloat((bounty / 1_000_000).toFixed(3)).toString().replace('.', ',') + ' Mio.';
  } else if (bounty >= 1_000) {
    return (bounty / 1_000).toFixed().replace('.', ',') + ' Tsd.';
  } else {
    return bounty.toString();
  }
}

function getSagaByArc(arcValue) {
  for (const sagaName in SagaArcs) {
    if (SagaArcs[sagaName].includes(arcValue)) {
      return sagaName;
    }
  }
  return "Unknown";
}

function validateCharacter(guess) {
  roundcharacters = roundcharacters.filter(c => c.name !== guess.name);

if (table.classList.contains("hidden")) {
  table.classList.remove("hidden"); // Nur beim ersten Treffer anzeigen
}

const row = document.createElement("tr");

  for (const key in attributeLabels) {
    const targetValue = key === "saga" ? getSagaByArc(target.arc) : target[key];
    const guessValue = key === "saga" ? getSagaByArc(guess.arc) : guess[key];
    
    let displayValue = resolveValue(key, guessValue, guess);
    const td = document.createElement("td");
    
    if(key === "bounty"){
      const SVG_NS = "http://www.w3.org/2000/svg";
      const svg = document.createElementNS(SVG_NS, "svg");
      svg.setAttribute("viewBox", "0 0 400 640");
      svg.setAttribute("width", "1em");
      svg.setAttribute("height", "1em");
      svg.setAttribute("fill", "#f0f6fc");
      svg.style.verticalAlign = "-2px";

      const path = document.createElementNS(SVG_NS, "path");
      path.setAttribute("d", berrysvg);

      svg.appendChild(path);
      td.appendChild(svg);
      td.append('', displayValue);
        }
    else{
      td.textContent = displayValue;
    }
    if (key === "bounty" || key === "height" || key === "arc") {
      if (guessValue === targetValue) {
        td.classList.add("correct");
      } else if (guessValue > targetValue) {
        td.classList.add("incorrect");
        td.innerHTML += " 🔻";
      } else {
        td.classList.add("incorrect");
        td.innerHTML += " 🔺";
      }
    } else if (key === "haki") {
           if (guessValue === targetValue) {
           td.classList.add("correct");
           } else if (guessValue !== 0 && (guessValue & targetValue) !== 0) {
             td.classList.add("semicorrect");
             } else {
               td.classList.add("incorrect");
               }
    } else {
      if (guessValue === targetValue) {
        td.classList.add("correct");
      } else {
        td.classList.add("incorrect");
      }
    }
    row.appendChild(td);
  }

  tbody.prepend(row); // ⬅ neueste oben

  // Suchfeld zurücksetzen
  search.value = "";
  countGuesses += 1;

  const allCorrect = Object.keys(attributeLabels).every(
  key => guess[key] === target[key]
  );
// Überprüfen ob alle Felder Korrekt sind und zurücksetzen 
  if (allCorrect) {
    score += 1;
    localStorage.setItem("score", score);
    scoreEl.textContent = score;
    search.placeholder = "🎉 Vollständig gelöst!";
    resetGame();
  } 
  else if (countGuesses === maxGuesses){
    const span = document.getElementById("modalspan");
    span.textContent = target.name;
    showtarget.appendChild(span);
    showtarget.showModal();
    scoreEl.textContent = 0;
    if (highscore < score)
    {
      localStorage.setItem("highscore", score);
      highscoreEl.textContent = score;
    }
    localStorage.setItem("score", 0);
    search.placeholder = "Leider verloren!";
    resetGame();
  }
}

function resetGame(){
  search.disabled = true;
  const restartBtn = document.createElement("button");
  restartBtn.textContent = "🔁 Neues Spiel";
  restartBtn.addEventListener("click", () => {
  search.disabled = false;
  search.placeholder = "Charakter suchen...";
  search.value = "";
  tbody.innerHTML = "";
  reset.innerHTML = "";
  table.classList.add("hidden");
  target = characters[Math.floor(Math.random() * characters.length)];
  roundcharacters = characters;
  countGuesses = 0;
    });
  reset.appendChild(restartBtn);
}
  
closeBtn.addEventListener("click", () => {
  showtarget.close();
});














