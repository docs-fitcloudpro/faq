window.i18nData = window.i18nData || {};
window.i18nData.it = {
    searchPlaceholder: "Cerca nelle FAQ...",
    pageTitle: "FAQ",
    mainTitle: "Domande frequenti",
    subtitle: "FAQ e guida alla risoluzione dei problemi per smartwatch",
    footer: {
        copyright: "© 2025 Shenzhen Tuobu Smart Big Data Co., Ltd",
    },
    categories: {
        all: "Tutto",
        basic: "Uso base",
        connection: "Connessione Bluetooth",
        notification: "Notifiche",
        health: "Monitoraggio salute",
        data: "Sincronizzazione dati", 
        watchface: "Quadranti",
        weather: "Meteo",
        device: "Gestione dispositivo",
        other: "Altro"
    },
    faqData: [
        {
            category: "connection",
            question: "Perché non riesco a trovare il mio smartwatch?",
            answer: `
            Si prega di controllare quanto segue:

            1. Verificare che lo smartwatch abbia batteria sufficiente. Se la batteria è scarica, ricaricarla.

            2. Mantenere lo smartwatch entro 0,5 metri dal telefono.

            3. Verificare se altri telefoni sono stati precedentemente associati allo smartwatch. In tal caso, dissociare prima lo smartwatch dal telefono originale e rimuovere l'associazione Bluetooth nelle impostazioni del telefono prima di associarlo nuovamente.

            4. Nelle impostazioni del telefono, assicurarsi che il Bluetooth sia attivo. Nello specifico, aprire [Impostazioni] - [Bluetooth] e verificare che l'interruttore Bluetooth sia attivo.

            5. Assicurarsi che l'app abbia i permessi Bluetooth necessari. Nello specifico, aprire [Impostazioni] - [App] - [{app_name}] e verificare che i permessi Bluetooth siano stati concessi.

            6. Provare a riavviare il Bluetooth del telefono:
            Metodo 1: Aprire [Impostazioni] - [Bluetooth], disattivare e riattivare il Bluetooth.
            Metodo 2: Scorrere verso il basso dalla parte superiore dello schermo per accedere al Centro di Controllo, toccare l'icona Bluetooth per disattivarlo e poi riattivarlo.

            7. Ripristinare le impostazioni di fabbrica dello smartwatch. Nello specifico, sullo smartwatch aprire [Impostazioni] - [Sistema] - [Ripristino di fabbrica] e selezionare [Conferma].

            8. Riavviare sia lo smartwatch che il telefono e riprovare la connessione.

            {faq_note}Se i metodi sopra indicati non risolvono il problema, provare a scattare una foto delle informazioni di sistema dello smartwatch e degli screenshot delle informazioni di sistema del telefono, e inviarci un feedback tramite la funzione di feedback nell'app. Quando ci contattate, cercate di fornire più informazioni possibili per aiutarci a risolvere meglio il problema.`
        },
        {
            category: "connection", 
            question: "Come verificare se lo smartwatch è connesso correttamente al telefono?",
            answer: `
            Nell'app del telefono, lo stato del dispositivo dovrebbe mostrare "Connesso".

            Inoltre, su iOS aprire [Impostazioni] - [Bluetooth], il nome Bluetooth del vostro smartwatch dovrebbe apparire nell'elenco "I miei dispositivi" con stato "Connesso" e un punto esclamativo blu.

            Toccando il punto esclamativo si possono vedere le informazioni del dispositivo, e interruttori come "Condividi notifiche di sistema" dovrebbero essere attivi.`
        },
        {
            category: "connection",
            question: "La connessione Bluetooth si disconnette spesso, come posso migliorarla?",
            answer: `
            Provare i seguenti metodi:

            1. Assicurarsi che telefono e smartwatch siano in un ambiente con poche interferenze.

            2. Evitare di connettere lo smartwatch contemporaneamente ad altri dispositivi Bluetooth.

            3. Aggiornare il firmware dello smartwatch e la versione dell'app del telefono.`
        },
        {
            category: "notification",
            question: "Lo smartwatch non riceve le notifiche del telefono, cosa posso fare?",
            answer: `
            Si prega di controllare quanto segue:

            1. Verificare che lo smartwatch sia connesso al telefono.

            2. Nell'app del telefono, confermare di aver abilitato le notifiche corrispondenti. Nello specifico, aprire [{app_name}] - [Dispositivo] - [Notifiche] e verificare che le notifiche per le app corrispondenti siano abilitate.

            3. Verificare che lo smartwatch sia associato al Bluetooth del telefono e che la condivisione delle notifiche di sistema sia attiva. Nello specifico, sul telefono aprire [Impostazioni] - [Bluetooth], toccare il punto esclamativo accanto al nome Bluetooth dello smartwatch nell'elenco "I miei dispositivi" e verificare che "Condividi notifiche di sistema" sia attivo.

            4. Verificare che le autorizzazioni per le notifiche siano abilitate sul telefono. Nello specifico, sul telefono aprire [Impostazioni] - [Notifiche] e verificare che tutte le impostazioni siano corrette.

            5. Verificare che l'app corrispondente allo smartwatch sia installata sul telefono e che le autorizzazioni per le notifiche siano abilitate. Ad esempio per WhatsApp, sul telefono aprire [Impostazioni] - [App] - [WhatsApp] - [Notifiche], verificare che "Consenti notifiche" sia attivo e controllare che le impostazioni dei tipi di avviso siano corrette.

            {faq_note}Se i metodi sopra indicati non risolvono il problema, provare a scattare una foto delle informazioni di sistema dello smartwatch e degli screenshot delle informazioni di sistema del telefono, e inviarci un feedback tramite la funzione di feedback nell'app. Quando ci contattate, cercate di fornire più informazioni possibili per aiutarci a risolvere meglio il problema.`
        },
        {
            category: "notification",
            question: "Lo smartwatch riceve solo le notifiche di alcune app, come posso risolvere?",
            answer: `
            Assicurarsi di abilitare singolarmente i permessi di notifica per le app desiderate nell'app del telefono e sincronizzarle con lo smartwatch.

            Nello specifico, aprire [{app_name}] - [Dispositivo] - [Notifiche] e attivare le notifiche per le app corrispondenti.`
        },
        {
            category: "data",
            question: "Come posso visualizzare i miei dati di attività e salute nell'app del telefono?",
            answer: `
            Quando effettui misurazioni di attività e salute sullo smartwatch, i dati vengono automaticamente registrati sullo smartwatch e sincronizzati con l'app del telefono quando ti connetti.
            
            Se i dati non sono ancora stati sincronizzati, puoi provare a trascinare verso il basso la schermata principale dell'app per sincronizzare manualmente i dati di attività e salute.
            
            Una volta completata la sincronizzazione, potrai visualizzare nell'app i dati relativi a frequenza cardiaca, passi, sonno, stress, ossigeno nel sangue, temperatura corporea, attività fisica e altro ancora.`
        },
        {
            category: "health",
            question: "I miei dati di attività e salute non sono accurati, cosa posso fare?",
            answer: `
            Verificare che le informazioni del proprio profilo personale siano state inserite correttamente. Nello specifico, alcuni algoritmi di misurazione delle funzioni dello smartwatch si basano su informazioni personali come sesso, altezza, peso ed età. Assicurarsi che questi dati siano accurati per ottenere dati di attività e salute più precisi.`
        },
        {
            category: "data",
            question: "I dati sullo smartwatch non corrispondono a quelli nell'app, cosa posso fare?",
            answer: `
            Si prega di controllare quanto segue:

            1. Verificare che i dati dello smartwatch siano stati sincronizzati con l'app. In caso contrario, trascinare verso il basso la schermata principale dell'app per sincronizzare manualmente i dati di attività e salute, quindi verificare se i dati corrispondono.

            2. Verificare se lo smartwatch è stato connesso ad altri telefoni e se i dati sono stati sincronizzati con app su altri telefoni.

            {faq_note}In generale, sconsigliamo di connettere lo stesso smartwatch a più telefoni o app contemporaneamente, poiché ciò potrebbe causare inconsistenze nella sincronizzazione dei dati o persino perdita di dati. Inoltre, per garantire che i dati non vadano persi, i dati del giorno corrente nell'app vengono accumulati, mentre i dati sullo smartwatch vengono azzerati dopo una nuova associazione. Se lo smartwatch è stato riassociato, i dati sullo smartwatch potrebbero non corrispondere a quelli nell'app. Ad esempio, per i dati del sonno, se si disassocia lo smartwatch subito dopo averlo connesso all'app del telefono, i dati sullo smartwatch potrebbero non avere il tempo di sincronizzarsi con l'app (la sincronizzazione richiede solitamente del tempo a causa della grande quantità di dati). In questo caso i dati sullo smartwatch verranno cancellati e nell'app potrebbero mancare i dati del sonno. Pertanto, se è necessario disassociare lo smartwatch, consigliamo di non farlo immediatamente dopo averlo connesso all'app del telefono, ma di attendere che i dati dello smartwatch siano completamente sincronizzati prima di disassociarlo.`
        },
        {
            category: "weather",
            question: "Il meteo non viene visualizzato sullo smartwatch, come posso risolvere?",
            answer: `
            Si prega di controllare quanto segue:

            1. Verificare che lo smartwatch supporti la funzione meteo. Se lo smartwatch non supporta questa funzione, non potrà visualizzare il meteo. Nello specifico, controllare se nel menu dello smartwatch è presente la voce [Meteo].

            2. Verificare che i [Servizi di localizzazione] del telefono siano attivi. Nello specifico, aprire [Impostazioni] - [Privacy e sicurezza] - [Servizi di localizzazione] e verificare che i servizi di localizzazione siano attivi.

            3. Verificare di aver autorizzato {app_name} a utilizzare i servizi di localizzazione. Nello specifico, aprire [Impostazioni] - [App] - [{app_name}] - [Posizione] e verificare di aver selezionato [Sempre] o [Durante l'uso dell'app].

            4. Verificare che {app_name} possa accedere normalmente a Internet. Nello specifico, aprire [{app_name}] - [Dispositivo] - [Quadranti] e verificare se l'app riesce a ottenere normalmente l'elenco dei quadranti cloud, oppure utilizzare altri metodi per verificarlo. Se non è possibile accedere normalmente a Internet, si consiglia di eliminare l'app, riavviare il telefono e reinstallare l'app. Ricordarsi di consentire all'app di accedere a Internet al primo avvio.

            5. Nell'app del telefono, verificare se la funzione di notifica meteo è attiva. Nello specifico, aprire [{app_name}] - [Dispositivo] - [Notifiche meteo] e verificare se la funzione è attiva.

            6. Provare a disattivare e riattivare l'interruttore [Notifiche meteo] per vedere se il meteo viene visualizzato normalmente.

            {faq_note}La funzione meteo dipende dalla posizione attuale del telefono, utilizzata principalmente per ottenere le informazioni meteo della vostra località. Inoltre, la funzione meteo dipende dall'accesso a Internet. Se la connessione di rete del telefono è instabile o l'accesso alla rete dell'app è limitato, non sarà possibile ottenere le informazioni meteo da Internet.<br/>
            Se i metodi sopra indicati non risolvono il problema, provare a scattare una foto delle informazioni di sistema dello smartwatch e degli screenshot delle informazioni di sistema del telefono, e inviarci un feedback tramite la funzione di feedback nell'app. Quando ci contattate, cercate di fornire più informazioni possibili per aiutarci a risolvere meglio il problema.`
        },
        {
            category: "weather",
            question: "I dati meteo sullo smartwatch non sono accurati, cosa posso fare?",
            answer: `
            Controllare quanto segue:

            1. Verificare se il GPS del telefono è accurato. Se la localizzazione GPS del telefono non è accurata, anche i dati meteo non potranno essere accurati. Si consiglia di aprire il GPS del telefono in uno spazio aperto e verificare se è possibile ottenere normalmente le informazioni sulla posizione.

            2. Controllare l'ora di aggiornamento del meteo sullo smartwatch per verificare se le informazioni meteo sono scadute. In caso affermativo, provare ad aprire l'app del telefono, andare su [Dispositivo] - [Notifiche meteo], disattivare e riattivare le notifiche meteo per vedere se il meteo viene visualizzato normalmente.

            {faq_note}Se i metodi sopra indicati non risolvono il problema, provare a scattare una foto delle informazioni di sistema dello smartwatch e degli screenshot delle informazioni di sistema del telefono, e inviarci un feedback tramite la funzione di feedback nell'app. Quando ci contattate, cercate di fornire più informazioni possibili per aiutarci a risolvere meglio il problema.`
        },
        {
            category: "watchface",
            question: "Come caricare un quadrante cloud sullo smartwatch",
            answer: `
            Procedura:

            1. In {app_name}, aprire [Dispositivo] - [Quadranti] e selezionare il quadrante desiderato.

            2. Nella finestra popup, toccare [Sincronizza quadrante].

            3. Attendere l'inizio del download del quadrante. Al termine, il quadrante verrà automaticamente caricato sullo smartwatch.

            4. Attendere il completamento del caricamento del quadrante. Lo smartwatch cambierà automaticamente il quadrante.`
        },
        {
            category: "watchface",
            question: "Come personalizzare un quadrante e caricarlo sullo smartwatch?",
            answer: `
            Procedura:

            1. In {app_name}, aprire [Dispositivo] - [Quadranti], quindi toccare l'icona [Personalizza quadrante] (la prima in alto a sinistra, con un'icona di modifica al centro) per accedere alla pagina di personalizzazione del quadrante.

            2. Modificare lo sfondo del quadrante, la posizione di data e ora e lo stile del quadrante secondo le proprie preferenze.

            3. Toccare il pulsante [Imposta come quadrante].

            4. Attendere la generazione del quadrante personalizzato. Al termine, verrà automaticamente caricato sullo smartwatch.

            5. Attendere il completamento del caricamento del quadrante. Lo smartwatch cambierà automaticamente il quadrante.`
        },
        {
            category: "basic",
            question: "Come accendere e spegnere lo smartwatch?",
            answer: `
            Procedura:

            1. Accensione: Tenere premuto il pulsante laterale dello smartwatch per 3-5 secondi fino all'accensione dello schermo. Quando lo smartwatch è scarico, si accenderà automaticamente dopo circa 1 minuto di ricarica e mostrerà la schermata principale.

            2. Spegnimento: Tenere premuto il pulsante laterale dello smartwatch per 3-5 secondi, selezionare [Spegni] nella finestra popup, toccare [Conferma]. Lo smartwatch mostrerà il messaggio "Goodbye" e si spegnerà automaticamente.`
        },
        {
            category: "basic",
            question: "Come ripristinare le impostazioni di fabbrica dello smartwatch?",
            answer: `
            Procedura:

            Metodo 1: Ripristinare le impostazioni di fabbrica dallo smartwatch. Nello specifico, sullo smartwatch aprire [Impostazioni] - [Sistema] - [Ripristino di fabbrica] e selezionare [Conferma].

            Metodo 2: Ripristinare le impostazioni di fabbrica dallo smartwatch. Nello specifico, tenere premuto il pulsante laterale dello smartwatch per 3-5 secondi, selezionare [Ripristino di fabbrica] nella finestra popup e selezionare [Conferma].

            Metodo 3: Ripristinare le impostazioni di fabbrica dall'app del telefono. Nello specifico, nell'app del telefono aprire [Dispositivo] - [Ripristino di fabbrica] e selezionare [Conferma].`
        },
        {
            category: "basic",
            question: "Come disassociare l'app dallo smartwatch?",
            answer: `
            Procedura:

            1. Nell'app del telefono, aprire la pagina [Dispositivo], scorrere fino in fondo e selezionare [Disassocia dispositivo], quindi selezionare [Conferma].

            2. Annullare l'associazione Bluetooth tra lo smartwatch e il telefono. Nello specifico, sul telefono aprire [Impostazioni] - [Bluetooth], toccare il punto esclamativo accanto al nome Bluetooth dello smartwatch nell'elenco "I miei dispositivi" e selezionare [Ignora questo dispositivo].

            {faq_note}Dopo aver disassociato lo smartwatch, è necessario annullare manualmente l'associazione Bluetooth tra lo smartwatch e il telefono nelle impostazioni di sistema, altrimenti alla prossima associazione potrebbe non essere possibile trovare lo smartwatch e quindi non sarà possibile associarlo.`
        },
        {
            category: "basic",
            question: "Come terminare una chiamata?",
            answer: `
            Quando lo smartwatch riceve una notifica di chiamata in arrivo, tenere premuto il pulsante laterale dello smartwatch per 3 secondi per terminare la chiamata.`
        },
        {
            category: "basic",
            question: "Come si usa la funzione foto con scuotimento?",
            answer: `
            Procedura:

            1. Nell'app del telefono, aprire [Dispositivo] - [Foto con scuotimento]. Se viene chiesto il permesso di "accedere alla fotocamera del telefono", selezionare [Consenti].

            2. Scuotere lo smartwatch o toccare l'icona della fotocamera sullo smartwatch per scattare una foto.`
        },
        {
            category: "basic",
            question: "Come si usa il controllo della musica?",
            answer: `
            Quando lo smartwatch è connesso correttamente al telefono, aprire il lettore musicale del telefono e riprodurre la musica dalla playlist scaricata. Nella schermata musica del dispositivo, premere i tasti sinistra e destra per cambiare brano, toccare il pulsante centrale per mettere in pausa o riprodurre la musica.

            {faq_note}Alcuni lettori musicali integrati nei telefoni non sono supportati. Sono supportati lettori come QQ Music, NetEase Cloud Music, PLAY Music ecc.`
        },
        {
            category: "device",
            question: "L'aggiornamento del firmware dello smartwatch è fallito, cosa posso fare?",
            answer: `
            Se l'aggiornamento del firmware dello smartwatch fallisce, provare i seguenti metodi:

            1. Assicurarsi che lo smartwatch abbia batteria sufficiente. Una batteria scarica potrebbe causare il fallimento dell'aggiornamento del firmware.

            2. Assicurarsi che la connessione tra smartwatch e telefono sia stabile. Una connessione instabile potrebbe causare il fallimento dell'aggiornamento del firmware.

            3. Assicurarsi che smartwatch e telefono siano nella stessa rete. Una rete instabile potrebbe causare il fallimento dell'aggiornamento del firmware.

            4. Durante l'aggiornamento del firmware, non disconnettere lo smartwatch dal telefono, altrimenti potrebbe causare il fallimento dell'aggiornamento.

            5. Durante l'aggiornamento del firmware, non chiudere il processo dell'app, altrimenti potrebbe causare il fallimento dell'aggiornamento.

            6. Durante l'aggiornamento del firmware, non uscire dalla schermata di aggiornamento o spegnere lo schermo, altrimenti potrebbe causare il fallimento dell'aggiornamento.

            7. Alcuni smartwatch potrebbero richiedere un'attesa di due minuti dopo un aggiornamento fallito (durante i quali il dispositivo non mostrerà alcuna reazione) prima di riattivare la connessione. Si prega di attendere pazientemente.

            {faq_note}Se i metodi sopra indicati non risolvono il problema, provare a scattare una foto delle informazioni di sistema dello smartwatch e degli screenshot delle informazioni di sistema del telefono, e inviarci un feedback tramite la funzione di feedback nell'app. Quando ci contattate, cercate di fornire più informazioni possibili per aiutarci a risolvere meglio il problema.`
        },
        {
            category: "device",
            question: "Il dispositivo non risponde dopo un po' di ricarica, qual è il motivo?",
            answer: `
            Quando lo smartwatch non viene utilizzato per un lungo periodo, entra in uno stato di batteria scarica. Si prega di utilizzare un caricabatterie per telefono per ricaricare per circa mezz'ora per attivarlo.

            {faq_note}Durante la ricarica è meglio utilizzare un caricabatterie per telefono. La corrente da computer potrebbe essere troppo bassa e potrebbe essere difficile ricaricare quando la batteria è scarica.`
        },
        {
            category: "device",
            question: "Perché lo schermo non si accende quando alzo il polso?",
            answer: `
            Si prega di controllare quanto segue:

            1. Verificare se la funzione di attivazione dello schermo al sollevamento del polso è disattivata nell'app e se l'intervallo di tempo impostato soddisfa le vostre esigenze. Dopo la connessione Bluetooth, nella pagina [Dispositivo] di {app_name}, attivare [Attivazione al sollevamento del polso] e impostare l'intervallo di tempo desiderato per attivare questa funzione in quel periodo.

            2. Verificare se la modalità Non disturbare è attiva sul dispositivo. Quando è attiva, il dispositivo non si accenderà al sollevamento del polso.

            3. Quando si vuole vedere l'ora, sollevare il polso con lo schermo rivolto verso di sé.

            {faq_note}Se i metodi sopra indicati non risolvono il problema, provare a scattare una foto delle informazioni di sistema dello smartwatch e degli screenshot delle informazioni di sistema del telefono, e inviarci un feedback tramite la funzione di feedback nell'app. Quando ci contattate, cercate di fornire più informazioni possibili per aiutarci a risolvere meglio il problema.`
        },
        {
            category: "device",
            question: "Quante sveglie si possono impostare al massimo sullo smartwatch?",
            answer: `
            Questo dipende dal vostro modello di smartwatch. Generalmente, è possibile impostare 5 sveglie sullo smartwatch.`
        },
        {
            category: "device",
            question: "Come regolare l'ora sullo smartwatch?",
            answer: `
            L'ora dello smartwatch si sincronizza automaticamente quando è connesso al telefono, non è necessario regolarla manualmente.`
        },
        {
            category: "device",
            question: "Come impostare la lingua sullo smartwatch?",
            answer: `
            Generalmente, la lingua dello smartwatch si sincronizza automaticamente quando è connesso al telefono, non è necessario impostarla manualmente.

            {faq_note}Alcuni smartwatch supportano l'impostazione della lingua direttamente sul dispositivo. Nello specifico, sullo smartwatch aprire [Menu] - [Impostazioni] - [Lingua] e selezionare la lingua desiderata.`
        },
        {
            category: "other",
            question: "Perché la durata della batteria è diminuita?",
            answer: `
            Se sullo smartwatch sono attivate funzioni come l'attivazione dello schermo al sollevamento del polso e il monitoraggio continuo della frequenza cardiaca, il consumo della batteria aumenterà, riducendo la durata della batteria.`
        },
        {
            category: "other",
            question: "Lo smartwatch è impermeabile?",
            answer: `
            Per quanto riguarda l'impermeabilità del dispositivo, consultare il manuale del modello specifico acquistato per verificare se supporta la resistenza all'acqua per uso quotidiano o per il nuoto. Non adatto per immersioni, acqua di mare, tuffi, acqua calda, terme, sauna, altre attività in acqua o in acque profonde con flusso ad alta velocità; i cinturini in pelle e metallo non sono adatti per il nuoto. La funzione di impermeabilità non è permanente e le prestazioni protettive potrebbero diminuire a causa dell'usura quotidiana.`
        }

    ]
}; 