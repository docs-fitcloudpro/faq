window.i18nData = window.i18nData || {};
window.i18nData.ru = {
    searchPlaceholder: "Поиск часто задаваемых вопросов...",
    pageTitle: "Часто задаваемые вопросы",
    mainTitle: "Часто задаваемые вопросы",
    subtitle: "Руководство по устранению неполадок и часто задаваемые вопросы об использовании умных часов",
    footer: {
        copyright: "© 2025 Shenzhen Tuobu Smart Big Data Co., Ltd",
    },
    categories: {
        all: "Все",
        basic: "Основное использование",
        connection: "Bluetooth-соединение",
        notification: "Уведомления",
        health: "Мониторинг здоровья",
        data: "Синхронизация данных", 
        watchface: "Настройки циферблата",
        weather: "Погода",
        device: "Управление устройством",
        other: "Другое"
    },
    faqData: [
        {
            category: "connection",
            question: "Почему я не могу найти свои часы?",
            answer: `
            Пожалуйста, проверьте следующее:

            1. Убедитесь, что часы достаточно заряжены. Если заряд низкий, сначала зарядите их.

            2. Держите часы на расстоянии не более 0.5 метра от телефона.

            3. Проверьте, не подключены ли часы к другому телефону. Если да, сначала отвяжите часы от предыдущего телефона и удалите сопряжение Bluetooth в настройках телефона, затем попробуйте подключить часы снова.

            4. В настройках телефона убедитесь, что Bluetooth включен. Откройте [Настройки] - [Bluetooth] и проверьте, включен ли переключатель Bluetooth.

            5. Убедитесь, что приложению предоставлены разрешения Bluetooth. Откройте [Настройки] - [Приложения] - [{app_name}] и проверьте, предоставлены ли разрешения Bluetooth.

            6. Попробуйте перезапустить Bluetooth на телефоне:
            Способ 1: Откройте [Настройки] - [Bluetooth], выключите и снова включите Bluetooth.
            Способ 2: Проведите пальцем вниз от верхней части экрана телефона для доступа к центру управления, нажмите на значок Bluetooth, чтобы выключить его, затем нажмите снова, чтобы включить.

            7. Сбросьте часы до заводских настроек. На часах откройте [Настройки] - [Система] - [Сброс] и выберите [Подтвердить].

            8. Перезагрузите часы и телефон, затем попробуйте подключиться снова.

            {faq_note}Если вышеуказанные методы не помогли решить проблему, попробуйте сделать фотографию системной информации часов и скриншоты системной информации телефона, отправьте их нам через функцию обратной связи в приложении. При обращении к нам постарайтесь предоставить как можно больше полезной информации, чтобы мы могли лучше решить проблему.`
        },
        {
            category: "connection",
            question: "Как убедиться, что часы успешно подключены к телефону?",
            answer: `
            В мобильном приложении статус устройства должен отображаться как "Подключено".

            Также в iOS откройте [Настройки] - [Bluetooth], в списке "Мои устройства" должно отображаться Bluetooth-имя ваших часов со статусом "Подключено" и синим кружком с восклицательным знаком справа.

            Нажмите на восклицательный знак, чтобы увидеть информацию об устройстве, и убедитесь, что такие переключатели, как "Общие системные уведомления" включены.`
        },
        {
            category: "connection",
            question: "Bluetooth-соединение часто разрывается, как это исправить?",
            answer: `
            Попробуйте следующие способы:

            1. Убедитесь, что телефон и часы находятся в среде с минимальными помехами сигнала.

            2. Избегайте одновременного подключения часов к другим Bluetooth-устройствам.

            3. Обновите прошивку часов и версию мобильного приложения.`
        },
        {
            category: "notification",
            question: "Часы не получают уведомления с телефона, что делать?",
            answer: `
            Пожалуйста, проверьте следующее:

            1. Убедитесь, что часы подключены к телефону.

            2. В мобильном приложении проверьте, что включены соответствующие уведомления. Откройте [{app_name}] - [Устройство] - [Уведомления] и проверьте, включены ли уведомления для нужных приложений.

            3. Убедитесь, что часы сопряжены с телефоном по Bluetooth и включено разрешение на системные уведомления. На телефоне откройте [Настройки] - [Bluetooth], нажмите на восклицательный знак рядом с именем Bluetooth часов и проверьте, включено ли [Общие системные уведомления].

            4. Убедитесь, что на телефоне включены разрешения на уведомления. На телефоне откройте [Настройки] - [Уведомления] и проверьте правильность всех настроек.

            5. На телефоне установлено соответствующее приложение для часов и включены разрешения на уведомления. Например, для WhatsApp откройте [Настройки] - [Приложения] - [WhatsApp] - [Уведомления], убедитесь, что [Разрешить уведомления] включено и проверьте правильность настроек типов уведомлений.

            {faq_note}Если вышеуказанные методы не помогли решить проблему, попробуйте сделать фотографию системной информации часов и скриншоты системной информации телефона, отправьте их нам через функцию обратной связи в приложении. При обращении к нам постарайтесь предоставить как можно больше полезной информации, чтобы мы могли лучше решить проблему.`
        },
        {
            category: "notification",
            question: "Часы получают уведомления только от некоторых приложений, как это исправить?",
            answer: `
            Убедитесь, что в настройках уведомлений мобильного приложения отдельно включены разрешения для нужных приложений и они синхронизированы с часами.

            Конкретно, откройте [{app_name}] - [Устройство] - [Уведомления] и включите уведомления для соответствующих приложений.`
        },
        {
            category: "data",
            question: "Как просмотреть данные о физической активности и здоровье в мобильном приложении?",
            answer: `
            Когда вы измеряете данные о физической активности и здоровье на часах, часы автоматически записывают эти данные. При подключении к мобильному приложению данные синхронизируются с приложением.
            
            Если данные еще не синхронизированы, попробуйте потянуть вниз главный экран приложения для ручной синхронизации данных о физической активности и здоровье.
            
            После завершения синхронизации вы сможете просматривать данные о пульсе, шагах, сне, стрессе, кислороде в крови, температуре тела, физической активности и другие в приложении.`
        },
        {
            category: "health",
            question: "Мои данные о физической активности и здоровье неточные, что делать?",
            answer: `
            Убедитесь, что ваша личная информация заполнена правильно. Конкретно, некоторые алгоритмы измерения функций часов зависят от вашего пола, роста, веса, возраста и другой личной информации. Пожалуйста, убедитесь в точности этих данных для получения более точных данных о физической активности и здоровье.`
        },
        {
            category: "data",
            question: "Данные на часах не совпадают с данными в приложении, что делать?",
            answer: `
            Пожалуйста, проверьте следующее:

            1. Данные с часов синхронизированы с приложением. Если нет, потяните вниз главный экран приложения для ручной синхронизации данных о физической активности и здоровье, затем проверьте, совпадают ли данные.

            2. Проверьте, не подключались ли часы к другим телефонам и не синхронизировались ли данные с приложениями на других телефонах.

            {faq_note}Обычно мы не рекомендуем подключать одни часы к нескольким телефонам или приложениям одновременно, так как это может привести к несогласованности данных или даже их потере. Кроме того, для обеспечения сохранности данных, данные текущего дня в приложении накапливаются, а при повторной привязке часов данные на часах будут обнулены, что может привести к несоответствию данных на часах и в приложении. Например, если вы отвяжете часы сразу после подключения к мобильному приложению, данные с часов могут не успеть синхронизироваться с приложением (обычно синхронизация данных занимает некоторое время из-за большого объема), тогда данные на часах будут очищены, а в приложении могут появиться пропущенные данные о сне. Поэтому мы рекомендуем, если вам действительно нужно отвязать часы, не делать этого сразу после подключения к мобильному приложению, а дождаться завершения синхронизации данных с часов.`
        },
        {
            category: "weather",
            question: "На часах не отображается погода, как это исправить?",
            answer: `
            Пожалуйста, проверьте следующее:

            1. Убедитесь, что ваши часы поддерживают функцию погоды. Если часы не поддерживают функцию погоды, погода не будет отображаться. Конкретно, проверьте, есть ли пункт [Погода] в меню часов.

            2. Убедитесь, что на телефоне включены [Службы определения местоположения]. Откройте [Настройки] - [Конфиденциальность и безопасность] - [Службы определения местоположения] и проверьте, включены ли службы определения местоположения.

            3. Убедитесь, что {app_name} имеет разрешение на использование служб определения местоположения. Откройте [Настройки] - [Приложения] - [{app_name}] - [Местоположение] и проверьте, выбрано ли [Всегда] или [При использовании приложения].

            4. Убедитесь, что {app_name} может нормально получать доступ к интернету. Откройте [{app_name}] - [Устройство] - [Настройки циферблата] и проверьте, может ли приложение нормально получить список облачных циферблатов, хотя вы также можете проверить это другими способами. Если нет доступа к интернету, рекомендуется удалить приложение, перезагрузить телефон, переустановить приложение и при первом запуске разрешить приложению доступ к интернету.

            5. Проверьте в мобильном приложении, включена ли функция отправки погоды. Откройте [{app_name}] - [Устройство] - [Отправка погоды] и проверьте, включена ли функция отправки погоды.

            6. Попробуйте выключить и снова включить переключатель [Отправка погоды], проверьте, отображается ли погода нормально.

            {faq_note}Функция погоды зависит от текущего местоположения телефона, которое используется для получения информации о погоде в вашем местоположении. Кроме того, функция погоды также зависит от доступа к интернету. Если подключение к сети телефона нестабильно или доступ приложения к сети ограничен, невозможно получить информацию о погоде через интернет.<br/>
            Если вышеуказанные методы не помогли решить проблему, попробуйте сделать фотографию системной информации часов и скриншоты системной информации телефона, отправьте их нам через функцию обратной связи в приложении. При обращении к нам постарайтесь предоставить как можно больше полезной информации, чтобы мы могли лучше решить проблему.`
        },
        {
            category: "weather",
            question: "Данные о погоде на часах неточные, что делать?",
            answer: `
            Проверьте следующее:

            1. Точно ли определяется текущее местоположение GPS телефона. Если определение местоположения GPS телефона неточное, данные о погоде также не могут быть точными. Рекомендуется открыть GPS телефона на открытом пространстве и проверить, может ли он нормально получить информацию о местоположении.

            2. Проверьте время обновления погоды на часах, убедитесь, что информация о погоде не устарела. Если информация о погоде устарела, попробуйте открыть мобильное приложение, перейти в [Устройство] - [Отправка погоды], попробуйте выключить отправку погоды и снова включить, проверьте, отображается ли погода нормально.

            {faq_note}Если вышеуказанные методы не помогли решить проблему, попробуйте сделать фотографию системной информации часов и скриншоты системной информации телефона, отправьте их нам через функцию обратной связи в приложении. При обращении к нам постарайтесь предоставить как можно больше полезной информации, чтобы мы могли лучше решить проблему.`
        },
        {
            category: "watchface",
            question: "Как загрузить облачный циферблат на часы",
            answer: `
            Порядок действий:

            1. В {app_name} откройте [Устройство] - [Настройки циферблата] и выберите понравившийся циферблат.

            2. Нажмите [Синхронизировать циферблат] во всплывающем окне.

            3. Дождитесь начала загрузки циферблата, после завершения загрузки циферблат автоматически загрузится на часы.

            4. Дождитесь завершения загрузки циферблата, часы автоматически сменят циферблат.`
        },
        {
            category: "watchface",
            question: "Как настроить пользовательский циферблат и загрузить его на часы?",
            answer: `
            Порядок действий:

            1. В {app_name} откройте [Устройство] - [Настройки циферблата], затем нажмите на [Вход в пользовательский циферблат] (первый в левом верхнем углу, с иконкой редактирования в центре), чтобы войти на страницу настройки пользовательского циферблата.

            2. Затем измените фон циферблата, положение даты и времени, а также стиль циферблата по своему вкусу.

            3. Нажмите кнопку [Установить как циферблат].

            4. Дождитесь создания пользовательского циферблата, после завершения он автоматически загрузится на часы.

            5. Дождитесь завершения загрузки циферблата, часы автоматически сменят циферблат.`
        },
        {
            category: "basic",
            question: "Как включить и выключить умные часы?",
            answer: `
            Порядок действий:

            1. Включение часов: Нажмите и удерживайте боковую кнопку часов 3-5 секунд, пока не загорится экран. Когда часы разряжены, они автоматически включатся и перейдут на главный экран после примерно 1 минуты зарядки.

            2. Выключение часов: Нажмите и удерживайте боковую кнопку часов 3-5 секунд, во всплывающем окне выберите [Выключить], нажмите [Подтвердить], часы покажут сообщение "Goodbye", затем автоматически выключатся.`
        },
        {
            category: "basic",
            question: "Как выполнить сброс умных часов к заводским настройкам?",
            answer: `
            Порядок действий:

            Способ 1: Выполнить сброс к заводским настройкам на часах. Конкретно, на часах откройте [Настройки] - [Система] - [Сброс], затем выберите [Подтвердить].

            Способ 2: Выполнить сброс к заводским настройкам на часах. Конкретно, нажмите и удерживайте боковую кнопку часов 3-5 секунд, во всплывающем окне выберите [Сброс к заводским настройкам], затем выберите [Подтвердить].

            Способ 3: Выполнить сброс к заводским настройкам в мобильном приложении. Конкретно, в мобильном приложении откройте [Устройство] - [Сброс к заводским настройкам], затем выберите [Подтвердить].`
        },
        {
            category: "basic",
            question: "Как отвязать приложение от умных часов?",
            answer: `
            Порядок действий:

            1. В мобильном приложении откройте страницу [Устройство], прокрутите до конца вниз, выберите [Отвязать устройство], затем выберите [Подтвердить].

            2. Отмените сопряжение умных часов с телефоном по Bluetooth. Конкретно, на телефоне откройте [Настройки] - [Bluetooth], затем в списке [Мои устройства] нажмите на восклицательный знак рядом с именем Bluetooth часов, затем выберите [Забыть это устройство].

            {faq_note}После отвязки часов обязательно нужно вручную отменить сопряжение умных часов с телефоном по Bluetooth в системных настройках, иначе при следующей попытке привязки устройство часов может не обнаружиться, что приведет к невозможности привязки.`
        },
        {
            category: "basic",
            question: "Как сбросить звонок?",
            answer: `
            Когда на часах появляется уведомление о входящем звонке, нажмите и удерживайте боковую кнопку часов 3 секунды, чтобы сбросить звонок.`
        },
        {
            category: "basic",
            question: "Как использовать функцию фотосъемки встряхиванием?",
            answer: `
            Порядок действий:

            1. В мобильном приложении откройте [Устройство] - [Фотосъемка встряхиванием], если появится запрос на разрешение "доступа к камере телефона", выберите [Разрешить].

            2. Встряхните часы или нажмите на значок камеры на часах, чтобы сделать снимок.`
        },
        {
            category: "basic",
            question: "Как использовать функцию управления музыкой?",
            answer: `
            Когда часы успешно подключены к телефону, откройте музыкальный плеер на телефоне, включите воспроизведение музыки из списка загрузок, на экране музыки устройства используйте левую и правую кнопки для переключения, нажмите среднюю кнопку для паузы или воспроизведения музыки.

            {faq_note}Некоторые встроенные музыкальные плееры телефонов не поддерживаются, поддерживаются QQ Music, NetEase Cloud Music, PLAY Music и другие`
        },
        {
            category: "device",
            question: "Обновление прошивки часов не удалось, что делать?",
            answer: `
            При неудачном обновлении прошивки часов попробуйте следующие методы:

            1. Убедитесь, что часы достаточно заряжены, низкий заряд может привести к неудачному обновлению прошивки.

            2. Убедитесь, что соединение между часами и телефоном стабильно, нестабильное соединение может привести к неудачному обновлению прошивки.

            3. Убедитесь, что часы и телефон находятся в одной сетевой среде, нестабильная сеть может привести к неудачному обновлению прошивки.

            4. Во время обновления прошивки не отключайте соединение между часами и телефоном, иначе это может привести к неудачному обновлению прошивки.

            5. Во время обновления прошивки не закрывайте процесс приложения, иначе это может привести к неудачному обновлению прошивки.

            6. Во время обновления прошивки не выходите из экрана обновления прошивки и не выключайте экран, иначе это может привести к неудачному обновлению прошивки.

            7. У некоторых часов после неудачного обновления требуется двухминутное ожидание (в течение которого устройство не реагирует), прежде чем соединение будет активировано снова, пожалуйста, подождите терпеливо.

            {faq_note}Если вышеуказанные методы не помогли решить проблему, попробуйте сделать фотографию системной информации часов и скриншоты системной информации телефона, отправьте их нам через функцию обратной связи в приложении. При обращении к нам постарайтесь предоставить как можно больше полезной информации, чтобы мы могли лучше решить проблему.`
        },
        {
            category: "device",
            question: "Устройство не реагирует после зарядки в течение некоторого времени, в чем причина?",
            answer: `
            Когда часы долго не используются, они переходят в состояние низкого заряда, пожалуйста, зарядите их от зарядного устройства телефона около получаса для активации.

            {faq_note}При зарядке лучше использовать зарядное устройство телефона, ток от компьютера слишком мал, при низком заряде может быть трудно зарядить.`
        },
        {
            category: "device",
            question: "Почему экран не включается при поднятии руки?",
            answer: `
            Пожалуйста, проверьте следующее:

            1. Проверьте, не выключена ли функция включения экрана при поднятии запястья в приложении, соответствует ли настройка временного интервала включения экрана при поднятии запястья вашим требованиям. После подключения по Bluetooth, на странице [Устройство] в {app_name}, включите [Включение экрана при повороте запястья] и установите временной интервал, соответствующий вашим требованиям, тогда экран будет включаться при повороте запястья в этот временной интервал.

            2. Проверьте, не включен ли на устройстве режим "Не беспокоить", при включенном режиме "Не беспокоить" экран не будет включаться при поднятии запястья.

            3. Когда нужно посмотреть время, поднимите запястье и поверните экран к себе.

            {faq_note}Если вышеуказанные методы не помогли решить проблему, попробуйте сделать фотографию системной информации часов и скриншоты системной информации телефона, отправьте их нам через функцию обратной связи в приложении. При обращении к нам постарайтесь предоставить как можно больше полезной информации, чтобы мы могли лучше решить проблему.`
        },
        {
            category: "device",
            question: "Сколько будильников можно установить на часах?",
            answer: `
            Это зависит от модели ваших часов, обычно на часах можно установить 5 будильников.`
        },
        {
            category: "device",
            question: "Как настроить время на часах?",
            answer: `
            После подключения часов к телефону время синхронизируется автоматически, ручная настройка не требуется.`
        },
        {
            category: "device",
            question: "Как установить язык на часах?",
            answer: `
            Обычно после подключения часов к телефону язык синхронизируется автоматически, ручная настройка не требуется.

            {faq_note}Некоторые часы поддерживают настройку языка на самих часах, конкретно, на часах откройте [Меню] - [Настройки] - [Язык], затем выберите нужный язык.`
        },
        {
            category: "other",
            question: "Почему сократилось время работы от батареи?",
            answer: `
            Если на часах включены такие функции, как включение экрана при повороте запястья, периодическое измерение пульса и другие, это увеличит потребление энергии и сократит время работы от батареи.`
        },
        {
            category: "other",
            question: "Водонепроницаемы ли часы?",
            answer: `
            Относительно водонепроницаемости устройства, пожалуйста, обратитесь к руководству пользователя соответствующей модели часов, чтобы узнать, поддерживают ли они защиту от брызг или плавание. Не подходит для дайвинга, морской воды, прыжков в воду, горячей воды, купания в горячих источниках, сауны, других водных активностей с сильным потоком воды или глубоководных активностей; кожаные и металлические ремешки не подходят для плавания. Функция водонепроницаемости не является постоянной, защитные свойства могут снижаться из-за ежедневного износа.`
        }

    ]
}; 