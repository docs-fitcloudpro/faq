window.i18nData = window.i18nData || {};
window.i18nData.da = {
    searchPlaceholder: "Søg i FAQ...",
    pageTitle: "FAQ",
    mainTitle: "FAQ",
    subtitle: "Ofte stillede spørgsmål og fejlfinding for smartwatch",
    footer: {
        copyright: "© 2025 Shenzhen Tuobu Intelligent Big Data Co., Ltd",
    },
    categories: {
        all: "Alle",
        basic: "Grundlæggende brug",
        connection: "Bluetooth-forbindelse", 
        notification: "Notifikationer",
        health: "Sundhedsovervågning",
        data: "Datasynkronisering",
        watchface: "Urskive-indstillinger",
        weather: "Vejrvisning",
        device: "Enhedshåndtering",
        other: "Andet"
    },
    faqData: [
        {
            category: "connection",
            question: "Hvorfor kan jeg ikke finde mit ur?",
            answer: `
            Tjek venligst følgende:

            1. Kontroller at uret har tilstrækkelig strøm. Oplad det hvis nødvendigt.

            2. Hold uret inden for 0,5 meter fra telefonen.

            3. Kontroller om uret er forbundet til en anden telefon. Hvis ja, fjern først parringen på den oprindelige telefon og i telefonens Bluetooth-indstillinger før du forbinder det igen.

            4. I telefonens indstillinger, sørg for at Bluetooth er aktiveret. Gå til [Indstillinger] - [Bluetooth] og tjek om Bluetooth er slået til.

            5. Sørg for at appen har Bluetooth-tilladelser. Gå til [Indstillinger] - [Apps] - [{app_name}] og tjek om Bluetooth-tilladelser er givet.

            6. Prøv at genstarte telefonens Bluetooth:
            Metode 1: Gå til [Indstillinger] - [Bluetooth], slå Bluetooth fra og til igen.
            Metode 2: Træk ned fra toppen af skærmen for at åbne kontrolcenteret, tryk på Bluetooth-ikonet for at slå det fra og til igen.

            7. Nulstil uret til fabriksindstillinger. På uret, gå til [Indstillinger] - [System] - [Fabriksnulstilling] og vælg [Bekræft].

            8. Genstart både ur og telefon, og prøv at forbinde igen.

            {faq_note}Hvis ovenstående ikke løser problemet, tag venligst et billede af urets systeminfo og screenshots af telefonens relevante systeminfo, og send det til os via feedback-funktionen i appen. Jo flere relevante oplysninger du kan give os, jo bedre kan vi hjælpe med at løse problemet.`
        },
        {
            category: "connection",
            question: "Hvordan bekræfter jeg at uret er forbundet til telefonen?",
            answer: `
            I telefon-appen vises enhedens status som "Forbundet".

            På iOS, gå til [Indstillinger] - [Bluetooth], dit urs Bluetooth-navn vil være vist i "Mine enheder" listen som "Forbundet" med et blåt udråbstegn.

            Tryk på udråbstegnet for at se enhedsinfo, og bekræft at indstillinger som "Del systemnotifikationer" er aktiveret.`
        },
        {
            category: "connection",
            question: "Bluetooth-forbindelsen afbrydes ofte, hvad kan jeg gøre?",
            answer: `
            Prøv følgende:

            1. Sørg for at telefon og ur er i et miljø med minimal signalforstyrrelser.

            2. Undgå at have uret forbundet til andre Bluetooth-enheder samtidig.

            3. Opdater urets firmware og telefon-appen til nyeste version.`
        },
        {
            category: "notification",
            question: "Jeg modtager ikke notifikationer på mit ur, hvad skal jeg gøre?",
            answer: `
            Tjek venligst følgende:

            1. Bekræft at uret er forbundet til telefonen.

            2. Bekræft at du har aktiveret notifikationer i telefon-appen. Gå til [{app_name}] - [Enhed] - [Notifikationer] og tjek om notifikationer er aktiveret for de relevante apps.

            3. Bekræft at uret er parret med telefonens Bluetooth og at systemnotifikationer er delt. På telefonen, gå til [Indstillinger] - [Bluetooth], tryk på udråbstegnet ved siden af urets Bluetooth-navn og tjek om "Del systemnotifikationer" er aktiveret.

            4. Bekræft at notifikationstilladelser er aktiveret på telefonen. Gå til [Indstillinger] - [Notifikationer] og tjek at alle indstillinger er korrekte.

            5. Bekræft at den relevante app er installeret på telefonen og har notifikationstilladelser. For eksempel med WhatsApp: Gå til [Indstillinger] - [Apps] - [WhatsApp] - [Notifikationer], tjek at "Tillad notifikationer" er aktiveret og at notifikationsindstillingerne er korrekte.

            {faq_note}Hvis ovenstående ikke løser problemet, tag venligst et billede af urets systeminfo og screenshots af telefonens relevante systeminfo, og send det til os via feedback-funktionen i appen. Jo flere relevante oplysninger du kan give os, jo bedre kan vi hjælpe med at løse problemet.`
        },
        {
            category: "notification",
            question: "Jeg modtager kun notifikationer fra nogle apps, hvordan løser jeg det?",
            answer: `
            Sørg for at aktivere notifikationstilladelser individuelt for hver ønsket app i telefonens app-indstillinger og synkroniser med uret.

            Specifikt, gå til [{app_name}] - [Enhed] - [Notifikationer] og aktiver notifikationer for de ønskede apps.`
        },
        {
            category: "data",
            question: "Hvordan ser jeg mine trænings- og sundhedsdata i telefon-appen?",
            answer: `
            Når du måler trænings- og sundhedsdata på dit ur, gemmes dataene automatisk på uret og synkroniseres til telefon-appen når de er forbundet.
            
            Hvis data ikke er synkroniseret endnu, kan du prøve at trække ned på appens startside for at synkronisere manuelt.
            
            Efter synkronisering kan du se data for puls, skridt, søvn, stress, iltmætning, temperatur, træning og mere i appen.`
        },
        {
            category: "health",
            question: "Mine trænings- og sundhedsdata er upræcise, hvad kan jeg gøre?",
            answer: `
            Bekræft at dine personlige oplysninger er korrekt udfyldt. Specifikt afhænger urets målealgorimer af dine personlige data som køn, højde, vægt og alder. Sørg for at disse oplysninger er præcise for at få mere nøjagtige trænings- og sundhedsdata.`
        },
        {
            category: "data",
            question: "Data på uret og i appen er forskellige, hvad skal jeg gøre?",
            answer: `
            Tjek venligst følgende:

            1. Bekræft at data fra uret er synkroniseret til appen. Hvis ikke, træk ned på appens startside for at synkronisere manuelt og tjek derefter om dataene stemmer overens.

            2. Tjek om uret har været forbundet til andre telefoner og om data er blevet synkroniseret til apps på disse telefoner.

            {faq_note}Vi anbefaler generelt ikke at forbinde samme ur til flere telefoner eller apps samtidig, da dette kan føre til inkonsistent datasynkronisering eller datatab. Derudover akkumuleres dagens data i appen for at undgå datatab, mens urets data nulstilles ved ny parring. Dette kan føre til forskelle mellem urets og appens data efter ny parring. For eksempel med søvndata: Hvis du fjerner parringen med uret lige efter det forbindes til appen, når data måske ikke at blive synkroniseret (da synkronisering tager tid pga. datamængden). Urets data slettes så, hvilket kan resultere i manglende søvndata i appen. Vi anbefaler derfor, hvis du har behov for at fjerne parringen, at vente til datasynkroniseringen er færdig før du gør det.`
        },
        {
            category: "weather",
            question: "Uret viser ikke vejret, hvordan løser jeg det?",
            answer: `
            Tjek venligst følgende:

            1. Bekræft at dit ur understøtter vejrfunktionen. Hvis ikke, kan det ikke vise vejr. Tjek specifikt om der er en [Vejr]-menu på uret.

            2. Bekræft at telefonens [Placeringstjenester] er aktiveret. Gå til [Indstillinger] - [Privatliv & Sikkerhed] - [Placeringstjenester] og tjek om det er aktiveret.

            3. Bekræft at {app_name} har tilladelse til placeringstjenester. Gå til [Indstillinger] - [Apps] - [{app_name}] - [Placering] og vælg enten [Altid] eller [Kun når appen bruges].

            4. Bekræft at {app_name} har internetadgang. Åbn [{app_name}] - [Enhed] - [Urskive-indstillinger] og tjek om appen kan hente urskive-listen fra skyen. Du kan også bekræfte dette på andre måder. Hvis ikke, prøv at afinstallere appen, genstarte telefonen, geninstallere appen og husk at tillade internetadgang første gang du åbner den.

            5. Tjek om vejr-push er aktiveret i telefon-appen. Gå til [{app_name}] - [Enhed] - [Vejr-push] og tjek om det er aktiveret.

            6. Prøv at slå [Vejr-push] fra og til igen for at se om det løser problemet.

            {faq_note}Vejrfunktionen afhænger af telefonens aktuelle placering for at hente vejrinfo for din lokation. Den kræver også internetadgang - hvis telefonen har ustabil netværksforbindelse eller appens netværksadgang er begrænset, kan den ikke hente vejrdata fra internettet.<br/>
            Hvis ovenstående ikke løser problemet, tag venligst et billede af urets systeminfo og screenshots af telefonens relevante systeminfo, og send det til os via feedback-funktionen i appen. Jo flere relevante oplysninger du kan give os, jo bedre kan vi hjælpe med at løse problemet.`
        },
        {
            category: "weather",
            question: "Vejrdata på uret er upræcist, hvad kan jeg gøre?",
            answer: `
            Tjek følgende:

            1. Tjek om telefonens GPS-placering er præcis. Hvis ikke, vil vejrdata også være upræcist. Prøv at gå udenfor og aktiver telefonens GPS for at se om den kan få præcis placering.

            2. Tjek vejropdateringstidspunktet på uret for at se om vejrdata er forældet. Hvis ja, prøv at åbne telefon-appen, gå til [Enhed] - [Vejr-push], slå vejr-push fra og til igen for at se om det opdaterer vejret korrekt.

            {faq_note}Hvis ovenstående ikke løser problemet, tag venligst et billede af urets systeminfo og screenshots af telefonens relevante systeminfo, og send det til os via feedback-funktionen i appen. Jo flere relevante oplysninger du kan give os, jo bedre kan vi hjælpe med at løse problemet.`
        },
        {
            category: "watchface",
            question: "Hvordan overfører jeg en cloud-urskive til uret?",
            answer: `
            Følg disse trin:

            1. I {app_name}, gå til [Enhed] - [Urskive-indstillinger] og vælg den urskive du kan lide.

            2. Tryk på [Synkroniser urskive] i pop-up vinduet.

            3. Vent på at urskiven downloades. Når det er færdigt, overføres den automatisk til uret.

            4. Vent på at overførslen er færdig, uret skifter automatisk til den nye urskive.`
        },
        {
            category: "watchface",
            question: "Hvordan tilpasser jeg en urskive og overfører den til uret?",
            answer: `
            Følg disse trin:

            1. I {app_name}, gå til [Enhed] - [Urskive-indstillinger], tryk så på [Tilpas urskive] (første ikon i øverste venstre hjørne med et redigeringsikon i midten) for at åbne tilpasningssiden.

            2. Tilpas urskiven efter din smag ved at ændre baggrund, placering af dato/tid og urskivens stil.

            3. Tryk på [Sæt som urskive].

            4. Vent på at den tilpassede urskive genereres. Når det er færdigt, overføres den automatisk til uret.

            5. Vent på at overførslen er færdig, uret skifter automatisk til den nye urskive.`
        },
        {
            category: "basic",
            question: "Hvordan tænder og slukker jeg smartwatchet?",
            answer: `
            Følg disse trin:

            1. Tænd uret: Hold sideknappen inde i 3-5 sekunder indtil skærmen lyser. Når uret er løbet tør for strøm, tænder det automatisk efter cirka 1 minuts opladning.

            2. Sluk uret: Hold sideknappen inde i 3-5 sekunder, vælg [Sluk] i pop-up menuen og tryk [Bekræft]. Uret viser "Goodbye" og slukker automatisk.`
        },
        {
            category: "basic",
            question: "Hvordan nulstiller jeg smartwatchet til fabriksindstillinger?",
            answer: `
            Følg disse trin:

            Metode 1: Nulstil direkte på uret ved at gå til [Indstillinger] - [System] - [Fabriksnulstilling] og vælg [Bekræft].

            Metode 2: Nulstil via urets menu ved at holde sideknappen inde i 3-5 sekunder, vælg [Fabriksnulstilling] og tryk [Bekræft].

            Metode 3: Nulstil via telefon-appen ved at gå til [Enhed] - [Fabriksnulstilling] og tryk [Bekræft].`
        },
        {
            category: "basic",
            question: "Hvordan fjerner jeg parringen mellem appen og smartwatchet?",
            answer: `
            Følg disse trin:

            1. I telefon-appen, gå til [Enhed] siden, scroll til bunden og vælg [Fjern parring] og tryk [Bekræft].

            2. Fjern Bluetooth-parringen mellem ur og telefon. Gå til [Indstillinger] - [Bluetooth] på telefonen, tryk på udråbstegnet ved siden af urets Bluetooth-navn og vælg [Glem denne enhed].

            {faq_note}Efter at have fjernet parringen i appen, husk at fjerne Bluetooth-parringen i systemindstillingerne, ellers kan uret måske ikke findes næste gang du vil parre det.`
        },
        {
            category: "basic",
            question: "Hvordan afviser jeg et opkald?",
            answer: `
            Når uret viser en opkaldsnotifikation, hold sideknappen inde i 3 sekunder for at afvise opkaldet.`
        },
        {
            category: "basic",
            question: "Hvordan bruger jeg ryst-for-at-tage-billede funktionen?",
            answer: `
            Følg disse trin:

            1. I telefon-appen, gå til [Enhed] - [Ryst for at tage billede]. Hvis du bliver spurgt om tilladelse til at bruge kameraet, vælg [Tillad].

            2. Ryst uret eller tryk på kamera-ikonet på uret for at tage et billede.`
        },
        {
            category: "basic",
            question: "Hvordan bruger jeg musikstyring?",
            answer: `
            Når uret er forbundet til telefonen, åbn en musikafspiller på telefonen og start afspilning. På urets musikskærm kan du skifte mellem sange med venstre/højre knapper og afspille/pause med midterknappen.

            {faq_note}Nogle indbyggede musikafspillere understøttes ikke, men det virker med QQ Music, NetEase Cloud Music, PLAY Music osv.`
        },
        {
            category: "device",
            question: "Firmware-opdateringen fejlede, hvad skal jeg gøre?",
            answer: `
            Hvis firmware-opdateringen fejler, prøv følgende:

            1. Sørg for at uret har tilstrækkelig strøm, lav batteriniveau kan forårsage fejl i opdateringen.

            2. Sørg for at forbindelsen mellem ur og telefon er stabil, ustabil forbindelse kan forårsage fejl.

            3. Sørg for at ur og telefon er på samme netværk, ustabilt netværk kan forårsage fejl.

            4. Afbryd ikke forbindelsen mellem ur og telefon under opdateringen, det kan forårsage fejl.

            5. Luk ikke appen under opdateringen, det kan forårsage fejl.

            6. Forlad ikke opdateringsskærmen eller lad skærmen slukke under opdateringen, det kan forårsage fejl.

            7. Nogle ure kan have 2 minutters ventetid (uden respons) efter en fejlet opdatering før de genaktiverer forbindelsen, vær tålmodig.

            {faq_note}Hvis ovenstående ikke løser problemet, tag venligst et billede af urets systeminfo og screenshots af telefonens relevante systeminfo, og send det til os via feedback-funktionen i appen. Jo flere relevante oplysninger du kan give os, jo bedre kan vi hjælpe med at løse problemet.`
        },
        {
            category: "device",
            question: "Enheden reagerer ikke efter opladning i et stykke tid, hvad er årsagen?",
            answer: `
            Når uret ikke har været brugt i lang tid, går det i lavstrømstilstand. Oplad det med en telefonoplader i cirka 30 minutter for at aktivere det.

            {faq_note}Brug helst en telefonoplader til opladning, da USB-porte på computere ofte har for lav strømstyrke til at oplade et ur i lavstrømstilstand.`
        },
        {
            category: "device",
            question: "Hvorfor tænder skærmen ikke når jeg løfter håndleddet?",
            answer: `
            Tjek venligst følgende:

            1. Tjek om løft-for-at-vække funktionen er slået fra i appen, og om tidsindstillingerne passer til dine behov. Efter Bluetooth-forbindelse, gå til [Enhed] i {app_name}, aktiver [Løft håndled for at vække] og indstil de ønskede tidsperioder.

            2. Tjek om uret er i Forstyr ikke-tilstand, da dette deaktiverer løft-for-at-vække.

            3. Når du vil se tiden, løft håndleddet så skærmen vender mod dig.

            {faq_note}Hvis ovenstående ikke løser problemet, tag venligst et billede af urets systeminfo og screenshots af telefonens relevante systeminfo, og send det til os via feedback-funktionen i appen. Jo flere relevante oplysninger du kan give os, jo bedre kan vi hjælpe med at løse problemet.`
        },
        {
            category: "device",
            question: "Hvor mange alarmer kan jeg indstille på uret?",
            answer: `
            Dette afhænger af din urmodel, men typisk kan du indstille op til 5 alarmer.`
        },
        {
            category: "device",
            question: "Hvordan justerer jeg tiden på uret?",
            answer: `
            Uret synkroniserer automatisk tiden når det forbindes til telefonen, manuel justering er ikke nødvendig.`
        },
        {
            category: "device",
            question: "Hvordan ændrer jeg sprog på uret?",
            answer: `
            Normalt synkroniserer uret automatisk sprog når det forbindes til telefonen, manuel ændring er ikke nødvendig.

            {faq_note}Nogle ure understøtter sprogændring direkte på uret. Gå til [Menu] - [Indstillinger] - [Sprog] på uret og vælg det ønskede sprog.`
        },
        {
            category: "other",
            question: "Hvorfor er batterilevetiden blevet kortere?",
            answer: `
            Hvis funktioner som løft-for-at-vække og regelmæssig pulsmåling er aktiveret, øger det strømforbruget og reducerer batterilevetiden.`
        },
        {
            category: "other",
            question: "Er uret vandtæt?",
            answer: `
            For information om vandtæthed, se venligst brugermanualen for din specifikke urmodel for at bekræfte om den er stænktæt eller svømmetæt. Uret er ikke egnet til dykning, havvand, udspring, varmt brusebad, varme kilder, sauna eller andre aktiviteter med højt vandtryk eller dybt vand. Læderremme og metalremme er ikke egnede til svømning. Vandtæthed er ikke permanent og kan reduceres med daglig slitage.`
        }

    ]
}; 