window.i18nData = window.i18nData || {};
window.i18nData.el = {
    searchPlaceholder: "Αναζήτηση συχνών ερωτήσεων...",
    pageTitle: "Συχνές Ερωτήσεις",
    mainTitle: "Συχνές Ερωτήσεις",
    subtitle: "Οδηγός συχνών ερωτήσεων και αντιμετώπισης προβλημάτων για έξυπνα ρολόγια",
    footer: {
        copyright: "© 2025 Shenzhen Tuobu Intelligent Big Data Co., Ltd",
    },
    categories: {
        all: "Όλα",
        basic: "Βασική χρήση",
        connection: "Σύνδεση Bluetooth",
        notification: "Ειδοποιήσεις",
        health: "Παρακολούθηση υγείας",
        data: "Συγχρονισμός δεδομένων",
        watchface: "Ρυθμίσεις καντράν",
        weather: "Εμφάνιση καιρού",
        device: "Διαχείριση συσκευής",
        other: "Άλλα"
    },
    faqData: [
        {
            category: "connection",
            question: "Γιατί δεν μπορώ να εντοπίσω το ρολόι μου;",
            answer: `
            Παρακαλώ ελέγξτε τα εξής:

            1. Βεβαιωθείτε ότι το ρολόι έχει επαρκή μπαταρία. Εάν η μπαταρία είναι χαμηλή, φορτίστε το πρώτα.

            2. Διατηρήστε το ρολόι εντός 0,5 μέτρων από το τηλέφωνο.

            3. Ελέγξτε εάν το ρολόι έχει συνδεθεί με άλλο τηλέφωνο. Εάν ναι, αποσυνδέστε το πρώτα από το αρχικό τηλέφωνο και καταργήστε τη σύζευξη Bluetooth στις ρυθμίσεις συστήματος πριν προσπαθήσετε να το συνδέσετε ξανά.

            4. Στις ρυθμίσεις του τηλεφώνου, βεβαιωθείτε ότι το Bluetooth είναι ενεργοποιημένο. Συγκεκριμένα, πηγαίνετε στις [Ρυθμίσεις] - [Bluetooth] και ελέγξτε αν ο διακόπτης Bluetooth είναι ενεργοποιημένος.

            5. Βεβαιωθείτε ότι έχετε παραχωρήσει άδεια Bluetooth στην τρέχουσα εφαρμογή. Συγκεκριμένα, πηγαίνετε στις [Ρυθμίσεις] - [Εφαρμογές] - [{app_name}] και ελέγξτε αν έχει χορηγηθεί η άδεια Bluetooth.

            6. Δοκιμάστε να επανεκκινήσετε το Bluetooth του τηλεφώνου:
            Μέθοδος 1: Πηγαίνετε στις [Ρυθμίσεις] - [Bluetooth], απενεργοποιήστε το Bluetooth και στη συνέχεια ενεργοποιήστε το ξανά.
            Μέθοδος 2: Σύρετε προς τα κάτω από την κορυφή της οθόνης του τηλεφώνου για πρόσβαση στο κέντρο ελέγχου, πατήστε το εικονίδιο Bluetooth για να το απενεργοποιήσετε και μετά πατήστε ξανά για να το ενεργοποιήσετε.

            7. Επαναφέρετε το ρολόι στις εργοστασιακές ρυθμίσεις. Συγκεκριμένα, στο ρολόι πηγαίνετε στις [Ρυθμίσεις] - [Σύστημα] - [Εργοστασιακή επαναφορά] και επιλέξτε [Επιβεβαίωση].

            8. Επανεκκινήστε το ρολόι και το τηλέφωνο και προσπαθήστε να συνδεθείτε ξανά.

            {faq_note}Εάν τα παραπάνω βήματα δεν επιλύσουν το πρόβλημα, προσπαθήστε να τραβήξετε φωτογραφίες των πληροφοριών συστήματος του ρολογιού και στιγμιότυπα οθόνης ορισμένων πληροφοριών συστήματος του τηλεφώνου. Στείλτε μας σχόλια μέσω της λειτουργίας ανατροφοδότησης στην εφαρμογή. Όταν επικοινωνείτε μαζί μας, προσπαθήστε να παρέχετε όσο το δυνατόν περισσότερες χρήσιμες πληροφορίες για να μας βοηθήσετε να επιλύσουμε καλύτερα το πρόβλημα.`
        },
        {
            category: "connection", 
            question: "Πώς μπορώ να επιβεβαιώσω ότι το ρολόι έχει συνδεθεί επιτυχώς με το τηλέφωνο;",
            answer: `
            Στην εφαρμογή του τηλεφώνου, η κατάσταση της συσκευής εμφανίζεται ως "Συνδεδεμένη".

            Επιπλέον, στο iOS πηγαίνετε στις [Ρυθμίσεις] - [Bluetooth], το όνομα Bluetooth του ρολογιού σας εμφανίζεται στη λίστα "Οι συσκευές μου" με την κατάσταση "Συνδεδεμένο" και ένα μπλε κύκλο με θαυμαστικό.

            Πατώντας το θαυμαστικό, μπορείτε να δείτε πληροφορίες όπως το όνομα της συσκευής και να επιβεβαιώσετε ότι διακόπτες όπως "Κοινή χρήση ειδοποιήσεων συστήματος" είναι ενεργοποιημένοι.`
        },
        {
            category: "connection",
            question: "Η σύνδεση Bluetooth αποσυνδέεται συχνά, πώς μπορώ να το βελτιώσω;",
            answer: `
            Δοκιμάστε τα εξής:

            1. Βεβαιωθείτε ότι το τηλέφωνο και το ρολόι βρίσκονται σε περιβάλλον με ελάχιστες παρεμβολές σήματος.

            2. Αποφύγετε τη σύνδεση του ρολογιού με άλλες συσκευές Bluetooth ταυτόχρονα.

            3. Ενημερώστε το υλικολογισμικό του ρολογιού και την έκδοση της εφαρμογής του τηλεφώνου.`
        },
        {
            category: "notification",
            question: "Το ρολόι δεν λαμβάνει ειδοποιήσεις μηνυμάτων από το τηλέφωνο, τι να κάνω;",
            answer: `
            Παρακαλώ ελέγξτε τα εξής:

            1. Βεβαιωθείτε ότι το ρολόι και το τηλέφωνο είναι συνδεδεμένα.

            2. Επιβεβαιώστε ότι έχετε ενεργοποιήσει τις αντίστοιχες ειδοποιήσεις μηνυμάτων στην εφαρμογή του τηλεφώνου. Συγκεκριμένα, ανοίξτε [{app_name}] - [Συσκευή] - [Ειδοποιήσεις μηνυμάτων] και ελέγξτε αν έχουν ενεργοποιηθεί οι ειδοποιήσεις μηνυμάτων για τις αντίστοιχες εφαρμογές.

            3. Επιβεβαιώστε ότι το ρολόι έχει συζευχθεί με το Bluetooth του τηλεφώνου και ότι η κοινή χρήση ειδοποιήσεων συστήματος είναι ενεργοποιημένη. Συγκεκριμένα, στο τηλέφωνο πηγαίνετε στις [Ρυθμίσεις] - [Bluetooth], πατήστε το θαυμαστικό δίπλα στο όνομα Bluetooth του ρολογιού και ελέγξτε αν η [Κοινή χρήση ειδοποιήσεων συστήματος] είναι ενεργοποιημένη.

            4. Επιβεβαιώστε ότι έχουν ενεργοποιηθεί τα δικαιώματα ειδοποιήσεων στο τηλέφωνο. Συγκεκριμένα, στο τηλέφωνο πηγαίνετε στις [Ρυθμίσεις] - [Ειδοποιήσεις] και ελέγξτε αν όλες οι ρυθμίσεις είναι σωστές.

            5. Βεβαιωθείτε ότι η αντίστοιχη εφαρμογή για το ρολόι είναι εγκατεστημένη στο τηλέφωνο και ότι έχουν ενεργοποιηθεί τα δικαιώματα ειδοποιήσεων. Για παράδειγμα, για το WhatsApp, στο τηλέφωνο πηγαίνετε στις [Ρυθμίσεις] - [Εφαρμογές] - [WhatsApp] - [Ειδοποιήσεις], ελέγξτε αν οι [Επιτρεπόμενες ειδοποιήσεις] είναι ενεργοποιημένες και επιβεβαιώστε ότι οι ρυθμίσεις τύπου ειδοποιήσεων είναι σωστές.

            {faq_note}Εάν τα παραπάνω βήματα δεν επιλύσουν το πρόβλημα, προσπαθήστε να τραβήξετε φωτογραφίες των πληροφοριών συστήματος του ρολογιού και στιγμιότυπα οθόνης ορισμένων πληροφοριών συστήματος του τηλεφώνου. Στείλτε μας σχόλια μέσω της λειτουργίας ανατροφοδότησης στην εφαρμογή. Όταν επικοινωνείτε μαζί μας, προσπαθήστε να παρέχετε όσο το δυνατόν περισσότερες χρήσιμες πληροφορίες για να μας βοηθήσετε να επιλύσουμε καλύτερα το πρόβλημα.`
        },
        {
            category: "notification",
            question: "Το ρολόι λαμβάνει ειδοποιήσεις μόνο από ορισμένες εφαρμογές, πώς μπορώ να το διορθώσω;",
            answer: `
            Βεβαιωθείτε ότι έχετε ενεργοποιήσει ξεχωριστά τα δικαιώματα ειδοποιήσεων για τις επιθυμητές εφαρμογές στις ειδοποιήσεις μηνυμάτων της εφαρμογής του τηλεφώνου και ότι έχουν συγχρονιστεί με το ρολόι.

            Συγκεκριμένα, ανοίξτε [{app_name}] - [Συσκευή] - [Ειδοποιήσεις μηνυμάτων] και ενεργοποιήστε τις ειδοποιήσεις μηνυμάτων για την αντίστοιχη εφαρμογή.`
        },
        {
            category: "data",
            question: "Πώς μπορώ να δω τα δεδομένα άσκησης και υγείας μου στην εφαρμογή του τηλεφώνου;",
            answer: `
            Όταν κάνετε μετρήσεις άσκησης και υγείας στο ρολόι σας, το ρολόι καταγράφει αυτόματα τα δεδομένα. Όταν συνδέεστε με την εφαρμογή του τηλεφώνου, τα δεδομένα θα συγχρονιστούν με την εφαρμογή.
            
            Εάν δεν έχουν συγχρονιστεί ακόμα, μπορείτε να δοκιμάσετε να σύρετε προς τα κάτω στην αρχική σελίδα της εφαρμογής για να συγχρονίσετε χειροκίνητα τα δεδομένα άσκησης και υγείας.
            
            Μετά τον συγχρονισμό, μπορείτε να δείτε δεδομένα όπως καρδιακός ρυθμός, βήματα, ύπνος, στρες, οξυγόνο αίματος, θερμοκρασία σώματος και άσκηση στην εφαρμογή.`
        },
        {
            category: "health",
            question: "Τα δεδομένα άσκησης και υγείας μου δεν είναι ακριβή, τι να κάνω;",
            answer: `
            Βεβαιωθείτε ότι οι προσωπικές σας πληροφορίες έχουν συμπληρωθεί σωστά. Συγκεκριμένα, ορισμένοι αλγόριθμοι μέτρησης του ρολογιού βασίζονται στις προσωπικές σας πληροφορίες όπως φύλο, ύψος, βάρος και ηλικία. Βεβαιωθείτε ότι αυτές οι πληροφορίες είναι ακριβείς για να λάβετε πιο ακριβή δεδομένα άσκησης και υγείας.`
        },
        {
            category: "data",
            question: "Τα δεδομένα στο ρολόι δεν συμφωνούν με αυτά στην εφαρμογή, τι να κάνω;",
            answer: `
            Παρακαλώ ελέγξτε τα εξής:

            1. Βεβαιωθείτε ότι τα δεδομένα του ρολογιού έχουν συγχρονιστεί με την εφαρμογή. Εάν όχι, σύρετε προς τα κάτω στην αρχική σελίδα της εφαρμογής για να συγχρονίσετε χειροκίνητα τα δεδομένα άσκησης και υγείας, και στη συνέχεια ελέγξτε αν τα δεδομένα συμφωνούν.

            2. Ελέγξτε αν το ρολόι έχει συνδεθεί με άλλα τηλέφωνα και αν τα δεδομένα έχουν συγχρονιστεί με εφαρμογές σε άλλα τηλέφωνα.

            {faq_note}Γενικά, δεν συνιστούμε τη σύνδεση του ίδιου ρολογιού με πολλαπλά τηλέφωνα ή εφαρμογές ταυτόχρονα, καθώς αυτό μπορεί να οδηγήσει σε ασυνέπεια συγχρονισμού δεδομένων ή ακόμη και απώλεια δεδομένων. Επιπλέον, για να διασφαλιστεί ότι δεν θα χαθούν δεδομένα, τα δεδομένα της τρέχουσας ημέρας στην εφαρμογή προστίθενται σωρευτικά, ενώ τα δεδομένα στο ρολόι θα μηδενιστούν μετά την επανασύνδεση. Εάν επανασυνδέσετε το ρολόι, αυτό μπορεί να οδηγήσει σε ασυμφωνία μεταξύ των δεδομένων στο ρολόι και των δεδομένων στην εφαρμογή. Για παράδειγμα, εάν αποσυνδέσετε το ρολόι αμέσως μετά τη σύνδεσή του με την εφαρμογή του τηλεφώνου, τα δεδομένα στο ρολόι μπορεί να μην έχουν προλάβει να συγχρονιστούν με την εφαρμογή (συνήθως λόγω του μεγάλου όγκου δεδομένων, ο συγχρονισμός απαιτεί κάποιο χρόνο). Σε αυτήν την περίπτωση, τα δεδομένα στο ρολόι θα διαγραφούν και μπορεί να παρατηρήσετε απώλεια δεδομένων ύπνου στην εφαρμογή. Επομένως, συνιστούμε, εάν πρέπει να αποσυνδέσετε το ρολόι, να μην το κάνετε αμέσως μετά τη σύνδεσή του με την εφαρμογή του τηλεφώνου, αλλά να περιμένετε μέχρι να ολοκληρωθεί ο συγχρονισμός των δεδομένων από το ρολόι πριν το αποσυνδέσετε.`
        },
        {
            category: "weather",
            question: "Το ρολόι δεν εμφανίζει τον καιρό, πώς μπορώ να το διορθώσω;",
            answer: `
            Παρακαλώ ελέγξτε τα εξής:

            1. Βεβαιωθείτε ότι το τρέχον ρολόι υποστηρίζει τη λειτουργία καιρού. Εάν το ρολόι δεν υποστηρίζει τη λειτουργία καιρού, δεν θα μπορεί να εμφανίσει τον καιρό. Συγκεκριμένα, ελέγξτε αν το μενού του ρολογιού περιλαμβάνει [Καιρός].

            2. Βεβαιωθείτε ότι οι [Υπηρεσίες τοποθεσίας] του τηλεφώνου είναι ενεργοποιημένες. Συγκεκριμένα, πηγαίνετε στις [Ρυθμίσεις] - [Απόρρητο και ασφάλεια] - [Υπηρεσίες τοποθεσίας] και ελέγξτε αν οι υπηρεσίες τοποθεσίας είναι ενεργοποιημένες.

            3. Βεβαιωθείτε ότι έχετε εξουσιοδοτήσει το {app_name} να χρησιμοποιεί τις υπηρεσίες τοποθεσίας. Συγκεκριμένα, πηγαίνετε στις [Ρυθμίσεις] - [Εφαρμογές] - [{app_name}] - [Τοποθεσία] και ελέγξτε αν έχετε επιλέξει [Πάντα] ή [Κατά τη χρήση της εφαρμογής].

            4. Βεβαιωθείτε ότι το {app_name} μπορεί να έχει κανονική πρόσβαση στο διαδίκτυο. Συγκεκριμένα, ανοίξτε [{app_name}] - [Συσκευή] - [Ρυθμίσεις καντράν] και ελέγξτε αν η εφαρμογή μπορεί να λάβει κανονικά τη λίστα καντράν cloud. Φυσικά, μπορείτε επίσης να επιβεβαιώσετε αυτό με άλλους τρόπους. Εάν δεν μπορείτε να έχετε κανονική πρόσβαση στο διαδίκτυο, συνιστάται να διαγράψετε την εφαρμογή, να επανεκκινήσετε το τηλέφωνο και να εγκαταστήσετε ξανά την εφαρμογή. Θυμηθείτε ότι την πρώτη φορά που ανοίγετε την εφαρμογή, πρέπει να επιτρέψετε την πρόσβαση στο διαδίκτυο.

            5. Ελέγξτε αν η λειτουργία προώθησης καιρού είναι ενεργοποιημένη στην εφαρμογή του τηλεφώνου. Συγκεκριμένα, ανοίξτε [{app_name}] - [Συσκευή] - [Προώθηση καιρού] και ελέγξτε αν η λειτουργία προώθησης καιρού είναι ενεργοποιημένη.

            6. Δοκιμάστε να απενεργοποιήσετε τον διακόπτη [Προώθηση καιρού] και να τον ενεργοποιήσετε ξανά για να δείτε αν ο καιρός εμφανίζεται κανονικά.

            {faq_note}Η λειτουργία καιρού εξαρτάται από την τρέχουσα τοποθεσία του τηλεφώνου, η οποία χρησιμοποιείται κυρίως για τη λήψη πληροφοριών καιρού για την τοποθεσία σας. Επιπλέον, η λειτουργία καιρού εξαρτάται από την πρόσβαση στο διαδίκτυο. Εάν η σύνδεση δικτύου του τηλεφώνου είναι ασταθής ή η ικανότητα πρόσβασης στο δίκτυο της εφαρμογής είναι περιορισμένη, δεν θα είναι δυνατή η λήψη πληροφοριών καιρού μέσω του διαδικτύου.<br/>
            Εάν τα παραπάνω βήματα δεν επιλύσουν το πρόβλημα, προσπαθήστε να τραβήξετε φωτογραφίες των πληροφοριών συστήματος του ρολογιού και στιγμιότυπα οθόνης ορισμένων πληροφοριών συστήματος του τηλεφώνου. Στείλτε μας σχόλια μέσω της λειτουργίας ανατροφοδότησης στην εφαρμογή. Όταν επικοινωνείτε μαζί μας, προσπαθήστε να παρέχετε όσο το δυνατόν περισσότερες χρήσιμες πληροφορίες για να μας βοηθήσετε να επιλύσουμε καλύτερα το πρόβλημα.`
        },
        {
            category: "weather",
            question: "Τα δεδομένα καιρού στο ρολόι δεν είναι ακριβή, τι να κάνω;",
            answer: `
            Ελέγξτε τα εξής:

            1. Ελέγξτε αν ο εντοπισμός GPS του τηλεφώνου είναι ακριβής. Εάν ο εντοπισμός GPS του τηλεφώνου δεν είναι ακριβής, τα δεδομένα καιρού δεν μπορούν να είναι ακριβή. Συνιστάται να ανοίξετε το GPS του τηλεφώνου σε ανοιχτό χώρο και να ελέγξετε αν μπορείτε να λάβετε κανονικά πληροφορίες τοποθεσίας.

            2. Ελέγξτε την ώρα ενημέρωσης του καιρού στο ρολόι για να επιβεβαιώσετε αν οι πληροφορίες καιρού έχουν λήξει. Εάν οι πληροφορίες καιρού έχουν λήξει, δοκιμάστε να ανοίξετε την εφαρμογή του τηλεφώνου, να μεταβείτε στο [Συσκευή] - [Προώθηση καιρού], να απενεργοποιήσετε την προώθηση καιρού και να την ενεργοποιήσετε ξανά για να δείτε αν ο καιρός εμφανίζεται κανονικά.

            {faq_note}Εάν οι παραπάνω μέθοδοι δεν επιλύσουν το πρόβλημα, προσπαθήστε να τραβήξετε φωτογραφίες των πληροφοριών συστήματος του ρολογιού και στιγμιότυπα οθόνης ορισμένων πληροφοριών συστήματος του τηλεφώνου. Στείλτε μας σχόλια μέσω της λειτουργίας ανατροφοδότησης στην εφαρμογή. Όταν επικοινωνείτε μαζί μας, προσπαθήστε να παρέχετε όσο το δυνατόν περισσότερες χρήσιμες πληροφορίες για να μας βοηθήσετε να επιλύσουμε καλύτερα το πρόβλημα.`
        },
        {
            category: "watchface", 
            question: "Πώς μπορώ να ανεβάσω ένα καντράν cloud στο ρολόι;",
            answer: `
            Βήματα:

            1. Στο {app_name}, ανοίξτε [Συσκευή] - [Ρυθμίσεις καντράν] και επιλέξτε το καντράν που σας αρέσει.

            2. Στο αναδυόμενο παράθυρο, πατήστε [Συγχρονισμός καντράν].

            3. Περιμένετε να ξεκινήσει η λήψη του καντράν. Μόλις ολοκληρωθεί η λήψη, θα ανέβει αυτόματα στο ρολόι.

            4. Περιμένετε να ολοκληρωθεί η μεταφόρτωση του καντράν και το ρολόι θα αλλάξει αυτόματα το καντράν.`
        },
        {
            category: "watchface",
            question: "Πώς μπορώ να προσαρμόσω ένα καντράν και να το ανεβάσω στο ρολόι;",
            answer: `
            Βήματα:

            1. Στο {app_name}, ανοίξτε [Συσκευή] - [Ρυθμίσεις καντράν] και πατήστε το [Είσοδος προσαρμοσμένου καντράν] (το πρώτο στην πάνω αριστερή γωνία, με το εικονίδιο επεξεργασίας στο κέντρο) για να μπείτε στη σελίδα προσαρμογής καντράν.

            2. Στη συνέχεια, τροποποιήστε το φόντο του καντράν, τη θέση της ημερομηνίας και ώρας, και το στυλ του καντράν σύμφωνα με τις προτιμήσεις σας.

            3. Πατήστε το κουμπί [Ορισμός ως καντράν].

            4. Περιμένετε να δημιουργηθεί το προσαρμοσμένο καντράν. Μόλις ολοκληρωθεί η δημιουργία, θα ανέβει αυτόματα στο ρολόι.

            5. Περιμένετε να ολοκληρωθεί η μεταφόρτωση του καντράν και το ρολόι θα αλλάξει αυτόματα το καντράν.`
        },
        {
            category: "basic",
            question: "Πώς μπορώ να ενεργοποιήσω και να απενεργοποιήσω το έξυπνο ρολόι;",
            answer: `
            Βήματα:

            1. Ενεργοποίηση ρολογιού: Πατήστε παρατεταμένα το πλευρικό κουμπί του ρολογιού για 3-5 δευτερόλεπτα μέχρι να ανάψει η οθόνη. Όταν το ρολόι έχει εξαντληθεί η μπαταρία του, θα ενεργοποιηθεί αυτόματα και θα μπει στην κύρια οθόνη μετά από περίπου 1 λεπτό φόρτισης.

            2. Απενεργοποίηση ρολογιού: Πατήστε παρατεταμένα το πλευρικό κουμπί του ρολογιού για 3-5 δευτερόλεπτα, επιλέξτε [Απενεργοποίηση] στο αναδυόμενο μενού, πατήστε [Επιβεβαίωση], το ρολόι θα εμφανίσει το μήνυμα "Goodbye" και στη συνέχεια θα απενεργοποιηθεί αυτόματα.`
        },
        {
            category: "basic",
            question: "Πώς μπορώ να επαναφέρω το έξυπνο ρολόι στις εργοστασιακές ρυθμίσεις;",
            answer: `
            Βήματα:

            Μέθοδος 1: Επαναφορά εργοστασιακών ρυθμίσεων από το ρολόι. Συγκεκριμένα, στο ρολόι ανοίξτε [Ρυθμίσεις] - [Σύστημα] - [Εργοστασιακή επαναφορά] και επιλέξτε [Επιβεβαίωση].

            Μέθοδος 2: Επαναφορά εργοστασιακών ρυθμίσεων από το ρολόι. Συγκεκριμένα, πατήστε παρατεταμένα το πλευρικό κουμπί του ρολογιού για 3-5 δευτερόλεπτα, επιλέξτε [Εργοστασιακή επαναφορά] στο αναδυόμενο μενού και επιλέξτε [Επιβεβαίωση].

            Μέθοδος 3: Επαναφορά εργοστασιακών ρυθμίσεων από την εφαρμογή του τηλεφώνου. Συγκεκριμένα, στην εφαρμογή του τηλεφώνου ανοίξτε [Συσκευή] - [Εργοστασιακή επαναφορά] και επιλέξτε [Επιβεβαίωση].`
        },
        {
            category: "basic",
            question: "Πώς μπορώ να αποσυνδέσω την εφαρμογή από το έξυπνο ρολόι;",
            answer: `
            Βήματα:

            1. Στην εφαρμογή του τηλεφώνου, ανοίξτε τη σελίδα [Συσκευή], κυλήστε στο κάτω μέρος, επιλέξτε [Αποσύνδεση συσκευής] και επιλέξτε [Επιβεβαίωση].

            2. Ακυρώστε τη σύζευξη Bluetooth μεταξύ του έξυπνου ρολογιού και του τηλεφώνου. Συγκεκριμένα, στο τηλέφωνο ανοίξτε [Ρυθμίσεις] - [Bluetooth], στη λίστα [Οι συσκευές μου] πατήστε το θαυμαστικό δίπλα στο όνομα Bluetooth του ρολογιού και επιλέξτε [Διαγραφή αυτής της συσκευής].

            {faq_note}Μετά την αποσύνδεση του ρολογιού, βεβαιωθείτε ότι ακυρώνετε χειροκίνητα τη σύζευξη Bluetooth μεταξύ του έξυπνου ρολογιού και του τηλεφώνου στις ρυθμίσεις συστήματος. Διαφορετικά, την επόμενη φορά που θα προσπαθήσετε να συνδέσετε το ρολόι, μπορεί να μην είναι δυνατή η ανίχνευσή του, με αποτέλεσμα να μην μπορείτε να το συνδέσετε.`
        },
        {
            category: "basic",
            question: "Πώς μπορώ να τερματίσω μια κλήση;",
            answer: `
            Όταν υπάρχει ειδοποίηση εισερχόμενης κλήσης στο ρολόι, πατήστε παρατεταμένα το πλευρικό κουμπί του ρολογιού για 3 δευτερόλεπτα για να τερματίσετε την κλήση.`
        },
        {
            category: "basic",
            question: "Πώς χρησιμοποιώ τη λειτουργία λήψης φωτογραφίας με κούνημα;",
            answer: `
            Βήματα:

            1. Στην εφαρμογή του τηλεφώνου, ανοίξτε [Συσκευή] - [Λήψη φωτογραφίας με κούνημα]. Εάν σας ζητηθεί να επιτρέψετε την "πρόσβαση στην κάμερα του τηλεφώνου", επιλέξτε [Επιτρέπεται].

            2. Κουνήστε το ρολόι ή πατήστε το εικονίδιο της κάμερας στο ρολόι για να τραβήξετε φωτογραφία.`
        },
        {
            category: "basic",
            question: "Πώς χρησιμοποιώ τη λειτουργία ελέγχου μουσικής;",
            answer: `
            Όταν το ρολόι είναι επιτυχώς συνδεδεμένο με το τηλέφωνο, ανοίξτε το πρόγραμμα αναπαραγωγής μουσικής του τηλεφώνου και αναπαράγετε μουσική από τη λίστα λήψεων. Στη διεπαφή μουσικής της συσκευής, πατήστε τα κουμπιά αριστερά και δεξιά για εναλλαγή, πατήστε το μεσαίο κουμπί για παύση ή αναπαραγωγή της μουσικής.

            {faq_note}Ορισμένα ενσωματωμένα προγράμματα αναπαραγωγής μουσικής τηλεφώνου δεν υποστηρίζονται. Υποστηρίζονται προγράμματα αναπαραγωγής όπως το QQ Music, το NetEase Cloud Music, το PLAY Music κ.λπ.`
        },
        {
            category: "device",
            question: "Η αναβάθμιση υλικολογισμικού του ρολογιού απέτυχε, τι να κάνω;",
            answer: `
            Εάν η αναβάθμιση υλικολογισμικού του ρολογιού αποτύχει, δοκιμάστε τις ακόλουθες μεθόδους:

            1. Βεβαιωθείτε ότι η μπαταρία του ρολογιού είναι επαρκώς φορτισμένη. Η χαμηλή στάθμη μπαταρίας μπορεί να προκαλέσει αποτυχία της αναβάθμισης υλικολογισμικού.

            2. Βεβαιωθείτε ότι η σύνδεση μεταξύ του ρολογιού και του τηλεφώνου είναι σταθερή. Η ασταθής σύνδεση μπορεί να προκαλέσει αποτυχία της αναβάθμισης υλικολογισμικού.

            3. Βεβαιωθείτε ότι το ρολόι και το τηλέφωνο βρίσκονται στο ίδιο περιβάλλον δικτύου. Το ασταθές δίκτυο μπορεί να προκαλέσει αποτυχία της αναβάθμισης υλικολογισμικού.

            4. Κατά τη διάρκεια της αναβάθμισης υλικολογισμικού, μην αποσυνδέετε το ρολόι από το τηλέφωνο, καθώς αυτό μπορεί να προκαλέσει αποτυχία της αναβάθμισης.

            5. Κατά τη διάρκεια της αναβάθμισης υλικολογισμικού, μην τερματίζετε τη διαδικασία της εφαρμογής, καθώς αυτό μπορεί να προκαλέσει αποτυχία της αναβάθμισης.

            6. Κατά τη διάρκεια της αναβάθμισης υλικολογισμικού, μην βγαίνετε από τη διεπαφή αναβάθμισης ή μην απενεργοποιείτε την οθόνη, καθώς αυτό μπορεί να προκαλέσει αποτυχία της αναβάθμισης.

            7. Ορισμένες συσκευές ρολογιού μετά από αποτυχία αναβάθμισης θα έχουν χρόνο αναμονής δύο λεπτών (κατά τη διάρκεια των οποίων η συσκευή δεν θα έχει καμία απόκριση) πριν επανενεργοποιηθεί η σύνδεση. Παρακαλώ περιμένετε υπομονετικά.

            {faq_note}Εάν οι παραπάνω μέθοδοι δεν επιλύσουν το πρόβλημα, προσπαθήστε να τραβήξετε φωτογραφίες των πληροφοριών συστήματος του ρολογιού και στιγμιότυπα οθόνης ορισμένων πληροφοριών συστήματος του τηλεφώνου. Στείλτε μας σχόλια μέσω της λειτουργίας ανατροφοδότησης στην εφαρμογή. Όταν επικοινωνείτε μαζί μας, προσπαθήστε να παρέχετε όσο το δυνατόν περισσότερες χρήσιμες πληροφορίες για να μας βοηθήσετε να επιλύσουμε καλύτερα το πρόβλημα.`
        },
        {
            category: "device",
            question: "Η συσκευή εξακολουθεί να μην ανταποκρίνεται μετά από κάποιο χρόνο φόρτισης, ποια είναι η αιτία;",
            answer: `
            Όταν το ρολόι δεν έχει χρησιμοποιηθεί για μεγάλο χρονικό διάστημα, θα μπει σε κατάσταση χαμηλής μπαταρίας. Παρακαλώ χρησιμοποιήστε τον φορτιστή του τηλεφώνου για φόρτιση περίπου μισής ώρας για ενεργοποίηση.

            {faq_note}Κατά τη φόρτιση, είναι καλύτερο να χρησιμοποιείτε τον φορτιστή του τηλεφώνου. Το ρεύμα από τον υπολογιστή είναι πολύ χαμηλό και μπορεί να είναι δύσκολο να φορτίσει όταν η μπαταρία είναι χαμηλή.`
        },
        {
            category: "device",
            question: "Γιατί δεν ανάβει η οθόνη όταν σηκώνω το χέρι;",
            answer: `
            Παρακαλώ ελέγξτε τα εξής:

            1. Ελέγξτε αν η λειτουργία ανύψωσης καρπού για αφύπνιση είναι απενεργοποιημένη στην εφαρμογή και αν η ρύθμιση χρονικού διαστήματος ανύψωσης καρπού ανταποκρίνεται στις ανάγκες σας. Μετά τη σύνδεση Bluetooth, στη σελίδα [Συσκευή] του {app_name}, ενεργοποιήστε [Ανύψωση καρπού για αφύπνιση] και ορίστε το χρονικό διάστημα που ανταποκρίνεται στις ανάγκες σας για να ενεργοποιείται η οθόνη με ανύψωση καρπού κατά τη διάρκεια αυτού του διαστήματος.

            2. Ελέγξτε αν η συσκευή έχει ενεργοποιημένη τη λειτουργία "Μην ενοχλείτε". Όταν η συσκευή είναι σε λειτουργία "Μην ενοχλείτε", η οθόνη δεν θα ανάψει με ανύψωση καρπού.

            3. Όταν θέλετε να δείτε την ώρα, σηκώστε τον καρπό σας με την οθόνη στραμμένη προς εσάς.

            {faq_note}Εάν οι παραπάνω μέθοδοι δεν επιλύσουν το πρόβλημα, προσπαθήστε να τραβήξετε φωτογραφίες των πληροφοριών συστήματος του ρολογιού και στιγμιότυπα οθόνης ορισμένων πληροφοριών συστήματος του τηλεφώνου. Στείλτε μας σχόλια μέσω της λειτουργίας ανατροφοδότησης στην εφαρμογή. Όταν επικοινωνείτε μαζί μας, προσπαθήστε να παρέχετε όσο το δυνατόν περισσότερες χρήσιμες πληροφορίες για να μας βοηθήσετε να επιλύσουμε καλύτερα το πρόβλημα.`
        },
        {
            category: "device",
            question: "Πόσα ξυπνητήρια μπορώ να ρυθμίσω στο ρολόι;",
            answer: `
            Αυτό εξαρτάται από το μοντέλο του ρολογιού σας. Συνήθως, το ρολόι μπορεί να ρυθμίσει 5 ξυπνητήρια.`
        },
        {
            category: "device",
            question: "Πώς ρυθμίζω την ώρα στο ρολόι;",
            answer: `
            Το ρολόι θα συγχρονίσει αυτόματα την ώρα μετά τη σύνδεση με το τηλέφωνο, δεν χρειάζεται χειροκίνητη ρύθμιση.`
        },
        {
            category: "device",
            question: "Πώς ρυθμίζω τη γλώσσα στο ρολόι;",
            answer: `
            Συνήθως, το ρολόι θα συγχρονίσει αυτόματα τη γλώσσα μετά τη σύνδεση με το τηλέφωνο, δεν χρειάζεται χειροκίνητη ρύθμιση.

            {faq_note}Ορισμένα ρολόγια υποστηρίζουν τη ρύθμιση γλώσσας στο ρολόι. Συγκεκριμένα, στο ρολόι ανοίξτε [Μενού] - [Ρυθμίσεις] - [Γλώσσα] και επιλέξτε τη γλώσσα που θέλετε να ρυθμίσετε.`
        },
        {
            category: "other",
            question: "Γιατί μειώθηκε ο χρόνος χρήσης της μπαταρίας;",
            answer: `
            Εάν το ρολόι έχει ενεργοποιημένες λειτουργίες όπως ανύψωση καρπού για αφύπνιση, περιοδική παρακολούθηση καρδιακού ρυθμού κ.λπ., αυτό θα αυξήσει την κατανάλωση ενέργειας και θα μειώσει το χρόνο χρήσης της μπαταρίας.`
        },
        {
            category: "other",
            question: "Είναι το ρολόι αδιάβροχο;",
            answer: `
            Σχετικά με την αδιαβροχοποίηση της συσκευής, παρακαλώ ανατρέξτε στο εγχειρίδιο του αντίστοιχου μοντέλου που αγοράσατε για να επιβεβαιώσετε αν υποστηρίζει αδιαβροχοποίηση καθημερινής χρήσης ή κολύμβησης. Δεν είναι κατάλληλο για καταδύσεις, θαλασσινό νερό, άλματα στο νερό, ζεστό νερό ντους, ιαματικές πηγές, σάουνα, άλλες δραστηριότητες με νερό υψηλής ταχύτητας ή βαθύ νερό. Τα δερμάτινα και μεταλλικά λουράκια δεν είναι κατάλληλα για κολύμβηση. Η λειτουργία αδιαβροχοποίησης δεν είναι μόνιμη και η προστατευτική απόδοση μπορεί να μειωθεί λόγω καθημερινής φθοράς.`
        }

    ]
}; 