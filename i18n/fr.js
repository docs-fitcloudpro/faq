window.i18nData = window.i18nData || {};
window.i18nData.fr = {
    searchPlaceholder: "Rechercher des FAQ...",
    pageTitle: "FAQ",
    mainTitle: "Foire Aux Questions",
    subtitle: "Guide de dépannage et FAQ pour votre montre connectée",
    footer: {
        copyright: "© 2025 Shenzhen Tuobu Smart Big Data Co., Ltd",
    },
    categories: {
        all: "Tout",
        basic: "Utilisation de base",
        connection: "Connexion Bluetooth",
        notification: "Notifications",
        health: "Suivi santé",
        data: "Synchronisation des données",
        watchface: "Cadrans",
        weather: "Météo",
        device: "Gestion de l'appareil", 
        other: "Autres"
    },
    faqData: [
        {
            category: "connection",
            question: "Pourquoi je ne peux pas trouver ma montre ?",
            answer: `
            Veuillez vérifier les points suivants :

            1. Vérifiez que la montre est suffisamment chargée. Si la batterie est faible, rechargez-la d'abord.

            2. Gardez la montre à moins de 50 cm de votre téléphone.

            3. Vérifiez si la montre a déjà été connectée à un autre téléphone. Si c'est le cas, dissociez-la d'abord de l'ancien téléphone et supprimez le jumelage Bluetooth dans les paramètres système avant de la reconnecter.

            4. Dans les paramètres du téléphone, assurez-vous que le Bluetooth est activé : allez dans [Paramètres] - [Bluetooth] et vérifiez que le Bluetooth est bien activé.

            5. Vérifiez que l'application a les autorisations Bluetooth nécessaires : allez dans [Paramètres] - [Applications] - [{app_name}] et vérifiez les autorisations Bluetooth.

            6. Essayez de redémarrer le Bluetooth :
            Méthode 1 : Allez dans [Paramètres] - [Bluetooth], désactivez puis réactivez le Bluetooth.
            Méthode 2 : Faites glisser vers le bas depuis le haut de l'écran pour accéder au centre de contrôle, appuyez sur l'icône Bluetooth pour le désactiver puis le réactiver.

            7. Réinitialisez la montre : sur la montre, allez dans [Paramètres] - [Système] - [Réinitialisation] et confirmez.

            8. Redémarrez la montre et le téléphone, puis réessayez de les connecter.

            {faq_note}Si les solutions ci-dessus ne résolvent pas le problème, prenez une photo des informations système de votre montre et des captures d'écran des informations système de votre téléphone. Envoyez-les via la fonction de feedback de l'application. Fournissez autant d'informations pertinentes que possible pour nous aider à mieux résoudre le problème.`
        },
        {
            category: "connection", 
            question: "Comment savoir si ma montre est bien connectée au téléphone ?",
            answer: `
            Dans l'application mobile, le statut de l'appareil indique "Connecté".

            De plus, sur iOS, allez dans [Paramètres] - [Bluetooth], la montre doit apparaître dans la liste "Mes appareils" avec le statut "Connecté" et un point d'exclamation bleu.

            En appuyant sur le point d'exclamation, vous pouvez voir les informations de l'appareil et vérifier que les options comme "Partager les notifications système" sont activées.`
        },
        {
            category: "connection",
            question: "La connexion Bluetooth se déconnecte souvent, comment l'améliorer ?",
            answer: `
            Essayez les solutions suivantes :

            1. Assurez-vous que le téléphone et la montre sont dans un environnement avec peu d'interférences.

            2. Évitez de connecter la montre à d'autres appareils Bluetooth simultanément.

            3. Mettez à jour le firmware de la montre et la version de l'application mobile.`
        },
        {
            category: "notification",
            question: "Je ne reçois pas les notifications sur ma montre, que faire ?",
            answer: `
            Veuillez vérifier les points suivants :

            1. Vérifiez que la montre est connectée au téléphone.

            2. Dans l'application mobile, confirmez que vous avez activé les notifications correspondantes : ouvrez [{app_name}] - [Appareil] - [Notifications] et vérifiez que les notifications sont activées pour les applications souhaitées.

            3. Vérifiez que la montre est jumelée en Bluetooth et que le partage des notifications système est activé : sur le téléphone, allez dans [Paramètres] - [Bluetooth], appuyez sur le point d'exclamation à côté du nom Bluetooth de la montre et vérifiez que [Partager les notifications système] est activé.

            4. Vérifiez que les autorisations de notification sont activées sur le téléphone : allez dans [Paramètres] - [Notifications] et vérifiez les paramètres.

            5. Vérifiez que l'application correspondante est installée sur le téléphone et que les notifications sont autorisées. Par exemple pour WhatsApp : allez dans [Paramètres] - [Applications] - [WhatsApp] - [Notifications], vérifiez que [Autoriser les notifications] est activé et que les types d'alertes sont correctement configurés.

            {faq_note}Si les solutions ci-dessus ne résolvent pas le problème, prenez une photo des informations système de votre montre et des captures d'écran des informations système de votre téléphone. Envoyez-les via la fonction de feedback de l'application. Fournissez autant d'informations pertinentes que possible pour nous aider à mieux résoudre le problème.`
        },
        {
            category: "notification",
            question: "Je ne reçois que les notifications de certaines applications, comment résoudre ce problème ?",
            answer: `
            Assurez-vous d'activer individuellement les notifications pour chaque application souhaitée dans les paramètres de notification de l'application mobile et synchronisez avec la montre.

            Plus précisément, ouvrez [{app_name}] - [Appareil] - [Notifications] et activez les notifications pour les applications souhaitées.`
        },
        {
            category: "data",
            question: "Comment consulter mes données d'activité et de santé dans l'application mobile ?",
            answer: `
            Lorsque vous effectuez des mesures d'activité et de santé sur votre montre, les données sont automatiquement enregistrées dans la montre et synchronisées avec l'application mobile lors de la connexion.

            Si la synchronisation n'est pas encore effectuée, vous pouvez tirer vers le bas sur la page d'accueil de l'application pour synchroniser manuellement les données.

            Une fois synchronisées, vous pouvez consulter vos données de fréquence cardiaque, pas, sommeil, stress, oxygène sanguin, température, activité physique, etc. dans l'application.`
        },
        {
            category: "health",
            question: "Mes données d'activité et de santé sont imprécises, que faire ?",
            answer: `
            Vérifiez que vos informations personnelles sont correctement renseignées. En effet, certains algorithmes de mesure de la montre dépendent de votre sexe, taille, poids, âge et autres informations personnelles. Assurez-vous de l'exactitude de ces données pour obtenir des mesures plus précises.`
        },
        {
            category: "data",
            question: "Les données de la montre ne correspondent pas à celles de l'application, que faire ?",
            answer: `
            Veuillez vérifier les points suivants :

            1. Vérifiez que les données de la montre sont synchronisées avec l'application. Si non, tirez vers le bas sur la page d'accueil de l'application pour synchroniser manuellement, puis vérifiez si les données correspondent.

            2. Vérifiez si la montre a été connectée à d'autres téléphones et si les données ont été synchronisées avec d'autres applications.

            {faq_note}En général, nous déconseillons de connecter une même montre à plusieurs téléphones ou applications simultanément car cela peut entraîner des incohérences voire des pertes de données. De plus, pour éviter la perte de données, l'application cumule les données du jour, tandis que la montre efface ses données lors d'un nouveau jumelage. Cela peut créer des différences entre les données de la montre et de l'application. Par exemple, si vous dissociez la montre immédiatement après la connexion à l'application, les données n'ont pas le temps d'être synchronisées (la synchronisation prend du temps en raison du volume de données). Les données de la montre sont alors effacées et l'application perd les données de sommeil. Nous vous conseillons donc, si vous devez dissocier la montre, d'attendre la fin de la synchronisation avant de le faire.`
        },
        {
            category: "weather",
            question: "La météo ne s'affiche pas sur ma montre, comment résoudre ce problème ?",
            answer: `
            Veuillez vérifier les points suivants :

            1. Vérifiez que votre montre prend en charge la fonction météo. Si ce n'est pas le cas, la météo ne peut pas s'afficher. Vérifiez si [Météo] est présent dans le menu de la montre.

            2. Vérifiez que les [Services de localisation] sont activés sur votre téléphone : allez dans [Paramètres] - [Confidentialité et sécurité] - [Services de localisation] et vérifiez qu'ils sont activés.

            3. Vérifiez que {app_name} est autorisée à utiliser la localisation : allez dans [Paramètres] - [Applications] - [{app_name}] - [Localisation] et sélectionnez [Toujours] ou [Pendant l'utilisation].

            4. Vérifiez que {app_name} peut accéder à Internet : ouvrez [{app_name}] - [Appareil] - [Cadrans] et vérifiez si l'application peut charger la liste des cadrans en ligne. Vous pouvez aussi le vérifier par d'autres moyens. Si l'accès Internet ne fonctionne pas, désinstallez l'application, redémarrez le téléphone, réinstallez l'application et autorisez l'accès Internet au premier lancement.

            5. Vérifiez que la fonction météo est activée dans l'application : ouvrez [{app_name}] - [Appareil] - [Météo] et vérifiez qu'elle est activée.

            6. Essayez de désactiver puis réactiver la fonction météo pour voir si cela résout le problème.

            {faq_note}La fonction météo dépend de la localisation du téléphone pour obtenir les informations météo de votre position. Elle nécessite aussi un accès Internet. Si la connexion Internet est instable ou si l'accès réseau de l'application est limité, les informations météo ne peuvent pas être récupérées.<br/>
            Si les solutions ci-dessus ne résolvent pas le problème, prenez une photo des informations système de votre montre et des captures d'écran des informations système de votre téléphone. Envoyez-les via la fonction de feedback de l'application. Fournissez autant d'informations pertinentes que possible pour nous aider à mieux résoudre le problème.`
        },
        {
            category: "weather",
            question: "Les données météo sur ma montre sont imprécises, que faire ?",
            answer: `
            Vérifiez les points suivants :

            1. Vérifiez que la localisation GPS du téléphone est précise. Si elle ne l'est pas, les données météo ne peuvent pas être précises. Essayez dans un espace dégagé avec le GPS activé pour voir si la localisation fonctionne correctement.

            2. Vérifiez l'heure de mise à jour de la météo sur la montre pour voir si les informations sont périmées. Si c'est le cas, ouvrez l'application mobile, allez dans [Appareil] - [Météo], désactivez puis réactivez la fonction pour voir si cela actualise correctement la météo.

            {faq_note}Si les solutions ci-dessus ne résolvent pas le problème, prenez une photo des informations système de votre montre et des captures d'écran des informations système de votre téléphone. Envoyez-les via la fonction de feedback de l'application. Fournissez autant d'informations pertinentes que possible pour nous aider à mieux résoudre le problème.`
        },
        {
            category: "watchface",
            question: "Comment transférer un cadran en ligne sur ma montre ?",
            answer: `
            Suivez ces étapes :

            1. Dans {app_name}, ouvrez [Appareil] - [Cadrans] et choisissez le cadran qui vous plaît.

            2. Appuyez sur [Synchroniser] dans la fenêtre qui s'affiche.

            3. Attendez le téléchargement du cadran, il sera ensuite automatiquement transféré sur votre montre.

            4. Attendez la fin du transfert, la montre changera automatiquement de cadran.`
        },
        {
            category: "watchface",
            question: "Comment personnaliser un cadran et le transférer sur ma montre ?",
            answer: `
            Suivez ces étapes :

            1. Dans {app_name}, ouvrez [Appareil] - [Cadrans], puis appuyez sur [Personnaliser] (première option en haut à gauche avec une icône d'édition) pour accéder à la personnalisation.

            2. Modifiez le fond, la position de la date et de l'heure, ainsi que le style du cadran selon vos préférences.

            3. Appuyez sur [Définir comme cadran].

            4. Attendez la génération du cadran personnalisé, il sera ensuite automatiquement transféré sur votre montre.

            5. Attendez la fin du transfert, la montre changera automatiquement de cadran.`
        },
        {
            category: "basic",
            question: "Comment allumer et éteindre la montre connectée ?",
            answer: `
            Suivez ces étapes :

            1. Allumer : Maintenez le bouton latéral enfoncé pendant 3-5 secondes jusqu'à ce que l'écran s'allume. Si la montre est déchargée, elle s'allumera automatiquement après environ 1 minute de charge.

            2. Éteindre : Maintenez le bouton latéral enfoncé pendant 3-5 secondes, sélectionnez [Éteindre] dans le menu qui apparaît et confirmez. La montre affichera "Goodbye" puis s'éteindra.`
        },
        {
            category: "basic",
            question: "Comment réinitialiser la montre connectée ?",
            answer: `
            Suivez l'une de ces méthodes :

            Méthode 1 : Sur la montre, allez dans [Paramètres] - [Système] - [Réinitialisation] et confirmez.

            Méthode 2 : Sur la montre, maintenez le bouton latéral enfoncé pendant 3-5 secondes, sélectionnez [Réinitialisation] et confirmez.

            Méthode 3 : Dans l'application mobile, allez dans [Appareil] - [Réinitialisation] et confirmez.`
        },
        {
            category: "basic",
            question: "Comment dissocier l'application de la montre connectée ?",
            answer: `
            Suivez ces étapes :

            1. Dans l'application mobile, ouvrez la page [Appareil], faites défiler jusqu'en bas et sélectionnez [Dissocier l'appareil], puis confirmez.

            2. Supprimez le jumelage Bluetooth entre la montre et le téléphone : allez dans [Paramètres] - [Bluetooth], appuyez sur le point d'exclamation à côté du nom Bluetooth de la montre et sélectionnez [Oublier cet appareil].

            {faq_note}Après avoir dissocié la montre, pensez à supprimer manuellement le jumelage Bluetooth dans les paramètres système, sinon vous pourriez ne pas retrouver la montre lors de la prochaine tentative de connexion.`
        },
        {
            category: "basic",
            question: "Comment raccrocher un appel ?",
            answer: `
            Lorsque vous recevez une notification d'appel sur la montre, maintenez le bouton latéral enfoncé pendant 3 secondes pour raccrocher.`
        },
        {
            category: "basic",
            question: "Comment utiliser la fonction photo par secousse ?",
            answer: `
            Suivez ces étapes :

            1. Dans l'application mobile, ouvrez [Appareil] - [Photo par secousse]. Si l'application demande l'autorisation d'accéder à l'appareil photo, sélectionnez [Autoriser].

            2. Secouez la montre ou appuyez sur l'icône appareil photo sur la montre pour prendre une photo.`
        },
        {
            category: "basic",
            question: "Comment utiliser le contrôle de la musique ?",
            answer: `
            Lorsque la montre est connectée au téléphone, ouvrez un lecteur de musique sur le téléphone et lancez la lecture. Sur l'interface musique de la montre, utilisez les boutons gauche/droite pour changer de piste et le bouton central pour mettre en pause ou reprendre la lecture.

            {faq_note}Certains lecteurs de musique intégrés ne sont pas compatibles. L'application fonctionne avec QQ Music, NetEase Cloud Music, PLAY Music, etc.`
        },
        {
            category: "device",
            question: "La mise à jour du firmware a échoué, que faire ?",
            answer: `
            En cas d'échec de la mise à jour du firmware, essayez ces solutions :

            1. Vérifiez que la batterie de la montre est suffisamment chargée.

            2. Assurez-vous que la connexion entre la montre et le téléphone est stable.

            3. Vérifiez que la montre et le téléphone sont sur le même réseau.

            4. Ne déconnectez pas la montre du téléphone pendant la mise à jour.

            5. Ne fermez pas l'application pendant la mise à jour.

            6. Ne quittez pas l'écran de mise à jour et n'éteignez pas l'écran pendant la mise à jour.

            7. Certaines montres peuvent nécessiter jusqu'à 2 minutes d'attente (sans réaction) après un échec avant de se reconnecter. Soyez patient.

            {faq_note}Si les solutions ci-dessus ne résolvent pas le problème, prenez une photo des informations système de votre montre et des captures d'écran des informations système de votre téléphone. Envoyez-les via la fonction de feedback de l'application. Fournissez autant d'informations pertinentes que possible pour nous aider à mieux résoudre le problème.`
        },
        {
            category: "device",
            question: "La montre ne réagit pas après un certain temps de charge, quelle en est la cause ?",
            answer: `
            Après une longue période sans utilisation, la montre entre en mode basse consommation. Chargez-la pendant environ 30 minutes avec un chargeur de téléphone pour la réactiver.

            {faq_note}Il est préférable d'utiliser un chargeur de téléphone pour la charge. Le courant USB d'un ordinateur peut être trop faible pour charger efficacement une batterie très faible.`
        },
        {
            category: "device",
            question: "Pourquoi l'écran ne s'allume pas quand je lève le poignet ?",
            answer: `
            Vérifiez les points suivants :

            1. Vérifiez que la fonction d'activation au lever du poignet n'est pas désactivée dans l'application et que les plages horaires correspondent à vos besoins. Une fois connecté en Bluetooth, dans {app_name}, page [Appareil], activez [Lever pour réveiller] et définissez les plages horaires souhaitées.

            2. Vérifiez que le mode Ne pas déranger n'est pas activé sur la montre, car il désactive cette fonction.

            3. Pour voir l'heure, levez le poignet en tournant l'écran vers vous.

            {faq_note}Si les solutions ci-dessus ne résolvent pas le problème, prenez une photo des informations système de votre montre et des captures d'écran des informations système de votre téléphone. Envoyez-les via la fonction de feedback de l'application. Fournissez autant d'informations pertinentes que possible pour nous aider à mieux résoudre le problème.`
        },
        {
            category: "device",
            question: "Combien d'alarmes peut-on régler au maximum sur la montre ?",
            answer: `
            Cela dépend de votre modèle de montre, mais généralement, vous pouvez régler jusqu'à 5 alarmes.`
        },
        {
            category: "device",
            question: "Comment régler l'heure sur la montre ?",
            answer: `
            L'heure se synchronise automatiquement avec celle du téléphone lors de la connexion, aucun réglage manuel n'est nécessaire.`
        },
        {
            category: "device",
            question: "Comment changer la langue de la montre ?",
            answer: `
            Généralement, la langue se synchronise automatiquement avec celle du téléphone lors de la connexion, aucun réglage manuel n'est nécessaire.

            {faq_note}Certains modèles permettent de changer la langue directement sur la montre : allez dans [Menu] - [Paramètres] - [Langue] et sélectionnez la langue souhaitée.`
        },
        {
            category: "other",
            question: "Pourquoi l'autonomie de la batterie a-t-elle diminué ?",
            answer: `
            L'activation de fonctions comme le lever de poignet pour réveiller l'écran ou la mesure continue de la fréquence cardiaque augmente la consommation d'énergie et réduit l'autonomie de la batterie.`
        },
        {
            category: "other",
            question: "La montre est-elle étanche ?",
            answer: `
            Concernant l'étanchéité, consultez le manuel de votre modèle spécifique pour vérifier s'il est résistant aux éclaboussures ou à la natation. Ne convient pas pour la plongée, l'eau de mer, le plongeon, l'eau chaude, les sources thermales, le sauna ou d'autres activités aquatiques à haute pression ou en eau profonde. Les bracelets en cuir et en métal ne conviennent pas pour la natation. L'étanchéité n'est pas permanente et peut diminuer avec l'usure quotidienne.`
        }

    ]
};