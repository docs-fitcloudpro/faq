window.i18nData = window.i18nData || {};
window.i18nData.es = {
    searchPlaceholder: "Buscar preguntas frecuentes...",
    pageTitle: "Preguntas frecuentes",
    mainTitle: "Preguntas frecuentes",
    subtitle: "Guía de solución de problemas y preguntas frecuentes sobre el uso del reloj inteligente",
    footer: {
        copyright: "© 2025 Shenzhen Tuobu Intelligent Big Data Co., Ltd.",
    },
    categories: {
        all: "Todo",
        basic: "Uso básico",
        connection: "Conexión Bluetooth",
        notification: "Notificaciones",
        health: "Monitoreo de salud",
        data: "Sincronización de datos",
        watchface: "Configuración de esfera",
        weather: "Visualización del clima",
        device: "Gestión del dispositivo",
        other: "Otros"
    },
    faqData: [
        {
            category: "connection",
            question: "¿Por qué no puedo encontrar mi reloj?",
            answer: `
            Por favor, verifique lo siguiente:

            1. Compruebe si el reloj tiene suficiente batería. Si está bajo de batería, cárguelo primero.

            2. Mantenga el reloj y el teléfono dentro de un rango de 0.5 metros.

            3. Verifique si el reloj ha sido conectado a otro teléfono. Si es así, primero desvincule el reloj del teléfono original y elimine el emparejamiento Bluetooth en la configuración del sistema del teléfono antes de vincularlo nuevamente.

            4. En la configuración del teléfono, asegúrese de que la función Bluetooth esté activada. Específicamente, vaya a 【Ajustes】 - 【Bluetooth】 y verifique si el interruptor Bluetooth está activado.

            5. Asegúrese de que la aplicación actual tenga permisos Bluetooth. Específicamente, vaya a 【Ajustes】 - 【Aplicaciones】 - 【{app_name}】 y verifique si se han otorgado los permisos Bluetooth.

            6. Intente reiniciar el Bluetooth del teléfono:
            Método 1: Vaya a 【Ajustes】 - 【Bluetooth】, desactive el Bluetooth y luego vuelva a activarlo.
            Método 2: Deslice hacia abajo desde la parte superior de la pantalla del teléfono para acceder al centro de control, luego toque el ícono de Bluetooth para desactivarlo y vuelva a tocarlo para activarlo.

            7. Restaure el reloj a la configuración de fábrica. Específicamente, en el reloj, vaya a 【Ajustes】 - 【Sistema】 - 【Restaurar】 y seleccione 【Confirmar】.

            8. Reinicie tanto el reloj como el teléfono e intente conectar nuevamente.

            {faq_note}Si los métodos anteriores no resuelven el problema, intente tomar una foto de la información del sistema del reloj y capturas de pantalla de la información del sistema del teléfono, y envíenos sus comentarios a través de la función de retroalimentación en la aplicación. Al contactarnos, proporcione tanta información útil como sea posible para ayudarnos a resolver mejor el problema.`
        },
        {
            category: "connection",
            question: "¿Cómo confirmar que el reloj está conectado correctamente al teléfono?",
            answer: `
            En la aplicación móvil, el estado del dispositivo muestra "Conectado".

            Además, en iOS, vaya a 【Ajustes】 - 【Bluetooth】, y en la lista de 【Mis dispositivos】 aparecerá el nombre Bluetooth de su reloj con el estado "Conectado" y un signo de exclamación en un círculo azul.

            Al tocar el signo de exclamación, puede ver información como el nombre del dispositivo, y los interruptores como 【Compartir notificaciones del sistema】 están activados.`
        },
        {
            category: "connection",
            question: "La conexión Bluetooth se desconecta frecuentemente, ¿cómo puedo mejorarla?",
            answer: `
            Puede intentar lo siguiente:

            1. Asegúrese de que el teléfono y el reloj estén en un entorno con poca interferencia de señal.

            2. Evite conectar el reloj con otros dispositivos Bluetooth simultáneamente.

            3. Actualice el firmware del reloj y la versión de la aplicación móvil.`
        },
        {
            category: "notification",
            question: "El reloj no recibe notificaciones del teléfono, ¿qué debo hacer?",
            answer: `
            Por favor, verifique lo siguiente:

            1. Asegúrese de que el reloj y el teléfono estén conectados.

            2. Confirme que ha habilitado las notificaciones correspondientes en la aplicación móvil. Específicamente, abra 【{app_name}】 - 【Dispositivo】 - 【Notificaciones】 y verifique si las notificaciones para las aplicaciones correspondientes están habilitadas.

            3. Confirme que el reloj está emparejado con el Bluetooth del teléfono y que las notificaciones del sistema compartido están activadas. Específicamente, en el teléfono, vaya a 【Ajustes】 - 【Bluetooth】, luego toque el signo de exclamación junto al nombre Bluetooth del reloj en la lista de 【Mis dispositivos】 y verifique si 【Compartir notificaciones del sistema】 está habilitado.

            4. Confirme que los permisos de notificación están habilitados en el teléfono. Específicamente, en el teléfono, vaya a 【Ajustes】 - 【Notificaciones】 y verifique que toda la configuración sea correcta.

            5. La aplicación correspondiente al reloj está instalada en el teléfono y tiene permisos de notificación habilitados. Por ejemplo, para WhatsApp, en el teléfono, vaya a 【Ajustes】 - 【Aplicaciones】 - 【WhatsApp】 - 【Notificaciones】 y verifique que 【Permitir notificaciones】 esté activado y que la configuración del tipo de alerta sea correcta.

            {faq_note}Si los métodos anteriores no resuelven el problema, intente tomar una foto de la información del sistema del reloj y capturas de pantalla de la información del sistema del teléfono, y envíenos sus comentarios a través de la función de retroalimentación en la aplicación. Al contactarnos, proporcione tanta información útil como sea posible para ayudarnos a resolver mejor el problema.`
        },
        {
            category: "notification",
            question: "El reloj solo recibe notificaciones de algunas aplicaciones, ¿cómo puedo solucionarlo?",
            answer: `
            Asegúrese de habilitar individualmente los permisos de notificación para las aplicaciones deseadas en la aplicación móvil y sincronizarlos con el reloj.

            Específicamente, abra 【{app_name}】 - 【Dispositivo】 - 【Notificaciones】 y active las notificaciones para las aplicaciones correspondientes.`
        },
        {
            category: "data",
            question: "¿Cómo puedo ver mis datos de ejercicio y salud en la aplicación móvil?",
            answer: `
            Cuando realiza mediciones de ejercicio y salud en el reloj, este registra automáticamente los datos en el reloj, y cuando se conecta a la aplicación móvil, se sincronizarán con la aplicación.

            Si aún no se han sincronizado, puede intentar deslizar hacia abajo en la página principal de la aplicación para sincronizar manualmente los datos de ejercicio y salud.

            Una vez completada la sincronización, podrá ver datos como frecuencia cardíaca, pasos, sueño, estrés, oxígeno en sangre, temperatura corporal, ejercicio, etc. en la aplicación.`
        },
        {
            category: "health",
            question: "Mis datos de ejercicio y salud no son precisos, ¿qué debo hacer?",
            answer: `
            Por favor, confirme si su información personal está correctamente completada. Específicamente, algunos algoritmos de medición de las funciones del reloj dependen de su género, altura, peso, edad y otra información personal. Asegúrese de la precisión de estos datos para obtener datos de ejercicio y salud más precisos.`
        },
        {
            category: "data",
            question: "Los datos en el reloj no coinciden con los de la aplicación, ¿qué debo hacer?",
            answer: `
            Por favor, verifique lo siguiente:

            1. Los datos del reloj se han sincronizado con la aplicación. Si no, deslice hacia abajo en la página principal de la aplicación para sincronizar manualmente los datos de ejercicio y salud, luego verifique si los datos coinciden.

            2. Verifique si el reloj ha sido conectado a otros teléfonos y si los datos han sido sincronizados con aplicaciones en otros teléfonos.

            {faq_note}Generalmente, no recomendamos conectar el mismo reloj a múltiples teléfonos o aplicaciones simultáneamente, ya que esto puede causar inconsistencias en la sincronización de datos e incluso pérdida de datos. Además, para garantizar que no se pierdan datos, los datos del día en la aplicación se acumulan, mientras que los datos en el reloj se borran después de una nueva vinculación, lo que puede causar inconsistencias entre los datos del reloj y la aplicación. Por ejemplo, con los datos de sueño, si desvincula el reloj inmediatamente después de conectarlo a la aplicación móvil, los datos del reloj pueden no haber tenido tiempo de sincronizarse con la aplicación (la sincronización generalmente requiere tiempo debido al gran volumen de datos), entonces los datos del reloj se borrarán y los datos de sueño en la aplicación se perderán. Por lo tanto, recomendamos que cuando necesite desvincular el reloj, no lo haga inmediatamente después de conectarlo a la aplicación móvil, sino que espere hasta que los datos del reloj se hayan sincronizado completamente.`
        },
        {
            category: "weather",
            question: "El reloj no muestra el clima, ¿cómo puedo solucionarlo?",
            answer: `
            Por favor, verifique lo siguiente:

            1. Confirme que su reloj actual admite la función de clima. Si el reloj no admite la función de clima, no podrá mostrar el clima. Específicamente, verifique si 【Clima】 está incluido en los elementos del menú del reloj.

            2. Confirme que los 【Servicios de ubicación】 del teléfono están activados. Específicamente, vaya a 【Ajustes】 - 【Privacidad y seguridad】 - 【Servicios de ubicación】 y verifique si los servicios de ubicación están activados.

            3. Confirme que {app_name} tiene autorización para usar los servicios de ubicación. Específicamente, vaya a 【Ajustes】 - 【Aplicaciones】 - 【{app_name}】 - 【Ubicación】 y verifique si está seleccionado 【Siempre】 o 【Mientras se usa la aplicación】.

            4. Confirme que {app_name} puede acceder normalmente a Internet. Específicamente, abra 【{app_name}】 - 【Dispositivo】 - 【Esferas】 y verifique si la aplicación puede obtener normalmente la lista de esferas en la nube, aunque también puede verificar esto por otros medios. Si no puede acceder normalmente a Internet, se recomienda eliminar la aplicación, reiniciar el teléfono, reinstalar la aplicación y recordar permitir que la aplicación acceda a Internet cuando la abra por primera vez.

            5. Verifique si la función de envío del clima está activada en la aplicación móvil. Específicamente, abra 【{app_name}】 - 【Dispositivo】 - 【Envío del clima】 y verifique si la función está activada.

            6. Intente desactivar el interruptor de 【Envío del clima】 y vuelva a activarlo para ver si el clima se muestra normalmente.

            {faq_note}La función de clima depende de la ubicación actual del teléfono, principalmente para obtener información del clima de su ubicación. Además, la función de clima también depende del acceso a Internet. Si la conexión de red del teléfono es inestable o la capacidad de acceso a la red de la aplicación está limitada, no podrá obtener información del clima a través de Internet.<br/>
            Si los métodos anteriores no resuelven el problema, intente tomar una foto de la información del sistema del reloj y capturas de pantalla de la información del sistema del teléfono, y envíenos sus comentarios a través de la función de retroalimentación en la aplicación. Al contactarnos, proporcione tanta información útil como sea posible para ayudarnos a resolver mejor el problema.`
        },
        {
            category: "weather",
            question: "Los datos del clima en el reloj no son precisos, ¿qué debo hacer?",
            answer: `
            Verifique lo siguiente:

            1. Verifique si la ubicación GPS del teléfono es precisa. Si la ubicación GPS del teléfono no es precisa, los datos del clima tampoco pueden ser precisos. Se recomienda abrir el GPS del teléfono en un espacio abierto y verificar si puede obtener normalmente la información de ubicación.

            2. Verifique la hora de actualización del clima en el reloj para confirmar si la información del clima ha expirado. Si la información del clima ha expirado, intente abrir la aplicación móvil, vaya a 【Dispositivo】 - 【Envío del clima】, intente desactivar el envío del clima y vuelva a activarlo para ver si el clima se muestra normalmente.

            {faq_note}Si los métodos anteriores no resuelven el problema, intente tomar una foto de la información del sistema del reloj y capturas de pantalla de la información del sistema del teléfono, y envíenos sus comentarios a través de la función de retroalimentación en la aplicación. Al contactarnos, proporcione tanta información útil como sea posible para ayudarnos a resolver mejor el problema.`
        },
        {
            category: "watchface",
            question: "¿Cómo cargar una esfera de la nube al reloj?",
            answer: `
            Pasos de operación:

            1. En {app_name}, abra 【Dispositivo】 - 【Esferas】 y seleccione la esfera que le guste.

            2. Toque 【Sincronizar esfera】 en la ventana emergente.

            3. Espere a que comience la descarga de la esfera. Una vez completada la descarga, la esfera se cargará automáticamente al reloj.

            4. Espere a que se complete la carga de la esfera, el reloj cambiará automáticamente la esfera.`
        },
        {
            category: "watchface",
            question: "¿Cómo personalizar una esfera y cargarla al reloj?",
            answer: `
            Pasos de operación:

            1. En {app_name}, abra 【Dispositivo】 - 【Esferas】, luego toque la 【Entrada de personalización de esfera】 (la primera en la esquina superior izquierda, con un icono de edición en el centro) para entrar en la página de personalización de esfera.

            2. Luego, según sus preferencias, modifique el fondo de la esfera, la posición de la fecha y hora, y el estilo de la esfera.

            3. Toque el botón 【Establecer como esfera】.

            4. Espere a que se genere la esfera personalizada. Una vez generada, se cargará automáticamente al reloj.

            5. Espere a que se complete la carga de la esfera, el reloj cambiará automáticamente la esfera.`
        },
        {
            category: "basic",
            question: "¿Cómo encender y apagar el reloj inteligente?",
            answer: `
            Pasos de operación:

            1. Encender el reloj: Mantenga presionado el botón lateral del reloj durante 3-5 segundos hasta que la pantalla se ilumine. Cuando el reloj se queda sin batería, se encenderá automáticamente y entrará en la página principal después de cargar durante aproximadamente 1 minuto.

            2. Apagar el reloj: Mantenga presionado el botón lateral del reloj durante 3-5 segundos, seleccione 【Apagar】 en la interfaz emergente, toque 【Confirmar】, el reloj mostrará el mensaje "Goodbye" y luego se apagará automáticamente.`
        },
        {
            category: "basic",
            question: "¿Cómo restaurar el reloj inteligente a la configuración de fábrica?",
            answer: `
            Pasos de operación:

            Método 1: Restaurar desde el reloj. Específicamente, en el reloj, vaya a 【Ajustes】 - 【Sistema】 - 【Restaurar】 y seleccione 【Confirmar】.

            Método 2: Restaurar desde el reloj. Específicamente, mantenga presionado el botón lateral del reloj durante 3-5 segundos, seleccione 【Restaurar】 en la interfaz emergente y luego seleccione 【Confirmar】.

            Método 3: Restaurar desde la aplicación móvil. Específicamente, en la aplicación móvil, vaya a 【Dispositivo】 - 【Restaurar configuración de fábrica】 y seleccione 【Confirmar】.`
        },
        {
            category: "basic",
            question: "¿Cómo desvincular la aplicación del reloj inteligente?",
            answer: `
            Pasos de operación:

            1. En la aplicación móvil, abra la página 【Dispositivo】, desplácese hasta el final y seleccione 【Desvincular dispositivo】, luego seleccione 【Confirmar】.

            2. Cancele el emparejamiento Bluetooth entre el reloj inteligente y el teléfono. Específicamente, en el teléfono, vaya a 【Ajustes】 - 【Bluetooth】, luego toque el signo de exclamación junto al nombre Bluetooth del reloj en la lista de 【Mis dispositivos】 y seleccione 【Olvidar este dispositivo】.

            {faq_note}Después de desvincular el reloj, asegúrese de cancelar manualmente el emparejamiento Bluetooth entre el reloj inteligente y el teléfono en la configuración del sistema, de lo contrario, la próxima vez que intente vincular, es posible que no pueda encontrar el reloj, lo que resultará en la imposibilidad de vincularlo.`
        },
        {
            category: "basic",
            question: "¿Cómo colgar una llamada?",
            answer: `
            Cuando hay una llamada entrante en el reloj, mantenga presionado el botón lateral del reloj durante 3 segundos para colgar la llamada.`
        },
        {
            category: "basic",
            question: "¿Cómo usar la función de agitar para tomar fotos?",
            answer: `
            Pasos de operación:

            1. En la aplicación móvil, abra 【Dispositivo】 - 【Agitar para tomar fotos】. Si se le pregunta si permite "acceder a la cámara del teléfono", seleccione 【Permitir】.

            2. Agite el reloj o toque el icono de la cámara en el reloj para tomar una foto.`
        },
        {
            category: "basic",
            question: "¿Cómo usar la función de control de música?",
            answer: `
            Cuando el reloj está conectado exitosamente al teléfono, abra el reproductor de música del teléfono, reproduzca música de la lista de descargas, en la interfaz de música del dispositivo presione los botones izquierdo y derecho para cambiar, presione el botón del medio para pausar o reproducir música.

            {faq_note}Algunos reproductores de música incorporados en los teléfonos no son compatibles, pero puede funcionar con reproductores como QQ Music, NetEase Cloud Music, PLAY Music, etc.`
        },
        {
            category: "device",
            question: "La actualización del firmware del reloj falló, ¿qué debo hacer?",
            answer: `
            Si la actualización del firmware del reloj falla, intente los siguientes métodos:

            1. Asegúrese de que el reloj tenga suficiente batería, la batería baja puede causar que la actualización del firmware falle.

            2. Asegúrese de que la conexión entre el reloj y el teléfono sea estable, una conexión inestable puede causar que la actualización del firmware falle.

            3. Asegúrese de que el reloj y el teléfono estén en el mismo entorno de red, una red inestable puede causar que la actualización del firmware falle.

            4. Durante el proceso de actualización del firmware, no desconecte el reloj del teléfono, ya que esto puede causar que la actualización del firmware falle.

            5. Durante el proceso de actualización del firmware, no cierre el proceso de la aplicación, ya que esto puede causar que la actualización del firmware falle.

            6. Durante el proceso de actualización del firmware, no salga de la interfaz de actualización del firmware ni apague la pantalla, ya que esto puede causar que la actualización del firmware falle.

            7. Algunos relojes pueden tener un tiempo de espera de dos minutos después de una actualización fallida (durante el cual el dispositivo no muestra ninguna respuesta) antes de reactivar la conexión, por favor sea paciente.

            {faq_note}Si los métodos anteriores no resuelven el problema, intente tomar una foto de la información del sistema del reloj y capturas de pantalla de la información del sistema del teléfono, y envíenos sus comentarios a través de la función de retroalimentación en la aplicación. Al contactarnos, proporcione tanta información útil como sea posible para ayudarnos a resolver mejor el problema.`
        },
        {
            category: "device",
            question: "El dispositivo no responde después de cargar durante un tiempo, ¿cuál es la razón?",
            answer: `
            Cuando el reloj no se ha usado durante mucho tiempo, entrará en un estado de batería baja. Por favor, use un cargador de teléfono para cargar durante aproximadamente media hora para activarlo.

            {faq_note}Al cargar, es mejor usar un cargador de teléfono. La corriente del computador es demasiado baja y puede ser difícil cargar cuando la batería está baja.`
        },
        {
            category: "device",
            question: "¿Por qué la pantalla no se enciende al levantar la muñeca?",
            answer: `
            Por favor, verifique lo siguiente:

            1. Verifique si la función de encendido de pantalla al levantar la muñeca está desactivada en la aplicación y si la configuración del período de tiempo coincide con sus necesidades. Después de la conexión Bluetooth, en la página 【Dispositivo】 de {app_name}, active 【Encender pantalla al girar la muñeca】 y configure el período de tiempo que se ajuste a sus necesidades para que la pantalla se encienda al girar la muñeca durante ese período.

            2. Verifique si el dispositivo tiene activado el modo No molestar, ya que la pantalla no se encenderá al levantar la muñeca cuando el dispositivo está en modo No molestar.

            3. Cuando necesite ver la hora, levante la muñeca con la pantalla hacia usted.

            {faq_note}Si los métodos anteriores no resuelven el problema, intente tomar una foto de la información del sistema del reloj y capturas de pantalla de la información del sistema del teléfono, y envíenos sus comentarios a través de la función de retroalimentación en la aplicación. Al contactarnos, proporcione tanta información útil como sea posible para ayudarnos a resolver mejor el problema.`
        },
        {
            category: "device",
            question: "¿Cuántas alarmas se pueden configurar en el reloj?",
            answer: `
            Esto depende de su modelo de reloj, generalmente, el reloj puede configurar 5 alarmas.`
        },
        {
            category: "device",
            question: "¿Cómo ajustar la hora en el reloj?",
            answer: `
            El reloj sincronizará automáticamente la hora cuando se conecte al teléfono, no es necesario ajustarla manualmente.`
        },
        {
            category: "device",
            question: "¿Cómo configurar el idioma del reloj?",
            answer: `
            Generalmente, el reloj sincronizará automáticamente el idioma cuando se conecte al teléfono, no es necesario ajustarlo manualmente.

            {faq_note}Algunos relojes admiten la configuración del idioma en el reloj. Específicamente, en el reloj, vaya a 【Menú】 - 【Ajustes】 - 【Idioma】 y seleccione el idioma que desea configurar.`
        },
        {
            category: "other",
            question: "¿Por qué se ha reducido el tiempo de uso de la batería?",
            answer: `
            Si el reloj tiene activadas funciones como encendido de pantalla al levantar la muñeca, monitoreo de frecuencia cardíaca programado, etc., aumentará el consumo de batería y reducirá el tiempo de uso de la batería.`
        },
        {
            category: "other",
            question: "¿El reloj es resistente al agua?",
            answer: `
            Con respecto a la resistencia al agua del dispositivo, consulte el manual del modelo específico que compró para confirmar si es resistente al agua para uso diario o para nadar. No es adecuado para buceo, agua de mar, saltos al agua, agua caliente, aguas termales, sauna, otros deportes acuáticos o actividades en aguas profundas con flujo de agua a alta velocidad; las correas de cuero y metal no son adecuadas para nadar. La función de resistencia al agua no es permanente, y el rendimiento de protección puede disminuir debido al desgaste diario.`
        }

    ]
}; 