window.i18nData = window.i18nData || {};
window.i18nData.hr = {
    searchPlaceholder: "Pretraži često postavljana pitanja...",
    pageTitle: "Često postavljana pitanja",
    mainTitle: "Često postavljana pitanja",
    subtitle: "Vodič za rješavanje problema i često postavljana pitanja o korištenju pametnog sata",
    footer: {
        copyright: "© 2025 Shenzhen Tuobu Smart Big Data Co., Ltd.",
    },
    categories: {
        all: "Sve",
        basic: "Osnovno korištenje",
        connection: "Bluetooth veza",
        notification: "Obavijesti",
        health: "Zdravstveni nadzor",
        data: "Sinkronizacija podataka", 
        watchface: "Postavke brojčanika",
        weather: "Prikaz vremena",
        device: "Upravljanje uređajem",
        other: "Ostalo"
    },
    faqData: [
        {
            category: "connection",
            question: "Zašto ne mogu pronaći svoj sat?",
            answer: `
            Molimo provjerite sljedeće:

            1. Provjerite ima li sat dovoljno baterije. Ako je baterija slaba, prvo ga napunite.

            2. Držite sat unutar 0.5 metara od telefona.

            3. Provjerite je li sat već povezan s drugim telefonom. Ako jest, prvo ga odspojite s originalnog telefona i uklonite Bluetooth uparivanje u postavkama sustava prije ponovnog povezivanja.

            4. U postavkama telefona provjerite je li Bluetooth uključen. Konkretno, idite na [Postavke] - [Bluetooth] i provjerite je li Bluetooth prekidač uključen.

            5. Provjerite jesu li odobrene Bluetooth dozvole za aplikaciju. Konkretno, idite na [Postavke] - [Aplikacije] - [{app_name}] i provjerite jesu li Bluetooth dozvole odobrene.

            6. Pokušajte ponovno pokrenuti Bluetooth na telefonu:
            Metoda 1: Idite na [Postavke] - [Bluetooth], isključite pa ponovno uključite Bluetooth.
            Metoda 2: Povucite prema dolje s vrha zaslona telefona za pristup kontrolnom centru, dodirnite Bluetooth ikonu za isključivanje pa ponovno uključivanje.

            7. Resetirajte sat na tvorničke postavke. Konkretno, na satu idite na [Postavke] - [Sustav] - [Tvorničke postavke] i odaberite [Potvrdi].

            8. Ponovno pokrenite sat i telefon, pa pokušajte ponovno povezati.

            {faq_note}Ako gore navedene metode ne riješe problem, pokušajte fotografirati sistemske informacije sata i snimiti neke sistemske informacije telefona, te nam ih pošaljite putem funkcije povratnih informacija u aplikaciji. Kada nas kontaktirate, pokušajte pružiti što više korisnih informacija kako bismo vam mogli bolje pomoći u rješavanju problema.`
        },
        {
            category: "connection", 
            question: "Kako mogu potvrditi da su sat i telefon uspješno povezani?",
            answer: `
            U mobilnoj aplikaciji, status uređaja prikazuje "Povezano".

            Također, na iOS-u idite na [Postavke] - [Bluetooth], vaš sat bi trebao biti prikazan na popisu "Moji uređaji" kao "Povezano" s plavim krugom i uskličnikom.

            Dodirnite uskličnik za prikaz informacija o uređaju, gdje bi prekidači poput "Dijeljenje sistemskih obavijesti" trebali biti uključeni.`
        },
        {
            category: "connection",
            question: "Bluetooth veza često se prekida, kako to popraviti?",
            answer: `
            Pokušajte sljedeće:

            1. Osigurajte da su telefon i sat u okruženju s minimalnim smetnjama signala.

            2. Izbjegavajte istovremeno povezivanje sata s drugim Bluetooth uređajima.

            3. Ažurirajte firmware sata i verziju mobilne aplikacije.`
        },
        {
            category: "notification",
            question: "Ne primam obavijesti na satu, što da učinim?",
            answer: `
            Molimo provjerite sljedeće:

            1. Provjerite jesu li sat i telefon povezani.

            2. U mobilnoj aplikaciji potvrdite da ste omogućili odgovarajuće obavijesti. Konkretno, otvorite [{app_name}] - [Uređaj] - [Obavijesti] i provjerite jesu li obavijesti omogućene za odgovarajuće aplikacije.

            3. Potvrdite da su sat i telefon upareni preko Bluetootha i da je omogućeno dijeljenje sistemskih obavijesti. Konkretno, na telefonu idite na [Postavke] - [Bluetooth], dodirnite uskličnik pored naziva sata na popisu "Moji uređaji" i provjerite je li omogućeno "Dijeljenje sistemskih obavijesti".

            4. Potvrdite da su obavijesti omogućene na telefonu. Konkretno, na telefonu idite na [Postavke] - [Obavijesti] i provjerite jesu li sve postavke ispravne.

            5. Provjerite je li odgovarajuća aplikacija instalirana na telefonu i ima li dozvolu za obavijesti. Na primjer za WhatsApp, na telefonu idite na [Postavke] - [Aplikacije] - [WhatsApp] - [Obavijesti], provjerite je li "Dozvoli obavijesti" uključeno i jesu li postavke vrste obavijesti ispravne.

            {faq_note}Ako gore navedene metode ne riješe problem, pokušajte fotografirati sistemske informacije sata i snimiti neke sistemske informacije telefona, te nam ih pošaljite putem funkcije povratnih informacija u aplikaciji. Kada nas kontaktirate, pokušajte pružiti što više korisnih informacija kako bismo vam mogli bolje pomoći u rješavanju problema.`
        },
        {
            category: "notification",
            question: "Primam obavijesti samo od nekih aplikacija, kako to riješiti?",
            answer: `
            Provjerite jeste li pojedinačno omogućili dozvole za obavijesti za željene aplikacije u mobilnoj aplikaciji i sinkronizirali ih sa satom.

            Konkretno, otvorite [{app_name}] - [Uređaj] - [Obavijesti] i uključite obavijesti za odgovarajuće aplikacije.`
        },
        {
            category: "data",
            question: "Kako mogu pregledati svoje podatke o vježbanju i zdravlju u mobilnoj aplikaciji?",
            answer: `
            Kada mjerite podatke o vježbanju i zdravlju na satu, sat automatski bilježi podatke. Kada se povežete s mobilnom aplikacijom, podaci će se sinkronizirati s aplikacijom.
            
            Ako podaci još nisu sinkronizirani, možete pokušati povući prema dolje na početnom zaslonu aplikacije za ručnu sinkronizaciju podataka o vježbanju i zdravlju.
            
            Nakon završetka sinkronizacije, možete pregledati podatke o pulsu, koracima, spavanju, stresu, zasićenosti kisikom, temperaturi, vježbanju i drugo u aplikaciji.`
        },
        {
            category: "health",
            question: "Moji podaci o vježbanju i zdravlju nisu točni, što da učinim?",
            answer: `
            Provjerite jesu li vaši osobni podaci točno ispunjeni. Konkretno, neki algoritmi mjerenja na satu ovise o vašem spolu, visini, težini, dobi i drugim osobnim informacijama. Molimo osigurajte točnost tih podataka za dobivanje preciznijih podataka o vježbanju i zdravlju.`
        },
        {
            category: "data",
            question: "Podaci na satu ne podudaraju se s onima u aplikaciji, što da učinim?",
            answer: `
            Molimo provjerite sljedeće:

            1. Jesu li podaci sa sata sinkronizirani s aplikacijom. Ako nisu, povucite prema dolje na početnom zaslonu aplikacije za ručnu sinkronizaciju podataka o vježbanju i zdravlju, zatim provjerite jesu li podaci usklađeni.

            2. Je li sat bio povezan s drugim telefonima i jesu li podaci možda sinkronizirani s aplikacijom na drugom telefonu.

            {faq_note}Općenito ne preporučujemo povezivanje istog sata s više telefona ili aplikacija istovremeno jer to može dovesti do neusklađenosti podataka ili čak gubitka podataka. Također, kako bi se spriječio gubitak podataka, podaci u aplikaciji za trenutni dan se zbrajaju kumulativno, dok se podaci na satu brišu nakon ponovnog uparivanja. Ako ste ponovno uparili sat, to može dovesti do nepodudaranja podataka između sata i aplikacije. Na primjer, ako odspojite sat odmah nakon povezivanja s mobilnom aplikacijom, podaci sa sata možda se neće stići sinkronizirati s aplikacijom (sinkronizacija obično traje neko vrijeme zbog količine podataka). Tada će se podaci na satu izbrisati, a u aplikaciji će nedostajati podaci o spavanju. Stoga preporučujemo da, ako stvarno trebate odspojiti sat, pričekate da se podaci sa sata u potpunosti sinkroniziraju prije odspajanja.`
        },
        {
            category: "weather",
            question: "Vrijeme se ne prikazuje na satu, kako to riješiti?",
            answer: `
            Molimo provjerite sljedeće:

            1. Potvrdite podržava li vaš sat funkciju vremenske prognoze. Ako sat ne podržava vremensku prognozu, neće moći prikazivati vrijeme. Konkretno, provjerite postoji li [Vrijeme] u izborniku sata.

            2. Potvrdite da su [Lokacijske usluge] uključene na telefonu. Konkretno, idite na [Postavke] - [Privatnost i sigurnost] - [Lokacijske usluge] i provjerite jesu li lokacijske usluge omogućene.

            3. Potvrdite da {app_name} ima dozvolu za korištenje lokacijskih usluga. Konkretno, idite na [Postavke] - [Aplikacije] - [{app_name}] - [Lokacija] i provjerite je li odabrano [Uvijek] ili [Tijekom korištenja aplikacije].

            4. Potvrdite da {app_name} ima normalan pristup internetu. Konkretno, otvorite [{app_name}] - [Uređaj] - [Postavke brojčanika] i provjerite može li aplikacija normalno dohvatiti popis brojčanika u oblaku. Naravno, to možete provjeriti i drugim metodama. Ako ne možete normalno pristupiti internetu, preporučujemo da izbrišete aplikaciju, ponovno pokrenete telefon i ponovno instalirate aplikaciju. Ne zaboravite dozvoliti aplikaciji pristup internetu kada je prvi put otvorite.

            5. U mobilnoj aplikaciji provjerite je li omogućeno slanje vremenske prognoze. Konkretno, otvorite [{app_name}] - [Uređaj] - [Slanje vremenske prognoze] i provjerite je li omogućeno slanje vremenske prognoze.

            6. Pokušajte isključiti pa ponovno uključiti prekidač [Slanje vremenske prognoze] i provjerite prikazuje li se vrijeme normalno.

            {faq_note}Funkcija vremenske prognoze ovisi o trenutnoj lokaciji telefona, prvenstveno za dobivanje informacija o vremenu za vašu lokaciju. Također, funkcija vremenske prognoze ovisi o pristupu internetu. Ako je mrežna veza telefona nestabilna ili je pristup mreži aplikacije ograničen, neće biti moguće dohvatiti informacije o vremenu putem interneta.<br/>
            Ako gore navedene metode ne riješe problem, pokušajte fotografirati sistemske informacije sata i snimiti neke sistemske informacije telefona, te nam ih pošaljite putem funkcije povratnih informacija u aplikaciji. Kada nas kontaktirate, pokušajte pružiti što više korisnih informacija kako bismo vam mogli bolje pomoći u rješavanju problema.`
        },
        {
            category: "weather",
            question: "Podaci o vremenu na satu nisu točni, što da učinim?",
            answer: `
            Provjerite sljedeće:

            1. Je li GPS lokacija telefona točna. Ako GPS lokacija telefona nije točna, ni podaci o vremenu neće biti točni. Preporučujemo da uključite GPS telefona na otvorenom prostoru i provjerite može li normalno dohvatiti informacije o lokaciji.

            2. Na satu provjerite vrijeme ažuriranja vremenske prognoze i potvrdite jesu li informacije o vremenu istekle. Ako su informacije o vremenu istekle, pokušajte otvoriti mobilnu aplikaciju, idite na [Uređaj] - [Slanje vremenske prognoze], pokušajte isključiti slanje vremenske prognoze pa ga ponovno uključiti i provjerite prikazuje li se vrijeme normalno.

            {faq_note}Ako gore navedene metode ne riješe problem, pokušajte fotografirati sistemske informacije sata i snimiti neke sistemske informacije telefona, te nam ih pošaljite putem funkcije povratnih informacija u aplikaciji. Kada nas kontaktirate, pokušajte pružiti što više korisnih informacija kako bismo vam mogli bolje pomoći u rješavanju problema.`
        },
        {
            category: "watchface",
            question: "Kako prenijeti brojčanik iz oblaka na sat?",
            answer: `
            Koraci:

            1. U {app_name}, otvorite [Uređaj] - [Postavke brojčanika] i odaberite brojčanik koji vam se sviđa.

            2. U skočnom prozoru dodirnite [Sinkroniziraj brojčanik].

            3. Pričekajte da započne preuzimanje brojčanika. Nakon završetka preuzimanja, brojčanik će se automatski prenijeti na sat.

            4. Pričekajte da se prijenos brojčanika završi, sat će automatski promijeniti brojčanik.`
        },
        {
            category: "watchface",
            question: "Kako prilagoditi brojčanik i prenijeti ga na sat?",
            answer: `
            Koraci:

            1. U {app_name}, otvorite [Uređaj] - [Postavke brojčanika], zatim dodirnite [Ulaz za prilagođeni brojčanik] (prvi u gornjem lijevom kutu, s ikonom za uređivanje u sredini) za ulazak na stranicu prilagođenog brojčanika.

            2. Zatim prema svojim preferencijama modificirajte pozadinu brojčanika, položaj datuma i vremena te stil brojčanika.

            3. Dodirnite gumb [Postavi kao brojčanik].

            4. Pričekajte da se generira prilagođeni brojčanik. Nakon generiranja, automatski će se prenijeti na sat.

            5. Pričekajte da se prijenos brojčanika završi, sat će automatski promijeniti brojčanik.`
        },
        {
            category: "basic",
            question: "Kako uključiti i isključiti pametni sat?",
            answer: `
            Koraci:

            1. Uključivanje sata: Pritisnite i držite bočni gumb sata 3-5 sekundi dok se zaslon ne upali. Kada je sat prazan, automatski će se uključiti i ući na glavni zaslon nakon otprilike 1 minute punjenja.

            2. Isključivanje sata: Pritisnite i držite bočni gumb sata 3-5 sekundi, u skočnom prozoru odaberite [Isključi], dodirnite [Potvrdi], sat će prikazati poruku "Goodbye" i zatim će se automatski isključiti.`
        },
        {
            category: "basic",
            question: "Kako vratiti pametni sat na tvorničke postavke?",
            answer: `
            Koraci:

            Metoda 1: Vratite na tvorničke postavke na satu. Konkretno, na satu otvorite [Postavke] - [Sustav] - [Tvorničke postavke], zatim odaberite [Potvrdi].

            Metoda 2: Vratite na tvorničke postavke na satu. Konkretno, pritisnite i držite bočni gumb sata 3-5 sekundi, u skočnom prozoru odaberite [Tvorničke postavke], zatim odaberite [Potvrdi].

            Metoda 3: Vratite na tvorničke postavke u mobilnoj aplikaciji. Konkretno, u mobilnoj aplikaciji otvorite [Uređaj] - [Vrati na tvorničke postavke], zatim odaberite [Potvrdi].`
        },
        {
            category: "basic",
            question: "Kako odspojiti aplikaciju od pametnog sata?",
            answer: `
            Koraci:

            1. U mobilnoj aplikaciji otvorite stranicu [Uređaj], pomaknite se do dna, zatim odaberite [Odspoji uređaj] i odaberite [Potvrdi].

            2. Poništite Bluetooth uparivanje između pametnog sata i telefona. Konkretno, na telefonu idite na [Postavke] - [Bluetooth], zatim dodirnite uskličnik pored naziva Bluetooth sata na popisu [Moji uređaji] i odaberite [Zaboravi ovaj uređaj].

            {faq_note}Nakon odspajanja sata, obavezno ručno poništite Bluetooth uparivanje između pametnog sata i telefona u postavkama sustava, inače možda nećete moći pronaći sat pri sljedećem povezivanju, što će onemogućiti uparivanje.`
        },
        {
            category: "basic",
            question: "Kako prekinuti poziv?",
            answer: `
            Kada sat primi obavijest o dolaznom pozivu, pritisnite i držite bočni gumb sata 3 sekunde za prekid poziva.`
        },
        {
            category: "basic",
            question: "Kako koristiti funkciju fotografiranja protresanjem?",
            answer: `
            Koraci:

            1. U mobilnoj aplikaciji otvorite [Uređaj] - [Fotografiranje protresanjem]. Ako vas pita za dozvolu za "pristup kameri telefona", odaberite [Dozvoli].

            2. Protresite sat ili dodirnite ikonu kamere na satu za fotografiranje.`
        },
        {
            category: "basic",
            question: "Kako koristiti kontrolu glazbe?",
            answer: `
            Kada je sat uspješno povezan s telefonom, otvorite music player na telefonu, reproducirajte glazbu s popisa za preuzimanje, na sučelju glazbe na uređaju pritisnite lijevo ili desno za promjenu, dodirnite srednji gumb za pauziranje ili reprodukciju glazbe.

            {faq_note}Neki ugrađeni music playeri telefona nisu podržani, ali podržani su QQ Music Player, NetEase Cloud Music Player, PLAY Music itd.`
        },
        {
            category: "device",
            question: "Nadogradnja firmwarea sata nije uspjela, što da učinim?",
            answer: `
            Ako nadogradnja firmwarea sata nije uspjela, pokušajte sljedeće metode:

            1. Provjerite ima li sat dovoljno baterije. Niska razina baterije može uzrokovati neuspjeh nadogradnje firmwarea.

            2. Provjerite je li veza između sata i telefona stabilna. Nestabilna veza može uzrokovati neuspjeh nadogradnje firmwarea.

            3. Provjerite jesu li sat i telefon u istom mrežnom okruženju. Nestabilna mreža može uzrokovati neuspjeh nadogradnje firmwarea.

            4. Tijekom nadogradnje firmwarea nemojte prekidati vezu između sata i telefona jer to može uzrokovati neuspjeh nadogradnje.

            5. Tijekom nadogradnje firmwarea nemojte ubiti proces aplikacije jer to može uzrokovati neuspjeh nadogradnje.

            6. Tijekom nadogradnje firmwarea nemojte izaći iz sučelja za nadogradnju ili isključiti zaslon jer to može uzrokovati neuspjeh nadogradnje.

            7. Neki satovi nakon neuspjele nadogradnje trebaju dvije minute čekanja (tijekom kojih uređaj ne reagira) prije ponovne aktivacije veze, molimo budite strpljivi.

            {faq_note}Ako gore navedene metode ne riješe problem, pokušajte fotografirati sistemske informacije sata i snimiti neke sistemske informacije telefona, te nam ih pošaljite putem funkcije povratnih informacija u aplikaciji. Kada nas kontaktirate, pokušajte pružiti što više korisnih informacija kako bismo vam mogli bolje pomoći u rješavanju problema.`
        },
        {
            category: "device",
            question: "Uređaj ne reagira nakon nekog vremena punjenja, koji je razlog?",
            answer: `
            Kada se sat dugo ne koristi, ulazi u stanje niske baterije. Molimo punite ga oko pola sata pomoću punjača za telefon kako biste ga aktivirali.

            {faq_note}Prilikom punjenja najbolje je koristiti punjač za telefon jer USB priključci računala mogu imati preslabu struju za punjenje kada je baterija prazna.`
        },
        {
            category: "device",
            question: "Zašto se zaslon ne pali podizanjem ruke?",
            answer: `
            Molimo provjerite sljedeće:

            1. Provjerite je li funkcija paljenja zaslona podizanjem ruke isključena u aplikaciji i odgovaraju li postavke vremenskog razdoblja vašim potrebama. Nakon Bluetooth povezivanja, u {app_name} na stranici [Uređaj], uključite [Paljenje zaslona okretanjem zgloba] i postavite vremensko razdoblje koje odgovara vašim potrebama za paljenje zaslona okretanjem zgloba.

            2. Provjerite je li na uređaju uključen način Ne ometaj jer zaslon neće reagirati na podizanje kada je uključen način Ne ometaj.

            3. Kada želite vidjeti vrijeme, podignite zglob i okrenite zaslon prema sebi.

            {faq_note}Ako gore navedene metode ne riješe problem, pokušajte fotografirati sistemske informacije sata i snimiti neke sistemske informacije telefona, te nam ih pošaljite putem funkcije povratnih informacija u aplikaciji. Kada nas kontaktirate, pokušajte pružiti što više korisnih informacija kako bismo vam mogli bolje pomoći u rješavanju problema.`
        },
        {
            category: "device",
            question: "Koliko alarma mogu maksimalno postaviti na satu?",
            answer: `
            To ovisi o vašem modelu sata. Obično sat može imati postavljeno 5 alarma.`
        },
        {
            category: "device",
            question: "Kako podesiti vrijeme na satu?",
            answer: `
            Sat će automatski sinkronizirati vrijeme kada se poveže s telefonom, nije potrebno ručno podešavanje.`
        },
        {
            category: "device",
            question: "Kako postaviti jezik na satu?",
            answer: `
            Obično će sat automatski sinkronizirati jezik kada se poveže s telefonom, nije potrebno ručno podešavanje.

            {faq_note}Neki satovi podržavaju postavljanje jezika na samom satu. Konkretno, na satu otvorite [Izbornik] - [Postavke] - [Jezik], zatim odaberite željeni jezik.`
        },
        {
            category: "other",
            question: "Zašto se vrijeme trajanja baterije smanjilo?",
            answer: `
            Ako su na satu omogućene funkcije poput paljenja zaslona podizanjem ruke i periodičnog mjerenja pulsa, to će povećati potrošnju baterije i smanjiti vrijeme trajanja baterije.`
        },
        {
            category: "other",
            question: "Je li sat vodootporan?",
            answer: `
            Za informacije o vodootpornosti uređaja, molimo pogledajte priručnik za odgovarajući model sata koji ste kupili kako biste potvrdili podržava li vodootpornost za svakodnevnu upotrebu ili plivanje. Nije prikladan za ronjenje, morsku vodu, skakanje u vodu, vruće tuširanje, termalne izvore, saunu ili druge aktivnosti s vodom ili dubokom vodom pod visokim pritiskom; kožni i metalni remeni nisu prikladni za plivanje. Vodootpornost nije trajna značajka i zaštitna svojstva mogu se smanjiti zbog svakodnevnog trošenja.`
        }

    ]
}; 