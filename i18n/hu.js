window.i18nData = window.i18nData || {};
window.i18nData.hu = {
    searchPlaceholder: "Gyakori kérdések keresése...",
    pageTitle: "Gyakran Ismételt Kérdések",
    mainTitle: "Gyakran Ismételt Kérdések",
    subtitle: "Okosóra használati útmutató és hibaelhárítási segédlet",
    footer: {
        copyright: "© 2025 Shenzhen Tuobu Smart Big Data Co., Ltd.",
    },
    categories: {
        all: "Összes",
        basic: "Alapvető használat",
        connection: "Bluetooth kapcsolat",
        notification: "Értesítések",
        health: "Egészségfigyelés",
        data: "Adatszinkronizálás", 
        watchface: "Számlap beállítások",
        weather: "Időjárás kijelzés",
        device: "Eszközkezelés",
        other: "Egyéb"
    },
    faqData: [
        {
            category: "connection",
            question: "Miért nem találom az órámat?",
            answer: `
            Kérjük, ellenőrizze a következőket:

            1. Ellenőrizze, hogy az óra megfelelően fel van-e töltve. Ha az akkumulátor lemerült, először töltse fel.

            2. Tartsa az órát és a telefont 0,5 méteren belül egymáshoz.

            3. Ellenőrizze, hogy az óra nincs-e párosítva másik telefonnal. Ha igen, először szüntesse meg a párosítást a régi telefonon és törölje a Bluetooth párosítást a telefon rendszerbeállításaiban.

            4. A telefon beállításaiban győződjön meg róla, hogy a Bluetooth be van kapcsolva. Nyissa meg a Beállítások > Bluetooth menüt és ellenőrizze a Bluetooth kapcsolót.

            5. Ellenőrizze, hogy az alkalmazás rendelkezik-e Bluetooth engedéllyel. Nyissa meg a Beállítások > Alkalmazások > {app_name} menüt és ellenőrizze a Bluetooth engedélyeket.

            6. Próbálja újraindítani a Bluetooth-t:
            1. módszer: Nyissa meg a Beállítások > Bluetooth menüt, kapcsolja ki majd újra be a Bluetooth-t.
            2. módszer: Húzza le a vezérlőközpontot a képernyő tetejéről és koppintson a Bluetooth ikonra a ki- majd bekapcsoláshoz.

            7. Állítsa vissza az órát gyári beállításokra. Az órán nyissa meg: Beállítások > Rendszer > Gyári visszaállítás és válassza a Megerősítés opciót.

            8. Indítsa újra az órát és a telefont, majd próbálja meg újra a csatlakozást.

            {faq_note}Ha a fenti megoldások egyike sem segít, készítsen képernyőképet az óra rendszerinformációiról és a telefon rendszerbeállításairól, majd küldje el nekünk az alkalmazás visszajelzés funkcióján keresztül. Kérjük, adjon meg minél több információt a probléma hatékonyabb megoldása érdekében.`
        },
        {
            category: "connection",
            question: "Hogyan ellenőrizhetem, hogy az óra sikeresen csatlakozott a telefonhoz?",
            answer: `
            A telefon alkalmazásban az eszköz állapota "Csatlakoztatva" lesz.

            iOS esetén nyissa meg a Beállítások > Bluetooth menüt, ahol az óra Bluetooth neve megjelenik a "Saját eszközök" listában "Csatlakoztatva" állapottal és egy kék felkiáltójellel.

            A felkiáltójelre koppintva láthatja az eszköz nevét és egyéb információkat, valamint ellenőrizheti, hogy a "Rendszerértesítések megosztása" és hasonló kapcsolók be vannak kapcsolva.`
        },
        {
            category: "connection",
            question: "A Bluetooth kapcsolat gyakran megszakad. Mit tehetek?",
            answer: `
            Próbálja ki a következőket:

            1. Győződjön meg róla, hogy a telefon és az óra olyan környezetben van, ahol minimális az interferencia.

            2. Kerülje az óra egyidejű csatlakoztatását más Bluetooth eszközökhöz.

            3. Frissítse az óra firmware-ét és a telefon alkalmazást a legújabb verzióra.`
        },
        {
            category: "notification",
            question: "Az óra nem kap értesítéseket a telefonról. Mit tegyek?",
            answer: `
            Kérjük, ellenőrizze a következőket:

            1. Győződjön meg róla, hogy az óra csatlakoztatva van a telefonhoz.

            2. Ellenőrizze, hogy az értesítések engedélyezve vannak az alkalmazásban. Nyissa meg: {app_name} > Eszköz > Értesítések és ellenőrizze, hogy a megfelelő alkalmazások értesítései be vannak kapcsolva.

            3. Ellenőrizze, hogy az óra párosítva van és a rendszerértesítések megosztása engedélyezve van. A telefonon nyissa meg: Beállítások > Bluetooth, koppintson az óra neve melletti felkiáltójelre és ellenőrizze a "Rendszerértesítések megosztása" beállítást.

            4. Ellenőrizze, hogy az értesítési engedélyek be vannak kapcsolva a telefonon. Nyissa meg: Beállítások > Értesítések és ellenőrizze a beállításokat.

            5. Ellenőrizze, hogy az értesíteni kívánt alkalmazás telepítve van és rendelkezik értesítési engedélyekkel. Például WhatsApp esetén: Beállítások > Alkalmazások > WhatsApp > Értesítések, ellenőrizze hogy az "Értesítések engedélyezése" be van kapcsolva és a beállítások megfelelőek.

            {faq_note}Ha a fenti megoldások egyike sem segít, készítsen képernyőképet az óra rendszerinformációiról és a telefon rendszerbeállításairól, majd küldje el nekünk az alkalmazás visszajelzés funkcióján keresztül. Kérjük, adjon meg minél több információt a probléma hatékonyabb megoldása érdekében.`
        },
        {
            category: "notification",
            question: "Az óra csak néhány alkalmazás értesítéseit kapja meg. Hogyan javíthatom ezt?",
            answer: `
            Győződjön meg róla, hogy minden kívánt alkalmazás értesítései külön-külön engedélyezve vannak a telefon alkalmazásban és szinkronizálva vannak az órával.

            Ehhez nyissa meg: {app_name} > Eszköz > Értesítések és kapcsolja be az értesítéseket a kívánt alkalmazásokhoz.`
        },
        {
            category: "data",
            question: "Hogyan tekinthetem meg a mozgási és egészségügyi adataimat a telefon alkalmazásban?",
            answer: `
            Amikor mozgási és egészségügyi méréseket végez az órán, az adatok automatikusan rögzítésre kerülnek az órán, és amikor csatlakozik a telefon alkalmazáshoz, szinkronizálódnak.
            
            Ha még nem történt meg a szinkronizálás, húzza le az alkalmazás főoldalát a kézi szinkronizáláshoz.
            
            A szinkronizálás után megtekintheti a pulzus, lépésszám, alvás, stressz, véroxigén, testhőmérséklet, edzés és egyéb adatokat az alkalmazásban.`
        },
        {
            category: "health",
            question: "A mozgási és egészségügyi adataim pontatlanok. Mit tehetek?",
            answer: `
            Kérjük, ellenőrizze, hogy személyes adatai helyesen vannak-e megadva. Az óra egyes funkcióinak mérési algoritmusai függnek az Ön nemétől, magasságától, súlyától és életkorától. Kérjük, győződjön meg ezen adatok pontosságáról a pontosabb mozgási és egészségügyi adatok érdekében.`
        },
        {
            category: "data",
            question: "Az órán és az alkalmazásban látható adatok nem egyeznek. Mit tegyek?",
            answer: `
            Kérjük, ellenőrizze a következőket:

            1. Az órán lévő adatok szinkronizálva vannak-e az alkalmazással. Ha nem, húzza le az alkalmazás főoldalát a kézi szinkronizáláshoz, majd ellenőrizze, hogy az adatok egyeznek-e.

            2. Ellenőrizze, hogy az óra nem volt-e csatlakoztatva más telefonhoz, és az adatok nem szinkronizálódtak-e másik telefonra.

            {faq_note}Általában nem javasoljuk, hogy ugyanazt az órát egyszerre több telefonhoz vagy alkalmazáshoz csatlakoztassa, mivel ez adatszinkronizálási problémákhoz vagy akár adatvesztéshez vezethet. Továbbá az adatvesztés elkerülése érdekében az alkalmazásban a napi adatok kumulatívak, míg az óra újrapárosításkor az adatok törlődnek, ami eltéréseket okozhat az órán és az alkalmazásban látható adatok között. Például az alvási adatoknál, ha az órát közvetlenül a telefonhoz való csatlakozás után leválasztja, az órán lévő adatok nem feltétlenül kerülnek szinkronizálásra az alkalmazással (mivel a szinkronizálás időt vesz igénybe a nagy adatmennyiség miatt), így az órán lévő adatok törlődnek és az alkalmazásban hiányozhatnak az alvási adatok. Ezért javasoljuk, hogy ha le kell választania az órát, várja meg az adatok teljes szinkronizálását, mielőtt ezt megtenné.`
        },
        {
            category: "weather",
            question: "Az órán nem jelenik meg az időjárás. Hogyan javíthatom ezt?",
            answer: `
            Kérjük, ellenőrizze a következőket:

            1. Győződjön meg róla, hogy az óra támogatja az időjárás funkciót. Ha nem támogatja, nem tudja megjeleníteni az időjárást. Ellenőrizze, hogy van-e "Időjárás" menüpont az órán.

            2. Ellenőrizze, hogy a telefon helymeghatározási szolgáltatása be van kapcsolva. Nyissa meg: Beállítások > Adatvédelem és biztonság > Helyszolgáltatások és ellenőrizze, hogy be van-e kapcsolva.

            3. Ellenőrizze, hogy a {app_name} alkalmazás rendelkezik helymeghatározási engedéllyel. Nyissa meg: Beállítások > Alkalmazások > {app_name} > Hely és válassza a "Mindig" vagy "Csak használat közben" opciót.

            4. Ellenőrizze, hogy a {app_name} tud-e csatlakozni az internethez. Nyissa meg: {app_name} > Eszköz > Számlap beállítások és ellenőrizze, hogy betöltődnek-e a felhő számlapok. Természetesen más módon is ellenőrizheti ezt. Ha nem tud csatlakozni az internethez, törölje az alkalmazást, indítsa újra a telefont, telepítse újra az alkalmazást, és az első indításkor engedélyezze az internet hozzáférést.

            5. Ellenőrizze, hogy az időjárás push értesítések be vannak-e kapcsolva az alkalmazásban. Nyissa meg: {app_name} > Eszköz > Időjárás push és ellenőrizze a beállítást.

            6. Próbálja ki- majd visszakapcsolni az "Időjárás push" kapcsolót, és ellenőrizze, hogy megjelenik-e az időjárás.

            {faq_note}Az időjárás funkció a telefon aktuális helyzetétől függ, ami alapján lekéri az időjárási információkat. Emellett internet kapcsolatra is szükség van - ha a telefon hálózati kapcsolata instabil vagy az alkalmazás internet hozzáférése korlátozott, nem tudja lekérni az időjárási adatokat.<br/>
            Ha a fenti megoldások egyike sem segít, készítsen képernyőképet az óra rendszerinformációiról és a telefon rendszerbeállításairól, majd küldje el nekünk az alkalmazás visszajelzés funkcióján keresztül. Kérjük, adjon meg minél több információt a probléma hatékonyabb megoldása érdekében.`
        },
        {
            category: "weather",
            question: "Az órán megjelenő időjárási adatok pontatlanok. Mit tehetek?",
            answer: `
            Ellenőrizze a következőket:

            1. Ellenőrizze, hogy a telefon GPS helymeghatározása pontos-e. Ha nem pontos, az időjárási adatok sem lehetnek pontosak. Javasoljuk, hogy nyílt területen kapcsolja be a GPS-t és ellenőrizze, hogy megfelelően működik-e a helymeghatározás.

            2. Ellenőrizze az időjárás frissítési idejét az órán, hogy nem járt-e le. Ha lejárt, nyissa meg a telefon alkalmazást, lépjen az Eszköz > Időjárás push menübe, kapcsolja ki majd újra be az időjárás push funkciót és ellenőrizze, hogy megjelenik-e az időjárás.

            {faq_note}Ha a fenti megoldások egyike sem segít, készítsen képernyőképet az óra rendszerinformációiról és a telefon rendszerbeállításairól, majd küldje el nekünk az alkalmazás visszajelzés funkcióján keresztül. Kérjük, adjon meg minél több információt a probléma hatékonyabb megoldása érdekében.`
        },
        {
            category: "watchface",
            question: "Hogyan tölthetek fel felhő számlapot az órára?",
            answer: `
            A következő lépéseket kövesse:

            1. A {app_name} alkalmazásban nyissa meg: Eszköz > Számlap beállítások és válassza ki a kívánt számlapot.

            2. A felugró ablakban koppintson a "Számlap szinkronizálása" gombra.

            3. Várja meg, amíg a számlap letöltődik, ezután automatikusan feltöltődik az órára.

            4. Várja meg a feltöltés befejezését, az óra automatikusan átvált az új számlapra.`
        },
        {
            category: "watchface",
            question: "Hogyan készíthetek egyedi számlapot és tölthetm fel az órára?",
            answer: `
            A következő lépéseket kövesse:

            1. A {app_name} alkalmazásban nyissa meg: Eszköz > Számlap beállítások, majd koppintson az "Egyedi számlap" gombra (bal felső sarokban, középen szerkesztés ikonnal).

            2. Módosítsa a számlap hátterét, a dátum és idő pozícióját, valamint a számlap stílusát tetszés szerint.

            3. Koppintson a "Beállítás számlapként" gombra.

            4. Várja meg az egyedi számlap elkészítését, ezután automatikusan feltöltődik az órára.

            5. Várja meg a feltöltés befejezését, az óra automatikusan átvált az új számlapra.`
        },
        {
            category: "basic",
            question: "Hogyan kapcsolhatom be és ki az okosórát?",
            answer: `
            A következő lépéseket kövesse:

            1. Bekapcsolás: Tartsa nyomva az óra oldalsó gombját 3-5 másodpercig, amíg a képernyő bekapcsol. Ha az óra lemerült, csatlakoztassa töltőre és körülbelül 1 perc múlva automatikusan bekapcsol.

            2. Kikapcsolás: Tartsa nyomva az óra oldalsó gombját 3-5 másodpercig, a megjelenő menüben válassza a "Kikapcsolás" opciót, majd koppintson a "Megerősítés" gombra. Az óra "Goodbye" üzenetet jelenít meg, majd kikapcsol.`
        },
        {
            category: "basic",
            question: "Hogyan állíthatom vissza az okosórát gyári beállításokra?",
            answer: `
            A következő módszerek közül választhat:

            1. módszer: Az órán: Nyissa meg Beállítások > Rendszer > Gyári visszaállítás, majd válassza a "Megerősítés" opciót.

            2. módszer: Az órán: Tartsa nyomva az oldalsó gombot 3-5 másodpercig, a megjelenő menüben válassza a "Gyári visszaállítás" opciót, majd a "Megerősítés" gombot.

            3. módszer: A telefon alkalmazásban: Nyissa meg Eszköz > Gyári visszaállítás, majd válassza a "Megerősítés" opciót.`
        },
        {
            category: "basic",
            question: "Hogyan szüntethetem meg az alkalmazás és az okosóra párosítását?",
            answer: `
            A következő lépéseket kövesse:

            1. A telefon alkalmazásban nyissa meg az Eszköz oldalt, görgessen az aljára és válassza az "Eszköz leválasztása" opciót, majd koppintson a "Megerősítés" gombra.

            2. Szüntesse meg az okosóra és a telefon Bluetooth párosítását: Nyissa meg Beállítások > Bluetooth, az "Eszközeim" listában koppintson az óra Bluetooth neve melletti felkiáltójelre, majd válassza az "Eszköz elfelejtése" opciót.

            {faq_note}Az óra leválasztása után mindenképp törölje a Bluetooth párosítást is a rendszerbeállításokban, különben előfordulhat, hogy következő alkalommal nem találja meg az órát párosításkor.`
        },
        {
            category: "basic",
            question: "Hogyan utasíthatok el egy hívást?",
            answer: `
            Amikor az órán bejövő hívás értesítést kap, tartsa nyomva az óra oldalsó gombját 3 másodpercig a hívás elutasításához.`
        },
        {
            category: "basic",
            question: "Hogyan használhatom a rázással történő fényképezés funkciót?",
            answer: `
            A következő lépéseket kövesse:

            1. A telefon alkalmazásban nyissa meg: Eszköz > Rázás a fényképezéshez. Ha az alkalmazás kéri a kamera hozzáférést, engedélyezze azt.

            2. Rázza meg az órát vagy koppintson a kamera ikonra az órán a fénykép elkészítéséhez.`
        },
        {
            category: "basic",
            question: "Hogyan használhatom a zene vezérlés funkciót?",
            answer: `
            Amikor az óra csatlakoztatva van a telefonhoz, indítsa el a zenelejátszót a telefonon és játsszon le egy számot a letöltött zenék közül. Az óra zene felületén a bal és jobb gombokkal válthat számot, a középső gombbal szüneteltetheti vagy folytathatja a lejátszást.

            {faq_note}Néhány beépített zenelejátszó nem támogatott, de működik például a QQ Music, NetEase Music, PLAY Music és hasonló alkalmazásokkal.`
        },
        {
            category: "device",
            question: "Mit tegyek, ha sikertelen a firmware frissítés?",
            answer: `
            Firmware frissítési hiba esetén próbálja ki a következőket:

            1. Győződjön meg róla, hogy az óra megfelelően fel van töltve, az alacsony töltöttség okozhat frissítési hibát.

            2. Ellenőrizze, hogy stabil a kapcsolat az óra és a telefon között, az instabil kapcsolat okozhat frissítési hibát.

            3. Győződjön meg róla, hogy az óra és a telefon ugyanazon a hálózaton van, a hálózati problémák okozhatnak frissítési hibát.

            4. Ne szakítsa meg az óra és a telefon kapcsolatát frissítés közben, ez hibát okozhat.

            5. Ne zárja be az alkalmazást frissítés közben, ez hibát okozhat.

            6. Ne lépjen ki a frissítési képernyőről és ne kapcsolja ki a képernyőt frissítés közben, ez hibát okozhat.

            7. Egyes órák esetén a sikertelen frissítés után két perces várakozási idő szükséges (ez alatt az eszköz nem reagál), mielőtt újra aktiválódik a kapcsolat. Kérjük, legyen türelmes.

            {faq_note}Ha a fenti megoldások egyike sem segít, készítsen képernyőképet az óra rendszerinformációiról és a telefon rendszerbeállításairól, majd küldje el nekünk az alkalmazás visszajelzés funkcióján keresztül. Kérjük, adjon meg minél több információt a probléma hatékonyabb megoldása érdekében.`
        },
        {
            category: "device",
            question: "Miért nem reagál az eszköz töltés közben sem?",
            answer: `
            Ha az órát hosszabb ideig nem használta, mélykisütött állapotba kerülhet. Kérjük, csatlakoztassa telefontöltőhöz körülbelül fél órára az aktiváláshoz.

            {faq_note}Töltéshez javasolt telefontöltőt használni, mivel a számítógép USB portja túl alacsony áramerősséget biztosíthat, ami mélykisütött állapotban nem elegendő a töltéshez.`
        },
        {
            category: "device",
            question: "Miért nem működik a csuklómozdulatra történő képernyő bekapcsolás?",
            answer: `
            Kérjük, ellenőrizze a következőket:

            1. Ellenőrizze, hogy a csuklómozdulatra történő képernyő bekapcsolás nincs-e kikapcsolva az alkalmazásban, és az időzítés megfelel-e az igényeinek. Bluetooth kapcsolat után a {app_name} Eszköz oldalán kapcsolja be a "Csuklómozdulatra képernyő" opciót és állítsa be a kívánt időszakot.

            2. Ellenőrizze, hogy nincs-e bekapcsolva a "Ne zavarj" mód az órán, mivel ez kikapcsolja a csuklómozdulatra történő képernyő bekapcsolást.

            3. Az idő megtekintéséhez emelje fel a csuklóját úgy, hogy a képernyő Ön felé nézzen.

            {faq_note}Ha a fenti megoldások egyike sem segít, készítsen képernyőképet az óra rendszerinformációiról és a telefon rendszerbeállításairól, majd küldje el nekünk az alkalmazás visszajelzés funkcióján keresztül. Kérjük, adjon meg minél több információt a probléma hatékonyabb megoldása érdekében.`
        },
        {
            category: "device",
            question: "Hány ébresztőt állíthatok be maximum az órán?",
            answer: `
            Ez az óra modelljétől függ, általában 5 ébresztő állítható be.`
        },
        {
            category: "device",
            question: "Hogyan állíthatom be az időt az órán?",
            answer: `
            Az óra automatikusan szinkronizálja az időt a telefonnal csatlakozáskor, nincs szükség kézi beállításra.`
        },
        {
            category: "device",
            question: "Hogyan állíthatom be az óra nyelvét?",
            answer: `
            Általában az óra automatikusan szinkronizálja a nyelvet a telefonnal csatlakozáskor, nincs szükség kézi beállításra.

            {faq_note}Néhány óramodell támogatja a nyelv kézi beállítását az órán: Nyissa meg Menü > Beállítások > Nyelv és válassza ki a kívánt nyelvet.`
        },
        {
            category: "other",
            question: "Miért rövidült le az akkumulátor üzemideje?",
            answer: `
            Ha be van kapcsolva a csuklómozdulatra történő képernyő bekapcsolás, az időszakos pulzusmérés és hasonló funkciók, ezek növelik az energiafogyasztást és csökkentik az akkumulátor üzemidejét.`
        },
        {
            category: "other",
            question: "Vízálló az óra?",
            answer: `
            A vízállósággal kapcsolatban kérjük, ellenőrizze a megvásárolt óramodell használati útmutatóját, hogy támogatja-e a hétköznapi vízállóságot vagy úszást. Nem használható búvárkodáshoz, tengervízben, ugráláshoz, forró vízben, termálvízben, szaunában, nagy nyomású vízsugárban vagy más víz alatti illetve mélyvízi tevékenységhez. A bőr és fém szíjak nem alkalmasak úszáshoz. A vízállóság nem örök érvényű, a védelem szintje csökkenhet a mindennapi használat során.`
        }

    ]
}; 