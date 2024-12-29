window.i18nData = window.i18nData || {};
window.i18nData.sk = {
    searchPlaceholder: "Vyhľadať časté otázky...",
    pageTitle: "Často kladené otázky",
    mainTitle: "Často kladené otázky",
    subtitle: "Často kladené otázky a riešenie problémov pre inteligentné hodinky",
    footer: {
        copyright: "© 2025 Shenzhen Tuobu Intelligent Big Data Co., Ltd.",
    },
    categories: {
        all: "Všetko",
        basic: "Základné použitie", 
        connection: "Bluetooth pripojenie",
        notification: "Upozornenia",
        health: "Zdravotné monitorovanie",
        data: "Synchronizácia údajov",
        watchface: "Nastavenia ciferníka",
        weather: "Zobrazenie počasia",
        device: "Správa zariadenia",
        other: "Ostatné"
    },
    faqData: [
        {
            category: "connection",
            question: "Prečo nemôžem nájsť moje hodinky?",
            answer: `
            Skontrolujte nasledujúce položky:

            1. Skontrolujte, či majú hodinky dostatok batérie. Ak je batéria vybitá, najprv ju nabite.

            2. Udržujte hodinky vo vzdialenosti do 0,5 metra od telefónu.

            3. Skontrolujte, či nie sú hodinky spárované s iným telefónom. Ak áno, najprv ich odpojte z pôvodného telefónu a zrušte Bluetooth párovanie v nastaveniach systému pred spárovaním s novým telefónom.

            4. V nastaveniach telefónu sa uistite, že je zapnutá funkcia Bluetooth. Konkrétne otvorte [Nastavenia] - [Bluetooth] a skontrolujte, či je prepínač Bluetooth zapnutý.

            5. Uistite sa, že aplikácii bolo udelené povolenie Bluetooth. Konkrétne otvorte [Nastavenia] - [Aplikácie] - [{app_name}] a skontrolujte, či bolo udelené povolenie Bluetooth.

            6. Skúste reštartovať Bluetooth telefónu:
            Metóda 1: Otvorte [Nastavenia] - [Bluetooth], vypnite Bluetooth a potom ho znova zapnite.
            Metóda 2: Na domovskej obrazovke telefónu potiahnite prstom nadol pre prístup do ovládacieho centra, potom kliknite na ikonu Bluetooth pre vypnutie a znova zapnutie Bluetooth.

            7. Obnovte továrenské nastavenia hodiniek. Konkrétne na hodinkách otvorte [Nastavenia] - [Systém] - [Obnoviť továrenské nastavenia] a vyberte [Potvrdiť].

            8. Reštartujte hodinky aj telefón a skúste sa znova pripojiť.

            {faq_note}Ak vyššie uvedené metódy problém nevyriešia, skúste odfotiť systémové informácie hodiniek a urobiť snímky obrazovky niektorých systémových informácií telefónu. Pošlite nám spätnú väzbu prostredníctvom funkcie spätnej väzby v aplikácii. Pri kontaktovaní nás sa snažte poskytnúť čo najviac užitočných informácií, aby sme mohli problém lepšie vyriešiť.`
        },
        {
            category: "connection",
            question: "Ako zistím, či sú hodinky úspešne pripojené k telefónu?",
            answer: `
            V mobilnej aplikácii sa zobrazuje stav zariadenia ako "Pripojené".

            Zároveň v systéme iOS otvorte [Nastavenia] - [Bluetooth], v zozname [Moje zariadenia] sa zobrazí názov Bluetooth vašich hodiniek so stavom "Pripojené" a modrým krúžkom s výkričníkom.

            Po kliknutí na výkričník uvidíte informácie o zariadení, ako je názov zariadenia, a všetky prepínače ako [Zdieľať systémové upozornenia] sú zapnuté.`
        },
        {
            category: "connection",
            question: "Bluetooth pripojenie sa často odpája, ako to zlepšiť?",
            answer: `
            Môžete vyskúšať nasledujúce spôsoby:

            1. Uistite sa, že telefón a hodinky sú v prostredí s minimálnym rušením signálu.

            2. Vyhnite sa súčasnému pripojeniu hodiniek k iným Bluetooth zariadeniam.

            3. Aktualizujte firmvér hodiniek a verziu mobilnej aplikácie.`
        },
        {
            category: "notification",
            question: "Hodinky neprijímajú upozornenia z telefónu, čo mám robiť?",
            answer: `
            Skontrolujte nasledujúce položky:

            1. Uistite sa, že hodinky sú pripojené k telefónu.

            2. V mobilnej aplikácii potvrďte, že ste povolili príslušné upozornenia na správy. Konkrétne otvorte [{app_name}] - [Zariadenie] - [Upozornenia na správy] a skontrolujte, či sú povolené upozornenia pre príslušné aplikácie.

            3. Potvrďte, že hodinky sú spárované s Bluetooth telefónu a je povolené zdieľanie systémových upozornení. Konkrétne v telefóne otvorte [Nastavenia] - [Bluetooth], potom kliknite na výkričník vedľa názvu Bluetooth hodiniek a skontrolujte, či je povolené [Zdieľanie systémových upozornení].

            4. Potvrďte, že v telefóne sú povolené upozornenia. Konkrétne v telefóne otvorte [Nastavenia] - [Upozornenia] a skontrolujte, či sú všetky nastavenia správne.

            5. V telefóne je nainštalovaná príslušná aplikácia pre hodinky a má povolené upozornenia. Napríklad pre WhatsApp otvorte v telefóne [Nastavenia] - [Aplikácie] - [WhatsApp] - [Upozornenia], skontrolujte, či je zapnuté [Povoliť upozornenia] a či sú správne nastavené typy upozornení.

            {faq_note}Ak vyššie uvedené metódy problém nevyriešia, skúste odfotiť systémové informácie hodiniek a urobiť snímky obrazovky niektorých systémových informácií telefónu. Pošlite nám spätnú väzbu prostredníctvom funkcie spätnej väzby v aplikácii. Pri kontaktovaní nás sa snažte poskytnúť čo najviac užitočných informácií, aby sme mohli problém lepšie vyriešiť.`
        },
        {
            category: "notification",
            question: "Hodinky prijímajú upozornenia len z niektorých aplikácií, ako to vyriešiť?",
            answer: `
            Uistite sa, že ste v upozorneniach mobilnej aplikácie samostatne povolili upozornenia pre požadované aplikácie a synchronizovali ich s hodinkami.

            Konkrétne otvorte [{app_name}] - [Zariadenie] - [Upozornenia na správy] a zapnite upozornenia pre príslušné aplikácie.`
        },
        {
            category: "data",
            question: "Ako môžem v mobilnej aplikácii zobraziť moje údaje o cvičení a zdraví?",
            answer: `
            Keď na hodinkách meriate údaje o cvičení a zdraví, hodinky automaticky zaznamenávajú údaje do hodiniek a pri pripojení k mobilnej aplikácii sa synchronizujú s mobilnou aplikáciou.
            
            Ak sa údaje ešte nesynchronizovali, môžete skúsiť potiahnuť nadol na domovskej obrazovke aplikácie pre manuálnu synchronizáciu údajov o cvičení a zdraví.
            
            Po dokončení synchronizácie môžete v aplikácii zobraziť údaje o srdcovom tepe, krokoch, spánku, strese, okysličení krvi, telesnej teplote, cvičení a ďalšie.`
        },
        {
            category: "health",
            question: "Moje údaje o cvičení a zdraví nie sú presné, čo mám robiť?",
            answer: `
            Uistite sa, že vaše osobné informácie sú správne vyplnené. Konkrétne, niektoré meracie algoritmy hodiniek závisia od vašich osobných údajov ako pohlavie, výška, hmotnosť, vek atď. Uistite sa, že tieto údaje sú presné, aby ste získali presnejšie údaje o cvičení a zdraví.`
        },
        {
            category: "data",
            question: "Údaje na hodinkách sa nezhodujú s údajmi v aplikácii, čo mám robiť?",
            answer: `
            Skontrolujte nasledujúce položky:

            1. Údaje z hodiniek sa synchronizovali s aplikáciou. Ak nie, potiahnite nadol na domovskej obrazovke aplikácie pre manuálnu synchronizáciu údajov o cvičení a zdraví a potom skontrolujte, či sa údaje zhodujú.

            2. Skontrolujte, či hodinky neboli pripojené k inému telefónu a či údaje neboli synchronizované s aplikáciou v inom telefóne.

            {faq_note}Vo všeobecnosti neodporúčame pripájať tie isté hodinky k viacerým telefónom alebo aplikáciám súčasne, pretože to môže viesť k nekonzistentnej synchronizácii údajov alebo dokonca k strate údajov. Okrem toho, pre zabezpečenie, že sa údaje nestratia, údaje v aplikácii za aktuálny deň sa kumulatívne sčítavajú, zatiaľ čo údaje v hodinkách sa po opätovnom spárovaní vymažú, čo môže viesť k nezhodám medzi údajmi v hodinkách a aplikácii. Napríklad pri údajoch o spánku, ak odpojíte hodinky ihneď po ich pripojení k mobilnej aplikácii, údaje v hodinkách sa nemusia stihnúť synchronizovať s aplikáciou (synchronizácia údajov zvyčajne trvá určitý čas kvôli veľkému množstvu údajov), takže údaje v hodinkách sa vymažú a v aplikácii sa môžu objaviť chýbajúce údaje o spánku. Preto odporúčame, ak potrebujete odpojiť hodinky, počkať po pripojení hodiniek k mobilnej aplikácii na dokončenie synchronizácie údajov pred odpojením hodiniek.`
        },
        {
            category: "weather",
            question: "Na hodinkách sa nezobrazuje počasie, ako to vyriešiť?",
            answer: `
            Skontrolujte nasledujúce položky:

            1. Potvrďte, že vaše hodinky podporujú funkciu počasia. Ak hodinky nepodporujú funkciu počasia, počasie sa nebude zobrazovať. Konkrétne skontrolujte, či menu hodiniek obsahuje položku [Počasie].

            2. Potvrďte, že [Lokalizačné služby] telefónu sú zapnuté. Konkrétne otvorte [Nastavenia] - [Súkromie a bezpečnosť] - [Lokalizačné služby] a skontrolujte, či sú lokalizačné služby zapnuté.

            3. Potvrďte, že {app_name} má povolenie používať lokalizačné služby. Konkrétne otvorte [Nastavenia] - [Aplikácie] - [{app_name}] - [Poloha] a skontrolujte, či je vybraná možnosť [Vždy] alebo [Pri používaní aplikácie].

            4. Potvrďte, že {app_name} má prístup k internetu. Konkrétne otvorte [{app_name}] - [Zariadenie] - [Nastavenia ciferníka] a skontrolujte, či aplikácia dokáže načítať zoznam ciferníkov z cloudu, samozrejme môžete to overiť aj inými spôsobmi. Ak nemáte prístup k internetu, odporúčame odinštalovať aplikáciu, reštartovať telefón, znova nainštalovať aplikáciu a pri prvom spustení povoliť aplikácii prístup k internetu.

            5. V mobilnej aplikácii skontrolujte, či je zapnuté posielanie počasia. Konkrétne otvorte [{app_name}] - [Zariadenie] - [Posielanie počasia] a skontrolujte, či je funkcia posielania počasia zapnutá.

            6. Skúste vypnúť prepínač [Posielanie počasia] a znova ho zapnúť, skontrolujte, či sa počasie zobrazuje normálne.

            {faq_note}Funkcia počasia závisí od aktuálnej polohy telefónu, ktorá sa používa na získanie informácií o počasí vo vašej oblasti. Okrem toho funkcia počasia závisí od prístupu k internetu. Ak je pripojenie telefónu k internetu nestabilné alebo je prístup aplikácie k sieti obmedzený, nebude možné získať informácie o počasí cez internet.<br/>
            Ak vyššie uvedené metódy problém nevyriešia, skúste odfotiť systémové informácie hodiniek a urobiť snímky obrazovky niektorých systémových informácií telefónu. Pošlite nám spätnú väzbu prostredníctvom funkcie spätnej väzby v aplikácii. Pri kontaktovaní nás sa snažte poskytnúť čo najviac užitočných informácií, aby sme mohli problém lepšie vyriešiť.`
        },
        {
            category: "weather",
            question: "Údaje o počasí na hodinkách nie sú presné, čo mám robiť?",
            answer: `
            Skontrolujte nasledujúce položky:

            1. Skontrolujte, či je GPS poloha telefónu presná. Ak GPS poloha telefónu nie je presná, údaje o počasí nemôžu byť presné. Odporúčame ísť na otvorené priestranstvo, zapnúť GPS telefónu a skontrolovať, či je možné normálne získať informácie o polohe.

            2. Na hodinkách skontrolujte čas aktualizácie počasia a potvrďte, či informácie o počasí nie sú zastarané. Ak sú informácie o počasí zastarané, skúste otvoriť mobilnú aplikáciu, prejsť do [Zariadenie] - [Posielanie počasia], skúste vypnúť posielanie počasia a znova ho zapnúť, skontrolujte, či sa počasie zobrazuje normálne.

            {faq_note}Ak vyššie uvedené metódy problém nevyriešia, skúste odfotiť systémové informácie hodiniek a urobiť snímky obrazovky niektorých systémových informácií telefónu. Pošlite nám spätnú väzbu prostredníctvom funkcie spätnej väzby v aplikácii. Pri kontaktovaní nás sa snažte poskytnúť čo najviac užitočných informácií, aby sme mohli problém lepšie vyriešiť.`
        },
        {
            category: "watchface",
            question: "Ako nahrať ciferník z cloudu do hodiniek",
            answer: `
            Postup:

            1. V aplikácii {app_name} otvorte [Zariadenie] - [Nastavenia ciferníka] a vyberte ciferník, ktorý sa vám páči.

            2. V zobrazenom rozhraní kliknite na [Synchronizovať ciferník].

            3. Počkajte na začiatok sťahovania ciferníka. Po dokončení sťahovania sa ciferník automaticky nahrá do hodiniek.

            4. Počkajte na dokončenie nahrávania ciferníka, hodinky automaticky zmenia ciferník.`
        },
        {
            category: "watchface",
            question: "Ako prispôsobiť ciferník a nahrať ho do hodiniek?",
            answer: `
            Postup:

            1. V aplikácii {app_name} otvorte [Zariadenie] - [Nastavenia ciferníka], potom kliknite na [Vstup pre prispôsobenie ciferníka] (prvý v ľavom hornom rohu s ikonou úprav v strede) pre vstup na stránku prispôsobenia ciferníka.

            2. Potom podľa svojich preferencií upravte pozadie ciferníka, polohu dátumu a času a štýl ciferníka.

            3. Kliknite na tlačidlo [Nastaviť ako ciferník].

            4. Počkajte na vytvorenie prispôsobeného ciferníka. Po dokončení sa ciferník automaticky nahrá do hodiniek.

            5. Počkajte na dokončenie nahrávania ciferníka, hodinky automaticky zmenia ciferník.`
        },
        {
            category: "basic",
            question: "Ako zapnúť a vypnúť inteligentné hodinky?",
            answer: `
            Postup:

            1. Zapnutie hodiniek: Stlačte a podržte bočné tlačidlo hodiniek 3-5 sekúnd, kým sa obrazovka nerozsvieti. Keď sú hodinky vybité, po približne 1 minúte nabíjania sa automaticky zapnú a prejdú na hlavnú obrazovku.

            2. Vypnutie hodiniek: Stlačte a podržte bočné tlačidlo hodiniek 3-5 sekúnd, v zobrazenom rozhraní vyberte [Vypnúť], kliknite na [Potvrdiť], hodinky zobrazia upozornenie "Goodbye" a potom sa automaticky vypnú.`
        },
        {
            category: "basic",
            question: "Ako obnoviť továrenské nastavenia inteligentných hodiniek?",
            answer: `
            Postup:

            Metóda 1: Obnovte továrenské nastavenia na hodinkách. Konkrétne na hodinkách otvorte [Nastavenia] - [Systém] - [Obnoviť továrenské nastavenia] a vyberte [Potvrdiť].

            Metóda 2: Obnovte továrenské nastavenia na hodinkách. Konkrétne stlačte a podržte bočné tlačidlo hodiniek 3-5 sekúnd, v zobrazenom rozhraní vyberte [Obnoviť továrenské nastavenia] a potom vyberte [Potvrdiť].

            Metóda 3: Obnovte továrenské nastavenia v mobilnej aplikácii. Konkrétne v mobilnej aplikácii otvorte [Zariadenie] - [Obnoviť továrenské nastavenia] a vyberte [Potvrdiť].`
        },
        {
            category: "basic",
            question: "Ako zrušiť párovanie aplikácie s inteligentnými hodinkami?",
            answer: `
            Postup:

            1. V mobilnej aplikácii otvorte stránku [Zariadenie], prejdite na spodok a vyberte [Zrušiť párovanie zariadenia], potom vyberte [Potvrdiť].

            2. Zrušte Bluetooth párovanie inteligentných hodiniek s telefónom. Konkrétne v telefóne otvorte [Nastavenia] - [Bluetooth], potom v zozname [Moje zariadenia] kliknite na výkričník vedľa názvu Bluetooth hodiniek a vyberte [Ignorovať toto zariadenie].

            {faq_note}Po zrušení párovania hodiniek musíte manuálne zrušiť Bluetooth párovanie inteligentných hodiniek s telefónom v systémových nastaveniach, inak pri ďalšom párovaní nemusí byť možné hodinky vyhľadať, čo znemožní párovanie.`
        },
        {
            category: "basic",
            question: "Ako odmietnuť hovor?",
            answer: `
            Keď majú hodinky upozornenie na prichádzajúci hovor, stlačte a podržte bočné tlačidlo hodiniek 3 sekundy pre odmietnutie hovoru.`
        },
        {
            category: "basic",
            question: "Ako používať fotografovanie potrasením?",
            answer: `
            Postup:

            1. V mobilnej aplikácii otvorte [Zariadenie] - [Fotografovanie potrasením]. Ak sa zobrazí výzva na povolenie "prístupu k fotoaparátu telefónu", vyberte [Povoliť].

            2. Potraste hodinkami alebo kliknite na ikonu fotoaparátu na hodinkách pre fotografovanie.`
        },
        {
            category: "basic",
            question: "Ako používať ovládanie hudby?",
            answer: `
            Keď sú hodinky úspešne pripojené k telefónu, otvorte prehrávač hudby v telefóne, prehrajte hudbu zo zoznamu na stiahnutie, na rozhraní hudby zariadenia stlačte ľavé a pravé tlačidlo pre prepínanie, kliknite na stredné tlačidlo pre pozastavenie alebo prehrávanie hudby.

            {faq_note}Niektoré zabudované prehrávače hudby v telefónoch nie sú podporované, podporované sú prehrávače QQ Music, NetEase Cloud Music, PLAY Music atď.`
        },
        {
            category: "device",
            question: "Aktualizácia firmvéru hodiniek zlyhala, čo mám robiť?",
            answer: `
            Ak aktualizácia firmvéru hodiniek zlyhala, skúste nasledujúce metódy:

            1. Uistite sa, že hodinky majú dostatok batérie, nízka úroveň batérie môže spôsobiť zlyhanie aktualizácie firmvéru.

            2. Uistite sa, že pripojenie medzi hodinkami a telefónom je stabilné, nestabilné pripojenie môže spôsobiť zlyhanie aktualizácie firmvéru.

            3. Uistite sa, že hodinky a telefón sú v rovnakom sieťovom prostredí, nestabilná sieť môže spôsobiť zlyhanie aktualizácie firmvéru.

            4. Počas procesu aktualizácie firmvéru neodpájajte hodinky od telefónu, inak môže dôjsť k zlyhaniu aktualizácie firmvéru.

            5. Počas procesu aktualizácie firmvéru neukončujte proces aplikácie, inak môže dôjsť k zlyhaniu aktualizácie firmvéru.

            6. Počas procesu aktualizácie firmvéru neopúšťajte rozhranie aktualizácie firmvéru ani nevypínajte obrazovku, inak môže dôjsť k zlyhaniu aktualizácie firmvéru.

            7. Niektoré hodinky po zlyhaní aktualizácie vyžadujú dvojminútové čakanie (počas ktorého zariadenie nereaguje) pred opätovnou aktiváciou pripojenia, buďte trpezliví.

            {faq_note}Ak vyššie uvedené metódy problém nevyriešia, skúste odfotiť systémové informácie hodiniek a urobiť snímky obrazovky niektorých systémových informácií telefónu. Pošlite nám spätnú väzbu prostredníctvom funkcie spätnej väzby v aplikácii. Pri kontaktovaní nás sa snažte poskytnúť čo najviac užitočných informácií, aby sme mohli problém lepšie vyriešiť.`
        },
        {
            category: "device",
            question: "Zariadenie nereaguje ani po určitom čase nabíjania, aký je dôvod?",
            answer: `
            Keď sa hodinky dlho nepoužívajú, prejdú do stavu nízkej batérie. Prosím, nabíjajte ich približne pol hodiny pomocou nabíjačky telefónu pre aktiváciu.

            {faq_note}Pri nabíjaní je najlepšie použiť nabíjačku telefónu, prúd z počítača je príliš nízky a pri nízkej batérii môže byť ťažké nabiť zariadenie.`
        },
        {
            category: "device",
            question: "Prečo sa obrazovka nerozsvieti pri zdvihnutí ruky?",
            answer: `
            Skontrolujte nasledujúce položky:

            1. Skontrolujte, či nie je v aplikácii vypnutá funkcia rozsvietenia obrazovky pri zdvihnutí zápästia a či nastavenie časového obdobia vyhovuje vašim potrebám. Po pripojení Bluetooth otvorte v aplikácii {app_name} stránku [Zariadenie], zapnite [Rozsvietenie pri otočení zápästia] a nastavte časové obdobie podľa vašich potrieb pre rozsvietenie obrazovky pri otočení zápästia počas tohto obdobia.

            2. Skontrolujte, či zariadenie nemá zapnutý režim nerušenia, keď je zariadenie v režime nerušenia, obrazovka sa pri zdvihnutí nerozsvieti.

            3. Keď potrebujete vidieť čas, zdvihnite zápästie a otočte obrazovku smerom k sebe.

            {faq_note}Ak vyššie uvedené metódy problém nevyriešia, skúste odfotiť systémové informácie hodiniek a urobiť snímky obrazovky niektorých systémových informácií telefónu. Pošlite nám spätnú väzbu prostredníctvom funkcie spätnej väzby v aplikácii. Pri kontaktovaní nás sa snažte poskytnúť čo najviac užitočných informácií, aby sme mohli problém lepšie vyriešiť.`
        },
        {
            category: "device",
            question: "Koľko budíkov môžem maximálne nastaviť na hodinkách?",
            answer: `
            To závisí od vašich hodiniek, vo všeobecnosti môžu hodinky nastaviť 5 budíkov.`
        },
        {
            category: "device",
            question: "Ako nastaviť čas na hodinkách?",
            answer: `
            Po pripojení hodiniek k telefónu sa čas automaticky synchronizuje, nie je potrebné manuálne nastavenie.`
        },
        {
            category: "device",
            question: "Ako nastaviť jazyk hodiniek?",
            answer: `
            Vo všeobecnosti sa jazyk automaticky synchronizuje po pripojení hodiniek k telefónu, nie je potrebné manuálne nastavenie.

            {faq_note}Niektoré hodinky podporujú nastavenie jazyka priamo na hodinkách. Konkrétne na hodinkách otvorte [Menu] - [Nastavenia] - [Jazyk] a vyberte požadovaný jazyk.`
        },
        {
            category: "other",
            question: "Prečo sa skrátila výdrž batérie?",
            answer: `
            Ak sú na hodinkách zapnuté funkcie ako rozsvietenie pri otočení zápästia, pravidelné meranie srdcového tepu atď., zvýši sa spotreba energie a skráti sa výdrž batérie.`
        },
        {
            category: "other",
            question: "Sú hodinky vodotesné?",
            answer: `
            Pokiaľ ide o vodotesnosť zariadenia, pozrite si prosím návod k vášmu konkrétnemu modelu, aby ste zistili, či podporuje bežnú vodotesnosť alebo vodotesnosť pri plávaní. Nie je vhodné pre potápanie, morskú vodu, skákanie do vody, horúcu vodu, kúpele, saunu alebo iné vodné či hlbokovodné aktivity s vysokým tlakom vody. Kožené a kovové remienky nie sú vhodné na plávanie. Vodotesnosť nie je trvalá vlastnosť a ochranná funkcia sa môže znížiť každodenným používaním.`
        }

    ]
}; 