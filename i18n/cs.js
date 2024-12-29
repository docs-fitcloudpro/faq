window.i18nData = window.i18nData || {};
window.i18nData.cs = {
    searchPlaceholder: "Hledat časté dotazy...",
    pageTitle: "Časté dotazy",
    mainTitle: "Časté dotazy",
    subtitle: "Průvodce řešením problémů a často kladené dotazy k chytrým hodinkám",
    footer: {
        copyright: "© 2025 Shenzhen Tuobu Smart Big Data Co., Ltd.",
    },
    categories: {
        all: "Vše",
        basic: "Základní použití", 
        connection: "Bluetooth připojení",
        notification: "Oznámení",
        health: "Zdravotní monitoring",
        data: "Synchronizace dat",
        watchface: "Nastavení ciferníku",
        weather: "Zobrazení počasí",
        device: "Správa zařízení",
        other: "Ostatní"
    },
    faqData: [
        {
            category: "connection",
            question: "Proč nemohu najít své hodinky?",
            answer: `
            Zkontrolujte prosím následující:

            1. Zkontrolujte, zda mají hodinky dostatek baterie. Pokud je baterie vybitá, nejprve ji nabijte.

            2. Udržujte hodinky ve vzdálenosti do 0,5 metru od telefonu.

            3. Zkontrolujte, zda hodinky nebyly spárovány s jiným telefonem. Pokud ano, nejprve je odpojte od původního telefonu a zrušte Bluetooth párování v nastavení systému před novým párováním.

            4. V nastavení telefonu se ujistěte, že je zapnutá funkce Bluetooth. Konkrétně otevřete [Nastavení] - [Bluetooth] a zkontrolujte, zda je přepínač Bluetooth zapnutý.

            5. Ujistěte se, že aplikace má povolení k Bluetooth. Konkrétně otevřete [Nastavení] - [Aplikace] - [{app_name}] a zkontrolujte, zda bylo uděleno povolení Bluetooth.

            6. Zkuste restartovat Bluetooth telefonu:
            Metoda 1: Otevřete [Nastavení] - [Bluetooth], vypněte Bluetooth a znovu jej zapněte.
            Metoda 2: Přejeďte prstem dolů z horní části obrazovky pro přístup k ovládacímu centru, klepněte na ikonu Bluetooth pro vypnutí a znovu zapněte.

            7. Obnovte tovární nastavení hodinek. Konkrétně na hodinkách otevřete [Nastavení] - [Systém] - [Tovární nastavení] a vyberte [Potvrdit].

            8. Restartujte hodinky a telefon a zkuste se znovu připojit.

            {faq_note}Pokud výše uvedené metody problém nevyřeší, zkuste vyfotit systémové informace hodinek a pořídit snímky obrazovky některých systémových informací telefonu. Kontaktujte nás prostřednictvím funkce zpětné vazby v aplikaci. Při kontaktování nás se prosím snažte poskytnout co nejvíce relevantních informací, abychom mohli problém lépe vyřešit.`
        },
        {
            category: "connection",
            question: "Jak poznám, že jsou hodinky úspěšně připojeny k telefonu?",
            answer: `
            V mobilní aplikaci se zobrazuje stav zařízení jako "Připojeno".

            Zároveň v iOS otevřete [Nastavení] - [Bluetooth], v seznamu [Moje zařízení] se zobrazí název Bluetooth vašich hodinek se stavem "Připojeno" a modrým kruhovým vykřičníkem.

            Klepnutím na vykřičník můžete vidět informace o zařízení, jako je název zařízení, a všechny přepínače jako [Sdílet systémová oznámení] jsou zapnuté.`
        },
        {
            category: "connection",
            question: "Bluetooth připojení se často odpojuje, jak to mohu zlepšit?",
            answer: `
            Můžete zkusit následující:

            1. Ujistěte se, že telefon a hodinky jsou v prostředí s minimálním rušením signálu.

            2. Vyvarujte se současného připojení hodinek k jiným Bluetooth zařízením.

            3. Aktualizujte firmware hodinek a verzi mobilní aplikace.`
        },
        {
            category: "notification",
            question: "Hodinky nepřijímají oznámení z telefonu, co mám dělat?",
            answer: `
            Zkontrolujte prosím následující:

            1. Ujistěte se, že jsou hodinky připojeny k telefonu.

            2. V mobilní aplikaci potvrďte, že jste povolili příslušná oznámení. Konkrétně otevřete [{app_name}] - [Zařízení] - [Oznámení] a zkontrolujte, zda jsou povolena oznámení pro příslušné aplikace.

            3. Potvrďte, že hodinky jsou spárovány s telefonem přes Bluetooth a je povoleno sdílení systémových oznámení. Konkrétně na telefonu otevřete [Nastavení] - [Bluetooth], klepněte na vykřičník vedle názvu Bluetooth hodinek v seznamu [Moje zařízení] a zkontrolujte, zda je povoleno [Sdílet systémová oznámení].

            4. Potvrďte, že jsou v telefonu povolena oznámení. Konkrétně na telefonu otevřete [Nastavení] - [Oznámení] a zkontrolujte, zda jsou všechna nastavení správná.

            5. V telefonu je nainstalována odpovídající aplikace pro hodinky a má povolena oznámení. Například pro WhatsApp otevřete na telefonu [Nastavení] - [Aplikace] - [WhatsApp] - [Oznámení], zkontrolujte, zda je zapnuto [Povolit oznámení] a všechny typy upozornění jsou správně nastaveny.

            {faq_note}Pokud výše uvedené metody problém nevyřeší, zkuste vyfotit systémové informace hodinek a pořídit snímky obrazovky některých systémových informací telefonu. Kontaktujte nás prostřednictvím funkce zpětné vazby v aplikaci. Při kontaktování nás se prosím snažte poskytnout co nejvíce relevantních informací, abychom mohli problém lépe vyřešit.`
        },
        {
            category: "notification",
            question: "Hodinky přijímají oznámení pouze z některých aplikací, jak to vyřešit?",
            answer: `
            Ujistěte se, že jste v nastavení oznámení mobilní aplikace povolili oznámení jednotlivě pro požadované aplikace a synchronizovali je s hodinkami.

            Konkrétně otevřete [{app_name}] - [Zařízení] - [Oznámení] a zapněte oznámení pro příslušné aplikace.`
        },
        {
            category: "data",
            question: "Jak mohu v mobilní aplikaci zobrazit svá data o cvičení a zdraví?",
            answer: `
            Když na hodinkách měříte data o cvičení a zdraví, hodinky automaticky zaznamenávají data do hodinek a při připojení k mobilní aplikaci se synchronizují do mobilní aplikace.
            
            Pokud data ještě nebyla synchronizována, můžete zkusit potáhnout dolů na hlavní stránce aplikace pro ruční synchronizaci dat o cvičení a zdraví.
            
            Po dokončení synchronizace můžete v aplikaci zobrazit data o tepové frekvenci, krocích, spánku, stresu, okysličení krve, teplotě, cvičení a další.`
        },
        {
            category: "health",
            question: "Moje data o cvičení a zdraví nejsou přesná, co mám dělat?",
            answer: `
            Ujistěte se, že jsou vaše osobní údaje správně vyplněny. Konkrétně některé měřicí algoritmy hodinek závisí na vašem pohlaví, výšce, váze, věku a dalších osobních údajích. Ujistěte se o přesnosti těchto údajů pro získání přesnějších dat o cvičení a zdraví.`
        },
        {
            category: "data",
            question: "Data na hodinkách se neshodují s daty v aplikaci, co mám dělat?",
            answer: `
            Zkontrolujte prosím následující:

            1. Data z hodinek byla synchronizována do aplikace. Pokud ne, potáhněte dolů na hlavní stránce aplikace pro ruční synchronizaci dat o cvičení a zdraví a poté zkontrolujte, zda jsou data konzistentní.

            2. Zkontrolujte, zda hodinky nebyly připojeny k jinému telefonu a zda data nebyla synchronizována do aplikace na jiném telefonu.

            {faq_note}Obecně nedoporučujeme připojovat stejné hodinky k více telefonům nebo aplikacím současně, protože to může vést k nekonzistenci dat nebo dokonce ke ztrátě dat. Navíc pro zajištění, že data nebudou ztracena, jsou data v aplikaci pro daný den kumulativní, zatímco data v hodinkách se po novém spárování vynulují, což může vést k nesouladu mezi daty v hodinkách a aplikaci. Například u dat o spánku, pokud odpojíte hodinky ihned po připojení k mobilní aplikaci, data v hodinkách se nestihnou synchronizovat do aplikace (synchronizace dat obvykle trvá určitou dobu kvůli velkému objemu dat), data v hodinkách se vymažou a v aplikaci se objeví chybějící data o spánku. Proto doporučujeme, pokud potřebujete hodinky odpojit, počkat po připojení hodinek k mobilní aplikaci na dokončení synchronizace dat před odpojením hodinek.`
        },
        {
            category: "weather",
            question: "Na hodinkách se nezobrazuje počasí, jak to vyřešit?",
            answer: `
            Zkontrolujte prosím následující:

            1. Potvrďte, že vaše hodinky podporují funkci počasí. Pokud hodinky nepodporují funkci počasí, nelze počasí zobrazit. Konkrétně zkontrolujte, zda menu hodinek obsahuje položku [Počasí].

            2. Potvrďte, že jsou v telefonu zapnuté [Služby určování polohy]. Konkrétně otevřete [Nastavení] - [Soukromí a zabezpečení] - [Služby určování polohy] a zkontrolujte, zda jsou služby určování polohy zapnuté.

            3. Potvrďte, že {app_name} má oprávnění používat služby určování polohy. Konkrétně otevřete [Nastavení] - [Aplikace] - [{app_name}] - [Poloha] a zkontrolujte, zda je vybráno [Vždy] nebo [Při používání aplikace].

            4. Potvrďte, že {app_name} má normální přístup k internetu. Konkrétně otevřete [{app_name}] - [Zařízení] - [Nastavení ciferníku] a zkontrolujte, zda aplikace může normálně získat seznam cloudových ciferníků, samozřejmě můžete použít i jiné způsoby k ověření tohoto bodu. Pokud nemůžete normálně přistupovat k internetu, doporučujeme odinstalovat aplikaci, restartovat telefon, znovu nainstalovat aplikaci a nezapomeňte při prvním spuštění aplikace povolit přístup k internetu.

            5. V mobilní aplikaci zkontrolujte, zda je zapnutá funkce push notifikací počasí. Konkrétně otevřete [{app_name}] - [Zařízení] - [Push notifikace počasí] a zkontrolujte, zda je funkce push notifikací počasí zapnutá.

            6. Zkuste vypnout přepínač [Push notifikace počasí] a znovu jej zapnout, zkontrolujte, zda se počasí zobrazuje normálně.

            {faq_note}Funkce počasí závisí na aktuální poloze telefonu, která se používá k získání informací o počasí ve vaší oblasti. Funkce počasí také závisí na přístupu k internetu. Pokud je připojení k síti telefonu nestabilní nebo je přístup aplikace k síti omezený, nelze získat informace o počasí přes internet.<br/>
            Pokud výše uvedené metody problém nevyřeší, zkuste vyfotit systémové informace hodinek a pořídit snímky obrazovky některých systémových informací telefonu. Kontaktujte nás prostřednictvím funkce zpětné vazby v aplikaci. Při kontaktování nás se prosím snažte poskytnout co nejvíce relevantních informací, abychom mohli problém lépe vyřešit.`
        },
        {
            category: "weather",
            question: "Data o počasí na hodinkách nejsou přesná, co mám dělat?",
            answer: `
            Zkontrolujte následující:

            1. Zda je aktuální GPS poloha telefonu přesná. Pokud není GPS poloha telefonu přesná, nemohou být ani data o počasí přesná. Doporučujeme otevřít GPS telefonu na otevřeném prostranství a zkontrolovat, zda lze normálně získat informace o poloze.

            2. Na hodinkách zkontrolujte čas aktualizace počasí a potvrďte, zda informace o počasí nejsou zastaralé. Pokud jsou informace o počasí zastaralé, zkuste otevřít mobilní aplikaci, přejděte do [Zařízení] - [Push notifikace počasí], zkuste vypnout push notifikace počasí a znovu je zapnout, zkontrolujte, zda se počasí zobrazuje normálně.

            {faq_note}Pokud výše uvedené metody problém nevyřeší, zkuste vyfotit systémové informace hodinek a pořídit snímky obrazovky některých systémových informací telefonu. Kontaktujte nás prostřednictvím funkce zpětné vazby v aplikaci. Při kontaktování nás se prosím snažte poskytnout co nejvíce relevantních informací, abychom mohli problém lépe vyřešit.`
        },
        {
            category: "watchface",
            question: "Jak nahrát cloudový ciferník do hodinek",
            answer: `
            Postup:

            1. V {app_name} otevřete [Zařízení] - [Nastavení ciferníku] a vyberte ciferník, který se vám líbí.

            2. V zobrazeném rozhraní klikněte na [Synchronizovat ciferník].

            3. Počkejte na zahájení stahování ciferníku. Po dokončení stahování se ciferník automaticky nahraje do hodinek.

            4. Počkejte na dokončení nahrávání ciferníku, hodinky automaticky změní ciferník.`
        },
        {
            category: "watchface",
            question: "Jak přizpůsobit ciferník a nahrát jej do hodinek?",
            answer: `
            Postup:

            1. V {app_name} otevřete [Zařízení] - [Nastavení ciferníku], poté klikněte na [Vstup pro přizpůsobení ciferníku] (první v levém horním rohu s ikonou úprav uprostřed) pro vstup na stránku přizpůsobení ciferníku.

            2. Poté upravte pozadí ciferníku, umístění data a času a styl ciferníku podle svých preferencí.

            3. Klikněte na tlačítko [Nastavit jako ciferník].

            4. Počkejte na vytvoření přizpůsobeného ciferníku. Po dokončení se automaticky nahraje do hodinek.

            5. Počkejte na dokončení nahrávání ciferníku, hodinky automaticky změní ciferník.`
        },
        {
            category: "basic",
            question: "Jak zapnout a vypnout chytré hodinky?",
            answer: `
            Postup:

            1. Zapnutí hodinek: Stiskněte a podržte boční tlačítko hodinek po dobu 3-5 sekund, dokud se nerozsvítí obrazovka. Když jsou hodinky vybité, automaticky se zapnou a vstoupí na hlavní obrazovku po přibližně 1 minutě nabíjení.

            2. Vypnutí hodinek: Stiskněte a podržte boční tlačítko hodinek po dobu 3-5 sekund, v zobrazeném rozhraní vyberte [Vypnout], klikněte na [Potvrdit], hodinky zobrazí zprávu "Goodbye" a poté se automaticky vypnou.`
        },
        {
            category: "basic",
            question: "Jak provést obnovení továrního nastavení chytrých hodinek?",
            answer: `
            Postup:

            Metoda 1: Proveďte obnovení továrního nastavení na hodinkách. Konkrétně na hodinkách otevřete [Nastavení] - [Systém] - [Obnovení továrního nastavení] a vyberte [Potvrdit].

            Metoda 2: Proveďte obnovení továrního nastavení na hodinkách. Konkrétně stiskněte a podržte boční tlačítko hodinek po dobu 3-5 sekund, v zobrazeném rozhraní vyberte [Obnovení továrního nastavení] a poté vyberte [Potvrdit].

            Metoda 3: Proveďte obnovení továrního nastavení v mobilní aplikaci. Konkrétně v mobilní aplikaci otevřete [Zařízení] - [Obnovení továrního nastavení] a vyberte [Potvrdit].`
        },
        {
            category: "basic",
            question: "Jak zrušit spárování aplikace s chytrými hodinkami?",
            answer: `
            Postup:

            1. V mobilní aplikaci otevřete stránku [Zařízení], přejděte na konec stránky, vyberte [Zrušit spárování zařízení] a poté vyberte [Potvrdit].

            2. Zrušte Bluetooth spárování chytrých hodinek s telefonem. Konkrétně na telefonu otevřete [Nastavení] - [Bluetooth], poté klikněte na vykřičník vedle názvu Bluetooth hodinek v seznamu [Moje zařízení] a vyberte [Zapomenout toto zařízení].

            {faq_note}Po zrušení spárování hodinek musíte ručně zrušit Bluetooth spárování chytrých hodinek s telefonem v nastavení systému, jinak při příštím pokusu o spárování nemusí být možné hodinky najít a spárovat.`
        },
        {
            category: "basic",
            question: "Jak zavěsit hovor?",
            answer: `
            Když hodinky obdrží upozornění na příchozí hovor, stiskněte a podržte boční tlačítko hodinek po dobu 3 sekund pro zavěšení hovoru.`
        },
        {
            category: "basic",
            question: "Jak používat funkci fotografování zatřesením?",
            answer: `
            Postup:

            1. V mobilní aplikaci otevřete [Zařízení] - [Fotografování zatřesením]. Pokud budete dotázáni, zda povolit "přístup k fotoaparátu telefonu", vyberte [Povolit].

            2. Zatřeste hodinkami nebo klikněte na ikonu fotoaparátu na hodinkách pro pořízení fotografie.`
        },
        {
            category: "basic",
            question: "Jak používat funkci ovládání hudby?",
            answer: `
            Když jsou hodinky úspěšně připojeny k telefonu, otevřete přehrávač hudby v telefonu, přehrajte hudbu ze seznamu stažených skladeb, na rozhraní hudby v zařízení přepínejte pomocí levého a pravého tlačítka, kliknutím na prostřední tlačítko pozastavíte nebo přehrajete hudbu.

            {faq_note}Některé vestavěné přehrávače hudby v telefonech nejsou podporovány, lze použít přehrávače QQ Music, NetEase Cloud Music, PLAY Music atd.`
        },
        {
            category: "device",
            question: "Aktualizace firmwaru hodinek selhala, co mám dělat?",
            answer: `
            Pokud aktualizace firmwaru hodinek selhala, zkuste následující metody:

            1. Ujistěte se, že hodinky mají dostatek baterie, nedostatek baterie může způsobit selhání aktualizace firmwaru.

            2. Ujistěte se, že připojení mezi hodinkami a telefonem je stabilní, nestabilní připojení může způsobit selhání aktualizace firmwaru.

            3. Ujistěte se, že hodinky a telefon jsou ve stejném síťovém prostředí, nestabilní síť může způsobit selhání aktualizace firmwaru.

            4. Během procesu aktualizace firmwaru neodpojujte hodinky od telefonu, jinak může dojít k selhání aktualizace firmwaru.

            5. Během procesu aktualizace firmwaru neukončujte proces aplikace, jinak může dojít k selhání aktualizace firmwaru.

            6. Během procesu aktualizace firmwaru neopouštějte rozhraní aktualizace firmwaru ani nevypínejte obrazovku, jinak může dojít k selhání aktualizace firmwaru.

            7. Některá zařízení hodinek mají po selhání aktualizace dvě minuty čekací doby (během této doby zařízení nereaguje), než se znovu aktivuje připojení, prosím buďte trpěliví.

            {faq_note}Pokud výše uvedené metody problém nevyřeší, zkuste vyfotit systémové informace hodinek a pořídit snímky obrazovky některých systémových informací telefonu. Kontaktujte nás prostřednictvím funkce zpětné vazby v aplikaci. Při kontaktování nás se prosím snažte poskytnout co nejvíce relevantních informací, abychom mohli problém lépe vyřešit.`
        },
        {
            category: "device",
            question: "Zařízení stále nereaguje po určité době nabíjení, jaký je důvod?",
            answer: `
            Když hodinky nejsou dlouho používány, přejdou do stavu nízké baterie. Prosím nabíjejte pomocí nabíječky telefonu přibližně půl hodiny pro aktivaci.

            {faq_note}Při nabíjení je nejlepší použít nabíječku telefonu, proud z počítače je příliš nízký a při nízkém stavu baterie může být obtížné nabít.`
        },
        {
            category: "device",
            question: "Proč se obrazovka nerozsvítí při zvednutí ruky?",
            answer: `
            Zkontrolujte prosím následující:

            1. Zkontrolujte, zda není v aplikaci vypnutá funkce rozsvícení obrazovky při zvednutí zápěstí a zda nastavení časového období odpovídá vašim potřebám. Po připojení Bluetooth otevřete v {app_name} stránku [Zařízení], zapněte [Rozsvícení při otočení zápěstí] a nastavte časové období podle vašich potřeb pro rozsvícení obrazovky při otočení zápěstí v tomto období.

            2. Zkontrolujte, zda není na zařízení zapnutý režim Nerušit, když je zapnutý režim Nerušit, zařízení se při zvednutí nerozsvítí.

            3. Když chcete vidět čas, zvedněte zápěstí a otočte obrazovku směrem k sobě.

            {faq_note}Pokud výše uvedené metody problém nevyřeší, zkuste vyfotit systémové informace hodinek a pořídit snímky obrazovky některých systémových informací telefonu. Kontaktujte nás prostřednictvím funkce zpětné vazby v aplikaci. Při kontaktování nás se prosím snažte poskytnout co nejvíce relevantních informací, abychom mohli problém lépe vyřešit.`
        },
        {
            category: "device",
            question: "Kolik budíků lze maximálně nastavit na hodinkách?",
            answer: `
            To závisí na vašem modelu hodinek, obvykle lze nastavit 5 budíků.`
        },
        {
            category: "device",
            question: "Jak nastavit čas na hodinkách?",
            answer: `
            Hodinky automaticky synchronizují čas po připojení k telefonu, není potřeba ruční nastavení.`
        },
        {
            category: "device",
            question: "Jak nastavit jazyk hodinek?",
            answer: `
            Obvykle hodinky automaticky synchronizují jazyk po připojení k telefonu, není potřeba ruční nastavení.

            {faq_note}Některé hodinky podporují nastavení jazyka přímo na hodinkách. Konkrétně na hodinkách otevřete [Menu] - [Nastavení] - [Jazyk] a vyberte požadovaný jazyk.`
        },
        {
            category: "other",
            question: "Proč se zkrátila výdrž baterie?",
            answer: `
            Pokud jsou na hodinkách zapnuté funkce jako rozsvícení při otočení zápěstí, pravidelné měření tepové frekvence atd., zvyšuje to spotřebu energie a zkracuje výdrž baterie.`
        },
        {
            category: "other",
            question: "Jsou hodinky voděodolné?",
            answer: `
            Ohledně voděodolnosti zařízení si prosím přečtěte návod k příslušnému modelu zařízení, který jste zakoupili, abyste zjistili, zda podporuje voděodolnost pro běžné použití nebo plavání. Není vhodné pro potápění, mořskou vodu, skoky do vody, horkou vodu, termální prameny, saunu, jiné vodní aktivity nebo aktivity v hluboké vodě pod vysokým tlakem vody; kožené a kovové řemínky nejsou vhodné pro plavání. Voděodolnost není trvalá, ochranné vlastnosti se mohou snížit v důsledku každodenního opotřebení.`
        }

    ]
}; 