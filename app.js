/* ==========================================================================
   GTEL — MAGIC LAYER (JS additif)
   Ne modifie ni ne remplace app.js. Ajoute uniquement : aurore de fond,
   étoiles, halo curseur, barre de progression, effet magnétique boutons,
   tilt 3D sur les cartes.
   ========================================================================== */
(function () {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.addEventListener('DOMContentLoaded', () => {
    if (reduceMotion) return;

    /* 1. Aurore de fond ---------------------------------------------------- */
    const aurora = document.createElement('div');
    aurora.className = 'magic-aurora';
    aurora.innerHTML = '<span></span><span></span><span></span>';
    document.body.prepend(aurora);

    /* 2. Champ d'étoiles ----------------------------------------------------
       Densité modérée, positions/durées randomisées une seule fois. */
    const stars = document.createElement('div');
    stars.className = 'magic-stars';
    const STAR_COUNT = 34;
    let starsHTML = '';
    for (let i = 0; i < STAR_COUNT; i++) {
      const size = (Math.random() * 2 + 1).toFixed(1);
      const top = (Math.random() * 100).toFixed(2);
      const left = (Math.random() * 100).toFixed(2);
      const delay = (Math.random() * 4.5).toFixed(2);
      const dur = (3.5 + Math.random() * 3).toFixed(2);
      starsHTML += `<i style="width:${size}px;height:${size}px;top:${top}%;left:${left}%;animation-delay:-${delay}s;animation-duration:${dur}s;"></i>`;
    }
    stars.innerHTML = starsHTML;
    document.body.prepend(stars);

    /* 3. Barre de progression de scroll ------------------------------------ */
    const progress = document.createElement('div');
    progress.className = 'magic-progress';
    document.body.appendChild(progress);
    const updateProgress = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop;
      const max = h.scrollHeight - h.clientHeight;
      progress.style.width = max > 0 ? `${(scrolled / max) * 100}%` : '0%';
    };
    document.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();

    /* 4. Halo curseur (desktop uniquement) --------------------------------- */
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      const glow = document.createElement('div');
      glow.className = 'magic-cursor-glow';
      document.body.appendChild(glow);
      let rafId = null;
      window.addEventListener('mousemove', (e) => {
        glow.classList.add('is-active');
        if (rafId) cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(() => {
          glow.style.left = `${e.clientX}px`;
          glow.style.top = `${e.clientY}px`;
        });
      }, { passive: true });
      document.addEventListener('mouseleave', () => glow.classList.remove('is-active'));

      /* 5. Effet magnétique sur les boutons principaux ---------------------- */
      document.querySelectorAll('.btn-primary2, .btn-outline2').forEach((btn) => {
        btn.classList.add('magic-magnetic');
        btn.addEventListener('mousemove', (e) => {
          const r = btn.getBoundingClientRect();
          const x = e.clientX - r.left - r.width / 2;
          const y = e.clientY - r.top - r.height / 2;
          btn.style.transform = `translate(${x * 0.18}px, ${y * 0.28}px)`;
        });
        btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
      });

      /* 6. Tilt 3D sur les cartes (bracket-frame, photo-card) --------------- */
      document.querySelectorAll('.bracket-frame, .photo-card, .faq-item2').forEach((card) => {
        card.setAttribute('data-tilt', '');
        card.addEventListener('mousemove', (e) => {
          const r = card.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width - 0.5;
          const py = (e.clientY - r.top) / r.height - 0.5;
          card.style.transform = `perspective(800px) rotateX(${(-py * 6).toFixed(2)}deg) rotateY(${(px * 6).toFixed(2)}deg) translateY(-4px)`;
        });
        card.addEventListener('mouseleave', () => { card.style.transform = ''; });
      });
    }

    /* 7. Sparkle-field enrichi : ajoute quelques étincelles bonus dans
       chaque bloc .sparkle-field déjà présent dans le HTML. */
    document.querySelectorAll('.sparkle-field').forEach((field) => {
      for (let i = 0; i < 4; i++) {
        const s = document.createElement('span');
        s.style.top = `${Math.random() * 90}%`;
        s.style.left = `${Math.random() * 90}%`;
        s.style.animationDelay = `${(Math.random() * 5).toFixed(2)}s`;
        field.appendChild(s);
      }
    });
  });
})();
/* ==========================================================================
   GTEL — script.js (fichier unique)
   Contient : dictionnaire de traduction FR/AR/EN, moteur i18n, thème
   sombre/clair, révélations au scroll, menu mobile, FAQ, modal devis.
   ========================================================================== */

const GTEL_TRANSLATIONS = 
{
  "fr": {
    "nav": {
      "home": "Accueil",
      "solutions": "Solutions",
      "contact": "Nous Contacter"
    },
    "nav_dropdown": {
      "infra_digitale": "Infrastructure Digitale",
      "infra_reseau": "Infrastructure Réseau",
      "datacenter": "Datacenter",
      "cyber": "Cybersécurité",
      "video": "Vidéosurveillance",
      "controle": "Contrôle d'Accès",
      "telephonie": "Téléphonie IP",
      "salles": "Salles de Réunion",
      "sonorisation": "Sonorisation",
      "managed": "Services Managés"
    },
    "breadcrumb": {
      "home": "Accueil",
      "solutions": "Nos Solutions",
      "current": "Salles de Réunion & Visioconférence",
      "back": "Retour à l'accueil"
    },
    "hero": {
      "badge": "COMMUNICATION & COLLABORATION",
      "title": "Une réunion ne devrait jamais commencer par un problème technique.",
      "subtitle": "Intégration audio-vidéo de salles de réunion, visioconférence multi-plateformes (Teams, Zoom, Meet), expérience « one-touch ». Nous concevons des salles où la technologie s'efface pour laisser place au travail.",
      "cta": "AUDITER MES SALLES DE RÉUNION"
    },
    "hero_readout": {
      "row1_label": "SIGNAL AUDIO",
      "row1_value": "OPTIMAL",
      "row2_label": "LATENCE VIDÉO",
      "row2_value": "< 20 ms",
      "row3_label": "PLATEFORMES",
      "row4_label": "DÉMARRAGE",
      "row4_value": "ONE-TOUCH"
    },
    "section1": {
      "eyebrow": "Périmètre Technique",
      "title": "Équipements & Intégration",
      "subtitle": "De la petite Huddle Room (4 personnes) à la majestueuse salle du conseil (20+ personnes), nous adaptons le niveau technologique au format de vos échanges."
    },
    "card1": {
      "title": "Visioconférence Agnostique & Salles",
      "p1_label": "Multi-plateformes :",
      "p1_text": "La même salle rejoint Teams, Zoom, Google Meet, ou Webex sans changer de matériel ni de procédure.",
      "p2_label": "Salles spécialisées :",
      "p2_text": "Équipement sur-mesure pour salles de conseil, salles de formation, espaces de pilotage ou télémédecine."
    },
    "card2": {
      "title": "Audio Professionnel",
      "p1_label": "Micros de plafond & DSP :",
      "p1_text": "Traitement du signal numérique pour une clarté vocale absolue, sans réverbération.",
      "p2_label": "Captation parfaite :",
      "p2_text": "Suppression d'écho et captation homogène quelle que soit la position des participants dans la salle."
    },
    "card3": {
      "title": "Vidéo Intelligente & Affichage",
      "p1_label": "Cadrage IA :",
      "p1_text": "Caméras avec suivi du locuteur, auto-framing et présentation du contenu en simultané de haute définition.",
      "p2_label": "Affichage interactif :",
      "p2_text": "Écrans tactiles, partage sans fil intuitif, annotation en direct, et vidéo wall pour les espaces de pilotage."
    },
    "section2": {
      "eyebrow": "Diagnostic",
      "title": "Le vrai coût d'une mauvaise visioconférence",
      "subtitle": "Reconnaissez-vous l'une de ces situations ? Elles sont le signe d'une salle sous-optimisée qui vous coûte cher en productivité.",
      "row1": {
        "tag": "PERTE — 5 MIN/RÉUNION",
        "symptom": "« Vous m'entendez ? »",
        "impact": "Sur 10 réunions par jour à 5 personnes, c'est 4 heures de travail collectif perdues quotidiennement. Plus de 800 heures par an. Le coût réel dépasse facilement le prix d'une intégration."
      },
      "row2": {
        "tag": "IMAGE DÉGRADÉE",
        "symptom": "L'image renvoyée à vos clients est dégradée",
        "impact": "Caméra mal positionnée, lumière mal calibrée, son de mauvaise qualité. Vous donnez l'image d'une entreprise peu sérieuse, sans vous en rendre compte."
      },
      "row3": {
        "tag": "INCOHÉRENCE",
        "symptom": "Chaque salle fonctionne différemment",
        "impact": "Un collaborateur qui change de salle change de procédure. Apprentissage permanent, frustration, sous-utilisation des équipements coûteux."
      },
      "row4": {
        "tag": "MATÉRIEL MANQUANT",
        "symptom": "Le matériel se prête entre salles parce qu'il en manque",
        "impact": "Webcams USB qui voyagent, câbles HDMI introuvables, télécommandes sans piles. Symptôme d'une absence de cadrage initial."
      }
    },
    "section3": {
      "eyebrow": "Valeur Ajoutée",
      "title": "Notre philosophie : « Zéro Friction »",
      "subtitle": "La technologie doit servir l'échange, pas le ralentir. Nos espaces sont conçus pour être intuitifs et performants à 100 %."
    },
    "pcard1": {
      "title": "Clarté Audio Absolue",
      "text": "L'audio est l'élément le plus critique d'une réunion à distance. Nous déployons des systèmes de captation et de traitement qui garantissent l'intelligibilité quelle que soit la disposition de la salle."
    },
    "pcard2": {
      "title": "Image Professionnelle Constante",
      "text": "Caméras avec cadrage intelligent, calibration colorimétrique, gestion de la lumière. L'image que vous renvoyez est cohérente avec votre niveau d'exigence professionnel."
    },
    "pcard3": {
      "title": "Démarrage en un Geste",
      "text": "Une réunion démarre en appuyant sur un seul bouton. Aucune configuration complexe, aucun ajustement technique. La technologie disparaît pour laisser place à la conversation."
    },
    "section4": {
      "eyebrow": "Feuille de route",
      "title": "Méthodologie de Déploiement",
      "subtitle": "Un processus d'intégration rigoureux pour garantir l'adoption totale du système par vos collaborateurs."
    },
    "step1": {
      "title": "Audit des salles & usages",
      "text": "Mesure acoustique, étude d'éclairage et analyse de l'aménagement. Entretien avec les utilisateurs pour comprendre les usages réels. Une salle de conseil n'a pas les mêmes exigences qu'une salle de formation."
    },
    "step2": {
      "title": "Conception sur mesure",
      "text": "Sélection des équipements en fonction de la salle, intégration esthétique (câblage invisible, discrétion), et validation du concept par un mockup précis avant tout déploiement."
    },
    "step3": {
      "title": "Intégration & Tests",
      "text": "Installation soignée, paramétrage, tests complets dans toutes les configurations (Teams, Zoom, Meet). Validation par des scénarios d'usage réels avant remise des clés."
    },
    "step4": {
      "title": "Formation & Adoption",
      "text": "Un système n'est utile que s'il est utilisé. Nous formons vos assistantes de direction, utilisateurs clés et équipes IT, avec un suivi à 30 jours pour traiter les frictions résiduelles."
    },
    "section5": {
      "eyebrow": "Questions des décideurs",
      "title": "FAQ Salles de Réunion & Visio"
    },
    "faq1": {
      "q": "Êtes-vous neutres entre les marques (Logitech, Poly, Crestron, Barco) ?",
      "a": "Oui, et c'est notre force. Notre certification sur l'ensemble des technologies leaders nous permet de concevoir la meilleure solution pour vous, en mixant les équipements si nécessaire, sans être lié à un catalogue exclusif. Les écosystèmes ont chacun leurs forces : Logitech sur l'agnostique tout-en-un, Poly sur l'audio premium, Barco sur le partage sans fil professionnel."
    },
    "faq2": {
      "q": "Faut-il une salle dédiée par plateforme (Teams, Zoom) ?",
      "a": "Non, plus depuis longtemps. Les solutions modernes sont agnostiques : la même salle rejoint une réunion Teams, Zoom, Google Meet ou Webex avec la même simplicité (via une intégration native ou le BYOD). Vos collaborateurs n'ont pas à changer de comportement selon la plateforme de leur interlocuteur."
    },
    "faq3": {
      "q": "Comment garantir que le système restera performant dans le temps ?",
      "a": "Via nos contrats de supervision proactive. Nous surveillons à distance la santé des équipements (état des caméras, micros, écrans, codecs), nous gérons les mises à jour logicielles de sécurité et nous intervenons bien souvent avant qu'une panne ne perturbe une réunion importante."
    },
    "cta": {
      "title": "LA PROCHAINE RÉUNION SE PASSERA SANS FRICTION",
      "text": "Transformez vos espaces avec une intégration audiovisuelle sans compromis et adaptée à vos usages collaboratifs.",
      "button": "AUDITER MES SALLES DE RÉUNION"
    },
    "footer": {
      "about": "Expert marocain en solutions réseaux, cyber-intelligence et infrastructures de télécommunications intégrées à Casablanca et sur tout le royaume.",
      "nav_title": "Navigation",
      "nav_home": "Accueil",
      "nav_solutions": "Nos Solutions",
      "nav_devis": "Demander un diagnostic",
      "contact_title": "Informations de contact",
      "lang_title": "Langues",
      "copy": "© 2025 GTEL. Tous droits réservés. Intégré avec expertise au Maroc.",
      "legal": "Mentions Légales",
      "privacy": "Politique de Confidentialité"
    },
    "modal": {
      "eyebrow": "Demande d'étude & contact",
      "title": "Demande de Devis",
      "subtitle": "Demandez l'intervention d'un ingénieur GTEL. Traitement sous 24h.",
      "name_label": "Nom / Entreprise *",
      "phone_label": "Téléphone *",
      "email_label": "Email *",
      "service_label": "Solution ciblée",
      "submit": "Envoyer"
    }
  },
  "en": {
    "nav": {
      "home": "Home",
      "solutions": "Solutions",
      "contact": "Contact Us"
    },
    "nav_dropdown": {
      "infra_digitale": "Digital Infrastructure",
      "infra_reseau": "Network Infrastructure",
      "datacenter": "Datacenter",
      "cyber": "Cybersecurity",
      "video": "Video Surveillance",
      "controle": "Access Control",
      "telephonie": "IP Telephony",
      "salles": "Meeting Rooms",
      "sonorisation": "Sound Systems",
      "managed": "Managed Services"
    },
    "breadcrumb": {
      "home": "Home",
      "solutions": "Our Solutions",
      "current": "Meeting Rooms & Video Conferencing",
      "back": "Back to home"
    },
    "hero": {
      "badge": "COMMUNICATION & COLLABORATION",
      "title": "A meeting should never start with a technical problem.",
      "subtitle": "Audio-video integration for meeting rooms, multi-platform video conferencing (Teams, Zoom, Meet), a true \"one-touch\" experience. We design rooms where technology fades into the background so work can take center stage.",
      "cta": "AUDIT MY MEETING ROOMS"
    },
    "hero_readout": {
      "row1_label": "AUDIO SIGNAL",
      "row1_value": "OPTIMAL",
      "row2_label": "VIDEO LATENCY",
      "row2_value": "< 20 ms",
      "row3_label": "PLATFORMS",
      "row4_label": "START-UP",
      "row4_value": "ONE-TOUCH"
    },
    "section1": {
      "eyebrow": "Technical Scope",
      "title": "Equipment & Integration",
      "subtitle": "From the small huddle room (4 people) to the grand boardroom (20+ people), we match the technology level to the format of your meetings."
    },
    "card1": {
      "title": "Platform-Agnostic Video Conferencing & Rooms",
      "p1_label": "Multi-platform:",
      "p1_text": "The same room connects to Teams, Zoom, Google Meet, or Webex without changing hardware or procedure.",
      "p2_label": "Specialized rooms:",
      "p2_text": "Custom equipment for boardrooms, training rooms, control centers, or telemedicine spaces."
    },
    "card2": {
      "title": "Professional Audio",
      "p1_label": "Ceiling mics & DSP:",
      "p1_text": "Digital signal processing for absolute vocal clarity, free of reverberation.",
      "p2_label": "Flawless pickup:",
      "p2_text": "Echo cancellation and even audio pickup regardless of where participants sit in the room."
    },
    "card3": {
      "title": "Intelligent Video & Display",
      "p1_label": "AI framing:",
      "p1_text": "Cameras with speaker tracking, auto-framing, and simultaneous high-definition content sharing.",
      "p2_label": "Interactive display:",
      "p2_text": "Touch screens, intuitive wireless sharing, live annotation, and video walls for control-room spaces."
    },
    "section2": {
      "eyebrow": "Diagnostic",
      "title": "The real cost of a poor video conference",
      "subtitle": "Recognize any of these situations? They're signs of an under-optimized room that's quietly costing you productivity.",
      "row1": {
        "tag": "LOSS — 5 MIN/MEETING",
        "symptom": "\"Can you hear me?\"",
        "impact": "With 10 daily meetings of 5 people each, that's 4 hours of collective work lost every day — over 800 hours a year. The real cost easily exceeds the price of a proper integration."
      },
      "row2": {
        "tag": "DEGRADED IMAGE",
        "symptom": "The image your clients see is poor quality",
        "impact": "Badly positioned camera, poorly calibrated lighting, low-quality sound. You're projecting the image of an unprofessional company without even realizing it."
      },
      "row3": {
        "tag": "INCONSISTENCY",
        "symptom": "Every room works differently",
        "impact": "A team member who switches rooms has to relearn the procedure. Constant learning curve, frustration, and underused expensive equipment."
      },
      "row4": {
        "tag": "MISSING EQUIPMENT",
        "symptom": "Equipment gets borrowed between rooms because there isn't enough",
        "impact": "USB webcams that travel from room to room, missing HDMI cables, remotes with no batteries. A clear symptom of poor initial planning."
      }
    },
    "section3": {
      "eyebrow": "Added Value",
      "title": "Our philosophy: \"Zero Friction\"",
      "subtitle": "Technology should serve conversation, not slow it down. Our spaces are designed to be 100% intuitive and 100% reliable."
    },
    "pcard1": {
      "title": "Absolute Audio Clarity",
      "text": "Audio is the most critical element of a remote meeting. We deploy pickup and processing systems that guarantee intelligibility regardless of the room's layout."
    },
    "pcard2": {
      "title": "Consistently Professional Image",
      "text": "Cameras with intelligent framing, color calibration, and lighting management. The image you project matches your standard of professionalism."
    },
    "pcard3": {
      "title": "One-Touch Start",
      "text": "A meeting starts with the press of a single button. No complex setup, no technical adjustments. Technology disappears so conversation can take over."
    },
    "section4": {
      "eyebrow": "Roadmap",
      "title": "Deployment Methodology",
      "subtitle": "A rigorous integration process to guarantee full adoption of the system by your teams."
    },
    "step1": {
      "title": "Room & usage audit",
      "text": "Acoustic measurement, lighting study, and layout analysis. Interviews with users to understand actual usage. A boardroom doesn't have the same requirements as a training room."
    },
    "step2": {
      "title": "Tailored design",
      "text": "Equipment selection based on the room, aesthetic integration (hidden cabling, discretion), and concept validation through a precise mockup before any deployment."
    },
    "step3": {
      "title": "Integration & testing",
      "text": "Careful installation, configuration, and full testing across every platform (Teams, Zoom, Meet). Validation through real usage scenarios before handover."
    },
    "step4": {
      "title": "Training & adoption",
      "text": "A system is only useful if it's used. We train your executive assistants, key users, and IT teams, with a 30-day follow-up to resolve any remaining friction."
    },
    "section5": {
      "eyebrow": "Questions from decision-makers",
      "title": "Meeting Room & Video FAQ"
    },
    "faq1": {
      "q": "Are you brand-neutral (Logitech, Poly, Crestron, Barco)?",
      "a": "Yes, and that's our strength. Our certification across all leading technologies lets us design the best solution for you, mixing equipment when needed, without being tied to a single exclusive catalog. Each ecosystem has its strengths: Logitech for all-in-one agnostic setups, Poly for premium audio, Barco for professional wireless sharing."
    },
    "faq2": {
      "q": "Do we need a dedicated room per platform (Teams, Zoom)?",
      "a": "No, not anymore. Modern solutions are platform-agnostic: the same room joins a Teams, Zoom, Google Meet, or Webex meeting with equal simplicity (via native integration or BYOD). Your team doesn't need to change behavior based on the other party's platform."
    },
    "faq3": {
      "q": "How do you guarantee the system stays reliable over time?",
      "a": "Through our proactive supervision contracts. We remotely monitor equipment health (cameras, microphones, screens, codecs), manage security software updates, and often intervene before a failure can disrupt an important meeting."
    },
    "cta": {
      "title": "YOUR NEXT MEETING WILL BE FRICTION-FREE",
      "text": "Transform your spaces with uncompromising audiovisual integration tailored to how your teams actually collaborate.",
      "button": "AUDIT MY MEETING ROOMS"
    },
    "footer": {
      "about": "Moroccan expert in network solutions, cyber-intelligence, and integrated telecommunications infrastructure across Casablanca and the whole kingdom.",
      "nav_title": "Navigation",
      "nav_home": "Home",
      "nav_solutions": "Our Solutions",
      "nav_devis": "Request a diagnostic",
      "contact_title": "Contact information",
      "lang_title": "Languages",
      "copy": "© 2025 GTEL. All rights reserved. Integrated with expertise across Morocco.",
      "legal": "Legal Notice",
      "privacy": "Privacy Policy"
    },
    "modal": {
      "eyebrow": "Request a study & contact",
      "title": "Request a Quote",
      "subtitle": "Request the intervention of a GTEL engineer. Processed within 24h.",
      "name_label": "Name / Company *",
      "phone_label": "Phone *",
      "email_label": "Email *",
      "service_label": "Targeted solution",
      "submit": "Send"
    }
  },
  "ar": {
    "nav": {
      "home": "الرئيسية",
      "solutions": "الحلول",
      "contact": "اتصل بنا"
    },
    "nav_dropdown": {
      "infra_digitale": "البنية التحتية الرقمية",
      "infra_reseau": "البنية التحتية للشبكات",
      "datacenter": "مركز البيانات",
      "cyber": "الأمن السيبراني",
      "video": "المراقبة بالفيديو",
      "controle": "التحكم في الدخول",
      "telephonie": "الهاتف عبر بروتوكول الإنترنت",
      "salles": "قاعات الاجتماعات",
      "sonorisation": "أنظمة الصوت",
      "managed": "الخدمات المُدارة"
    },
    "breadcrumb": {
      "home": "الرئيسية",
      "solutions": "حلولنا",
      "current": "قاعات الاجتماعات ومؤتمرات الفيديو",
      "back": "العودة إلى الرئيسية"
    },
    "hero": {
      "badge": "التواصل والتعاون",
      "title": "لا ينبغي أبدًا أن يبدأ الاجتماع بمشكلة تقنية.",
      "subtitle": "دمج الصوت والصورة في قاعات الاجتماعات، ومؤتمرات فيديو متعددة المنصات (Teams، Zoom، Meet)، بتجربة \"تشغيل بلمسة واحدة\". نصمم قاعات تتوارى فيها التقنية لتفسح المجال للعمل.",
      "cta": "تدقيق قاعات اجتماعاتي"
    },
    "hero_readout": {
      "row1_label": "إشارة الصوت",
      "row1_value": "ممتازة",
      "row2_label": "زمن استجابة الفيديو",
      "row2_value": "< 20 ms",
      "row3_label": "المنصات",
      "row4_label": "التشغيل",
      "row4_value": "بلمسة واحدة"
    },
    "section1": {
      "eyebrow": "النطاق التقني",
      "title": "التجهيزات والدمج",
      "subtitle": "من غرفة الاجتماعات الصغيرة (4 أشخاص) إلى قاعة مجلس الإدارة الكبرى (أكثر من 20 شخصًا)، نُكيّف المستوى التقني حسب طبيعة اجتماعاتكم."
    },
    "card1": {
      "title": "مؤتمرات فيديو محايدة المنصة وقاعات مجهزة",
      "p1_label": "متعددة المنصات:",
      "p1_text": "نفس القاعة تنضم إلى Teams أو Zoom أو Google Meet أو Webex دون تغيير المعدات أو الإجراءات.",
      "p2_label": "قاعات متخصصة:",
      "p2_text": "تجهيزات مخصصة لقاعات مجلس الإدارة وقاعات التكوين ومساحات القيادة أو الطب عن بُعد."
    },
    "card2": {
      "title": "صوت احترافي",
      "p1_label": "ميكروفونات السقف ومعالج الإشارة الرقمية:",
      "p1_text": "معالجة رقمية للإشارة تضمن وضوحًا صوتيًا كاملاً دون صدى.",
      "p2_label": "التقاط مثالي:",
      "p2_text": "إلغاء الصدى والتقاط متجانس للصوت أيًا كان موقع المشاركين داخل القاعة."
    },
    "card3": {
      "title": "فيديو ذكي وشاشات عرض",
      "p1_label": "تأطير بالذكاء الاصطناعي:",
      "p1_text": "كاميرات تتبع المتحدث، وتأطير تلقائي، وعرض المحتوى في آن واحد بجودة عالية الدقة.",
      "p2_label": "شاشات تفاعلية:",
      "p2_text": "شاشات لمس، ومشاركة لاسلكية سهلة، وتعليق مباشر، وجدران فيديو لمساحات القيادة."
    },
    "section2": {
      "eyebrow": "التشخيص",
      "title": "التكلفة الحقيقية لمؤتمر فيديو سيء",
      "subtitle": "هل تتعرفون على أحد هذه المواقف؟ إنها علامة على قاعة غير مُحسّنة تكلفكم الكثير من الإنتاجية.",
      "row1": {
        "tag": "خسارة — 5 دقائق لكل اجتماع",
        "symptom": "«هل تسمعونني؟»",
        "impact": "مع 10 اجتماعات يوميًا بـ5 أشخاص، يعني ذلك 4 ساعات عمل جماعي ضائعة يوميًا، أي أكثر من 800 ساعة سنويًا. التكلفة الحقيقية تتجاوز بسهولة ثمن التجهيز الجيد."
      },
      "row2": {
        "tag": "صورة رديئة",
        "symptom": "الصورة المُرسلة إلى عملائكم رديئة الجودة",
        "impact": "كاميرا سيئة الوضع، إضاءة غير مُعايرة، صوت رديء الجودة. تُعطون انطباعًا بشركة غير جادة دون أن تدركوا ذلك."
      },
      "row3": {
        "tag": "عدم الانسجام",
        "symptom": "كل قاعة تعمل بطريقة مختلفة",
        "impact": "الموظف الذي يغيّر القاعة يضطر لتعلّم إجراء جديد. تعلّم مستمر، إحباط، وضعف استغلال المعدات المكلفة."
      },
      "row4": {
        "tag": "نقص في المعدات",
        "symptom": "المعدات تُستعار بين القاعات بسبب نقصها",
        "impact": "كاميرات ويب تتنقل بين القاعات، كابلات HDMI مفقودة، أجهزة تحكم بدون بطاريات. علامة على غياب تخطيط أولي."
      }
    },
    "section3": {
      "eyebrow": "القيمة المضافة",
      "title": "فلسفتنا: «انعدام الاحتكاك»",
      "subtitle": "يجب أن تخدم التقنية التواصل، لا أن تُبطئه. مساحاتنا مصممة لتكون بديهية وفعالة بنسبة 100%."
    },
    "pcard1": {
      "title": "وضوح صوتي مطلق",
      "text": "الصوت هو العنصر الأكثر أهمية في أي اجتماع عن بُعد. نستخدم أنظمة التقاط ومعالجة تضمن الوضوح أيًا كان تصميم القاعة."
    },
    "pcard2": {
      "title": "صورة احترافية ثابتة",
      "text": "كاميرات بتأطير ذكي، ومعايرة للألوان، وإدارة للإضاءة. الصورة التي تعرضونها تتماشى مع مستوى احترافيتكم."
    },
    "pcard3": {
      "title": "انطلاق بلمسة واحدة",
      "text": "يبدأ الاجتماع بالضغط على زر واحد فقط. دون إعدادات معقدة أو تعديلات تقنية. تختفي التقنية لتفسح المجال للحوار."
    },
    "section4": {
      "eyebrow": "خارطة الطريق",
      "title": "منهجية التنفيذ",
      "subtitle": "عملية دمج دقيقة لضمان التبني الكامل للنظام من طرف فريقكم."
    },
    "step1": {
      "title": "تدقيق القاعات والاستخدامات",
      "text": "قياسات صوتية، ودراسة الإضاءة، وتحليل التصميم. مقابلات مع المستخدمين لفهم الاستخدام الفعلي. قاعة مجلس الإدارة ليست بنفس متطلبات قاعة التكوين."
    },
    "step2": {
      "title": "تصميم على المقاس",
      "text": "اختيار المعدات حسب القاعة، ودمج جمالي (أسلاك مخفية، حسّ التصميم)، والتحقق من المفهوم عبر نموذج دقيق قبل أي تنفيذ."
    },
    "step3": {
      "title": "الدمج والاختبار",
      "text": "تركيب دقيق، وضبط الإعدادات، واختبارات شاملة في جميع الإعدادات (Teams، Zoom، Meet). تحقق عبر سيناريوهات استخدام حقيقية قبل التسليم."
    },
    "step4": {
      "title": "التكوين والتبني",
      "text": "لا فائدة من نظام لا يُستخدم. نُكوّن مساعدات الإدارة والمستخدمين الرئيسيين وفرق تقنية المعلومات، مع متابعة لمدة 30 يومًا لمعالجة أي عوائق متبقية."
    },
    "section5": {
      "eyebrow": "أسئلة أصحاب القرار",
      "title": "الأسئلة الشائعة حول قاعات الاجتماعات والفيديو"
    },
    "faq1": {
      "q": "هل أنتم محايدون تجاه العلامات التجارية (Logitech، Poly، Crestron، Barco)؟",
      "a": "نعم، وهذه قوتنا. اعتمادنا على جميع التقنيات الرائدة يتيح لنا تصميم أفضل حل لكم، بالمزج بين المعدات عند الحاجة، دون الارتباط بكتالوج حصري. لكل نظام بيئي نقاط قوته: Logitech في الحلول الشاملة المحايدة، Poly في الصوت الفاخر، Barco في المشاركة اللاسلكية الاحترافية."
    },
    "faq2": {
      "q": "هل تحتاجون قاعة مخصصة لكل منصة (Teams، Zoom)؟",
      "a": "لا، لم يعد الأمر كذلك منذ زمن. الحلول الحديثة محايدة تجاه المنصات: نفس القاعة تنضم إلى اجتماع Teams أو Zoom أو Google Meet أو Webex بنفس السهولة (عبر دمج أصلي أو BYOD). لا يحتاج فريقكم لتغيير سلوكه حسب منصة الطرف الآخر."
    },
    "faq3": {
      "q": "كيف تضمنون بقاء النظام فعالاً مع مرور الوقت؟",
      "a": "من خلال عقود الإشراف الاستباقي. نراقب عن بُعد سلامة المعدات (حالة الكاميرات والميكروفونات والشاشات والمُرمّزات)، وندير تحديثات البرامج الأمنية، ونتدخل غالبًا قبل أن يُخل عطل باجتماع مهم."
    },
    "cta": {
      "title": "الاجتماع القادم سيمر دون أي احتكاك",
      "text": "حوّلوا مساحاتكم بدمج سمعي بصري دون تنازلات، ومكيّف حسب أسلوب عملكم التعاوني.",
      "button": "تدقيق قاعات اجتماعاتي"
    },
    "footer": {
      "about": "خبير مغربي في حلول الشبكات والاستخبارات السيبرانية والبنى التحتية للاتصالات المندمجة في الدار البيضاء وعبر المملكة.",
      "nav_title": "التصفح",
      "nav_home": "الرئيسية",
      "nav_solutions": "حلولنا",
      "nav_devis": "طلب تشخيص",
      "contact_title": "معلومات الاتصال",
      "lang_title": "اللغات",
      "copy": "© 2025 جي تيل. جميع الحقوق محفوظة. تكامل بخبرة في المغرب.",
      "legal": "الإشعار القانوني",
      "privacy": "سياسة الخصوصية"
    },
    "modal": {
      "eyebrow": "طلب دراسة واتصال",
      "title": "طلب عرض سعر",
      "subtitle": "اطلبوا تدخل مهندس من جي تيل. المعالجة خلال 24 ساعة.",
      "name_label": "الاسم / الشركة *",
      "phone_label": "الهاتف *",
      "email_label": "البريد الإلكتروني *",
      "service_label": "الحل المستهدف",
      "submit": "إرسال"
    }
  }
};

/* ---------------------------- I18N ---------------------------- */
const GTEL_I18N = (() => {
  const SUPPORTED = ['fr', 'ar', 'en'];
  const DEFAULT_LANG = 'fr';
  const STORAGE_KEY = 'gtel-lang';
  const FLAGS = { fr: '🇫🇷', ar: '🇲🇦', en: '🇬🇧' };
  const CODES = { fr: 'FR', ar: 'AR', en: 'EN' };

  let dict = {};

  function getValue(obj, path) {
    return path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);
  }

  function applyToDOM() {
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const val = getValue(dict, el.getAttribute('data-i18n'));
      if (val !== undefined) el.textContent = val;
    });
    document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
      el.getAttribute('data-i18n-attr').split(',').forEach((pair) => {
        const [attr, key] = pair.split(':').map((s) => s.trim());
        const val = getValue(dict, key);
        if (attr && val !== undefined) el.setAttribute(attr, val);
      });
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const val = getValue(dict, el.getAttribute('data-i18n-placeholder'));
      if (val !== undefined) el.setAttribute('placeholder', val);
    });
  }

  function updateSwitcherUI(lang) {
    const flagEl = document.getElementById('current-lang-flag');
    const codeEl = document.getElementById('current-lang-code');
    if (flagEl) flagEl.textContent = FLAGS[lang];
    if (codeEl) codeEl.textContent = CODES[lang];
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      const btnLang = btn.getAttribute('data-lang');
      if (btnLang) btn.classList.toggle('active', btnLang === lang);
    });
    document.documentElement.lang = lang;
  }

  function applyDirection(lang) {
    const dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('dir', dir);
    document.body.setAttribute('dir', dir);
  }

  function changeLanguage(lang) {
    if (!SUPPORTED.includes(lang)) lang = DEFAULT_LANG;
    dict = GTEL_TRANSLATIONS[lang] || {};
    applyDirection(lang);
    applyToDOM();
    updateSwitcherUI(lang);
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* stockage indisponible */ }
    document.dispatchEvent(new CustomEvent('gtel:languagechange', { detail: { lang } }));
  }

  function getStoredLang() {
    let stored = null;
    try { stored = localStorage.getItem(STORAGE_KEY); } catch (e) { /* ignore */ }
    if (stored && SUPPORTED.includes(stored)) return stored;
    const browserLang = (navigator.language || DEFAULT_LANG).slice(0, 2);
    return SUPPORTED.includes(browserLang) ? browserLang : DEFAULT_LANG;
  }

  function init() { changeLanguage(getStoredLang()); }

  return { init, changeLanguage };
})();

function changeLanguage(lang) { GTEL_I18N.changeLanguage(lang); }

/* ---------------------------- THEME (dark / light) ---------------------------- */
(function themeInit() {
  const STORAGE_KEY = 'gtel-theme';
  const root = document.documentElement;

  function apply(theme) {
    if (theme === 'dark') root.setAttribute('data-theme', 'dark');
    else root.removeAttribute('data-theme');
    document.querySelectorAll('.theme-toggle').forEach((btn) => {
      btn.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
    });
  }

  function getStored() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'dark' || stored === 'light') return stored;
    } catch (e) { /* ignore */ }
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  let current = getStored();
  apply(current);

  window.toggleTheme = function () {
    current = current === 'dark' ? 'light' : 'dark';
    apply(current);
    try { localStorage.setItem(STORAGE_KEY, current); } catch (e) { /* ignore */ }
  };
})();

/* ---------------------------- HEADER SCROLL STATE ---------------------------- */
window.addEventListener('scroll', () => {
  const header = document.getElementById('main-header');
  if (!header) return;
  if (window.scrollY > 40) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
});

/* ---------------------------- INIT ON LOAD ---------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  // Menu mobile en tout premier : même si une autre partie du script plante
  // plus bas (i18n, reveal, etc.), le hamburger doit toujours fonctionner.
  const mobileBtn = document.getElementById('mobile-hamburger');
  const navMenu = document.getElementById('nav-navigation');
  if (mobileBtn && navMenu) {
    mobileBtn.addEventListener('click', () => {
      const willOpen = !navMenu.classList.contains('mobile-open');
      navMenu.classList.toggle('mobile-open', willOpen);
      navMenu.classList.toggle('hidden', !willOpen);
      mobileBtn.classList.toggle('is-open', willOpen);
      document.body.classList.toggle('mobile-nav-locked', willOpen);
    });

    // Ferme le menu automatiquement si on clique un lien à l'intérieur,
    // ou si on repasse en desktop (resize > breakpoint lg).
    navMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('mobile-open');
        navMenu.classList.add('hidden');
        mobileBtn.classList.remove('is-open');
        document.body.classList.remove('mobile-nav-locked');
      });
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 1024 && navMenu.classList.contains('mobile-open')) {
        navMenu.classList.remove('mobile-open');
        navMenu.classList.add('hidden');
        mobileBtn.classList.remove('is-open');
        document.body.classList.remove('mobile-nav-locked');
      }
    });
  }

  try {
    GTEL_I18N.init();
  } catch (e) {
    console.error('GTEL_I18N.init a échoué :', e);
  }

  const revealEls = document.querySelectorAll('.reveal, .reveal-stagger');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  }
});

/* ---------------------------- FAQ ACCORDION ---------------------------- */
function toggleFAQ2(btn) {
  const content = btn.nextElementSibling;
  const isExpanded = btn.getAttribute('aria-expanded') === 'true';
  document.querySelectorAll('.faq-btn2').forEach((b) => {
    b.setAttribute('aria-expanded', 'false');
    if (b.nextElementSibling) b.nextElementSibling.style.maxHeight = null;
  });
  if (!isExpanded) {
    btn.setAttribute('aria-expanded', 'true');
    content.style.maxHeight = content.scrollHeight + 'px';
  }
}

/* ---------------------------- QUOTE MODAL ---------------------------- */
function openQuoteModal(service) {
  service = service || 'Salles de Réunion';
  const overlay = document.getElementById('quote-modal-overlay');
  if (!overlay) return;
  overlay.classList.remove('opacity-0', 'invisible');
  overlay.children[0].classList.remove('translate-y-4');
  const select = document.getElementById('quote-service');
  if (select) select.value = service;
}
function closeQuoteModal() {
  const overlay = document.getElementById('quote-modal-overlay');
  if (!overlay) return;
  overlay.classList.add('opacity-0', 'invisible');
  overlay.children[0].classList.add('translate-y-4');
}

function handleQuoteSubmit(event) {
  event.preventDefault();
  const payload = {
    type: 'devis',
    name: document.getElementById('quote-name').value,
    email: document.getElementById('quote-email').value,
    phone: document.getElementById('quote-phone').value,
    service: document.getElementById('quote-service').value,
    message: 'Demande depuis la page Salles de Réunion & Visioconférence'
  };

  fetch('../contact.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })
    .then((res) => res.json())
    .then((data) => {
      const toast = document.getElementById('success-toast');
      const msg = document.getElementById('toast-msg');
      if (data.success) {
        msg.innerText = '✓ Demande envoyée avec succès !';
      } else {
        msg.innerText = '⚠ Erreur : ' + data.error;
      }
      toast.style.transform = 'translateX(0)';
      setTimeout(() => { toast.style.transform = 'translateX(-150%)'; }, 4000);
      closeQuoteModal();
      document.getElementById('gtel-quote-form').reset();
    })
    .catch(() => {
      alert('Erreur de connexion avec le serveur PHP.');
    });
}
/* ==========================================================================
   MOBILE CARD CAROUSEL — points de pagination
   Ajoute des points sous chaque carrousel mobile (.mobile-carousel) pour
   indiquer la position, sans utiliser de flèches. Le défilement se fait
   uniquement par swipe tactile ; cliquer un point permet aussi de sauter
   directement à une carte (pratique en test desktop / accessibilité).
   ========================================================================== */

(function () {
  function initCarousel(track) {
    var cards = Array.prototype.slice.call(track.children);
    if (cards.length < 2) return;

    // évite de dupliquer les points si le script tourne deux fois
    var existing = track.nextElementSibling;
    if (existing && existing.classList && existing.classList.contains('carousel-dots')) {
      existing.remove();
    }

    var dotsWrap = document.createElement('div');
    dotsWrap.className = 'carousel-dots';
    dotsWrap.setAttribute('role', 'tablist');
    dotsWrap.setAttribute('aria-label', 'Navigation des cartes');

    cards.forEach(function (card, i) {
      var dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'dot' + (i === 0 ? ' is-active' : '');
      dot.setAttribute('aria-label', 'Aller à la carte ' + (i + 1));
      dot.addEventListener('click', function () {
        card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      });
      dotsWrap.appendChild(dot);
    });

    track.insertAdjacentElement('afterend', dotsWrap);

    var dots = Array.prototype.slice.call(dotsWrap.children);
    var ticking = false;

    function updateActiveDot() {
      var trackCenter = track.scrollLeft + track.clientWidth / 2;
      var closestIndex = 0;
      var closestDistance = Infinity;

      cards.forEach(function (card, i) {
        var cardCenter = card.offsetLeft + card.offsetWidth / 2;
        var distance = Math.abs(cardCenter - trackCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = i;
        }
      });

      dots.forEach(function (dot, i) {
        dot.classList.toggle('is-active', i === closestIndex);
      });

      ticking = false;
    }

    track.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(updateActiveDot);
        ticking = true;
      }
    }, { passive: true });
  }

  function initAll() {
    var tracks = document.querySelectorAll('.mobile-carousel');
    tracks.forEach(initCarousel);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }

  // recalcule si l'utilisateur bascule entre mobile et desktop (rotation, resize)
  var resizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(initAll, 200);
  });
})();