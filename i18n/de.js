window.i18nData = window.i18nData || {};
window.i18nData.de = {
    searchPlaceholder: "FAQ durchsuchen...",
    pageTitle: "Häufig gestellte Fragen",
    mainTitle: "Häufig gestellte Fragen",
    subtitle: "FAQ und Fehlerbehebung für Ihre Smartwatch",
    footer: {
        copyright: "© 2025 Shenzhen Tuobu Intelligent Big Data Co., Ltd.",
    },
    categories: {
        all: "Alle",
        basic: "Grundlegende Nutzung",
        connection: "Bluetooth-Verbindung", 
        notification: "Benachrichtigungen",
        health: "Gesundheitsüberwachung",
        data: "Datensynchronisation",
        watchface: "Zifferblatt-Einstellungen",
        weather: "Wetteranzeige",
        device: "Geräteverwaltung",
        other: "Sonstiges"
    },
    faqData: [
        {
            category: "connection",
            question: "Warum kann ich meine Smartwatch nicht finden?",
            answer: `
            Bitte überprüfen Sie Folgendes:

            1. Prüfen Sie, ob die Uhr ausreichend aufgeladen ist. Laden Sie sie bei Bedarf auf.

            2. Halten Sie die Uhr in einem Abstand von maximal 0,5 Metern zu Ihrem Smartphone.

            3. Prüfen Sie, ob die Uhr bereits mit einem anderen Telefon verbunden war. Falls ja, trennen Sie zuerst die Verbindung auf dem ursprünglichen Telefon und entfernen Sie die Bluetooth-Kopplung in den Systemeinstellungen.

            4. Stellen Sie sicher, dass Bluetooth auf Ihrem Smartphone aktiviert ist. Gehen Sie zu [Einstellungen] - [Bluetooth] und überprüfen Sie den Bluetooth-Schalter.

            5. Stellen Sie sicher, dass die App die erforderlichen Bluetooth-Berechtigungen hat. Gehen Sie zu [Einstellungen] - [Apps] - [{app_name}] und überprüfen Sie die Bluetooth-Berechtigungen.

            6. Versuchen Sie, Bluetooth neu zu starten:
            Methode 1: Gehen Sie zu [Einstellungen] - [Bluetooth], schalten Sie Bluetooth aus und wieder ein.
            Methode 2: Ziehen Sie das Kontrollzentrum vom oberen Bildschirmrand nach unten und tippen Sie auf das Bluetooth-Symbol zum Aus- und wieder Einschalten.

            7. Setzen Sie die Uhr auf Werkseinstellungen zurück. Gehen Sie dazu auf der Uhr zu [Einstellungen] - [System] - [Zurücksetzen] und wählen Sie [Bestätigen].

            8. Starten Sie sowohl die Uhr als auch das Smartphone neu und versuchen Sie erneut eine Verbindung herzustellen.

            {faq_note}Wenn die obigen Methoden das Problem nicht lösen, machen Sie bitte ein Foto der Systeminformationen Ihrer Uhr und Screenshots der relevanten Systeminformationen Ihres Smartphones. Senden Sie diese über die Feedback-Funktion in der App an uns. Je mehr relevante Informationen Sie uns zur Verfügung stellen, desto besser können wir Ihnen helfen.`
        },
        {
            category: "connection", 
            question: "Wie kann ich überprüfen, ob die Uhr erfolgreich mit dem Smartphone verbunden ist?",
            answer: `
            In der Smartphone-App wird der Gerätestatus als "Verbunden" angezeigt.

            Zusätzlich wird unter iOS unter [Einstellungen] - [Bluetooth] Ihre Uhr in der Liste "Meine Geräte" mit dem Status "Verbunden" und einem blauen Ausrufezeichen angezeigt.

            Wenn Sie auf das Ausrufezeichen tippen, sehen Sie Geräteinformationen und können überprüfen, ob Optionen wie "Systembenachrichtigungen teilen" aktiviert sind.`
        },
        {
            category: "connection",
            question: "Die Bluetooth-Verbindung wird häufig unterbrochen. Was kann ich tun?",
            answer: `
            Versuchen Sie Folgendes:

            1. Stellen Sie sicher, dass sich Smartphone und Uhr in einer Umgebung mit wenig Signalstörungen befinden.

            2. Vermeiden Sie gleichzeitige Verbindungen der Uhr mit anderen Bluetooth-Geräten.

            3. Aktualisieren Sie die Firmware der Uhr und die Smartphone-App auf die neueste Version.`
        },
        {
            category: "notification",
            question: "Ich erhalte keine Benachrichtigungen auf meiner Uhr. Was kann ich tun?",
            answer: `
            Bitte überprüfen Sie Folgendes:

            1. Stellen Sie sicher, dass die Uhr mit dem Smartphone verbunden ist.

            2. Überprüfen Sie in der Smartphone-App, ob Sie die entsprechenden Benachrichtigungen aktiviert haben. Öffnen Sie [{app_name}] - [Gerät] - [Benachrichtigungen] und prüfen Sie, ob die Benachrichtigungen für die gewünschten Apps aktiviert sind.

            3. Vergewissern Sie sich, dass die Uhr mit dem Smartphone gekoppelt ist und Systembenachrichtigungen freigegeben sind. Gehen Sie dazu auf dem Smartphone zu [Einstellungen] - [Bluetooth], tippen Sie auf das Ausrufezeichen neben dem Namen Ihrer Uhr und prüfen Sie, ob [Systembenachrichtigungen teilen] aktiviert ist.

            4. Überprüfen Sie, ob die Benachrichtigungsberechtigungen auf dem Smartphone aktiviert sind. Gehen Sie zu [Einstellungen] - [Benachrichtigungen] und prüfen Sie die Einstellungen.

            5. Stellen Sie sicher, dass die entsprechende App auf dem Smartphone installiert ist und Benachrichtigungsberechtigungen hat. Am Beispiel WhatsApp: Gehen Sie zu [Einstellungen] - [Apps] - [WhatsApp] - [Benachrichtigungen] und prüfen Sie, ob [Benachrichtigungen erlauben] aktiviert ist und die Benachrichtigungstypen korrekt eingestellt sind.

            {faq_note}Wenn die obigen Methoden das Problem nicht lösen, machen Sie bitte ein Foto der Systeminformationen Ihrer Uhr und Screenshots der relevanten Systeminformationen Ihres Smartphones. Senden Sie diese über die Feedback-Funktion in der App an uns. Je mehr relevante Informationen Sie uns zur Verfügung stellen, desto besser können wir Ihnen helfen.`
        },
        {
            category: "notification",
            question: "Ich erhalte nur von einigen Apps Benachrichtigungen auf der Uhr. Wie kann ich das beheben?",
            answer: `
            Stellen Sie sicher, dass Sie in den Benachrichtigungseinstellungen der Smartphone-App die Berechtigungen für jede gewünschte App einzeln aktiviert haben und diese mit der Uhr synchronisiert wurden.

            Gehen Sie dazu zu [{app_name}] - [Gerät] - [Benachrichtigungen] und aktivieren Sie die Benachrichtigungen für die gewünschten Apps.`
        },
        {
            category: "data",
            question: "Wie kann ich meine Aktivitäts- und Gesundheitsdaten in der Smartphone-App einsehen?",
            answer: `
            Wenn Sie Aktivitäten durchführen und Gesundheitsdaten auf Ihrer Uhr messen, werden diese automatisch auf der Uhr gespeichert und bei Verbindung mit der Smartphone-App synchronisiert.

            Falls die Daten noch nicht synchronisiert wurden, können Sie in der App nach unten ziehen, um die Synchronisation manuell zu starten.

            Nach der Synchronisation können Sie in der App Ihre Herzfrequenz, Schritte, Schlaf, Stress, Blutsauerstoff, Temperatur, Aktivitäten und weitere Daten einsehen.`
        },
        {
            category: "health",
            question: "Meine Aktivitäts- und Gesundheitsdaten sind ungenau. Was kann ich tun?",
            answer: `
            Bitte überprüfen Sie, ob Ihre persönlichen Informationen korrekt eingegeben wurden. Die Messalgorithmen einiger Uhrenfunktionen basieren auf Ihren persönlichen Daten wie Geschlecht, Größe, Gewicht und Alter. Stellen Sie sicher, dass diese Informationen korrekt sind, um genauere Aktivitäts- und Gesundheitsdaten zu erhalten.`
        },
        {
            category: "data",
            question: "Die Daten auf der Uhr stimmen nicht mit denen in der App überein. Was kann ich tun?",
            answer: `
            Bitte überprüfen Sie Folgendes:

            1. Ob die Daten von der Uhr mit der App synchronisiert wurden. Falls nicht, ziehen Sie in der App nach unten, um die Synchronisation manuell zu starten. Prüfen Sie anschließend, ob die Daten übereinstimmen.

            2. Ob die Uhr mit anderen Smartphones verbunden war und die Daten möglicherweise mit einer anderen App synchronisiert wurden.

            {faq_note}Grundsätzlich empfehlen wir nicht, eine Uhr gleichzeitig mit mehreren Smartphones oder Apps zu verbinden, da dies zu Inkonsistenzen bei der Datensynchronisation oder sogar zu Datenverlust führen kann. Außerdem werden die Tagesdaten in der App kumulativ addiert, während die Daten auf der Uhr nach einer neuen Kopplung zurückgesetzt werden. Dies kann zu Abweichungen zwischen den Daten auf der Uhr und in der App führen. Bei Schlafdaten beispielsweise: Wenn Sie die Uhr direkt nach der Verbindung mit der App entkoppeln, wurden die Daten möglicherweise noch nicht synchronisiert (die Synchronisation kann aufgrund der Datenmenge einige Zeit dauern). Die Daten auf der Uhr werden gelöscht und in der App fehlen dann die Schlafdaten. Wir empfehlen daher, bei einer notwendigen Entkopplung nach dem Verbinden mit der App zu warten, bis die Datensynchronisation abgeschlossen ist, bevor Sie die Uhr entkoppeln.`
        },
        {
            category: "weather",
            question: "Die Wetteranzeige auf der Uhr funktioniert nicht. Wie kann ich das beheben?",
            answer: `
            Bitte überprüfen Sie Folgendes:

            1. Stellen Sie sicher, dass Ihre Uhr die Wetterfunktion unterstützt. Wenn nicht, kann kein Wetter angezeigt werden. Prüfen Sie, ob [Wetter] im Menü der Uhr vorhanden ist.

            2. Vergewissern Sie sich, dass die [Standortdienste] auf Ihrem Smartphone aktiviert sind. Gehen Sie zu [Einstellungen] - [Datenschutz & Sicherheit] - [Standortdienste] und prüfen Sie, ob diese aktiviert sind.

            3. Stellen Sie sicher, dass {app_name} Zugriff auf Standortdienste hat. Gehen Sie zu [Einstellungen] - [Apps] - [{app_name}] - [Standort] und wählen Sie [Immer] oder [Während App-Nutzung].

            4. Überprüfen Sie, ob {app_name} normal auf das Internet zugreifen kann. Öffnen Sie [{app_name}] - [Gerät] - [Zifferblatt-Einstellungen] und prüfen Sie, ob die App die Cloud-Zifferblattliste abrufen kann. Sie können dies auch auf andere Weise überprüfen. Bei Problemen mit dem Internetzugang empfehlen wir, die App zu deinstallieren, das Smartphone neu zu starten und die App neu zu installieren. Denken Sie daran, beim ersten Start der App den Internetzugriff zu erlauben.

            5. Prüfen Sie in der Smartphone-App, ob die Wetter-Push-Funktion aktiviert ist. Öffnen Sie [{app_name}] - [Gerät] - [Wetter-Push] und überprüfen Sie die Aktivierung.

            6. Versuchen Sie, den [Wetter-Push]-Schalter aus- und wieder einzuschalten und prüfen Sie, ob das Wetter dann normal angezeigt wird.

            {faq_note}Die Wetterfunktion basiert auf dem aktuellen Standort Ihres Smartphones, um Wetterinformationen für Ihren Standort abzurufen. Außerdem benötigt die Funktion Internetzugang. Bei instabiler Netzwerkverbindung oder eingeschränktem Netzwerkzugriff der App können keine Wetterinformationen aus dem Internet abgerufen werden.<br/>
            Wenn die obigen Methoden das Problem nicht lösen, machen Sie bitte ein Foto der Systeminformationen Ihrer Uhr und Screenshots der relevanten Systeminformationen Ihres Smartphones. Senden Sie diese über die Feedback-Funktion in der App an uns. Je mehr relevante Informationen Sie uns zur Verfügung stellen, desto besser können wir Ihnen helfen.`
        },
        {
            category: "weather",
            question: "Die Wetterdaten auf der Uhr sind ungenau. Was kann ich tun?",
            answer: `
            Überprüfen Sie Folgendes:

            1. Ob die GPS-Ortung Ihres Smartphones genau ist. Bei ungenauen GPS-Daten können auch die Wetterdaten nicht genau sein. Wir empfehlen, GPS an einem offenen Ort zu aktivieren und zu prüfen, ob die Standortbestimmung normal funktioniert.

            2. Prüfen Sie auf der Uhr die Aktualisierungszeit der Wetterdaten und ob diese möglicherweise veraltet sind. In diesem Fall öffnen Sie die Smartphone-App, gehen zu [Gerät] - [Wetter-Push], deaktivieren Sie den Wetter-Push und aktivieren Sie ihn erneut. Prüfen Sie dann, ob das Wetter normal angezeigt wird.

            {faq_note}Wenn die obigen Methoden das Problem nicht lösen, machen Sie bitte ein Foto der Systeminformationen Ihrer Uhr und Screenshots der relevanten Systeminformationen Ihres Smartphones. Senden Sie diese über die Feedback-Funktion in der App an uns. Je mehr relevante Informationen Sie uns zur Verfügung stellen, desto besser können wir Ihnen helfen.`
        },
        {
            category: "watchface",
            question: "Wie übertrage ich ein Cloud-Zifferblatt auf die Uhr?",
            answer: `
            Folgen Sie diesen Schritten:

            1. Öffnen Sie in {app_name} [Gerät] - [Zifferblatt-Einstellungen] und wählen Sie Ihr gewünschtes Zifferblatt.

            2. Tippen Sie im erscheinenden Fenster auf [Zifferblatt synchronisieren].

            3. Warten Sie, bis das Zifferblatt heruntergeladen wurde. Anschließend wird es automatisch auf die Uhr übertragen.

            4. Nach Abschluss der Übertragung wechselt die Uhr automatisch zum neuen Zifferblatt.`
        },
        {
            category: "watchface",
            question: "Wie kann ich ein Zifferblatt individuell anpassen und auf die Uhr übertragen?",
            answer: `
            Folgen Sie diesen Schritten:

            1. Öffnen Sie in {app_name} [Gerät] - [Zifferblatt-Einstellungen] und tippen Sie auf den [Zifferblatt anpassen]-Eintrag (erste Option oben links mit Bearbeiten-Symbol).

            2. Passen Sie nach Ihren Wünschen den Hintergrund, die Position von Datum und Uhrzeit sowie den Stil des Zifferblatts an.

            3. Tippen Sie auf [Als Zifferblatt festlegen].

            4. Warten Sie, bis das individuelle Zifferblatt erstellt wurde. Anschließend wird es automatisch auf die Uhr übertragen.

            5. Nach Abschluss der Übertragung wechselt die Uhr automatisch zum neuen Zifferblatt.`
        },
        {
            category: "basic",
            question: "Wie schalte ich die Smartwatch ein und aus?",
            answer: `
            Folgen Sie diesen Schritten:

            1. Einschalten: Halten Sie den seitlichen Knopf der Uhr 3-5 Sekunden gedrückt, bis der Bildschirm aufleuchtet. Bei entladener Uhr schaltet sie sich nach etwa einer Minute Ladezeit automatisch ein und zeigt den Hauptbildschirm.

            2. Ausschalten: Halten Sie den seitlichen Knopf der Uhr 3-5 Sekunden gedrückt, wählen Sie im erscheinenden Menü [Ausschalten] und bestätigen Sie mit [OK]. Die Uhr zeigt "Goodbye" an und schaltet sich aus.`
        },
        {
            category: "basic",
            question: "Wie setze ich die Smartwatch auf Werkseinstellungen zurück?",
            answer: `
            Folgen Sie diesen Schritten:

            Methode 1: Direkt auf der Uhr - Öffnen Sie [Einstellungen] - [System] - [Zurücksetzen] und wählen Sie [Bestätigen].

            Methode 2: Direkt auf der Uhr - Halten Sie den seitlichen Knopf 3-5 Sekunden gedrückt, wählen Sie [Werkseinstellungen] und bestätigen Sie mit [OK].

            Methode 3: Über die Smartphone-App - Öffnen Sie [Gerät] - [Auf Werkseinstellungen zurücksetzen] und wählen Sie [Bestätigen].`
        },
        {
            category: "basic",
            question: "Wie trenne ich die Verbindung zwischen App und Smartwatch?",
            answer: `
            Folgen Sie diesen Schritten:

            1. Öffnen Sie in der Smartphone-App die [Gerät]-Seite, scrollen Sie ganz nach unten und wählen Sie [Gerät entkoppeln]. Bestätigen Sie mit [OK].

            2. Heben Sie die Bluetooth-Kopplung zwischen Smartwatch und Smartphone auf. Gehen Sie dazu in [Einstellungen] - [Bluetooth], tippen Sie auf das Ausrufezeichen neben dem Bluetooth-Namen der Uhr und wählen Sie [Dieses Gerät ignorieren].

            {faq_note}Nach dem Entkoppeln der Uhr müssen Sie unbedingt auch die Bluetooth-Kopplung in den Systemeinstellungen aufheben. Andernfalls kann die Uhr beim nächsten Kopplungsversuch möglicherweise nicht gefunden werden.`
        },
        {
            category: "basic",
            question: "Wie beende ich einen Anruf?",
            answer: `
            Wenn Sie einen eingehenden Anruf auf der Uhr erhalten, halten Sie den seitlichen Knopf 3 Sekunden gedrückt, um den Anruf zu beenden.`
        },
        {
            category: "basic",
            question: "Wie funktioniert die Shake-to-Capture Fotofunktion?",
            answer: `
            Folgen Sie diesen Schritten:

            1. Öffnen Sie in der Smartphone-App [Gerät] - [Shake-to-Capture]. Wenn Sie nach der Erlaubnis für den "Zugriff auf die Kamera" gefragt werden, wählen Sie [Erlauben].

            2. Schütteln Sie die Uhr oder tippen Sie auf das Kamera-Symbol auf der Uhr, um ein Foto aufzunehmen.`
        },
        {
            category: "basic",
            question: "Wie verwende ich die Musiksteuerung?",
            answer: `
            Bei bestehender Verbindung zwischen Uhr und Smartphone öffnen Sie den Musik-Player auf dem Smartphone und spielen Sie Musik aus Ihrer Download-Liste ab. Im Musik-Interface der Uhr können Sie mit den seitlichen Tasten vor- und zurückspringen und mit der mittleren Taste die Wiedergabe pausieren oder fortsetzen.

            {faq_note}Einige vorinstallierte Musik-Player werden nicht unterstützt. Die Funktion funktioniert mit QQ Music, NetEase Cloud Music, PLAY Music und anderen.`
        },
        {
            category: "device",
            question: "Die Firmware-Aktualisierung ist fehlgeschlagen. Was kann ich tun?",
            answer: `
            Bei fehlgeschlagener Firmware-Aktualisierung versuchen Sie Folgendes:

            1. Stellen Sie sicher, dass die Uhr ausreichend geladen ist. Niedriger Akkustand kann zum Fehlschlagen der Aktualisierung führen.

            2. Überprüfen Sie die stabile Verbindung zwischen Uhr und Smartphone. Eine instabile Verbindung kann zum Fehlschlagen führen.

            3. Stellen Sie sicher, dass Uhr und Smartphone im gleichen Netzwerk sind. Eine instabile Netzwerkverbindung kann zum Fehlschlagen führen.

            4. Trennen Sie während der Aktualisierung nicht die Verbindung zwischen Uhr und Smartphone.

            5. Beenden Sie während der Aktualisierung nicht den App-Prozess.

            6. Verlassen Sie während der Aktualisierung nicht den Aktualisierungsbildschirm und lassen Sie den Bildschirm nicht ausschalten.

            7. Bei manchen Uhren gibt es nach fehlgeschlagener Aktualisierung eine zweiminütige Wartezeit (ohne Reaktion des Geräts), bevor die Verbindung wieder aktiviert wird. Bitte haben Sie Geduld.

            {faq_note}Wenn die obigen Methoden das Problem nicht lösen, machen Sie bitte ein Foto der Systeminformationen Ihrer Uhr und Screenshots der relevanten Systeminformationen Ihres Smartphones. Senden Sie diese über die Feedback-Funktion in der App an uns. Je mehr relevante Informationen Sie uns zur Verfügung stellen, desto besser können wir Ihnen helfen.`
        },
        {
            category: "device",
            question: "Das Gerät zeigt nach dem Laden keine Reaktion. Woran liegt das?",
            answer: `
            Bei längerer Nichtbenutzung geht die Uhr in einen Energiesparmodus. Laden Sie sie etwa eine halbe Stunde mit einem Smartphone-Ladegerät auf, um sie zu aktivieren.

            {faq_note}Verwenden Sie zum Laden am besten ein Smartphone-Ladegerät. Der Ladestrom über USB am Computer ist oft zu schwach, besonders bei niedrigem Akkustand.`
        },
        {
            category: "device",
            question: "Warum funktioniert die Bildschirmaktivierung beim Anheben nicht?",
            answer: `
            Bitte überprüfen Sie Folgendes:

            1. Prüfen Sie in der App, ob die Handgelenk-Aktivierung deaktiviert ist und ob die eingestellten Zeiträume Ihren Bedürfnissen entsprechen. Bei bestehender Bluetooth-Verbindung öffnen Sie in {app_name} [Gerät] - [Handgelenk-Aktivierung] und stellen Sie die gewünschten Zeiträume ein.

            2. Prüfen Sie, ob der Nicht-Stören-Modus aktiviert ist. Bei aktiviertem Nicht-Stören-Modus funktioniert die Handgelenk-Aktivierung nicht.

            3. Heben Sie das Handgelenk so an, dass der Bildschirm zu Ihnen zeigt.

            {faq_note}Wenn die obigen Methoden das Problem nicht lösen, machen Sie bitte ein Foto der Systeminformationen Ihrer Uhr und Screenshots der relevanten Systeminformationen Ihres Smartphones. Senden Sie diese über die Feedback-Funktion in der App an uns. Je mehr relevante Informationen Sie uns zur Verfügung stellen, desto besser können wir Ihnen helfen.`
        },
        {
            category: "device",
            question: "Wie viele Wecker kann ich maximal auf der Uhr einstellen?",
            answer: `
            Dies hängt von Ihrem Uhrenmodell ab. Normalerweise können 5 Wecker eingestellt werden.`
        },
        {
            category: "device",
            question: "Wie stelle ich die Uhrzeit auf der Smartwatch ein?",
            answer: `
            Die Uhrzeit wird automatisch synchronisiert, wenn die Uhr mit dem Smartphone verbunden ist. Eine manuelle Einstellung ist nicht erforderlich.`
        },
        {
            category: "device",
            question: "Wie stelle ich die Sprache der Smartwatch ein?",
            answer: `
            Normalerweise wird die Sprache automatisch synchronisiert, wenn die Uhr mit dem Smartphone verbunden ist. Eine manuelle Einstellung ist nicht erforderlich.

            {faq_note}Einige Uhrenmodelle erlauben die Spracheinstellung direkt auf der Uhr. Gehen Sie dazu zu [Menü] - [Einstellungen] - [Sprache] und wählen Sie Ihre gewünschte Sprache.`
        },
        {
            category: "other",
            question: "Warum ist die Akkulaufzeit kürzer geworden?",
            answer: `
            Wenn Funktionen wie Handgelenk-Aktivierung oder regelmäßige Herzfrequenzmessung aktiviert sind, erhöht dies den Stromverbrauch und verkürzt die Akkulaufzeit.`
        },
        {
            category: "other",
            question: "Ist die Smartwatch wasserdicht?",
            answer: `
            Informationen zur Wasserdichtigkeit finden Sie in der Bedienungsanleitung Ihres spezifischen Uhrenmodells. Prüfen Sie dort, ob es für normalen Wasserkontakt oder Schwimmen geeignet ist. Nicht geeignet für Tauchen, Salzwasser, Sprünge ins Wasser, heißes Wasser, Thermalquellen, Sauna oder andere Wasseraktivitäten mit hohem Druck oder in der Tiefe. Leder- und Metallarmbänder sind nicht zum Schwimmen geeignet. Die Wasserdichtigkeit ist nicht dauerhaft gewährleistet und kann durch täglichen Verschleiß nachlassen.`
        }

    ]
}; 