window.i18nData = window.i18nData || {};
window.i18nData.sv = {
    searchPlaceholder: "Sök vanliga frågor...",
    pageTitle: "Vanliga frågor",
    mainTitle: "Vanliga frågor",
    subtitle: "Vanliga frågor och felsökningsguide för smartklockor",
    footer: {
        copyright: "© 2025 Shenzhen Tuobu Intelligent Big Data Co., Ltd",
    },
    categories: {
        all: "Alla",
        basic: "Grundläggande användning", 
        connection: "Bluetooth-anslutning",
        notification: "Aviseringar",
        health: "Hälsoövervakning",
        data: "Datasynkronisering",
        watchface: "Urtavlor",
        weather: "Vädervisning",
        device: "Enhetshantering",
        other: "Övrigt"
    },
    faqData: [
        {
            category: "connection",
            question: "Varför kan jag inte hitta min klocka?",
            answer: `
            Kontrollera följande:

            1. Kontrollera att klockan har tillräckligt med batteri. Ladda den om batterinivån är låg.

            2. Håll klockan inom 0,5 meters avstånd från telefonen.

            3. Kontrollera om klockan är ansluten till en annan telefon. I så fall, koppla först bort den från den ursprungliga telefonen och ta bort Bluetooth-parkopplingen i telefonens systeminställningar innan du ansluter den igen.

            4. I telefonens inställningar, se till att Bluetooth är aktiverat. Gå till [Inställningar] - [Bluetooth] och kontrollera att Bluetooth-växeln är på.

            5. Se till att appen har Bluetooth-behörighet. Gå till [Inställningar] - [Appar] - [{app_name}] och kontrollera att Bluetooth-behörighet är beviljad.

            6. Prova att starta om Bluetooth:
            Metod 1: Gå till [Inställningar] - [Bluetooth], stäng av och slå på Bluetooth igen.
            Metod 2: Dra ner från toppen av skärmen för att öppna kontrollcentret, tryck på Bluetooth-ikonen för att stänga av och slå på den igen.

            7. Återställ klockan till fabriksinställningar. På klockan, gå till [Inställningar] - [System] - [Fabriksåterställning] och välj [Bekräfta].

            8. Starta om både klockan och telefonen och försök ansluta igen.

            {faq_note}Om ovanstående metoder inte löser problemet, ta en bild av klockans systeminformation och skärmdumpar av telefonens systeminformation. Skicka dessa via appens feedbackfunktion. Ju mer information du kan ge oss, desto bättre kan vi hjälpa dig att lösa problemet.`
        },
        {
            category: "connection",
            question: "Hur vet jag att klockan är ansluten till telefonen?",
            answer: `
            I mobilappen visas enhetens status som "Ansluten".

            På iOS, gå till [Inställningar] - [Bluetooth]. Din klockas Bluetooth-namn ska visas i listan "Mina enheter" med statusen "Ansluten" och en blå cirkel med utropstecken.

            Tryck på utropstecknet för att se enhetsinformation och bekräfta att växlar som "Dela systemaviseringar" är aktiverade.`
        },
        {
            category: "connection",
            question: "Bluetooth-anslutningen kopplas ofta från, hur kan jag förbättra den?",
            answer: `
            Prova följande:

            1. Se till att telefonen och klockan är i en miljö med minimal signalstörning.

            2. Undvik att ha klockan ansluten till andra Bluetooth-enheter samtidigt.

            3. Uppdatera klockans firmware och telefonens app till senaste version.`
        },
        {
            category: "notification",
            question: "Min klocka tar inte emot aviseringar från telefonen, vad ska jag göra?",
            answer: `
            Kontrollera följande:

            1. Se till att klockan är ansluten till telefonen.

            2. Bekräfta att du har aktiverat aviseringar i mobilappen. Gå till [{app_name}] - [Enhet] - [Aviseringar] och kontrollera att aviseringar är aktiverade för önskade appar.

            3. Bekräfta att klockan är parkopplad via Bluetooth och att systemaviseringar är aktiverade. På telefonen, gå till [Inställningar] - [Bluetooth], tryck på utropstecknet bredvid klockans Bluetooth-namn och kontrollera att "Dela systemaviseringar" är aktiverat.

            4. Bekräfta att aviseringsbehörigheter är aktiverade på telefonen. Gå till [Inställningar] - [Aviseringar] och kontrollera att alla inställningar är korrekta.

            5. Se till att motsvarande app är installerad på telefonen och har aviseringsbehörighet. För WhatsApp till exempel, gå till [Inställningar] - [Appar] - [WhatsApp] - [Aviseringar], kontrollera att "Tillåt aviseringar" är på och att aviseringstyper är korrekt inställda.

            {faq_note}Om ovanstående metoder inte löser problemet, ta en bild av klockans systeminformation och skärmdumpar av telefonens systeminformation. Skicka dessa via appens feedbackfunktion. Ju mer information du kan ge oss, desto bättre kan vi hjälpa dig att lösa problemet.`
        },
        {
            category: "notification",
            question: "Min klocka tar bara emot aviseringar från vissa appar, hur löser jag det?",
            answer: `
            Se till att aktivera aviseringsbehörigheter individuellt för varje önskad app i telefonappens aviseringsinställningar och synkronisera med klockan.

            Specifikt, gå till [{app_name}] - [Enhet] - [Aviseringar] och aktivera aviseringar för önskade appar.`
        },
        {
            category: "data",
            question: "Hur ser jag mina tränings- och hälsodata i mobilappen?",
            answer: `
            När du mäter tränings- och hälsodata på klockan sparas det automatiskt i klockan och synkroniseras till mobilappen när den är ansluten.
            
            Om data inte har synkroniserats än kan du dra nedåt på appens startsida för att manuellt synkronisera tränings- och hälsodata.
            
            Efter synkroniseringen kan du se data för puls, steg, sömn, stress, syremättnad, temperatur, träning med mera i appen.`
        },
        {
            category: "health",
            question: "Mina tränings- och hälsodata är inte korrekta, vad ska jag göra?",
            answer: `
            Kontrollera att din personliga information är korrekt ifylld. Klockans mätalgoritmer för vissa funktioner är beroende av ditt kön, längd, vikt och ålder. Se till att denna information är korrekt för att få mer exakta tränings- och hälsodata.`
        },
        {
            category: "data",
            question: "Data på klockan stämmer inte överens med appen, vad ska jag göra?",
            answer: `
            Kontrollera följande:

            1. Se till att klockans data har synkroniserats till appen. Om inte, dra nedåt på appens startsida för att manuellt synkronisera tränings- och hälsodata och kontrollera om data stämmer överens.

            2. Kontrollera om klockan har varit ansluten till andra telefoner och om data har synkroniserats till appar på dessa.

            {faq_note}Vi rekommenderar generellt inte att samma klocka ansluts till flera telefoner eller appar samtidigt eftersom det kan leda till inkonsekvent datasynkronisering eller till och med dataförlust. Dessutom ackumuleras dagens data i appen för att säkerställa att ingen data går förlorad, medan klockans data nollställs efter en ny parkoppling. Detta kan leda till skillnader mellan klockans och appens data. För sömndata till exempel, om du kopplar bort klockan direkt efter anslutning till appen, hinner data kanske inte synkroniseras (synkronisering tar vanligtvis lite tid på grund av datamängden). Då rensas klockans data och sömndata kan gå förlorad i appen. Vi rekommenderar därför att du väntar tills datasynkroniseringen är klar innan du kopplar bort klockan om du behöver göra det.`
        },
        {
            category: "weather",
            question: "Klockan visar inte väder, hur löser jag det?",
            answer: `
            Kontrollera följande:

            1. Bekräfta att din klocka stöder väderfunktionen. Om klockan inte stöder väder kan det inte visas. Kontrollera om [Väder] finns i klockans meny.

            2. Se till att telefonens [Platstjänster] är aktiverade. Gå till [Inställningar] - [Sekretess och säkerhet] - [Platstjänster] och kontrollera att det är aktiverat.

            3. Se till att {app_name} har behörighet att använda platstjänster. Gå till [Inställningar] - [Appar] - [{app_name}] - [Plats] och välj antingen [Alltid] eller [Vid användning av appen].

            4. Bekräfta att {app_name} har internetåtkomst. Öppna [{app_name}] - [Enhet] - [Urtavlor] och kontrollera om appen kan hämta urtavlor från molnet, eller använd andra metoder för att verifiera detta. Om internetåtkomst saknas, avinstallera appen, starta om telefonen, installera appen igen och tillåt internetåtkomst vid första start.

            5. Kontrollera om väderpush är aktiverat i mobilappen. Gå till [{app_name}] - [Enhet] - [Väderpush] och se till att det är aktiverat.

            6. Prova att stänga av och slå på [Väderpush] igen för att se om vädret visas korrekt.

            {faq_note}Väderfunktionen är beroende av telefonens platsdata för att hämta väderinformation för din position. Den kräver också internetåtkomst - om telefonens nätverksanslutning är instabil eller appens nätverksåtkomst är begränsad kan väderinformation inte hämtas.<br/>
            Om ovanstående metoder inte löser problemet, ta en bild av klockans systeminformation och skärmdumpar av telefonens systeminformation. Skicka dessa via appens feedbackfunktion. Ju mer information du kan ge oss, desto bättre kan vi hjälpa dig att lösa problemet.`
        },
        {
            category: "weather",
            question: "Väderdata på klockan är inte korrekt, vad ska jag göra?",
            answer: `
            Kontrollera följande:

            1. Se till att telefonens GPS-positionering är korrekt. Om GPS-positioneringen är felaktig blir även väderdata fel. Prova att vara utomhus på en öppen plats, aktivera telefonens GPS och kontrollera om platsdata kan hämtas korrekt.

            2. Kontrollera uppdateringstiden för väder på klockan för att se om informationen är inaktuell. Om så är fallet, öppna mobilappen, gå till [Enhet] - [Väderpush], stäng av och slå på väderpush igen för att se om vädret uppdateras korrekt.

            {faq_note}Om ovanstående metoder inte löser problemet, ta en bild av klockans systeminformation och skärmdumpar av telefonens systeminformation. Skicka dessa via appens feedbackfunktion. Ju mer information du kan ge oss, desto bättre kan vi hjälpa dig att lösa problemet.`
        },
        {
            category: "watchface",
            question: "Hur laddar jag upp en molnurtavla till klockan?",
            answer: `
            Följ dessa steg:

            1. I {app_name}, gå till [Enhet] - [Urtavlor] och välj den urtavla du gillar.

            2. Tryck på [Synkronisera urtavla] i popup-fönstret.

            3. Vänta på att urtavlan laddas ner. När nedladdningen är klar laddas den automatiskt upp till klockan.

            4. Vänta tills uppladdningen är klar. Klockan byter automatiskt till den nya urtavlan.`
        },
        {
            category: "watchface",
            question: "Hur anpassar jag en urtavla och laddar upp den till klockan?",
            answer: `
            Följ dessa steg:

            1. I {app_name}, gå till [Enhet] - [Urtavlor] och tryck på [Anpassa urtavla] (första ikonen i övre vänstra hörnet med en redigeringsknapp i mitten) för att öppna anpassningssidan.

            2. Anpassa urtavlan efter dina önskemål genom att ändra bakgrund, placering av datum och tid, samt urtavlans stil.

            3. Tryck på [Ställ in som urtavla].

            4. Vänta medan den anpassade urtavlan genereras. När den är klar laddas den automatiskt upp till klockan.

            5. Vänta tills uppladdningen är klar. Klockan byter automatiskt till den nya urtavlan.`
        },
        {
            category: "basic",
            question: "Hur slår jag på och stänger av smartklockan?",
            answer: `
            Följ dessa steg:

            1. Slå på klockan: Håll in sidoknappen i 3-5 sekunder tills skärmen tänds. När klockan är urladdad startar den automatiskt efter cirka 1 minuts laddning och går till huvudskärmen.

            2. Stänga av klockan: Håll in sidoknappen i 3-5 sekunder, välj [Stäng av] i popup-menyn och tryck [Bekräfta]. Klockan visar meddelandet "Goodbye" och stängs sedan av.`
        },
        {
            category: "basic",
            question: "Hur återställer jag smartklockan till fabriksinställningar?",
            answer: `
            Följ dessa steg:

            Metod 1: Återställ direkt på klockan genom att gå till [Inställningar] - [System] - [Fabriksåterställning] och välj [Bekräfta].

            Metod 2: Återställ på klockan genom att hålla in sidoknappen i 3-5 sekunder, välja [Fabriksåterställning] i popup-menyn och trycka [Bekräfta].

            Metod 3: Återställ via mobilappen genom att gå till [Enhet] - [Fabriksåterställning] och välja [Bekräfta].`
        },
        {
            category: "basic",
            question: "Hur kopplar jag bort appen från smartklockan?",
            answer: `
            Följ dessa steg:

            1. I mobilappen, gå till [Enhet]-sidan, scrolla längst ner och välj [Koppla bort enhet]. Tryck sedan [Bekräfta].

            2. Ta bort Bluetooth-parkopplingen mellan klockan och telefonen. Gå till [Inställningar] - [Bluetooth] på telefonen, tryck på utropstecknet bredvid klockans Bluetooth-namn och välj [Glöm denna enhet].

            {faq_note}Efter att du kopplat bort klockan måste du manuellt ta bort Bluetooth-parkopplingen i systeminställningarna. Annars kanske klockan inte hittas nästa gång du försöker ansluta den.`
        },
        {
            category: "basic",
            question: "Hur lägger jag på när det ringer?",
            answer: `
            När klockan visar en inkommande samtalsavisering, håll in sidoknappen i 3 sekunder för att avvisa samtalet.`
        },
        {
            category: "basic",
            question: "Hur använder jag skaka-för-foto-funktionen?",
            answer: `
            Följ dessa steg:

            1. I mobilappen, gå till [Enhet] - [Skaka för foto]. Om appen frågar om tillåtelse att använda kameran, välj [Tillåt].

            2. Skaka klockan eller tryck på kameraikonen på klockan för att ta ett foto.`
        },
        {
            category: "basic",
            question: "Hur använder jag musikkontrollen?",
            answer: `
            När klockan är ansluten till telefonen, öppna musikspelaren på telefonen och spela musik från din spellista. På klockans musikskärm kan du byta låt med vänster/höger-knapparna och pausa/spela med mittknappen.

            {faq_note}Vissa inbyggda musikspelare stöds inte. QQ Music, NetEase Cloud Music, PLAY Music och liknande stöds.`
        },
        {
            category: "device",
            question: "Firmwareuppdateringen misslyckades, vad ska jag göra?",
            answer: `
            Om firmwareuppdateringen misslyckades, prova följande:

            1. Se till att klockan har tillräckligt med batteri. Låg batterinivå kan orsaka misslyckad uppdatering.

            2. Se till att anslutningen mellan klockan och telefonen är stabil. Instabil anslutning kan orsaka misslyckad uppdatering.

            3. Se till att telefon och klocka är på samma nätverk. Instabilt nätverk kan orsaka misslyckad uppdatering.

            4. Koppla inte bort klockan från telefonen under uppdateringen, det kan orsaka misslyckad uppdatering.

            5. Avsluta inte appen under uppdateringen, det kan orsaka misslyckad uppdatering.

            6. Lämna inte uppdateringsskärmen eller låt inte skärmen släckas under uppdateringen, det kan orsaka misslyckad uppdatering.

            7. Vissa klockor kan vara inaktiva i upp till två minuter efter en misslyckad uppdatering innan de återaktiverar anslutningen. Var tålmodig.

            {faq_note}Om ovanstående metoder inte löser problemet, ta en bild av klockans systeminformation och skärmdumpar av telefonens systeminformation. Skicka dessa via appens feedbackfunktion. Ju mer information du kan ge oss, desto bättre kan vi hjälpa dig att lösa problemet.`
        },
        {
            category: "device",
            question: "Klockan reagerar inte efter en tids laddning, vad är orsaken?",
            answer: `
            När klockan inte använts under en längre tid går den in i ett lågenergiläge. Ladda den med en mobilladdare i cirka 30 minuter för att aktivera den.

            {faq_note}Använd helst en mobilladdare för laddning. USB-portar på datorer kan ha för svag ström för att ladda en klocka med låg batterinivå.`
        },
        {
            category: "device",
            question: "Varför tänds inte skärmen när jag lyfter handleden?",
            answer: `
            Kontrollera följande:

            1. Kontrollera om handledsvändning är avstängt i appen och om tidsinställningarna passar dina behov. Efter Bluetooth-anslutning, gå till [{app_name}] - [Enhet], aktivera [Väck vid handledsvändning] och ställ in önskade tider.

            2. Kontrollera om stör ej-läget är aktiverat på klockan. Skärmen tänds inte vid handledsvändning i stör ej-läge.

            3. När du vill se tiden, lyft handleden så att skärmen är vänd mot dig.

            {faq_note}Om ovanstående metoder inte löser problemet, ta en bild av klockans systeminformation och skärmdumpar av telefonens systeminformation. Skicka dessa via appens feedbackfunktion. Ju mer information du kan ge oss, desto bättre kan vi hjälpa dig att lösa problemet.`
        },
        {
            category: "device",
            question: "Hur många alarm kan jag ställa in på klockan?",
            answer: `
            Detta beror på din klockmodell, men vanligtvis kan du ställa in 5 alarm.`
        },
        {
            category: "device",
            question: "Hur ställer jag in tiden på klockan?",
            answer: `
            Klockan synkroniserar automatiskt tiden när den är ansluten till telefonen. Manuell justering behövs inte.`
        },
        {
            category: "device",
            question: "Hur ändrar jag språk på klockan?",
            answer: `
            Vanligtvis synkroniseras språket automatiskt när klockan ansluts till telefonen. Manuell justering behövs inte.

            {faq_note}Vissa klockor stöder språkändring direkt på klockan. Gå i så fall till [Meny] - [Inställningar] - [Språk] på klockan och välj önskat språk.`
        },
        {
            category: "other",
            question: "Varför har batteritiden blivit kortare?",
            answer: `
            Om funktioner som handledsvändning för att väcka skärmen och kontinuerlig pulsmätning är aktiverade ökar strömförbrukningen, vilket minskar batteritiden.`
        },
        {
            category: "other",
            question: "Är klockan vattentät?",
            answer: `
            För information om vattentålighet, se bruksanvisningen för din specifika klockmodell för att bekräfta om den tål vardaglig vattenkontakt eller simning. Klockorna är inte lämpliga för dykning, saltvatten, höghöjdshopp, varmt vatten, bastu eller andra vattenaktiviteter med högt tryck eller på djupt vatten. Läderband och metallband är inte lämpliga för simning. Vattentåligheten är inte permanent utan kan försämras med dagligt slitage.`
        }

    ]
}; 