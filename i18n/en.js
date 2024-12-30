window.i18nData = window.i18nData || {};
window.i18nData.en = {
    searchPlaceholder: "Search FAQs...",
    pageTitle: "FAQ",
    mainTitle: "Frequently Asked Questions",
    subtitle: "Common questions and troubleshooting guide for smartwatch usage",
    footer: {
        copyright: "© 2025 Shenzhen Tuobu Intelligent Big Data Co., Ltd",
    },
    categories: {
        all: "All",
        basic: "Basic Usage",
        connection: "Bluetooth Connection", 
        notification: "Notifications",
        health: "Health Monitoring",
        data: "Data Sync",
        watchface: "Watch Face",
        weather: "Weather Display",
        device: "Device Management",
        other: "Others"
    },
    faqData: [
        {
            platform: "none",
            category: "basic",
            question: "Smartwatch connection setup guide",
            answer: `
            The following video shows how to connect your smartwatch to your phone:

            <video src="videos/connection_en.mp4" style="width: 100%" controls poster="videos/connection_en_poster.jpg"/>
            `
        },
        {
            platform: "ios",
            category: "connection",
            question: "Why can't my phone discover the watch device?",
            answer: `
            Please check the following:

            1. Check if your watch has sufficient battery power. If the battery is low, please charge it first.

            2. Keep the watch within 0.5 meters of your phone.

            3. Check if the watch has been connected to other phones before. If so, please unbind it from the original phone and unpair it in the phone's Bluetooth settings before trying to bind it again.

            4. In your phone settings, make sure Bluetooth is enabled. Specifically, go to [Settings] - [Bluetooth] and check if Bluetooth is turned on.

            5. Make sure you've granted Bluetooth permissions to the current App. Specifically, go to [Settings] - [Apps] - [{app_name}] and check if Bluetooth permissions are granted.

            6. Try restarting your phone's Bluetooth:
            
                • Method 1: Go to [Settings] - [Bluetooth], turn off Bluetooth, then turn it back on.

                • Method 2: Swipe down from the top of your phone screen to access the control center, tap the Bluetooth icon to turn it off, then tap again to turn it on.

            7. Reset the watch to factory settings. Specifically, on the watch, go to [Settings] - [System] - [Factory Reset] and select [Confirm].

            8. Restart both the watch and phone, then try connecting again.

            {faq_note}If none of the above methods solve the problem, please try taking photos of your watch's system information and screenshots of your phone's system information, then send them to us through the feedback feature in the App. When contacting us, please provide as much relevant information as possible to help us better solve the problem.`
        },
        {
            platform: "ios",
            category: "connection",
            question: "How do I confirm that my watch is successfully connected to my phone?",
            answer: `
            In the phone App, the device status should show "Connected".

            Additionally, on iOS, go to [Settings] - [Bluetooth], your watch's Bluetooth name should appear in the "My Devices" list with "Connected" status and a blue circle with an exclamation mark.

            Tap the exclamation mark to see device information, and make sure switches like "Share System Notifications" are turned on.
            
            <img src="images/share_system_notifications_en.png" style="width: 50%"/>  `
        },
        {
            platform: "all",
            category: "connection",
            question: "Bluetooth connection keeps disconnecting, how can I improve it?",
            answer: `
            Try the following methods:

            1. Ensure the phone and watch are in an environment with minimal signal interference.

            2. Avoid connecting the watch to other Bluetooth devices simultaneously.

            3. Update the watch firmware and phone App to the latest version.`
        },
        {
            platform: "ios",
            category: "notification",
            question: "Why am I not receiving phone notifications on my watch?",
            answer: `
            Please check the following:

            1. Make sure the watch and phone are connected.

            2. Confirm you've enabled the corresponding message notifications in the phone App. Specifically, open [{app_name}] - [Device] - [Message Notifications] and check if notifications are enabled for the corresponding Apps.

            3. Confirm the watch is paired with your phone's Bluetooth and system notifications sharing is enabled. Specifically, on your phone go to [Settings] - [Bluetooth], tap the exclamation mark next to your watch's Bluetooth name in "My Devices", and check if [Share System Notifications] is enabled.

                <img src="images/share_system_notifications_en.png" style="width: 50%"/> 	

            4. Confirm notification permissions are enabled on your phone. Specifically, go to [Settings] - [Notifications] and check if all settings are correct.

            5. Make sure the corresponding App is installed on your phone and has notification permissions enabled. For example, with WhatsApp, go to [Settings] - [Apps] - [WhatsApp] - [Notifications], check if [Allow Notifications] is enabled and verify all notification type settings are correct.

            {faq_note}If none of the above methods solve the problem, please try taking photos of your watch's system information and screenshots of your phone's system information, then send them to us through the feedback feature in the App. When contacting us, please provide as much relevant information as possible to help us better solve the problem.`
        },
        {
            platform: "all",
            category: "notification",
            question: "I'm only receiving notifications from some apps on my watch, how can I fix this?",
            answer: `
            Please make sure to enable notification permissions individually for each desired app in the phone App's message notifications settings, and sync these settings to the watch.

            Specifically, open [{app_name}] - [Device] - [Message Notifications] and enable message notifications for the corresponding Apps.`
        },
        {
            platform: "all",
            category: "data",
            question: "How can I view my activity and health data in the phone App?",
            answer: `
            When you measure activity and health data on your watch, the watch automatically records this data and syncs it to the phone App when connected.

            If the data hasn't synced yet, you can try pulling down on the App's home page to manually sync activity and health data.

            After syncing is complete, you can view data for heart rate, steps, sleep, stress, blood oxygen, temperature, exercise and more in the App.`
        },
        {
            platform: "all",
            category: "health",
            question: "My activity and health data seems inaccurate, what should I do?",
            answer: `
            Please verify that your personal information is filled in correctly. Specifically, some of the watch's measurement algorithms rely on your gender, height, weight, age and other personal information. Please ensure the accuracy of this information to get more accurate activity and health data.`
        },
        {
            platform: "all",
            category: "data",
            question: "The data on my watch doesn't match what's shown in the App, what should I do?",
            answer: `
            Please check the following:

            1. Check if the data from your watch has synced to the App. If not, pull down on the App's home page to manually sync activity and health data, then check if the data matches.

            2. Check if the watch has been connected to other phones and if the data was synced to Apps on other phones.

            {faq_note}Generally, we don't recommend connecting the same watch to multiple phones or Apps simultaneously as this can cause data sync inconsistencies or even data loss. Additionally, to prevent data loss, the App's daily data is cumulative, while the watch's data is cleared after rebinding. If you've rebinded the watch, this may cause discrepancies between watch and App data. For example with sleep data, if you unbind the watch immediately after connecting it to the phone App, the watch's data may not have had time to sync to the App (syncing typically takes some time due to the large amount of data), so the watch data will be cleared and sleep data will be lost in the App. Therefore, if you need to unbind your watch, we recommend waiting for data syncing to complete after connecting to the phone App before unbinding.`
        },
        {
            platform: "ios",
            category: "weather",
            question: "Weather isn't displaying on my watch, how can I fix this?",
            answer: `
            Please check the following:

            1. Confirm your watch supports the weather feature. If it doesn't support weather, it won't be able to display weather information. Specifically, check if [Weather] is included in the watch's menu items.

            2. Confirm [Location Services] is enabled on your phone. Specifically, go to [Settings] - [Privacy & Security] - [Location Services] and check if location services are enabled.

            3. Confirm {app_name} is authorized to use location services. Specifically, go to [Settings] - [Apps] - [{app_name}] - [Location] and check if [Always] or [While Using App] is selected.

            4. Confirm {app_name} can access the internet normally. Specifically, open [{app_name}] - [Device] - [Watch Face Settings] and check if the App can normally retrieve the cloud watch face list, though you can verify this through other means as well. If internet access isn't working normally, try deleting the App, restarting your phone, and reinstalling the App. Remember to allow internet access when first opening the App.

            5. Check if weather push is enabled in the phone App. Specifically, open [{app_name}] - [Device] - [Weather Push] and check if weather push is enabled.

            6. Try turning the [Weather Push] switch off and then back on to see if weather displays normally.

            {faq_note}The weather feature relies on your phone's current location to get weather information for your location. Additionally, the weather feature depends on internet access - if your phone's network connection is unstable or the App's network access is restricted, it won't be able to get weather information from the internet.<br/>
            If none of the above methods solve the problem, please try taking photos of your watch's system information and screenshots of your phone's system information, then send them to us through the feedback feature in the App. When contacting us, please provide as much relevant information as possible to help us better solve the problem.`
        },
        {
            platform: "all",
            category: "weather",
            question: "The weather data on my watch seems inaccurate, what should I do?",
            answer: `
            Check the following:

            1. Check if your phone's GPS location is accurate. If the phone's GPS location is inaccurate, weather data won't be accurate either. Try going to an open area, turn on your phone's GPS, and check if it can get location information normally.

            2. Check the weather update time on your watch to confirm if the weather information is outdated. If it is outdated, try opening the phone App, going to [Device] - [Weather Push], turn weather push off and then back on to see if weather displays normally.

            {faq_note}If none of the above methods solve the problem, please try taking photos of your watch's system information and screenshots of your phone's system information, then send them to us through the feedback feature in the App. When contacting us, please provide as much relevant information as possible to help us better solve the problem.`
        },
        {
            platform: "all",
            category: "watchface",
            question: "How do I upload a cloud watch face to my watch?",
            answer: `
            Follow these steps:

            1. In {app_name}, open [Device] - [Watch Face Settings] and select your preferred watch face.

            2. Click [Sync Watch Face] in the popup interface.

            3. Wait for the watch face to download. Once downloaded, it will automatically upload to your watch device.

            4. Wait for the upload to complete. Your watch will automatically change to the new watch face.`
        },
        {
            platform: "all",
            category: "watchface",
            question: "How do I customize a watch face and upload it to my watch?",
            answer: `
            Follow these steps:

            1. In {app_name}, open [Device] - [Watch Face Settings], then click the [Custom Watch Face Entry] (first option in the top left, with an edit button icon in the center) to enter the custom watch face page.

            2. Modify the watch face background, date and time position, and watch face style according to your preferences.

            3. Click the [Set as Watch Face] button.

            4. Wait for the custom watch face to generate. Once generated, it will automatically upload to your watch device.

            5. Wait for the upload to complete. Your watch will automatically change to the new watch face.`
        },
        {
            platform: "all",
            category: "basic",
            question: "How do I turn my smartwatch on and off?",
            answer: `
            Follow these steps:

            1. To turn on: Press and hold the side button for 3-5 seconds until the screen lights up. When the watch is out of battery, it will automatically turn on and enter the main interface after charging for about 1 minute.

            2. To turn off: Press and hold the side button for 3-5 seconds, select [Power Off] in the popup interface, click [Confirm], the watch will show a "Goodbye" prompt, then automatically power off.`
        },
        {
            platform: "all",
            category: "basic",
            question: "How do I perform a factory reset on my smartwatch?",
            answer: `
            Follow these steps:

            Method 1: Reset from the watch. Specifically, on the watch open [Settings] - [System] - [Factory Reset], then select [Confirm].

            Method 2: Reset from the watch. Specifically, press and hold the side button for 3-5 seconds, select [Factory Reset] in the popup interface, then select [Confirm].

            Method 3: Reset from the phone App. Specifically, in the phone App open [Device] - [Factory Reset], then select [Confirm].`
        },
        {
            platform: "ios",
            category: "basic",
            question: "How do I unbind my App from my smartwatch?",
            answer: `
            Follow these steps:

            1. In the phone App, open the [Device] page, scroll to the bottom, select [Unbind Device], then select [Confirm].

            2. Unpair the smartwatch from your phone's Bluetooth. Specifically, on your phone go to [Settings] - [Bluetooth], tap the exclamation mark next to your watch's Bluetooth name in "My Devices", then select [Forget This Device].

            {faq_note}After unbinding the watch device, make sure to manually unpair the smartwatch from your phone's Bluetooth settings, otherwise the watch device may not be discoverable the next time you try to bind it.`
        },
        {
            platform: "all",
            category: "basic",
            question: "How do I end a phone call?",
            answer: `
            When there's an incoming call alert on the watch, press and hold the side button for 3 seconds to end the call.`
        },
        {
            platform: "all",
            category: "basic",
            question: "How do I use the shake to take photo feature?",
            answer: `
            Follow these steps:

            1. In the phone App, open [Device] - [Shake to Take Photo]. If asked to allow "access to phone camera", select [Allow].

            2. Shake your watch device or tap the camera icon on the watch to take a photo.`
        },
        {
            platform: "all",
            category: "basic",
            question: "How do I use the music control feature?",
            answer: `
            When the watch device is successfully connected to your phone, open your phone's music player and play music from the download list. On the device's music interface, press left or right to switch tracks, and press the middle button to pause or play music.

            {faq_note}Some built-in phone music players may not be supported. Compatible players include QQ Music Player, NetEase Cloud Music Player, PLAY Music, etc.`
        },
        {
            platform: "all",
            category: "device",
            question: "What should I do if the watch firmware upgrade fails?",
            answer: `
            If the watch firmware upgrade fails, try the following methods:

            1. Make sure the watch has sufficient battery power, as low battery can cause firmware upgrade failure.

            2. Ensure the watch has a stable connection with the phone, as an unstable connection can cause firmware upgrade failure.

            3. Make sure the watch and phone are on the same network, as network instability can cause firmware upgrade failure.

            4. During the firmware upgrade process, don't disconnect the watch from the phone as this can cause firmware upgrade failure.

            5. During the firmware upgrade process, don't kill the App process as this can cause firmware upgrade failure.

            6. During the firmware upgrade process, don't exit the firmware upgrade interface or turn off the screen as this can cause firmware upgrade failure.

            7. Some watch devices may have a two-minute waiting period after upgrade failure (during which the device shows no response) before reactivating the connection. Please be patient.

            {faq_note}If none of the above methods solve the problem, please try taking photos of your watch's system information and screenshots of your phone's system information, then send them to us through the feedback feature in the App. When contacting us, please provide as much relevant information as possible to help us better solve the problem.`
        },
        {
            platform: "all",
            category: "device",
            question: "Why isn't my device responding after charging for a while?",
            answer: `
            When a watch device hasn't been used for a long time, it enters a low battery state. Please charge it using a phone charger for about half an hour to activate it.

            {faq_note}It's best to charge using a phone charger, as computer USB ports may provide insufficient current, making it difficult to charge when the battery is low.`
        },
        {
            platform: "all",
            category: "device",
            question: "Why doesn't the screen light up when I raise my wrist?",
            answer: `
            Please check the following:

            1. Check if the raise-to-wake feature is turned off in the App, and if the time settings match your needs. After Bluetooth connection, in {app_name}'s [Device] page, enable [Raise to Wake] and set the time period that suits your needs for wrist-raise screen activation.

            2. Check if the device's Do Not Disturb mode is enabled, as the screen won't light up with wrist raises when DND is on.

            3. When you want to check the time, raise your wrist to face yourself.

            {faq_note}If none of the above methods solve the problem, please try taking photos of your watch's system information and screenshots of your phone's system information, then send them to us through the feedback feature in the App. When contacting us, please provide as much relevant information as possible to help us better solve the problem.`
        },
        {
            platform: "all",
            category: "device",
            question: "How many alarms can I set on my watch device?",
            answer: `
            This depends on your watch device model, but typically watch devices can support 5 alarms.`
        },
        {
            platform: "all",
            category: "device",
            question: "How do I adjust the time on my watch device?",
            answer: `
            The watch device automatically syncs time with your phone when connected, so manual adjustment isn't necessary.`
        },
        {
            platform: "all",
            category: "device",
            question: "How do I set the language on my watch device?",
            answer: `
            Typically, the watch device automatically syncs language with your phone when connected, so manual adjustment isn't necessary.

            {faq_note}Some watches support setting language on the watch itself. Specifically, on the watch open [Menu] - [Settings] - [Language], then select your desired language.`
        },
        {
            platform: "all",
            category: "other",
            question: "Why has the battery life become shorter?",
            answer: `
            If features like raise-to-wake and periodic heart rate monitoring are enabled on the watch device, these will increase power consumption and reduce battery life.`
        },
        {
            platform: "all",
            category: "other",
            question: "Is my watch device water-resistant?",
            answer: `
            Regarding device water resistance, please check the manual for your specific device model to confirm if it supports daily water resistance or swimming water resistance. Not suitable for diving, seawater, jumping into water, hot water showers, hot springs, saunas, high-speed water flow, or other water activities or deep water activities. Leather and metal straps are not suitable for swimming. Water resistance is not permanent and protective performance may decrease with daily wear.`
        }

    ]
}; 