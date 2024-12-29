window.i18nData = window.i18nData || {};
window.i18nData.nl = {
    searchPlaceholder: "Zoek in veelgestelde vragen...",
    pageTitle: "Veelgestelde vragen",
    mainTitle: "Veelgestelde vragen",
    subtitle: "Veelgestelde vragen en probleemoplossing voor smartwatches",
    footer: {
        copyright: "© 2025 Shenzhen Tuobu Smart Big Data Co., Ltd",
    },
    categories: {
        all: "Alles",
        basic: "Basisgebruik",
        connection: "Bluetooth-verbinding",
        notification: "Meldingen",
        health: "Gezondheidsmonitoring",
        data: "Gegevenssynchronisatie", 
        watchface: "Wijzerplaat-instellingen",
        weather: "Weerweergave",
        device: "Apparaatbeheer",
        other: "Overig"
    },
    faqData: [
        {
            category: "connection",
            question: "Waarom kan ik mijn horloge niet vinden?",
            answer: `
            Controleer het volgende:

            1. Controleer of het horloge voldoende is opgeladen. Laad het op indien nodig.

            2. Houd het horloge binnen 0,5 meter van de telefoon.

            3. Controleer of het horloge met een andere telefoon is verbonden. Ontkoppel het in dat geval eerst van de originele telefoon en verwijder de Bluetooth-koppeling in de systeeminstellingen voordat u opnieuw koppelt.

            4. Controleer in de telefooninstellingen of Bluetooth is ingeschakeld via Instellingen > Bluetooth.

            5. Controleer of de app Bluetooth-toestemming heeft via Instellingen > Apps > {app_name}.

            6. Probeer Bluetooth te herstarten:
            Optie 1: Ga naar Instellingen > Bluetooth, schakel Bluetooth uit en weer in.
            Optie 2: Open het Bedieningspaneel, tik op het Bluetooth-pictogram om het uit en weer in te schakelen.

            7. Reset het horloge naar fabrieksinstellingen via Instellingen > Systeem > Fabrieksinstellingen > Bevestigen.

            8. Start het horloge en de telefoon opnieuw op en probeer opnieuw te verbinden.

            {faq_note}Als bovenstaande stappen het probleem niet oplossen, maak dan foto's van de systeeminformatie van het horloge en screenshots van de telefooninstellingen. Stuur deze via de feedbackfunctie in de app naar ons op met zoveel mogelijk relevante informatie zodat we u beter kunnen helpen.`
        },
        {
            category: "connection", 
            question: "Hoe weet ik of mijn horloge succesvol is verbonden met mijn telefoon?",
            answer: `
            In de mobiele app wordt de apparaatstatus weergegeven als "Verbonden".

            Op iOS kunt u ook naar Instellingen > Bluetooth gaan. Het horloge moet in de lijst "Mijn apparaten" staan met de status "Verbonden" en een blauw uitroepteken.

            Als u op het uitroepteken tikt, ziet u apparaatinformatie en zijn opties zoals "Deel systeemmeldingen" ingeschakeld.`
        },
        {
            category: "connection",
            question: "De Bluetooth-verbinding valt vaak weg. Wat kan ik doen?",
            answer: `
            Probeer het volgende:

            1. Zorg dat telefoon en horloge zich in een omgeving met weinig signaalinterferentie bevinden.

            2. Voorkom dat het horloge tegelijk met andere Bluetooth-apparaten is verbonden.

            3. Update de firmware van het horloge en de app op de telefoon.`
        },
        {
            category: "notification",
            question: "Ik ontvang geen meldingen op mijn horloge. Wat nu?", 
            answer: `
            Controleer het volgende:

            1. Controleer of het horloge is verbonden met de telefoon.

            2. Controleer in de app of meldingen zijn ingeschakeld via {app_name} > Apparaat > Meldingen.

            3. Controleer of het horloge is gekoppeld via Bluetooth en systeemmeldingen mag delen. Ga naar Instellingen > Bluetooth, tik op het uitroepteken naast het horloge en controleer of "Deel systeemmeldingen" is ingeschakeld.

            4. Controleer of meldingen zijn ingeschakeld op de telefoon via Instellingen > Meldingen.

            5. Controleer of de betreffende apps zijn geïnstalleerd en meldingsrechten hebben. Voor WhatsApp bijvoorbeeld: Instellingen > Apps > WhatsApp > Meldingen > Sta meldingen toe en controleer de meldingsinstellingen.

            {faq_note}Als bovenstaande stappen het probleem niet oplossen, maak dan foto's van de systeeminformatie van het horloge en screenshots van de telefooninstellingen. Stuur deze via de feedbackfunctie in de app naar ons op met zoveel mogelijk relevante informatie zodat we u beter kunnen helpen.`
        },
        {
            category: "notification",
            question: "Ik ontvang maar van sommige apps meldingen. Hoe los ik dit op?",
            answer: `
            Controleer of voor elke gewenste app afzonderlijk meldingen zijn ingeschakeld in de app en gesynchroniseerd met het horloge.

            Ga naar {app_name} > Apparaat > Meldingen en schakel meldingen in voor de gewenste apps.`
        },
        {
            category: "data",
            question: "Hoe kan ik mijn bewegings- en gezondheidsgegevens bekijken in de app?",
            answer: `
            Als u bewegings- en gezondheidsmetingen doet op uw horloge, worden deze automatisch opgeslagen op het horloge en gesynchroniseerd met de app zodra verbinding is gemaakt.

            Als gegevens nog niet zijn gesynchroniseerd, trek het startscherm van de app omlaag om handmatig te synchroniseren.

            Na synchronisatie kunt u in de app gegevens bekijken over hartslag, stappen, slaap, stress, zuurstofgehalte, temperatuur, beweging etc.`
        },
        {
            category: "health",
            question: "Mijn bewegings- en gezondheidsgegevens zijn niet nauwkeurig. Wat kan ik doen?",
            answer: `
            Controleer of uw persoonlijke gegevens correct zijn ingevuld. De meetalgoritmes van het horloge zijn afhankelijk van uw geslacht, lengte, gewicht en leeftijd. Zorg dat deze informatie klopt voor nauwkeurigere bewegings- en gezondheidsgegevens.`
        },
        {
            category: "data",
            question: "De gegevens op mijn horloge en in de app komen niet overeen. Wat nu?",
            answer: `
            Controleer het volgende:

            1. Of de gegevens van het horloge zijn gesynchroniseerd met de app. Zo niet, trek het startscherm van de app omlaag om handmatig te synchroniseren en controleer of de gegevens nu overeenkomen.

            2. Of het horloge met andere telefoons is verbonden en de gegevens daar zijn gesynchroniseerd.

            {faq_note}We raden af om één horloge met meerdere telefoons of apps te verbinden omdat dit kan leiden tot inconsistente of verloren gegevens. De app telt daggegevens cumulatief op, terwijl het horloge wordt gereset bij een nieuwe koppeling. Dit kan verschillen veroorzaken. Bij slaapgegevens bijvoorbeeld: als u het horloge direct na verbinding ontkoppelt voordat synchronisatie is voltooid (wat even kan duren), worden de gegevens op het horloge gewist en ontbreken ze in de app. Wacht daarom bij ontkoppeling tot de synchronisatie is voltooid.`
        },
        {
            category: "weather",
            question: "Het weer wordt niet weergegeven op mijn horloge. Hoe los ik dit op?",
            answer: `
            Controleer het volgende:

            1. Of uw horloge weerweergave ondersteunt. Controleer of "Weer" in het horlogemenu staat.

            2. Of locatieservices zijn ingeschakeld op de telefoon via Instellingen > Privacy en beveiliging > Locatieservices.

            3. Of {app_name} locatietoestemming heeft via Instellingen > Apps > {app_name} > Locatie > "Altijd" of "Tijdens gebruik app".

            4. Of {app_name} internettoegang heeft. Test dit door wijzerplaten te laden via {app_name} > Apparaat > Wijzerplaatinstellingen of op een andere manier. Verwijder bij problemen de app, herstart de telefoon, installeer opnieuw en sta internettoegang toe bij eerste gebruik.

            5. Of weerpush is ingeschakeld in de app via {app_name} > Apparaat > Weerpush.

            6. Schakel weerpush uit en weer in om te testen.

            {faq_note}Weer vereist telefoonlocatie voor lokale weergegevens en internettoegang. Bij instabiele verbinding of beperkte netwerktoegang werkt het niet.<br/>
            Als bovenstaande stappen het probleem niet oplossen, maak dan foto's van de systeeminformatie van het horloge en screenshots van de telefooninstellingen. Stuur deze via de feedbackfunctie in de app naar ons op met zoveel mogelijk relevante informatie zodat we u beter kunnen helpen.`
        },
        {
            category: "weather",
            question: "De weergegevens op mijn horloge zijn niet nauwkeurig. Wat kan ik doen?",
            answer: `
            Controleer het volgende:

            1. Of de GPS-locatie van de telefoon nauwkeurig is. Test dit buiten in open gebied.

            2. Controleer op het horloge wanneer het weer voor het laatst is bijgewerkt. Bij verouderde gegevens, open {app_name} > Apparaat > Weerpush, schakel uit en weer in.

            {faq_note}Als bovenstaande stappen het probleem niet oplossen, maak dan foto's van de systeeminformatie van het horloge en screenshots van de telefooninstellingen. Stuur deze via de feedbackfunctie in de app naar ons op met zoveel mogelijk relevante informatie zodat we u beter kunnen helpen.`
        },
        {
            category: "watchface",
            question: "Hoe zet ik een online wijzerplaat op mijn horloge?",
            answer: `
            Volg deze stappen:

            1. Open in {app_name} Apparaat > Wijzerplaatinstellingen en kies een wijzerplaat.

            2. Tik op "Synchroniseer wijzerplaat" in het pop-upvenster.

            3. Wacht tot de wijzerplaat is gedownload en automatisch naar het horloge wordt verzonden.

            4. Het horloge schakelt automatisch over naar de nieuwe wijzerplaat zodra het uploaden is voltooid.`
        },
        {
            category: "watchface",
            question: "Hoe maak en upload ik een aangepaste wijzerplaat?",
            answer: `
            Volg deze stappen:

            1. Open in {app_name} Apparaat > Wijzerplaatinstellingen en tik op "Aangepaste wijzerplaat" (eerste optie linksboven met bewerkingspictogram).

            2. Pas achtergrond, datum/tijd-positie en stijl naar wens aan.

            3. Tik op "Instellen als wijzerplaat".

            4. Wacht tot de aangepaste wijzerplaat is gegenereerd en automatisch naar het horloge wordt verzonden.

            5. Het horloge schakelt automatisch over naar de nieuwe wijzerplaat zodra het uploaden is voltooid.`
        },
        {
            category: "basic",
            question: "Hoe zet ik mijn smartwatch aan en uit?",
            answer: `
            Volg deze stappen:

            1. Aanzetten: Houd de zijknop 3-5 seconden ingedrukt tot het scherm oplicht. Bij een lege batterij start het horloge automatisch na ongeveer 1 minuut opladen.

            2. Uitzetten: Houd de zijknop 3-5 seconden ingedrukt, kies "Uitschakelen" en tik op "Bevestigen". Het horloge toont "Goodbye" en schakelt uit.`
        },
        {
            category: "basic",
            question: "Hoe reset ik mijn smartwatch naar fabrieksinstellingen?",
            answer: `
            Volg deze stappen:

            Optie 1: Reset via het horloge: Instellingen > Systeem > Fabrieksinstellingen > Bevestigen.

            Optie 2: Reset via het horloge: Houd de zijknop 3-5 seconden ingedrukt, kies "Fabrieksinstellingen" > Bevestigen.

            Optie 3: Reset via de app: Open {app_name} > Apparaat > Fabrieksinstellingen > Bevestigen.`
        },
        {
            category: "basic",
            question: "Hoe ontkoppel ik de app van mijn smartwatch?",
            answer: `
            Volg deze stappen:

            1. Open in de app het Apparaat-scherm, scroll naar beneden en kies "Apparaat ontkoppelen" > Bevestigen.

            2. Verwijder de Bluetooth-koppeling: ga naar Instellingen > Bluetooth, tik op het uitroepteken naast het horloge en kies "Dit apparaat vergeten".

            {faq_note}Verwijder na ontkoppeling altijd handmatig de Bluetooth-koppeling in de systeeminstellingen. Anders wordt het horloge mogelijk niet gevonden bij een nieuwe koppelpoging.`
        },
        {
            category: "basic",
            question: "Hoe beëindig ik een gesprek?",
            answer: `
            Houd bij een inkomende oproep de zijknop van het horloge 3 seconden ingedrukt om op te hangen.`
        },
        {
            category: "basic",
            question: "Hoe gebruik ik de schud-om-foto-te-maken functie?",
            answer: `
            Volg deze stappen:

            1. Open in {app_name} Apparaat > Schud voor foto en sta cameratoestemming toe als daarom wordt gevraagd.

            2. Schud het horloge of tik op het camerapictogram om een foto te maken.`
        },
        {
            category: "basic",
            question: "Hoe gebruik ik de muziekbediening?",
            answer: `
            Als het horloge is verbonden met de telefoon, open dan een muziekspeler op de telefoon en speel muziek af. Gebruik op het horloge de knoppen links/rechts om te navigeren en de middelste knop om te pauzeren/afspelen.

            {faq_note}Sommige standaard muziekspelers worden niet ondersteund. QQ Music, NetEase Cloud Music, PLAY Music etc. werken wel.`
        },
        {
            category: "device",
            question: "De firmware-update is mislukt. Wat nu?",
            answer: `
            Probeer bij een mislukte firmware-update het volgende:

            1. Zorg voor voldoende batterij - te weinig stroom kan updates doen mislukken.

            2. Zorg voor een stabiele verbinding tussen horloge en telefoon.

            3. Zorg dat horloge en telefoon op hetzelfde netwerk zitten.

            4. Verbreek tijdens de update niet de verbinding tussen horloge en telefoon.

            5. Sluit de app niet af tijdens de update.

            6. Verlaat het updatescherm niet en laat het scherm niet uitgaan.

            7. Sommige horloges hebben na een mislukte update 2 minuten nodig (zonder reactie) om opnieuw te activeren. Wees geduldig.

            {faq_note}Als bovenstaande stappen het probleem niet oplossen, maak dan foto's van de systeeminformatie van het horloge en screenshots van de telefooninstellingen. Stuur deze via de feedbackfunctie in de app naar ons op met zoveel mogelijk relevante informatie zodat we u beter kunnen helpen.`
        },
        {
            category: "device",
            question: "Het apparaat reageert niet na opladen. Hoe komt dit?",
            answer: `
            Als het horloge lang niet is gebruikt, kan het in een lage energiestand zijn gegaan. Laad ongeveer 30 minuten op met een telefoonlader om te activeren.

            {faq_note}Gebruik bij voorkeur een telefoonlader omdat USB-poorten op computers te weinig stroom leveren bij lage batterij.`
        },
        {
            category: "device",
            question: "Waarom licht het scherm niet op bij polsbeweging?",
            answer: `
            Controleer het volgende:

            1. Of polsbeweging is ingeschakeld in de app en de tijden kloppen. Ga in {app_name} naar Apparaat > Polsbeweging en stel de gewenste tijden in.

            2. Of de niet-storen modus actief is - dit schakelt polsbeweging uit.

            3. Draai uw pols met het scherm naar u toe om de tijd te zien.

            {faq_note}Als bovenstaande stappen het probleem niet oplossen, maak dan foto's van de systeeminformatie van het horloge en screenshots van de telefooninstellingen. Stuur deze via de feedbackfunctie in de app naar ons op met zoveel mogelijk relevante informatie zodat we u beter kunnen helpen.`
        },
        {
            category: "device",
            question: "Hoeveel wekkers kan ik maximaal instellen op mijn horloge?",
            answer: `
            Dit verschilt per model, maar meestal kunt u 5 wekkers instellen.`
        },
        {
            category: "device",
            question: "Hoe pas ik de tijd aan op mijn horloge?",
            answer: `
            De tijd wordt automatisch gesynchroniseerd als het horloge is verbonden met de telefoon. Handmatig aanpassen is niet nodig.`
        },
        {
            category: "device",
            question: "Hoe verander ik de taal van mijn horloge?",
            answer: `
            Meestal wordt de taal automatisch gesynchroniseerd met de telefoon als het horloge is verbonden.

            {faq_note}Sommige horloges hebben taalinstellingen op het horloge zelf via Menu > Instellingen > Taal.`
        },
        {
            category: "other",
            question: "Waarom gaat de batterij sneller leeg?",
            answer: `
            Functies als polsbeweging en continue hartslag verbruiken meer stroom en verkorten de batterijduur.`
        },
        {
            category: "other",
            question: "Is mijn horloge waterdicht?",
            answer: `
            Raadpleeg de handleiding van uw specifieke model voor waterdichtheid. Sommige zijn spatwaterdicht of geschikt voor zwemmen. Niet geschikt voor duiken, zeewater, springen, heet water, sauna of andere water-/diepwateractiviteiten met hoge druk. Leren en metalen bandjes zijn niet geschikt om mee te zwemmen. Waterdichtheid is niet permanent en kan afnemen door dagelijks gebruik.`
        }

    ]
};