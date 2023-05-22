var digitalDataBuilderYWMapper = window.digitalDataBuilderYWMapper = (function() {
  "use strict";
    //efeng-1023 if string contains "Personal Watercraft" anywhere, it's boat type should be "personal watercraft"
    // if string contains "Commercial" anywhere, it's boat type should be "commercial"
  var SPECIAL_BOAT_TYPE = ["Commercial", "Personal Watercraft"];
  var BOAT_TYPE_MAP = {"(Power)" : "power",
  "(Sail)" : "sail",
  "(Commercial)" : "commercial",
  "(Personal Watercraft)" : "personal watercraft"
  };
  var BOAT_CLASS_MAP = {
  "(Power) Aft Cabin" : "aft cabin",
  "(Power) Antique and Classic" : "antique and classic",
  "(Power) Barge" : "barge",
  "(Power) Bowrider" : "bowrider",
  "(Power) Canal and River Cruiser" : "canal and river cruiser",
  "(Power) Cargo Ship" : "cargo ship",
  "(Power) Catamaran": "catamaran",
  "(Power) Center Console" : "center console",
  "(Power) Commercial Boat" : "commercial",
  "(Power) Commercial" : "commercial",
  "(Power) Convertible Boat" : "convertible",
  "(Power) Cruise Ship" : "cruise ship",
  "(Power) Cruiser" : "cruiser",
  "(Power) Cuddy Cabin" : "cuddy cabin",
  "(Power) Dive Boat" : "dive boat",
  "(Power) Downeast": "downeast",
  "(Power) Dragger" : "dragger",
  "(Power) Express Cruiser" : "express cruiser",
  "(Power) Express" : "express cruiser",
  "(Power) Flybridge" : "flybridge",
  "(Power) Freshwater Fishing" : "freshwater fishing",
  "(Power) Gulet" : "gulet",
  "(Power) High Performance": "high performance",
  "(Power) House Boat" : "house boat",
  "(Power) Houseboat" : "house boat",
  "(Power) Inflatable" : "inflatable",
  "(Power) Mega Yacht" : "mega yacht",
  "(Power) Motor Yacht" : "motor yacht",
  "(Power) Motoryacht" : "motor yacht",
  "(Power) Motoryacht with cockpit" : "motor yacht",
  "(Power) Motoryacht with flybridge" : "motor yacht",
  "(Power) Motoryacht without cockpit" : "motor yacht",
  "(Power) Motorsailer" : "motorsailer",
  "(Power) Narrow Boat" : "narrow boat",
  "(Power) Narrowboat" : "narrow boat",
  "(Power) Open Fisherman": "saltwater fishing",
  "(Power) Passenger" : "passenger",
  "(Power) Personal Watercraft" : "personal watercraft",
  "(Power) Pilothouse" : "pilothouse",
  "(Power) Pontoon": "pontoon",
  "(Power) Power Catamaran" : "catamaran",
  "(Power) Racing/High Performance" : "racing",
  "(Power) Rigid Inflatable Boat (RIB)" : "inflatable",
  "(Power) Runabout": "runabout",
  "(Power) Saltwater Fishing" : "saltwater fishing",
  "(Power) Saltwater Inshore Fishing" : "saltwater fishing",
  "(Power) Saltwater Offshore Fishing" : "saltwater fishing",
  "(Power) Sedan/Convertible" : "convertible",
  "(Power) Ski and Wakeboard Boat" : "ski and wakeboard boat",
  "(Power) Small Cruiser" : "cruiser",
  "(Power) Sport Fisherman" : "sport fishing",
  "(Power) Sport Fishing" : "sport fishing",
  "(Power) Sports Cruiser" : "sports cruiser",
  "(Power) Superyacht ": "mega yacht",
  "(Power) Tender" : "tender",
  "(Power) Trawler" : "trawler",
  "(Power) Troller" : "troller",
  "(Power) Tug" : "tug",
  "(Power) Utility Boat" : "utility",
  "(Power) Other" : "other",
  "(Commercial)" : "commercial",
  "(Commercial) Barge" : "barge",
  "(Commercial) Cargo" : "cargo ship",
  "(Commercial) Combination ": "combination",
  "(Commercial) Crabber": "crabber",
  "(Commercial) Dive" : "dive boat",
  "(Commercial) Dragger" : "dragger",
  "(Commercial) Passenger" : "passenger",
  "(Commercial) Skiff": "skiff",
  "(Commercial) Tender" : "tender",
  "(Commercial) Troller" : "troller",
  "(Commercial) Tug" : "tug",
  "(Commercial) Utility/Supply": "utility",
  "(Sail) Antique and Classic" : "antique and classic",
  "(Sail) Barge" : "barge",
  "(Sail) Beach Catamaran" : "catamaran",
  "(Sail) Catamaran" : "catamaran",
  "(Sail) Center Cockpit" : "center cockpit",
  "(Sail) Commercial Boat" : "commercial",
  "(Sail) Commercial" : "commercial",
  "(Sail) Cruiser" : "cruiser",
  "(Sail) Cruiser/Racer" : "cruiser and racer",
  "(Sail) Cutter" : "cutter",
  "(Sail) Daysailer" : "daysailer",
  "(Sail) Daysailer/Weekender" : "daysailer",
  "(Sail) Deck Saloon" : "deck saloon",
  "(Sail) Gulet" : "gulet",
  "(Sail) Ketch" : "ketch",
  "(Sail) Motorsailer" : "motorsailer",
  "(Sail) Motorsailer/Pilothouse" : "motorsailer",
  "(Sail) Motoryacht": "motor yacht",
  "(Sail) Motoryacht with flybridge": "motor yacht",
  "(Sail) Multi-Hull" : "multi hull",
  "(Sail) Multi-hull" : "multi hull",
  "(Sail) Pilothouse" : "pilothouse",
  "(Sail) Racer" : "racing",
  "(Sail) Racing Sailboat" : "racing",
  "(Sail) Schooner" : "schooner",
  "(Sail) Sloop" : "sloop",
  "(Sail) Trimaran" : "trimaran",
  "(Sail) Yawl" : "yawl",
  "(Sail) Other" : "other",
  "Cabina en popa": "aft cabin",
  "Antiguo y Clásico":"antique and classic",
  "Barcaza":"barge",
  "Proa abierta":"bowrider",
  "Carguero":"cargo ship",
  "Consola central":"center console",
  "Barco Comercial":"commercial",
  "Convertible":"convertible",
  "Trasatlántico":"cruise ship",
  "Crucero":"cruiser",
  "Cuddy Cabin - Cabina en proa":"cuddy cabin",
  "buceo":"dive boat",
  "Draga":"dragger",
  "Crucero Expreso":"express cruiser",
  "Flybridge - Puente descubierto":"flybridge",
  "Pesquero de agua dulce":"freshwater fishing",
  "Goleta":"gulet",
  "Casa Flotante":"house boat",
  "Neumática":"inflatable",
  "Magayate":"mega yacht",
  "Yate a Motor":"motor yacht",
  "Motovelero":"motorsailer",
  "Barcaza de canal":"narrowboat",
  "Pasajeros":"passenger",
  "Embarcación personal":"personal watercraft",
  "Timonera":"pilothouse",
  "Catamarán a motor":"catamaran",
  "Carreras de alto rendimiento":"racing",
  "Semirigida":"inflatable",
  "Crucero de rio":"canal and river cruiser",
  "Pesquero de agua salada":"saltwater fishing",
  "Bote de esquí y wakeboard":"ski and wakeboard boat",
  "Pesca deportiva":"sport fishing",
  "Crucero deportivo":"sports cruiser",
  "Bote auxiliar":"tender",
  "Trawler":"trawler",
  "Pesquero de arrastre":"troller",
  "Remolcador":"tug",
  "Barco utilitario":"utility",
  "Otro":"tther",
  "Catamarán de playa":"catamaran",
  "Crucero/Regata":"cruiser and racer",
  "Balandra":"cutter",
  "Paseo":"daysailer",
  "Salón en cubierta":"deck saloon",
  "Queche":"ketch",
  "Multicasco":"multi hull",
  "Timonero":"pilothouse",
  "Velero de regata":"racing",
  "Yola":"yawl",
  "Klassiker": "antique and classic",
  "Frachtkahn": "barge",
  "Bowrider": "bowrider",
  "Frachtschiff": "cargo ship",
  "Center Cockpit": "center console",
  "Kommerzielles Schiff": "commercial",
  "Sedanboot": "convertible",
  "Kreuzfahrtschiff": "cruise ship",
  "Cruiser": "cruiser",
  "Cuddy Cabi": "cuddy cabin",
  "Tauchboot": "dive Boat",
  "Dragger (Fischen)": "dragger",
  "Express-Boot": "express cruiser",
  "Flybridge": "flybridge",
  "Süsswasser Fischen": "freshwater fishing",
  "Gulet": "gulet",
  "Hausboot": "house boat",
  "Schlauchboot": "inflatable",
  "Megayacht": "mega yacht",
  "Motoryacht": "motor yacht",
  "Motosegler": "motorsailer",
  "Narrowboat": "narrowboat",
  "Passagierschiff": "passenger",
  "Jetboot (PWC)": "personal watercraft",
  "Kajütboot": "pilothouse",
  "Motorkatamaran": "catamaran",
  "Rennboot": "racing",
  "Rib": "inflatable",
  "Kanal- und Flusscruiser": "canal and river cruiser",
  "Salzwasser Fischen": "saltwater fishing",
  "Wasserski und Wakeboard": "ski and wakeboard boat",
  "Sportfischer": "sport fishing",
  "Sportboot": "sports cruiser",
  "Fischkutter": "tender",
  "Troller (Fischen)": "troller",
  "Schlepper/Lotsenboot": "lobster",
  "Gebrauchs-/Transportschiff": "utility",
  "andere": "other",
  "Strandkatamaran": "catamaran",
  "Cruiser/Racer": "cruiser and racer",
  "Segelkutter": "cutter",
  "Daysailer": "daysailer",
  "Decksalon": "deck saloon",
  "Ketch": "ketch",
  "Motorsegler": "motorsailer",
  "Mehrrumpfboot": "multi hull",
  "Klassenboot": "racing",
  "Schooner": "schooner",
  "Jolle": "yawl",
  "Cabine arrière": "aft cabin",
  "Classique et de tradition": "antique and classic",
  "Gabare": "barge",
  "Navire Cargo": "cargo ship",
  "Center Console": "center console",
  "Navire Commercial": "commercial",
  "Bateau convertible": "convertible",
  "Croiseur": "cruiser",
  "Cuddy cabine": "cuddy cabin",
  "Bateau de plongée": "dive boat",
  "Chalutier": "trawler",
  "Croiseur rapide": "express cruiser",
  "Pêche promenade à moteur": "freshwater fishing",
  "Goélette": "gulet",
  "Péniche habitable": "house boat",
  "Pneumatique": "inflatable",
  "Mega Yacht": "mega yacht",
  "Vedette de croisière": "motor yacht",
  "Bateau mixte, motor-sailer": "motorsailer",
  "Péniche traditionnelle": "narrowboat",
  "Passager": "passenger",
  "Motomarine": "personal watercraft",
  "Pilothouse": "pilothouse",
  "Catamaran": "catamaran",
  "Bateau offshore": "racing",
  "Semi-rigide": "inflatable",
  "Fluvial": "canal and river cruiser",
  "Pêche en eau salée": "saltwater fishing",
  "Bateau pour ski nautique et wakeboard": "ski and wakeboard boat",
  "Pêche sportive": "sport fishing",
  "Sport": "sports cruiser",
  "Annexe": "tender",
  "Troller (Pêche)": "troller",
  "Remorqueur": "tug",
  "Bateau de travail": "utility",
  "Autre": "other",
  "Catamaran de plage": "catamaran",
  "Course-croisière": "cruiser and racer",
  "Cutter": "cutter",
  "Daysailer-weekender (Croisière côtière)": "daysailer",
  "Espace pont": "deck saloon",
  "Voilier mixte": "motorsailer",
  "Multicoque voile": "multi hull",
  "Voilier Pilothouse": "pilothouse",
  "Voilier de Course": "racing",
  "Yawl": "yawl",
  "cabina di prua": "aft cabin",
  "antica/classica": "antique and classic",
  "lancia": "barge",
  "bowrider": "bowrider",
  "barge": "barge",
  "nave cargo": "cargo ship",
  "console centrale": "center console",
  "commerciale": "commercial",
  "convertibile": "convertible",
  "nave": "cruise ship",
  "diporto": "cruiser",
  "cabina di poppa": "cuddy cabin",
  "pesca subaquea": "dive boat",
  "dragger": "dragger",
  "open": "express cruiser",
  "flybridge": "flybridge",
  "pesca costiera": "freshwater fishing",
  "goletta": "gulet",
  "houseboat": "house boat",
  "mega yacht": "mega yacht",
  "motor yacht": "motor yacht",
  "motorsailer": "motorsailer",
  "narrowboat": "narrowboat",
  "trasporto passeggeri": "passenger",
  "natante": "personal watercraft",
  "pilotina": "plothouse",
  "catamarano a motore": "catamaran",
  "offshore": "racing",
  "gommone chiglia rigida": "inflatable",
  "navigazione fluviale": "canal and river cruiser",
  "pesca in mare": "saltwater fishing",
  "barca per sci d'acqua e wake board": "ski and wakeboard boat",
  "pesca sportiva": "sport fishing",
  "diporto sportivo": "sports cruiser",
  "tender": "tender",
  "trowler": "trawler",
  "pesca a traina": "troller",
  "rimorchiatore": "tug",
  "barca da lavoro": "utility",
  "altro": "other",
  "catamarano da spiaggia": "catamaran",
  "crociera": "cruiser and racer",
  "crociera/regata": "cruiser and racer",
  "cutter": "cutter",
  "salone sul ponte": "deck saloon",
  "ketch": "ketch",
  "multi-scafo": "multi hull",
  "regata": "racing sailboat",
  "yawl": "yawl",
  "gommone": "inflatable",
  "Motorboot met achterkabine": "aft cabin",
  "Binnenvaartschip": "barge",
  "Klassieke Boot": "antique and classic",
  "Vrachtschip": "cargo ship",
  "Centercockpit": "center console",
  "Beroepsschip": "commercial",
  "Kruisvaartschip": "cruise ship",
  "Cuddy Cabin": "cuddy cabin",
  "Duiken": "dive boat",
  "Expressboot": "express cruiser",
  "Zoetwatervissen": "freshwater fishing",
  "Woonboot": "house boat",
  "Rubberboot": "inflatable",
  "Megajacht": "mega yacht",
  "Motorjacht": "motor yacht",
  "Motorzeiler": "motorsailer",
  "Passagiersschip": "passenger",
  "Kajuitboot": "pilothouse",
  "High-Performance": "racing",
  "Kanaal en Rivierschip": "canal and river cruiser",
  "Zoutwatervissen": "saltwater fishing",
  "Waterski en Wakeboard": "ski and wakeboard boat",
  "Sportvisser": "sport fishing",
  "Tender": "tender",
  "Troller (Visserij)": "troller",
  "Sleepboot": "tug",
  "Werkboot": "utility",
  "Tjalk": "barge",
  "Strandcatamaran": "catamaran",
  "Zeilkotter": "cutter",
  "Deck Saloon": "deck saloon",
  "Multi-hull": "multi hull",
  "Racer": "racing",
  "Sloep": "yawl",
  "agterkahyt": "aft cabin",
  "antikk og klassisk": "antique and classic",
  "pram": "barge",
  "fragtskib": "cargo ship",
  "midterkonsol": "center console",
  "erhvervsskib": "commercial",
  "convertible": "convertible",
  "krydstogtskib": "cruise ship",
  "cruiser": "cruiser",
  "cuddy cabin": "cuddy cabin",
  "dykke båd": "dive boat",
  "dragger fiskebåd": "dragger",
  "expresscruiser": "express cruiser",
  "ferskvand fiskebåd": "freshwater fishing",
  "gulet": "gulet",
  "husbåd": "house boat",
  "gummibåd": "inflatable",
  "megayacht": "mega yacht",
  "motorbåd": "motor yacht",
  "motorsejler": "motorsailer",
  "kanalbåd": "narrowboat",
  "passagerbåd": "passenger",
  "personlig vandfartøj": "personal watercraft",
  "styrehusbåd": "pilothouse",
  "power katamaran": "catamaran",
  "high performance racingbåd": "racing",
  "Gummibåd RIB": "inflatable",
  "kanal- og flodbåd": "canal and river cruiser",
  "saltvand fiskekutter": "saltwater fishing",
  "ski- og wakeboardsbåd": "ski and wakeboard boat",
  "sportsfiskeri båd": "sport fishing",
  "sportscruiser": "sports cruiser",
  "jolle": "tender",
  "fisketrawler": "trawler",
  "bugserbåd": "tug",
  "servicebåd": "utility",
  "anden": "other",
  "katamaranjolle": "catamaran",
  "cruiser/racer": "cruiser and racer",
  "kutter": "cutter",
  "daysailer": "daysailer",
  "dæksaloon": "deck saloon",
  "multi-skrog": "multi hull",
  "racing sejlbåd": "racing",
  "skonnert": "schooner",
  "akterhytt": "aft cabin",
  "antik och klassisk": "antique and classic",
  "pråm": "barge",
  "lastfartyg": "cargo ship",
  "walkaround konsol": "center console",
  "kommersiellt fartyg": "commercial",
  "kryssningsfartyg": "cruise ship",
  "kryssare": "cruiser",
  "dykbåt": "dive boat",
  "dragger fiskebåt": "dragger",
  "expresskryssare": "express cruiser",
  "sötvatten fiskebåt": "freshwater fishing",
  "husbåt": "house boat",
  "gummibåt": "inflatable",
  "motorbåt": "motor yacht",
  "motorseglare": "motorsailer",
  "kanalbåt": "narrowboat",
  "passagerarbåt": "passenger",
  "personlig vattenfartyg": "personal watercraft",
  "styrhyttebåt": "pilothouse",
  "högpresterande tävlingsbåt": "racing",
  "RIB-gummijolle": "inflatable",
  "kanal- och flodbåt": "canal and river cruiser",
  "saltvatten fiskebåt": "saltwater fishing",
  "ski- och wakeboardsbåt": "ski and wakeboard boat",
  "sportfiskebåt": "sport fishing",
  "sportskryssare": "sports cruiser",
  "trålare": "trawler",
  "bogserbåt": "tug",
  "bruksbåt": "utility",
  "annat": "other",
  "kryssare/kappseglingsbåt": "cruiser and racer",
  "dagsseglare": "daysailer",
  "däcksalong": "deck saloon",
  "multi-skrov": "multi hull",
  "kappseglingsbåt": "racing",
  "skonert": "schooner",
  "julle": "yawl",
  "takakajuutta": "aft cabin",
  "Antiikki ja klassikot": "antique and classic",
  "proomu": "barge",
  "Avokeula": "bowrider",
  "rahtilaiva": "cargo ship",
  "keskipulpetti": "center console",
  "kaupallinen": "commercial",
  "avovene": "convertible",
  "matkustajalaiva": "cruise ship",
  "Matkavene": "cruiser",
  "Pienhytillinen": "cuddy cabin",
  "sukeltamisvene": "dive boat",
  "raahaaja": "dragger",
  "nopea matkavene": "express cruiser",
  "yläohjaamo": "flybridge",
  "Makeavesi kalavene": "freshwater fishing",
  "guletti": "gulet",
  "Asuntovene": "house boat",
  "puhallettava": "inflatable",
  "megajahti": "mega yacht",
  "Moottorijahti": "motor yacht",
  "moottoripurjehtija": "motorsailer",
  "Kapeavene": "narrowboat",
  "matkustaja": "passenger",
  "henkilökohtainenvesikulkuneuvo": "personal watercraft",
  "moottorikatamaraani": "catamaran",
  "pikavene": "racing",
  "ribvene": "inflatable",
  "canalandrivercruiser": "canal and river cruiser",
  "merivesikalastus": "saltwater fishing",
  "vesihiihtovene": "ski and wakeboard boat",
  "urheilukalastus": "sport fishing",
  "Tenderi": "tender",
  "Troolari": "trawler",
  "trolleri": "troller",
  "hinaaja": "tug",
  "työvene": "utility",
  "muu": "other",
  "rantakatamaraani": "catamaran",
  "kutteri": "cutter",
  "daysailor": "daysailer",
  "ketsi": "ketch",
  "Monirunko": "multi hull",
  "kilpavene": "racing",
  "kuunari": "schooner",
  "jooli": "yawl",
  "passasjerbåt": "passenger",
  "personlig vannfartøy": "personal watercraft",
  "kahyttbåt": "pilothouse",
  "høytytende contestbåt": "racing",
  "RIB-gummibåt": "inflatable",
  "kanal- og elvbåt": "canal and river cruiser",
  "saltvannsfiske båt": "saltwater fishing",
  "sport fiskebåt": "sport fishing",
  "lettbåt": "tender",
  "trålere": "trawler",
  "bukserbåt": "troller",
  "servicebåt": "utility",
  "annet": "other",
  "day-seiler": "daysailer",
  "dekksalong": "deck saloon",
  "racing seilbåt": "racing",
  "Кормовой кабиной": "aft cabin",
  "Антикварные и классические": "antique and classic",
  "Баржа": "barge",
  "Боурайдер": "bowrider",
  "Грузовое судно": "cargo ship",
  "С кабиной в центре": "center console",
  "Коммерческое": "commercial",
  "С трансформируемой кабиной": "convertible",
  "Круизный лайнер": "cruise ship",
  "Круизное": "cruiser",
  "Дайвбот": "dive Boat",
  "Драггер": "dragger",
  "Экспресс круизер": "express cruiser",
  "С отрытым мостиком": "flybridge",
  "Для речного рыболовства": "gulet",
  "Плавучий дом": "house boat",
  "Надувное": "inflatable",
  "Мегаяхт": "mega yacht",
  "Моторная яхта": "motor yacht",
  "Моторсейлер": "motorsailer",
  "Туристическая речная моторная лодка": "narrowboat",
  "Пассажирское": "passenger",
  "Персональное судно": "personal watercraft",
  "С рулевой рубкой": "pilothouse",
  "Моторный катамаран": "catamaran",
  "Гоночное": "racing",
  "РИБ": "inflatable",
  "Речной канальный круисер": "canal and river cruiser",
  "Морской рыболовный": "saltwater fishing",
  "Для водных лыж и вейкбордов": "ski and wakeboard boat",
  "Для спортивной рыбалки": "sport fishing",
  "Спортивный круизер": "sports cruiser",
  "Шлюпка": "tender",
  "Траулер": "trawler",
  "Промысловый бот": "troller",
  "Буксир": "tug",
  "Вспомогательное": "utility",
  "Другое": "other",
  "Пляжный катамаран": "catamaran",
  "Круизное/Гоночное": "cruiser and racer",
  "Куттер": "cutter",
  "Прогулочное": "daysailer",
  "С кают-компанией": "deck saloon",
  "Кеч": "ketch",
  "Многокорпусное": "multi hull",
  "Шхуна": "schooner",
  "Ялик": "yawl",
  "Aft Cabin" : "aft cabin",
  "Antique and Classic" : "antique and classic",
  "Barge" : "barge",
  "Canal and River Cruiser" : "canal and river cruiser",
  "Cargo Ship" : "cargo ship",
  "Commercial Boat" : "commercial",
  "Commercial" : "commercial",
  "Convertible Boat" : "convertible",
  "Cruise Ship" : "cruise ship",
  "Dive Boat" : "dive boat",
  "Downeast": "downeast",
  "Dragger" : "dragger",
  "Express Cruiser" : "express cruiser",
  "Express" : "express cruiser",
  "Freshwater Fishing" : "freshwater fishing",
  "High Performance": "high performance",
  "House Boat" : "house boat",
  "Houseboat" : "house boat",
  "Inflatable" : "inflatable",
  "Motor Yacht" : "motor yacht",
  "Motoryacht with cockpit" : "motor yacht",
  "Motoryacht with flybridge" : "motor yacht",
  "Motoryacht without cockpit" : "motor yacht",
  "Motorsailer" : "motorsailer",
  "Narrow Boat" : "narrow boat",
  "Open Fisherman": "saltwater fishing",
  "Passenger" : "passenger",
  "Personal Watercraft" : "personal watercraft",
  "Pontoon": "pontoon",
  "Power Catamaran" : "catamaran",
  "Racing/High Performance" : "racing",
  "Rigid Inflatable Boat (RIB)" : "inflatable",
  "Runabout": "runabout",
  "Saltwater Fishing" : "saltwater fishing",
  "Saltwater Inshore Fishing" : "saltwater fishing",
  "Saltwater Offshore Fishing" : "saltwater fishing",
  "Sedan/Convertible" : "convertible",
  "Ski and Wakeboard Boat" : "ski and wakeboard boat",
  "Small Cruiser" : "cruiser",
  "Sport Fisherman" : "sport fishing",
  "Sport Fishing" : "sport fishing",
  "Sports Cruiser" : "sports cruiser",
  "Superyacht ": "mega yacht",
  "Troller" : "troller",
  "Tug" : "tug",
  "Utility Boat" : "utility",
  "Other" : "other",
  "Cargo" : "cargo ship",
  "Combination ": "combination",
  "Crabber": "crabber",
  "Dive" : "dive boat",
  "Skiff": "skiff",
  "Utility/Supply": "utility",
  "Beach Catamaran" : "catamaran",
  "Daysailer/Weekender" : "daysailer",
  "Motorsailer/Pilothouse" : "motorsailer",
  "Multi-Hull" : "multi hull",
  "Racing Sailboat" : "racing",
  "Sloop" : "sloop",
  "Schaluppe" : "sloop",
  "Slup" : "sloop",
  "шлюп" : "sloop",
  "Trimaran" : "trimaran"
};

  var self = {

    convertClass: function(productClass) {
      if (productClass in BOAT_CLASS_MAP) {
        return BOAT_CLASS_MAP[productClass];
      } else {
        return productClass;
      }
    },
    convertType: function(productType) {
      //efeng-1023 if string contains "Personal Watercraft" anywhere, it's boat type should be "personal watercraft"
      // if string contains "Commercial" anywhere, it's boat type should be "commercial"
      for (var i=0; i<SPECIAL_BOAT_TYPE.length; i++) {
          if (productType.indexOf(SPECIAL_BOAT_TYPE[i])>-1) {
              return BOAT_TYPE_MAP["("+SPECIAL_BOAT_TYPE[i]+")"];
          }
      }
      var type = productType.split(" ");
      if(type[0] in BOAT_TYPE_MAP) {
        return BOAT_TYPE_MAP[type[0]];
      }else {
        return type[0];
      }
    }

  };

  return self;
}());

var digitalDataBuilderBoatTraderMapper = window.digitalDataBuilderBoatTraderMapper = (function () {
    "use strict";

    var BOAT_CLASS_MAP = {
        "Power|Aft Cabin|100132": "aft cabin",
        "Power|Aluminum Fish Boats|100132": "aluminum fish boat",
        "Power|Angler|100132": "angler",
        "Power|Bass Boat|100132": "bass boat",
        "Power|Bowrider|100132": "bowrider",
        "Power|Catamaran (Power)|100132": "catamaran",
        "Power|Center Console|100132": "center console",
        "Power|Commercial|100132": "commercial",
        "Power|Convertible|100132": "convertible",
        "Power|Cruiser (Power)|100132": "cruiser",
        "Power|Cuddy Cabin|100132": "cuddy cabin",
        "Power|Deck Boat|100132": "deck boat",
        "Power|Downeast|100132": "downeast",
        "Power|Express Cruiser|100132": "express cruiser",
        "Power|Flybridge|100132": "flybridge",
        "Power|High Performance|100132": "high performance",
        "Power|Houseboat|100132": "house boat",
        "Power|Motoryacht|100132": "motor yacht",
        "Power|Pilothouse|100132": "pilothouse",
        "Power|Pontoon|100132": "pontoon",
        "Power|Runabout|100132": "runabout",
        "Power|Sport Fisherman|100132": "sport fishing",
        "Power|Mega Yacht|100132": "mega yacht",
        "Power|Trawler|100132": "trawler",
        "Power|Walkaround|100132": "walkaround",
        "Power|Weekender|100132": "weekender",
        "Power|Jon Boat|100132": "jon boat",
        "Power|Flats Boat|100132": "flats boat",
        "Power|Jet Boat|100132": "jet boat",
        "Power|Fish And Ski|100132": "ski and fish",
        "Power|Classic (Power)|100132": "antique and classic",
        "Power|Dual Console|100132": "dual console",
        "Power|Airboat|100132": "airboat",
        "Power|Bay Boat|100132": "bay boat",
        "Power|Skiff|100132": "skiff",
        "Power|Bluewater Fishing|100132": "bluewater fising",
        "Power|Freshwater Fishing|100132": "freshwater fishing",
        "Power|Other|100132": "other",
        "Power|Saltwater Fishing|100132": "saltwater fishing",
        "Power|Submersible|100132": "submersible",
        "Power|Ski and Wakeboard boat|100132": "ski and wakeboard boat",
        "Power|Dive Boat|100132": "dive boat",
        "Power|Duck Boat|100132": "duck boat",
        "Sail|Catamaran (Sail)|100133": "catamaran",
        "Sail|Classic (Sail)|100133": "antique and classic",
        "Sail|Cruiser (Sail)|100133": "cruiser",
        "Sail|Cruiser/Racer|100133": "cruiser and racer",
        "Sail|Cutter|100133": "cutter",
        "Sail|Daysailor/Weekender|100133": "daysailer",
        "Sail|Ketch|100133": "ketch",
        "Sail|Motorsailer|100133": "motorsailer",
        "Sail|Multi-Hull|100133": "multi hull",
        "Sail|Racer|100133": "racing",
        "Sail|Sloop|100133": "sloop",
        "Sail|Yawl|100133": "yawl",
        "Sail|Other|100133": "other",
        "PWC|all|100134": "personal watercraft",
        "Small Boats|all|3653623": "",
        "Small Boats|Tenders/Small Boats|3653623": "tender",
        "Small Boats|Canoe/Kayak|3653623": "kayak",
        "Small Boats|Rigid Inflatable|3653623": "rigid sports inflatable",
        "Small Boats|Other|3653623": "other",
        "Small Boats|Inflatables|3653623": "inflatable",
        "Aft Cabin": "aft cabin",
        "Airboat": "airboat",
        "Air Boat": "airboat",
        "Angler": "angler",
        "Bass Boat": "bass boat",
        "Bay Boat": "bay boat",
        "Bluewater Fishing": "bluewater fising",
        "Bowrider": "bowrider",
        "Catamaran (Power)": "catamaran",
        "Center Console": "center console",
        "Center Consoles": "center console",
        "Classic (Power)": "antique and classic",
        "Commercial": "commercial",
        "Convertible": "convertible",
        "Cruiser (Power)": "cruiser",
        "Cuddy Cabin": "cuddy cabin",
        "Deck Boat": "deck boat",
        "Dive Boat": "dive boat",
        "Downeast": "downeast",
        "Dual Console": "dual console",
        "Duck Boat": "duck boat",
        "Express Cruiser": "express cruiser",
        "Fish And Ski": "ski and fish",
        "Flats Boat": "flats boat",
        "Flybridge": "flybridge",
        "Freshwater Fishing": "freshwater fishing",
        "High Performance": "high performance",
        "Houseboat": "house boat",
        "Jet Boat": "jet boat",
        "Jon Boat": "jon boat",
        "Mega Yacht": "mega yacht",
        "Motoryacht": "motor yacht",
        "Other": "other",
        "Pilothouse": "pilothouse",
        "Pontoon": "pontoon",
        "Runabout": "runabout",
        "Saltwater Fishing": "saltwater fishing",
        "Ski and Wakeboard boat": "ski and wakeboard boat",
        "Skiff": "skiff",
        "Sport Fisherman": "sport fishing",
        "Submersible": "submersible",
        "Trawler": "trawler",
        "Walkaround": "walkaround",
        "Weekender": "weekender",
        "Catamaran (Sail)": "catamaran",
        "Classic (Sail)": "antique and classic",
        "Cruiser (Sail)": "cruiser",
        "Cruiser/Racer": "cruiser and racer",
        "Cutter": "cutter",
        "Daysailor/Weekender": "daysailer",
        "Ketch": "ketch",
        "Motorsailer": "motorsailer",
        "Multi-Hull": "multi hull",
        "Racer": "racing",
        "Sloop": "sloop",
        "Yawl": "yawl",
        "Canoe/Kayak": "kayak",
        "Inflatables": "inflatable",
        "Rigid Inflatable": "rigid sports inflatable",
        "Tenders/Small Boats": "tender",
        "power-aft-cabin": "aft cabin",
        "power-aft": "aft cabin",
        "power-airboat": "airboat",
        "power-aluminum-fish-boats": "aluminum fish boat",
        "power-aluminum": "aluminum fish boat",
        "power-antique-and-classics": "antique and classic",
        "power-antique": "antique and classic",
        "power-barge": "barge",
        "power-bass-boats": "bass boat",
        "power-bass": "bass boat",
        "power-bay-boats": "bay boat",
        "power-bay": "bay boat",
        "power-bowrider": "bowrider",
        "power-cargo-ship": "cargo ship",
        "power-cargo": "cargo ship",
        "power-center-consoles": "center console",
        "power-center": "center console",
        "power-commercial-boats": "commercial",
        "power-commercial": "commercial",
        "power-convertible-boats": "convertible",
        "power-convertible": "convertible",
        "power-cruisers": "cruiser",
        "power-cruiser": "cruiser",
        "power-cruise-ship": "cruise ship",
        "power-cruiseship": "cruise ship",
        "power-cuddy-cabin": "cuddy cabin",
        "power-cuddy": "cuddy cabin",
        "power-deck-boats": "deck boat",
        "power-deck": "deck boat",
        "power-dinghies": "dinghie",
        "power-dinghy": "dinghie",
        "power-dive-boat": "dive boat",
        "power-dive": "dive boat",
        "power-downeast": "downeast",
        "power-dragger": "dragger",
        "power-dual-console": "dual console",
        "power-dualconsole": "dual console",
        "power-express-cruiser": "express cruiser",
        "power-expresscruiser": "express cruiser",
        "power-flats-boats": "flats boat",
        "power-flats": "flats boat",
        "power-flybridge": "flybridge",
        "power-freshwater-fishing": "freshwater fishing",
        "power-fresh": "freshwater fishing",
        "power-gulet": "gulet",
        "power-high-performance-boats": "high performance",
        "power-highperf": "high performance",
        "power-house-boats": "house boat",
        "power-house": "house boat",
        "power-inflatables": "inflatable",
        "power-inflatable": "inflatable",
        "power-jet-boats": "jet boat",
        "power-jet": "jet boat",
        "power-jon-boats": "jon boat",
        "power-jon": "jon boat",
        "power-lobster-boat": "lobster boat",
        "power-lobster": "lobster boat",
        "power-mega-yachts": "mega yacht",
        "power-mega": "mega yacht",
        "power-motor-yachts": "motor yacht",
        "power-motor": "motor yacht",
        "power-motorsailers": "motorsailer",
        "power-narrow-boat": "narrow boat",
        "power-narrow": "narrow boat",
        "power-other": "other",
        "power-passenger": "passenger",
        "power-power-catamarans": "catamaran",
        "power-pcatamaran": "catamaran",
        "power-pilothouse": "pilothouse",
        "power-pilot": "pilothouse",
        "power-pontoon-boats": "pontoon",
        "power-pontoon": "pontoon",
        "power-personal-watercraft": "personal watercraft",
        "power-rigid-sports-inflatable": "rigid sports inflatable",
        "power-rib": "rigid sports inflatable",
        "power-river-cruiser": "canal and river cruiser",
        "power-rivercruiser": "canal and river cruiser",
        "power-runabouts": "runabout",
        "power-runabout": "runabout",
        "power-saltwater-fishing": "saltwater fishing",
        "power-saltfish": "saltwater fishing",
        "power-skiff": "skiff",
        "power-ski-and-fish": "ski and fish",
        "power-skifish": "ski and fish",
        "power-ski-and-wakeboard-boats": "ski and wakeboard boat",
        "power-skiwake": "ski and wakeboard boat",
        "power-sloop": "launch", 
        "power-sports-cruiser": "sports cruiser",
        "power-sportcruiser": "sports cruiser",
        "power-sports-fishing-boats": "sport fishing",
        "power-sportfish": "sport fishing",
        "power-tender": "tender",
        "power-trawlers": "trawler",
        "power-trawler": "trawler",
        "power-troller": "troller",
        "power-tug": "tug",
        "power-unspecified": "unspecified",
        "power-unspec": "unspecified",
        "power-utility-boats": "utility",
        "power-util": "utility",
        "power-walkarounds": "walkaround",
        "power-walk": "walkaround",
        "power-llaut": "llaut",
        "sail-antique-and-classics": "antique and classic",
        "sail-antique": "antique and classic",
        "sail-barge": "barge",
        "sail-beach-catamarans": "beach catamaran",
        "sail-beachcat": "beach catamaran",
        "sail-catamaran": "catamaran",
        "sail-center-cockpit": "center cockpit",
        "sail-centercockpit": "center cockpit",
        "sail-commercial-boats": "commercial",
        "sail-cruisers": "cruiser",
        "sail-cruiser": "cruiser",
        "sail-cutter": "cutter",
        "sail-daysailers": "daysailer",
        "sail-day": "daysailer",
        "sail-deck-saloon": "deck saloon",
        "sail-deck": "deck saloon",
        "sail-dinghies": "dinghie",
        "sail-dinghy": "dinghie",
        "sail-gulet": "gulet",
        "sail-ketch": "ketch",
        "sail-motorsailers": "motorsailer",
        "sail-motor": "motorsailer",
        "sail-multi-hulls": "multi hull",
        "sail-multihull": "multi hull",
        "sail-other": "other",
        "sail-high-performance-boats": "high performance",
        "sail-pilothouse": "pilothouse",
        "sail-pilot": "pilothouse",
        "sail-racers": "racing",
        "sail-racer": "racing",
        "sail-racers-and-cruisers": "cruiser and racer",
        "sail-racerscruiser": "cruiser and racer",
        "sail-schooner": "schooner",
        "sail-sloop": "sloop",
        "sail-trimaran": "trimaran",
        "sail-tender": "tender",
        "sail-unspecified": "unspecified",
        "sail-unspec": "unspecified",
        "sail-yawl": "yawl",
        "unpowered-barge": "barge",
        "unpowered-dinghies": "dinghie",
        "unpowered-dinghy": "dinghie",
        "unpowered-inflatables": "inflatable",
        "unpowered-kayak": "kayak",
        "unpowered-narrow-boat": "narrow boat",
        "unpowered-other": "other",
        "unpowered-tender": "tender",
        "unpowered-unspecified": "unspecified"
    };

    var BOAT_TYPE_MAP = {
        "Power|all|100132": "power",
        "Power|Aft Cabin|100132": "power",
        "Power|Aluminum Fish Boats|100132": "power",
        "Power|Angler|100132": "power",
        "Power|Bass Boat|100132": "power",
        "Power|Bowrider|100132": "power",
        "Power|Catamaran (Power)|100132": "power",
        "Power|Center Console|100132": "power",
        "Power|Commercial|100132": "power",
        "Power|Convertible|100132": "power",
        "Power|Cruiser (Power)|100132": "power",
        "Power|Cuddy Cabin|100132": "power",
        "Power|Deck Boat|100132": "power",
        "Power|Downeast|100132": "power",
        "Power|Express Cruiser|100132": "power",
        "Power|Flybridge|100132": "power",
        "Power|High Performance|100132": "power",
        "Power|Houseboat|100132": "power",
        "Power|Motoryacht|100132": "power",
        "Power|Pilothouse|100132": "power",
        "Power|Pontoon|100132": "power",
        "Power|Runabout|100132": "power",
        "Power|Sport Fisherman|100132": "power",
        "Power|Mega Yacht|100132": "power",
        "Power|Trawler|100132": "power",
        "Power|Walkaround|100132": "power",
        "Power|Weekender|100132": "power",
        "Power|Jon Boat|100132": "power",
        "Power|Flats Boat|100132": "power",
        "Power|Jet Boat|100132": "power",
        "Power|Fish And Ski|100132": "power",
        "Power|Classic (Power)|100132": "power",
        "Power|Dual Console|100132": "power",
        "Power|Airboat|100132": "power",
        "Power|Bay Boat|100132": "power",
        "Power|Skiff|100132": "power",
        "Power|Bluewater Fishing|100132": "power",
        "Power|Freshwater Fishing|100132": "power",
        "Power|Other|100132": "power",
        "Power|Saltwater Fishing|100132": "power",
        "Power|Submersible|100132": "power",
        "Power|Ski and Wakeboard boat|100132": "power",
        "Power|Dive Boat|100132": "power",
        "Power|Duck Boat|100132": "power",
        "Sail|all|100133": "sail",
        "Sail|Catamaran (Sail)|100133": "sail",
        "Sail|Classic (Sail)|100133": "sail",
        "Sail|Cruiser (Sail)|100133": "sail",
        "Sail|Cruiser/Racer|100133": "sail",
        "Sail|Cutter|100133": "sail",
        "Sail|Daysailor/Weekender|100133": "sail",
        "Sail|Ketch|100133": "sail",
        "Sail|Motorsailer|100133": "sail",
        "Sail|Multi-Hull|100133": "sail",
        "Sail|Racer|100133": "sail",
        "Sail|Sloop|100133": "sail",
        "Sail|Yawl|100133": "sail",
        "Sail|Other|100133": "sail",
        "PWC|all|100134": "personal watercraft",
        "personal": "personal watercraft",
        "Small Boats|all|3653623": "small boat",
        "Small Boats|Tenders/Small Boats|3653623": "small boat",
        "Small Boats|Canoe/Kayak|3653623": "small boat",
        "Small Boats|Rigid Inflatable|3653623": "small boat",
        "Small Boats|Other|3653623": "small boat",
        "Small Boats|Inflatables|3653623": "small boat",
        "small": "small boat",
        "Aft Cabin": "power",
        "Airboat": "power",
        "Air Boat": "power",
        "Angler": "power",
        "Bass Boat": "power",
        "Bay Boat": "power",
        "Bluewater Fishing": "power",
        "Bowrider": "power",
        "Catamaran (Power)": "power",
        "Center Console": "power",
        "Classic (Power)": "power",
        "Commercial": "power",
        "Convertible": "power",
        "Cruiser (Power)": "power",
        "Cuddy Cabin": "power",
        "Deck Boat": "power",
        "Dive Boat": "power",
        "Downeast": "power",
        "Dual Console": "power",
        "Duck Boat": "power",
        "Express Cruiser": "power",
        "Fish And Ski": "power",
        "Flats Boat": "power",
        "Flybridge": "power",
        "Freshwater Fishing": "power",
        "High Performance": "power",
        "Houseboat": "power",
        "Jet Boat": "power",
        "Jon Boat": "power",
        "Mega Yacht": "power",
        "Motoryacht": "power",
        "Pilothouse": "power",
        "Pontoon": "power",
        "Runabout": "power",
        "Saltwater Fishing": "power",
        "Ski and Wakeboard boat": "power",
        "Skiff": "power",
        "Sport Fisherman": "power",
        "Submersible": "power",
        "Trawler": "power",
        "Walkaround": "power",
        "Weekender": "power",
        "Catamaran (Sail)": "sail",
        "Classic (Sail)": "sail",
        "Cruiser (Sail)": "sail",
        "Cruiser/Racer": "sail",
        "Cutter": "sail",
        "Daysailor/Weekender": "sail",
        "Ketch": "sail",
        "Motorsailer": "sail",
        "Multi-Hull": "sail",
        "Racer": "sail",
        "Sloop": "sail",
        "Yawl": "sail",
        "Canoe/Kayak": "small boat",
        "Inflatables": "small boat",
        "Rigid Inflatable": "small boat",
        "Tenders/Small Boats": "small boat",
        "power-aft-cabin": "power",
        "power-aluminum-fish-boats": "power",
        "power-antique-and-classics": "power",
        "power-barge": "power",
        "power-bass-boats": "power",
        "power-bay-boats": "power",
        "power-bowrider": "power",
        "power-cargo-ship": "power",
        "power-center-consoles": "power",
        "power-commercial-boats": "power",
        "power-convertible-boats": "power",
        "power-cruisers": "power",
        "power-cruise-ship": "power",
        "power-cuddy-cabin": "power",
        "power-deck-boats": "power",
        "power-dinghies": "power",
        "power-dive-boat": "power",
        "power-downeast": "power",
        "power-dragger": "power",
        "power-dual-console": "power",
        "power-express-cruiser": "power",
        "power-flats-boats": "power",
        "power-flybridge": "power",
        "power-freshwater-fishing": "power",
        "power-gulet": "power",
        "power-high-performance-boats": "power",
        "power-house-boats": "power",
        "power-inflatables": "power",
        "power-jet-boats": "power",
        "power-jon-boats": "power",
        "power-lobster-boat": "power",
        "power-mega-yachts": "power",
        "power-motor-yachts": "power",
        "power-motorsailers": "power",
        "power-narrow-boat": "power",
        "power-other": "power",
        "power-passenger": "power",
        "power-power-catamarans": "power",
        "power-pilothouse": "power",
        "power-pontoon-boats": "power",
        "power-personal-watercraft": "power",
        "power-rigid-sports-inflatable": "power",
        "power-river-cruiser": "power",
        "power-runabouts": "power",
        "power-saltwater-fishing": "power",
        "power-skiff": "power",
        "power-ski-and-fish": "power",
        "power-ski-and-wakeboard-boats": "power",
        "power-sports-cruiser": "power",
        "power-sports-fishing-boats": "power",
        "power-tender": "power",
        "power-trawlers": "power",
        "power-troller": "power",
        "power-tug": "power",
        "power-unspecified": "power",
        "power-utility-boats": "power",
        "power-walkarounds": "power",
        "power-llaut": "power",
        "sail-antique-and-classics": "sail",
        "sail-barge": "sail",
        "sail-beach-catamarans": "sail",
        "sail-catamaran": "sail",
        "sail-center-cockpit": "sail",
        "sail-commercial-boats": "sail",
        "sail-cruisers": "sail",
        "sail-cutter": "sail",
        "sail-daysailers": "sail",
        "sail-deck-saloon": "sail",
        "sail-dinghies": "sail",
        "sail-gulet": "sail",
        "sail-ketch": "sail",
        "sail-motorsailers": "sail",
        "sail-multi-hulls": "sail",
        "sail-other": "sail",
        "sail-high-performance-boats": "sail",
        "sail-pilothouse": "sail",
        "sail-racers": "sail",
        "sail-racers-and-cruisers": "sail",
        "sail-schooner": "sail",
        "sail-sloop": "sail",
        "sail-trimaran": "sail",
        "sail-unspecified": "sail",
        "sail-yawl": "sail",
        "unpowered-barge": "unpowered",
        "unpowered-dinghies": "unpowered",
        "unpowered-inflatables": "unpowered",
        "unpowered-kayak": "unpowered",
        "unpowered-narrow-boat": "unpowered",
        "unpowered-other": "unpowered",
        "unpowered-tender": "unpowered",
        "unpowered-unspecified": "unpowered"
    };

    var ENGINE_TYPE_MAP = {
        "SINGLE": "single",
        "SINGLE OUTBOARD": "single outboard"
    };

    return {
        convertClass: function (productClass) {
            if (productClass in BOAT_CLASS_MAP) {
                return BOAT_CLASS_MAP[productClass];
            } else {
                return productClass;
            }
        },
        convertType: function (productType) {
            if (productType in BOAT_TYPE_MAP) {
                return BOAT_TYPE_MAP[productType];
            } else {
                return productType;
            }
        },
        convertEngineType: function (engineType) {
            if (engineType in ENGINE_TYPE_MAP) {
                return ENGINE_TYPE_MAP[engineType];
            } else {
                return engineType;
            }
        }
    };

}());

var digitalDataBuilderPlatformMapper = window.digitalDataBuilderPlatformMapper = (function () {
    "use strict";

    var BOAT_CLASS_MAP = {
        "Power|Aft Cabin|100132": "aft cabin",
        "Power|Aluminum Fish Boats|100132": "aluminum fish boat",
        "Power|Angler|100132": "angler",
        "Power|Bass Boat|100132": "bass boat",
        "Power|Bowrider|100132": "bowrider",
        "Power|Catamaran (Power)|100132": "catamaran",
        "Power|Center Console|100132": "center console",
        "Power|Commercial|100132": "commercial",
        "Power|Convertible|100132": "convertible",
        "Power|Cruiser (Power)|100132": "cruiser",
        "Power|Cuddy Cabin|100132": "cuddy cabin",
        "Power|Deck Boat|100132": "deck boat",
        "Power|Downeast|100132": "downeast",
        "Power|Express Cruiser|100132": "express cruiser",
        "Power|Flybridge|100132": "flybridge",
        "Power|High Performance|100132": "high performance",
        "Power|Houseboat|100132": "house boat",
        "Power|Motoryacht|100132": "motor yacht",
        "Power|Pilothouse|100132": "pilothouse",
        "Power|Pontoon|100132": "pontoon",
        "Power|Runabout|100132": "runabout",
        "Power|Sport Fisherman|100132": "sport fishing",
        "Power|Mega Yacht|100132": "mega yacht",
        "Power|Trawler|100132": "trawler",
        "Power|Walkaround|100132": "walkaround",
        "Power|Weekender|100132": "weekender",
        "Power|Jon Boat|100132": "jon boat",
        "Power|Flats Boat|100132": "flats boat",
        "Power|Jet Boat|100132": "jet boat",
        "Power|Fish And Ski|100132": "ski and fish",
        "Power|Classic (Power)|100132": "antique and classic",
        "Power|Dual Console|100132": "dual console",
        "Power|Airboat|100132": "airboat",
        "Power|Bay Boat|100132": "bay boat",
        "Power|Skiff|100132": "skiff",
        "Power|Bluewater Fishing|100132": "bluewater fising",
        "Power|Freshwater Fishing|100132": "freshwater fishing",
        "Power|Other|100132": "other",
        "Power|Saltwater Fishing|100132": "saltwater fishing",
        "Power|Submersible|100132": "submersible",
        "Power|Ski and Wakeboard boat|100132": "ski and wakeboard boat",
        "Power|Dive Boat|100132": "dive boat",
        "Power|Duck Boat|100132": "duck boat",
        "Sail|Catamaran (Sail)|100133": "catamaran",
        "Sail|Classic (Sail)|100133": "antique and classic",
        "Sail|Cruiser (Sail)|100133": "cruiser",
        "Sail|Cruiser/Racer|100133": "cruiser and racer",
        "Sail|Cutter|100133": "cutter",
        "Sail|Daysailor/Weekender|100133": "daysailer",
        "Sail|Ketch|100133": "ketch",
        "Sail|Motorsailer|100133": "motorsailer",
        "Sail|Multi-Hull|100133": "multi hull",
        "Sail|Racer|100133": "racing",
        "Sail|Sloop|100133": "sloop",
        "Sail|Yawl|100133": "yawl",
        "Sail|Other|100133": "other",
        "PWC|all|100134": "personal watercraft",
        "Small Boats|all|3653623": "",
        "Small Boats|Tenders/Small Boats|3653623": "tender",
        "Small Boats|Canoe/Kayak|3653623": "kayak",
        "Small Boats|Rigid Inflatable|3653623": "rigid sports inflatable",
        "Small Boats|Other|3653623": "other",
        "Small Boats|Inflatables|3653623": "inflatable",
        "Aft Cabin": "aft cabin",
        "Airboat": "airboat",
        "Air Boat": "airboat",
        "Angler": "angler",
        "Bass Boat": "bass boat",
        "Bay Boat": "bay boat",
        "Bluewater Fishing": "bluewater fising",
        "Bowrider": "bowrider",
        "Catamaran (Power)": "catamaran",
        "Center Console": "center console",
        "Center Consoles": "center console",
        "Classic (Power)": "antique and classic",
        "Commercial": "commercial",
        "Convertible": "convertible",
        "Cruiser (Power)": "cruiser",
        "Cuddy Cabin": "cuddy cabin",
        "Deck Boat": "deck boat",
        "Dive Boat": "dive boat",
        "Downeast": "downeast",
        "Dual Console": "dual console",
        "Duck Boat": "duck boat",
        "Express Cruiser": "express cruiser",
        "Fish And Ski": "ski and fish",
        "Flats Boat": "flats boat",
        "Flybridge": "flybridge",
        "Freshwater Fishing": "freshwater fishing",
        "High Performance": "high performance",
        "Houseboat": "house boat",
        "Jet Boat": "jet boat",
        "Jon Boat": "jon boat",
        "Mega Yacht": "mega yacht",
        "Motoryacht": "motor yacht",
        "Other": "other",
        "Pilothouse": "pilothouse",
        "Pontoon": "pontoon",
        "Runabout": "runabout",
        "Saltwater Fishing": "saltwater fishing",
        "Ski and Wakeboard boat": "ski and wakeboard boat",
        "Skiff": "skiff",
        "Sport Fisherman": "sport fishing",
        "Submersible": "submersible",
        "Trawler": "trawler",
        "Walkaround": "walkaround",
        "Weekender": "weekender",
        "Catamaran (Sail)": "catamaran",
        "Classic (Sail)": "antique and classic",
        "Cruiser (Sail)": "cruiser",
        "Cruiser/Racer": "cruiser and racer",
        "Cutter": "cutter",
        "Daysailor/Weekender": "daysailer",
        "Ketch": "ketch",
        "Motorsailer": "motorsailer",
        "Multi-Hull": "multi hull",
        "Racer": "racing",
        "Sloop": "sloop",
        "Yawl": "yawl",
        "Canoe/Kayak": "kayak",
        "Inflatables": "inflatable",
        "Rigid Inflatable": "rigid sports inflatable",
        "Tenders/Small Boats": "tender",
        "power-aft-cabin": "aft cabin",
        "power-aft": "aft cabin",
        "power-airboat": "airboat",
        "power-aluminum-fish-boats": "aluminum fish boat",
        "power-aluminum": "aluminum fish boat",
        "power-antique-and-classics": "antique and classic",
        "power-antique": "antique and classic",
        "power-barge": "barge",
        "power-bass-boats": "bass boat",
        "power-bass": "bass boat",
        "power-bay-boats": "bay boat",
        "power-bay": "bay boat",
        "power-bowrider": "bowrider",
        "power-cargo-ship": "cargo ship",
        "power-cargo": "cargo ship",
        "power-center-consoles": "center console",
        "power-center": "center console",
        "power-commercial-boats": "commercial",
        "power-commercial": "commercial",
        "power-convertible-boats": "convertible",
        "power-convertible": "convertible",
        "power-cruisers": "cruiser",
        "power-cruiser": "cruiser",
        "power-cruise-ship": "cruise ship",
        "power-cruiseship": "cruise ship",
        "power-cuddy-cabin": "cuddy cabin",
        "power-cuddy": "cuddy cabin",
        "power-deck-boats": "deck boat",
        "power-deck": "deck boat",
        "power-dinghies": "dinghie",
        "power-dinghy": "dinghie",
        "power-dive-boat": "dive boat",
        "power-dive": "dive boat",
        "power-downeast": "downeast",
        "power-dragger": "dragger",
        "power-dual-console": "dual console",
        "power-dualconsole": "dual console",
        "power-express-cruiser": "express cruiser",
        "power-expresscruiser": "express cruiser",
        "power-flats-boats": "flats boat",
        "power-flats": "flats boat",
        "power-flybridge": "flybridge",
        "power-freshwater-fishing": "freshwater fishing",
        "power-fresh": "freshwater fishing",
        "power-gulet": "gulet",
        "power-high-performance-boats": "high performance",
        "power-highperf": "high performance",
        "power-house-boats": "house boat",
        "power-house": "house boat",
        "power-inflatables": "inflatable",
        "power-inflatable": "inflatable",
        "power-jet-boats": "jet boat",
        "power-jet": "jet boat",
        "power-jon-boats": "jon boat",
        "power-jon": "jon boat",
        "power-lobster-boat": "lobster boat",
        "power-lobster": "lobster boat",
        "power-mega-yachts": "mega yacht",
        "power-mega": "mega yacht",
        "power-motor-yachts": "motor yacht",
        "power-motor": "motor yacht",
        "power-motorsailers": "motorsailer",
        "power-narrow-boat": "narrow boat",
        "power-narrow": "narrow boat",
        "power-other": "other",
        "power-passenger": "passenger",
        "power-power-catamarans": "catamaran",
        "power-pcatamaran": "catamaran",
        "power-pilothouse": "pilothouse",
        "power-pilot": "pilothouse",
        "power-pontoon-boats": "pontoon",
        "power-pontoon": "pontoon",
        "power-personal-watercraft": "personal watercraft",
        "power-rigid-sports-inflatable": "rigid sports inflatable",
        "power-rib": "rigid sports inflatable",
        "power-river-cruiser": "canal and river cruiser",
        "power-rivercruiser": "canal and river cruiser",
        "power-runabouts": "runabout",
        "power-runabout": "runabout",
        "power-saltwater-fishing": "saltwater fishing",
        "power-saltfish": "saltwater fishing",
        "power-skiff": "skiff",
        "power-ski-and-fish": "ski and fish",
        "power-skifish": "ski and fish",
        "power-ski-and-wakeboard-boats": "ski and wakeboard boat",
        "power-skiwake": "ski and wakeboard boat",
        "power-sloop": "launch", 
        "power-sports-cruiser": "sports cruiser",
        "power-sportcruiser": "sports cruiser",
        "power-sports-fishing-boats": "sport fishing",
        "power-sportfish": "sport fishing",
        "power-tender": "tender",
        "power-trawlers": "trawler",
        "power-trawler": "trawler",
        "power-troller": "troller",
        "power-tug": "tug",
        "power-unspecified": "unspecified",
        "power-unspec": "unspecified",
        "power-utility-boats": "utility",
        "power-util": "utility",
        "power-walkarounds": "walkaround",
        "power-walk": "walkaround",
        "sail-antique-and-classics": "antique and classic",
        "sail-antique": "antique and classic",
        "sail-barge": "barge",
        "sail-beach-catamarans": "beach catamaran",
        "sail-beachcat": "beach catamaran",
        "sail-catamaran": "catamaran",
        "sail-center-cockpit": "center cockpit",
        "sail-centercockpit": "center cockpit",
        "sail-commercial-boats": "commercial",
        "sail-cruisers": "cruiser",
        "sail-cruiser": "cruiser",
        "sail-cutter": "cutter",
        "sail-daysailers": "daysailer",
        "sail-day": "daysailer",
        "sail-deck-saloon": "deck saloon",
        "sail-deck": "deck saloon",
        "sail-dinghies": "dinghie",
        "sail-dinghy": "dinghie",
        "sail-gulet": "gulet",
        "sail-ketch": "ketch",
        "sail-motorsailers": "motorsailer",
        "sail-motor": "motorsailer",
        "sail-multi-hulls": "multi hull",
        "sail-multihull": "multi hull",
        "sail-other": "other",
        "sail-high-performance-boats": "high performance",
        "sail-pilothouse": "pilothouse",
        "sail-pilot": "pilothouse",
        "sail-racers": "racing",
        "sail-racer": "racing",
        "sail-racers-and-cruisers": "cruiser and racer",
        "sail-racerscruiser": "cruiser and racer",
        "sail-schooner": "schooner",
        "sail-sloop": "sloop",
        "sail-trimaran": "trimaran",
        "sail-tender": "tender",
        "sail-unspecified": "unspecified",
        "sail-unspec": "unspecified",
        "sail-yawl": "yawl",
        "unpowered-barge": "barge",
        "unpowered-dinghies": "dinghie",
        "unpowered-dinghy": "dinghie",
        "unpowered-inflatables": "inflatable",
        "unpowered-kayak": "kayak",
        "unpowered-narrow-boat": "narrow boat",
        "unpowered-other": "other",
        "unpowered-tender": "tender",
        "unpowered-unspecified": "unspecified",
        "power-llaut": "llaut"
    };

    var BOAT_TYPE_MAP = {
        "Power|all|100132": "power",
        "Power|Aft Cabin|100132": "power",
        "Power|Aluminum Fish Boats|100132": "power",
        "Power|Angler|100132": "power",
        "Power|Bass Boat|100132": "power",
        "Power|Bowrider|100132": "power",
        "Power|Catamaran (Power)|100132": "power",
        "Power|Center Console|100132": "power",
        "Power|Commercial|100132": "power",
        "Power|Convertible|100132": "power",
        "Power|Cruiser (Power)|100132": "power",
        "Power|Cuddy Cabin|100132": "power",
        "Power|Deck Boat|100132": "power",
        "Power|Downeast|100132": "power",
        "Power|Express Cruiser|100132": "power",
        "Power|Flybridge|100132": "power",
        "Power|High Performance|100132": "power",
        "Power|Houseboat|100132": "power",
        "Power|Motoryacht|100132": "power",
        "Power|Pilothouse|100132": "power",
        "Power|Pontoon|100132": "power",
        "Power|Runabout|100132": "power",
        "Power|Sport Fisherman|100132": "power",
        "Power|Mega Yacht|100132": "power",
        "Power|Trawler|100132": "power",
        "Power|Walkaround|100132": "power",
        "Power|Weekender|100132": "power",
        "Power|Jon Boat|100132": "power",
        "Power|Flats Boat|100132": "power",
        "Power|Jet Boat|100132": "power",
        "Power|Fish And Ski|100132": "power",
        "Power|Classic (Power)|100132": "power",
        "Power|Dual Console|100132": "power",
        "Power|Airboat|100132": "power",
        "Power|Bay Boat|100132": "power",
        "Power|Skiff|100132": "power",
        "Power|Bluewater Fishing|100132": "power",
        "Power|Freshwater Fishing|100132": "power",
        "Power|Other|100132": "power",
        "Power|Saltwater Fishing|100132": "power",
        "Power|Submersible|100132": "power",
        "Power|Ski and Wakeboard boat|100132": "power",
        "Power|Dive Boat|100132": "power",
        "Power|Duck Boat|100132": "power",
        "Sail|all|100133": "sail",
        "Sail|Catamaran (Sail)|100133": "sail",
        "Sail|Classic (Sail)|100133": "sail",
        "Sail|Cruiser (Sail)|100133": "sail",
        "Sail|Cruiser/Racer|100133": "sail",
        "Sail|Cutter|100133": "sail",
        "Sail|Daysailor/Weekender|100133": "sail",
        "Sail|Ketch|100133": "sail",
        "Sail|Motorsailer|100133": "sail",
        "Sail|Multi-Hull|100133": "sail",
        "Sail|Racer|100133": "sail",
        "Sail|Sloop|100133": "sail",
        "Sail|Yawl|100133": "sail",
        "Sail|Other|100133": "sail",
        "PWC|all|100134": "personal watercraft",
        "personal": "personal watercraft",
        "Small Boats|all|3653623": "small boat",
        "Small Boats|Tenders/Small Boats|3653623": "small boat",
        "Small Boats|Canoe/Kayak|3653623": "small boat",
        "Small Boats|Rigid Inflatable|3653623": "small boat",
        "Small Boats|Other|3653623": "small boat",
        "Small Boats|Inflatables|3653623": "small boat",
        "small": "small boat",
        "Aft Cabin": "power",
        "Airboat": "power",
        "Air Boat": "power",
        "Angler": "power",
        "Bass Boat": "power",
        "Bay Boat": "power",
        "Bluewater Fishing": "power",
        "Bowrider": "power",
        "Catamaran (Power)": "power",
        "Center Console": "power",
        "Classic (Power)": "power",
        "Commercial": "power",
        "Convertible": "power",
        "Cruiser (Power)": "power",
        "Cuddy Cabin": "power",
        "Deck Boat": "power",
        "Dive Boat": "power",
        "Downeast": "power",
        "Dual Console": "power",
        "Duck Boat": "power",
        "Express Cruiser": "power",
        "Fish And Ski": "power",
        "Flats Boat": "power",
        "Flybridge": "power",
        "Freshwater Fishing": "power",
        "High Performance": "power",
        "Houseboat": "power",
        "Jet Boat": "power",
        "Jon Boat": "power",
        "Mega Yacht": "power",
        "Motoryacht": "power",
        "Pilothouse": "power",
        "Pontoon": "power",
        "Runabout": "power",
        "Saltwater Fishing": "power",
        "Ski and Wakeboard boat": "power",
        "Skiff": "power",
        "Sport Fisherman": "power",
        "Submersible": "power",
        "Trawler": "power",
        "Walkaround": "power",
        "Weekender": "power",
        "Catamaran (Sail)": "sail",
        "Classic (Sail)": "sail",
        "Cruiser (Sail)": "sail",
        "Cruiser/Racer": "sail",
        "Cutter": "sail",
        "Daysailor/Weekender": "sail",
        "Ketch": "sail",
        "Motorsailer": "sail",
        "Multi-Hull": "sail",
        "Racer": "sail",
        "Sloop": "sail",
        "Yawl": "sail",
        "Canoe/Kayak": "small boat",
        "Inflatables": "small boat",
        "Rigid Inflatable": "small boat",
        "Tenders/Small Boats": "small boat",
        "power-aft-cabin": "power",
        "power-aluminum-fish-boats": "power",
        "power-antique-and-classics": "power",
        "power-barge": "power",
        "power-bass-boats": "power",
        "power-bay-boats": "power",
        "power-bowrider": "power",
        "power-cargo-ship": "power",
        "power-center-consoles": "power",
        "power-commercial-boats": "power",
        "power-convertible-boats": "power",
        "power-cruisers": "power",
        "power-cruise-ship": "power",
        "power-cuddy-cabin": "power",
        "power-deck-boats": "power",
        "power-dinghies": "power",
        "power-dive-boat": "power",
        "power-downeast": "power",
        "power-dragger": "power",
        "power-dual-console": "power",
        "power-express-cruiser": "power",
        "power-flats-boats": "power",
        "power-flybridge": "power",
        "power-freshwater-fishing": "power",
        "power-gulet": "power",
        "power-high-performance-boats": "power",
        "power-house-boats": "power",
        "power-inflatables": "power",
        "power-jet-boats": "power",
        "power-jon-boats": "power",
        "power-lobster-boat": "power",
        "power-mega-yachts": "power",
        "power-motor-yachts": "power",
        "power-motorsailers": "power",
        "power-narrow-boat": "power",
        "power-other": "power",
        "power-passenger": "power",
        "power-power-catamarans": "power",
        "power-pilothouse": "power",
        "power-pontoon-boats": "power",
        "power-personal-watercraft": "power",
        "power-rigid-sports-inflatable": "power",
        "power-river-cruiser": "power",
        "power-runabouts": "power",
        "power-saltwater-fishing": "power",
        "power-skiff": "power",
        "power-ski-and-fish": "power",
        "power-ski-and-wakeboard-boats": "power",
        "power-sports-cruiser": "power",
        "power-sports-fishing-boats": "power",
        "power-tender": "power",
        "power-trawlers": "power",
        "power-troller": "power",
        "power-tug": "power",
        "power-unspecified": "power",
        "power-utility-boats": "power",
        "power-walkarounds": "power",
        "sail-antique-and-classics": "sail",
        "sail-barge": "sail",
        "sail-beach-catamarans": "sail",
        "sail-catamaran": "sail",
        "sail-center-cockpit": "sail",
        "sail-commercial-boats": "sail",
        "sail-cruisers": "sail",
        "sail-cutter": "sail",
        "sail-daysailers": "sail",
        "sail-deck-saloon": "sail",
        "sail-dinghies": "sail",
        "sail-gulet": "sail",
        "sail-ketch": "sail",
        "sail-motorsailers": "sail",
        "sail-multi-hulls": "sail",
        "sail-other": "sail",
        "sail-high-performance-boats": "sail",
        "sail-pilothouse": "sail",
        "sail-racers": "sail",
        "sail-racers-and-cruisers": "sail",
        "sail-schooner": "sail",
        "sail-sloop": "sail",
        "sail-trimaran": "sail",
        "sail-unspecified": "sail",
        "sail-yawl": "sail",
        "unpowered-barge": "unpowered",
        "unpowered-dinghies": "unpowered",
        "unpowered-inflatables": "unpowered",
        "unpowered-kayak": "unpowered",
        "unpowered-narrow-boat": "unpowered",
        "unpowered-other": "unpowered",
        "unpowered-tender": "unpowered",
        "unpowered-unspecified": "unpowered",
        "power-llaut": "power"
    };

    var ENGINE_TYPE_MAP = {
        "SINGLE": "single",
        "SINGLE OUTBOARD": "single outboard"
    };

    return {
        convertClass: function (productClass) {
            if (productClass in BOAT_CLASS_MAP) {
                return BOAT_CLASS_MAP[productClass];
            } else {
                return productClass;
            }
        },
        convertType: function (productType) {
            if (productType in BOAT_TYPE_MAP) {
                return BOAT_TYPE_MAP[productType];
            } else {
                return productType;
            }
        },
        convertEngineType: function (engineType) {
            if (engineType in ENGINE_TYPE_MAP) {
                return ENGINE_TYPE_MAP[engineType];
            } else {
                return engineType;
            }
        }
    };

}());

var digitalDataBuilderBCMapper = window.digitalDataBuilderBCMapper = (function() {
  "use strict";

  var BOAT_CLASS_MAP = {
    "power-aft" : "aft cabin",
    "power-airboat" : "airboat",
    "power-aluminum" : "aluminum fish boat",
    "power-antique" : "antique and classic",
    "power-barge" : "barge",
    "power-bass" : "bass boat",
    "power-bay" : "bay boat",
    "power-bowrider" : "bowrider",
    "power-cargo" : "cargo ship",
    "power-center" : "center console",
    "power-commercial" : "commercial",
    "power-convertible" : "convertible",
    "power-cruiser" : "cruiser",
    "power-cruiseship" : "cruise ship",
    "power-cuddy" : "cuddy cabin",
    "power-deck" : "deck saloon",
    "power-dinghy" : "dinghie",
    "power-dive" : "dive boat",
    "power-downeast" : "downeast",
    "power-dragger" : "dragger",
    "power-dualconsole" : "dual console",
    "power-expresscruiser"  : "express cruiser",
    "power-flats" : "flats boat",
    "power-flybridge" : "flybridge",
    "power-fresh" : "freshwater fishing",
    "power-gulet" : "gulet",
    "power-highperf" : "high performance",
    "power-house" : "house boat",
    "power-inflatable" : "inflatable",
    "power-jet" : "jet boat",
    "power-jon" : "jon boat",
    "power-lobster" : "lobster boat",
    "power-mega" : "mega yacht",
    "power-motor" : "motor yacht",
    "power-motorsailer" : "motorsailer",
    "power-narrow" : "narrow boat",
    "power-other" : "other",
    "power-passenger" : "passenger",
    "power-pcatamaran" : "catamaran",
    "power-pilot" : "pilothouse",
    "power-pontoon" : "pontoon",
    "power-pwc" : "personal watercraft",
    "power-rib" : "inflatable",
    "power-rivercruiser" : "canal and river cruiser",
    "power-runabout" : "runabout",
    "power-saltfish" : "saltwater fishing",
    "power-skiff" : "skiff",
    "power-skifish" : "ski and fish",
    "power-skiwake" : "ski and wakeboard boat",
    "power-sloop" : "launch",
    "power-sportcruiser" : "sports cruiser",
    "power-sportfish" : "sport fishing",
    "power-tender" : "tender",
    "power-trawler" : "trawler",
    "power-troller" : "troller",
    "power-tug" : "tug",
    "power-unspec" : "unspecified",
    "power-util" : "utility",
    "power-walk" :"walkaround",
    "power-llaut": "llaut",
    "sail-antique" : "antique and classic",
    "sail-barge" : "barge",
    "sail-beachcat" : "catamaran",
    "sail-catamaran" : "catamaran",
    "sail-centercockpit" : "center cockpit",
    "sail-commercial" : "commercial",
    "sail-cruiser" : "cruiser",
    "sail-cutter" : "cutter",
    "sail-day" : "daysailer",
    "sail-deck" : "deck saloon",
    "sail-dinghy" : "dinghie",
    "sail-gulet" : "gulet",
    "sail-ketch" : "ketch",
    "sail-motor" : "motorsailer",
    "sail-multihull" : "multi hull",
    "sail-other" : "other",
    "sail-performance" : "performance sailboat",
    "sail-pilot" : "pilothouse",
    "sail-racer" : "racing",
    "sail-racercruiser" : "racing sailboat",
    "sail-schooner" : "schooner",
    "sail-sloop" : "sloop",
    "sail-trimaran" : "trimaran",
    "sail-unspec" : "unspecified",
    "sail-yawl" : "yawl",
    "unpowered-dinghy" : "dinghie",
    "unpowered-kayak" : "kayak",
    "unpowered-other" : "other",
    "unpowered-tender" : "tender"
  };

  var self = {

    convertClass: function(productClass) {
      if (productClass in BOAT_CLASS_MAP) {
        return BOAT_CLASS_MAP[productClass];
      } else {
        return productClass;
      }
    },
    convertType: function(productType) {
      var type = productType.split("-");
      return type[0];
    },
    convertProductType: function(productType, productClass) {
      if(productType === "unpowered") {
        return "small boat";
      } else if(productClass === "personal watercraft"){
        return "pwc";
      }
      return productType;
    },
    convertProductCondition: function(isOme, condition) {
      if(isOme === 1) {
        return "blue star";
      } else if(condition === undefined){
        return "fsbo";
      }
      return condition;
    }

  };

  return self;
}());

/* eslint no-console: 0 */
var digitalDataBuilder = window.digitalDataBuilder = (function() {
  "use strict";

  // Per MIDAS SAINT mapping for addThis and social share buttons.
  // Any new social media and action should be checked
  // against that mapping and update this object if necessary
  // see L756 setUpAddThisListener function.

  var SOCIAL_ACTIONS = {
    SOCIAL_SHARE: 'social share',
    PRINT_LISTING: 'print listing',
    EMAIL_LISTING: 'email listing'
  };
  var TIMEOUT_TO_ALLOW_TRACKING_PIXEL_REQUEST = 400;
  var TIMEOUT_SESSION_INACTIVE = 30 * 60 * 1000;
  var TIMEOUT_SESSION_EXPIRED = 12 * 60 * 60 * 1000;
  var PRODUCT_CATEGORY = [
    "boat", "engine", "trailer", "dealer", "professional", "article", "brand banner", "premium broker banner", "broker-dealer"
  ];
  var PRODUCT_CONDITION = [
    "new", "used", "fsbo", "blue star"
  ];
  var PRODUCT_TYPE = [
    "power", "sail", "small boat", "commercial", "pwc"
  ];
  var HULL_MATERIAL = [
    "aluminum", "composite", "ferro-cement", "fiberglass", "hypalon", "other", "pvc", "roplene", "steel", "wood"
  ];
  var COUNTRY_CODES = [
    "AU", "CA", "DE", "DK", "ES", "FI", "FR", "GB", "IT", "NL", "NO", "RU", "SE", "UK", "US", "EU", "PL", "TR", "GR", "HR"
  ];
  var BOAT_TYPES = [
    "all", "power", "sail", "commercial", "personal watercraft", "small boat", "unpowered"
  ];
  var ENGINE_TYPES = [
    "any", "single", "single outboard"
  ];
  var BOAT_CLASSES = [
    "aft cabin",
    "antique and classic",
    "barge",
    "bowrider",
    "canal and river cruiser",
    "cargo ship",
    "catamaran",
    "center cockpit",
    "center console",
    "combination",
    "commercial",
    "convertible",
    "crabber",
    "cruise ship",
    "cruiser",
    "cruiser and racer",
    "cuddy cabin",
    "cutter",
    "daysailer",
    "deck saloon",
    "dive boat",
    "downeast",
    "dragger",
    "express cruiser",
    "flybridge",
    "freshwater fishing",
    "gulet",
    "high performance",
    "house boat",
    "inflatable",
    "ketch",
    "mega yacht",
    "motor yacht",
    "motorsailer",
    "multi hull",
    "narrow boat",
    "passenger",
    "personal watercraft",
    "pilothouse",
    "pontoon",
    "racing",
    "racing sailboat",
    "runabout",
    "saltwater fishing",
    "schooner",
    "skiff",
    "ski and wakeboard boat",
    "sloop",
    "sport fishing",
    "sports cruiser",
    "tender",
    "trawler",
    "trimaran",
    "troller",
    "tug",
    "utility",
    "yawl",
    "other",
    "unspecified",
    "aluminum fish boat",
    "bass boat",
    "bay boat",
    "beach catamaran",
    "deck boat",
    "dinghy",
    "dual console",
    "express cruiser",
    "flats boat",
    "jet boat",
    "jon boat",
    "kayak",
    "lobster boat",
    "performance sailboat",
    "power catamaran",
    "rigid sports inflatable",
    "ski and fish",
    "walkaround",
    "angler",
    "weekender",
    "airboat",
    "bluewater fishing",
    "submersible",
    "duck boat",
    "llaut"
  ];
  var ENGINE_CLASSES = [
    "engine"
  ];
  var CONTENT_HIERARCHY_SECTIONS = [
    "browse", "home", "search", "services", "listings", "seller", "admin", "articles", "content", "mixed content", "MyBoats", "explore", "ad details", "listing search results", "other pages", "research", "directory", "brokers", "login", "boatwizard reports", "manufacturer listings"
  ];
  var CONTENT_HIERARCHY_SUB_SECTIONS = CONTENT_HIERARCHY_SECTIONS.concat([
    "home",
    "search",
    "services",
    "listings",
    "seller",
    "admin",
    "content",
    "mixed content",
    "charters search",
    "listing search",
    "listing browse",
    "broker-dealer search",
    "editorial features",
    "blog",
    "general content",
    "services",
    "charter listings",
    "boat listings",
    "part-accessory listings",
    "fsbo",
    "broker-dealer",
    "dmm info",
    "user access",
    "help",
    "oem showcase",
    "uncategorized",
    "brand pages",
    "explore brands",
    "branded search"
  ]);
  var CONTENT_HIERARCHY_PAGE_NAMES = CONTENT_HIERARCHY_SUB_SECTIONS.concat([
    // Please try and keep these in alphabetical order. As more page names get added it was getting harder to see what was already included
    "about us",
    "accessory listings",
    "accounts",
    "activity pages",
    "advanced charters search",
    "advanced listing search",
    "articles",
    "boat-content",
    "boat details",
    "boat finder",
    "boat gallery",
    "boat history",
    "boat loans home",
    "boat loans steps",
    "boat loans qa",
    "boat loans calculator",
    "boat loans application",
    "boat loans contact",
    "boatermouth",
    "boatwizard mls search results",
    "boatwizard reports",
    "sold boats search results",
    "branded search results",
    "broker-dealer browse",
    "broker-dealer details",
    "broker-dealer directory",
    "broker-dealer gallery",
    "broker-dealer search",
    "broker-dealer search results",
    "charters browse",
    "charters search results",
    "class pages",
    "contact broker-dealer",
    "contact us",
    "copyright",
    "custom website",
    "destinations",
    "directory",
    "documentation",
    "email friend",
    "engine details",
    "engine listings",
    "engine search",
    "events",
    "explore activities and classes",
    "faq",
    "finance",
    "find broker",
    "foundation",
    "/fsbo/landing",
    "/fsbo/choose package",
    "/fsbo/package",
    "/fsbo/confirmation",
    "/fsbo/basic info",
    "/fsbo/detail info",
    "/fsbo/billing info",
    "/fsbo/location info",
    "/fsbo/checkout",
    "how-to",
    "insurance",
    "lifestyle",
    "listing brand browse",
    "listing city browse",
    "listing class browse",
    "listing country browse",
    "listing general browse",
    "listing model browse",
    "listing search results",
    "listing state browse",
    "listing type browse",
    "login",
    "manage your listing",
    "media kit",
    "mini-site",
    "MyBoats",
    "oem showcase home",
    "oem showcase category",
    "oem showcase brand",
    "on the water",
    "part listings",
    "press releases",
    "price checker",
    "privacy",
    "programs",
    "promotions",
    "pwc details",
    "resources",
    "reviews",
    "search help",
    "security",
    "sell your boat",
    "subscriptions",
    "surveying",
    "terms of use",
    "trailer listings",
    "transport",
    "video boat reviews",
    "warranty",
    "water blogged",
    "warranty",
    "yachts",
    "/professional search",
    "/article search",
    "/digital/best-beaches-by-boat/",
    "/digital/stomping-grounds/",
    "/digital/boating-lifestyle-calculator/",
    "/digital/celebrity-yachts/",
    "/digital/us-waterways/"
  ]);

  var LISTING_TYPES = [
    "article listing",
    "browse listing",
    "enhanced listing",
    "featured listing",
    "featured dealer",
    "hero ad",
    "latest listing",
    "detail page",
    "listing near you",
    "premium placement",
    "previously viewed",
    "same seller listing",
    "similar listing",
    "sponsored listing",
    "standard listing",
    "manufacturer listing",
    "multicontact listing",
    "brand showcase listing",
    "brand page listing",
    "saved boat",
    "professional search",
    "brand banner",
    "premium broker banner",
    "broker-dealer listing",
    "featured private listing",

    //below deprecated RHINO-1648
    "YW Premium",

    //below are deprecated BI-1173
    "boats near you",
    "featured boat ad",
    "premium featured boat ad",
    "similar listings"
  ];

  var STATE_PROVINCES = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS",
    "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH",
    "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY", "DC", "PR", "VI", "AS",
    "GU", "MP", "AB", "BC", "MB", "NB", "NL", "NS", "ON", "PE", "QC", "SK", "NT", "NU", "YT"
  ];

  /**
   * Validates that the attributes of the `item` object have valid values and if so, adds them to the window.digitalData.ecommerce object.
   * @param item {object}
   * @param toThisArray {array} - optional parameter
   */
  function ga4AddEcommerceItem (item, toThisArray) {
    window.digitalData.ecommerce = window.digitalData.ecommerce || {};
    window.digitalData.ecommerce.items = window.digitalData.ecommerce.items || [];

    for (var property in item) {
      if (ga4Props[property].validator && !ga4Props[property].validator(item[property]))
        delete item[property];

      if (ga4Props[property].normalizer)
        item[property] = ga4Props[property].normalizer(item[property]);
    }

    if (toThisArray) {
      toThisArray.push(item);
    }
    else {
      window.digitalData.ecommerce.items.push(item);
    }
  }

  var ga4Props = {
    // Ecommerce props:
    "item_list_name": {
      "validator": curry(isOneOf, LISTING_TYPES),
    },
    "item_id": {
      "validator": function (value) {
        return Number.isInteger(parseInt(value));
      },
    },
    "location_id": {
      "normalizer": function(value) {
        if (value) {
          return value.toLowerCase();
        } else {
          return value;
        }
      }
    },
    "item_variant": {
      "normalizer": function(value) {
        if (value) {
          return value.toLowerCase();
        } else {
          return value;
        }
      }
    }
  };

  var props = {
    "Is Error Page": {
      "path": "digitalData.page.attributes.isErrorPage",
      "validator": isBoolean,
      "default": false,
      "ga4Path": "digitalData.ga4.page.is_error_page"
    },
    "Are Ads Blocked": {
      "path": "digitalData.page.attributes.areAdsBlocked",
      "validator": curry(isOneOf, ["yes", "no"]),
      "default": "no",
      "ga4Path": "digitalData.ga4.page.are_ads_blocked",
      "ga4Normalizer": function(value) {
        return "yes" === value ? true : false;
      }
    },
    "Full Domain": {
      "path": "digitalData.page.attributes.fullDomain",
      "default": function() {
        return window.location.hostname;
      }
    },
    "URL": {
      "path": "digitalData.page.pageInfo.destinationURL",
      "default": function() {
        return window.location.href;
      }
    },
    "Application": {
      "path": "digitalData.page.attributes.application",
      "validator": curry(isOneOf, ["IMT", "Sold Boats", "Lead Manager", "MLS", "Provisioning", "BW Reports", "Service Portal", "MyTrader", "CAS"])
    },
    "Portal Name": {
      "path": "digitalData.page.attributes.portalName",
      "validator": curry(isOneOf, [
        "midas test",
        "YachtWorld",
        "custom websites",
        "boats.com",
        "Boat Trader",
        "partner website",
        "BoatWizard MLS",
        "BoatWizard Sold Boats",
        "Annonces du Bateau",
        "BoatWizard",
        "BoatWizard Reports",
        "Botenbank",
        "Botentekoop",
        "boten.nl",
        "Boatshop24",
        "Boatshop24 UK",
        "Boats and Outboards",
        "Boot24",
        "Cosas de Barcos",
        "iNautia"
      ]),
      "ga4Path": "digitalData.ga4.page.portal",
    },
    "Site Description": {
      "path": "digitalData.page.attributes.siteDescription",
      "validator": curry(isOneOf, [
        "app",
        "iphone app",
        "mobile site",
        "website",
        "wordpress",
        "YachtWorld directory"
      ])
    },
    "Site Country": {
      "path": "digitalData.page.pageInfo.geoRegion",
      "validator": curry(isOneOf, COUNTRY_CODES),
      "normalizer": function(value) {
        return "GB" === value ? "UK" : value;
      },
      "ga4Path": "digitalData.ga4.page.site_region",
    },
    "Section": {
      "path": "digitalData.page.category.primaryCategory",
      "validator": curry(isOneOf, CONTENT_HIERARCHY_SECTIONS),
      "ga4Path": "digitalData.ga4.page.section",
    },
    "Brand Id": {
      "path": "digitalData.brandId",
      "validator": function (value) {
        return Number.isInteger(+value);
      },
      "ga4Path": "digitalData.ga4.page.brandID",
    },
    "Sub-Section": {
      "path": "digitalData.page.category.subSection",
      "ga4Path": "digitalData.ga4.page.subsection",
    },
    "Page Name": {
      "path": "digitalData.page.category.pageName",
      "validator": function(value) {
        var regex = /^\d+$/;
        if (isOneOf(CONTENT_HIERARCHY_PAGE_NAMES, value) || regex.test(value)) {
          return true;
        }
        return false;
      }
    },
    "Page-Type": {
      "path": "digitalData.page.category.type",
    },
    "Detailed Page Name": {
      "path": "digitalData.page.pageInfo.pageName",
      "normalizer": function(value) {
        return value.toLowerCase();
      },
      "ga4Path": "digitalData.ga4.page.detailed_page_name"
    },
    "Search Form Type": {
      "path": "attributes.type",
      "validator": curry(isOneOf, BOAT_TYPES.concat(ENGINE_TYPES))
    },
    "Search Form Class": {
      "path": "attributes.boatClass",
      "validator": curry(isOneOf, BOAT_CLASSES.concat(ENGINE_CLASSES))
    },
    "Search Form Make": {
      "path": "attributes.make"
    },
    "Search Form Model": {
      "path": "attributes.model"
    },
    "Search Form Condition": {
      "path": "attributes.condition",
      "validator": curry(isOneOf, ["", "all", "new", "used"])
    },
    "Price High End": {
      "path": "attributes.priceTo"
    },
    "Price Low End": {
      "path": "attributes.priceFrom"
    },
    "Length High End": {
      "path": "attributes.lengthTo"
    },
    "Length Low End": {
      "path": "attributes.lengthFrom"
    },
    "Has Price Drop": {
      "path": "attributes.hasPriceDrop",
      "validator": curry(isOneOf, ["true", "false"]),
      "default": "false"
    },
    "Product ID": {
      "path": "productInfo.productID"
    },
    "Item ID": {
      "path": "items.item_id",
    },
    "Product Class": {
      "path": "category.boatClass",
      "validator": curry(isOneOf, BOAT_CLASSES)
    },
    "Product Manufacturer": {
      "path": "productInfo.manufacturer"
    },
    "Product Length": {
      "path": "productInfo.boatLength"
    },
    "Product State": {
      "path": "productInfo.location.stateProvince",
      "validator": curry(isOneOf, STATE_PROVINCES)
    },
    "Product Impression Product ID": {
      "path": "productImpressionInfo.productID"
    },
    "Product Impression Owner ID": {
      "path": "productImpressionInfo.ownerID"
    },
    "Product Impression Listing Type": {
      "path": "productImpressionInfo.listingType",
      "validator": curry(isOneOf, LISTING_TYPES)
    },
    "Product Click Product ID": {
      "path": "productClickInfo.productID"
    },
    "Product Click Owner ID": {
      "path": "productClickInfo.ownerID"
    },
    "Product Click Listing Type": {
      "path": "productClickInfo.listingType",
      "validator": curry(isOneOf, LISTING_TYPES)
    },
    "Product Impression Category": {
      "path": "productImpressionInfo.category",
      "validator": curry(isOneOf, PRODUCT_CATEGORY)
    },
    "Product Category": {
      "path": "productInfo.category",
      "validator": curry(isOneOf, PRODUCT_CATEGORY)
    },
    "Product Condition": {
      "path": "productInfo.condition",
      "validator": curry(isOneOf, PRODUCT_CONDITION)
    },
    "Product City": {
      "path": "productInfo.location.city",
      "normalizer": function(value) {
        if (value) {
          return value.toLowerCase();
        } else {
          return value;
        }
      }
    },
    "Product Country": {
      "path": "productInfo.location.country",
      "normalizer": function(value) {
        if (value) {
          return value.toLowerCase();
        } else {
          return value;
        }
      }
    },
    "Product Postal Code": {
      "path": "productInfo.location.postalCode"
    },
    "Product Currency": {
      "path": "productInfo.currency"
    },
    "Product Listed Price": {
      "path": "productInfo.listedPrice"
    },
    "Product Model": {
      "path": "productInfo.model",
      "normalizer": function(value) {
        if (value) {
          return value.toLowerCase();
        } else {
          return value;
        }
      }
    },
    "Product Year Built": {
      "path": "productInfo.yearBuilt"
    },
    "Product Hull Material": {
      "path": "productInfo.hull",
      "validator": curry(isOneOf, HULL_MATERIAL)
    },
    "Product Type": {
      "path": "productInfo.type",
      "validator": curry(isOneOf, PRODUCT_TYPE)
    },
    "Product Horse Power": {
      "path": "productInfo.horsePower"
    },
    "Product Engine Type": {
      "path": "productInfo.engineType"
    },
    "Rank": {
      "path": "rank",
      "normalizer": function(value) {
        return isTruthy(value) ? String(value) : '';
      }
    },
    "Page": {
      "path": "page",
      "normalizer": function(value) {
        return isTruthy(value) ? String(value) : '';
      }
    },
    "Container": {
      "path": "container",
      "normalizer": function(value) {
        return isTruthy(value) ? String(value) : '';
      }
    },
    "Region": {
      "path": "region",
      "normalizer": function(value) {
        return isTruthy(value) ? String(value) : '';
      }
    },
    "Seller ID": {
      "path": "sellerID"
    },
    "External Link Impression External Link ID": {
      "path": "externalLinkImpressionInfo.externalLinkID"
    },
    "External Link Click External Link ID": {
      "path": "externalLinkClickInfo.externalLinkID"
    },
    "External Link Impression External Link Name": {
      "path": "externalLinkImpressionInfo.externalLinkName"
    },
    "External Link Click External Link Name": {
      "path": "externalLinkClickInfo.externalLinkName"
    },
    "External Link Impression External Link Position": {
      "path": "externalLinkImpressionInfo.externalLinkPosition"
    },
    "External Link Click External Link Position": {
      "path": "externalLinkClickInfo.externalLinkPosition"
    },
    "Exit Link Impression Exit Link ID": {
      "path": "exitLinkImpressionInfo.exitLinkID"
    },
    "Exit Link Click Exit Link ID": {
      "path": "exitLinkClickInfo.exitLinkID"
    },
    "Exit Link Impression Exit Link Name": {
      "path": "exitLinkImpressionInfo.exitLinkName"
    },
    "Exit Link Click Exit Link Name": {
      "path": "exitLinkClickInfo.exitLinkName"
    },
    "Exit Link Impression Exit Link Position": {
      "path": "exitLinkImpressionInfo.exitLinkPosition"
    },
    "Exit Link Click Exit Link Position": {
      "path": "exitLinkClickInfo.exitLinkPosition"
    },
    "Transaction Item Type": {
      "path": "attributes.type",
      "validator": curry(isOneOf, ["Lead"])
    },
    "Transaction Item Lead Type": {
      "path": "attributes.leadType",
      "normalizer": function(value) {
        return value.toLowerCase();
      }
    },
    "Click Location": {
      "path": "attributes.clickLocation",
    },
    "Customer Name": {
      "path": "profileInfo.customerName"
    },
    "Party ID": {
      "path": "profileInfo.partyID"
    },
    "Parent ID": {
      "path": "profileInfo.parentID"
    },
    "User Type": {
      "path": "profileInfo.userType"
    },
    "User Impersonation": {
      "path": "profileInfo.impersonation"
    },
    "User Country": {
      "path": "profileInfo.countryCode"
    },
    "BG Source": {
      "path": "digitalData.page.attributes.bgSource",
      "default": document.querySelector('meta[data-react-helmet="true"]') ? "react" : "legacy"
    },
    "Internal Promotion Impressions Name": {
      "path": "internalPromotionImpressionInfo.name"
    },
    "Internal Promotion Impressions Id": {
      "path": "internalPromotionImpressionInfo.id"
    },
    "Internal Promotion Impressions Position": {
      "path": "internalPromotionImpressionInfo.position"
    },
    "Internal Promotion Impressions creative": {
      "path": "internalPromotionImpressionInfo.creative"
    },
    "Internal Promotion Click Name": {
      "path": "internalPromotionClickInfo.name"
    },
    "Internal Promotion Click Id": {
      "path": "internalPromotionClickInfo.id"
    },
    "Internal Promotion Click Position": {
      "path": "internalPromotionClickInfo.position"
    },
    "Internal Promotion Click creative": {
      "path": "internalPromotionClickInfo.creative"
    },
    "Article Search": {
      "path": "digitalData.articleSearch"
    },

  };

  var eventListeners = {
    "lead": [],
    "search": [],
    "product impression": [],
    "product click": [],
    "internal promotion click": [],
    "external link click": [],
    "exit link click": [],
    "ad serve": [],
    "product view": [],
    "editorial page view": []
  };

  var self = {
    init: function() {
      window.dmm = window.dmm || {};
      window.digitalData = window.digitalData || {};
      window.digitalDataUpdates = window.digitalDataUpdates || {};
      populateDefaults(window);
      updateSession(window);
      populateUserObject();
      this.initComplete();
      return self;
    },
    initComplete: function() {
      var e = window.document.createEvent('Event');
      e.initEvent("DigitalDataBuilderInit", false, true);

      window.document.dispatchEvent(e);
      return self;
    },
    set: function(propertyName, propertyValue) {
      if (propertyName in props && 0 === props[propertyName].path.lastIndexOf("digitalData.", 0)) {
        updateByPropertyName(window, propertyName, propertyValue);
      }
      return self;
    },
    addProduct: function() {
      var args = [].slice.call(arguments);
      if (args.length === 1 && (typeof args[0] === 'object')) {
        this.setProduct(args[0]);
        notifyListeners("product view");
        return self;
      } else {
        //This code is to ensure that the original method call with parameters still work
        this.addProduct({
          imtID: args[0],
          productClass: args[1],
          manufacturer: args[2],
          length: args[3],
          state: args[4]
        });
      }
    },
    setProduct: function() {
      var args = [].slice.call(arguments);

      if (args.length === 1 && (typeof args[0] === 'object')) {
        // Now we expect an object like this:
        // { imtID: 0, productClass: 'cabin', manufacturer: 'bayliner', length: '5', state: 'FL', category: 'boat', condition: 'new', city: 'Canaveral', country: 'United State', currency: 'USD', listedPrice: '1', model: 'Element', yearBuilt: '1', productType: 'power', sellerID: '1' }
        var product = {};
        updateByPropertyName(product, "Product ID", args[0].imtID);
        updateByPropertyName(product, "Product Class", args[0].productClass);
        updateByPropertyName(product, "Product Manufacturer", args[0].manufacturer);
        updateByPropertyName(product, "Product Length", args[0].length);
        updateByPropertyName(product, "Product State", args[0].state);
        updateByPropertyName(product, "Product Category", !args[0].category ? 'boat' : args[0].category);
        updateByPropertyName(product, "Product Condition", args[0].condition);
        updateByPropertyName(product, "Product City", args[0].city);
        updateByPropertyName(product, "Product Country", args[0].country);
        updateByPropertyName(product, "Product Postal Code", args[0].postalCode);
        updateByPropertyName(product, "Product Currency", args[0].currency);
        updateByPropertyName(product, "Product Listed Price", args[0].listedPrice);
        updateByPropertyName(product, "Product Model", args[0].model);
        updateByPropertyName(product, "Product Year Built", args[0].yearBuilt);
        updateByPropertyName(product, "Product Hull Material", args[0].hull);
        updateByPropertyName(product, "Product Type", args[0].productType);
        updateByPropertyName(product, "Seller ID", args[0].sellerID);
        updateByPropertyName(product, "Product Horse Power", args[0].horsePower);
        updateByPropertyName(product, "Product Engine Type", args[0].engineType);

        window.digitalData.product = window.digitalData.product || [];
        window.digitalData.product.push(product);
        return self;
      } else {
        //This code is to ensure that the original method call with parameters still work
        return this.setProduct({
          imtID: args[0],
          productClass: args[1],
          manufacturer: args[2],
          length: args[3],
          state: args[4]
        });
      }
    },
    setProductImpressionOwner: function(ownerID, listingType, listingCategory) {
      var productImpression = {};
      updateByPropertyName(productImpression, "Product Impression Owner ID", ownerID);
      updateByPropertyName(productImpression, "Product Impression Listing Type", listingType);
      updateByPropertyName(productImpression, "Product Impression Category", listingCategory);

      window.digitalData.page.attributes.productImpressions =
        window.digitalData.page.attributes.productImpressions || [];
      window.digitalData.page.attributes.productImpressions.push(productImpression);
      return self;
    },
    setInternalPromotionImpression: function(itemImpression) {
      var internalPromotionImpression = {};
      updateByPropertyName(internalPromotionImpression, "Internal Promotion Impressions Name", itemImpression.name);
      updateByPropertyName(internalPromotionImpression, "Internal Promotion Impressions Id", itemImpression.imtId);
      updateByPropertyName(internalPromotionImpression, "Internal Promotion Impressions Position", itemImpression.position);
      updateByPropertyName(internalPromotionImpression, "Internal Promotion Impressions creative", itemImpression.creative);
      updateByPropertyName(internalPromotionImpression.internalPromotionImpressionInfo, "Rank", itemImpression.rank);
      updateByPropertyName(internalPromotionImpression.internalPromotionImpressionInfo, "Page", itemImpression.page);

      window.digitalData.page.attributes.internalPromotionImpressions =
        window.digitalData.page.attributes.internalPromotionImpressions || [];
      window.digitalData.page.attributes.internalPromotionImpressions.push(internalPromotionImpression);
      return self;
    },
    addInternalPromotionClick: function(itemClick) {
      var internalPromotionClick = {};
      updateByPropertyName(internalPromotionClick, "Internal Promotion Click Name", itemClick.name);
      updateByPropertyName(internalPromotionClick, "Internal Promotion Click Id", itemClick.imtId);
      updateByPropertyName(internalPromotionClick, "Internal Promotion Click Position", itemClick.position);
      updateByPropertyName(internalPromotionClick, "Internal Promotion Click creative", itemClick.creative);
      updateByPropertyName(internalPromotionClick.internalPromotionClickInfo, "Rank", itemClick.rank);
      updateByPropertyName(internalPromotionClick.internalPromotionClickInfo, "Page", itemClick.page);

      window.digitalData.page.attributes.internalPromotionClicks =
        window.digitalData.page.attributes.internalPromotionClicks || [];
      window.digitalData.page.attributes.internalPromotionClicks.push(internalPromotionClick);
      notifyListeners("internal promotion click");
      return self;
    },
    registerInternalPromotionLink: function(productLinkDomElement, itemClick, performDefaultAction) {
      var recordClick = function() {
        self.addInternalPromotionClick(itemClick);
      };
      setUpClickDomListener(productLinkDomElement, recordClick, performDefaultAction);
      return self;
    },

    setExternalLinkImpression: function(externalLinkID, externalLinkName, externalLinkPosition, rank, page) {
      externalLinkName = externalLinkName || externalLinkID;
      externalLinkPosition = externalLinkPosition || 'service link';
      var externalLinkImpression = {},
        id = externalLinkID.toLowerCase();
      updateByPropertyName(externalLinkImpression, "External Link Impression External Link ID", id);
      updateByPropertyName(externalLinkImpression, "External Link Impression External Link Name", externalLinkName);
      updateByPropertyName(externalLinkImpression, "External Link Impression External Link Position", externalLinkPosition);
      updateByPropertyName(externalLinkImpression.externalLinkImpressionInfo, "Rank", rank);
      updateByPropertyName(externalLinkImpression.externalLinkImpressionInfo, "Page", page);

      window.digitalData.page.attributes.externalLinkImpressions =
        window.digitalData.page.attributes.externalLinkImpressions || [];
      window.digitalData.page.attributes.externalLinkImpressions.push(externalLinkImpression);
      return self;
    },
    setExitLinkImpression: function(exitLinkID, exitLinkName, exitLinkPosition, rank, page) {
      exitLinkName = exitLinkName || exitLinkID;
      exitLinkPosition = exitLinkPosition || 'exit link';
      var exitLinkImpression = {},
        id = exitLinkID.toLowerCase();
      updateByPropertyName(exitLinkImpression, "Exit Link Impression Exit Link ID", id);
      updateByPropertyName(exitLinkImpression, "Exit Link Impression Exit Link Name", exitLinkName);
      updateByPropertyName(exitLinkImpression, "Exit Link Impression Exit Link Position", exitLinkPosition);
      updateByPropertyName(exitLinkImpression.exitLinkImpressionInfo, "Rank", rank);
      updateByPropertyName(exitLinkImpression.exitLinkImpressionInfo, "Page", page);

      window.digitalData.page.attributes.exitLinkImpressions =
        window.digitalData.page.attributes.exitLinkImpressions || [];
      window.digitalData.page.attributes.exitLinkImpressions.push(exitLinkImpression);
      return self;
    },
    setAdServe: function() {
      var adServe = {};
      window.digitalData.page.attributes.adServes = window.digitalData.page.attributes.adServes || [];
      window.digitalData.page.attributes.adServes.push(adServe);
      return self;
    },
    setEditorial: function() {
      window.digitalData.page.attributes.isEditorial = true;
      return self;
    },
    setCustomerName: function(value) {
      var userProfile = window.digitalData.user[0].profile[0];
      updateByPropertyName(userProfile, "Customer Name", value);
      return self;
    },
    setUserType: function(value) {
      var userProfile = window.digitalData.user[0].profile[0];
      updateByPropertyName(userProfile, "User Type", value);
      return self;
    },
    setUserPartyID: function(value) {
      var userProfile = window.digitalData.user[0].profile[0];
      updateByPropertyName(userProfile, "Party ID", value);
      return self;
    },
    setUserParentID: function(value) {
      var userProfile = window.digitalData.user[0].profile[0];
      updateByPropertyName(userProfile, "Parent ID", value);
      return self;
    },
    setUserImpersonation: function(value) {
      var userProfile = window.digitalData.user[0].profile[0];
      updateByPropertyName(userProfile, "User Impersonation", value);
      return self;
    },
    setUserCountry: function(value) {
      var userProfile = window.digitalData.user[0].profile[0];
      updateByPropertyName(userProfile, "User Country", value);
      return self;
    },
    setProductImpression: function(imtID, listingType, category, rank, page, container, region, model) {
      category = category || "boat";
      var productImpression = {};
      updateByPropertyName(productImpression, "Product Impression Product ID", imtID);
      updateByPropertyName(productImpression, "Product Impression Listing Type", listingType);
      updateByPropertyName(productImpression, "Product Impression Category", category);
      updateByPropertyName(productImpression.productImpressionInfo, "Rank", rank);
      updateByPropertyName(productImpression.productImpressionInfo, "Page", page);
      updateByPropertyName(productImpression.productImpressionInfo, "Container", container);
      updateByPropertyName(productImpression.productImpressionInfo, "Region", region);

      window.digitalData.page.attributes.productImpressions =
        window.digitalData.page.attributes.productImpressions || [];
      window.digitalData.page.attributes.productImpressions.push(productImpression);

      // GA4 updates:

      window.digitalDataUpdates.addProductImpression = window.digitalDataUpdates.addProductImpression || [];
      // If this ^ is true, the 'view_item_list' event will be set by the app (e.g. store/actions/dataLayer.js) instead
      var item = {
        item_id: imtID,
        item_list_name: listingType,
        location_id: region,
        item_variant: model
      };
      ga4AddEcommerceItem(item, window.digitalDataUpdates.addProductImpression);
      // The dataLayer is not updated ^ here, but rather in the app (e.g. src/components/DataLayer)

      return self;
    },
    addProductImpression: function(imtID, listingType) {
      this.setProductImpression(imtID, listingType);
      notifyListeners("product impression");
      return self;
    },
    addListingView: function(imtID) {
      var item = {
        item_id: imtID
      };
      window.dataLayer.push({
        ecommerce: null
      });
      ga4AddEcommerceItem(item);
      let newDigitalData = JSON.parse(JSON.stringify(window.digitalData));
      window.dataLayer.push(Object.assign({event: 'view_item'}, newDigitalData));
      return self;
    },
    addProductClick: function(imtID, listingType, rank, page, container, region, model) {
      var productClick = {};
      updateByPropertyName(productClick, "Product Click Product ID", imtID);
      updateByPropertyName(productClick, "Product Click Listing Type", listingType);
      updateByPropertyName(productClick.productClickInfo, "Rank", rank);
      updateByPropertyName(productClick.productClickInfo, "Page", page);
      updateByPropertyName(productClick.productClickInfo, "Container", container);
      updateByPropertyName(productClick.productClickInfo, "Region", region);

      window.digitalData.page.attributes.productClicks = window.digitalData.page.attributes.productClicks || [];
      window.digitalData.page.attributes.productClicks.push(productClick);

      var item = {
        item_id: imtID,
        item_list_name: listingType,
        location_id: region,
        item_variant: model
      };
      ga4AddEcommerceItem(item);
      let newDigitalData = JSON.parse(JSON.stringify(window.digitalData));
      newDigitalData.ecommerce = {
        items: [item]
      };
      window.dataLayer.push({
        ecommerce: null
      });
      window.dataLayer.push(Object.assign({event: 'select_item'}, newDigitalData));

      notifyListeners("product click");
      return self;
    },
    addProductClickOwner: function(ownerID, listingType) {
      var productClick = {};
      updateByPropertyName(productClick, "Product Click Owner ID", ownerID);
      updateByPropertyName(productClick, "Product Click Listing Type", listingType);

      window.digitalData.page.attributes.productClicks =
        window.digitalData.page.attributes.productClicks || [];
      window.digitalData.page.attributes.productClicks.push(productClick);

      notifyListeners("product click");
      return self;
    },
    addExternalLinkClick: function(externalLinkID, externalLinkName, externalLinkPosition, rank, page) {
      externalLinkName = externalLinkName || externalLinkID;
      externalLinkPosition = externalLinkPosition || 'service link';
      var externalLinkClick = {},
        id = externalLinkID.toLowerCase();
      updateByPropertyName(externalLinkClick, "External Link Click External Link ID", id);
      updateByPropertyName(externalLinkClick, "External Link Click External Link Name", externalLinkName);
      updateByPropertyName(externalLinkClick, "External Link Click External Link Position", externalLinkPosition);
      updateByPropertyName(externalLinkClick.externalLinkClickInfo, "Rank", rank);
      updateByPropertyName(externalLinkClick.externalLinkClickInfo, "Page", page);

      window.digitalData.page.attributes.externalLinkClicks =
        window.digitalData.page.attributes.externalLinkClicks || [];
      window.digitalData.page.attributes.externalLinkClicks.push(externalLinkClick);

      notifyListeners("external link click");
      return self;
    },
    addExitLinkClick: function(exitLinkID, exitLinkName, exitLinkPosition, rank, page) {
      exitLinkName = exitLinkName || exitLinkID;
      exitLinkPosition = exitLinkPosition || 'exit link';
      var exitLinkClick = {},
        id = exitLinkID.toLowerCase();
      updateByPropertyName(exitLinkClick, "Exit Link Click Exit Link ID", id);
      updateByPropertyName(exitLinkClick, "Exit Link Click Exit Link Name", exitLinkName);
      updateByPropertyName(exitLinkClick, "Exit Link Click Exit Link Position", exitLinkPosition);
      updateByPropertyName(exitLinkClick.exitLinkClickInfo, "Rank", rank);
      updateByPropertyName(exitLinkClick.exitLinkClickInfo, "Page", page);

      window.digitalData.page.attributes.exitLinkClicks =
        window.digitalData.page.attributes.exitLinkClicks || [];
      window.digitalData.page.attributes.exitLinkClicks.push(exitLinkClick);

      notifyListeners("exit link click");
      return self;
    },
    addLead: function(imtID, leadType, clickLocation, uniqueId) {
      if (isValid("Transaction Item Lead Type", leadType)) {
        window.digitalData.transaction = window.digitalData.transaction || {};
        window.digitalData.transaction.items = window.digitalData.transaction.items || [];

        var item = {};
        updateByPropertyName(item, "Transaction Item Type", "Lead");
        updateByPropertyName(item, "Transaction Item Lead Type", leadType);
        updateByPropertyName(item, "Product ID", imtID);
        updateByPropertyName(item, "Click Location", clickLocation);

        var uniqueValue = uniqueId || leadType;

        window.digitalData.transaction.items.push(item);
        window.dataLayer.push(window.digitalData);
        window.dataLayer.push({
          "event": "e_softLead",
          "uniqueId": uniqueValue,
          "clickLocation": clickLocation
        });
        notifyListeners("lead");
      }
      return self;
    },
    addConnectionClick: function(connectionClickData) {
      window.dataLayer.push({ ga4: {connection: null} });
      window.digitalData.ga4.connection = [];

      var connectionClickParams = {
        "connection_type": connectionClickData.connectionType,
        "connection_category": connectionClickData.connectionCategory,
        "connection_target": connectionClickData.connectionTarget,
        "connection_subject_id": connectionClickData.connectionSubjectId
      }
      window.digitalData.ga4.connection.push(connectionClickParams);
      window.dataLayer.push(Object.assign({event: 'connection_click'}, window.digitalData));
    return self;
    },
    registerConnectionClickLink: function(connectionClickDomElement, connectionClickData, performDefaultAction) {
      var recordClick = function() {
        self.addConnectionClick(connectionClickData);
      };
      setUpClickDomListener(connectionClickDomElement, recordClick, performDefaultAction);
      return self;
    },
    addSoftLead: function(uniqueId) {
      window.dataLayer.push({
        "event": "e_softLead",
        "uniqueId": uniqueId
      });
      return self;
    },
    addEnhancedEcommerce: function(productIDArray, action) {
      var ecommerceData = {
        "clicks": {
          "actionField": {
            "list": action
          },
          "products": []
        }
      };
      productIDArray.forEach(function(productId) {
        ecommerceData.clicks.products.push({
          "id": productId
        });
      });
      window.digitalData.ecommerce = ecommerceData;
      window.dataLayer.push(window.digitalData.ecommerce);
      return self;
    },
    addMultiContactLead: function(imtID) {
      window.dataLayer.push({
        "event": "e_multiContactCompletion",
        "uniqueId": imtID
      });
      return self;
    },
    addDynamicListingEvent: function() {
      window.dataLayer.push({
        "event": "e_dynamicListing"
      });
      return self;
    },
    addGenericEvent: function(event) {
      var eventData = {
        "event": event.eventName || "e_genericEvent",
        "eventCategory": event.category,
        "eventAction": event.action,
        "eventLabel": event.label,
        "eventValue": event.value
      };
      if (event.custom && event.custom != '') {
        var customVar = event.custom.split(',');
        eventData[customVar[0]] = customVar[1];
      }
      window.digitalData.genericEvent = eventData;
      window.dataLayer.push(window.digitalData.genericEvent);
      return self;
    },

    addCustomVariable: function(key, value) {
      var customVariable = {};
      customVariable[key] = value;
      window.dataLayer.push(customVariable);
      window.digitalData[key] = value;
      return self;
    },

    addAdServe: function() {
      this.setAdServe();
      notifyListeners("ad serve");
      return self;
    },
    addEditorial: function() {
      this.setEditorial();
      notifyListeners("editorial page view");
      return self;
    },
    registerProductLink: function(productLinkDomElement, imtID, listingType, performDefaultAction) {
      var recordClick = function() {
        self.addProductClick(imtID, listingType);
      };
      setUpClickDomListener(productLinkDomElement, recordClick, performDefaultAction);
      return self;
    },
    registerProductLinkOwner: function(productLinkDomElement, ownerID, listingType, performDefaultAction) {
      var recordClick = function() {
        self.addProductClickOwner(ownerID, listingType);
      };
      setUpClickDomListener(productLinkDomElement, recordClick, performDefaultAction);
      return self;
    },
    registerExternalLink: function(externalLinkDomElement, externalLinkID, performDefaultAction, externalLinkName, externalLinkPosition) {
      externalLinkName = externalLinkName || externalLinkID;
      externalLinkPosition = externalLinkPosition || 'service link';
      var recordClick = function() {
        self.addExternalLinkClick(externalLinkID, externalLinkName, externalLinkPosition);
      };
      setUpClickDomListener(externalLinkDomElement, recordClick, performDefaultAction);
      return self;
    },
    registerExitLink: function(exitLinkDomElement, exitLinkID, performDefaultAction, exitLinkName, exitLinkPosition) {
      exitLinkName = exitLinkName || exitLinkID;
      exitLinkPosition = exitLinkPosition || 'exit link';
      var recordClick = function() {
        self.addExitLinkClick(exitLinkID, exitLinkName, exitLinkPosition);
      };
      setUpClickDomListener(exitLinkDomElement, recordClick, performDefaultAction);
      return self;
    },
    registerHardLeadLink: function(hardLeadLinkDomElement, imtID, leadType, performDefaultAction, clickLocation) {
      var recordClick = function() {
        self.addLead(imtID, leadType, clickLocation);
      };
      setUpClickDomListener(hardLeadLinkDomElement, recordClick, performDefaultAction);
      return self;
    },
    registerLeadLink: function(hardLeadLinkDomElement, imtID, leadType, performDefaultAction, clickLocation) {
      this.registerHardLeadLink(hardLeadLinkDomElement, imtID, leadType, performDefaultAction, clickLocation);
    },
    registerSearchForm: function(searchFormDomElement, searchDataCallback, performDefaultAction) {
      setUpSearchFormSubmissionDomEventListener(searchFormDomElement, searchDataCallback, performDefaultAction);
      return self;
    },
    registerOnClickListener: function(elementRef, lead) {
      setUpOnClickListener(elementRef, lead);
      return self;
    },
    registerAddThis: function(addThisRef, imtID) {
      setUpAddThisListener(addThisRef, imtID);
      return self;
    },
    event: {
      addListener: function(event, callback) {
        if (event in eventListeners) {
          eventListeners[event].push(callback);
        }
      }
    }
  };

  function populateDefaults(rootPath) {
    for (var key in props) {
      if (undefined !== props[key]["default"]) {
        updateByPropertyName(rootPath, key, props[key]["default"]);
      }
    }
  }

  function updateSession() {
    var sessionData = sessionStorage.getSessionData();
    var now = new Date().getTime();
    var isSessionInactive = now > (sessionData.lastActiveAt + TIMEOUT_SESSION_INACTIVE);
    var isSessionExpired = now > (sessionData.currentSessionInitiatedAt + TIMEOUT_SESSION_EXPIRED);

    if (isSessionInactive || isSessionExpired) {
      sessionData = {
        lastActiveAt: now,
        currentSessionInitiatedAt: now,
        previousSessionInitiatedAt: sessionData.currentSessionInitiatedAt,
        sessionCount: sessionData.sessionCount + 1
      };
    }

    sessionData.lastActiveAt = now;
    sessionStorage.saveSessionData(sessionData);
  }

  function populateUserObject() {
    var sessionData = sessionStorage.getSessionData();
    var isReturningUser = sessionData.sessionCount > 1;
    var daysSinceLastVisit = Math.floor((sessionData.currentSessionInitiatedAt - sessionData.previousSessionInitiatedAt) / (24 * 60 * 60 * 1000));
    var visits = sessionData.sessionCount;
    var mbId = document.cookie.match('(?:^|;)\\s*myboats_id=([^;]*)');
    mbId = mbId ? parseInt(mbId[1]) : -1;
    console.log("mbId", mbId);
    var user = {
      profile: [{
        profileInfo: {
          returningStatus: isReturningUser,
          daysSinceLastVisit: daysSinceLastVisit,
          visits: visits,
          partyID: -1,
          parentID: -1,
          myBoatsID: mbId,
          userType: "",
          customerName: ""
        }
      }]
    };
    window.digitalData.user = window.digitalData.user || [];
    window.digitalData.user.push(user);
  }

  function updateByPropertyName(rootPath, propertyName, valueOrFunction) {
    var value = normalize(propertyName, isFunction(valueOrFunction) ? valueOrFunction() : valueOrFunction);
    if (propertyName in props && isValid(propertyName, value)) {
      updateByPropertyPath(rootPath, props[propertyName].path, value);
      if (props[propertyName].ga4Path) {
        // Also set the GA4 property
        var ga4Value = ga4Normalize(propertyName, value);
        updateByPropertyPath(rootPath, props[propertyName].ga4Path, ga4Value);
      }
    }
  }

  function updateWithMultipleByPropertyName(rootPath, propertyName, valuesOrFunction) {
    var values = normalize(propertyName, isFunction(valuesOrFunction) ? valuesOrFunction() : valuesOrFunction);
    var newValue = '';
    if (values && values.length) {
      String(values).split(',').forEach(function(value) {
        if (propertyName in props && isValid(propertyName, value)) {
          if (!newValue) {
            newValue = value;
          } else {
            newValue += ',' + value
          }
        }
      });
    }

    updateByPropertyPath(rootPath, props[propertyName].path, newValue);
  }

  function updateByPropertyPath(rootPath, pathIncludingName, value) {
    var pathParts = pathIncludingName.split(".");
    var namePart = pathParts.pop();
    setOnPath(createPath(rootPath, pathParts), namePart, value);
  }

  function createPath(root, pathParts) {
    for (var index = 0; index < pathParts.length; index++) {
      root[pathParts[index]] = root[pathParts[index]] || {};
      root = root[pathParts[index]];
    }
    return root;
  }

  function setOnPath(path, name, value) {
    if (value !== undefined) {
      path[name] = value;
    }
  }

  function normalize(propertyName, value) {
    return !isFunction(props[propertyName].normalizer) ? value : props[propertyName].normalizer(value);
  }

  function ga4Normalize(propertyName, value) {
    return !isFunction(props[propertyName].ga4Normalizer) ? value : props[propertyName].ga4Normalizer(value);
  }

  function isValid(propertyName, value) {
    return !isFunction(props[propertyName].validator) || props[propertyName].validator(value);
  }

  function setUpSearchFormSubmissionDomEventListener(searchFormDomElement, searchDataCallback, performDefaultAction) {
    var submissionListener = function(event) {
      window.digitalData.events = window.digitalData.events || [];

      var search = {
        eventName: "Search"
      };

      if (searchDataCallback !== undefined) {
        var searchData = isFunction(searchDataCallback) ? searchDataCallback() : searchDataCallback;

        updateWithMultipleByPropertyName(search, "Search Form Type", searchData.productType);
        updateWithMultipleByPropertyName(search, "Search Form Class", searchData.productClass);
        updateByPropertyName(search, "Search Form Make", searchData.productMake);
        updateByPropertyName(search, "Search Form Model", searchData.productModel);
        updateByPropertyName(search, "Search Form Condition", searchData.productCondition);
        updateByPropertyName(search, "Price Low End", searchData.priceFrom);
        updateByPropertyName(search, "Price High End", searchData.priceTo);
        updateByPropertyName(search, "Length Low End", searchData.lengthFrom);
        updateByPropertyName(search, "Length High End", searchData.lengthTo);
        updateByPropertyName(search, "Has Price Drop", searchData.hasPriceDrop);
      }
      window.digitalData.events.push(search);

      notifyListeners("search");

      event.preventDefault();

      if (isTruthy(performDefaultAction) || !isExisty(performDefaultAction)) {
        runAfterTimeoutToAllowTrackingPixelRequest(function() {
          searchFormDomElement.submit();
        });
      }
    };
    searchFormDomElement.addEventListener("submit", function(event) {
      submissionListener(event);
    }, true);
  }

  function setUpOnClickListener(elementRef, lead) {
    elementRef.addEventListener('click', function() {
      var leadType = lead.service,
        id = lead.imtID,
        trackUrl = lead.trackurl,
        track = true,
        tagData = {};

      switch (lead.service) {
        case 'facebook':
          leadType = 'facebook share';
          tagData = {
            "socialNetwork": "facebook",
            "socialAction": SOCIAL_ACTIONS.SOCIAL_SHARE,
            "socialTarget": trackUrl
          };
          break;
        case 'twitter':
          leadType = 'twitter share';
          tagData = {
            "socialNetwork": "twitter",
            "socialAction": SOCIAL_ACTIONS.SOCIAL_SHARE,
            "socialTarget": trackUrl
          };
          break;
        default:
          tagData = {
            "socialNetwork": lead.service,
            "socialAction": SOCIAL_ACTIONS.SOCIAL_SHARE,
            "socialTarget": trackUrl
          };
          break;
      }
      if (track) {
        digitalDataBuilder.addLead(id, leadType);
        digitalDataBuilder.tagManager.track('SOCIAL_MEDIA', tagData);
      }
    });
  }

  function setUpAddThisListener(addThisRef, imtID) {
    addThisRef.addEventListener('addthis.menu.share', function(evt) {
      if (evt.type == 'addthis.menu.share') {
        var leadType = evt.data.service,
          track = true,
          tagData = {},
          trackUrl = evt.data.trackurl || evt.data.url;
        switch (evt.data.service) {
          case 'more':
            track = false;
            break;
          case 'facebook':
            leadType = 'facebook share';
            tagData = {
              "socialNetwork": "facebook",
              "socialAction": SOCIAL_ACTIONS.SOCIAL_SHARE,
              "socialTarget": trackUrl
            };
            break;
          case 'facebook_like':
            leadType = 'facebook like';
            tagData = {
              "socialNetwork": "facebook",
              "socialAction": SOCIAL_ACTIONS.SOCIAL_SHARE,
              "socialTarget": trackUrl
            };
            break;
          case 'facebook_unlike':
            track = false;
            break;
          case 'google_plusone_share':
            leadType = 'google plus share';
            tagData = {
              "socialNetwork": "googleplus",
              "socialAction": SOCIAL_ACTIONS.SOCIAL_SHARE,
              "socialTarget": trackUrl
            };
            break;
          case 'google_plusone':
            leadType = 'google plus plus one';
            tagData = {
              "socialNetwork": "googleplus",
              "socialAction": SOCIAL_ACTIONS.SOCIAL_SHARE,
              "socialTarget": trackUrl
            };
            break;
          case 'google_unplusone':
            track = false;
            break;
          case 'pinterest_share':
            leadType = 'pinterest pin';
            tagData = {
              "socialNetwork": "pinterest",
              "socialAction": SOCIAL_ACTIONS.SOCIAL_SHARE,
              "socialTarget": trackUrl
            };
            break;
          case 'twitter':
            leadType = 'twitter';
            tagData = {
              "socialNetwork": "twitter",
              "socialAction": SOCIAL_ACTIONS.SOCIAL_SHARE,
              "socialTarget": trackUrl
            };
            break;
          case 'print':
            tagData = {
              "socialNetwork": "print",
              "socialAction": SOCIAL_ACTIONS.PRINT_LISTING,
              "socialTarget": trackUrl
            };
            break;
          case 'email':
            tagData = {
              "socialNetwork": "email",
              "socialAction": SOCIAL_ACTIONS.EMAIL_LISTING,
              "socialTarget": trackUrl
            };
            break;
          default:
            tagData = {
              "socialNetwork": evt.data.service,
              "socialAction": SOCIAL_ACTIONS.SOCIAL_SHARE,
              "socialTarget": trackUrl
            };
            break;
        }
        if (track) {
          digitalDataBuilder.addLead(imtID, leadType);
          digitalDataBuilder.tagManager.track('SOCIAL_MEDIA', tagData);
        }
      }
    });
  }

  function setUpClickDomListener(domElement, doOnClick, performDefaultAction) {
    var clickListener = function(event) {
      event.preventDefault();
      var source = event.currentTarget || event.srcElement;
      doOnClick();
      if (isTruthy(performDefaultAction) || !isExisty(performDefaultAction)) {
        if ("A" === source.tagName.toUpperCase()) {
          if (!isDoubleTrigger()) {
            runAfterTimeoutToAllowTrackingPixelRequest(function() {
              if (source.hasAttribute('href')) {
                if (source.hasAttribute('target') && source.getAttribute('target') === '_blank') {
                  window.open(source.getAttribute('href'));
                  return false;
                } else {
                  location.href = source.getAttribute('href');
                }
              }
            });
          }
        }
      }
    };
    domElement.addEventListener("click", function(event) {
      clickListener(event);
    }, true);
  }

  function isDoubleTrigger() {
    if (window.innerWidth < 1024) {
      return false;
    } else {
      var currentTime = new Date().getTime();
      dmm.previousClickTime = dmm.previousClickTime || 0;
      var doubleTrigger = (currentTime - dmm.previousClickTime) <= TIMEOUT_TO_ALLOW_TRACKING_PIXEL_REQUEST;
      dmm.previousClickTime = currentTime; // reset previous click time
      return doubleTrigger;
    }
  }

  function runAfterTimeoutToAllowTrackingPixelRequest(functionToExecute) {
    setTimeout(functionToExecute, TIMEOUT_TO_ALLOW_TRACKING_PIXEL_REQUEST);
  }

  function notifyListeners(event) {
    if (event in eventListeners) {
      for (var index = 0; index < eventListeners[event].length; index++) {
        eventListeners[event][index].call();
      }
    }
  }

  function curry(fn) {
    var slice = Array.prototype.slice,
      savedArgs = slice.call(arguments, 1);
    return function() {
      var newArgs = slice.call(arguments),
        args = savedArgs.concat(newArgs);
      return fn.apply(null, args);
    };
  }

  function isOneOf(values, value) {
    for (var i = 0; i < values.length; i++) {
      if (value === values[i]) {
        return true;
      }
    }
    return false;
  }

  function isBoolean(value) {
    return "boolean" === typeof(value);
  }

  function isFunction(value) {
    return "function" === typeof(value);
  }

  function isTruthy(value) {
    return (value !== false) && isExisty(value);
  }

  function isExisty(value) {
    /* jshint ignore:start */
    return value !== undefined && value != null;
    /* jshint ignore:end */
  }

  var sessionStorage = (function() {

    var SESSION_COOKIE_NAME = "midas";

    var self = {
      saveSessionData: function(sessionData) {
        var cookieData = sessionData.lastActiveAt +
          "|" +
          sessionData.currentSessionInitiatedAt +
          "|" +
          sessionData.previousSessionInitiatedAt +
          "|" +
          sessionData.sessionCount;
        setCookie(SESSION_COOKIE_NAME, cookieData, 3650);
      },
      getSessionData: function() {
        var now = new Date().getTime();
        var defaultCookieData = now + "|" + now + "|" + now + "|1";
        var cookieData = !getCookie(SESSION_COOKIE_NAME) ? defaultCookieData.split('|') : getCookie(SESSION_COOKIE_NAME).split('|');

        return {
          lastActiveAt: parseInt(cookieData[0]),
          currentSessionInitiatedAt: parseInt(cookieData[1]),
          previousSessionInitiatedAt: parseInt(cookieData[2]),
          sessionCount: parseInt(cookieData[3])
        };
      }
    };

    function setCookie(cookieName, cookieValue, expiresInDays) {
      var date = new Date();
      date.setTime(date.getTime() + (expiresInDays * 24 * 60 * 60 * 1000));
      var cookie = cookieName + "=" + cookieValue + ";";
      var expires = "expires=" + date.toUTCString() + ";";
      var hostnameArray = location.hostname.split('.');
      var cookieData = hostnameArray.splice(hostnameArray.length - 2, 2).join('.');
      var domain = "domain=." + cookieData + ";";
      var path = "path=/;";
      if (('localhost' === location.hostname) || location.hostname.match(/^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/)) {
        //setting domain is not possible on 'localhost' or 'ip address'
        domain = "";
      }
      document.cookie = cookie + expires + domain + path;
    }

    function getCookie(cookieName) {
      var name = cookieName + "=";
      var ca = document.cookie.split(';');
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (' ' === c.charAt(0)) c = c.substring(1);
        if (0 === c.indexOf(name)) {
          return c.substring(name.length, c.length);
        }
      }
    }

    return self;
  })();

  return self;
}());

digitalDataBuilder.tagManager = (function() {
  var trackingData = {
    "PHONE_REVEAL": { "event": "e_revealNumber" },
    "PHONE_CALL": { "event": "e_telephoneClick" },
    "COLLAPSE_CONTENT": { "event": "e_contentInteraction" },
    "CAROUSEL_THUMBNAIL": { "event": "e_thumbnail" },
    "CAROUSEL_NAVIGATION": { "event": "e_imageGalleryArrows" },
    "CAROUSEL_MODAL_OPEN": { "event": "e_imageGalleryModal" },
    "SHIPPING_QUOTE": { "event": "e_shippingQuoteCompletion" },
    "CONTACTFORM_OPEN": { "event": "e_contactModal" },
    "CONTACTFORM_SUBMIT": { "event": "e_contactCompletion" },
    "SOCIAL_MEDIA": { "event": "e_social" },
    "SEARCH_FILTER": { "event": "e_searchFilter" },
    "SEARCH": { "event": "e_search" },
    "PRO_LEAD": { "event": "e_proLead" },
    "NAVIGATION_CLICK": {"event": "navigation_click"}
  };

  function extend(obj, src) {
    for (var key in src) {
      if (src.hasOwnProperty(key)) {
        obj[key] = src[key];
      }
    }
    return obj;
  }

  var Tracking = (function() {
    window.dataLayer = window.dataLayer || [];
    var trackData;

    var mapBoatClassAndType = function(data) {
      var mappers = [
        "digitalDataBuilderBCMapper",
        "digitalDataBuilderYWMapper",
        "digitalDataBuilderBoatTraderMapper",
        "digitalDataBuilderPlatformMapper"
      ];
      var portalNameMapping = {
        "digitalDataBuilderBoatTraderMapper": ["Boat Trader"],
        "digitalDataBuilderYWMapper": ["YachtWorld"],
        "digitalDataBuilderBCMapper": ["boats.com"],
        "digitalDataBuilderPlatformMapper": [
          "Annonces du Bateau",
          "Botenbank",
          "Botentekoop",
          "Boatshop24",
          "Boatshop24 UK",
          "Boats and Outboards",
          "Boot24",
          "Lodzie24",
          "Cosas de Barcos",
          "iNautia"
        ]
      };
      mappers
        .filter(function(mapperName) {
          return window.digitalData &&
            digitalData.page &&
            digitalData.page.attributes &&
            portalNameMapping[mapperName].indexOf(digitalData.page.attributes.portalName) >= 0;
        })
        .map(function(mapperName) {
          return window[mapperName];
        })
        .filter(function(mapper) {
          return !!mapper;
        })
        .forEach(function(mapper) {
          if (data.class) {
            //YWD-2477: YW advanced search page can accept multiple
            //classes, these should be comma separated
            var classes = data.class.split(",")
              .map(function(className) {
                return mapper.convertClass(className.trim());
              })
              .join(", ");

            extend(data, {
              class: classes
            });
          }
          if (data.type) {
            extend(data, {
              type: mapper.convertType(data.type)
            });
          }
        });
      return data;
    };

    var convertLengthToFeet = function(data) {
      if (data.uom == 'm') {
        var ratio = 3.28084;
        data.lengthLow = data.lengthLow ? Math.floor(data.lengthLow * ratio) : '';
        data.lengthHigh = data.lengthHigh ? Math.floor(data.lengthHigh * ratio) : '';
        data.uom = 'ft';
      }
      return data;
    };

    return {
      'track': function(type, data) {
        if (trackingData[type]) {
          trackData = ((typeof data === 'object') ? extend(data, trackingData[type]) : trackingData[type]);
          trackData = mapBoatClassAndType(trackData);
          trackData = convertLengthToFeet(trackData);
          dataLayer.push(trackData);
        }

        if (window.location.search.indexOf('thegreg=true') > -1) {
          console.group('dataLayer push:');
          console.log(trackData);
          console.group('window.dataLayer');
          console.log(window.dataLayer);
          console.groupEnd();
          console.groupEnd();
        }
      }
    };
  }());

  return Tracking;
}());

var SRP_listings = new Map();
var lastPageView = '';
var parseSearchParamMultipleValue = function(searchParamValue) {
  var attributes = searchParamValue.replace('\\', '').split('|');
  var searchParam = attributes.filter(function (value) {
    return !!value.length;
  }).map(function (value) {
    return JSON.parse(value);
  }).reduce(function (result, value) {
    result[value[0]] = value.length > 1 ? value[1] : [];
    return result;
  }, {});
  return {
    values: Object.values(searchParam).reduce(function (values, value) {
      values = [...values, ...value];
      return values;
    }, []),
    keys: Object.keys(searchParam)
  };
}
var convertMetersToFeet = function(lengthRange){
  return lengthRange.split('-').map(function(length){
    return !isNaN(parseInt(length)) ? Math.round(length * 3.281) : length;
  }).join('-');
}
var permutiveHelper = window.permutiveHelper = (function () {
  var PAGES = {
    BDP: 'boat details',
    SRP: 'listing search results'
  };
  var self = {
    init: function (onComplete) {
      var permutiveInitCount = 0;
      var permutiveInterval = setInterval(function () {
        if (window.digitalData && window.digitalData.user && window.digitalData.user.length > 0) {
          clearInterval(permutiveInterval);
          // Wait until permutive loads and first pageView event is triggered
          // window.permutive.readyWithTimeout = function (e, i, t) { var u = !1, n = function () { u || (e(), u = !0) }; (t = t || 1 / 0) !== 1 / 0 && window.setTimeout(n, t), window.permutive.ready(n, i) };
          // Disable until receiving the approvement to send data to Ad Server
          // window.permutive.readyWithTimeout(function () {
          // Send segments and user ID to Ad Server
          //window.googletag = window.googletag || {}, window.googletag.cmd = window.googletag.cmd || [], window.googletag.cmd.push(function () { if (0 === window.googletag.pubads().getTargeting("permutive").length) { var e = window.localStorage.getItem("_pdfps"); window.googletag.pubads().setTargeting("permutive", e ? JSON.parse(e) : []); var o = window.localStorage.getItem("permutive-id"); o && (window.googletag.pubads().setTargeting("puid", o), window.googletag.pubads().setTargeting("ptime", Date.now().toString())), window.permutive.config.viewId && window.googletag.pubads().setTargeting("prmtvvid", window.permutive.config.viewId), window.permutive.config.workspaceId && window.googletag.pubads().setTargeting("prmtvwid", window.permutive.config.workspaceId) } });
          // }, 'initialised', 1500);
          // Handle consent
          window.permutiveHelper.consent();
          window.permutiveHelper.pageView();
          if (onComplete) {
            onComplete();
          }
        } else {
          permutiveInitCount++;
          if (permutiveInitCount > 20) {
            clearInterval(permutiveInterval);
            if (onComplete) {
              onComplete();
            }
          }
        }
      }, 3000);
    },
    consent: function () {
      var hasConsent = !!window.localStorage.getItem('permutive-consent');
      var hasCookie = document.cookie.match('cookieControl=([^;]*)') && document.cookie.match('cookieControl=([^;]*)').length > 1 && document.cookie.match('cookieControl=([^;]*)')[1] === 'true';

      if (window.permutive && window.permutive.consent) {
        if (!window.permutiveHelper._requiresConsent() || hasCookie && !hasConsent) {
          var consent = `${window.digitalData.page.attributes.portalName}-${new Date().getTime()}`;
          window.permutive.consent({ 'opt_in': true, 'token': consent });
        } else if (!hasCookie && hasConsent) {
          window.permutive.consent({ 'opt_in': false });
        }
      }
    },
    pageView: function () {
      try {
        let customPageViewSchema = window.permutiveHelper._getPermutiveStructure();
        if (customPageViewSchema && window.permutive && window.permutive.addon) {
          window.permutive.addon('web', customPageViewSchema);
          lastPageView = JSON.stringify(customPageViewSchema);
        }
      } catch(error) {
        console.error('Permutive Error sending pageView event', error);
      }
    },
    _requiresConsent: function () {
      return document.cookie.match('gdpr=([^;]*)') && document.cookie.match('gdpr=([^;]*)').length > 1 && document.cookie.match('gdpr=([^;]*)')[1] === 'true'
    },
    _getPermutiveStructure: function () {
      try {
        var schema = {
          page: {
            userData: window.permutiveHelper._getUserData()
          }
        };
        let page = schema.page.userData.pageName;
        if (page === PAGES.BDP) {
          schema.page.boatDetails = window.permutiveHelper._getBoatDetails();
        } else if (page === PAGES.SRP) {
          schema.page.boatSearch = window.permutiveHelper._getBoatSearch();
          if (JSON.stringify(schema) === lastPageView) {
            return;
          }
        }
        return schema;
      } catch(e) {
        console.error('Permutive Error PageView Schema', e);
      }
    },
    _getBoatDetails: function () {
      var boatDetails = {};
      if (window.digitalData && window.digitalData.product && window.digitalData.product.length > 0) {
        var product = window.digitalData.product[window.digitalData.product.length - 1];
        boatDetails.sellerID = product.sellerID || '';
        if (product.category) {
          boatDetails.class = product.category.boatClass || '';
        }
        if (product.productInfo) {
          var productInfo = product.productInfo;
          boatDetails.length = parseFloat(`${productInfo.boatLength || '0.0'}`);
          boatDetails.model = productInfo.model || '';
          if (productInfo.listedPrice !== 'Request a Price') {
            boatDetails.listedPrice = parseFloat(`${productInfo.listedPrice}`);
          }
          boatDetails.manufacturer = productInfo.manufacturer || '';
          boatDetails.yearBuilt = `${productInfo.yearBuilt || 0}`;
          boatDetails.category = productInfo.category || '';
          boatDetails.type = productInfo.type || '';
          boatDetails.condition = productInfo.condition || '';
          if (productInfo.location) {
            boatDetails.city = productInfo.location.city || '';
            boatDetails.country = productInfo.location.country || '';
            boatDetails.subdivision = productInfo.location.stateProvince || '';
          }
        }
      }

      return boatDetails;
    },
    _getBoatSearch: function() {
      var boatSearch = {};
      if (window.localStorage.getItem('nextPreviousData') && window.localStorage.getItem('nextPreviousData').length) {
        var searchParams = JSON.parse(window.localStorage.getItem('nextPreviousData')).searchParams || {};
        var classMap = parseSearchParamMultipleValue(searchParams.multiFacetedBoatTypeClass || '');
        var makeModel = parseSearchParamMultipleValue(searchParams.multiFacetedMakeModel || '');

        boatSearch.class = classMap.values.length ? classMap.values : classMap.keys;
        boatSearch.make = makeModel.keys;
        boatSearch.length = searchParams.length ? searchParams.uom === 'm' ? convertMetersToFeet(searchParams.length) : searchParams.length : '';
        boatSearch.year = searchParams.year || '';
        boatSearch.condition = searchParams.condition || '';
        boatSearch.model = makeModel.values;
      } else if (window.localStorage.getItem('searchCriteria') && window.localStorage.getItem('searchCriteria').length) {
        var searchCriteria = JSON.parse(window.localStorage.getItem('searchCriteria')) || {};
        boatSearch.class = searchCriteria.class || [];
        boatSearch.make = searchCriteria.make || [];
        boatSearch.model = searchCriteria.model || [];
        boatSearch.condition = searchCriteria.condition && searchCriteria.condition.length ? searchCriteria.condition[0] : '';
        var isLengthFromSelected = searchCriteria['length-from'] && searchCriteria['length-from'].length > 0;
        var isLengthToSelected = searchCriteria['length-to'] && searchCriteria['length-to'].length > 0;
        var minLength = isLengthFromSelected ? searchCriteria['length-from'][0] : isLengthToSelected ? '0' : '';
        var maxLength = isLengthToSelected ? '-' + searchCriteria['length-to'][0] : '';
        boatSearch.length = searchCriteria.uom && searchCriteria.uom === 'm' ? convertMetersToFeet(minLength + maxLength) : minLength + maxLength;
        var minYear = searchCriteria['year-from'] || '';
        var maxYear = searchCriteria['year-to'] || '';
        if (minYear && !maxYear) {
          boatSearch.year = minYear + '+';
        } else if (!minYear && maxYear) {
          boatSearch.year = '-' + maxYear;
        } else if (minYear && maxYear) {
          boatSearch.year = minYear + '-' + maxYear;
        } else {
          boatSearch.year = '';
        }
      }

      return boatSearch;
    },
    _getUserData: function () {
      var userData = {};
      if (window.digitalData && window.digitalData.user && window.digitalData.user.length > 0) {
        var user = window.digitalData.user[window.digitalData.user.length - 1];
        if (user.profile && user.profile.length > 0) {
          var profileInfo = user.profile[0].profileInfo
          userData.visits = parseInt(`${profileInfo.visits || 0}`);
          userData.daysSinceLastVisit = parseInt(`${profileInfo.daysSinceLastVisit || 0}`);
        }
      }
      if (window.digitalData.page && window.digitalData.page.category) {
        userData.pageName = window.digitalData.page.category.pageName;
      }
      return userData;
    },
    _getSubmitLeadSchema: function (leadType, listingId) {
      var user = window.permutiveHelper._getUserData();
      var schema = {
        page: user.pageName,
        leadType
      };

      var boatDetails = {};
      if (user.pageName === PAGES.BDP) {
        boatDetails = window.permutiveHelper._getBoatDetails();
      } else if (user.pageName === PAGES.SRP && SRP_listings.has(listingId)) {
        var listing = SRP_listings.get(listingId);
        boatDetails.manufacturer = listing.make;
        boatDetails.model = listing.model;
        boatDetails.class = listing.class;
      }

      schema.make = boatDetails.manufacturer || '';
      schema.model = boatDetails.model || '';
      schema.class = boatDetails.class || '';
      return schema;
    },
    submitLead: function (leadType, listingId) {
      try {
        var eventSchema = window.permutiveHelper._getSubmitLeadSchema(leadType, listingId);
        if (window.permutive && window.permutive.track) {
          window.permutive.track('SubmitLead', eventSchema);
        }
      } catch (error) {
        console.error('Permutive Error Tracking Lead', error);
      }
    },
    addListing: function (listing) {
      if (!SRP_listings.has(listing.id)) {
        SRP_listings.set(listing.id, listing);
      }
    },
    _getUserInterationSchema: function (interactionType) {
      var user = window.permutiveHelper._getUserData();
      var schema = {
        page: user.pageName,
        interactionType: interactionType,
      }
      return schema;
    },
    userInteraction: function (interactionType) {
      try {
        var eventSchema = window.permutiveHelper._getUserInterationSchema(interactionType);
        if (window.permutive && window.permutive.track) {
          window.permutive.track('UserInteraction', eventSchema);
        }
      } catch (error) {
        console.error('Permutive Error User Interaction', error);
      }
    }
  };
  return self;
}());
