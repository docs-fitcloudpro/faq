window.i18nData = window.i18nData || {};
window.i18nData.sq = {
    searchPlaceholder: "Kërko pyetjet e shpeshta...",
    pageTitle: "Pyetjet e shpeshta",
    mainTitle: "Pyetjet e shpeshta",
    subtitle: "Udhëzues për pyetjet e shpeshta dhe zgjidhjen e problemeve të orës inteligjente",
    footer: {
        copyright: "© 2025 Shenzhen Tuobu Intelligent Big Data Co., Ltd",
    },
    categories: {
        all: "Të gjitha",
        basic: "Përdorimi bazë",
        connection: "Lidhja Bluetooth",
        notification: "Njoftimet",
        health: "Monitorimi i shëndetit",
        data: "Sinkronizimi i të dhënave",
        watchface: "Cilësimet e faqes së orës",
        weather: "Shfaqja e motit",
        device: "Menaxhimi i pajisjes",
        other: "Të tjera"
    },
    faqData: [
        {
            category: "connection",
            question: "Pse nuk mund të gjej orën time?",
            answer: `
            Ju lutemi kontrolloni pikat e mëposhtme:

            1. Kontrolloni nëse ora ka mjaftueshëm bateri, nëse jo, karikojeni atë.

            2. Mbani orën dhe telefonin brenda një distance prej 0.5 metrash.

            3. Kontrolloni nëse ora është lidhur me ndonjë telefon tjetër, nëse po, shkëputeni atë nga telefoni i mëparshëm dhe hiqni çiftimin Bluetooth në cilësimet e sistemit, pastaj lidheni përsëri.

            4. Në cilësimet e telefonit, sigurohuni që Bluetooth është i aktivizuar, specifikisht, hapni [Cilësimet] - [Bluetooth] dhe kontrolloni nëse çelësi Bluetooth është i ndezur.

            5. Sigurohuni që aplikacioni ka lejet e Bluetooth, specifikisht, hapni [Cilësimet] - [Aplikacionet] - [{app_name}] dhe kontrolloni nëse lejet e Bluetooth janë dhënë.

            6. Provoni të rindizni Bluetooth të telefonit, specifikisht:
            Metoda 1: Hapni [Cilësimet] - [Bluetooth], fikni Bluetooth dhe pastaj ndizeni përsëri.
            Metoda 2: Rrëshqitni poshtë nga krye e ekranit për të hapur qendrën e kontrollit, pastaj shtypni ikonën e Bluetooth për ta fikur dhe ndizeni përsëri.

            7. Rivendosni orën në gjendjen fillestare, specifikisht, në orë hapni [Cilësimet] - [Sistemi] - [Rivendos] dhe zgjidhni [Konfirmo].

            8. Rindizni orën dhe telefonin, pastaj provoni të lidheni përsëri.

            {faq_note}Nëse metodat e mësipërme nuk e zgjidhin problemin, provoni të bëni foto të informacionit të sistemit të orës dhe të bëni screenshot të disa informacioneve të sistemit të telefonit, dhe na i dërgoni përmes funksionit të feedback në aplikacion. Kur na kontaktoni, ju lutemi jepni sa më shumë informacion të dobishëm që të mundeni, në mënyrë që ne të mund t'ju ndihmojmë më mirë për të zgjidhur problemin.`
        },
        {
            category: "connection", 
            question: "Si të konfirmoj që ora është lidhur me sukses me telefonin?",
            answer: `
            Në aplikacionin e telefonit, statusi i pajisjes shfaqet si "E lidhur".

            Gjithashtu, në iOS hapni [Cilësimet] - [Bluetooth], në listën [Pajisjet e mia] shfaqet emri Bluetooth i orës suaj dhe statusi është "E lidhur", me një pikëçuditje në një rreth blu pas tij.

            Klikoni pikëçuditjen për të parë informacionin e pajisjes, dhe sigurohuni që çelësat si [Ndaj njoftimet e sistemit] etj janë të aktivizuar.`
        },
        {
            category: "connection",
            question: "Lidhja Bluetooth shkëputet shpesh, si ta përmirësoj?",
            answer: `
            Mund të provoni metodat e mëposhtme:

            1. Sigurohuni që telefoni dhe ora janë në një mjedis me ndërhyrje të ulët sinjali.

            2. Shmangni lidhjen e orës me pajisje të tjera Bluetooth në të njëjtën kohë.

            3. Përditësoni firmware-in e orës dhe versionin e aplikacionit të telefonit.`
        },
        {
            category: "notification",
            question: "Ora nuk merr njoftimet e telefonit, çfarë të bëj?",
            answer: `
            Ju lutemi kontrolloni pikat e mëposhtme:

            1. Sigurohuni që ora dhe telefoni janë të lidhur.

            2. Në aplikacionin e telefonit konfirmoni që keni aktivizuar njoftimet përkatëse, specifikisht, hapni [{app_name}] - [Pajisja] - [Njoftimet] dhe kontrolloni nëse janë aktivizuar njoftimet për aplikacionet përkatëse.

            3. Konfirmoni që ora është çiftuar me Bluetooth të telefonit dhe ka të aktivizuar ndarjen e njoftimeve të sistemit, specifikisht, në telefon hapni [Cilësimet] - [Bluetooth], pastaj klikoni pikëçuditjen pas emrit Bluetooth të orës në listën [Pajisjet e mia] dhe kontrolloni nëse [Ndaj njoftimet e sistemit] është aktivizuar.

            4. Konfirmoni që lejet e njoftimeve janë aktivizuar në telefon, specifikisht, në telefon hapni [Cilësimet] - [Njoftimet] dhe kontrolloni nëse të gjitha cilësimet janë të sakta.

            5. Aplikacioni përkatës i orës është instaluar në telefon dhe ka lejet e njoftimeve të aktivizuara, për shembull për WhatsApp, specifikisht, në telefon hapni [Cilësimet] - [Aplikacionet] - [WhatsApp] - [Njoftimet], pastaj kontrolloni që [Lejo njoftimet] është i ndezur dhe kontrolloni që cilësimet e llojit të njoftimeve janë të sakta.

            {faq_note}Nëse metodat e mësipërme nuk e zgjidhin problemin, provoni të bëni foto të informacionit të sistemit të orës dhe të bëni screenshot të disa informacioneve të sistemit të telefonit, dhe na i dërgoni përmes funksionit të feedback në aplikacion. Kur na kontaktoni, ju lutemi jepni sa më shumë informacion të dobishëm që të mundeni, në mënyrë që ne të mund t'ju ndihmojmë më mirë për të zgjidhur problemin.`
        },
        {
            category: "notification",
            question: "Ora merr vetëm njoftimet e disa aplikacioneve, si ta zgjidh?",
            answer: `
            Ju lutemi sigurohuni që të aktivizoni veçmas lejet e njoftimeve për aplikacionet e nevojshme në cilësimet e njoftimeve të aplikacionit të telefonit dhe sinkronizojini me orën.

            Specifikisht, hapni [{app_name}] - [Pajisja] - [Njoftimet], pastaj aktivizoni njoftimet për aplikacionet përkatëse.`
        },
        {
            category: "data",
            question: "Si të shoh të dhënat e mia të stërvitjes dhe shëndetit në aplikacionin e telefonit?",
            answer: `
            Kur matni të dhënat e stërvitjes dhe shëndetit në orë, ora i ruan automatikisht të dhënat në orë, dhe kur lidheni me aplikacionin e telefonit, ato do të sinkronizohen me aplikacionin e telefonit.
            
            Nëse ende nuk janë sinkronizuar, mund të provoni të tërhiqni poshtë në faqen kryesore të aplikacionit për të sinkronizuar manualisht të dhënat e stërvitjes dhe shëndetit.
            
            Pas sinkronizimit, mund të shihni të dhënat e rrahjeve të zemrës, hapave, gjumit, stresit, oksigjenit në gjak, temperaturës, stërvitjes etj në aplikacion.`
        },
        {
            category: "health",
            question: "Të dhënat e mia të stërvitjes dhe shëndetit nuk janë të sakta, çfarë të bëj?",
            answer: `
            Ju lutemi konfirmoni nëse informacioni juaj personal është plotësuar saktë, specifikisht, disa algoritme matëse të funksioneve të orës varen nga informacioni juaj personal si gjinia, gjatësia, pesha, mosha etj, ju lutemi sigurohuni për saktësinë e këtyre të dhënave për të marrë të dhëna më të sakta të stërvitjes dhe shëndetit.`
        },
        {
            category: "data",
            question: "Të dhënat në orë nuk përputhen me ato në aplikacion, çfarë të bëj?",
            answer: `
            Ju lutemi kontrolloni pikat e mëposhtme:

            1. Të dhënat në orë janë sinkronizuar me aplikacionin, nëse jo, ju lutemi tërhiqni poshtë në faqen kryesore të aplikacionit për të sinkronizuar manualisht të dhënat e stërvitjes dhe shëndetit, pastaj kontrolloni nëse të dhënat përputhen.

            2. Kontrolloni nëse ora është lidhur me telefona të tjerë dhe nëse të dhënat janë sinkronizuar me aplikacionet në ato telefona.

            {faq_note}Zakonisht, ne nuk rekomandojmë lidhjen e të njëjtës orë me shumë telefona ose aplikacione njëkohësisht, pasi kjo mund të shkaktojë mospërputhje në sinkronizimin e të dhënave, madje edhe humbje të të dhënave. Për më tepër, për të siguruar që të dhënat nuk humbasin, të dhënat e ditës aktuale në aplikacion mblidhen në mënyrë kumulative, ndërsa të dhënat në orë do të fshihen pas rilidhjes, nëse e keni rilidhur orën, kjo mund të shkaktojë mospërputhje midis të dhënave në orë dhe atyre në aplikacion. Për shembull, për të dhënat e gjumit, nëse e shkëputni orën menjëherë pasi e lidhni me aplikacionin e telefonit, të dhënat në orë nuk kanë pasur kohë të sinkronizohen me aplikacionin (zakonisht sinkronizimi i të dhënave kërkon pak kohë për shkak të sasisë së madhe të të dhënave), atëherë të dhënat në orë do të fshihen dhe do të shfaqet humbje e të dhënave të gjumit në aplikacion. Prandaj, ne rekomandojmë që kur vërtet keni nevojë të shkëputni orën, mos e shkëputni menjëherë pasi e lidhni me aplikacionin e telefonit, por prisni derisa të dhënat në orë të jenë sinkronizuar plotësisht para se ta shkëputni orën.`
        },
        {
            category: "weather",
            question: "Ora nuk shfaq motin, si ta zgjidh?",
            answer: `
            Ju lutemi kontrolloni pikat e mëposhtme:

            1. Konfirmoni që ora juaj aktuale mbështet funksionin e motit, nëse ora nuk e mbështet funksionin e motit, nuk mund të shfaqë motin, specifikisht, kontrolloni nëse [Moti] përfshihet në menunë e orës.

            2. Konfirmoni që [Shërbimet e vendndodhjes] të telefonit janë aktivizuar, specifikisht, hapni [Cilësimet] - [Privatësia dhe siguria] - [Shërbimet e vendndodhjes] dhe kontrolloni nëse shërbimet e vendndodhjes janë aktivizuar.

            3. Konfirmoni që {app_name} ka leje për të përdorur shërbimet e vendndodhjes, specifikisht, hapni [Cilësimet] - [Aplikacionet] - [{app_name}] - [Vendndodhja] dhe kontrolloni nëse është zgjedhur [Gjithmonë] ose [Gjatë përdorimit të aplikacionit].

            4. Konfirmoni që {app_name} mund të aksesojë internetin normalisht, specifikisht, hapni [{app_name}] - [Pajisja] - [Cilësimet e faqes së orës] dhe kontrolloni nëse aplikacioni mund të marrë listën e faqeve të orës nga cloud, sigurisht mund ta konfirmoni këtë edhe me mjete të tjera. Nëse nuk mund të aksesojë internetin normalisht, rekomandohet të fshini aplikacionin, të rindizni telefonin, të riinstaloni aplikacionin, dhe mos harroni të lejoni aplikacionin të aksesojë internetin kur e hapni për herë të parë.

            5. Kontrolloni nëse funksioni i dërgimit të motit është aktivizuar në aplikacionin e telefonit, specifikisht, hapni [{app_name}] - [Pajisja] - [Dërgimi i motit] dhe kontrolloni nëse funksioni i dërgimit të motit është aktivizuar.

            6. Provoni të çaktivizoni çelësin [Dërgimi i motit] dhe ta riaktivizoni, kontrolloni nëse moti shfaqet normalisht.

            {faq_note}Funksioni i motit varet nga vendndodhja aktuale e telefonit, kryesisht për të marrë informacionin e motit për vendndodhjen tuaj. Për më tepër, funksioni i motit varet gjithashtu nga aksesi në internet, nëse lidhja e rrjetit të telefonit është e paqëndrueshme, ose aftësia e aplikacionit për të aksesuar rrjetin është e kufizuar, nuk mund të marrë informacionin e motit përmes internetit.<br/>
            Nëse metodat e mësipërme nuk e zgjidhin problemin, provoni të bëni foto të informacionit të sistemit të orës dhe të bëni screenshot të disa informacioneve të sistemit të telefonit, dhe na i dërgoni përmes funksionit të feedback në aplikacion. Kur na kontaktoni, ju lutemi jepni sa më shumë informacion të dobishëm që të mundeni, në mënyrë që ne të mund t'ju ndihmojmë më mirë për të zgjidhur problemin.`
        },
        {
            category: "weather",
            question: "Të dhënat e motit në orë nuk janë të sakta, çfarë të bëj?",
            answer: `
            Kontrolloni pikat e mëposhtme:

            1. Kontrolloni nëse vendndodhja GPS e telefonit është e saktë, nëse vendndodhja GPS e telefonit nuk është e saktë, atëherë të dhënat e motit gjithashtu nuk mund të jenë të sakta, rekomandohet të hapni GPS e telefonit në një vend të hapur dhe të kontrolloni nëse mund të merrni informacionin e vendndodhjes normalisht.

            2. Në orë kontrolloni kohën e përditësimit të motit, konfirmoni nëse informacioni i motit ka skaduar, nëse informacioni i motit ka skaduar, provoni të hapni aplikacionin e telefonit, shkoni te [Pajisja] - [Dërgimi i motit], provoni të çaktivizoni dërgimin e motit dhe ta riaktivizoni, kontrolloni nëse moti shfaqet normalisht.

            {faq_note}Nëse metodat e mësipërme nuk e zgjidhin problemin, provoni të bëni foto të informacionit të sistemit të orës dhe të bëni screenshot të disa informacioneve të sistemit të telefonit, dhe na i dërgoni përmes funksionit të feedback në aplikacion. Kur na kontaktoni, ju lutemi jepni sa më shumë informacion të dobishëm që të mundeni, në mënyrë që ne të mund t'ju ndihmojmë më mirë për të zgjidhur problemin.`
        },
        {
            category: "watchface",
            question: "Si të ngarkojmë një faqe ore nga cloud në orë",
            answer: `
            Hapat e operimit:

            1. Në {app_name}, hapni [Pajisja] - [Cilësimet e faqes së orës], pastaj zgjidhni faqen e orës që ju pëlqen.

            2. Klikoni [Sinkronizo faqen e orës] në ndërfaqen që shfaqet.

            3. Prisni të fillojë shkarkimi i faqes së orës, pas përfundimit të shkarkimit, do të ngarkohet automatikisht në pajisjen e orës.

            4. Prisni përfundimin e ngarkimit të faqes së orës, ora do të ndryshojë automatikisht faqen e orës.`
        },
        {
            category: "watchface",
            question: "Si të personalizoj një faqe ore dhe ta ngarkojmë në orë?",
            answer: `
            Hapat e operimit:

            1. Në {app_name}, hapni [Pajisja] - [Cilësimet e faqes së orës], pastaj klikoni [Hyrja e personalizimit të faqes së orës] (e para në këndin e majtë lart, me një ikonë redaktimi në qendër) për të hyrë në faqen e personalizimit të faqes së orës.

            2. Pastaj sipas preferencave tuaja, modifikoni sfondin e faqes së orës, pozicionin e datës dhe orës, dhe stilin e faqes së orës.

            3. Klikoni butonin [Vendos si faqe ore].

            4. Prisni të gjenerohet faqja e personalizuar e orës, pas përfundimit të gjenerimit, do të ngarkohet automatikisht në pajisjen e orës.

            5. Prisni përfundimin e ngarkimit të faqes së orës, ora do të ndryshojë automatikisht faqen e orës.`
        },
        {
            category: "basic",
            question: "Si të ndezim dhe fikim orën inteligjente?",
            answer: `
            Hapat e operimit:

            1. Ndezja e orës: Mbani shtypur butonin anësor të orës për 3-5 sekonda derisa ekrani të ndizet. Kur ora është pa bateri, do të ndizet automatikisht dhe do të hyjë në faqen kryesore pas rreth 1 minute karikimi.

            2. Fikja e orës: Mbani shtypur butonin anësor të orës për 3-5 sekonda, në ndërfaqen që shfaqet zgjidhni [Fike], klikoni [Konfirmo], ora do të shfaqë mesazhin "Goodbye" dhe pastaj do të fiket automatikisht.`
        },
        {
            category: "basic",
            question: "Si të rivendosim orën inteligjente në gjendjen fillestare?",
            answer: `
            Hapat e operimit:

            Metoda 1: Rivendosni në gjendjen fillestare në orë, specifikisht, në orë hapni [Cilësimet] - [Sistemi] - [Rivendos] dhe zgjidhni [Konfirmo].

            Metoda 2: Rivendosni në gjendjen fillestare në orë, specifikisht, mbani shtypur butonin anësor të orës për 3-5 sekonda, në ndërfaqen që shfaqet zgjidhni [Rivendos në gjendjen fillestare] dhe zgjidhni [Konfirmo].

            Metoda 3: Rivendosni në gjendjen fillestare në aplikacionin e telefonit, specifikisht, në aplikacionin e telefonit hapni [Pajisja] - [Rivendos në gjendjen fillestare] dhe zgjidhni [Konfirmo].`
        },
        {
            category: "basic",
            question: "Si të shkëpusim lidhjen midis aplikacionit dhe orës inteligjente?",
            answer: `
            Hapat e operimit:

            1. Në aplikacionin e telefonit, hapni faqen [Pajisja], shkoni në fund, pastaj zgjidhni [Shkëput pajisjen] dhe zgjidhni [Konfirmo].

            2. Anuloni çiftimin Bluetooth midis orës inteligjente dhe telefonit, specifikisht, në telefon hapni [Cilësimet] - [Bluetooth], pastaj klikoni pikëçuditjen pas emrit Bluetooth të orës në listën [Pajisjet e mia], pastaj zgjidhni [Harro këtë pajisje].

            {faq_note}Pas shkëputjes së pajisjes së orës, duhet të anuloni manualisht çiftimin Bluetooth midis orës inteligjente dhe telefonit në cilësimet e sistemit, përndryshe herën tjetër kur të provoni të lidhni, mund të mos gjeni pajisjen e orës, duke çuar në pamundësi për t'u lidhur.`
        },
        {
            category: "basic",
            question: "Si të mbyllim një telefonatë?",
            answer: `
            Kur ora merr një njoftim telefonate, mbani shtypur butonin anësor të orës për 3 sekonda për të mbyllur telefonatën.`
        },
        {
            category: "basic",
            question: "Si të përdorim funksionin e fotografimit me tundjen e dorës?",
            answer: `
            Hapat e operimit:

            1. Në aplikacionin e telefonit, hapni [Pajisja] - [Fotografim me tundjen e dorës], nëse pyeteni nëse lejoni "akses në kamerën e telefonit", zgjidhni [Lejo].

            2. Tundni pajisjen e orës ose klikoni ikonën e kamerës në orë për të bërë foto.`
        },
        {
            category: "basic",
            question: "Si të përdorim funksionin e kontrollit të muzikës?",
            answer: `
            Kur pajisja e orës është e lidhur me sukses me telefonin, hapni luajtësin e muzikës në telefon, luani muzikën në listën e shkarkimeve, në ndërfaqen e muzikës së pajisjes shtypni butonat majtas dhe djathtas për të ndryshuar, klikoni butonin e mesit për të ndaluar ose luajtur muzikën.

            {faq_note}Disa luajtës muzike të integruar të telefonit nuk mbështeten, mund të mbështeten luajtësit e muzikës QQ Music, NetEase Cloud Music, PLAY Music etj`
        },
        {
            category: "device",
            question: "Përditësimi i firmware-it të orës dështoi, çfarë të bëj?",
            answer: `
            Nëse përditësimi i firmware-it të orës dështon, provoni metodat e mëposhtme:

            1. Sigurohuni që ora ka mjaftueshëm bateri, bateria e ulët mund të shkaktojë dështimin e përditësimit të firmware-it.

            2. Sigurohuni që lidhja midis orës dhe telefonit është e qëndrueshme, lidhja e paqëndrueshme mund të shkaktojë dështimin e përditësimit të firmware-it.

            3. Sigurohuni që ora dhe telefoni janë në të njëjtin mjedis rrjeti, rrjeti i paqëndrueshëm mund të shkaktojë dështimin e përditësimit të firmware-it.

            4. Gjatë procesit të përditësimit të firmware-it, ju lutemi mos e shkëputni lidhjen midis orës dhe telefonit, përndryshe mund të shkaktojë dështimin e përditësimit të firmware-it.

            5. Gjatë procesit të përditësimit të firmware-it, ju lutemi mos mbyllni procesin e aplikacionit, përndryshe mund të shkaktojë dështimin e përditësimit të firmware-it.

            6. Gjatë procesit të përditësimit të firmware-it, ju lutemi mos dilni nga ndërfaqja e përditësimit të firmware-it ose mos fikni ekranin, përndryshe mund të shkaktojë dështimin e përditësimit të firmware-it.

            7. Disa pajisje ore kanë një kohë pritjeje prej dy minutash pas dështimit të përditësimit (gjatë kësaj kohe pajisja nuk ka asnjë reagim) para se të riaktivizohet lidhja, ju lutemi prisni me durim.

            {faq_note}Nëse metodat e mësipërme nuk e zgjidhin problemin, provoni të bëni foto të informacionit të sistemit të orës dhe të bëni screenshot të disa informacioneve të sistemit të telefonit, dhe na i dërgoni përmes funksionit të feedback në aplikacion. Kur na kontaktoni, ju lutemi jepni sa më shumë informacion të dobishëm që të mundeni, në mënyrë që ne të mund t'ju ndihmojmë më mirë për të zgjidhur problemin.`
        },
        {
            category: "device",
            question: "Kam karikuar për pak kohë, por pajisja ende nuk ka reagim, cila është arsyeja?",
            answer: `
            Kur pajisja e orës nuk është përdorur për një kohë të gjatë, do të hyjë në gjendje të baterisë së ulët, ju lutemi karikoni për rreth gjysmë ore me karikuesin e telefonit për ta aktivizuar.

            {faq_note}Gjatë karikimit është më mirë të përdorni karikuesin e telefonit për të karikuar, rryma në kompjuter është shumë e ulët dhe mund të jetë shumë e vështirë të karikohet kur bateria është e ulët.`
        },
        {
            category: "device",
            question: "Pse nuk ndizet ekrani kur ngre dorën?",
            answer: `
            Ju lutemi kontrolloni pikat e mëposhtme:

            1. Ju lutemi kontrolloni nëse funksioni i ndezjes së ekranit me ngritjen e dorës është i fikur në aplikacion, dhe nëse cilësimet e periudhës kohore të ndezjes së ekranit me ngritjen e dorës përputhen me nevojat tuaja. Pas lidhjes Bluetooth, në faqen [Pajisja] të {app_name}, aktivizoni [Ndezja e ekranit me ngritjen e dorës] dhe vendosni periudhën kohore që përputhet me nevojat tuaja, atëherë mund të ndizni ekranin duke ngritur dorën gjatë kësaj periudhe kohore.

            2. Ju lutemi kontrolloni nëse pajisja ka aktivizuar modalitetin mos shqetëso, pajisja nuk do të ndezë ekranin me ngritjen e dorës kur modaliteti mos shqetëso është i aktivizuar.

            3. Kur doni të shihni orën, ngrini kyçin e dorës dhe ktheni ekranin drejt vetes.

            {faq_note}Nëse metodat e mësipërme nuk e zgjidhin problemin, provoni të bëni foto të informacionit të sistemit të orës dhe të bëni screenshot të disa informacioneve të sistemit të telefonit, dhe na i dërgoni përmes funksionit të feedback në aplikacion. Kur na kontaktoni, ju lutemi jepni sa më shumë informacion të dobishëm që të mundeni, në mënyrë që ne të mund t'ju ndihmojmë më mirë për të zgjidhur problemin.`
        },
        {
            category: "device",
            question: "Sa alarme mund të vendosen maksimumi në pajisjen e orës?",
            answer: `
            Kjo varet nga pajisja juaj e orës, zakonisht, pajisja e orës mund të vendosë 5 alarme.`
        },
        {
            category: "device",
            question: "Si të rregulloj kohën në orë?",
            answer: `
            Pasi ora lidhet me telefonin, koha do të sinkronizohet automatikisht, nuk ka nevojë për rregullim manual.`
        },
        {
            category: "device",
            question: "Si të vendos gjuhën në orë?", 
            answer: `
            Zakonisht, pasi ora lidhet me telefonin, gjuha do të sinkronizohet automatikisht, nuk ka nevojë për rregullim manual.

            {faq_note}Disa ora mbështesin vendosjen e gjuhës direkt në orë. Specifikisht, në orë hapni [Menu] - [Cilësimet] - [Gjuha], dhe zgjidhni gjuhën që dëshironi të vendosni.`
        },
        {
            category: "other",
            question: "Pse është shkurtuar koha e përdorimit të baterisë?",
            answer: `
            Nëse ora ka të aktivizuar funksione si ndezja e ekranit me ngritjen e dorës, matja e rregullt e rrahjeve të zemrës etj., kjo do të rrisë konsumin e energjisë dhe do të shkurtojë kohën e përdorimit të baterisë.`
        },
        {
            category: "other",
            question: "A është ora rezistente ndaj ujit?",
            answer: `
            Për çështjen e rezistencës ndaj ujit të pajisjes, ju lutemi shikoni manualin e modelit specifik që keni blerë për të konfirmuar nëse mbështet rezistencën ndaj ujit të përditshëm ose rezistencën ndaj ujit gjatë notit. Nuk është e përshtatshme për zhytje, ujë deti, kërcim në ujë, ujë të nxehtë, spa, sauna ose aktivitete të tjera në ujë apo në thellësi me presion të lartë uji. Rripat prej lëkure dhe metali nuk janë të përshtatshëm për not. Funksioni i rezistencës ndaj ujit nuk është i përhershëm dhe funksioni mbrojtës mund të zvogëlohet nga përdorimi i përditshëm.`
        }

    ]
}; 