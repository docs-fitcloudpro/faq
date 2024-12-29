window.i18nData = window.i18nData || {};
window.i18nData.fi = {
    searchPlaceholder: "Etsi UKK...",
    pageTitle: "Usein kysytyt kysymykset",
    mainTitle: "Usein kysytyt kysymykset",
    subtitle: "Älykellon käyttöön liittyvät UKK:t ja vianmääritysopas",
    footer: {
        copyright: "© 2025 Shenzhen Tuobu Intelligent Big Data Co., Ltd",
    },
    categories: {
        all: "Kaikki",
        basic: "Peruskäyttö",
        connection: "Bluetooth-yhteys",
        notification: "Ilmoitukset",
        health: "Terveyden seuranta",
        data: "Tietojen synkronointi", 
        watchface: "Kellotaulun asetukset",
        weather: "Sääennuste",
        device: "Laitehallinta",
        other: "Muut"
    },
    faqData: [
        {
            category: "connection",
            question: "Miksi en löydä kelloani?",
            answer: `
            Tarkista seuraavat asiat:

            1. Tarkista, että kellossa on riittävästi virtaa. Jos akku on vähissä, lataa kello ensin.

            2. Pidä kello ja puhelin 0,5 metrin etäisyydellä toisistaan.

            3. Tarkista, onko kello yhdistetty toiseen puhelimeen. Jos on, poista paritus ensin alkuperäisestä puhelimesta ja puhelimen Bluetooth-asetuksista ennen uutta paritusta.

            4. Varmista puhelimen asetuksista, että Bluetooth on päällä: Avaa Asetukset - Bluetooth ja tarkista, että Bluetooth-kytkin on päällä.

            5. Varmista, että sovelluksella on Bluetooth-käyttöoikeudet: Avaa Asetukset - Sovellukset - {app_name} ja tarkista Bluetooth-käyttöoikeudet.

            6. Kokeile käynnistää Bluetooth uudelleen:
            Tapa 1: Avaa Asetukset - Bluetooth, kytke Bluetooth pois päältä ja takaisin päälle.
            Tapa 2: Avaa puhelimen ohjauskeskus pyyhkäisemällä näytön yläreunasta alas, napauta Bluetooth-kuvaketta sulkeaksesi Bluetooth ja napauta uudelleen avataksesi sen.

            7. Palauta kellon tehdasasetukset: Avaa kellosta Asetukset - Järjestelmä - Tehdasasetusten palautus ja valitse Vahvista.

            8. Käynnistä kello ja puhelin uudelleen ja yritä yhdistää uudelleen.

            {faq_note}Jos yllä olevat ratkaisut eivät auta, ota kuva kellon järjestelmätiedoista ja kuvakaappauksia puhelimen järjestelmätiedoista. Lähetä ne meille sovelluksen palautetoiminnon kautta. Anna mahdollisimman paljon hyödyllistä tietoa, jotta voimme auttaa paremmin.`
        },
        {
            category: "connection",
            question: "Miten varmistan, että kello on yhdistetty puhelimeen?",
            answer: `
            Puhelinsovelluksessa laitteen tilan pitäisi näyttää "Yhdistetty".

            iOS:ssä avaa Asetukset - Bluetooth. "Omat laitteet" -listassa pitäisi näkyä kellosi Bluetooth-nimi tilassa "Yhdistetty" ja sininen huutomerkki-kuvake.

            Napauttamalla huutomerkkiä näet laitteen tiedot ja voit varmistaa, että esimerkiksi "Jaa järjestelmäilmoitukset" ja muut kytkimet ovat päällä.`
        },
        {
            category: "connection",
            question: "Bluetooth-yhteys katkeaa usein, miten voin parantaa sitä?",
            answer: `
            Kokeile seuraavia:

            1. Varmista, että puhelin ja kello ovat ympäristössä, jossa on vähän häiriöitä.

            2. Vältä kellon yhdistämistä muihin Bluetooth-laitteisiin samanaikaisesti.

            3. Päivitä kellon laiteohjelmisto ja puhelinsovellus uusimpaan versioon.`
        },
        {
            category: "notification",
            question: "Kello ei vastaanota puhelimen ilmoituksia, mitä teen?",
            answer: `
            Tarkista seuraavat:

            1. Varmista, että kello on yhdistetty puhelimeen.

            2. Varmista, että olet ottanut ilmoitukset käyttöön sovelluksessa: Avaa {app_name} - Laite - Ilmoitukset ja tarkista, että haluamasi sovellusten ilmoitukset ovat päällä.

            3. Varmista, että kello on paritettu puhelimen Bluetoothin kanssa ja järjestelmäilmoitusten jako on päällä: Avaa puhelimen Asetukset - Bluetooth, napauta kellon Bluetooth-nimen vieressä olevaa huutomerkkiä ja tarkista, että "Jaa järjestelmäilmoitukset" on päällä.

            4. Varmista, että puhelimen ilmoitusoikeudet ovat päällä: Avaa Asetukset - Ilmoitukset ja tarkista asetukset.

            5. Varmista, että kelloa vastaava sovellus on asennettu puhelimeen ja sillä on ilmoitusoikeudet. Esimerkiksi WhatsAppissa: Avaa Asetukset - Sovellukset - WhatsApp - Ilmoitukset ja tarkista, että "Salli ilmoitukset" on päällä ja ilmoitustyypit on määritetty oikein.

            {faq_note}Jos yllä olevat ratkaisut eivät auta, ota kuva kellon järjestelmätiedoista ja kuvakaappauksia puhelimen järjestelmätiedoista. Lähetä ne meille sovelluksen palautetoiminnon kautta. Anna mahdollisimman paljon hyödyllistä tietoa, jotta voimme auttaa paremmin.`
        },
        {
            category: "notification",
            question: "Kello vastaanottaa vain osan sovellusten ilmoituksista, miten korjaan?",
            answer: `
            Varmista, että olet ottanut ilmoitukset käyttöön erikseen jokaiselle haluamallesi sovellukselle puhelinsovelluksessa ja synkronoinut asetukset kelloon.

            Avaa {app_name} - Laite - Ilmoitukset ja ota ilmoitukset käyttöön haluamillesi sovelluksille.`
        },
        {
            category: "data",
            question: "Miten voin tarkastella liikunta- ja terveystietojani puhelinsovelluksessa?",
            answer: `
            Kun mittaat liikunta- ja terveystietoja kellolla, kello tallentaa tiedot automaattisesti. Tiedot synkronoituvat puhelinsovellukseen, kun yhdistät kellon.
            
            Jos tiedot eivät ole vielä synkronoituneet, voit vetää sovelluksen päänäyttöä alaspäin synkronoidaksesi tiedot manuaalisesti.
            
            Synkronoinnin jälkeen voit tarkastella syke-, askel-, uni-, stressi-, happisaturaatio-, lämpötila- ja liikuntatietoja sovelluksessa.`
        },
        {
            category: "health",
            question: "Liikunta- ja terveystietoni eivät ole tarkkoja, mitä teen?",
            answer: `
            Varmista, että henkilötietosi on täytetty oikein. Kellon joidenkin toimintojen mittausalgoritmit perustuvat sukupuoleen, pituuteen, painoon, ikään ja muihin henkilötietoihin. Varmista näiden tietojen tarkkuus saadaksesi tarkempia liikunta- ja terveystietoja.`
        },
        {
            category: "data",
            question: "Kellon ja sovelluksen tiedot eivät täsmää, mitä teen?",
            answer: `
            Tarkista seuraavat:

            1. Kellon tiedot on synkronoitu sovellukseen. Jos ei, vedä sovelluksen päänäyttöä alaspäin synkronoidaksesi tiedot manuaalisesti ja tarkista sitten, täsmäävätkö tiedot.

            2. Tarkista, onko kello yhdistetty toiseen puhelimeen ja onko toinen sovellus synkronoinut tiedot.

            {faq_note}Emme suosittele kellon yhdistämistä useaan puhelimeen tai sovellukseen samanaikaisesti, sillä se voi aiheuttaa tietojen epäjohdonmukaisuutta tai jopa tietojen menetystä. Lisäksi tietojen säilyttämiseksi sovelluksen päivittäiset tiedot lasketaan kumulatiivisesti, kun taas kellon tiedot nollataan uudelleenyhdistämisen jälkeen. Tämä voi johtaa eroihin kellon ja sovelluksen tiedoissa. Esimerkiksi unitiedoissa: jos poistat kellon pariliitoksen heti yhdistämisen jälkeen ennen kuin tiedot ehtivät synkronoitua (synkronointi vie aikaa suuren tietomäärän vuoksi), kellon tiedot tyhjennetään ja sovelluksen unitiedot voivat kadota. Siksi suosittelemme, että jos sinun täytyy poistaa kellon pariliitos, odota tietojen synkronoitumista ennen pariliitoksen poistamista.`
        },
        {
            category: "weather",
            question: "Kello ei näytä säätietoja, miten korjaan?",
            answer: `
            Tarkista seuraavat:

            1. Varmista, että kellosi tukee säätoimintoa. Jos kello ei tue säätoimintoa, se ei voi näyttää säätietoja. Tarkista, onko kellon valikossa "Sää"-kohta.

            2. Varmista, että puhelimen sijaintipalvelut ovat päällä: Avaa Asetukset - Tietosuoja ja turvallisuus - Sijaintipalvelut ja tarkista, että sijaintipalvelut ovat päällä.

            3. Varmista, että {app_name} -sovelluksella on lupa käyttää sijaintipalveluja: Avaa Asetukset - Sovellukset - {app_name} - Sijainti ja valitse "Aina" tai "Sovellusta käytettäessä".

            4. Varmista, että {app_name} pääsee internetiin: Avaa {app_name} - Laite - Kellotaulun asetukset ja tarkista, voiko sovellus hakea pilvikellotaulujen luettelon. Voit myös tarkistaa tämän muilla tavoilla. Jos internet-yhteys ei toimi, poista sovellus, käynnistä puhelin uudelleen ja asenna sovellus uudelleen. Muista sallia internet-yhteys, kun avaat sovelluksen ensimmäisen kerran.

            5. Tarkista, että säätietojen lähetys on päällä sovelluksessa: Avaa {app_name} - Laite - Säätietojen lähetys ja tarkista, että toiminto on päällä.

            6. Kokeile kytkeä säätietojen lähetys pois päältä ja takaisin päälle.

            {faq_note}Säätoiminto käyttää puhelimen sijaintia hakeakseen paikallisen sään. Lisäksi toiminto vaatii internet-yhteyden. Jos puhelimen verkkoyhteys on epävakaa tai sovelluksen verkkoyhteys on rajoitettu, säätietoja ei voi hakea internetistä.<br/>
            Jos yllä olevat ratkaisut eivät auta, ota kuva kellon järjestelmätiedoista ja kuvakaappauksia puhelimen järjestelmätiedoista. Lähetä ne meille sovelluksen palautetoiminnon kautta. Anna mahdollisimman paljon hyödyllistä tietoa, jotta voimme auttaa paremmin.`
        },
        {
            category: "weather",
            question: "Kellon säätiedot ovat epätarkkoja, mitä teen?",
            answer: `
            Tarkista seuraavat:

            1. Tarkista, että puhelimen GPS-paikannus toimii tarkasti. Jos GPS-paikannus ei ole tarkka, myös säätiedot ovat epätarkkoja. Suosittelemme kokeilemaan GPS:ää avoimella paikalla ja tarkistamaan, toimiiko paikannus normaalisti.

            2. Tarkista kellon säätietojen päivitysaika ja varmista, etteivät tiedot ole vanhentuneet. Jos tiedot ovat vanhentuneet, avaa puhelinsovellus, mene kohtaan Laite - Säätietojen lähetys, kytke toiminto pois päältä ja takaisin päälle.

            {faq_note}Jos yllä olevat ratkaisut eivät auta, ota kuva kellon järjestelmätiedoista ja kuvakaappauksia puhelimen järjestelmätiedoista. Lähetä ne meille sovelluksen palautetoiminnon kautta. Anna mahdollisimman paljon hyödyllistä tietoa, jotta voimme auttaa paremmin.`
        },
        {
            category: "watchface",
            question: "Miten lataan pilvikellotaulun kelloon?",
            answer: `
            Toimi näin:

            1. Avaa {app_name}-sovelluksessa Laite - Kellotaulun asetukset ja valitse haluamasi kellotaulu.

            2. Napauta ponnahdusikkunassa "Synkronoi kellotaulu".

            3. Odota kellotaulun latautumista. Latauksen jälkeen kellotaulu lähetetään automaattisesti kelloon.

            4. Odota lähetyksen valmistumista. Kello vaihtaa kellotaulun automaattisesti.`
        },
        {
            category: "watchface",
            question: "Miten muokkaan kellotaulua ja lähetän sen kelloon?",
            answer: `
            Toimi näin:

            1. Avaa {app_name}-sovelluksessa Laite - Kellotaulun asetukset ja napauta "Muokkaa kellotaulua" (ensimmäinen vasemmassa yläkulmassa, keskellä muokkauskuvake).

            2. Muokkaa kellotaulun taustaa, päivämäärän ja ajan sijaintia sekä kellotaulun tyyliä mieltymystesi mukaan.

            3. Napauta "Aseta kellotauluksi".

            4. Odota mukautetun kellotaulun luomista. Luomisen jälkeen kellotaulu lähetetään automaattisesti kelloon.

            5. Odota lähetyksen valmistumista. Kello vaihtaa kellotaulun automaattisesti.`
        },
        {
            category: "basic",
            question: "Miten käynnistän ja sammutan älykellon?",
            answer: `
            Toimi näin:

            1. Kellon käynnistys: Pidä kellon sivupainiketta painettuna 3-5 sekuntia, kunnes näyttö syttyy. Kun kello on tyhjä, se käynnistyy automaattisesti noin minuutin latauksen jälkeen.

            2. Kellon sammutus: Pidä kellon sivupainiketta painettuna 3-5 sekuntia, valitse ponnahdusikkunasta "Sammuta" ja napauta "Vahvista". Kello näyttää "Goodbye"-viestin ja sammuu automaattisesti.`
        },
        {
            category: "basic",
            question: "Miten palautan älykellon tehdasasetukset?",
            answer: `
            Toimi näin:

            Tapa 1: Palauta tehdasasetukset kellosta: Avaa kellosta Asetukset - Järjestelmä - Tehdasasetusten palautus ja valitse "Vahvista".

            Tapa 2: Palauta tehdasasetukset kellosta: Pidä kellon sivupainiketta painettuna 3-5 sekuntia, valitse ponnahdusikkunasta "Tehdasasetusten palautus" ja valitse "Vahvista".

            Tapa 3: Palauta tehdasasetukset puhelinsovelluksesta: Avaa sovelluksessa Laite - Tehdasasetusten palautus ja valitse "Vahvista".`
        },
        {
            category: "basic",
            question: "Miten poistan kellon pariliitoksen sovelluksesta?",
            answer: `
            Toimi näin:

            1. Avaa puhelinsovelluksessa Laite-sivu, vieritä alas ja valitse "Poista pariliitos". Vahvista valitsemalla "Vahvista".

            2. Poista kellon ja puhelimen Bluetooth-pariliitos: Avaa puhelimen Asetukset - Bluetooth, napauta kellon Bluetooth-nimen vieressä olevaa huutomerkkiä ja valitse "Unohda tämä laite".

            {faq_note}Pariliitoksen poistamisen jälkeen muista poistaa kellon ja puhelimen Bluetooth-pariliitos järjestelmäasetuksista. Muuten kelloa ei välttämättä löydy seuraavalla kerralla, kun yrität muodostaa pariliitoksen.`
        },
        {
            category: "basic",
            question: "Miten hylkään puhelun?",
            answer: `
            Kun kelloon tulee puheluilmoitus, pidä kellon sivupainiketta painettuna 3 sekuntia hylätäksesi puhelun.`
        },
        {
            category: "basic",
            question: "Miten käytän ravistuskuvaustoimintoa?",
            answer: `
            Toimi näin:

            1. Avaa puhelinsovelluksessa Laite - Ravistuskuvaus. Jos sovellus pyytää lupaa käyttää kameraa, valitse "Salli".

            2. Ravista kelloa tai napauta kamerakuvaketta kellossa ottaaksesi kuvan.`
        },
        {
            category: "basic",
            question: "Miten käytän musiikinohjausta?",
            answer: `
            Kun kello on yhdistetty puhelimeen, avaa puhelimen musiikkisoitin ja toista musiikkia soittolistalta. Kellon musiikkinäytössä voit vaihtaa kappaletta vasemmalla ja oikealla painikkeella ja keskeyttää tai jatkaa toistoa keskipainikkeella.

            {faq_note}Kaikki puhelimen omat musiikkisoittimet eivät ole tuettuja. Tuettuja ovat mm. QQ Music, NetEase Cloud Music ja PLAY Music.`
        },
        {
            category: "device",
            question: "Kellon laiteohjelmiston päivitys epäonnistui, mitä teen?",
            answer: `
            Jos kellon laiteohjelmiston päivitys epäonnistui, kokeile seuraavia:

            1. Varmista, että kellossa on riittävästi virtaa. Vähäinen akku voi aiheuttaa päivityksen epäonnistumisen.

            2. Varmista, että kellon ja puhelimen yhteys on vakaa. Epävakaa yhteys voi aiheuttaa päivityksen epäonnistumisen.

            3. Varmista, että kello ja puhelin ovat samassa verkossa. Epävakaa verkko voi aiheuttaa päivityksen epäonnistumisen.

            4. Älä katkaise kellon ja puhelimen yhteyttä päivityksen aikana, sillä se voi aiheuttaa päivityksen epäonnistumisen.

            5. Älä sulje sovellusta päivityksen aikana, sillä se voi aiheuttaa päivityksen epäonnistumisen.

            6. Älä poistu päivitysnäytöstä tai sammuta näyttöä päivityksen aikana, sillä se voi aiheuttaa päivityksen epäonnistumisen.

            7. Joissakin kelloissa päivityksen epäonnistumisen jälkeen on kahden minuutin odotusaika (laite ei reagoi), ennen kuin yhteys aktivoituu uudelleen. Ole kärsivällinen.

            {faq_note}Jos yllä olevat ratkaisut eivät auta, ota kuva kellon järjestelmätiedoista ja kuvakaappauksia puhelimen järjestelmätiedoista. Lähetä ne meille sovelluksen palautetoiminnon kautta. Anna mahdollisimman paljon hyödyllistä tietoa, jotta voimme auttaa paremmin.`
        },
        {
            category: "device",
            question: "Kello ei reagoi latauksen jälkeen, mistä tämä johtuu?",
            answer: `
            Kun kelloa ei ole käytetty pitkään aikaan, se siirtyy virransäästötilaan. Aktivoi kello lataamalla sitä puhelimen laturilla noin 30 minuuttia.

            {faq_note}Käytä lataukseen mieluummin puhelimen laturia, sillä tietokoneen USB-portin virta voi olla liian heikko lataamaan tyhjää akkua.`
        },
        {
            category: "device",
            question: "Miksi näyttö ei syty, kun nostan ranteen?",
            answer: `
            Tarkista seuraavat:

            1. Tarkista, onko ranteennostoherätys pois päältä sovelluksessa ja ovatko aikavälit asetettu tarpeidesi mukaan. Kun Bluetooth on yhdistetty, avaa {app_name}-sovelluksen Laite-sivu, ota käyttöön "Ranteennostoherätys" ja aseta sopivat aikavälit.

            2. Tarkista, onko kellossa "Älä häiritse" -tila päällä. Tässä tilassa ranteennostoherätys ei toimi.

            3. Kun haluat nähdä ajan, nosta rannetta ja käännä näyttö itseäsi kohti.

            {faq_note}Jos yllä olevat ratkaisut eivät auta, ota kuva kellon järjestelmätiedoista ja kuvakaappauksia puhelimen järjestelmätiedoista. Lähetä ne meille sovelluksen palautetoiminnon kautta. Anna mahdollisimman paljon hyödyllistä tietoa, jotta voimme auttaa paremmin.`
        },
        {
            category: "device",
            question: "Kuinka monta herätystä kelloon voi asettaa?",
            answer: `
            Tämä riippuu kellomallista. Yleensä kelloon voi asettaa 5 herätystä.`
        },
        {
            category: "device",
            question: "Miten säädän kellon aikaa?",
            answer: `
            Kello synkronoi ajan automaattisesti puhelimesta, kun ne on yhdistetty. Manuaalista säätöä ei tarvita.`
        },
        {
            category: "device",
            question: "Miten vaihdan kellon kielen?",
            answer: `
            Yleensä kello synkronoi kielen automaattisesti puhelimesta, kun ne on yhdistetty. Manuaalista vaihtoa ei tarvita.

            {faq_note}Joissakin kelloissa kielen voi vaihtaa kellosta: Avaa Valikko - Asetukset - Kieli ja valitse haluamasi kieli.`
        },
        {
            category: "other",
            question: "Miksi akun kesto on lyhentynyt?",
            answer: `
            Jos kellossa on päällä ranteennostoherätys, jatkuva sykemittaus tai muita toimintoja, ne lisäävät virrankulutusta ja lyhentävät akun kestoa.`
        },
        {
            category: "other",
            question: "Onko kello vesitiivis?",
            answer: `
            Tarkista kellon vesitiiviysluokitus laitteen käyttöoppaasta. Siitä selviää, kestääkö kello roiskeita vai uintia. Kello ei sovellu sukeltamiseen, meriveteen, hyppäämiseen, kuumaan veteen, kylpylöihin, saunoihin tai muihin voimakkaisiin vesiaktiviteetteihin. Nahka- ja metallirannekkeet eivät sovellu uintiin. Vesitiiveys ei ole pysyvä ominaisuus, vaan voi heikentyä normaalin kulumisen myötä.`
        }

    ]
}; 