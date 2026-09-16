/* ============================================================
   GTEL — Système de traduction (FR / AR / EN)
   ============================================================ */

const translations = {
  fr: {
    "nav.home": "Accueil",
    "nav.solutions": "Solutions",
    "nav.contact": "Nous Contacter",
    "sol.infra": "Infrastructure Digitale",
    "sol.reseau": "Infrastructure Réseau",
    "sol.datacenter": "Datacenter",
    "sol.cyber": "Cybersécurité",
    "sol.video": "Vidéosurveillance",
    "sol.acces": "Contrôle d'Accès",
    "sol.telephonie": "Téléphonie IP",
    "sol.salles": "Salles de Réunion",
    "sol.sono": "Sonorisation",
    "sol.manages": "Services Managés",

    "bc.home": "Accueil",
    "bc.solutions": "Nos Solutions",
    "bc.current": "Contrôle d'Accès & Intrusion",
    "bc.back": "Retour à l'accueil",

    "rail.hero": "Accès",
    "rail.diagnostic": "Diagnostic",
    "rail.zones": "Zones",
    "rail.method": "Méthode",
    "rail.capabilities": "Capacités",
    "rail.faq": "FAQ",

    "hero.badge": "SÉCURITÉ & SÛRETÉ",
    "hero.title": "Qui entre, quand, et avec quelle autorisation ?",
    "hero.desc": "Contrôle d'accès par badge, biométrie ou code, détection d'intrusion périmétrique et volumétrique, intégration avec la vidéosurveillance.",
    "hero.desc_strong": "Une porte qui se ferme à clé n'est pas un système de sécurité — c'est un retardateur.",
    "hero.cta": "Demander une étude d'accès",
    "hero.badge_id": "GTEL // NIVEAU 03",
    "hero.badge_name": "ZONE SÉCURISÉE",
    "hero.badge_status": "ACCÈS AUTORISÉ",

    "diag.eyebrow": "Diagnostic",
    "diag.title": "Symptômes typiques",
    "diag.desc": "Reconnaissez-vous l'une de ces situations ? Elles sont le signe d'une faille de sécurité physique critique.",
    "diag1.problem": "Une clé perdue oblige à changer toutes les serrures",
    "diag1.impact": "Coût immédiat élevé, désorganisation, et délai de plusieurs jours pendant lequel votre site est exposé.",
    "diag2.problem": "Aucune traçabilité des accès en dehors des heures de bureau",
    "diag2.impact": "En cas de vol ou de fuite d'information, l'enquête interne est impossible. Vous ne savez pas qui était présent.",
    "diag3.problem": "Plusieurs niveaux d'autorisation gérés à l'oral",
    "diag3.impact": "« Demande à Untel s'il peut te laisser entrer ». Aucune politique formelle, aucune cohérence, risque opérationnel majeur.",
    "diag4.problem": "L'alarme se déclenche en moyenne 2 fois par mois pour rien",
    "diag4.impact": "Faux positifs liés à un mauvais paramétrage. Vos équipes finissent par ignorer les alertes — et le jour de la vraie intrusion, personne ne réagit.",

    "zones.eyebrow": "Conception structurée",
    "zones.title": "Architecture type",
    "zones.desc": "Un dispositif de sécurité professionnel s'articule toujours autour de ces trois grandes zones de défense.",
    "zone1.tag": "Niveau 01",
    "zone1.title": "Périmètre",
    "zone1.desc": "Détection à la frontière du site : portails motorisés, lecture de plaques pour les véhicules (LAPI), détecteurs d'ouverture sur les portes extérieures, et caméras avec analyse d'intrusion vidéo.",
    "zone2.tag": "Niveau 02",
    "zone2.title": "Volume Intérieur",
    "zone2.desc": "Détecteurs de mouvement dans les zones non occupées hors heures de bureau, capteurs de bris de glace, et systèmes anti-soulèvement installés sur les armoires et équipements sensibles.",
    "zone3.tag": "Niveau 03",
    "zone3.title": "Zones Sensibles",
    "zone3.desc": "Contrôle d'accès renforcé avec double authentification (badge + code, ou biométrie) ciblant spécifiquement les locaux serveurs, les archives confidentielles, les coffres et laboratoires.",

    "method.eyebrow": "Ingénierie",
    "method.title": "Méthodologie de déploiement",
    "method.desc": "Notre approche d'ingénierie garantit un système fiable, adapté à vos flux réels et conforme à vos politiques internes.",
    "step1.title": "Étude d'accès",
    "step1.desc": "Cartographie des zones par niveau de sensibilité, profils utilisateurs (collaborateurs, visiteurs, prestataires), horaires et scénarios d'usage. Base de tous les choix techniques.",
    "step2.title": "Choix technologique",
    "step2.desc": "Badge (économique), code (souple), biométrie (haute sécurité), ou combinaisons. La technologie n'est jamais imposée, elle répond à votre cas d'usage précis.",
    "step3.title": "Déploiement",
    "step3.desc": "Installation des contrôleurs, lecteurs et détecteurs. Définition des groupes d'utilisateurs, des plannings et autorisations. Tests rigoureux en conditions réelles.",
    "step4.title": "Mise en exploitation",
    "step4.desc": "Formation de vos administrateurs, aide à l'enrôlement des collaborateurs, et mise en place des procédures opérationnelles (nouveaux arrivants / départs).",

    "cap.eyebrow": "Le ROI de la sûreté",
    "cap.title": "Périmètre d'intervention",
    "cap.desc": "Le retour sur investissement d'un système de contrôle d'accès est rarement discuté, mais il est le plus rapide de tous les dispositifs de sûreté. Finie la rotation des clés au moindre départ, place à la traçabilité et à la gestion centralisée.",
    "cap1.title": "Contrôle physique & logique",
    "cap1.desc1": "Lecteurs de badges, claviers à code, biométrie (empreinte, reconnaissance faciale), et serrures électroniques de haute sûreté.",
    "cap1.desc2": "Gestion centralisée : définissez qui accède à quelle zone et à quels horaires avec une traçabilité totale des entrées/sorties.",
    "cap2.title": "Détection d'intrusion",
    "cap2.desc1": "Détecteurs périmétriques (porte, fenêtre), volumétriques (mouvement), bris de glace, sirènes intérieures et extérieures.",
    "cap2.desc2": "Centrale connectée : transmission d'alertes instantanée vers vos équipes de sûreté, de télésurveillance ou les forces de l'ordre.",
    "cap3.title": "Intégration & traçabilité",
    "cap3.desc1": "Intégration avec la vidéosurveillance et la téléphonie : déclenchement automatique d'enregistrement et d'appel en cas d'événement.",
    "cap3.desc2": "Lien RH : intégration avec la paie ou la gestion du temps pour le pointage du personnel et l'optimisation de présence.",

    "faq.eyebrow": "Questions des décideurs",
    "faq.title": "FAQ Sécurité & Sûreté",
    "faq1.q": "Badge, code ou biométrie : que choisir ?",
    "faq1.a": "Le badge reste le standard pour 80 % des cas (économique, fiable, gérable à grande échelle). Le code est intéressant en complément (visiteurs, prestataires temporaires). La biométrie se justifie pour les zones critiques (datacenter, coffres, zones de production sensibles) où le risque de prêt de badge est inacceptable. Le bon choix est souvent une combinaison de ces technologies selon les zones.",
    "faq2.q": "La biométrie est-elle légale au Maroc ?",
    "faq2.a": "Oui, sous conditions. La CNDP encadre strictement l'usage de la biométrie : nécessité, proportionnalité, déclaration préalable et durée de conservation. Nous vous accompagnons techniquement dans cette démarche de conformité. Pour la majorité des cas (contrôle d'accès en zone très sensible), c'est parfaitement réalisable.",
    "faq3.q": "Que se passe-t-il en cas de panne du système ?",
    "faq3.a": "Tous les systèmes professionnels intègrent une logique de défaillance sécurisée. Selon le paramétrage et la réglementation incendie, en cas de panne d'alimentation, les portes restent fermées (pour les zones hautement sensibles) ou s'ouvrent (pour les issues de secours). De plus, les contrôleurs de portes disposent d'une mémoire locale et de batteries qui leur permettent de fonctionner en totale autonomie même si le serveur central est indisponible.",

    "cta.title": "Prenez le contrôle de vos accès physiques",
    "cta.desc": "Bénéficiez d'une démonstration immersive de nos solutions logicielles et intégrez un système de détection robuste et évolutif.",
    "cta.button": "Étudier mon contrôle d'accès",

    "footer.desc": "Expert marocain en solutions réseaux, cyber-intelligence et infrastructures de télécommunications intégrées à Casablanca et sur tout le royaume.",
    "footer.nav_title": "Navigation",
    "footer.nav_home": "Accueil",
    "footer.nav_solutions": "Nos Solutions",
    "footer.nav_diag": "Demander un diagnostic",
    "footer.contact_title": "Informations de contact",
    "footer.lang_title": "Langues",
    "footer.legal": "Mentions Légales",
    "footer.privacy": "Politique de Confidentialité",
    "footer.copyright": "© 2025 GTEL. Tous droits réservés. Intégré avec expertise au Maroc.",

    "modal.tag": "Demande d'étude & contact",
    "modal.title": "Demande de devis",
    "modal.desc": "Demandez l'intervention d'un ingénieur GTEL. Traitement sous 24h.",
    "modal.name": "Nom / Entreprise *",
    "modal.phone": "Téléphone *",
    "modal.email": "Email *",
    "modal.service": "Solution ciblée",
    "modal.submit": "Envoyer",
    "toast.success": "Demande envoyée !"
  },

  en: {
    "nav.home": "Home",
    "nav.solutions": "Solutions",
    "nav.contact": "Contact Us",
    "sol.infra": "Digital Infrastructure",
    "sol.reseau": "Network Infrastructure",
    "sol.datacenter": "Datacenter",
    "sol.cyber": "Cybersecurity",
    "sol.video": "Video Surveillance",
    "sol.acces": "Access Control",
    "sol.telephonie": "IP Telephony",
    "sol.salles": "Meeting Rooms",
    "sol.sono": "Sound Systems",
    "sol.manages": "Managed Services",

    "bc.home": "Home",
    "bc.solutions": "Our Solutions",
    "bc.current": "Access Control & Intrusion",
    "bc.back": "Back to home",

    "rail.hero": "Access",
    "rail.diagnostic": "Diagnosis",
    "rail.zones": "Zones",
    "rail.method": "Method",
    "rail.capabilities": "Capabilities",
    "rail.faq": "FAQ",

    "hero.badge": "SECURITY & SAFETY",
    "hero.title": "Who enters, when, and with what authorization?",
    "hero.desc": "Access control by badge, biometrics or code, perimeter and volumetric intrusion detection, integrated with video surveillance.",
    "hero.desc_strong": "A door that simply locks is not a security system — it's a delay tactic.",
    "hero.cta": "Request an access study",
    "hero.badge_id": "GTEL // LEVEL 03",
    "hero.badge_name": "SECURED ZONE",
    "hero.badge_status": "ACCESS GRANTED",

    "diag.eyebrow": "Diagnosis",
    "diag.title": "Typical Warning Signs",
    "diag.desc": "Do any of these situations sound familiar? They signal a critical physical security gap.",
    "diag1.problem": "A single lost key forces you to change every lock",
    "diag1.impact": "High immediate cost, disruption, and a multi-day window during which your site is exposed.",
    "diag2.problem": "No traceability of access outside office hours",
    "diag2.impact": "In case of theft or a data leak, internal investigation becomes impossible. You don't know who was on site.",
    "diag3.problem": "Multiple authorization levels managed verbally",
    "diag3.impact": "\"Ask so-and-so if he can let you in.\" No formal policy, no consistency, major operational risk.",
    "diag4.problem": "The alarm goes off about twice a month for nothing",
    "diag4.impact": "False positives from poor configuration. Your teams end up ignoring alerts — and on the day of a real intrusion, no one reacts.",

    "zones.eyebrow": "Structured design",
    "zones.title": "Reference Architecture",
    "zones.desc": "A professional security setup is always built around these three major defense zones.",
    "zone1.tag": "Level 01",
    "zone1.title": "Perimeter",
    "zone1.desc": "Detection at the site boundary: motorized gates, automatic license plate recognition (ALPR), opening detectors on exterior doors, and cameras with video intrusion analytics.",
    "zone2.tag": "Level 02",
    "zone2.title": "Interior Volume",
    "zone2.desc": "Motion detectors in unoccupied areas outside office hours, glass-break sensors, and anti-lift systems installed on cabinets and sensitive equipment.",
    "zone3.tag": "Level 03",
    "zone3.title": "Sensitive Zones",
    "zone3.desc": "Reinforced access control with two-factor authentication (badge + code, or biometrics) specifically targeting server rooms, confidential archives, safes and labs.",

    "method.eyebrow": "Engineering",
    "method.title": "Deployment Methodology",
    "method.desc": "Our engineering approach guarantees a reliable system, tailored to your real-world flows and compliant with your internal policies.",
    "step1.title": "Access Study",
    "step1.desc": "Mapping of zones by sensitivity level, user profiles (staff, visitors, contractors), schedules and usage scenarios. The foundation for every technical choice.",
    "step2.title": "Technology Selection",
    "step2.desc": "Badge (cost-effective), code (flexible), biometrics (high security), or combinations. Technology is never imposed — it answers your precise use case.",
    "step3.title": "Deployment",
    "step3.desc": "Installation of controllers, readers and detectors. Definition of user groups, schedules and authorizations. Rigorous real-world testing.",
    "step4.title": "Go-Live",
    "step4.desc": "Training your administrators, assistance enrolling staff, and setting up operational procedures (new hires / departures).",

    "cap.eyebrow": "The ROI of safety",
    "cap.title": "Scope of Intervention",
    "cap.desc": "The return on investment of an access control system is rarely discussed, yet it is the fastest of all security measures. No more rekeying every lock at every departure — just centralized, traceable management.",
    "cap1.title": "Physical & Logical Control",
    "cap1.desc1": "Badge readers, code keypads, biometrics (fingerprint, facial recognition), and high-security electronic locks.",
    "cap1.desc2": "Centralized management: define who can access which zone and when, with full entry/exit traceability.",
    "cap2.title": "Intrusion Detection",
    "cap2.desc1": "Perimeter detectors (door, window), volumetric (motion), glass-break, indoor and outdoor sirens.",
    "cap2.desc2": "Connected control panel: instant alert transmission to your security teams, monitoring center, or law enforcement.",
    "cap3.title": "Integration & Traceability",
    "cap3.desc1": "Integration with video surveillance and telephony: automatic recording and call triggering on events.",
    "cap3.desc2": "HR link: integration with payroll or time management for staff clock-in and attendance optimization.",

    "faq.eyebrow": "Questions from decision-makers",
    "faq.title": "Security & Safety FAQ",
    "faq1.q": "Badge, code or biometrics: which to choose?",
    "faq1.a": "The badge remains the standard for 80% of cases (cost-effective, reliable, scalable). The code is a useful add-on (visitors, temporary contractors). Biometrics is justified for critical zones (datacenter, safes, sensitive production areas) where badge-lending risk is unacceptable. The right choice is often a combination of these technologies by zone.",
    "faq2.q": "Is biometrics legal in Morocco?",
    "faq2.a": "Yes, under conditions. The CNDP strictly regulates biometric use: necessity, proportionality, prior declaration and retention period. We provide technical support throughout this compliance process. For most cases (access control in highly sensitive zones), it's entirely feasible.",
    "faq3.q": "What happens if the system fails?",
    "faq3.a": "All professional systems include fail-safe logic. Depending on configuration and fire regulations, in the event of a power failure, doors either stay locked (highly sensitive zones) or unlock (emergency exits). Door controllers also have local memory and batteries, letting them run fully autonomously even if the central server is unavailable.",

    "cta.title": "Take control of your physical access",
    "cta.desc": "Get an immersive demonstration of our software solutions and deploy a robust, scalable detection system.",
    "cta.button": "Assess my access control",

    "footer.desc": "Moroccan expert in network solutions, cyber-intelligence and integrated telecommunications infrastructure in Casablanca and across the kingdom.",
    "footer.nav_title": "Navigation",
    "footer.nav_home": "Home",
    "footer.nav_solutions": "Our Solutions",
    "footer.nav_diag": "Request a diagnosis",
    "footer.contact_title": "Contact Information",
    "footer.lang_title": "Languages",
    "footer.legal": "Legal Notice",
    "footer.privacy": "Privacy Policy",
    "footer.copyright": "© 2025 GTEL. All rights reserved. Integrated with expertise across Morocco.",

    "modal.tag": "Study request & contact",
    "modal.title": "Request a Quote",
    "modal.desc": "Request the intervention of a GTEL engineer. Response within 24h.",
    "modal.name": "Name / Company *",
    "modal.phone": "Phone *",
    "modal.email": "Email *",
    "modal.service": "Target solution",
    "modal.submit": "Send",
    "toast.success": "Request sent!"
  },

  ar: {
    "nav.home": "الرئيسية",
    "nav.solutions": "الحلول",
    "nav.contact": "اتصل بنا",
    "sol.infra": "البنية التحتية الرقمية",
    "sol.reseau": "البنية التحتية للشبكات",
    "sol.datacenter": "مركز البيانات",
    "sol.cyber": "الأمن السيبراني",
    "sol.video": "المراقبة بالفيديو",
    "sol.acces": "مراقبة الدخول",
    "sol.telephonie": "الهاتف عبر IP",
    "sol.salles": "قاعات الاجتماعات",
    "sol.sono": "أنظمة الصوت",
    "sol.manages": "الخدمات المُدارة",

    "bc.home": "الرئيسية",
    "bc.solutions": "حلولنا",
    "bc.current": "مراقبة الدخول والكشف عن التسلل",
    "bc.back": "العودة إلى الرئيسية",

    "rail.hero": "الدخول",
    "rail.diagnostic": "التشخيص",
    "rail.zones": "المناطق",
    "rail.method": "المنهجية",
    "rail.capabilities": "القدرات",
    "rail.faq": "الأسئلة",

    "hero.badge": "الأمن والسلامة",
    "hero.title": "من يدخل، ومتى، وبأي تصريح؟",
    "hero.desc": "مراقبة الدخول عبر البطاقة أو البصمة أو الرمز، والكشف عن التسلل المحيطي والحجمي، مع التكامل مع أنظمة المراقبة بالفيديو.",
    "hero.desc_strong": "الباب الذي يُغلق بمفتاح فقط ليس نظام أمان — إنه مجرد عامل تأخير.",
    "hero.cta": "اطلب دراسة للدخول",
    "hero.badge_id": "GTEL // المستوى 03",
    "hero.badge_name": "منطقة مؤمّنة",
    "hero.badge_status": "الدخول مصرّح به",

    "diag.eyebrow": "التشخيص",
    "diag.title": "الأعراض الشائعة",
    "diag.desc": "هل تتعرف على أي من هذه المواقف؟ إنها علامة على ثغرة أمنية مادية خطيرة.",
    "diag1.problem": "فقدان مفتاح واحد يفرض تغيير جميع الأقفال",
    "diag1.impact": "تكلفة فورية مرتفعة، فوضى تنظيمية، ومهلة عدة أيام يبقى فيها موقعكم مكشوفاً.",
    "diag2.problem": "غياب تام لتتبع الدخول خارج ساعات العمل",
    "diag2.impact": "في حال السرقة أو تسرب معلومات، يصبح التحقيق الداخلي مستحيلاً. لا تعرفون من كان حاضراً.",
    "diag3.problem": "عدة مستويات من التصاريح تُدار شفهياً",
    "diag3.impact": "«اسأل فلاناً إن كان بإمكانه السماح لك بالدخول». لا سياسة رسمية، ولا انسجام، وخطر تشغيلي كبير.",
    "diag4.problem": "ينطلق الإنذار مرتين شهرياً تقريباً دون سبب",
    "diag4.impact": "إنذارات كاذبة بسبب ضبط خاطئ. تنتهي فرقكم بتجاهل التنبيهات — ويوم التسلل الحقيقي، لا يتفاعل أحد.",

    "zones.eyebrow": "تصميم منظّم",
    "zones.title": "البنية المرجعية",
    "zones.desc": "يُبنى أي نظام أمني احترافي دائماً حول هذه المناطق الدفاعية الثلاث الكبرى.",
    "zone1.tag": "المستوى 01",
    "zone1.title": "المحيط",
    "zone1.desc": "الكشف عند حدود الموقع: بوابات آلية، قراءة لوحات السيارات (LAPI)، كاشفات فتح الأبواب الخارجية، وكاميرات بتحليل فيديو للتسلل.",
    "zone2.tag": "المستوى 02",
    "zone2.title": "الحجم الداخلي",
    "zone2.desc": "كاشفات حركة في المناطق غير المشغولة خارج ساعات العمل، مستشعرات كسر الزجاج، وأنظمة مضادة للرفع مثبتة على الخزائن والمعدات الحساسة.",
    "zone3.tag": "المستوى 03",
    "zone3.title": "المناطق الحساسة",
    "zone3.desc": "مراقبة دخول معززة بمصادقة مزدوجة (بطاقة + رمز، أو بصمة) تستهدف تحديداً غرف الخوادم والأرشيف السري والخزائن والمختبرات.",

    "method.eyebrow": "الهندسة",
    "method.title": "منهجية النشر",
    "method.desc": "يضمن نهجنا الهندسي نظاماً موثوقاً، متكيفاً مع تدفقاتكم الفعلية ومتوافقاً مع سياساتكم الداخلية.",
    "step1.title": "دراسة الدخول",
    "step1.desc": "رسم خرائط المناطق حسب مستوى الحساسية، وملفات المستخدمين (موظفون، زوار، مقاولون)، والجداول الزمنية وسيناريوهات الاستخدام. أساس جميع الخيارات التقنية.",
    "step2.title": "اختيار التقنية",
    "step2.desc": "بطاقة (اقتصادية)، رمز (مرن)، بصمة (أمان عالٍ)، أو تركيبات منها. لا تُفرض التقنية أبداً، بل تستجيب لحالة استخدامكم الدقيقة.",
    "step3.title": "النشر",
    "step3.desc": "تركيب وحدات التحكم والقارئات والكاشفات. تحديد مجموعات المستخدمين والجداول والتصاريح. اختبارات دقيقة في ظروف حقيقية.",
    "step4.title": "بدء التشغيل",
    "step4.desc": "تدريب مسؤوليكم، والمساعدة في تسجيل الموظفين، ووضع الإجراءات التشغيلية (الوافدون الجدد / المغادرون).",

    "cap.eyebrow": "عائد الاستثمار الأمني",
    "cap.title": "نطاق التدخل",
    "cap.desc": "نادراً ما يُناقش العائد على الاستثمار في نظام مراقبة الدخول، لكنه الأسرع بين جميع أنظمة السلامة. لا مزيد من تغيير المفاتيح عند كل مغادرة، بل تتبع وإدارة مركزية.",
    "cap1.title": "التحكم المادي والمنطقي",
    "cap1.desc1": "قارئات بطاقات، لوحات رموز، بصمة (أصابع، تعرف على الوجه)، وأقفال إلكترونية عالية الأمان.",
    "cap1.desc2": "إدارة مركزية: حددوا من يصل إلى أي منطقة وفي أي أوقات مع تتبع كامل للدخول والخروج.",
    "cap2.title": "الكشف عن التسلل",
    "cap2.desc1": "كاشفات محيطية (باب، نافذة)، حجمية (حركة)، كسر الزجاج، صفارات إنذار داخلية وخارجية.",
    "cap2.desc2": "مركز متصل: نقل فوري للتنبيهات إلى فرق الأمن أو المراقبة عن بعد أو قوات الأمن.",
    "cap3.title": "التكامل والتتبع",
    "cap3.desc1": "تكامل مع المراقبة بالفيديو والهاتف: تشغيل تلقائي للتسجيل والاتصال عند وقوع حدث.",
    "cap3.desc2": "رابط الموارد البشرية: تكامل مع الرواتب أو إدارة الوقت لتسجيل حضور الموظفين وتحسين الحضور.",

    "faq.eyebrow": "أسئلة صناع القرار",
    "faq.title": "الأسئلة الشائعة حول الأمن والسلامة",
    "faq1.q": "بطاقة، رمز أم بصمة: ماذا تختارون؟",
    "faq1.a": "تبقى البطاقة المعيار في 80٪ من الحالات (اقتصادية، موثوقة، قابلة للإدارة على نطاق واسع). الرمز مفيد كإضافة (زوار، مقاولون مؤقتون). تُبرَّر البصمة للمناطق الحرجة (مركز البيانات، الخزائن، مناطق الإنتاج الحساسة) حيث يكون خطر إعارة البطاقة غير مقبول. الخيار الأمثل غالباً هو مزيج من هذه التقنيات حسب المنطقة.",
    "faq2.q": "هل البصمة قانونية في المغرب؟",
    "faq2.a": "نعم، وفق شروط. تؤطر اللجنة الوطنية لمراقبة حماية المعطيات ذات الطابع الشخصي (CNDP) استخدام البصمة بصرامة: الضرورة، التناسب، التصريح المسبق ومدة الاحتفاظ بالبيانات. نرافقكم تقنياً في مسار الامتثال هذا. بالنسبة لمعظم الحالات (مراقبة الدخول في منطقة شديدة الحساسية)، الأمر قابل للتنفيذ تماماً.",
    "faq3.q": "ماذا يحدث في حال تعطل النظام؟",
    "faq3.a": "تتضمن جميع الأنظمة الاحترافية منطق أمان عند الأعطال. حسب الإعدادات ولوائح الحرائق، في حال انقطاع التيار الكهربائي، تبقى الأبواب مغلقة (للمناطق شديدة الحساسية) أو تُفتح (لمخارج الطوارئ). كما تتوفر وحدات تحكم الأبواب على ذاكرة محلية وبطاريات تتيح لها العمل بشكل مستقل تماماً حتى في حال تعطل الخادم المركزي.",

    "cta.title": "تحكموا في مداخلكم المادية",
    "cta.desc": "استفيدوا من عرض توضيحي غامر لحلولنا البرمجية، واعتمدوا نظام كشف قوي وقابل للتطور.",
    "cta.button": "دراسة نظام مراقبة الدخول لدي",

    "footer.desc": "خبير مغربي في حلول الشبكات، والاستخبارات السيبرانية، والبنى التحتية للاتصالات المتكاملة في الدار البيضاء وعبر المملكة.",
    "footer.nav_title": "التنقل",
    "footer.nav_home": "الرئيسية",
    "footer.nav_solutions": "حلولنا",
    "footer.nav_diag": "طلب تشخيص",
    "footer.contact_title": "معلومات الاتصال",
    "footer.lang_title": "اللغات",
    "footer.legal": "الإشعارات القانونية",
    "footer.privacy": "سياسة الخصوصية",
    "footer.copyright": "© 2025 GTEL. جميع الحقوق محفوظة. مدمجة بخبرة في المغرب.",

    "modal.tag": "طلب دراسة واتصال",
    "modal.title": "طلب عرض سعر",
    "modal.desc": "اطلبوا تدخل مهندس من GTEL. المعالجة خلال 24 ساعة.",
    "modal.name": "الاسم / الشركة *",
    "modal.phone": "الهاتف *",
    "modal.email": "البريد الإلكتروني *",
    "modal.service": "الحل المستهدف",
    "modal.submit": "إرسال",
    "toast.success": "تم إرسال الطلب!"
  }
};

/* ---------- i18n engine ---------- */
function applyTranslations(lang){
  const dict = translations[lang] || translations.fr;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if(dict[key] !== undefined){
      el.textContent = dict[key];
    }
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
    const key = el.getAttribute('data-i18n-placeholder');
    if(dict[key] !== undefined) el.setAttribute('placeholder', dict[key]);
  });
}

function changeLanguage(lang){
  if(!translations[lang]) lang = 'fr';
  localStorage.setItem('gtel-lang', lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';

  applyTranslations(lang);

  const flags = { fr:'🇫🇷', ar:'🇲🇦', en:'🇬🇧' };
  const codes = { fr:'FR', ar:'AR', en:'EN' };
  const flagEl = document.getElementById('current-lang-flag');
  const codeEl = document.getElementById('current-lang-code');
  if(flagEl) flagEl.textContent = flags[lang];
  if(codeEl) codeEl.textContent = codes[lang];

  document.querySelectorAll('.lang-item').forEach(btn=>{
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  document.querySelectorAll('.footer-lang-row button').forEach(btn=>{
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('gtel-lang') || 'fr';
  changeLanguage(saved);
});
