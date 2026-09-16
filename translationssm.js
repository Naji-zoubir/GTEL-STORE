/* ============================================================
   GTEL — SERVICES MANAGÉS — TRADUCTIONS
   fr / ar / en — persistées dans localStorage, RTL auto pour l'arabe
   ============================================================ */

const TRANSLATIONS = {
  fr: {
    "nav.home": "Accueil",
    "nav.solutions": "Solutions",
    "nav.contact": "Nous Contacter",
    "nav.sub.infra_digitale": "Infrastructure Digitale",
    "nav.sub.infra_reseau": "Infrastructure Réseau",
    "nav.sub.datacenter": "Datacenter",
    "nav.sub.cyber": "Cybersécurité",
    "nav.sub.video": "Vidéosurveillance",
    "nav.sub.controle": "Contrôle d'Accès",
    "nav.sub.telephonie": "Téléphonie IP",
    "nav.sub.salles": "Salles de Réunion",
    "nav.sub.sono": "Sonorisation",
    "nav.sub.services": "Services Managés",

    "breadcrumb.home": "Accueil",
    "breadcrumb.solutions": "Nos Solutions",
    "breadcrumb.current": "Services Managés",
    "breadcrumb.back": "Retour à l'accueil",

    "hero.badge": "Services Managés & MSP",
    "hero.title": "Votre infrastructure exige une discipline d'exploitation. Pas une intervention occasionnelle.",
    "hero.desc": "Audit périodique, maintenance préventive, supervision proactive et accompagnement à l'évolution. Nos services managés transforment vos infrastructures en actifs maîtrisés, et non en sujets d'inquiétude récurrents.",
    "hero.cta": "Demander un contrat de services",

    "s1.eyebrow": "Changement de paradigme",
    "s1.title": "Pourquoi un contrat plutôt qu'un appel à la panne",
    "s1.desc": "Le modèle « j'appelle quand ça casse » est encore très répandu, mais il fragilise votre entreprise. Il présente trois défauts majeurs :",
    "s1.item1.tag": "Défaut 01",
    "s1.item1.title": "Maximise le coût total",
    "s1.item1.desc": "Intervention en urgence, taux horaire majoré, et indisponibilité prolongée qui paralyse la production de vos collaborateurs.",
    "s1.item2.tag": "Défaut 02",
    "s1.item2.title": "Maximise le risque",
    "s1.item2.desc": "Les pannes deviennent visibles beaucoup trop tardivement, lorsque les dégâts matériels ou les pertes de données se sont déjà aggravés.",
    "s1.item3.tag": "Défaut 03",
    "s1.item3.title": "Bloque toute évolution",
    "s1.item3.desc": "Votre infrastructure dérive lentement avec le temps. L'absence de suivi continu signifie que personne ne tient les standards de sécurité ou de performance à jour.",
    "s1.callout": "Un contrat de services managés inverse cette logique : vous payez un coût fixe et prévisible, en échange d'une garantie absolue de performance et de réactivité.",

    "s2.eyebrow": "Abonnements de services",
    "s2.title": "Notre offre, en 3 niveaux",
    "s2.desc": "Choisissez le degré d'intervention qui correspond à la criticité de votre entreprise.",
    "s2.th.service": "Prestation",
    "s2.th.essentiel": "Essentiel",
    "s2.th.avance": "Avancé",
    "s2.th.premium": "Premium",
    "s2.row1.label": "Maintenance préventive",
    "s2.row1.essentiel": "1 visite / an",
    "s2.row1.avance": "2 visites / an",
    "s2.row1.premium": "4 visites / an",
    "s2.row2.label": "Délai d'intervention",
    "s2.row2.essentiel": "J+2 ouvrés",
    "s2.row2.avance": "J+1 ouvré",
    "s2.row2.premium": "4 heures (24/7)",
    "s2.row3.label": "Supervision à distance",
    "s2.row3.essentiel": "—",
    "s2.row3.avance": "Heures ouvrées",
    "s2.row3.premium": "24/7 + alerting",
    "s2.row4.label": "Reporting",
    "s2.row4.essentiel": "Annuel",
    "s2.row4.avance": "Trimestriel",
    "s2.row4.premium": "Mensuel",
    "s2.row5.label": "Comité de pilotage",
    "s2.row5.essentiel": "—",
    "s2.row5.avance": "Annuel",
    "s2.row5.premium": "Trimestriel",
    "s2.note": "La grille tarifaire détaillée est établie sur la base d'un audit préalable du périmètre couvert. Le coût d'un contrat dépend du nombre de sites, de la complexité de l'infrastructure et du niveau de criticité. Aucune offre standard ne peut sérieusement chiffrer ces paramètres en aveugle.",

    "s3.eyebrow": "Couverture technologique",
    "s3.title": "Périmètre transverse",
    "s3.desc": "Les services managés GTEL s'appliquent à l'ensemble de notre offre, garantissant une cohérence technologique totale sur tous vos systèmes.",
    "s3.item1.title": "Infrastructure réseau",
    "s3.item1.desc": "Supervision des switches, routeurs, points d'accès, et alertes proactives en cas de saturation ou de panne.",
    "s3.item2.title": "Datacenter",
    "s3.item2.desc": "Supervision environnementale, gestion de la santé des serveurs et onduleurs, suivi strict de la climatisation.",
    "s3.item3.title": "Cybersécurité",
    "s3.item3.desc": "Veille continue sur les vulnérabilités, application des correctifs critiques et revue périodique des configurations des firewalls.",
    "s3.item4.title": "Vidéosurveillance & Accès",
    "s3.item4.desc": "Supervision de l'état en ligne des caméras et lecteurs, vérification de la rétention vidéo et audit de configuration des accès.",
    "s3.item5.title": "Téléphonie & coms",
    "s3.item5.desc": "Surveillance du PBX, gestion des évolutions du SVI (serveur vocal), et optimisation continue de vos coûts de communication.",
    "s3.item6.title": "Salles de réunion",
    "s3.item6.desc": "Vérification de l'état des équipements de visio, mises à jour logicielles, intervention proactive avant impact sur vos réunions.",

    "s4.title": "Notre engagement",
    "s4.desc": "La maintenance n'est pas une boîte noire — c'est un dialogue transparent basé sur des faits.",
    "s4.item1.title": "SLA contractuels",
    "s4.item1.desc": "Délai de prise en compte, délai de résolution, taux de disponibilité. Nos engagements sont écrits, mesurés et reportés. Pas d'engagement, pas de reporting : pas de service managé.",
    "s4.item2.title": "Documentation maintenue",
    "s4.item2.desc": "Toute évolution de l'infrastructure est documentée. À tout moment, vous (ou un autre intégrateur) pouvez reprendre la main avec un dossier à jour. C'est notre éthique professionnelle.",
    "s4.item3.title": "Comité de pilotage",
    "s4.item3.desc": "Selon le niveau de service, nous tenons un point périodique structuré : présentation des indicateurs de performance, historique des incidents, et recommandations d'évolution.",

    "s5.eyebrow": "Questions des décideurs",
    "s5.title": "FAQ Services Managés",
    "faq1.q": "Que se passe-t-il si vous n'êtes pas joignables le jour d'un incident critique ?",
    "faq1.a": "Pour les contrats Premium, nous engageons un délai de 4 heures 24/7 avec une astreinte joignable par téléphone et email, supervisée. En cas de défaut, des pénalités contractuelles s'appliquent. C'est ce qui distingue un véritable contrat de services d'un simple engagement commercial.",
    "faq2.q": "Devons-nous prendre un contrat sur tout, ou peut-on en limiter le périmètre ?",
    "faq2.a": "Le périmètre se définit avec vous. Certains clients prennent un contrat Avancé sur le réseau et la cybersécurité, et un contrat Essentiel sur la téléphonie. La granularité existe. Ce qui compte, c'est que les SLA correspondent à la criticité réelle de chaque brique de votre infrastructure.",
    "faq3.q": "Et si nous avons déjà une équipe IT interne ?",
    "faq3.a": "Nos services managés s'articulent avec les équipes internes — nous ne les remplaçons pas. Le partage classique : votre équipe pilote l'exploitation courante et l'assistance de proximité, nous prenons en charge les expertises pointues, la supervision, les incidents complexes et les évolutions. C'est généralement le modèle le plus efficace économiquement.",

    "cta.title": "Arrêtez de subir. Pilotez.",
    "cta.desc": "Demandez un audit gratuit et étudions ensemble le niveau de service adapté à votre entreprise.",
    "cta.button": "Discuter d'un contrat de services",

    "footer.desc": "Expert marocain en solutions réseaux, cyber-intelligence et infrastructures de télécommunications intégrées à Casablanca et sur tout le royaume.",
    "footer.nav.title": "Navigation",
    "footer.nav.home": "Accueil",
    "footer.nav.solutions": "Nos Solutions",
    "footer.nav.diagnostic": "Demander un diagnostic",
    "footer.contact.title": "Informations de contact",
    "footer.lang.title": "Langues",
    "footer.copyright": "© 2025 GTEL. Tous droits réservés. Intégré avec expertise au Maroc.",
    "footer.legal": "Mentions Légales",
    "footer.privacy": "Politique de Confidentialité",

    "modal.badge": "Demande d'étude & contact",
    "modal.title": "Proposition MSP",
    "modal.desc": "Configurez votre niveau d'astreinte, helpdesk et stratégie d'externalisation avec GTEL Maroc.",
    "modal.name": "Nom / Entreprise *",
    "modal.phone": "Téléphone *",
    "modal.email": "Email *",
    "modal.service": "Abonnement visé",
    "modal.opt.business": "Contrat MSP Business (Recommandé)",
    "modal.opt.essentiel": "Contrat MSP Essentiel",
    "modal.opt.premium": "Contrat MSP Premium",
    "modal.opt.audit": "Audit de Parc / Diagnostic Gratuit",
    "modal.submit": "Envoyer ma demande",

    "toast.success": "✓ Demande envoyée avec succès !",
    "toast.error": "⚠ Erreur : ",
    "toast.connfail": "Erreur de connexion avec le serveur."
  },

  en: {
    "nav.home": "Home",
    "nav.solutions": "Solutions",
    "nav.contact": "Contact Us",
    "nav.sub.infra_digitale": "Digital Infrastructure",
    "nav.sub.infra_reseau": "Network Infrastructure",
    "nav.sub.datacenter": "Datacenter",
    "nav.sub.cyber": "Cybersecurity",
    "nav.sub.video": "Video Surveillance",
    "nav.sub.controle": "Access Control",
    "nav.sub.telephonie": "IP Telephony",
    "nav.sub.salles": "Meeting Rooms",
    "nav.sub.sono": "Sound Systems",
    "nav.sub.services": "Managed Services",

    "breadcrumb.home": "Home",
    "breadcrumb.solutions": "Our Solutions",
    "breadcrumb.current": "Managed Services",
    "breadcrumb.back": "Back to home",

    "hero.badge": "Managed Services & MSP",
    "hero.title": "Your infrastructure demands operational discipline. Not an occasional fix.",
    "hero.desc": "Periodic audits, preventive maintenance, proactive monitoring and support through every evolution. Our managed services turn your infrastructure into a controlled asset, not a recurring worry.",
    "hero.cta": "Request a service contract",

    "s1.eyebrow": "A paradigm shift",
    "s1.title": "Why a contract beats calling when it breaks",
    "s1.desc": "The \"call when it breaks\" model is still common, but it weakens your business. It carries three major flaws:",
    "s1.item1.tag": "Flaw 01",
    "s1.item1.title": "Maximizes total cost",
    "s1.item1.desc": "Emergency call-outs, inflated hourly rates, and prolonged downtime that paralyzes your teams' output.",
    "s1.item2.tag": "Flaw 02",
    "s1.item2.title": "Maximizes risk",
    "s1.item2.desc": "Failures become visible far too late, once hardware damage or data loss has already worsened.",
    "s1.item3.tag": "Flaw 03",
    "s1.item3.title": "Blocks any progress",
    "s1.item3.desc": "Your infrastructure slowly drifts over time. Without continuous follow-up, nobody keeps security or performance standards current.",
    "s1.callout": "A managed services contract reverses this logic: you pay a fixed, predictable cost in exchange for an absolute guarantee of performance and responsiveness.",

    "s2.eyebrow": "Service subscriptions",
    "s2.title": "Our offer, in 3 tiers",
    "s2.desc": "Choose the level of intervention that matches your company's criticality.",
    "s2.th.service": "Service",
    "s2.th.essentiel": "Essential",
    "s2.th.avance": "Advanced",
    "s2.th.premium": "Premium",
    "s2.row1.label": "Preventive maintenance",
    "s2.row1.essentiel": "1 visit / year",
    "s2.row1.avance": "2 visits / year",
    "s2.row1.premium": "4 visits / year",
    "s2.row2.label": "Response time",
    "s2.row2.essentiel": "T+2 business days",
    "s2.row2.avance": "T+1 business day",
    "s2.row2.premium": "4 hours (24/7)",
    "s2.row3.label": "Remote monitoring",
    "s2.row3.essentiel": "—",
    "s2.row3.avance": "Business hours",
    "s2.row3.premium": "24/7 + alerting",
    "s2.row4.label": "Reporting",
    "s2.row4.essentiel": "Yearly",
    "s2.row4.avance": "Quarterly",
    "s2.row4.premium": "Monthly",
    "s2.row5.label": "Steering committee",
    "s2.row5.essentiel": "—",
    "s2.row5.avance": "Yearly",
    "s2.row5.premium": "Quarterly",
    "s2.note": "The detailed pricing grid is built on a prior audit of the scope covered. A contract's cost depends on the number of sites, infrastructure complexity, and criticality level. No standard offer can honestly price these parameters blind.",

    "s3.eyebrow": "Technology coverage",
    "s3.title": "Cross-cutting scope",
    "s3.desc": "GTEL's managed services apply across our entire offer, guaranteeing total technological consistency across all your systems.",
    "s3.item1.title": "Network infrastructure",
    "s3.item1.desc": "Monitoring of switches, routers, and access points, with proactive alerts in case of saturation or failure.",
    "s3.item2.title": "Datacenter",
    "s3.item2.desc": "Environmental monitoring, server and UPS health management, and strict cooling follow-up.",
    "s3.item3.title": "Cybersecurity",
    "s3.item3.desc": "Continuous vulnerability watch, critical patch deployment, and periodic firewall configuration reviews.",
    "s3.item4.title": "Video Surveillance & Access",
    "s3.item4.desc": "Monitoring camera and reader uptime, checking video retention, and auditing access configuration.",
    "s3.item5.title": "Telephony & comms",
    "s3.item5.desc": "PBX monitoring, IVR (voice server) evolution management, and ongoing optimization of your communication costs.",
    "s3.item6.title": "Meeting rooms",
    "s3.item6.desc": "Checking video-conferencing equipment status, software updates, and proactive action before it impacts your meetings.",

    "s4.title": "Our commitment",
    "s4.desc": "Maintenance isn't a black box — it's a transparent, fact-based dialogue.",
    "s4.item1.title": "Contractual SLAs",
    "s4.item1.desc": "Acknowledgment time, resolution time, availability rate. Our commitments are written, measured, and reported. No commitment, no reporting: no managed service.",
    "s4.item2.title": "Maintained documentation",
    "s4.item2.desc": "Every infrastructure change is documented. At any time, you (or another integrator) can take back control with an up-to-date file. That's our professional ethic.",
    "s4.item3.title": "Steering committee",
    "s4.item3.desc": "Depending on the service level, we hold a structured periodic review: performance indicators, incident history, and improvement recommendations.",

    "s5.eyebrow": "Questions from decision-makers",
    "s5.title": "Managed Services FAQ",
    "faq1.q": "What happens if you're unreachable the day of a critical incident?",
    "faq1.a": "For Premium contracts, we commit to a supervised 4-hour, 24/7 response with an on-call line reachable by phone and email. Contractual penalties apply in case of default. This is what sets a real service contract apart from a simple sales promise.",
    "faq2.q": "Do we need a contract on everything, or can we limit the scope?",
    "faq2.a": "The scope is defined together with you. Some clients take an Advanced contract on network and cybersecurity, and an Essential contract on telephony. Granularity is available. What matters is that SLAs match the real criticality of each part of your infrastructure.",
    "faq3.q": "What if we already have an internal IT team?",
    "faq3.a": "Our managed services work alongside internal teams — we don't replace them. The typical split: your team runs day-to-day operations and front-line support, we handle deep expertise, monitoring, complex incidents, and evolutions. This is generally the most cost-effective model.",

    "cta.title": "Stop reacting. Take control.",
    "cta.desc": "Request a free audit and let's define together the service level suited to your business.",
    "cta.button": "Discuss a service contract",

    "footer.desc": "Moroccan expert in network solutions, cyber-intelligence and integrated telecommunications infrastructure in Casablanca and across the kingdom.",
    "footer.nav.title": "Navigation",
    "footer.nav.home": "Home",
    "footer.nav.solutions": "Our Solutions",
    "footer.nav.diagnostic": "Request a diagnostic",
    "footer.contact.title": "Contact information",
    "footer.lang.title": "Languages",
    "footer.copyright": "© 2025 GTEL. All rights reserved. Integrated with expertise in Morocco.",
    "footer.legal": "Legal Notice",
    "footer.privacy": "Privacy Policy",

    "modal.badge": "Request a study & contact",
    "modal.title": "MSP Proposal",
    "modal.desc": "Configure your on-call level, helpdesk and outsourcing strategy with GTEL Morocco.",
    "modal.name": "Name / Company *",
    "modal.phone": "Phone *",
    "modal.email": "Email *",
    "modal.service": "Targeted subscription",
    "modal.opt.business": "MSP Business Contract (Recommended)",
    "modal.opt.essentiel": "MSP Essential Contract",
    "modal.opt.premium": "MSP Premium Contract",
    "modal.opt.audit": "Fleet Audit / Free Diagnostic",
    "modal.submit": "Send my request",

    "toast.success": "✓ Request sent successfully!",
    "toast.error": "⚠ Error: ",
    "toast.connfail": "Connection error with the server."
  },

  ar: {
    "nav.home": "الرئيسية",
    "nav.solutions": "الحلول",
    "nav.contact": "اتصل بنا",
    "nav.sub.infra_digitale": "البنية التحتية الرقمية",
    "nav.sub.infra_reseau": "البنية التحتية للشبكات",
    "nav.sub.datacenter": "مركز البيانات",
    "nav.sub.cyber": "الأمن السيبراني",
    "nav.sub.video": "المراقبة بالفيديو",
    "nav.sub.controle": "التحكم في الولوج",
    "nav.sub.telephonie": "الهاتف عبر بروتوكول الإنترنت",
    "nav.sub.salles": "قاعات الاجتماعات",
    "nav.sub.sono": "أنظمة الصوت",
    "nav.sub.services": "الخدمات المدارة",

    "breadcrumb.home": "الرئيسية",
    "breadcrumb.solutions": "حلولنا",
    "breadcrumb.current": "الخدمات المدارة",
    "breadcrumb.back": "العودة إلى الرئيسية",

    "hero.badge": "الخدمات المدارة",
    "hero.title": "بنيتكم التحتية تتطلب انضباطاً تشغيلياً، لا تدخلاً عرضياً.",
    "hero.desc": "تدقيق دوري، صيانة وقائية، إشراف استباقي ومواكبة للتطور. خدماتنا المدارة تحوّل بنيتكم التحتية إلى أصول مضبوطة، لا مصدر قلق متكرر.",
    "hero.cta": "اطلب عقد خدمات",

    "s1.eyebrow": "تحول في المنهج",
    "s1.title": "لماذا عقد خدمات أفضل من الاتصال عند العطل",
    "s1.desc": "نموذج «أتصل عند حدوث العطل» لا يزال شائعاً، لكنه يُضعف مؤسستكم. له ثلاثة عيوب رئيسية:",
    "s1.item1.tag": "عيب 01",
    "s1.item1.title": "يرفع التكلفة الإجمالية",
    "s1.item1.desc": "تدخل عاجل، تسعيرة ساعية مرتفعة، وتعطل طويل يُشلّ إنتاجية فريقكم.",
    "s1.item2.tag": "عيب 02",
    "s1.item2.title": "يرفع المخاطر",
    "s1.item2.desc": "تصبح الأعطال ظاهرة متأخرة جداً، حين تكون الأضرار المادية أو فقدان البيانات قد تفاقمت بالفعل.",
    "s1.item3.tag": "عيب 03",
    "s1.item3.title": "يعيق أي تطور",
    "s1.item3.desc": "تتدهور بنيتكم التحتية تدريجياً مع الوقت. غياب المتابعة المستمرة يعني عدم تحديث معايير الأمن أو الأداء.",
    "s1.callout": "عقد الخدمات المدارة يقلب هذا المنطق: تدفعون تكلفة ثابتة ويمكن التنبؤ بها، مقابل ضمان تام للأداء وسرعة الاستجابة.",

    "s2.eyebrow": "اشتراكات الخدمة",
    "s2.title": "عرضنا على 3 مستويات",
    "s2.desc": "اختاروا درجة التدخل التي تناسب حساسية نشاط مؤسستكم.",
    "s2.th.service": "الخدمة",
    "s2.th.essentiel": "أساسي",
    "s2.th.avance": "متقدم",
    "s2.th.premium": "بريميوم",
    "s2.row1.label": "الصيانة الوقائية",
    "s2.row1.essentiel": "زيارة واحدة / سنة",
    "s2.row1.avance": "زيارتان / سنة",
    "s2.row1.premium": "4 زيارات / سنة",
    "s2.row2.label": "مهلة التدخل",
    "s2.row2.essentiel": "خلال يومي عمل",
    "s2.row2.avance": "خلال يوم عمل واحد",
    "s2.row2.premium": "4 ساعات (على مدار الساعة)",
    "s2.row3.label": "الإشراف عن بعد",
    "s2.row3.essentiel": "—",
    "s2.row3.avance": "أوقات العمل",
    "s2.row3.premium": "24/7 + تنبيهات",
    "s2.row4.label": "التقارير",
    "s2.row4.essentiel": "سنوي",
    "s2.row4.avance": "فصلي",
    "s2.row4.premium": "شهري",
    "s2.row5.label": "لجنة القيادة",
    "s2.row5.essentiel": "—",
    "s2.row5.avance": "سنوي",
    "s2.row5.premium": "فصلي",
    "s2.note": "يتم تحديد الجدول التسعيري المفصّل بناءً على تدقيق مسبق للنطاق المشمول. تعتمد تكلفة العقد على عدد المواقع ومدى تعقيد البنية التحتية ومستوى الحساسية. لا يمكن لأي عرض قياسي أن يحدد هذه المعايير بدقة دون تدقيق.",

    "s3.eyebrow": "التغطية التقنية",
    "s3.title": "نطاق شامل",
    "s3.desc": "تُطبَّق الخدمات المدارة لدى GTEL على كامل عروضنا، لضمان انسجام تقني تام عبر جميع أنظمتكم.",
    "s3.item1.title": "البنية التحتية للشبكة",
    "s3.item1.desc": "مراقبة المفاتيح والموجهات ونقاط الوصول، مع تنبيهات استباقية في حال التشبع أو العطل.",
    "s3.item2.title": "مركز البيانات",
    "s3.item2.desc": "مراقبة بيئية، إدارة سلامة الخوادم ومزودات الطاقة، ومتابعة صارمة للتبريد.",
    "s3.item3.title": "الأمن السيبراني",
    "s3.item3.desc": "رصد مستمر للثغرات، تطبيق التصحيحات الحرجة، ومراجعة دورية لإعدادات جدران الحماية.",
    "s3.item4.title": "المراقبة بالفيديو والولوج",
    "s3.item4.desc": "مراقبة حالة اتصال الكاميرات والقارئات، والتحقق من الاحتفاظ بالفيديو وتدقيق إعدادات الولوج.",
    "s3.item5.title": "الهاتف والاتصالات",
    "s3.item5.desc": "مراقبة سنترال الهاتف، إدارة تطور الرد الصوتي التفاعلي، وتحسين مستمر لتكاليف الاتصال.",
    "s3.item6.title": "قاعات الاجتماعات",
    "s3.item6.desc": "التحقق من حالة معدات الفيديو، تحديثات البرمجيات، وتدخل استباقي قبل التأثير على اجتماعاتكم.",

    "s4.title": "التزامنا",
    "s4.desc": "الصيانة ليست صندوقاً أسود — بل حوار شفاف قائم على الوقائع.",
    "s4.item1.title": "اتفاقيات مستوى الخدمة التعاقدية",
    "s4.item1.desc": "مهلة الاستلام، مهلة الحل، نسبة التوفر. التزاماتنا مكتوبة ومقاسة ومُبلَّغ عنها. بلا التزام، بلا تقرير: لا يوجد خدمة مدارة.",
    "s4.item2.title": "توثيق محدَّث باستمرار",
    "s4.item2.desc": "كل تطور في البنية التحتية موثَّق. في أي وقت، يمكنكم (أو أي مزود آخر) استعادة التحكم بملف محدَّث. هذا هو التزامنا المهني.",
    "s4.item3.title": "لجنة القيادة",
    "s4.item3.desc": "حسب مستوى الخدمة، نعقد لقاءً دورياً منظماً: عرض مؤشرات الأداء، تاريخ الحوادث، وتوصيات التطوير.",

    "s5.eyebrow": "أسئلة صناع القرار",
    "s5.title": "الأسئلة الشائعة حول الخدمات المدارة",
    "faq1.q": "ماذا يحدث إذا تعذر الوصول إليكم يوم حادث حرج؟",
    "faq1.a": "بالنسبة لعقود بريميوم، نلتزم بمهلة 4 ساعات على مدار الساعة مع خط تناوب يمكن الوصول إليه هاتفياً وبالبريد الإلكتروني وتحت إشراف. في حال الإخلال، تُطبَّق غرامات تعاقدية. هذا ما يميز عقد خدمات حقيقياً عن مجرد وعد تجاري.",
    "faq2.q": "هل يجب أخذ عقد على كل شيء، أم يمكن تحديد النطاق؟",
    "faq2.a": "يُحدَّد النطاق معكم. بعض العملاء يختارون عقداً متقدماً على الشبكة والأمن السيبراني، وعقداً أساسياً على الهاتف. المرونة موجودة. المهم أن تتناسب اتفاقيات مستوى الخدمة مع الحساسية الفعلية لكل جزء من بنيتكم التحتية.",
    "faq3.q": "ماذا لو كان لدينا بالفعل فريق تقني داخلي؟",
    "faq3.a": "خدماتنا المدارة تتكامل مع الفرق الداخلية — لا نحل محلها. التوزيع المعتاد: فريقكم يدير التشغيل اليومي والدعم القريب، ونحن نتكفل بالخبرات الدقيقة والإشراف والحوادث المعقدة والتطورات. هذا عموماً النموذج الأكثر فعالية من الناحية الاقتصادية.",

    "cta.title": "توقفوا عن التحمّل. تولّوا القيادة.",
    "cta.desc": "اطلبوا تدقيقاً مجانياً ولنحدد معاً مستوى الخدمة المناسب لمؤسستكم.",
    "cta.button": "مناقشة عقد خدمات",

    "footer.desc": "خبير مغربي في حلول الشبكات والاستخبارات السيبرانية والبنى التحتية للاتصالات المتكاملة في الدار البيضاء وعبر المملكة.",
    "footer.nav.title": "التصفح",
    "footer.nav.home": "الرئيسية",
    "footer.nav.solutions": "حلولنا",
    "footer.nav.diagnostic": "طلب تشخيص",
    "footer.contact.title": "معلومات الاتصال",
    "footer.lang.title": "اللغات",
    "footer.copyright": "© 2025 GTEL. جميع الحقوق محفوظة. تكامل بخبرة في المغرب.",
    "footer.legal": "الإشعارات القانونية",
    "footer.privacy": "سياسة الخصوصية",

    "modal.badge": "طلب دراسة واتصال",
    "modal.title": "عرض الخدمات المدارة",
    "modal.desc": "حدّدوا مستوى التناوب، مكتب المساعدة واستراتيجية التفويض الخارجي مع GTEL المغرب.",
    "modal.name": "الاسم / المؤسسة *",
    "modal.phone": "الهاتف *",
    "modal.email": "البريد الإلكتروني *",
    "modal.service": "الاشتراك المستهدف",
    "modal.opt.business": "عقد MSP بيزنس (موصى به)",
    "modal.opt.essentiel": "عقد MSP أساسي",
    "modal.opt.premium": "عقد MSP بريميوم",
    "modal.opt.audit": "تدقيق للأسطول / تشخيص مجاني",
    "modal.submit": "إرسال طلبي",

    "toast.success": "✓ تم إرسال الطلب بنجاح!",
    "toast.error": "⚠ خطأ: ",
    "toast.connfail": "خطأ في الاتصال بالخادم."
  }
};

const RTL_LANGS = ["ar"];

function applyTranslations(lang){
  const dict = TRANSLATIONS[lang] || TRANSLATIONS.fr;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key]) el.setAttribute("placeholder", dict[key]);
  });
}

function changeLanguage(lang){
  if (!TRANSLATIONS[lang]) lang = "fr";
  const isRTL = RTL_LANGS.includes(lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = isRTL ? "rtl" : "ltr";
  applyTranslations(lang);

  document.querySelectorAll(".lang-opt").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
  const flagMap = { fr: "🇫🇷", en: "🇬🇧", ar: "🇲🇦" };
  const codeMap = { fr: "FR", en: "EN", ar: "AR" };
  const flagEl = document.getElementById("current-lang-flag");
  const codeEl = document.getElementById("current-lang-code");
  if (flagEl) flagEl.textContent = flagMap[lang];
  if (codeEl) codeEl.textContent = codeMap[lang];

  try { localStorage.setItem("gtel-lang", lang); } catch(e){ /* storage unavailable */ }
}

function initLanguage(){
  let saved = "fr";
  try { saved = localStorage.getItem("gtel-lang") || "fr"; } catch(e){ /* storage unavailable */ }
  changeLanguage(saved);
}

document.addEventListener("DOMContentLoaded", initLanguage);
