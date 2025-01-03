window.i18nData = window.i18nData || {};
window.i18nData.ja = {
    searchPlaceholder: "よくある質問を検索...",
    pageTitle: "よくある質問",
    mainTitle: "よくある質問",
    subtitle: "スマートウォッチの使用に関するよくある質問とトラブルシューティングガイド",
    footer: {
        copyright: "© 2025 深セン市拓歩智能大数据有限公司",
    },
    categories: {
        all: "すべて",
        basic: "基本的な使用方法",
        connection: "Bluetooth接続",
        notification: "通知",
        health: "健康モニタリング", 
        data: "データ同期",
        watchface: "文字盤設定",
        weather: "天気表示",
        device: "デバイス管理",
        other: "その他"
    },
    faqData: [
        {
            category: "connection", 
            question: "なぜ私の時計デバイスを検索できないのですか?",
            answer: `
            以下の項目をご確認ください:

            1. 時計の電池残量が十分かどうかを確認してください。電池残量が少ない場合は、先に充電してください。

            2. 時計とスマートフォンを0.5メートル以内の範囲に保ってください。

            3. 他のスマートフォンと接続したことがある時計かどうかを確認してください。その場合は、元のスマートフォンで時計のペアリングを解除し、スマートフォンのシステム設定でBluetoothのペアリングを解除してから、再度ペアリングを行ってください。

            4. スマートフォンの設定で、Bluetooth機能が有効になっていることを確認してください。具体的には、【設定】-【Bluetooth】を開き、Bluetoothがオンになっているかを確認してください。

            5. 現在のアプリにBluetoothの権限が付与されていることを確認してください。具体的には、【設定】-【アプリ】-【{app_name}】を開き、Bluetooth権限が付与されているかを確認してください。

            6. スマートフォンのBluetoothを再起動してみてください。具体的には:
            方法1:【設定】-【Bluetooth】を開き、Bluetoothをオフにしてから再度オンにします。
            方法2:スマートフォンの画面上部から下にスワイプしてコントロールセンターを開き、Bluetoothアイコンをタップしてオフにしてから、再度タップしてオンにします。

            7. 時計を工場出荷時の設定に戻してください。具体的には、時計で【設定】-【システム】-【工場出荷時設定に戻す】を開き、【確認】を選択します。

            8. 時計とスマートフォンを再起動して、再度接続を試みてください。

            {faq_note}上記の方法で問題が解決しない場合は、時計のシステム情報の写真とスマートフォンのシステム情報のスクリーンショットを撮影し、アプリのフィードバック機能を通じて私たちに送信してください。お問い合わせの際は、できるだけ多くの関連情報を提供していただくと、より適切な解決策をご案内できます。`
        },
        {
            category: "connection",
            question: "時計とスマートフォンが正常に接続されているか確認するにはどうすればよいですか?",
            answer: `
            スマートフォンのアプリで、デバイスの状態が「接続済み」と表示されていることを確認してください。

            また、iOSの場合は【設定】-【Bluetooth】を開き、【マイデバイス】リストに時計のBluetooth名が表示され、状態が「接続済み」となっており、青い丸で囲まれた感嘆符マークが表示されていることを確認してください。

            感嘆符マークをタップすると、デバイス名などの情報が表示され、【システム通知を共有】などのスイッチがすべてオンになっていることを確認できます。`
        },
        {
            category: "connection",
            question: "Bluetooth接続が頻繁に切断されます。改善方法はありますか?",
            answer: `
            以下の方法をお試しください:

            1. スマートフォンと時計が電波干渉の少ない環境にあることを確認してください。

            2. 時計と他のBluetoothデバイスの同時接続を避けてください。

            3. 時計のファームウェアとスマートフォンのアプリを最新バージョンに更新してください。`
        },
        {
            category: "notification",
            question: "時計でスマートフォンの通知を受信できません。どうすればよいですか?",
            answer: `
            以下の項目をご確認ください:

            1. 時計とスマートフォンが接続されていることを確認してください。

            2. スマートフォンのアプリで対応する通知設定が有効になっていることを確認してください。具体的には、【{app_name}】-【デバイス】-【通知設定】を開き、対応するアプリの通知設定が有効になっているかを確認してください。

            3. 時計とスマートフォンのBluetoothがペアリングされ、システム通知の共有が有効になっていることを確認してください。具体的には、スマートフォンで【設定】-【Bluetooth】を開き、【マイデバイス】リストで時計のBluetooth名の横にある感嘆符マークをタップし、【システム通知を共有】が有効になっているかを確認してください。

            4. スマートフォンで通知権限が有効になっていることを確認してください。具体的には、スマートフォンで【設定】-【通知】を開き、各設定が正しく設定されているかを確認してください。

            5. スマートフォンに時計に対応するアプリがインストールされ、通知権限が有効になっていることを確認してください。例えばWhatsAppの場合、スマートフォンで【設定】-【アプリ】-【WhatsApp】-【通知】を開き、【通知を許可】がオンになっており、通知タイプの設定がすべて正しく設定されているかを確認してください。

            {faq_note}上記の方法で問題が解決しない場合は、時計のシステム情報の写真とスマートフォンのシステム情報のスクリーンショットを撮影し、アプリのフィードバック機能を通じて私たちに送信してください。お問い合わせの際は、できるだけ多くの関連情報を提供していただくと、より適切な解決策をご案内できます。`
        },
        {
            category: "notification", 
            question: "時計で一部のアプリの通知のみ受信されます。どうすればよいですか?",
            answer: `
            スマートフォンのアプリで、必要なアプリの通知権限を個別に有効にし、時計と同期してください。

            具体的には、【{app_name}】-【デバイス】-【通知設定】を開き、対応するアプリの通知設定を有効にしてください。`
        },
        {
            category: "data",
            question: "スマートフォンのアプリで運動と健康データを確認するにはどうすればよいですか?",
            answer: `
            時計で運動と健康データを測定すると、時計にデータが記録され、スマートフォンのアプリに接続すると自動的に同期されます。

            まだ同期されていない場合は、アプリのホーム画面を下にスワイプして、運動と健康データを手動で同期することができます。

            同期が完了すると、アプリで心拍数、歩数、睡眠、ストレス、血中酸素、体温、運動などのデータを確認できます。`
        },
        {
            category: "health",
            question: "運動と健康データが正確ではありません。どうすればよいですか?",
            answer: `
            個人情報が正しく入力されているか確認してください。具体的には、時計の一部の機能の測定アルゴリズムは、性別、身長、体重、年齢などの個人情報に依存しています。より正確な運動と健康データを得るために、これらの情報の正確性を確保してください。`
        },
        {
            category: "data",
            question: "時計のデータとアプリのデータが一致しません。どうすればよいですか?",
            answer: `
            以下の項目をご確認ください:

            1. 時計のデータがアプリに同期されているか確認してください。同期されていない場合は、アプリのホーム画面を下にスワイプして、運動と健康データを手動で同期し、データが一致するか確認してください。

            2. 時計が他のスマートフォンに接続されたことがあり、データが他のスマートフォンのアプリに同期されている可能性があります。

            {faq_note}通常、同じ時計を複数のスマートフォンやアプリに同時に接続することはお勧めしません。データの同期の不一致や、データの損失を引き起こす可能性があるためです。また、データの損失を防ぐため、アプリ上のその日のデータは累積的に加算されますが、時計を再バインドすると時計上のデータはクリアされるため、時計のデータとアプリのデータが一致しなくなる可能性があります。例えば、睡眠データの場合、時計をスマートフォンアプリに接続した直後にバインドを解除すると、時計のデータがアプリに同期される前に（通常、データ量が多いため、同期には一定の時間がかかります）時計のデータがクリアされ、アプリ上で睡眠データが失われる状況が発生する可能性があります。そのため、時計のバインドを解除する必要がある場合は、時計をスマートフォンアプリに接続した直後ではなく、時計のデータの同期が完了するまで待ってからバインドを解除することをお勧めします。`
        },
        {
            category: "weather",
            question: "時計に天気が表示されません。どうすればよいですか?",
            answer: `
            以下の項目をご確認ください:

            1. お使いの時計が天気機能に対応しているか確認してください。時計が天気機能に対応していない場合は、天気を表示できません。具体的には、時計のメニューに【天気】が含まれているか確認してください。

            2. スマートフォンの【位置情報サービス】が有効になっているか確認してください。具体的には、【設定】-【プライバシーとセキュリティ】-【位置情報サービス】を開き、位置情報サービスが有効になっているか確認してください。

            3. {app_name}に位置情報の使用が許可されているか確認してください。具体的には、【設定】-【アプリ】-【{app_name}】-【位置情報】を開き、【常に許可】または【アプリの使用中のみ許可】が選択されているか確認してください。

            4. {app_name}がインターネットに正常にアクセスできるか確認してください。具体的には、【{app_name}】-【デバイス】-【文字盤設定】を開き、アプリがクラウド文字盤リストを正常に取得できるか確認してください。もちろん、他の方法でも確認できます。インターネットに正常にアクセスできない場合は、アプリを削除し、スマートフォンを再起動して、アプリを再インストールすることをお勧めします。アプリを初めて開く際は、インターネットアクセスを許可する必要があります。

            5. スマートフォンアプリで天気通知機能が有効になっているか確認してください。具体的には、【{app_name}】-【デバイス】-【天気通知】を開き、天気通知機能が有効になっているか確認してください。

            6. 【天気通知】スイッチをオフにしてから再度オンにして、天気が正常に表示されるか確認してください。

            {faq_note}天気機能はスマートフォンの現在位置に依存し、主にお住まいの地域の天気情報を取得するために使用されます。また、天気機能はインターネットアクセスにも依存しており、スマートフォンのネットワーク接続が不安定な場合やアプリのネットワークアクセスが制限されている場合、インターネットから天気情報を取得できません。<br/>
            上記の方法で問題が解決しない場合は、時計のシステム情報の写真とスマートフォンのシステム情報のスクリーンショットを撮影し、アプリのフィードバック機能を通じて私たちに送信してください。お問い合わせの際は、できるだけ多くの関連情報を提供していただくと、より適切な解決策をご案内できます。`
        },
        {
            category: "weather",
            question: "時計の天気データが正確ではありません。どうすればよいですか?",
            answer: `
            以下の項目をご確認ください:

            1. スマートフォンのGPS位置情報が正確か確認してください。GPS位置情報が正確でない場合、天気データも正確に取得できません。開けた場所でGPSを有効にして、位置情報が正常に取得できるか確認することをお勧めします。

            2. 時計で天気の更新時刻を確認し、天気情報が期限切れになっていないか確認してください。期限切れの場合は、スマートフォンアプリで【デバイス】-【天気通知】を開き、天気通知をオフにしてから再度オンにして、天気が正常に表示されるか確認してください。

            {faq_note}上記の方法で問題が解決しない場合は、時計のシステム情報の写真とスマートフォンのシステム情報のスクリーンショットを撮影し、アプリのフィードバック機能を通じて私たちに送信してください。お問い合わせの際は、できるだけ多くの関連情報を提供していただくと、より適切な解決策をご案内できます。`
        },
        {
            category: "watchface",
            question: "クラウド文字盤を時計にアップロードするにはどうすればよいですか?",
            answer: `
            操作手順:

            1. {app_name}で、【デバイス】-【文字盤設定】を開き、お好みの文字盤を選択します。

            2. 表示されたポップアップで【文字盤を同期】をタップします。

            3. 文字盤のダウンロードが開始されるまで待ちます。ダウンロードが完了すると、自動的に時計に文字盤がアップロードされます。

            4. 文字盤のアップロードが完了すると、時計の文字盤が自動的に変更されます。`
        },
        {
            category: "watchface",
            question: "文字盤をカスタマイズして時計にアップロードするにはどうすればよいですか?",
            answer: `
            操作手順:

            1. {app_name}で、【デバイス】-【文字盤設定】を開き、【カスタム文字盤】（左上の編集ボタンアイコンがある最初のもの）をタップしてカスタム文字盤ページに入ります。

            2. お好みに応じて、文字盤の背景、日付と時刻の位置、文字盤のスタイルを変更します。

            3. 【文字盤に設定】ボタンをタップします。

            4. カスタム文字盤の生成を待ちます。生成が完了すると、自動的に時計に文字盤がアップロードされます。

            5. 文字盤のアップロードが完了すると、時計の文字盤が自動的に変更されます。`
        },
        {
            category: "basic",
            question: "スマートウォッチの電源をオン/オフするにはどうすればよいですか?",
            answer: `
            操作手順:

            1. 電源オン: 時計の側面のボタンを3-5秒間長押しし、画面が点灯するまで待ちます。時計の電池が切れている場合は、約1分間充電すると自動的に電源が入り、メイン画面が表示されます。

            2. 電源オフ: 時計の側面のボタンを3-5秒間長押しし、表示された画面で【電源オフ】を選択し、【確認】をタップすると、"Goodbye"と表示され、自動的に電源が切れます。`
        },
        {
            category: "basic",
            question: "スマートウォッチを工場出荷時の状態に戻すにはどうすればよいですか?",
            answer: `
            操作手順:

            方法1: 時計で工場出荷時の状態に戻す場合、時計で【設定】-【システム】-【工場出荷時の状態に戻す】を開き、【確認】を選択します。

            方法2: 時計で工場出荷時の状態に戻す場合、時計の側面のボタンを3-5秒間長押しし、表示された画面で【工場出荷時の状態に戻す】を選択し、【確認】を選択します。

            方法3: スマートフォンアプリで工場出荷時の状態に戻す場合、アプリで【デバイス】-【工場出荷時の状態に戻す】を開き、【確認】を選択します。`
        },
        {
            category: "basic",
            question: "アプリとスマートウォッチのペアリングを解除するにはどうすればよいですか?",
            answer: `
            操作手順:

            1. スマートフォンアプリで、【デバイス】ページを開き、一番下までスクロールして【デバイスのペアリング解除】を選択し、【確認】をタップします。

            2. スマートウォッチとスマートフォンのBluetoothペアリングを解除します。具体的には、スマートフォンで【設定】-【Bluetooth】を開き、【マイデバイス】リストで時計のBluetooth名の横にある感嘆符をタップし、【このデバイスを削除】を選択します。

            {faq_note}時計のペアリングを解除した後は、必ずシステム設定でスマートウォッチとスマートフォンのBluetoothペアリングを手動で解除してください。解除しないと、次回ペアリング時に時計が検出されず、ペアリングできない場合があります。`
        },
        {
            category: "basic",
            question: "電話を切るにはどうすればよいですか?",
            answer: `
            時計に着信通知が表示されたら、時計の側面のボタンを3秒間長押しすると、電話が切れます。`
        },
        {
            category: "basic",
            question: "シェイクして撮影機能はどのように使用しますか?",
            answer: `
            操作手順:

            1. スマートフォンアプリで、【デバイス】-【シェイクして撮影】を開きます。「カメラへのアクセスを許可しますか?」と表示された場合は、【許可】を選択してください。

            2. 時計を振るか、時計でカメラアイコンをタップすると写真が撮影できます。`
        },
        {
            category: "basic",
            question: "音楽コントロール機能はどのように使用しますか?",
            answer: `
            時計とスマートフォンが接続された状態で、スマートフォンの音楽プレーヤーを開き、ダウンロードリストの音楽を再生します。時計の音楽画面で左右のボタンで曲を切り替え、中央のボタンで音楽の一時停止/再生ができます。

            {faq_note}一部のスマートフォン標準の音楽プレーヤーには対応していませんが、QQ Music、NetEase Cloud Music、PLAY Musicなどのプレーヤーに対応しています。`
        },
        {
            category: "device", 
            question: "時計のファームウェアのアップデートに失敗しました。どうすればよいですか?",
            answer: `
            以下の方法をお試しください:

            1. 時計の電池残量が十分かどうかを確認してください。電池残量が少ない場合、ファームウェアのアップデートに失敗する可能性があります。

            2. 時計とスマートフォンの接続が安定しているか確認してください。不安定な接続は、アップデートの失敗の原因となる可能性があります。

            3. 時計とスマートフォンが同じネットワーク環境にあることを確認してください。不安定なネットワークは、アップデートの失敗の原因となる可能性があります。

            4. アップデート中は、時計とスマートフォンの接続を切断しないでください。切断すると、アップデートに失敗する可能性があります。

            5. アップデート中は、アプリを強制終了しないでください。強制終了すると、アップデートに失敗する可能性があります。

            6. アップデート中は、アップデート画面を閉じたり、画面をオフにしたりしないでください。これらの操作は、アップデートの失敗の原因となる可能性があります。

            7. 一部の時計では、アップデートに失敗した場合、再接続が可能になるまで2分程度の待機時間（その間、時計は反応しません）が必要です。しばらくお待ちください。

            {faq_note}上記の方法で問題が解決しない場合は、時計のシステム情報の写真とスマートフォンのシステム情報のスクリーンショットを撮影し、アプリのフィードバック機能を通じて私たちに送信してください。お問い合わせの際は、できるだけ多くの関連情報を提供していただくと、より適切な解決策をご案内できます。`
        },
        {
            category: "device",
            question: "しばらく充電しても時計が反応しないのはなぜですか?",
            answer: `
            時計を長期間使用していない場合、バッテリーが完全に放電し、低電力状態になっている可能性があります。スマートフォンの充電器を使用して約30分間充電し、時計を再起動してください。

            {faq_note}充電する際は、スマートフォンの充電器を使用することをお勧めします。パソコンのUSBポートは電流が不足しており、バッテリー残量が少ない状態では充電が困難な場合があります。`
        },
        {
            category: "device",
            question: "手首を上げても画面が点灯しないのはなぜですか?",
            answer: `
            以下の項目をご確認ください:

            1. アプリで手首を上げて画面を点灯する機能が無効になっていないか、また時間帯の設定が適切か確認してください。Bluetooth接続後、{app_name}の【デバイス】ページで【手首を上げて画面を点灯】を有効にし、必要な時間帯を設定してください。

            2. 時計のおやすみモードが有効になっていないか確認してください。おやすみモードが有効な場合、手首を上げても画面は点灯しません。

            3. 時刻を確認する際は、手首を上げて画面を自分の方に向けてください。

            {faq_note}上記の方法で問題が解決しない場合は、時計のシステム情報の写真とスマートフォンのシステム情報のスクリーンショットを撮影し、アプリのフィードバック機能を通じて私たちに送信してください。お問い合わせの際は、できるだけ多くの関連情報を提供していただくと、より適切な解決策をご案内できます。`
        },
        {
            category: "device",
            question: "時計にはいくつのアラームを設定できますか?",
            answer: `
            お使いの時計のモデルによって異なりますが、通常は5つのアラームを設定することができます。`
        },
        {
            category: "device",
            question: "時計の時刻はどのように調整すればよいですか?",
            answer: `
            時計とスマートフォンが接続されると、自動的に時刻が同期されるため、手動での調整は必要ありません。`
        },
        {
            category: "device",
            question: "時計の言語はどのように設定すればよいですか?",
            answer: `
            通常、時計とスマートフォンが接続されると、自動的に言語が同期されるため、手動での設定は必要ありません。

            {faq_note}一部の時計では、時計本体で言語を設定することができます。具体的には、時計で【メニュー】-【設定】-【言語】を開き、希望の言語を選択してください。`
        },
        {
            category: "other",
            question: "バッテリーの持続時間が短くなったのはなぜですか?",
            answer: `
            手首を上げて画面を点灯する機能や定期的な心拍数測定などの機能が有効になっている場合、電力消費が増加し、バッテリーの持続時間が短くなります。`
        },
        {
            category: "other",
            question: "時計は防水機能がありますか?",
            answer: `
            防水機能については、お使いの時計のモデルの取扱説明書をご確認いただき、生活防水または水泳時の防水に対応しているかをご確認ください。潜水、海水、飛び込み、温水シャワー、温泉、サウナ、高速の水流、その他の水中活動や深水での活動には適していません。レザーストラップやメタルストラップは水泳には適していません。また、防水機能は永久的なものではなく、日常的な使用により保護性能が低下する可能性があります。`
        }

    ]
}; 