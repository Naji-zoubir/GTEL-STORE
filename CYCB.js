/* ==========================================================================
   GTEL — Système multilingue (FR / AR / EN)
   Toute traduction se fait via data-i18n="clé" sur les éléments HTML.
   Le contenu source (FR) reste la référence éditoriale d'origine.
   ========================================================================== */

const GTEL_I18N = {
  fr: {
    "meta.title": "GTEL | Cybersécurité - Nos Solutions Spécialisées",
    "nav.home": "Accueil",
    "nav.solutions": "Solutions",
    "nav.contact": "Nous Contacter",
    "nav.sol.infra_digitale": "Infrastructure Digitale",
    "nav.sol.infra_reseau": "Infrastructure Réseau",
    "nav.sol.datacenter": "Datacenter",
    "nav.sol.cyber": "Cybersécurité",
    "nav.sol.video": "Vidéosurveillance",
    "nav.sol.controle": "Contrôle d'Accès",
    "nav.sol.telephonie": "Téléphonie IP",
    "nav.sol.salles": "Salles de Réunion",
    "nav.sol.sono": "Sonorisation",
    "nav.sol.managed": "Services Managés",

    "breadcrumb.home": "Accueil",
    "breadcrumb.solutions": "Nos Solutions",
    "breadcrumb.current": "Cybersécurité",
    "breadcrumb.back": "Retour à l'accueil",

    "rail.hero": "Ouverture",
    "rail.constat": "Constat",
    "rail.perimetre": "Périmètre",
    "rail.symptomes": "Symptômes",
    "rail.approche": "Approche",
    "rail.methode": "Méthodologie",
    "rail.faq": "Questions",
    "rail.cta": "Contact",

    "hero.eyebrow": "Sécurité & Sûreté",
    "hero.title": "La cybersécurité n'est pas un produit. C'est une discipline.",
    "hero.desc": "Pare-feu nouvelle génération, segmentation, EDR, sauvegardes éprouvées et conformité : nous construisons une posture de sécurité tenable, calibrée sur le profil de risque réel de votre entreprise.",
    "hero.cta": "Évaluer ma posture de sécurité",
    "hero.radar.cap": "Surface surveillée",

    "constat.eyebrow": "Le constat objectif",
    "constat.title": "Le constat objectif",
    "constat.text": "La grande majorité des incidents de sécurité que nous observons au Maroc ne sont pas des attaques sophistiquées. Ce sont des fondamentaux non couverts : sauvegardes non testées, comptes administrateur partagés, pare-feu mal configuré, mises à jour ignorées. La cybersécurité commence par l'hygiène, pas par les solutions miracles.",
    "constat.stat.label": "des incidents proviennent d'une hygiène de base non couverte",

    "perimetre.eyebrow": "Ce que nous couvrons",
    "perimetre.title": "Notre périmètre",
    "perimetre.hint": "Faites glisser pour explorer",
    "perimetre.1.tag": "Périmètre réseau",
    "perimetre.1.title": "Pare-feu nouvelle génération (NGFW)",
    "perimetre.1.text": "Filtrage applicatif, IPS, contrôle SSL, journalisation, intégration avec un SIEM si nécessaire.",
    "perimetre.2.tag": "Accès réseau",
    "perimetre.2.title": "Segmentation et contrôle d'accès réseau (NAC)",
    "perimetre.2.text": "Limiter la surface d'attaque interne et isoler les zones sensibles.",
    "perimetre.3.tag": "Postes de travail",
    "perimetre.3.title": "Protection des postes (EDR)",
    "perimetre.3.text": "Détection comportementale, réponse aux incidents et télémétrie centralisée.",
    "perimetre.4.tag": "Communication",
    "perimetre.4.title": "Messagerie sécurisée",
    "perimetre.4.text": "Anti-phishing, authentification renforcée et DLP pour les données sensibles.",
    "perimetre.5.tag": "Continuité",
    "perimetre.5.title": "Sauvegarde et continuité",
    "perimetre.5.text": "Sauvegarde locale et externalisée, règles 3-2-1, tests de restauration trimestriels.",
    "perimetre.6.tag": "Facteur humain",
    "perimetre.6.title": "Sensibilisation des collaborateurs",
    "perimetre.6.text": "Campagnes de phishing simulé, modules de formation et mesure de la maturité.",
    "perimetre.7.tag": "Réglementaire",
    "perimetre.7.title": "Conformité",
    "perimetre.7.text": "Accompagnement CNDP (loi 09-08), ISO 27001 et exigences sectorielles spécifiques.",

    "symptomes.eyebrow": "Diagnostic",
    "symptomes.title": "Symptômes d'une posture de sécurité fragile",
    "symptomes.col.symptom": "Symptôme opérationnel",
    "symptomes.col.impact": "Impact métier",
    "symptomes.1.symptom": "Le mot de passe administrateur est connu de plusieurs personnes",
    "symptomes.1.impact": "Aucune traçabilité des actions privilégiées. Une fuite ou une rancune suffit à compromettre l'ensemble du SI.",
    "symptomes.2.symptom": "Les sauvegardes existent mais n'ont jamais été testées",
    "symptomes.2.impact": "Le jour où vous en avez besoin, vous découvrez qu'elles sont corrompues, incomplètes ou inutilisables. C'est le scénario classique des ransomware.",
    "symptomes.3.symptom": "Le pare-feu est en mode « tout autorisé en sortie »",
    "symptomes.3.impact": "Un poste compromis communique librement avec l'extérieur. Vos données sortent sans alerte. Aucune limitation des canaux de fuite.",
    "symptomes.4.symptom": "Les mises à jour de sécurité sont en retard de plusieurs mois",
    "symptomes.4.impact": "Les vulnérabilités publiées sont activement exploitées dans les jours suivant leur publication. Vous êtes une cible désignée.",
    "symptomes.5.symptom": "Aucune journalisation centralisée",
    "symptomes.5.impact": "Quand un incident survient, l'analyse forensique est impossible. Vous ne savez ni ce qui est sorti, ni quand, ni par qui.",

    "approche.eyebrow": "Modèle de défense",
    "approche.title": "Notre approche : trois cercles de défense",
    "approche.center": "Vos données",
    "approche.n1": "Cercle 1",
    "approche.n2": "Cercle 2",
    "approche.n3": "Cercle 3",
    "approche.1.title": "Cercle 1 — Périmètre",
    "approche.1.text": "NGFW configuré sur le principe du « refus par défaut ». Filtrage applicatif et SSL. VPN d'accès distant avec authentification forte. Segmentation entre zones de confiance différentes.",
    "approche.2.title": "Cercle 2 — Postes & serveurs",
    "approche.2.text": "EDR avec détection comportementale, durcissement des configurations, gestion des correctifs, comptes administrateur séparés et tracés.",
    "approche.3.title": "Cercle 3 — Données & continuité",
    "approche.3.text": "Sauvegarde 3-2-1 (3 copies, 2 supports, 1 hors-site), tests de restauration réguliers, plan de reprise documenté et exercé.",

    "methode.eyebrow": "Processus",
    "methode.title": "Méthodologie",
    "methode.1.title": "01 — Audit de maturité",
    "methode.1.text": "Évaluation de votre posture actuelle selon une grille structurée (référentiel inspiré de NIST CSF ou ISO 27001 selon votre contexte). Livrable : une cartographie de vos forces et faiblesses, hiérarchisée par criticité et par effort de remédiation.",
    "methode.2.title": "02 — Plan de remédiation hiérarchisé",
    "methode.2.text": "Nous ne proposons jamais « tout, tout de suite ». La sécurité est un projet pluriannuel. Nous priorisons les actions à fort impact / faible coût, puis les chantiers structurants, puis les initiatives de maturité.",
    "methode.3.title": "03 — Mise en œuvre",
    "methode.3.text": "Déploiement des solutions retenues, configuration sécurisée, intégration avec votre écosystème, transfert de compétences à votre équipe IT.",
    "methode.4.title": "04 — Maintien en condition de sécurité",
    "methode.4.text": "La sécurité se dégrade dès qu'on cesse de l'entretenir. Nos contrats incluent la veille sur les vulnérabilités, l'application des correctifs critiques et les revues périodiques de configuration.",

    "faq.eyebrow": "Questions des décideurs",
    "faq.title": "Questions des décideurs",
    "faq.1.q": "Sommes-nous une cible si nous sommes une PME ?",
    "faq.1.a": "Les attaques contre les PME marocaines ont fortement progressé sur les dernières années. La majorité des attaquants ne ciblent personne en particulier : ils balayent Internet à la recherche de vulnérabilités exploitables. Une PME mal protégée est une cible plus facile qu'une grande entreprise. Le ransomware est aujourd'hui démocratisé.",
    "faq.2.q": "Combien faut-il investir en cybersécurité ?",
    "faq.2.a": "Une fourchette raisonnable se situe entre 5 et 10 % du budget IT pour une posture standard. Ce ratio varie selon votre exposition (données personnelles ? secteur réglementé ? activité 24/7 ?). L'audit de maturité permet de calibrer précisément l'investissement.",
    "faq.3.q": "Que faire si nous sommes attaqués maintenant ?",
    "faq.3.a": "Premier réflexe : ne pas éteindre les machines (cela efface les preuves). Isoler le segment réseau touché. Contacter immédiatement votre prestataire de sécurité ou la DGSSI si vous n'en avez pas. Nous proposons une cellule de réponse aux incidents pour nos clients sous contrat, avec engagement de prise en charge sous 4 heures.",
    "faq.4.q": "Et la conformité CNDP ?",
    "faq.4.a": "La loi 09-08 sur la protection des données personnelles s'applique à toute entreprise traitant des données personnelles au Maroc. Nous accompagnons nos clients dans la déclaration CNDP, la mise en place des mesures techniques (pseudonymisation, chiffrement, traçabilité) et organisationnelles (registre, politique, sensibilisation).",

    "cta.eyebrow": "Audit de 5 jours, rapport exécutif en main",
    "cta.title": "Évaluer ma maturité cybersécurité",
    "cta.btn": "Évaluer ma maturité cybersécurité",

    "footer.desc": "Expert marocain en solutions réseaux, cyber-intelligence et infrastructures de télécommunications intégrées à Casablanca et sur tout le royaume.",
    "footer.nav": "Navigation",
    "footer.nav.home": "Accueil",
    "footer.nav.solutions": "Nos Solutions",
    "footer.nav.diagnostic": "Demander un diagnostic",
    "footer.contact": "Informations de contact",
    "footer.contact.address": "241, Boulevard Emile Zola, 5ème étage Bureau 10, 20082 Casablanca",
    "footer.langs": "Langues",
    "footer.copyright": "© 2025 GTEL. Tous droits réservés. Intégré avec expertise au Maroc.",
    "footer.legal": "Mentions Légales",
    "footer.privacy": "Politique de Confidentialité",

    "modal.tag": "Demande d'étude & contact",
    "modal.title": "Demande de Devis",
    "modal.desc": "Demandez l'intervention d'un ingénieur GTEL. Traitement sous 24h.",
    "modal.name": "Nom / Entreprise *",
    "modal.phone": "Téléphone *",
    "modal.email": "Email *",
    "modal.service": "Solution ciblée",
    "modal.submit": "Envoyer",
    "toast.success": "✓ Demande envoyée avec succès !",
    "toast.sending": "Envoi en cours…",

    "theme.toggle": "Thème",
  },

  en: {
    "meta.title": "GTEL | Cybersecurity - Our Specialized Solutions",
    "nav.home": "Home",
    "nav.solutions": "Solutions",
    "nav.contact": "Contact Us",
    "nav.sol.infra_digitale": "Digital Infrastructure",
    "nav.sol.infra_reseau": "Network Infrastructure",
    "nav.sol.datacenter": "Datacenter",
    "nav.sol.cyber": "Cybersecurity",
    "nav.sol.video": "Video Surveillance",
    "nav.sol.controle": "Access Control",
    "nav.sol.telephonie": "IP Telephony",
    "nav.sol.salles": "Meeting Rooms",
    "nav.sol.sono": "Sound Systems",
    "nav.sol.managed": "Managed Services",

    "breadcrumb.home": "Home",
    "breadcrumb.solutions": "Our Solutions",
    "breadcrumb.current": "Cybersecurity",
    "breadcrumb.back": "Back to home",

    "rail.hero": "Opening",
    "rail.constat": "Findings",
    "rail.perimetre": "Scope",
    "rail.symptomes": "Symptoms",
    "rail.approche": "Approach",
    "rail.methode": "Methodology",
    "rail.faq": "Questions",
    "rail.cta": "Contact",

    "hero.eyebrow": "Security & Safety",
    "hero.title": "Cybersecurity isn't a product. It's a discipline.",
    "hero.desc": "Next-generation firewalls, segmentation, EDR, proven backups and compliance: we build a sustainable security posture, calibrated to your company's real risk profile.",
    "hero.cta": "Assess my security posture",
    "hero.radar.cap": "Monitored surface",

    "constat.eyebrow": "The objective finding",
    "constat.title": "The objective finding",
    "constat.text": "The vast majority of security incidents we observe in Morocco are not sophisticated attacks. They are uncovered fundamentals: untested backups, shared administrator accounts, misconfigured firewalls, ignored updates. Cybersecurity starts with hygiene, not miracle solutions.",
    "constat.stat.label": "of incidents stem from uncovered basic hygiene",

    "perimetre.eyebrow": "What we cover",
    "perimetre.title": "Our scope",
    "perimetre.hint": "Swipe to explore",
    "perimetre.1.tag": "Network perimeter",
    "perimetre.1.title": "Next-generation firewall (NGFW)",
    "perimetre.1.text": "Application filtering, IPS, SSL inspection, logging, SIEM integration where needed.",
    "perimetre.2.tag": "Network access",
    "perimetre.2.title": "Network segmentation & access control (NAC)",
    "perimetre.2.text": "Limit the internal attack surface and isolate sensitive zones.",
    "perimetre.3.tag": "Endpoints",
    "perimetre.3.title": "Endpoint protection (EDR)",
    "perimetre.3.text": "Behavioral detection, incident response and centralized telemetry.",
    "perimetre.4.tag": "Communication",
    "perimetre.4.title": "Secure messaging",
    "perimetre.4.text": "Anti-phishing, strong authentication and DLP for sensitive data.",
    "perimetre.5.tag": "Continuity",
    "perimetre.5.title": "Backup & continuity",
    "perimetre.5.text": "Local and offsite backup, the 3-2-1 rule, quarterly restore testing.",
    "perimetre.6.tag": "Human factor",
    "perimetre.6.title": "Staff awareness",
    "perimetre.6.text": "Simulated phishing campaigns, training modules and maturity measurement.",
    "perimetre.7.tag": "Regulatory",
    "perimetre.7.title": "Compliance",
    "perimetre.7.text": "Support for CNDP (law 09-08), ISO 27001 and sector-specific requirements.",

    "symptomes.eyebrow": "Diagnosis",
    "symptomes.title": "Signs of a fragile security posture",
    "symptomes.col.symptom": "Operational symptom",
    "symptomes.col.impact": "Business impact",
    "symptomes.1.symptom": "The admin password is known to several people",
    "symptomes.1.impact": "No traceability of privileged actions. One leak or grudge is enough to compromise the entire IT system.",
    "symptomes.2.symptom": "Backups exist but have never been tested",
    "symptomes.2.impact": "The day you need them, you discover they are corrupted, incomplete or unusable. The classic ransomware scenario.",
    "symptomes.3.symptom": "The firewall is set to \"allow all outbound\"",
    "symptomes.3.impact": "A compromised machine communicates freely with the outside. Your data leaves without alert. No limitation on exfiltration channels.",
    "symptomes.4.symptom": "Security updates are months behind",
    "symptomes.4.impact": "Published vulnerabilities are actively exploited within days of disclosure. You are a designated target.",
    "symptomes.5.symptom": "No centralized logging",
    "symptomes.5.impact": "When an incident occurs, forensic analysis is impossible. You don't know what left, when, or by whom.",

    "approche.eyebrow": "Defense model",
    "approche.title": "Our approach: three circles of defense",
    "approche.center": "Your data",
    "approche.n1": "Circle 1",
    "approche.n2": "Circle 2",
    "approche.n3": "Circle 3",
    "approche.1.title": "Circle 1 — Perimeter",
    "approche.1.text": "NGFW configured on a \"deny by default\" basis. Application and SSL filtering. Remote access VPN with strong authentication. Segmentation between different trust zones.",
    "approche.2.title": "Circle 2 — Endpoints & servers",
    "approche.2.text": "EDR with behavioral detection, configuration hardening, patch management, separate and logged admin accounts.",
    "approche.3.title": "Circle 3 — Data & continuity",
    "approche.3.text": "3-2-1 backup (3 copies, 2 media, 1 offsite), regular restore testing, a documented and rehearsed recovery plan.",

    "methode.eyebrow": "Process",
    "methode.title": "Methodology",
    "methode.1.title": "01 — Maturity audit",
    "methode.1.text": "Assessment of your current posture using a structured framework (inspired by NIST CSF or ISO 27001 depending on context). Deliverable: a map of your strengths and weaknesses, ranked by criticality and remediation effort.",
    "methode.2.title": "02 — Prioritized remediation plan",
    "methode.2.text": "We never propose \"everything, right now\". Security is a multi-year project. We prioritize high-impact / low-cost actions, then structural projects, then maturity initiatives.",
    "methode.3.title": "03 — Implementation",
    "methode.3.text": "Deployment of chosen solutions, secure configuration, integration with your ecosystem, skills transfer to your IT team.",
    "methode.4.title": "04 — Ongoing security maintenance",
    "methode.4.text": "Security decays as soon as you stop maintaining it. Our contracts include vulnerability monitoring, critical patch application and periodic configuration reviews.",

    "faq.eyebrow": "Decision-maker questions",
    "faq.title": "Decision-maker questions",
    "faq.1.q": "Are we a target if we're an SME?",
    "faq.1.a": "Attacks against Moroccan SMEs have risen sharply in recent years. Most attackers don't target anyone specifically: they scan the internet for exploitable vulnerabilities. A poorly protected SME is an easier target than a large enterprise. Ransomware is now democratized.",
    "faq.2.q": "How much should we invest in cybersecurity?",
    "faq.2.a": "A reasonable range is 5 to 10% of the IT budget for a standard posture. This ratio varies with your exposure (personal data? regulated sector? 24/7 activity?). A maturity audit lets us calibrate the investment precisely.",
    "faq.3.q": "What do we do if we're under attack right now?",
    "faq.3.a": "First reflex: don't power off the machines (it erases evidence). Isolate the affected network segment. Contact your security provider or the DGSSI immediately if you don't have one. We offer an incident response cell for contracted clients, with a 4-hour response commitment.",
    "faq.4.q": "What about CNDP compliance?",
    "faq.4.a": "Law 09-08 on personal data protection applies to any company processing personal data in Morocco. We support our clients with the CNDP declaration, technical measures (pseudonymization, encryption, traceability) and organizational measures (registry, policy, awareness).",

    "cta.eyebrow": "5-day audit, executive report in hand",
    "cta.title": "Assess my cybersecurity maturity",
    "cta.btn": "Assess my cybersecurity maturity",

    "footer.desc": "Moroccan expert in network solutions, cyber-intelligence and integrated telecommunications infrastructure in Casablanca and across the kingdom.",
    "footer.nav": "Navigation",
    "footer.nav.home": "Home",
    "footer.nav.solutions": "Our Solutions",
    "footer.nav.diagnostic": "Request a diagnostic",
    "footer.contact": "Contact information",
    "footer.contact.address": "241, Boulevard Emile Zola, 5th floor Office 10, 20082 Casablanca",
    "footer.langs": "Languages",
    "footer.copyright": "© 2025 GTEL. All rights reserved. Integrated with expertise in Morocco.",
    "footer.legal": "Legal Notice",
    "footer.privacy": "Privacy Policy",

    "modal.tag": "Study request & contact",
    "modal.title": "Quote Request",
    "modal.desc": "Request the intervention of a GTEL engineer. Processed within 24h.",
    "modal.name": "Name / Company *",
    "modal.phone": "Phone *",
    "modal.email": "Email *",
    "modal.service": "Targeted solution",
    "modal.submit": "Send",
    "toast.success": "✓ Request sent successfully!",
    "toast.sending": "Sending…",

    "theme.toggle": "Theme",
  },

  ar: {
    "meta.title": "GTEL | الأمن السيبراني - حلولنا المتخصصة",
    "nav.home": "الرئيسية",
    "nav.solutions": "الحلول",
    "nav.contact": "اتصل بنا",
    "nav.sol.infra_digitale": "البنية التحتية الرقمية",
    "nav.sol.infra_reseau": "البنية التحتية للشبكات",
    "nav.sol.datacenter": "مركز البيانات",
    "nav.sol.cyber": "الأمن السيبراني",
    "nav.sol.video": "المراقبة بالفيديو",
    "nav.sol.controle": "مراقبة الدخول",
    "nav.sol.telephonie": "الهاتف عبر بروتوكول الإنترنت",
    "nav.sol.salles": "قاعات الاجتماعات",
    "nav.sol.sono": "أنظمة الصوت",
    "nav.sol.managed": "الخدمات المُدارة",

    "breadcrumb.home": "الرئيسية",
    "breadcrumb.solutions": "حلولنا",
    "breadcrumb.current": "الأمن السيبراني",
    "breadcrumb.back": "العودة إلى الرئيسية",

    "rail.hero": "المقدمة",
    "rail.constat": "المعاينة",
    "rail.perimetre": "النطاق",
    "rail.symptomes": "الأعراض",
    "rail.approche": "المقاربة",
    "rail.methode": "المنهجية",
    "rail.faq": "الأسئلة",
    "rail.cta": "تواصل",

    "hero.eyebrow": "الأمن والسلامة",
    "hero.title": "الأمن السيبراني ليس منتجًا. إنه انضباط قائم بذاته.",
    "hero.desc": "جدران حماية من الجيل الجديد، تجزئة الشبكة، أنظمة EDR، نسخ احتياطي موثوق وامتثال تنظيمي: نبني وضعية أمنية قابلة للاستمرار، مُعايرة وفق ملف المخاطر الحقيقي لمؤسستكم.",
    "hero.cta": "قيّم وضعيتي الأمنية",
    "hero.radar.cap": "المساحة المراقبة",

    "constat.eyebrow": "المعاينة الموضوعية",
    "constat.title": "المعاينة الموضوعية",
    "constat.text": "الغالبية العظمى من الحوادث الأمنية التي نلاحظها في المغرب ليست هجمات متطورة. إنها أساسيات غير مغطاة: نسخ احتياطي لم يُختبر، حسابات مسؤول مشتركة، جدار حماية سيئ الإعداد، تحديثات مُهملة. الأمن السيبراني يبدأ بالنظافة الرقمية، لا بالحلول السحرية.",
    "constat.stat.label": "من الحوادث ناتجة عن نظافة رقمية أساسية غير مغطاة",

    "perimetre.eyebrow": "ما نغطيه",
    "perimetre.title": "نطاق عملنا",
    "perimetre.hint": "مرّر للاستكشاف",
    "perimetre.1.tag": "محيط الشبكة",
    "perimetre.1.title": "جدار حماية من الجيل الجديد (NGFW)",
    "perimetre.1.text": "تصفية على مستوى التطبيقات، أنظمة IPS، فحص SSL، تسجيل الأحداث، والتكامل مع نظام SIEM عند الحاجة.",
    "perimetre.2.tag": "الوصول للشبكة",
    "perimetre.2.title": "تجزئة الشبكة ومراقبة الدخول (NAC)",
    "perimetre.2.text": "الحد من مساحة الهجوم الداخلية وعزل المناطق الحساسة.",
    "perimetre.3.tag": "أجهزة العمل",
    "perimetre.3.title": "حماية الأجهزة الطرفية (EDR)",
    "perimetre.3.text": "كشف سلوكي، استجابة للحوادث، وتتبّع مركزي للبيانات.",
    "perimetre.4.tag": "التواصل",
    "perimetre.4.title": "مراسلة آمنة",
    "perimetre.4.text": "مكافحة التصيّد الاحتيالي، مصادقة معززة، وحماية من تسرب البيانات الحساسة (DLP).",
    "perimetre.5.tag": "الاستمرارية",
    "perimetre.5.title": "النسخ الاحتياطي والاستمرارية",
    "perimetre.5.text": "نسخ احتياطي محلي وخارجي، قاعدة 3-2-1، واختبارات استعادة فصلية.",
    "perimetre.6.tag": "العامل البشري",
    "perimetre.6.title": "توعية الموظفين",
    "perimetre.6.text": "حملات تصيّد احتيالي محاكاة، وحدات تدريبية، وقياس مستوى النضج الأمني.",
    "perimetre.7.tag": "تنظيمي",
    "perimetre.7.title": "الامتثال التنظيمي",
    "perimetre.7.text": "مواكبة الامتثال لهيئة CNDP (القانون 09-08)، معيار ISO 27001، والمتطلبات القطاعية الخاصة.",

    "symptomes.eyebrow": "التشخيص",
    "symptomes.title": "علامات وضعية أمنية هشة",
    "symptomes.col.symptom": "العرض التشغيلي",
    "symptomes.col.impact": "الأثر على النشاط",
    "symptomes.1.symptom": "كلمة مرور المسؤول معروفة لعدة أشخاص",
    "symptomes.1.impact": "غياب تام لتتبع الإجراءات المُميّزة. تسريب واحد أو نية سيئة كافيان لتعريض النظام بأكمله للخطر.",
    "symptomes.2.symptom": "النسخ الاحتياطي موجود لكنه لم يُختبر أبدًا",
    "symptomes.2.impact": "يوم الحاجة إليه، تكتشفون أنه تالف أو ناقص أو غير قابل للاستخدام. هذا هو السيناريو الكلاسيكي لهجمات الفدية.",
    "symptomes.3.symptom": "جدار الحماية مضبوط على وضع «السماح الكامل للصادر»",
    "symptomes.3.impact": "جهاز مُخترق يتواصل بحرية مع الخارج. بياناتكم تخرج دون إنذار. لا حدود لقنوات التسريب.",
    "symptomes.4.symptom": "تحديثات الأمان متأخرة بعدة أشهر",
    "symptomes.4.impact": "الثغرات المنشورة تُستغل بفعالية خلال أيام من الإفصاح عنها. أنتم هدف مُحدد.",
    "symptomes.5.symptom": "لا يوجد تسجيل مركزي للأحداث",
    "symptomes.5.impact": "عند وقوع حادث، يصبح التحليل الجنائي الرقمي مستحيلًا. لن تعرفوا ماذا خرج، ولا متى، ولا مَن فعل ذلك.",

    "approche.eyebrow": "نموذج الدفاع",
    "approche.title": "مقاربتنا: ثلاث دوائر دفاعية",
    "approche.center": "بياناتكم",
    "approche.n1": "الدائرة 1",
    "approche.n2": "الدائرة 2",
    "approche.n3": "الدائرة 3",
    "approche.1.title": "الدائرة 1 — المحيط",
    "approche.1.text": "جدار حماية NGFW مُهيّأ وفق مبدأ «الرفض الافتراضي». تصفية على مستوى التطبيقات وSSL. شبكة VPN للوصول عن بُعد بمصادقة قوية. تجزئة بين مناطق الثقة المختلفة.",
    "approche.2.title": "الدائرة 2 — الأجهزة والخوادم",
    "approche.2.text": "نظام EDR بكشف سلوكي، تقوية الإعدادات، إدارة التحديثات، وحسابات مسؤول منفصلة ومُتتبَّعة.",
    "approche.3.title": "الدائرة 3 — البيانات والاستمرارية",
    "approche.3.text": "نسخ احتياطي وفق قاعدة 3-2-1 (3 نسخ، وسيطان، ونسخة خارج الموقع)، اختبارات استعادة منتظمة، وخطة تعافٍ موثّقة ومُختبرة.",

    "methode.eyebrow": "المسار",
    "methode.title": "المنهجية",
    "methode.1.title": "01 — تدقيق مستوى النضج",
    "methode.1.text": "تقييم وضعيتكم الحالية وفق شبكة تحليل منظمة (مرجعية مستوحاة من NIST CSF أو ISO 27001 حسب سياقكم). المُخرَج: خريطة لنقاط القوة والضعف، مُرتّبة حسب الأهمية وجهد المعالجة.",
    "methode.2.title": "02 — خطة معالجة مُرتّبة الأولويات",
    "methode.2.text": "لا نقترح أبدًا «كل شيء دفعة واحدة». الأمن مشروع مُتعدد السنوات. نُرتّب الأولويات حسب الأثر العالي والتكلفة المنخفضة، ثم الأوراش الهيكلية، ثم مبادرات تعزيز النضج.",
    "methode.3.title": "03 — التنفيذ",
    "methode.3.text": "نشر الحلول المُختارة، إعداد آمن، تكامل مع منظومتكم، ونقل الكفاءات إلى فريقكم التقني.",
    "methode.4.title": "04 — الحفاظ على الوضعية الأمنية",
    "methode.4.text": "الأمن يتدهور بمجرد التوقف عن صيانته. تشمل عقودنا مراقبة الثغرات، تطبيق التصحيحات الحرجة، والمراجعات الدورية للإعدادات.",

    "faq.eyebrow": "أسئلة صُنّاع القرار",
    "faq.title": "أسئلة صُنّاع القرار",
    "faq.1.q": "هل نحن هدف إذا كنا مؤسسة صغيرة أو متوسطة؟",
    "faq.1.a": "ارتفعت الهجمات ضد المؤسسات الصغيرة والمتوسطة المغربية بشكل كبير في السنوات الأخيرة. معظم المهاجمين لا يستهدفون أحدًا بعينه: بل يمسحون الإنترنت بحثًا عن ثغرات قابلة للاستغلال. المؤسسة سيئة الحماية هدف أسهل من الشركة الكبيرة. هجمات الفدية أصبحت اليوم شائعة ومتاحة على نطاق واسع.",
    "faq.2.q": "كم يجب أن نستثمر في الأمن السيبراني؟",
    "faq.2.a": "النطاق المعقول يتراوح بين 5 و10% من ميزانية تقنية المعلومات لوضعية قياسية. تختلف هذه النسبة حسب مدى تعرضكم (بيانات شخصية؟ قطاع مُنظّم؟ نشاط على مدار الساعة؟). يتيح تدقيق مستوى النضج معايرة الاستثمار بدقة.",
    "faq.3.q": "ماذا نفعل إذا كنا نتعرض لهجوم الآن؟",
    "faq.3.a": "أول ردة فعل: لا تُطفئوا الأجهزة (فذلك يمحو الأدلة). عزل الجزء المتضرر من الشبكة. التواصل فورًا مع مزود خدمات الأمن الخاص بكم أو مع المديرية العامة لأمن نظم المعلومات إن لم يكن لديكم مزود. نقترح خلية استجابة للحوادث لعملائنا المتعاقدين، مع التزام بالتكفل خلال 4 ساعات.",
    "faq.4.q": "وماذا عن الامتثال لهيئة CNDP؟",
    "faq.4.a": "ينطبق القانون 09-08 المتعلق بحماية المعطيات ذات الطابع الشخصي على أي مؤسسة تعالج بيانات شخصية في المغرب. نرافق عملاءنا في التصريح لدى CNDP، ووضع التدابير التقنية (إخفاء الهوية، التشفير، إمكانية التتبع) والتنظيمية (السجل، السياسة، التوعية).",

    "cta.eyebrow": "تدقيق مدته 5 أيام، وتقرير تنفيذي في متناول يدكم",
    "cta.title": "قيّم مستوى نضج أمني السيبراني",
    "cta.btn": "قيّم مستوى نضج أمني السيبراني",

    "footer.desc": "خبير مغربي في حلول الشبكات، والاستخبارات السيبرانية، والبنى التحتية للاتصالات المتكاملة في الدار البيضاء وعبر كافة أنحاء المملكة.",
    "footer.nav": "التصفح",
    "footer.nav.home": "الرئيسية",
    "footer.nav.solutions": "حلولنا",
    "footer.nav.diagnostic": "طلب تشخيص",
    "footer.contact": "معلومات التواصل",
    "footer.contact.address": "241، شارع إميل زولا، الطابق 5 مكتب 10، 20082 الدار البيضاء",
    "footer.langs": "اللغات",
    "footer.copyright": "© 2025 GTEL. جميع الحقوق محفوظة. أُنجز بخبرة في المغرب.",
    "footer.legal": "الإشعار القانوني",
    "footer.privacy": "سياسة الخصوصية",

    "modal.tag": "طلب دراسة وتواصل",
    "modal.title": "طلب عرض سعر",
    "modal.desc": "اطلبوا تدخل مهندس من GTEL. مُعالجة الطلب خلال 24 ساعة.",
    "modal.name": "الاسم / المؤسسة *",
    "modal.phone": "الهاتف *",
    "modal.email": "البريد الإلكتروني *",
    "modal.service": "الحل المُستهدف",
    "modal.submit": "إرسال",
    "toast.success": "✓ تم إرسال الطلب بنجاح!",
    "toast.sending": "جاري الإرسال…",

    "theme.toggle": "المظهر",
  }
};

const GTEL_LANG_META = {
  fr: { flag: "🇫🇷", code: "FR", dir: "ltr", label: "Français" },
  en: { flag: "🇬🇧", code: "EN", dir: "ltr", label: "English" },
  ar: { flag: "🇲🇦", code: "AR", dir: "rtl", label: "العربية" }
};

(function(){
  const STORAGE_KEY = "gtel-lang";

  function getStoredLang(){
    try { return localStorage.getItem(STORAGE_KEY); } catch(e){ return null; }
  }
  function storeLang(lang){
    try { localStorage.setItem(STORAGE_KEY, lang); } catch(e){ /* ignore */ }
  }

  function applyTranslations(lang){
    const dict = GTEL_I18N[lang] || GTEL_I18N.fr;
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined){
        el.textContent = dict[key];
      }
    });
    document.querySelectorAll("[data-i18n-attr]").forEach(el => {
      // format: data-i18n-attr="placeholder:key1|title:key2"
      const spec = el.getAttribute("data-i18n-attr");
      spec.split("|").forEach(pair => {
        const [attr, key] = pair.split(":");
        if (attr && key && dict[key] !== undefined){
          el.setAttribute(attr, dict[key]);
        }
      });
    });

    const meta = GTEL_LANG_META[lang];
    document.documentElement.lang = lang;
    document.documentElement.dir = meta.dir;
    if (dict["meta.title"]) document.title = dict["meta.title"];

    document.querySelectorAll(".lang-current .flag").forEach(el => el.textContent = meta.flag);
    document.querySelectorAll(".lang-current .code").forEach(el => el.textContent = meta.code);
    document.querySelectorAll(".lang-option").forEach(btn => {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });
    document.querySelectorAll(".footer-lang-btns button").forEach(btn => {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });

    window.dispatchEvent(new CustomEvent("gtel:langchange", { detail: { lang } }));
  }

  window.changeLanguage = function(lang){
    if (!GTEL_I18N[lang]) return;
    storeLang(lang);
    applyTranslations(lang);
    document.querySelectorAll(".lang-switch").forEach(el => el.classList.remove("open"));
  };

  document.addEventListener("DOMContentLoaded", () => {
    const initial = getStoredLang() || document.documentElement.lang || "fr";
    applyTranslations(GTEL_I18N[initial] ? initial : "fr");
  });
})();