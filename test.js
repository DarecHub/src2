// Databáze otázek
const questionsData = {
    questions: [
        {
            id: 1,
            category: "regulations",
            question: "Zajištění účelného využívání rádiových kmitočtů a správu rádiového spektra vykonává",
            answers: [
                "Český telekomunikační úřad",
                "Ministerstvo dopravy",
                "Úřad pro ochranu hospodářské soutěže"
            ],
            correct_answer: 0
        },
        {
            id: 2,
            category: "regulations",
            question: "Radiokomunikační službou je komunikační činnost, která spočívá v přenosu, vysílání nebo příjmu signálů prostřednictvím",
            answers: [
                "rádiových vln",
                "optických kabelů",
                "satelitních talířů"
            ],
            correct_answer: 0
        },
        {
            id: 3,
            category: "regulations",
            question: "Plán přidělení kmitočtových pásem (národní kmitočtovou tabulku) stanoví",
            answers: [
                "Ministerstvo průmyslu a obchodu vyhláškou",
                "Česká televize",
                "Ministerstvo vnitra"
            ],
            correct_answer: 0
        },
        {
            id: 4,
            category: "regulations",
            question: "Individuální oprávnění k vyžívání rádiových kmitočtů uděluje",
            answers: [
                "Státní zdravotní ústav",
                "Správa železnic",
                "Český telekomunikační úřad"
            ],
            correct_answer: 2
        },
        {
            id: 5,
            category: "regulations",
            question: "Držitel individuálního oprávnění k využívání rádiových kmitočtů je povinen platit za využívání rádiových kmitočtů",
            answers: [
                "poplatek dle nařízení vlády o poplatcích",
                "dobrovolný příspěvek stanovený zákonem",
                "daň z vysílání"
            ],
            correct_answer: 0
        },
        {
            id: 6,
            category: "regulations",
            question: "Rádiovým spektrem se rozumí elektromagnetické vlny o kmitočtu (frekvenci)",
            answers: [
                "vyšším než 3 000 GHz",
                "nižším než 30 GHz",
                "nižším než 300 GHz"
            ],
            correct_answer: 1
        },
        {
            id: 8,
            category: "regulations",
            question: "Státní kontrolu elektronických komunikací vykonává",
            answers: [
                "Ministerstvo obrany",
                "Policie ČR",
                "Český telekomunikační úřad"
            ],
            correct_answer: 2
        },
        {
            id: 9,
            category: "regulations",
            question: "Fyzická osoba vykonávající obsluhu vysílacího rádiového zařízení bez platného průkazu odborné způsobilosti se dopustila",
            answers: [
                "zločinu",
                "přestupku",
                "správního řízení"
            ],
            correct_answer: 1
        },
        {
            id: 10,
            category: "regulations",
            question: "Za obsluhu vysílacího rádiového zařízení bez platného průkazu odborné způsobilosti může Úřad uložit fyzické osobě pokutu až do výše",
            answers: [
                "50 000 Kč",
                "100 000 Kč",
                "500 000 Kč"
            ],
            correct_answer: 1
        },
        {
            id: 11,
            category: "regulations",
            question: "V mezinárodní volací značce České republiky tvoří první dvě písmena (prefix) vždy dvojice písmen",
            answers: [
                "CZ nebo CE",
                "OR nebo OS",
                "OK nebo OL"
            ],
            correct_answer: 2
        },
        {
            id: 12,
            category: "regulations",
            question: "Mezinárodní volací značka lodní stanice u plavidel zapsaných v námořním rejstříku ČR je",
            answers: [
                "OK a dvě čísla",
                "CZ a čtyři písmena",
                "OL a další dvě písmena (případně OL a čtyři číslice u jachet)"
            ],
            correct_answer: 2
        },
        {
            id: 13,
            category: "regulations",
            question: "Volací značka OL5234 v radiotelefonním provozu je",
            answers: [
                "volací značka letadla",
                "volací značka pobřežní stanice",
                "volací značka lodní stanice"
            ],
            correct_answer: 2
        },
        {
            id: 14,
            category: "regulations",
            question: "Co znamená zkratka GMDSS?",
            answers: [
                "globální multimediální datový satelitní systém",
                "generální modulární dálkový satelitní systém",
                "celosvětový námořní tísňový a bezpečnostní systém"
            ],
            correct_answer: 2
        },
        {
            id: 15,
            category: "regulations",
            question: "Je podle mezinárodního práva plavidlo povinné poskytnout pomoc jinému plavidlu v tísni?",
            answers: [
                "ne, nikdy",
                "ano, vždy bez výjimek",
                "ano, pokud tím nadměrně neohrozí svou loď nebo posádku"
            ],
            correct_answer: 2
        },
        {
            id: 16,
            category: "regulations",
            question: "Falešné volací značky a falešné signály",
            answers: [
                "se mohou používat v nouzi",
                "jsou doporučené v případě testování",
                "se nesmí používat"
            ],
            correct_answer: 2
        },
        {
            id: 17,
            category: "regulations",
            question: "Pohyblivá stanice námořní pohyblivé služby je",
            answers: [
                "lodní stanice",
                "pobřežní stanice",
                "letecká stanice"
            ],
            correct_answer: 0
        },
        {
            id: 18,
            category: "regulations",
            question: "Pohyblivá služba mezi pobřežními stanicemi a lodními stanicemi nebo mezi lodními stanicemi se nazývá",
            answers: [
                "letecká pohyblivá služba",
                "námořní pohyblivá služba",
                "přístavní pohyblivá služba"
            ],
            correct_answer: 1
        },
        {
            id: 19,
            category: "regulations",
            question: "Pořadí zpráv podle důležitosti je následující:",
            answers: [
                "tísňová zpráva (DISTRESS), pilnostní zpráva (URGENCY), bezpečnostní zpráva (SAFETY)",
                "bezpečnostní, tísňová, pilnostní",
                "pilnostní, bezpečnostní, tísňová"
            ],
            correct_answer: 0
        },
        {
            id: 20,
            category: "regulations",
            question: "Nejvyšší prioritu a absolutní přednost má zpráva",
            answers: [
                "pilnostní (PAN PAN)",
                "tísňová (signál MAYDAY)",
                "bezpečnostní (SECURITE)"
            ],
            correct_answer: 1
        },
        {
            id: 21,
            category: "regulations",
            question: "Tísňové volání a tísňová zpráva se vysílají jen na rozkaz",
            answers: [
                "velitele nebo osoby odpovědné za loď nebo letadlo",
                "radiového operátora",
                "nejbližší pobřežní stanice"
            ],
            correct_answer: 0
        },
        {
            id: 22,
            category: "regulations",
            question: "Mezinárodní VKV (VHF) tísňový, bezpečnostní a volací kmitočet v radiotelefonii v námořní pohyblivé službě je",
            answers: [
                "156,8 MHz (kanál 16)",
                "155,5 MHz",
                "157,2 MHz"
            ],
            correct_answer: 0
        },
        {
            id: 23,
            category: "regulations",
            question: "Kanál 16 v pásmu VKV (VHF) je v námořní pohyblivé službě určen k",
            answers: [
                "tísňovému a pilnostnímu volání, upozornění na bezpečnostní volání a k navázání spojení s následným přeladěním na pracovní kanál.",
                "běžnému hovoru mezi loděmi",
                "sledování počasí"
            ],
            correct_answer: 0
        },
        {
            id: 24,
            category: "regulations",
            question: "Rádiové kmitočty z pásma 160 MHz spadají do pásma označovaného jako",
            answers: [
                "SV (MF)",
                "VK (UHF)",
                "VKV (VHF)"
            ],
            correct_answer: 2
        },
        {
            id: 25,
            category: "regulations",
            question: "Pátrací a záchrannou operaci na moři může ukončit",
            answers: [
                "velitel (řídící stanice) pátrací a záchranné operace",
                "kterýkoli člen posádky",
                "nejbližší přístavní úřad"
            ],
            correct_answer: 0
        },
        {
            id: 26,
            category: "regulations",
            question: "Pohyblivým stanicím na moři nebo nad mořem je zakázáno provozovat",
            answers: [
                "navigační službu",
                "tísňovou službu",
                "rozhlasovou službu"
            ],
            correct_answer: 2
        },
        {
            id: 27,
            category: "regulations",
            question: "Služba u letadlové nebo lodní stanice podléhá nejvyšší pravomoci",
            answers: [
                "operátora vysílačky",
                "velitele nebo osoby, která je odpovědná za letadlo nebo plavidlo",
                "inspektora ITU"
            ],
            correct_answer: 1
        },
        {
            id: 28,
            category: "regulations",
            question: "Doba platnosti průkazů operátorů námořní pohyblivé služby LRC a SRC je při prvním vydání stanovena na",
            answers: [
                "5 let",
                "10 let",
                "15 let"
            ],
            correct_answer: 1
        },
        {
            id: 29,
            category: "regulations",
            question: "O prodloužení doby platnosti průkazu odborné způsobilosti se žádá",
            answers: [
                "ústně kdykoli",
                "telefonicky po skončení platnosti",
                "písemně, minimálně jeden měsíc před koncem platnosti průkazu"
            ],
            correct_answer: 2
        },
        {
            id: 30,
            category: "regulations",
            question: "Při žádosti o prodloužení platnosti průkazu je třeba také",
            answers: [
                "předložit doklad o zdravotní způsobilosti",
                "projít znovu teoretickým testem",
                "uhradit příslušný správní poplatek a doložit praxi v obsluze rádiových stanic"
            ],
            correct_answer: 2
        },
        {
            id: 31,
            category: "regulations",
            question: "V případě, že doba platnosti průkazu již uplynula, může držitel průkazu žádat o nový průkaz",
            answers: [
                "kdykoli po uplynutí platnosti",
                "jen do 14 dnů od skončení platnosti",
                "v období do jednoho roku ode dne pozbytí platnosti průkazu"
            ],
            correct_answer: 2
        },
        {
            id: 32,
            category: "regulations",
            question: "Doba platnosti průkazů operátorů námořní pohyblivé služby se na základě žádosti držitele prodlužuje o",
            answers: [
                "3 roky",
                "10 let",
                "5 let"
            ],
            correct_answer: 2
        },
        {
            id: 33,
            category: "regulations",
            question: "První znak nebo první dva znaky mezinárodní volací značky označují",
            answers: [
                "typ služby",
                "státní příslušnost stanice",
                "typ stanice"
            ],
            correct_answer: 1
        },
        {
            id: 34,
            category: "regulations",
            question: "Stejná volací značka",
            answers: [
                "může být sdílena na různých lodích",
                "může být použita současně, pokud jsou ve stejném státě",
                "nemůže být přidělena dvěma nebo více provozovatelům stanic"
            ],
            correct_answer: 2
        },
        {
            id: 35,
            category: "regulations",
            question: "Inspekční orgány zemí, které pohyblivá stanice (letadlo, plavidlo) navštíví",
            answers: [
                "musí předem písemně oznámit kontrolu",
                "nesmějí kontrolovat zahraniční operátory",
                "mohou vyžadovat předložení průkazu operátora"
            ],
            correct_answer: 2
        },
        {
            id: 36,
            category: "regulations",
            question: "Mezinárodní telekomunikační unie (ITU) je",
            answers: [
                "mezinárodní organizace pro meteorologii",
                "specializovanou organizací Organizace spojených národů pro oblast telekomunikací",
                "agentura pro rozvoj infrastruktury"
            ],
            correct_answer: 1
        },
        {
            id: 37,
            category: "regulations",
            question: "Volací značkou je",
            answers: [
                "každé poznávací označení stanice přidělené dle Radiokomunikačního řádu, které umožňuje zjištění její totožnosti během vysílání",
                "každý název plavidla",
                "libovolné identifikační číslo"
            ],
            correct_answer: 0
        },
        {
            id: 38,
            category: "regulations",
            question: "Mezi členy Regionální úmluvy o radiotelefonní službě na vnitrozemských vodních cestách (RAINWAT)",
            answers: [
                "patří i Česká republika",
                "patří pouze přímořské státy",
                "nepatří žádný stát EU"
            ],
            correct_answer: 0
        },
        {
            id: 39,
            category: "regulations",
            question: "Vnitrozemský automatický identifikační systém (Inland AIS)",
            answers: [
                "je používán pouze na moři",
                "slouží výhradně pro letecký provoz",
                "je součástí říčních informačních služeb a může být používán na vyhrazených rádiových kmitočtech"
            ],
            correct_answer: 2
        },
        {
            id: 40,
            category: "regulations",
            question: "AIS transpondér je rádiová stanice umožňující",
            answers: [
                "navigaci bez GPS",
                "příjem, vysílání a zpracování rádiového signálu automatického identifikačního systému",
                "měření teploty a tlaku"
            ],
            correct_answer: 1
        },
        {
            id: 41,
            category: "regulations",
            question: "Maximální povolený výkon lodní radiostanice vysílající v pásmu VKV (VHF) je:",
            answers: [
                "25 W",
                "50 W",
                "5 W"
            ],
            correct_answer: 0
        },
        {
            id: 42,
            category: "regulations",
            question: "Telekomunikační tajemství se týká",
            answers: [
                "pouze kapitánů lodí",
                "pouze zaměstnanců ITU",
                "všech osob, které znají obsah rádiových zpráv nebo se dověděly o jejich existenci či o zprávě, která byla doručena prostřednictvím radiokomunikační služby."
            ],
            correct_answer: 2
        },
        {
            id: 43,
            category: "regulations",
            question: "Každý, kdo se dozví informace o skutečnostech, které jsou předmětem telekomunikačního tajemství,",
            answers: [
                "může informace sdílet s kolegy",
                "může informace zveřejnit po třech dnech",
                "je povinen zachovávat o nich mlčenlivost."
            ],
            correct_answer: 2
        },
        {
            id: 44,
            category: "regulations",
            question: "Předmětem telekomunikačního tajemství je zejména",
            answers: [
                "informace o počasí",
                "názvy lodí a jejich polohy",
                "obsah zpráv přepravovaných nebo jinak zprostředkovaných telekomunikačními zařízeními a sítěmi s výjimkou zpráv určených veřejnosti."
            ],
            correct_answer: 2
        },
        {
            id: 45,
            category: "operations",
            question: "Oblast pokrytá signálem alespoň jedné pobřežní VKV (VHF) radiotelefonní stanice, která zabezpečuje nepřetržitou pohotovost pro tísňová volání DSC v systému GMDSS, se označuje jako",
            answers: [
                "námořní oblast B1",
                "námořní oblast A1",
                "oblast GMDSS 0"
            ],
            correct_answer: 1
        },
        {
            id: 46,
            category: "operations",
            question: "RCC (Rescue Coordination Centre) je",
            answers: [
                "lodní operační středisko",
                "satelitní navigační centrum",
                "orgán zodpovědný za účinnou organizaci pátracích a záchranných služeb (SAR) a za koordinaci SAR zásahů v dané oblasti"
            ],
            correct_answer: 2
        },
        {
            id: 47,
            category: "operations",
            question: "Zkratka DSC znamená",
            answers: [
                "Digital Selective Calling (digitální selektivní volání), tj. volání prostřednictvím digitálního přenosu signálu a s možností výběru volané stanice nebo stanic",
                "Direct Signal Channel",
                "Data Selective Code"
            ],
            correct_answer: 0
        },
        {
            id: 48,
            category: "operations",
            question: "Jsou pro DSC určeny speciální kmitočty?",
            answers: [
                "ne, DSC se používá na jakémkoli kanálu",
                "ano, kanál č. 16 je vyhrazen pro DSC",
                "pro DSC je pásmu VKV (VHF) vyhrazen kanál č. 70, na němž je možné komunikovat pouze v rámci standardu DSC, fonický provoz je zablokován"
            ],
            correct_answer: 2
        },
        {
            id: 49,
            category: "operations",
            question: "K označení identity lodní stanice v rámci DSC provozu se používá",
            answers: [
                "devítimístný číselný kód MMSI (Maritime Mobile Service Identity)",
                "osmimístný kód IMO",
                "alfa-numerická značka lodě"
            ],
            correct_answer: 0
        },
        {
            id: 50,
            category: "operations",
            question: "Dá se z MMSI lodní stanice poznat pod jakou vlajkou pluje?",
            answers: [
                "ne, MMSI neobsahuje žádné informace o státu",
                "ano, poslední čtyři číslice určují stát",
                "ano, první tři číslice (MID) kódu lodní stanice označují stát, v němž je plavidlo registrováno"
            ],
            correct_answer: 2
        },
        {
            id: 51,
            category: "operations",
            question: "Podle čeho je možné identifikovat MMSI náležející pobřežní stanici?",
            answers: [
                "mají vždy lichý počet číslic",
                "pobřežní stanice používají devítimístný MMSI kód, v němž se před MID (trojčíslí přidělené státu, z jehož území pobřežní stanice pracuje) předřadí dvě nuly",
                "používají písmena místo čísel"
            ],
            correct_answer: 1
        },
        {
            id: 52,
            category: "operations",
            question: "Je možné se pomocí DSC spojit s definovanou skupinou lodních stanic?",
            answers: [
                "DSC protokol umožňuje vyslat zprávu skupině lodních stanic na podkladě použití přiděleného skupinového MMSI",
                "ne, DSC funguje jen individuálně",
                "jen pokud se stanice nachází ve stejné oblasti A1"
            ],
            correct_answer: 0
        },
        {
            id: 53,
            category: "operations",
            question: "MID České republiky je",
            answers: [
                "270",
                "250",
                "271"
            ],
            correct_answer: 0
        },
        {
            id: 54,
            category: "operations",
            question: "Pro volání skupiny lodních stanic se u MMSI před MID předřazuje",
            answers: [
                "dvě nuly",
                "tři nuly",
                "jedna nula"
            ],
            correct_answer: 2
        },
        {
            id: 55,
            category: "operations",
            question: "Funkčnost VKV (VHF) zařízení DSC se ověřuje",
            answers: [
                "každou hodinu přes testovací kanál",
                "jen komunikací s jinou lodí",
                "pouze pomocí nabídky „SELF TEST“ jednou za den, „živé“ testování na kanálu 70 s jinou stanicí je zakázáno."
            ],
            correct_answer: 2
        },
        {
            id: 56,
            category: "operations",
            question: "Jak probíhá potvrzení běžného (rutinního) pomocí DSC?",
            answers: [
                "potvrzení se nevyžaduje",
                "probíhá jen hlasem po vyslání DSC",
                "je nutné potvrdit nabídku spojení včetně čísla pracovního kanálu. Po odeslání potvrzení je další komunikace automaticky přepojena na vybraný pracovní kanál."
            ],
            correct_answer: 2
        },
        {
            id: 57,
            category: "operations",
            question: "Aktivace tlačítka „DISTRESS“ (aktivace DSC volání)",
            answers: [
                "stiskem tlačítka bez krytu",
                "stlačením tlačítka nepřetržitě po dobu několika sekund, dokud nedojde k odeslání DSC zprávy. Tlačítko je výrazně odlišeno a umístěno pod krytem",
                "aktivací přes mobilní aplikaci"
            ],
            correct_answer: 1
        },
        {
            id: 58,
            category: "operations",
            question: "Obsah tísňového volání DSC je následující:",
            answers: [
                "identifikační údaj (MMSI), poziční informace, čas UTC a případně povaha tísně",
                "jméno kapitána, typ plavidla a počet osob",
                "čas místní, pozice a jméno lodě"
            ],
            correct_answer: 0
        },
        {
            id: 59,
            category: "operations",
            question: "Přednastavený obsah tísňového volání DSC se vysílá",
            answers: [
                "při každém nouzovém volání",
                "v situaci, kdy není čas na ruční vkládání dalších doplňujících údajů",
                "pouze během testu spojení"
            ],
            correct_answer: 1
        },
        {
            id: 60,
            category: "operations",
            question: "Způsob vkládání údajů o poloze do tísňového volání DSC",
            answers: [
                "pouze manuálně před vysíláním",
                "pokud je do radiostanice předepsaným způsobem propojen výstup z přijímače GNSS (např. GPS), je údaj o poloze včetně UTC aktualizován automaticky průběžně, jinak je možné vkládat tyto údaje ručně (dle instrukcí v manuálu stanice).",
                "automaticky jen při připojení k internetu"
            ],
            correct_answer: 1
        },
        {
            id: 61,
            category: "operations",
            question: "Postup pro nastavení obsahu vysílání tísňového volání DSC",
            answers: [
                "zvolit kanál 70 a zadat polohu",
                "v nabídce MENU zvolit DISTRESS jako stupeň priority volání, zkontrolovat nebo vložit údaje o poloze včetně odpovídajícího času UTC, případně vložit povahu tísně. Po odeslání se stanice v tísni automaticky přepne na 16. kanál.",
                "vybrat režim nouze a přepnout na kanál 6"
            ],
            correct_answer: 1
        },
        {
            id: 62,
            category: "operations",
            question: "Opakování tísňového volání DSC",
            answers: [
                "radiostanice opakuje vysílání DSC tísňového volání automaticky vždy po 4 minutách, dokud pobřežní stanice nezruší jeho další vysílání potvrzením příjmu cestou DSC nebo není vysílání zrušeno obsluhou stanice v tísni.",
                "pouze jednou po 10 minutách",
                "vůbec se neopakuje"
            ],
            correct_answer: 0
        },
        {
            id: 63,
            category: "operations",
            question: "Proč má příjem tísňového volání DSC přednostně potvrdit pobřežní stanice?",
            answers: [
                "protože má povolení k vysílání tísně",
                "protože ostatní lodě nemají DSC zařízení",
                "protože disponuje optimálními technickými a organizačními předpoklady k řízení efektivní záchranné operace. Navíc sama může účinně aktivovat asistenci plavidel v okolí tísňové události včetně letecké podpory."
            ],
            correct_answer: 2
        },
        {
            id: 64,
            category: "operations",
            question: "Účel tísňového volání DSC pobřežní stanicí typu DISTRESS ALERT RELAY.",
            answers: [
                "zajištění cvičného spojení",
                "pobřežní stanice takto alarmuje lodě v oblasti tísně z důvodu ověření možnosti jejich operativní součinnosti v místě potřeby a využitelnosti jejich vybavení pro realizaci pomoci, v souladu s přípravou vlastní záchranné akce.",
                "vysílání informací o počasí"
            ],
            correct_answer: 1
        },
        {
            id: 65,
            category: "operations",
            question: "Jakou použije pobřežní stanice adresu u DSC zprávy DISTRESS ALERT RELAY pro ALL SHIPS?",
            answers: [
                "použije vlastní MMSI",
                "žádnou, adresa není potřeba",
                "vygeneruje náhodnou adresu"
            ],
            correct_answer: 1
        },
        {
            id: 66,
            category: "operations",
            question: "Jakou použije pobřežní stanice adresu u DSC zprávy určené pro konkrétní plavidlo (INDIVIDUAL STATION)?",
            answers: [
                "použije číslo oblasti",
                "použije se MMSI této stanice",
                "nepoužije žádnou adresu"
            ],
            correct_answer: 1
        },
        {
            id: 67,
            category: "operations",
            question: "DSC volání DISTRESS ALERT RELAY vyslané pobřežní nebo lodní stanicí všem lodím potvrzují lodní stanice",
            answers: [
                "radiotelefonním provozem na kanálu 16",
                "DSC zprávou zpět na kanál 70",
                "vůbec nepotvrzují"
            ],
            correct_answer: 0
        },
        {
            id: 68,
            category: "operations",
            question: "Pilnostní zprávy a DSC",
            answers: [
                "pouze písemně na palubním systému",
                "přes SMS v GMDSS systému",
                "pilnostní zprávy se ohlásí pilnostním voláním DSC na kanálu 70, v němž se uvede, na kterém kanálu se bude pilnostní zpráva následně vysílat radiotelefonem"
            ],
            correct_answer: 2
        },
        {
            id: 69,
            category: "operations",
            question: "Potvrzování příjmu pilnostních volání DSC provozem",
            answers: [
                "příjem pilnostních volání DSC avizujících pilnostní zprávu na pracovním kanálu se nepotvrzuje, lodní stanice se pouze přepne na ohlášený radiotelefonní kanál k vyslechnutí obsahu zprávy.",
                "potvrzuje se zpět přes DSC",
                "ignoruje se"
            ],
            correct_answer: 0
        },
        {
            id: 70,
            category: "operations",
            question: "Bezpečnostní zprávy a DSC",
            answers: [
                "pouze prostřednictvím e-mailu",
                "automaticky na všech kanálech",
                "bezpečnostní zprávy se nejprve ohlásí bezpečnostním voláním DSC na kanálu 70, v němž se uvede, na kterém kanálu se bude bezpečnostní zpráva následně vysílat radiotelefonem"
            ],
            correct_answer: 2
        },
        {
            id: 71,
            category: "operations",
            question: "Potvrzování příjmu bezpečnostních volání DSC provozem",
            answers: [
                "potvrzuje se odesláním vlastního MMSI",
                "příjem bezpečnostních volání DSC se na kanálu 70 zásadně nepotvrzuje, plavidlo pouze přepne na ohlášený kanál a přijme bezpečnostní zprávu",
                "stanice pošle potvrzení hlasem na kanál 70"
            ],
            correct_answer: 1
        },
        {
            id: 72,
            category: "operations",
            question: "Pro jaké námořní oblasti GMDSS je určen EPIRB s pracovním kmitočtem 406 MHz systému COSPAS-SARSAT?",
            answers: [
                "pouze oblast A1",
                "všechny oblasti (A1 – A4)",
                "pouze oblast A4"
            ],
            correct_answer: 1
        },
        {
            id: 73,
            category: "operations",
            question: "Jaký EPIRB je oficiální součástí systému GMDSS?",
            answers: [
                "EPIRB na frekvenci 300 MHz",
                "EPIRB s pouze světelným signálem",
                "EPIRB s pracovní frekvencí 406 MHz pro systém COSPAS-SARSAT, nově varianta s vestavěným GPS a s vysíláním dohledávacího signálu 121,5 MHz"
            ],
            correct_answer: 2
        },
        {
            id: 74,
            category: "operations",
            question: "Jak se aktivuje EPIRB?",
            answers: [
                "jen pomocí dálkového ovladače",
                "pouze signálem z GPS",
                "aktivuje se manuálně nebo automaticky (pokud je vybaven hydrostatickou pojistkou) po vynoření se z hloubky 4 m, v níž se při potápění lodě automaticky uvolní z držáku"
            ],
            correct_answer: 2
        },
        {
            id: 75,
            category: "operations",
            question: "Co jsou NON-SOLAS lodě?",
            answers: [
                "jsou to lodě, na něž se nevztahuje úmluva SOLAS, tzn. lodě, které nejsou určeny pro přepravu více než 12 cestujících (passenger ship) a nákladní lodě s prostorností menší než 300 tun (patří sem i malá sportovní a rekreační plavidla)",
                "lodě plující mimo EU",
                "vojenské lodě s výjimkou posádek"
            ],
            correct_answer: 0
        },
        {
            id: 76,
            category: "operations",
            question: "Při použití mezinárodní hláskovací abecedy se znak „@“ (tzv. zavináč) vyjádří výrazem:",
            answers: [
                "ALPHA-TANGO",
                "AT",
                "AMPERSAND"
            ],
            correct_answer: 1
        },
        {
            id: 77,
            category: "operations",
            question: "PTT je označení tlačítka, jehož stisknutím u zapnuté radiostanice dojde",
            answers: [
                "k přepnutí na nouzový kanál",
                "k umožnění vysílání řeči",
                "k ukončení příjmu"
            ],
            correct_answer: 1
        },
        {
            id: 78,
            category: "operations",
            question: "Správná zkratka pro „Mezinárodní námořní organizace“",
            answers: [
                "INA",
                "IMO",
                "MIO"
            ],
            correct_answer: 1
        },
        {
            id: 79,
            category: "operations",
            question: "Správná zkratka pro „mezinárodní Úmluva o bezpečnosti lidského života na moři“",
            answers: [
                "SAR",
                "SOLAS",
                "GMDSS"
            ],
            correct_answer: 1
        },
        {
            id: 80,
            category: "operations",
            question: "Správná zkratka pro „odpovídač pro účely pátrání a záchrany“",
            answers: [
                "SARTR",
                "SART",
                "RSEP"
            ],
            correct_answer: 1
        },
        {
            id: 81,
            category: "operations",
            question: "Správná zkratka pro „koordinovaný světový čas“",
            answers: [
                "GTM",
                "UTC",
                "CUT"
            ],
            correct_answer: 1
        },
        {
            id: 82,
            category: "operations",
            question: "Jaký standardní výraz použijete, pokud ve Vámi vysílané zprávě uděláte chybu a potřebujete ji opravit?",
            answers: [
                "CORRECTION",
                "CHANGE",
                "AGAIN"
            ],
            correct_answer: 0
        },
        {
            id: 83,
            category: "operations",
            question: "Co znamená standardní výraz I SPELL?",
            answers: [
                "budu hláskovat pomocí mezinárodní hláskovací abecedy",
                "začnu znovu zprávu",
                "zprávu zopakuji foneticky"
            ],
            correct_answer: 0
        },
        {
            id: 84,
            category: "operations",
            question: "Co znamená výraz SAY AGAIN?",
            answers: [
                "opakujte s důrazem",
                "pokračujte dále",
                "opakujte (zprávu nebo její část, které jsem nerozuměl)"
            ],
            correct_answer: 2
        },
        {
            id: 85,
            category: "operations",
            question: "V jaké situaci použijete výraz I REPEAT?",
            answers: [
                "zdůraznění – opakuji část zprávy, která je důležitá",
                "zavolání nové stanice",
                "zahájení spojení"
            ],
            correct_answer: 0
        },
        {
            id: 86,
            category: "operations",
            question: "Jaký standardní výraz použijete při žádosti o kontrolu signálu?",
            answers: [
                "SIGNAL CALL",
                "RADIO CHECK",
                "TEST CALL"
            ],
            correct_answer: 1
        },
        {
            id: 87,
            category: "operations",
            question: "Správná zkratka pro „identifikační číslo námořní pohyblivé služby",
            answers: [
                "IMSI",
                "MID",
                "MMSI"
            ],
            correct_answer: 2
        },
        {
            id: 88,
            category: "operations",
            question: "Správná zkratka pro „rádiová bóje označující místo katastrofy“",
            answers: [
                "SART",
                "EPIRB",
                "BEACON"
            ],
            correct_answer: 1
        },
        {
            id: 89,
            category: "operations",
            question: "Výraz „RIJEKA RADIO“ znamená",
            answers: [
                "kód pro nouzové vysílání",
                "volací značka pobřežní stanice RIJEKA",
                "označení jachty"
            ],
            correct_answer: 1
        },
        {
            id: 90,
            category: "operations",
            question: "Výraz „CALLSIGN“ znamená",
            answers: [
                "volací značka",
                "radiový kanál",
                "komunikační typ"
            ],
            correct_answer: 0
        },
        {
            id: 91,
            category: "operations",
            question: "Výraz „ROGER“ znamená",
            answers: [
                "„rozumím“ (při odpovědi na příkaz)",
                "opakujte",
                "přepínám"
            ],
            correct_answer: 0
        },
        {
            id: 92,
            category: "operations",
            question: "Výraz „LATITUDE“ znamená",
            answers: [
                "zeměpisná délka",
                "zeměpisná šířka",
                "nadmořská výška"
            ],
            correct_answer: 1
        },
        {
            id: 93,
            category: "operations",
            question: "Výraz „LONGITUDE“ znamená",
            answers: [
                "zeměpisná šířka",
                "zeměpisná délka",
                "délka v metrech"
            ],
            correct_answer: 1
        },
        {
            id: 94,
            category: "operations",
            question: "Výraz „DEGREE“ znamená",
            answers: [
                "směr",
                "úhel",
                "stupeň"
            ],
            correct_answer: 2
        },
        {
            id: 95,
            category: "operations",
            question: "Zprávy NAVTEX na kmitočtu 518 kHz jsou vysílány v jazyce",
            answers: [
                "německém",
                "francouzském",
                "anglickém"
            ],
            correct_answer: 2
        },
        {
            id: 96,
            category: "operations",
            question: "Dosah stanice systému NAVTEX na kmitočtu 518 kHz činí",
            answers: [
                "200–400 NM",
                "50–100 NM",
                "500–1000 NM"
            ],
            correct_answer: 0
        },
        {
            id: 97,
            category: "operations",
            question: "Přesnost určení místa katastrofy z vysílání EPIRBu 406 MHz (bez integrovaného GNSS přijímače) činí zhruba",
            answers: [
                "50 m",
                "20 km",
                "5 km"
            ],
            correct_answer: 2
        },
        {
            id: 98,
            category: "operations",
            question: "EPIRB 406 MHz se aktivuje manuálně nebo",
            answers: [
                "po stisku tlačítka SOS",
                "při detekci pádu do vody",
                "automaticky pomocí hydrostatické pojistky (pokud je instalována), když se loď potápí"
            ],
            correct_answer: 2
        },
        {
            id: 99,
            category: "operations",
            question: "SART 9 GHz slouží k",
            answers: [
                "lokalizaci (finálnímu vyhledání) trosečníků na místě katastrofy",
                "navigaci v mlze",
                "měření vzdálenosti mezi plavidly"
            ],
            correct_answer: 0
        },
        {
            id: 100,
            category: "operations",
            question: "Jak může být zvětšen dosah transpondéru SART?",
            answers: [
                "ponořením pod hladinu",
                "uchycením na záchranném člunu",
                "SART by měl být umístěn co nejvýše a ve vertikální poloze"
            ],
            correct_answer: 2
        },
        {
            id: 101,
            category: "operations",
            question: "Tísňové volání DISTRESS ALERT vyslané omylem z EPIRBu v teritoriálních vodách zrušíme",
            answers: [
                "přepnutím EPIRBu do režimu STANDBY",
                "zasláním DSC zprávy typu CANCEL",
                "na kanálu 16 doporučenou radiotelefonní formulací “Please, cancel my distress alert of (time UTC)”"
            ],
            correct_answer: 2
        },
        {
            id: 102,
            category: "operations",
            question: "Průkaz SRC opravňuje k obsluze zařízení pro kmitočty",
            answers: [
                "VKV i KV",
                "všechny dostupné frekvence",
                "pouze VKV (VHF)"
            ],
            correct_answer: 2
        },
        {
            id: 103,
            category: "operations",
            question: "Simplexní provoz je způsob provozu rádiové stanice, který",
            answers: [
                "umožňuje simultánní vysílání i příjem",
                "umožňuje přenos zpráv na jednom rádiovém kanálu střídavě v obou směrech, např. pomocí ručního přepínání (příjem/vysílání), přičemž během vysílání zpráv není možný současný příjem zpráv",
                "používá pouze digitální kódování"
            ],
            correct_answer: 1
        },
        {
            id: 104,
            category: "operations",
            question: "Duplexní provoz je způsob provozu rádiové stanice, který",
            answers: [
                "umožňuje současný přenos zpráv oběma směry a vyžaduje současné využívání dvou kmitočtů",
                "přepíná automaticky mezi frekvencemi",
                "používá jen jeden kanál"
            ],
            correct_answer: 0
        },
        {
            id: 105,
            category: "operations",
            question: "Jste na jachtě Sirius, potřebujete zavolat do mariny Rijeka. Jaký je správný postup navázání spojení?",
            answers: [
                "Sirius calling Rijeka marina, over",
                "Hello Rijeka marina, this is Sirius",
                "Rijeka marina, Rijeka marina, Rijeka marina, this is yacht Sirius, Sirius, Sirius, over"
            ],
            correct_answer: 2
        },
        {
            id: 106,
            category: "operations",
            question: "Jste na lodi jménem “ADRIA”, slyšíte volání adresované vám, ale nerozumíte jméno stanice, která vás volá. Jak správně odpovíte?",
            answers: [
                "Unknown station, please repeat, this is Adria",
                "Station calling Adria, this is Adria, over.",
                "Adria here, please speak again"
            ],
            correct_answer: 1
        },
        {
            id: 107,
            category: "operations",
            question: "Jaký standardní výraz použije stanice kontrolující tísňový provoz pro vyhlášení rádiového klidu?",
            answers: [
                "SEELONCE MAYDAY",
                "MAYDAY STOP",
                "SILENCE RADIO"
            ],
            correct_answer: 0
        },
        {
            id: 108,
            category: "operations",
            question: "Co znamená standardní výraz SEELONCE FINI?",
            answers: [
                "ukončení rádiového klidu",
                "MAYDAY STOP",
                "SILENCE RADIO"
            ],
            correct_answer: 0
        },
        {
            id: 109,
            category: "technical",
            question: "Paralelně řazené akumulátory",
            answers: [
                "umožňují dodávat větší proud",
                "zvyšují napětí článků",
                "snižují životnost článků"
            ],
            correct_answer: 0
        },
        {
            id: 110,
            category: "technical",
            question: "Sériově řazené akumulátory",
            answers: [
                "zvyšují kapacitu",
                "se zapojují pro zvýšení dodávaného napětí",
                "snižují proud"
            ],
            correct_answer: 1
        },
        {
            id: 111,
            category: "technical",
            question: "Jmenovité napětí článku olověného akumulátoru je",
            answers: [
                "2 V",
                "1,5 V",
                "1,2 V"
            ],
            correct_answer: 0
        },
        {
            id: 112,
            category: "technical",
            question: "Jmenovité napětí článku alkalického akumulátoru je",
            answers: [
                "1,5 V",
                "1,2 V",
                "2 V"
            ],
            correct_answer: 1
        },
        {
            id: 113,
            category: "technical",
            question: "Jmenovité napětí suchého galvanického článku je",
            answers: [
                "1,2 V",
                "2 V",
                "1,5 V"
            ],
            correct_answer: 2
        },
        {
            id: 114,
            category: "technical",
            question: "Suché galvanické články",
            answers: [
                "jsou opakovaně nabíjecí",
                "lze nabíjet pouze jednou",
                "nelze dobíjet"
            ],
            correct_answer: 2
        },
        {
            id: 115,
            category: "technical",
            question: "Antény dělíme podle směru vysílání nebo příjmu na",
            answers: [
                "vnitřní a venkovní",
                "krátké a dlouhé",
                "směrové a všesměrové"
            ],
            correct_answer: 2
        },
        {
            id: 116,
            category: "technical",
            question: "Všesměrová anténa má vyzařovací charakteristiku",
            answers: [
                "pásovou",
                "kruhovou",
                "osmičkovou"
            ],
            correct_answer: 1
        },
        {
            id: 117,
            category: "technical",
            question: "Všesměrová anténa musí přijímat nebo vysílat stejně všemi směry",
            answers: [
                "v radiálním úhlu",
                "v diagonálním směru",
                "v horizontální rovině"
            ],
            correct_answer: 2
        },
        {
            id: 118,
            category: "technical",
            question: "Půlvlnný dipól",
            answers: [
                "je vždy směrový",
                "může být směrová i všesměrová anténa, záleží na jeho orientaci k zemskému povrchu",
                "je použitelný jen na VKV"
            ],
            correct_answer: 1
        },
        {
            id: 119,
            category: "technical",
            question: "Půlvlnný dipól umístěný rovnoběžně se zemským povrchem",
            answers: [
                "má v horizontální rovině osmičkovou vyzařovací charakteristiku",
                "vysílá pouze svisle",
                "nevysílá ve směru antény"
            ],
            correct_answer: 0
        },
        {
            id: 120,
            category: "technical",
            question: "Vztah mezi délkou vlny (λ) a kmitočtem (f), když c je rychlost světla, je",
            answers: [
                "f = λ * c",
                "f = c^2 / λ",
                "f = c / λ"
            ],
            correct_answer: 2
        },
        {
            id: 121,
            category: "technical",
            question: "Ampérmetr a voltmetr se při měření zařazují",
            answers: [
                "oba do série",
                "ampérmetr do série se spotřebičem, voltmetr paralelně ke spotřebiči",
                "oba paralelně"
            ],
            correct_answer: 1
        },
        {
            id: 122,
            category: "technical",
            question: "V suchém, bezprašném prostředí ... považujeme za bezpečná napětí",
            answers: [
                "stejnosměrné do 60 V a střídavé do 25 V",
                "střídavé do 60 V a stejnosměrné do 25 V",
                "do 12 V pro oba druhy napětí"
            ],
            correct_answer: 0
        },
        {
            id: 123,
            category: "technical",
            question: "Při úrazu elektrickým proudem",
            answers: [
                "okamžitě zahájíme dýchání bez kontroly",
                "čekáme na odborníka",
                "vyprostíme postiženého..., zavoláme záchrannou službu..."
            ],
            correct_answer: 2
        },
        {
            id: 124,
            category: "technical",
            question: "Funkce „SQUELCH“ VKV (VHF) radiostanice je určena",
            answers: [
                "ke zvýšení hlasitosti",
                "k ladění signálu",
                "k potlačení slabších rušivých signálů včetně vlastního šumu přijímače."
            ],
            correct_answer: 2
        },
        {
            id: 125,
            category: "technical",
            question: "Údaj elektrické napětí 2 V lze také zapsat",
            answers: [
                "0,2 mV",
                "2000 mV",
                "20 mV"
            ],
            correct_answer: 1
        },
        {
            id: 126,
            category: "technical",
            question: "Kmitočet 406 MHz lze také zapsat",
            answers: [
                "0,406 GHz",
                "4,06 GHz",
                "4060 kHz"
            ],
            correct_answer: 0
        },
        {
            id: 127,
            category: "technical",
            question: "Délka rádiové vlny v pásmu 160 MHz (VKV/VHF) je",
            answers: [
                "cca. 20 m",
                "cca. 2 m",
                "cca. 0,2 m"
            ],
            correct_answer: 1
        },
        {
            id: 128,
            category: "technical",
            question: "Vztah mezi napětím (U), proudem (I) a odporem (R) je:",
            answers: [
                "U = I/R",
                "U = R*I",
                "U = R/I"
            ],
            correct_answer: 1
        },
        {
            id: 129,
            category: "technical",
            question: "Vztah mezi výkonem (P), napětím (U) a proudem (I) je:",
            answers: [
                "P = U/I",
                "P = U*I",
                "P = I/U"
            ],
            correct_answer: 1
        },
        {
            id: 130,
            category: "technical",
            question: "Radiostanice odebírající z baterie 12 V proud 500 mA má příkon",
            answers: [
                "60 W",
                "0,6 W",
                "6 W"
            ],
            correct_answer: 2
        },
        {
            id: 131,
            category: "technical",
            question: "Tři dobré vodiče elektřiny jsou",
            answers: [
                "měď, zlato, stříbro",
                "hliník, sklo, voda",
                "uhlík, plast, železo"
            ],
            correct_answer: 0
        },
        {
            id: 132,
            category: "technical",
            question: "Čtyři dobré izolanty jsou",
            answers: [
                "měď, zlato, železo, voda",
                "sklo, vzduch, plast, porcelán",
                "uhlík, papír, voda, guma"
            ],
            correct_answer: 1
        },
        {
            id: 133,
            category: "technical",
            question: "Ke zdroji 10 V jsou připojeny dva odpory 10 Ω zapojené do série. Odebíraný příkon činí:",
            answers: [
                "10 W",
                "5 W",
                "1 W"
            ],
            correct_answer: 1
        },
        {
            id: 134,
            category: "technical",
            question: "Radiotechnická součástka je identifikována jako kondenzátor, pokud se její hodnota měří v",
            answers: [
                "kΩ",
                "pF",
                "V"
            ],
            correct_answer: 1
        },
        {
            id: 135,
            category: "technical",
            question: "Výstupním výkonem stanice se rozumí",
            answers: [
                "celkový výkon baterie",
                "výkon koncového stupně vysílače dodávaný do napaječe anténního systému",
                "maximální výkon reproduktoru"
            ],
            correct_answer: 1
        },
        {
            id: 136,
            category: "technical",
            question: "Jaký je přibližně dosah mezi dvěma plachetnicemi...",
            answers: [
                "5 až 10 NM",
                "asi 16 až 24 NM",
                "50 až 80 NM"
            ],
            correct_answer: 1
        },
        {
            id: 137,
            category: "technical",
            question: "Co umožňuje na radiostanici funkce DUAL WATCH?",
            answers: [
                "přepínání mezi třemi kanály",
                "automatické volání",
                "souběžně monitorovat kanál 16 plus jeden další vybraný kanál"
            ],
            correct_answer: 2
        },
        {
            id: 138,
            category: "technical",
            question: "Je možné vysílat bez antény?",
            answers: [
                "ne, hrozí poškození radiostanice",
                "ano, ale s omezením výkonu",
                "ano, při použití GPS"
            ],
            correct_answer: 0
        },
        {
            id: 139,
            category: "technical",
            question: "Kterou vlastnost antény ovlivní náklon lodě?",
            answers: [
                "dosah",
                "barvu",
                "napětí"
            ],
            correct_answer: 0
        },
        {
            id: 140,
            category: "technical",
            question: "Co NENÍ možné dělat, když máme stisknuté tlačítko pro vysílání (PTT)?",
            answers: [
                "přijímat jiné vysílání",
                "přijímat polohu",
                "zvýšit výkon"
            ],
            correct_answer: 0
        },
        {
            id: 141,
            category: "technical",
            question: "V jakých typech DSC volání je zahrnutá pozice a čas?",
            answers: [
                "pouze v tísňovém DSC alarmu (DISTRESS)",
                "ve všech",
                "pouze ve skupinových"
            ],
            correct_answer: 0
        },
        {
            id: 142,
            category: "technical",
            question: "Jaká je minimální životnost baterie v radiobóji EPIRB při vysílání?",
            answers: [
                "12 hodin",
                "96 hodin",
                "48 hodin"
            ],
            correct_answer: 2
        },
        {
            id: 143,
            category: "technical",
            question: "Co z uvedeného NENÍ součástí radiobóje EPIRB?",
            answers: [
                "vysílač",
                "mikrofon",
                "anténa"
            ],
            correct_answer: 1
        },
        {
            id: 144,
            category: "technical",
            question: "K čemu je v pásmu VHF určený kanál 70?",
            answers: [
                "pro zábavní vysílání",
                "pro meteorologické zprávy",
                "slouží výhradně pro spojení mezi DSC kontroléry, hlasové volání je zakázáno"
            ],
            correct_answer: 2
        },
        {
            id: 145,
            category: "technical",
            question: "V jakém kmitočtovém pásmu pracuje lodní VHF radiostanice?",
            answers: [
                "156–162 MHz",
                "100–110 MHz",
                "300–350 MHz"
            ],
            correct_answer: 0
        },
        {
            id: 146,
            category: "technical",
            question: "Jakým způsobem se šíří rádiové vlny v pásmu VHF (VKV)?",
            answers: [
                "šíří se přímočaře, neohýbají se podél zemského povrchu ani přes překážky",
                "šíří se pod zemí",
                "odrážejí se jako KV"
            ],
            correct_answer: 0
        },
        {
            id: 147,
            category: "technical",
            question: "Na čem závisí délka antény v pásmu VHF?",
            answers: [
                "na vlnové délce",
                "na barvě kabelu",
                "na výkonu rádia"
            ],
            correct_answer: 0
        },
        {
            id: 148,
            category: "technical",
            question: "Jak zvýšíme dosah antény v pásmu VHF (VKV)?",
            answers: [
                "umístíme anténu co nejvýše",
                "přiblížíme ji ke stěžni",
                "použijeme kratší kabel"
            ],
            correct_answer: 0
        }
    ]
};

// Funkce pro filtrování otázek podle kategorie
function getQuestionsByCategory(category) {
    if (category === "all") {
        return questionsData.questions;
    }
    return questionsData.questions.filter(q => q.category === category);
}

// Inicializace testu
let questions = [];
let currentQuestionIndex = 0;
let correctAnswers = 0;
let wrongAnswers = 0;

// DOM elementy
const questionTextElement = document.getElementById('questionText');
const answerButtons = [
    document.getElementById('answer1'),
    document.getElementById('answer2'),
    document.getElementById('answer3')
];
const currentQuestionElement = document.getElementById('currentQuestion');
const correctAnswersElement = document.getElementById('correctAnswers');
const wrongAnswersElement = document.getElementById('wrongAnswers');
const successRateElement = document.getElementById('successRate');

// Funkce pro inicializaci testu
function initTest(category) {
    questions = getQuestionsByCategory(category)
        .sort(() => Math.random() - 0.5);
    
    currentQuestionIndex = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    
    showQuestion(currentQuestionIndex);
    updateStatistics();
}

// Zobrazení otázky
function showQuestion(index) {
    if (!questions[index]) {
        return;
    }

    const question = questions[index];
    questionTextElement.textContent = question.question;
    currentQuestionElement.textContent = index + 1;
    
    // Nastavení odpovědí
    answerButtons[0].textContent = question.answers[0];
    answerButtons[1].textContent = question.answers[1];
    answerButtons[2].textContent = question.answers[2];
    
    answerButtons.forEach((button, i) => {
        button.className = 'answer-button';
        button.onclick = () => checkAnswer(i);
        button.style.display = 'block'; // Zobrazení tlačítek pokud byly skryté
    });
}

// Kontrola odpovědi
function checkAnswer(answerIndex) {
    const question = questions[currentQuestionIndex];
    const isCorrect = answerIndex === question.correct_answer;
    
    // Vizuální zpětná vazba
    answerButtons[answerIndex].classList.add(isCorrect ? 'correct' : 'wrong');
    
    // Aktualizace statistik
    if (isCorrect) {
        correctAnswers++;
    } else {
        wrongAnswers++;
        answerButtons[question.correct_answer].classList.add('correct');
    }
    
    updateStatistics();
    
    // Deaktivace tlačítek
    answerButtons.forEach(button => {
        button.onclick = null;
    });
    
    // Přechod na další otázku po 2 sekundách
    setTimeout(() => {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            showQuestion(currentQuestionIndex);
        } else {
            // Konec testu
            questionTextElement.textContent = "Test dokončen!";
            answerButtons.forEach(button => {
                button.style.display = 'none';
            });
        }
    }, 2000);
}

// Aktualizace statistik
function updateStatistics() {
    const total = correctAnswers + wrongAnswers;
    const successRate = total === 0 ? 0 : Math.round((correctAnswers / total) * 100);
    
    correctAnswersElement.textContent = correctAnswers;
    wrongAnswersElement.textContent = wrongAnswers;
    successRateElement.textContent = `${successRate}%`;
}

// Spuštění testu při načtení stránky
initTest(); 