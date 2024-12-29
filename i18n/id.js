window.i18nData = window.i18nData || {};
window.i18nData.id = {
    searchPlaceholder: "Cari FAQ...",
    pageTitle: "FAQ",
    mainTitle: "FAQ",
    subtitle: "Panduan FAQ dan Pemecahan Masalah untuk Smartwatch",
    footer: {
        copyright: "© 2025 Shenzhen Tuobu Intelligent Big Data Co., Ltd",
    },
    categories: {
        all: "Semua",
        basic: "Penggunaan Dasar",
        connection: "Koneksi Bluetooth",
        notification: "Notifikasi",
        health: "Pemantauan Kesehatan", 
        data: "Sinkronisasi Data",
        watchface: "Pengaturan Tampilan Jam",
        weather: "Tampilan Cuaca",
        device: "Manajemen Perangkat",
        other: "Lainnya"
    },
    faqData: [
        {
            category: "connection",
            question: "Mengapa saya tidak dapat menemukan perangkat smartwatch saya?",
            answer: `
            Silakan periksa hal-hal berikut:

            1. Periksa apakah smartwatch memiliki daya baterai yang cukup. Jika baterai lemah, isi daya terlebih dahulu.

            2. Pastikan smartwatch berada dalam jarak 0,5 meter dari ponsel.

            3. Periksa apakah smartwatch terhubung ke ponsel lain sebelumnya. Jika ya, putuskan sambungan dari ponsel sebelumnya dan hapus pemasangan Bluetooth di pengaturan sistem ponsel sebelum menghubungkan kembali.

            4. Di pengaturan ponsel, pastikan fungsi Bluetooth telah diaktifkan. Secara spesifik, buka [Pengaturan] - [Bluetooth] dan periksa apakah sakelar Bluetooth telah diaktifkan.

            5. Pastikan App memiliki izin Bluetooth. Secara spesifik, buka [Pengaturan] - [Aplikasi] - [{app_name}] dan periksa apakah izin Bluetooth telah diberikan.

            6. Coba mulai ulang Bluetooth ponsel dengan cara:
            Metode 1: Buka [Pengaturan] - [Bluetooth], matikan Bluetooth lalu nyalakan kembali.
            Metode 2: Geser ke bawah dari bagian atas layar ponsel untuk mengakses pusat kontrol, ketuk ikon Bluetooth untuk mematikan lalu nyalakan kembali.

            7. Reset smartwatch ke pengaturan pabrik. Secara spesifik, di smartwatch buka [Pengaturan] - [Sistem] - [Reset Pabrik] lalu pilih [Konfirmasi].

            8. Mulai ulang smartwatch dan ponsel, lalu coba hubungkan kembali.

            {faq_note}Jika metode di atas tidak menyelesaikan masalah, coba ambil foto informasi sistem smartwatch dan tangkapan layar informasi sistem ponsel, lalu kirimkan kepada kami melalui fitur umpan balik di App. Saat menghubungi kami, berikan informasi sebanyak mungkin agar kami dapat membantu menyelesaikan masalah dengan lebih baik.`
        },
        {
            category: "connection", 
            question: "Bagaimana cara memastikan smartwatch terhubung dengan ponsel?",
            answer: `
            Di aplikasi ponsel, status perangkat akan menunjukkan "Terhubung".

            Selain itu, di iOS buka [Pengaturan] - [Bluetooth], nama Bluetooth smartwatch Anda akan muncul di daftar [Perangkat Saya] dengan status "Terhubung" dan tanda seru dalam lingkaran biru.

            Ketuk tanda seru untuk melihat informasi perangkat seperti nama perangkat, dan pastikan sakelar seperti [Berbagi Notifikasi Sistem] telah diaktifkan.`
        },
        {
            category: "connection",
            question: "Koneksi Bluetooth sering terputus, bagaimana cara memperbaikinya?",
            answer: `
            Coba cara berikut:

            1. Pastikan ponsel dan smartwatch berada di lingkungan dengan gangguan sinyal minimal.

            2. Hindari menghubungkan smartwatch dengan perangkat Bluetooth lain secara bersamaan.

            3. Perbarui firmware smartwatch dan versi App ponsel.`
        },
        {
            category: "notification",
            question: "Smartwatch tidak menerima notifikasi ponsel, apa yang harus dilakukan?",
            answer: `
            Silakan periksa hal-hal berikut:

            1. Pastikan smartwatch dan ponsel terhubung.

            2. Di aplikasi ponsel, pastikan Anda telah mengaktifkan notifikasi pesan yang sesuai. Secara spesifik, buka [{app_name}] - [Perangkat] - [Notifikasi Pesan] dan periksa apakah notifikasi untuk aplikasi yang diinginkan telah diaktifkan.

            3. Pastikan smartwatch dipasangkan dengan Bluetooth ponsel dan berbagi notifikasi sistem diaktifkan. Secara spesifik, di ponsel buka [Pengaturan] - [Bluetooth], ketuk tanda seru di sebelah nama Bluetooth smartwatch di daftar [Perangkat Saya], lalu periksa apakah [Berbagi Notifikasi Sistem] telah diaktifkan.

            4. Pastikan izin notifikasi telah diaktifkan di ponsel. Secara spesifik, di ponsel buka [Pengaturan] - [Notifikasi] dan periksa apakah pengaturannya benar.

            5. Pastikan aplikasi yang sesuai untuk smartwatch telah diinstal di ponsel dan izin notifikasinya diaktifkan. Misalnya untuk WhatsApp, di ponsel buka [Pengaturan] - [Aplikasi] - [WhatsApp] - [Notifikasi], periksa apakah [Izinkan Notifikasi] telah diaktifkan dan pengaturan jenis peringatan sudah benar.

            {faq_note}Jika metode di atas tidak menyelesaikan masalah, coba ambil foto informasi sistem smartwatch dan tangkapan layar informasi sistem ponsel, lalu kirimkan kepada kami melalui fitur umpan balik di App. Saat menghubungi kami, berikan informasi sebanyak mungkin agar kami dapat membantu menyelesaikan masalah dengan lebih baik.`
        },
        {
            category: "notification",
            question: "Smartwatch hanya menerima notifikasi dari beberapa aplikasi, bagaimana cara mengatasinya?",
            answer: `
            Pastikan untuk mengaktifkan izin notifikasi secara individual untuk aplikasi yang diinginkan di aplikasi ponsel dan sinkronkan ke smartwatch.

            Secara spesifik, buka [{app_name}] - [Perangkat] - [Notifikasi Pesan], lalu aktifkan notifikasi pesan untuk aplikasi yang sesuai.`
        },
        {
            category: "data",
            question: "Bagaimana cara melihat data olahraga dan kesehatan saya di aplikasi ponsel?",
            answer: `
            Saat Anda melakukan pengukuran data olahraga dan kesehatan di smartwatch, smartwatch akan secara otomatis merekam data tersebut. Data akan disinkronkan ke aplikasi ponsel saat terhubung.

            Jika data belum tersinkron, Anda dapat mencoba menarik ke bawah di halaman utama App untuk menyinkronkan data olahraga dan kesehatan secara manual.

            Setelah sinkronisasi selesai, Anda dapat melihat data detak jantung, langkah, tidur, stres, oksigen darah, suhu tubuh, olahraga, dan lainnya di App.`
        },
        {
            category: "health",
            question: "Data olahraga dan kesehatan saya tidak akurat, apa yang harus dilakukan?",
            answer: `
            Pastikan informasi profil pribadi Anda diisi dengan benar. Secara spesifik, beberapa algoritma pengukuran fungsi smartwatch bergantung pada informasi pribadi seperti jenis kelamin, tinggi badan, berat badan, dan usia. Pastikan keakuratan data ini untuk mendapatkan data olahraga dan kesehatan yang lebih akurat.`
        },
        {
            category: "data",
            question: "Data di smartwatch tidak sesuai dengan data di App, apa yang harus dilakukan?",
            answer: `
            Silakan periksa hal-hal berikut:

            1. Data di smartwatch telah disinkronkan ke App. Jika belum, tarik ke bawah di halaman utama App untuk menyinkronkan data olahraga dan kesehatan secara manual, lalu periksa apakah data sudah sesuai.

            2. Periksa apakah smartwatch pernah terhubung ke ponsel lain dan apakah data telah disinkronkan ke App di ponsel lain.

            {faq_note}Umumnya, kami tidak menyarankan untuk menghubungkan satu smartwatch ke beberapa ponsel atau App secara bersamaan karena dapat menyebabkan ketidaksesuaian sinkronisasi data atau bahkan kehilangan data. Selain itu, untuk memastikan data tidak hilang, data hari ini di App diakumulasikan, sedangkan data di smartwatch akan direset setelah pemasangan ulang. Jika Anda memasangkan ulang smartwatch, data di smartwatch mungkin tidak sesuai dengan data di App. Misalnya untuk data tidur, jika Anda memutuskan sambungan smartwatch segera setelah terhubung ke App ponsel, data di smartwatch mungkin belum sempat disinkronkan ke App (biasanya membutuhkan waktu untuk menyinkronkan data karena jumlahnya besar). Data di smartwatch akan terhapus dan data tidur di App akan hilang. Oleh karena itu, jika Anda perlu memutuskan sambungan smartwatch, kami sarankan untuk menunggu hingga data di smartwatch selesai disinkronkan sebelum memutuskan sambungan.`
        },
        {
            category: "weather",
            question: "Cuaca tidak tampil di smartwatch, bagaimana cara mengatasinya?",
            answer: `
            Silakan periksa hal-hal berikut:

            1. Pastikan smartwatch Anda mendukung fitur cuaca. Jika smartwatch tidak mendukung fitur cuaca, cuaca tidak akan ditampilkan. Secara spesifik, periksa apakah menu smartwatch memiliki [Cuaca].

            2. Pastikan [Layanan Lokasi] ponsel telah diaktifkan. Secara spesifik, buka [Pengaturan] - [Privasi & Keamanan] - [Layanan Lokasi] dan periksa apakah layanan lokasi telah diaktifkan.

            3. Pastikan {app_name} memiliki izin menggunakan layanan lokasi. Secara spesifik, buka [Pengaturan] - [Aplikasi] - [{app_name}] - [Lokasi] dan periksa apakah [Selalu] atau [Saat Menggunakan App] telah dipilih.

            4. Pastikan {app_name} dapat mengakses internet dengan normal. Secara spesifik, buka [{app_name}] - [Perangkat] - [Pengaturan Tampilan Jam] dan periksa apakah App dapat mengambil daftar tampilan jam cloud. Tentu saja Anda juga dapat memverifikasi hal ini dengan cara lain. Jika tidak dapat mengakses internet dengan normal, disarankan untuk menghapus App, mulai ulang ponsel, instal ulang App, dan ingat untuk mengizinkan App mengakses internet saat pertama kali membuka.

            5. Di aplikasi ponsel, periksa apakah fitur push cuaca telah diaktifkan. Secara spesifik, buka [{app_name}] - [Perangkat] - [Push Cuaca] dan periksa apakah fitur push cuaca telah diaktifkan.

            6. Coba matikan sakelar [Push Cuaca] lalu aktifkan kembali untuk melihat apakah cuaca dapat ditampilkan dengan normal.

            {faq_note}Fitur cuaca bergantung pada lokasi saat ini ponsel, terutama untuk mendapatkan informasi cuaca di lokasi Anda. Selain itu, fitur cuaca juga bergantung pada akses internet. Jika koneksi jaringan ponsel tidak stabil atau kemampuan akses jaringan App terbatas, informasi cuaca tidak dapat diperoleh melalui internet.<br/>
            Jika metode di atas tidak menyelesaikan masalah, coba ambil foto informasi sistem smartwatch dan tangkapan layar informasi sistem ponsel, lalu kirimkan kepada kami melalui fitur umpan balik di App. Saat menghubungi kami, berikan informasi sebanyak mungkin agar kami dapat membantu menyelesaikan masalah dengan lebih baik.`
        },
        {
            category: "weather",
            question: "Data cuaca di smartwatch tidak akurat, apa yang harus dilakukan?",
            answer: `
            Periksa hal-hal berikut:

            1. Periksa apakah lokasi GPS ponsel saat ini akurat. Jika lokasi GPS ponsel tidak akurat, data cuaca juga tidak akan akurat. Disarankan untuk mengaktifkan GPS ponsel di tempat terbuka dan periksa apakah informasi lokasi dapat diperoleh dengan normal.

            2. Di smartwatch, periksa waktu pembaruan cuaca untuk memastikan informasi cuaca tidak kedaluwarsa. Jika informasi cuaca kedaluwarsa, coba buka aplikasi ponsel, masuk ke [Perangkat] - [Push Cuaca], coba matikan push cuaca lalu aktifkan kembali untuk melihat apakah cuaca dapat ditampilkan dengan normal.

            {faq_note}Jika metode di atas tidak menyelesaikan masalah, coba ambil foto informasi sistem smartwatch dan tangkapan layar informasi sistem ponsel, lalu kirimkan kepada kami melalui fitur umpan balik di App. Saat menghubungi kami, berikan informasi sebanyak mungkin agar kami dapat membantu menyelesaikan masalah dengan lebih baik.`
        },
        {
            category: "watchface",
            question: "Bagaimana cara mengunggah tampilan jam cloud ke smartwatch?",
            answer: `
            Langkah-langkah:

            1. Di {app_name}, buka [Perangkat] - [Pengaturan Tampilan Jam], lalu pilih tampilan jam yang Anda suka.

            2. Ketuk [Sinkronkan Tampilan Jam] di jendela pop-up.

            3. Tunggu hingga tampilan jam mulai diunduh. Setelah selesai diunduh, tampilan jam akan secara otomatis diunggah ke smartwatch.

            4. Tunggu hingga pengunggahan tampilan jam selesai, smartwatch akan secara otomatis mengganti tampilan jam.`
        },
        {
            category: "watchface",
            question: "Bagaimana cara menyesuaikan tampilan jam dan mengunggahnya ke smartwatch?",
            answer: `
            Langkah-langkah:

            1. Di {app_name}, buka [Perangkat] - [Pengaturan Tampilan Jam], lalu ketuk [Entri Tampilan Jam Kustom] (terletak di kiri atas pertama, dengan ikon tombol edit di tengah) untuk masuk ke halaman tampilan jam kustom.

            2. Kemudian sesuaikan latar belakang tampilan jam, posisi tanggal dan waktu, serta gaya tampilan jam sesuai preferensi Anda.

            3. Ketuk tombol [Atur sebagai Tampilan Jam].

            4. Tunggu hingga tampilan jam kustom dibuat. Setelah selesai dibuat, tampilan jam akan secara otomatis diunggah ke smartwatch.

            5. Tunggu hingga pengunggahan tampilan jam selesai, smartwatch akan secara otomatis mengganti tampilan jam.`
        },
        {
            category: "basic",
            question: "Bagaimana cara menyalakan dan mematikan smartwatch?",
            answer: `
            Langkah-langkah:

            1. Menyalakan smartwatch: Tekan dan tahan tombol samping smartwatch selama 3-5 detik hingga layar menyala. Saat smartwatch kehabisan daya, smartwatch akan menyala secara otomatis dan masuk ke halaman utama setelah diisi daya selama sekitar 1 menit.

            2. Mematikan smartwatch: Tekan dan tahan tombol samping smartwatch selama 3-5 detik, pilih [Matikan] di jendela pop-up, ketuk [Konfirmasi], smartwatch akan menampilkan pesan "Goodbye", lalu smartwatch akan mati secara otomatis.`
        },
        {
            category: "basic",
            question: "Bagaimana cara mereset smartwatch ke pengaturan pabrik?",
            answer: `
            Langkah-langkah:

            Metode 1: Reset ke pengaturan pabrik di smartwatch. Secara spesifik, di smartwatch buka [Pengaturan] - [Sistem] - [Reset Pabrik], lalu pilih [Konfirmasi].

            Metode 2: Reset ke pengaturan pabrik di smartwatch. Secara spesifik, tekan dan tahan tombol samping smartwatch selama 3-5 detik, pilih [Reset Pabrik] di jendela pop-up, lalu pilih [Konfirmasi].

            Metode 3: Reset ke pengaturan pabrik di aplikasi ponsel. Secara spesifik, di aplikasi ponsel buka [Perangkat] - [Reset ke Pengaturan Pabrik], lalu pilih [Konfirmasi].`
        },
        {
            category: "basic",
            question: "Bagaimana cara memutuskan sambungan antara App dan smartwatch?",
            answer: `
            Langkah-langkah:

            1. Di aplikasi ponsel, buka halaman [Perangkat], gulir ke bawah, pilih [Putuskan Sambungan Perangkat], lalu pilih [Konfirmasi].

            2. Batalkan pemasangan Bluetooth antara smartwatch dan ponsel. Secara spesifik, di ponsel buka [Pengaturan] - [Bluetooth], ketuk tanda seru di sebelah nama Bluetooth smartwatch di daftar [Perangkat Saya], lalu pilih [Lupakan Perangkat Ini].

            {faq_note}Setelah memutuskan sambungan smartwatch, Anda harus membatalkan pemasangan Bluetooth antara smartwatch dan ponsel secara manual di pengaturan sistem. Jika tidak, smartwatch mungkin tidak dapat ditemukan saat mencoba menghubungkan kembali, sehingga tidak dapat dipasangkan.`
        },
        {
            category: "basic",
            question: "Bagaimana cara mengakhiri panggilan?",
            answer: `
            Saat ada pemberitahuan panggilan masuk di smartwatch, tekan dan tahan tombol samping smartwatch selama 3 detik untuk mengakhiri panggilan.`
        },
        {
            category: "basic",
            question: "Bagaimana cara menggunakan fitur goyang untuk mengambil foto?",
            answer: `
            Langkah-langkah:

            1. Di aplikasi ponsel, buka [Perangkat] - [Goyang untuk Mengambil Foto]. Jika diminta untuk mengizinkan "akses ke kamera ponsel", pilih [Izinkan].

            2. Goyangkan smartwatch atau ketuk ikon kamera di smartwatch untuk mengambil foto.`
        },
        {
            category: "basic",
            question: "Bagaimana cara menggunakan fitur kontrol musik?",
            answer: `
            Saat smartwatch terhubung dengan ponsel, buka pemutar musik ponsel dan putar musik dari daftar unduhan. Di antarmuka musik perangkat, tekan tombol kiri/kanan untuk beralih, ketuk tombol tengah untuk menjeda atau memutar musik.

            {faq_note}Beberapa pemutar musik bawaan ponsel mungkin tidak didukung. Dapat mendukung pemutar musik QQ Music, NetEase Cloud Music, PLAY Music, dll.`
        },
        {
            category: "device",
            question: "Pembaruan firmware smartwatch gagal, apa yang harus dilakukan?",
            answer: `
            Jika pembaruan firmware smartwatch gagal, coba cara berikut:

            1. Pastikan daya baterai smartwatch cukup. Daya baterai lemah dapat menyebabkan kegagalan pembaruan firmware.

            2. Pastikan koneksi antara smartwatch dan ponsel stabil. Koneksi tidak stabil dapat menyebabkan kegagalan pembaruan firmware.

            3. Pastikan smartwatch dan ponsel berada dalam lingkungan jaringan yang sama. Jaringan tidak stabil dapat menyebabkan kegagalan pembaruan firmware.

            4. Selama proses pembaruan firmware, jangan putuskan sambungan antara smartwatch dan ponsel, karena dapat menyebabkan kegagalan pembaruan firmware.

            5. Selama proses pembaruan firmware, jangan matikan proses App, karena dapat menyebabkan kegagalan pembaruan firmware.

            6. Selama proses pembaruan firmware, jangan keluar dari antarmuka pembaruan firmware atau matikan layar, karena dapat menyebabkan kegagalan pembaruan firmware.

            7. Beberapa smartwatch yang gagal diperbarui memerlukan waktu tunggu dua menit (selama periode ini perangkat tidak akan merespons) sebelum koneksi diaktifkan kembali. Harap bersabar.

            {faq_note}Jika metode di atas tidak menyelesaikan masalah, coba ambil foto informasi sistem smartwatch dan tangkapan layar informasi sistem ponsel, lalu kirimkan kepada kami melalui fitur umpan balik di App. Saat menghubungi kami, berikan informasi sebanyak mungkin agar kami dapat membantu menyelesaikan masalah dengan lebih baik.`
        },
        {
            category: "device",
            question: "Perangkat masih tidak merespons setelah diisi daya beberapa saat, apa penyebabnya?",
            answer: `
            Saat smartwatch tidak digunakan dalam waktu lama, perangkat akan masuk ke mode baterai lemah. Harap isi daya menggunakan adaptor pengisian daya ponsel selama sekitar setengah jam untuk mengaktifkannya.

            {faq_note}Saat mengisi daya, sebaiknya gunakan adaptor pengisian daya ponsel. Arus dari komputer terlalu kecil dan mungkin sulit untuk mengisi daya saat baterai lemah.`
        },
        {
            category: "device",
            question: "Mengapa layar tidak menyala saat mengangkat tangan?",
            answer: `
            Silakan periksa hal-hal berikut:

            1. Periksa apakah fitur layar menyala saat mengangkat pergelangan tangan dimatikan di App dan apakah pengaturan periode waktu sesuai dengan kebutuhan Anda. Setelah terhubung Bluetooth, di halaman [Perangkat] {app_name}, aktifkan [Layar Menyala saat Membalik Pergelangan Tangan] dan atur periode waktu yang sesuai dengan kebutuhan Anda untuk mengaktifkan layar saat membalik pergelangan tangan selama periode tersebut.

            2. Periksa apakah mode jangan ganggu diaktifkan di perangkat. Layar tidak akan menyala saat mengangkat pergelangan tangan jika mode jangan ganggu diaktifkan di perangkat.

            3. Saat ingin melihat waktu, angkat pergelangan tangan dan arahkan layar ke arah Anda.

            {faq_note}Jika metode di atas tidak menyelesaikan masalah, coba ambil foto informasi sistem smartwatch dan tangkapan layar informasi sistem ponsel, lalu kirimkan kepada kami melalui fitur umpan balik di App. Saat menghubungi kami, berikan informasi sebanyak mungkin agar kami dapat membantu menyelesaikan masalah dengan lebih baik.`
        },
        {
            category: "device",
            question: "Berapa banyak alarm yang dapat diatur di smartwatch?",
            answer: `
            Ini tergantung pada model smartwatch Anda. Umumnya, smartwatch dapat mengatur 5 alarm.`
        },
        {
            category: "device",
            question: "Bagaimana cara mengatur waktu di smartwatch?",
            answer: `
            Smartwatch akan secara otomatis menyinkronkan waktu setelah terhubung dengan ponsel. Tidak perlu mengatur secara manual.`
        },
        {
            category: "device",
            question: "Bagaimana cara mengatur bahasa di smartwatch?",
            answer: `
            Umumnya, smartwatch akan secara otomatis menyinkronkan bahasa setelah terhubung dengan ponsel. Tidak perlu mengatur secara manual.

            {faq_note}Beberapa smartwatch mendukung pengaturan bahasa di smartwatch. Secara spesifik, di smartwatch buka [Menu] - [Pengaturan] - [Bahasa], lalu pilih bahasa yang ingin Anda atur.`
        },
        {
            category: "other",
            question: "Mengapa waktu penggunaan baterai menjadi lebih pendek?",
            answer: `
            Jika fitur seperti layar menyala saat membalik pergelangan tangan dan pemeriksaan detak jantung terjadwal diaktifkan di smartwatch, konsumsi daya akan meningkat, mengurangi waktu penggunaan baterai.`
        },
        {
            category: "other",
            question: "Apakah smartwatch tahan air?",
            answer: `
            Mengenai ketahanan air perangkat, silakan lihat manual pengguna untuk model perangkat yang Anda beli untuk memastikan apakah mendukung ketahanan air sehari-hari atau ketahanan air untuk berenang. Tidak cocok untuk menyelam, air laut, melompat ke air, air panas, pemandian air panas, sauna, aktivitas air lain atau aktivitas air dalam di bawah aliran air berkecepatan tinggi. Tali kulit asli dan tali logam tidak cocok untuk berenang. Fungsi tahan air tidak permanen, kemampuan perlindungan dapat menurun karena keausan sehari-hari.`
        }

    ]
};