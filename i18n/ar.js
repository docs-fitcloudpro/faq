window.i18nData = window.i18nData || {};
window.i18nData.ar = {
        searchPlaceholder: "البحث عن الأسئلة الشائعة...",
        pageTitle: "الأسئلة الشائعة",
        mainTitle: "الأسئلة الشائعة",
        subtitle: "دليل استكشاف الأخطاء وإصلاحها والأسئلة الشائعة حول استخدام الساعة الذكية",
        footer: {
            copyright: "© 2025 شركة شنتشن توبو للبيانات الضخمة الذكية المحدودة",
        },
        categories: {
            all: "الكل",
            basic: "الاستخدام الأساسي",
            connection: "اتصال البلوتوث",
            notification: "الإشعارات",
            health: "مراقبة الصحة",
            data: "مزامنة البيانات",
            watchface: "إعدادات واجهة الساعة",
            weather: "عرض الطقس",
            device: "إدارة الجهاز",
            other: "أخرى"
        },
        faqData: [
            {
                category: "connection",
                question: "لماذا لا يمكنني العثور على ساعتي؟",
                answer: `
                يرجى التحقق من العناصر التالية:

                1. تحقق من أن الساعة لديها طاقة كافية، إذا كانت الطاقة منخفضة، يرجى شحنها أولاً.

                2. يرجى الحفاظ على الساعة والهاتف في نطاق 0.5 متر.

                3. تحقق مما إذا كانت الساعة متصلة بهاتف آخر، إذا كان الأمر كذلك، يرجى إلغاء ربط الساعة على الهاتف الأصلي وإلغاء اقتران البلوتوث في إعدادات النظام، ثم ربط الساعة.

                4. في إعدادات الهاتف، تأكد من تشغيل وظيفة البلوتوث، على وجه التحديد، افتح [الإعدادات] - [البلوتوث]، ثم تحقق مما إذا كان مفتاح البلوتوث قيد التشغيل.

                5. تأكد من منح إذن البلوتوث للتطبيق الحالي، على وجه التحديد، افتح [الإعدادات] - [التطبيقات] - [{app_name}]، ثم تحقق مما إذا تم منح إذن البلوتوث.

                6. حاول إعادة تشغيل البلوتوث في الهاتف، على وجه التحديد:
                الطريقة الأولى: افتح [الإعدادات] - [البلوتوث]، قم بإيقاف تشغيل البلوتوث ثم تشغيله مرة أخرى.
                الطريقة الثانية: اسحب لأسفل من أعلى شاشة الهاتف للوصول إلى مركز التحكم، ثم انقر على أيقونة البلوتوث لإيقاف تشغيله، ثم انقر مرة أخرى لتشغيله.

                7. إعادة ضبط المصنع للساعة، على وجه التحديد، في الساعة افتح [الإعدادات] - [النظام] - [إعادة ضبط المصنع]، ثم اختر [تأكيد].

                8. أعد تشغيل الساعة والهاتف، ثم حاول الاتصال مرة أخرى.

                {faq_note}إذا لم تتمكن الطرق المذكورة أعلاه من حل المشكلة، يرجى محاولة التقاط صورة لمعلومات نظام الساعة ولقطات شاشة لبعض معلومات نظام الهاتف، وإرسالها إلينا من خلال وظيفة التغذية الراجعة في التطبيق. عند الاتصال بنا، يرجى تقديم أكبر قدر ممكن من المعلومات المفيدة لنا لنتمكن من حل المشكلة بشكل أفضل.`
            },
            {
                category: "connection",
                question: "كيف يمكنني التأكد من أن الساعة متصلة بالهاتف بنجاح؟",
                answer: `
                في تطبيق الهاتف، تظهر حالة الجهاز "متصل".

                في نفس الوقت، في نظام iOS، افتح [الإعدادات] - [البلوتوث]، في قائمة [أجهزتي] يظهر اسم بلوتوث ساعتك، وحالته "متصل"، مع علامة تعجب في دائرة زرقاء.

                انقر على علامة التعجب لرؤية معلومات الجهاز مثل اسم الجهاز، وتأكد من تشغيل جميع المفاتيح مثل [مشاركة إشعارات النظام].`
            },
            {
                category: "connection",
                question: "يتم قطع اتصال البلوتوث بشكل متكرر، كيف يمكن تحسينه؟",
                answer: `
                يمكنك تجربة الطرق التالية:

                1. تأكد من وجود الهاتف والساعة في بيئة قليلة التداخل.

                2. تجنب توصيل الساعة مع أجهزة بلوتوث أخرى في نفس الوقت.

                3. قم بتحديث البرنامج الثابت للساعة وإصدار تطبيق الهاتف.`
            },
            {
                category: "notification",
                question: "لا يمكن للساعة استلام إشعارات الهاتف، ماذا أفعل؟",
                answer: `
                يرجى التحقق من العناصر التالية:

                1. تأكد من اتصال الساعة والهاتف.

                2. تأكد من تفعيل إشعارات الرسائل المناسبة في تطبيق الهاتف، على وجه التحديد، افتح [{app_name}] - [الجهاز] - [إشعارات الرسائل]، ثم تحقق مما إذا تم تفعيل إشعارات الرسائل للتطبيق المعني.

                3. تأكد من اقتران الساعة مع بلوتوث الهاتف وتفعيل مشاركة إشعارات النظام، على وجه التحديد، في الهاتف افتح [الإعدادات] - [البلوتوث]، ثم انقر على علامة التعجب بجانب اسم بلوتوث الساعة في قائمة [أجهزتي]، وتحقق من تفعيل [مشاركة إشعارات النظام].

                4. تأكد من تفعيل أذونات الإشعارات على الهاتف، على وجه التحديد، في الهاتف افتح [الإعدادات] - [الإشعارات]، ثم تحقق من صحة جميع الإعدادات.

                5. تأكد من تثبيت التطبيق المقابل للساعة على الهاتف وتفعيل أذونات الإشعارات، على سبيل المثال WhatsApp، على وجه التحديد، في الهاتف افتح [الإعدادات] - [التطبيقات] - [WhatsApp] - [الإشعارات]، ثم تحقق من تشغيل [السماح بالإشعارات] وصحة إعدادات نوع التنبيه.

                {faq_note}إذا لم تتمكن الطرق المذكورة أعلاه من حل المشكلة، يرجى محاولة التقاط صورة لمعلومات نظام الساعة ولقطات شاشة لبعض معلومات نظام الهاتف، وإرسالها إلينا من خلال وظيفة التغذية الراجعة في التطبيق. عند الاتصال بنا، يرجى تقديم أكبر قدر ممكن من المعلومات المفيدة لنا لنتمكن من حل المشكلة بشكل أفضل.`
            },
            {
                category: "notification",
                question: "الساعة تستلم إشعارات بعض التطبيقات فقط، كيف يمكن حل ذلك؟",
                answer: `
                يرجى التأكد من تفعيل أذونات الإشعارات بشكل منفصل للتطبيقات المطلوبة في إشعارات الرسائل في تطبيق الهاتف، ومزامنتها مع الساعة.

                على وجه التحديد، افتح [{app_name}] - [الجهاز] - [إشعارات الرسائل]، ثم قم بتشغيل إشعارات الرسائل للتطبيق المعني.`
            },
            {
                category: "data",
                question: "كيف يمكنني عرض بيانات التمارين والصحة في تطبيق الهاتف؟",
                answer: `
                عندما تقوم بقياس بيانات التمارين والصحة على الساعة، تقوم الساعة بتسجيل البيانات تلقائياً في الساعة، وعند الاتصال بتطبيق الهاتف، تتم مزامنتها مع تطبيق الهاتف.

                إذا لم تتم المزامنة بعد، يمكنك محاولة السحب لأسفل في الصفحة الرئيسية للتطبيق لمزامنة بيانات التمارين والصحة يدوياً.

                بعد اكتمال المزامنة، يمكنك عرض بيانات معدل ضربات القلب والخطوات والنوم والضغط والأكسجين في الدم ودرجة الحرارة والتمارين وغيرها في التطبيق.`
            },
            {
                category: "health",
                question: "بيانات التمارين والصحة الخاصة بي غير دقيقة، ماذا أفعل؟",
                answer: `
                يرجى التأكد من صحة ملء معلومات ملفك الشخصي، على وجه التحديد، تعتمد خوارزميات قياس بعض وظائف الساعة على معلوماتك الشخصية مثل الجنس والطول والوزن والعمر، يرجى التأكد من دقة هذه المعلومات للحصول على بيانات تمارين وصحة أكثر دقة.`
            },
            {
                category: "data",
                question: "البيانات على الساعة لا تتطابق مع البيانات في التطبيق، ماذا أفعل؟",
                answer: `
                يرجى التحقق من العناصر التالية:

                1. تمت مزامنة البيانات من الساعة إلى التطبيق، إذا لم يتم ذلك، يرجى السحب لأسفل في الصفحة الرئيسية للتطبيق لمزامنة بيانات التمارين والصحة يدوياً، ثم التحقق مما إذا كانت البيانات متطابقة.

                2. تحقق مما إذا كانت الساعة قد اتصلت بهواتف أخرى، وما إذا كانت البيانات قد تمت مزامنتها مع تطبيقات على هواتف أخرى.

                {faq_note}عادةً، لا ننصح بتوصيل نفس الساعة بعدة هواتف أو تطبيقات في نفس الوقت، حيث قد يؤدي ذلك إلى عدم اتساق مزامنة البيانات، وحتى فقدان البيانات. بالإضافة إلى ذلك، لضمان عدم فقدان البيانات، يتم تجميع بيانات اليوم الحالي في التطبيق تراكمياً، بينما يتم مسح بيانات الساعة عند إعادة ربطها، مما قد يؤدي إلى عدم تطابق البيانات على الساعة مع البيانات في التطبيق. على سبيل المثال، إذا قمت بإلغاء ربط الساعة مباشرة بعد توصيلها بتطبيق الهاتف، قد لا تكون البيانات على الساعة قد تمت مزامنتها مع التطبيق بعد (عادةً بسبب حجم البيانات الكبير، تستغرق مزامنة البيانات بعض الوقت)، فسيتم مسح البيانات على الساعة، مما يؤدي إلى فقدان بيانات النوم في التطبيق. لذلك، نوصي في حالة الحاجة إلى إلغاء ربط الساعة، لا تقم بإلغاء الربط مباشرة بعد توصيل الساعة بتطبيق الهاتف، بل انتظر حتى تكتمل مزامنة البيانات من الساعة قبل إلغاء الربط.`
            },
            {
                category: "weather",
                question: "لا يمكن عرض الطقس على الساعة، كيف يمكن حل ذلك؟",
                answer: `
                يرجى التحقق من العناصر التالية:

                1. تأكد من أن الساعة الحالية تدعم وظيفة الطقس، إذا كانت الساعة لا تدعم وظيفة الطقس، فلا يمكن عرض الطقس، على وجه التحديد، تحقق مما إذا كان قائمة الساعة تتضمن [الطقس].

                2. تأكد من تشغيل [خدمات الموقع] على الهاتف، على وجه التحديد، افتح [الإعدادات] - [الخصوصية والأمان] - [خدمات الموقع]، ثم تحقق من تشغيل خدمات الموقع.

                3. تأكد من منح إذن {app_name} لاستخدام خدمات الموقع، على وجه التحديد، افتح [الإعدادات] - [التطبيقات] - [{app_name}] - [الموقع]، ثم تحقق من اختيار [دائماً] أو [أثناء استخدام التطبيق].

                4. تأكد من أن {app_name} يمكنه الوصول إلى الإنترنت بشكل طبيعي، على وجه التحديد، افتح [{app_name}] - [الجهاز] - [إعدادات واجهة الساعة]، تحقق مما إذا كان التطبيق يمكنه الحصول على قائمة واجهات الساعة السحابية بشكل طبيعي، بالطبع يمكنك التأكد من ذلك بوسائل أخرى. إذا لم يكن بإمكانه الوصول إلى الإنترنت بشكل طبيعي، يُنصح بحذف التطبيق، وإعادة تشغيل الهاتف، وإعادة تثبيت التطبيق، تذكر أنه عند فتح التطبيق لأول مرة، تحتاج إلى السماح للتطبيق بالوصول إلى الإنترنت.

                5. تحقق مما إذا كانت وظيفة دفع الطقس مفعلة في تطبيق الهاتف، على وجه التحديد، افتح [{app_name}] - [الجهاز] - [دفع الطقس]، ثم تحقق مما إذا كانت وظيفة دفع الطقس مفعلة.

                6. حاول إيقاف تشغيل مفتاح [دفع الطقس]، ثم أعد تشغيله، وتحقق مما إذا كان يمكن عرض الطقس بشكل طبيعي.

                {faq_note}تعتمد وظيفة الطقس على موقع الهاتف الحالي، وتُستخدم بشكل رئيسي للحصول على معلومات الطقس في موقعك. بالإضافة إلى ذلك، تعتمد وظيفة الطقس أيضاً على الوصول إلى الإنترنت، إذا كان اتصال شبكة الهاتف غير مستقر، أو كانت قدرة التطبيق على الوصول إلى الشبكة محدودة، فلن يكون من الممكن الحصول على معلومات الطقس عبر الإنترنت.<br/>
                إذا لم تتمكن الطرق المذكورة أعلاه من حل المشكلة، يرجى محاولة التقاط صورة لمعلومات نظام الساعة ولقطات شاشة لبعض معلومات نظام الهاتف، وإرسالها إلينا من خلال وظيفة التغذية الراجعة في التطبيق. عند الاتصال بنا، يرجى تقديم أكبر قدر ممكن من المعلومات المفيدة لنا لنتمكن من حل المشكلة بشكل أفضل.`
            },
            {
                category: "weather",
                question: "بيانات الطقس على الساعة غير دقيقة، ماذا أفعل؟",
                answer: `
                تحقق من العناصر التالية:

                1. تحقق مما إذا كان تحديد موقع GPS الهاتف الحالي دقيقاً، إذا كان تحديد موقع GPS الهاتف غير دقيق، فلن تكون بيانات الطقس دقيقة أيضاً، يُنصح بالذهاب إلى مكان مفتوح، وتشغيل GPS الهاتف، ثم التحقق مما إذا كان يمكن الحصول على معلومات الموقع بشكل طبيعي.

                2. تحقق من وقت تحديث الطقس على الساعة، تأكد من أن معلومات الطقس لم تنتهِ صلاحيتها، إذا انتهت صلاحية معلومات الطقس، يرجى محاولة فتح تطبيق الهاتف، والدخول إلى [الجهاز] - [دفع الطقس]، ومحاولة إيقاف تشغيل دفع الطقس، ثم إعادة تشغيله، والتحقق مما إذا كان يمكن عرض الطقس بشكل طبيعي.

                {faq_note}إذا لم تتمكن الطرق المذكورة أعلاه من حل المشكلة، يرجى محاولة التقاط صورة لمعلومات نظام الساعة ولقطات شاشة لبعض معلومات نظام الهاتف، وإرسالها إلينا من خلال وظيفة التغذية الراجعة في التطبيق. عند الاتصال بنا، يرجى تقديم أكبر قدر ممكن من المعلومات المفيدة لنا لنتمكن من حل المشكلة بشكل أفضل.`
            },
            {
                category: "watchface",
                question: "كيف يمكن تحميل واجهة ساعة سحابية إلى الساعة",
                answer: `
                خطوات التشغيل:

                1. في {app_name}، افتح [الجهاز] - [إعدادات واجهة الساعة]، ثم اختر واجهة الساعة التي تعجبك.

                2. انقر على [مزامنة واجهة الساعة] في النافذة المنبثقة.

                3. انتظر بدء تحميل واجهة الساعة، بعد اكتمال التحميل، سيتم تحميل واجهة الساعة تلقائياً إلى جهاز الساعة.

                4. انتظر اكتمال تحميل واجهة الساعة، وستقوم الساعة بتغيير واجهة الساعة تلقائياً.`
            },
            {
                category: "watchface",
                question: "كيف يمكن تخصيص واجهة الساعة وتحميلها إلى الساعة؟",
                answer: `
                خطوات التشغيل:

                1. في {app_name}، افتح [الجهاز] - [إعدادات واجهة الساعة]، ثم انقر على [مدخل تخصيص واجهة الساعة] (يقع في أعلى اليسار الأول، مع رمز زر التحرير في الوسط) للدخول إلى صفحة تخصيص واجهة الساعة.

                2. ثم قم بتعديل خلفية واجهة الساعة، وموقع التاريخ والوقت، ونمط واجهة الساعة وفقاً لتفضيلاتك.

                3. انقر على زر [تعيين كواجهة ساعة].

                4. انتظر إنشاء واجهة الساعة المخصصة، بعد الاكتمال، سيتم تحميل واجهة الساعة تلقائياً إلى جهاز الساعة.

                5. انتظر اكتمال تحميل واجهة الساعة، وستقوم الساعة بتغيير واجهة الساعة تلقائياً.`
            },
            {
                category: "basic",
                question: "كيف يمكن تشغيل وإيقاف تشغيل الساعة الذكية؟",
                answer: `
                خطوات التشغيل:

                1. تشغيل الساعة: اضغط مع الاستمرار على الزر الجانبي للساعة لمدة 3-5 ثوانٍ، حتى تضيء الشاشة. عندما تكون الساعة فارغة من الطاقة، ستعمل تلقائياً بعد الشحن لمدة دقيقة واحدة تقريباً وتدخل إلى الصفحة الرئيسية.

                2. إيقاف تشغيل الساعة: اضغط مع الاستمرار على الزر الجانبي للساعة لمدة 3-5 ثوانٍ، في الواجهة المنبثقة اختر [إيقاف التشغيل]، انقر على [تأكيد]، ستعرض الساعة رسالة "Goodbye"، ثم ستتوقف عن التشغيل تلقائياً.`
            },
            {
                category: "basic",
                question: "كيف يمكن إعادة ضبط المصنع للساعة الذكية؟",
                answer: `
                خطوات التشغيل:

                الطريقة الأولى: إعادة ضبط المصنع على الساعة، على وجه التحديد، في الساعة افتح [الإعدادات] - [النظام] - [إعادة ضبط المصنع]، ثم اختر [تأكيد].

                الطريقة الثانية: إعادة ضبط المصنع على الساعة، على وجه التحديد، اضغط مع الاستمرار على الزر الجانبي للساعة لمدة 3-5 ثوانٍ، في الواجهة المنبثقة اختر [إعادة ضبط المصنع]، ثم اختر [تأكيد].

                الطريقة الثالثة: إعادة ضبط المصنع من تطبيق الهاتف، على وجه التحديد، في تطبيق الهاتف افتح [الجهاز] - [إعادة ضبط المصنع]، ثم اختر [تأكيد].`
            },
            {
                category: "basic",
                question: "كيف يمكن إلغاء ربط التطبيق مع الساعة الذكية؟",
                answer: `
                خطوات التشغيل:

                1. في تطبيق الهاتف، افتح صفحة [الجهاز]، اسحب إلى أسفل الصفحة، ثم اختر [إلغاء ربط الجهاز]، ثم اختر [تأكيد].

                2. إلغاء اقتران البلوتوث بين الساعة الذكية والهاتف، على وجه التحديد، في الهاتف افتح [الإعدادات] - [البلوتوث]، ثم انقر على علامة التعجب بجانب اسم بلوتوث الساعة في قائمة [أجهزتي]، ثم اختر [تجاهل هذا الجهاز].

                {faq_note}بعد إلغاء ربط جهاز الساعة، يجب عليك إلغاء اقتران البلوتوث بين الساعة الذكية والهاتف يدوياً في إعدادات النظام، وإلا فقد لا تتمكن من العثور على جهاز الساعة في المرة القادمة التي تحاول فيها الربط، مما يؤدي إلى عدم إمكانية الربط.`
            },
            {
                category: "basic", 
                question: "كيف يمكن إنهاء المكالمة؟",
                answer: `
                عندما تتلقى تنبيه مكالمة على الساعة، اضغط مع الاستمرار على الزر الجانبي للساعة لمدة 3 ثوانٍ لإنهاء المكالمة.`
            },
            {
                category: "basic",
                question: "كيف يمكن استخدام ميزة التقاط الصور بالهز؟",
                answer: `
                خطوات التشغيل:

                1. في تطبيق الهاتف، افتح [الجهاز] - [التقاط الصور بالهز]، إذا طُلب منك "السماح بالوصول إلى كاميرا الهاتف"، اختر [السماح].

                2. هز جهاز الساعة أو انقر على أيقونة الكاميرا في الساعة لالتقاط الصورة.`
            },
            {
                category: "basic",
                question: "كيف يمكن استخدام وظيفة التحكم في الموسيقى؟",
                answer: `
                عندما تكون الساعة متصلة بنجاح بالهاتف، افتح مشغل الموسيقى في الهاتف وقم بتشغيل الموسيقى من قائمة التنزيلات. في واجهة الموسيقى على الجهاز، اضغط على الأزرار اليمنى واليسرى للتبديل، واضغط على الزر الأوسط لإيقاف أو تشغيل الموسيقى.

                {faq_note}بعض مشغلات الموسيقى الافتراضية في الهواتف غير مدعومة. يمكن دعم مشغل موسيقى QQ، ومشغل موسيقى Netease، وموسيقى PLAY وغيرها.`
            },
            {
                category: "device",
                question: "فشل تحديث البرنامج الثابت للساعة، ماذا أفعل؟",
                answer: `
                إذا فشل تحديث البرنامج الثابت للساعة، يرجى تجربة الطرق التالية:

                1. تأكد من أن بطارية الساعة كافية، فقد يؤدي انخفاض البطارية إلى فشل تحديث البرنامج الثابت.

                2. تأكد من أن اتصال الساعة بالهاتف مستقر، فقد يؤدي عدم استقرار الاتصال إلى فشل التحديث.

                3. تأكد من أن الساعة والهاتف في نفس بيئة الشبكة، فقد يؤدي عدم استقرار الشبكة إلى فشل التحديث.

                4. أثناء عملية التحديث، لا تقطع الاتصال بين الساعة والهاتف، وإلا قد يفشل التحديث.

                5. أثناء عملية التحديث، لا تقم بإغلاق تطبيق الهاتف، وإلا قد يفشل التحديث.

                6. أثناء عملية التحديث، لا تخرج من واجهة التحديث أو تغلق الشاشة، وإلا قد يفشل التحديث.

                7. بعض أجهزة الساعة قد تحتاج إلى انتظار دقيقتين بعد فشل التحديث (لن يكون هناك أي استجابة من الجهاز خلال هذه الفترة) قبل إعادة تنشيط الاتصال، يرجى الانتظار بصبر.

                {faq_note}إذا لم تتمكن الطرق المذكورة أعلاه من حل المشكلة، يرجى التقاط صورة لمعلومات نظام الساعة ولقطة شاشة لبعض معلومات نظام الهاتف، وإرسالها إلينا عبر وظيفة الملاحظات في التطبيق. عند الاتصال بنا، يرجى تقديم أكبر قدر ممكن من المعلومات المفيدة لنا، حتى نتمكن من حل المشكلة بشكل أفضل.`
            },
            {
                category: "device",
                question: "لماذا لا يزال الجهاز لا يستجيب بعد الشحن لفترة من الوقت؟",
                answer: `
                عندما لا يتم استخدام جهاز الساعة لفترة طويلة، سيدخل في حالة البطارية المنخفضة. يرجى الشحن لمدة نصف ساعة تقريباً باستخدام شاحن الهاتف لتنشيطه.

                {faq_note}من الأفضل استخدام شاحن الهاتف للشحن، حيث أن منفذ USB في الكمبيوتر قد يكون تياره منخفضاً جداً، مما يجعل من الصعب الشحن عندما تكون البطارية منخفضة.`
            },
            {
                category: "device",
                question: "لماذا لا تضيء الشاشة عند رفع المعصم؟",
                answer: `
                يرجى التحقق من النقاط التالية:

                1. تحقق مما إذا كانت وظيفة إضاءة الشاشة عند رفع المعصم معطلة في التطبيق، وما إذا كان إعداد الفترة الزمنية مناسباً لاحتياجاتك. بعد اتصال البلوتوث، في صفحة [الجهاز] في {app_name}، قم بتشغيل [إضاءة الشاشة عند رفع المعصم]، واضبط الفترة الزمنية المناسبة لاحتياجاتك.

                2. تحقق مما إذا كان وضع عدم الإزعاج مفعلاً على الجهاز، فعند تفعيله لن تضيء الشاشة عند رفع المعصم.

                3. عند الحاجة لرؤية الوقت، ارفع معصمك وقم بتوجيه الشاشة نحوك.

                {faq_note}إذا لم تتمكن الطرق المذكورة أعلاه من حل المشكلة، يرجى التقاط صورة لمعلومات نظام الساعة ولقطة شاشة لبعض معلومات نظام الهاتف، وإرسالها إلينا عبر وظيفة الملاحظات في التطبيق. عند الاتصال بنا، يرجى تقديم أكبر قدر ممكن من المعلومات المفيدة لنا، حتى نتمكن من حل المشكلة بشكل أفضل.`
            },
            {
                category: "device",
                question: "كم عدد المنبهات التي يمكن ضبطها على الساعة؟",
                answer: `
                يعتمد هذا على طراز ساعتك، ولكن في العادة يمكن ضبط 5 منبهات.`
            },
            {
                category: "device",
                question: "كيف يمكن ضبط الوقت في الساعة؟",
                answer: `
                عندما تتصل الساعة بالهاتف، سيتم مزامنة الوقت تلقائياً، ولا حاجة للضبط اليدوي.`
            },
            {
                category: "device",
                question: "كيف يمكن ضبط لغة الساعة؟",
                answer: `
                عادةً، عندما تتصل الساعة بالهاتف، ستتم مزامنة اللغة تلقائياً، ولا حاجة للضبط اليدوي.

                {faq_note}بعض الساعات تدعم إعداد اللغة مباشرة على الساعة. تحديداً، افتح [القائمة] - [الإعدادات] - [اللغة] على الساعة، ثم اختر اللغة التي تريد ضبطها.`
            },
            {
                category: "other",
                question: "لماذا أصبح وقت استخدام البطارية أقصر؟",
                answer: `
                إذا كانت ميزات مثل إضاءة الشاشة عند رفع المعصم وقياس معدل ضربات القلب الدوري مفعلة على الساعة، فسيزيد ذلك من استهلاك الطاقة ويقلل من وقت استخدام البطارية.`
            },
            {
                category: "other",
                question: "هل الساعة مقاومة للماء؟",
                answer: `
                فيما يتعلق بمقاومة الماء للجهاز، يرجى مراجعة دليل المستخدم الخاص بطراز جهازك للتأكد مما إذا كان يدعم مقاومة الماء في الحياة اليومية أو السباحة. لا يمكن استخدامها للغوص أو مع مياه البحر أو القفز في الماء أو المياه الساخنة أو الساونا أو الأنشطة المائية الأخرى تحت تدفق المياه السريع أو المياه العميقة. الأحزمة الجلدية والمعدنية غير مناسبة للسباحة. خاصية مقاومة الماء ليست دائمة ويمكن أن تنخفض الحماية بسبب التآكل اليومي.`
            }

        ]
}; 