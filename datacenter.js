/* ================= THEME ================= */
const root = document.documentElement;
const themeBtn = document.getElementById('theme-toggle');
function applyTheme(t){
  root.setAttribute('data-theme', t);
  themeBtn.querySelector('.knob').textContent = t === 'dark' ? '🌙' : '☀️';
  try{ localStorage.setItem('gtel-theme', t); }catch(e){}
}
(function initTheme(){
  let saved;
  try{ saved = localStorage.getItem('gtel-theme'); }catch(e){}
  applyTheme(saved || 'dark');
})();
themeBtn.addEventListener('click', () => {
  applyTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
});

/* ================= LANG SWITCHER UI ================= */
const langBox = document.getElementById('lang-box');
document.getElementById('lang-trigger').addEventListener('click', () => langBox.classList.toggle('open'));
document.addEventListener('click', (e) => { if(!langBox.contains(e.target)) langBox.classList.remove('open'); });

/* ================= MOBILE DRAWER ================= */
const burger = document.getElementById('burger-btn');
const drawer = document.getElementById('mobile-drawer');
const scrim = document.getElementById('drawer-scrim');
function toggleDrawer(){ drawer.classList.toggle('open'); scrim.classList.toggle('open'); }
burger.addEventListener('click', toggleDrawer);
scrim.addEventListener('click', toggleDrawer);
drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { drawer.classList.remove('open'); scrim.classList.remove('open'); }));

/* ================= FAQ ================= */
function toggleFAQ(btn){
  const content = btn.nextElementSibling;
  const isOpen = btn.getAttribute('aria-expanded') === 'true';
  document.querySelectorAll('.faq-q').forEach(b => { b.setAttribute('aria-expanded','false'); b.nextElementSibling.style.maxHeight = null; });
  if(!isOpen){ btn.setAttribute('aria-expanded','true'); content.style.maxHeight = content.scrollHeight + 'px'; }
}

/* ================= MODAL ================= */
const overlay = document.getElementById('quote-modal-overlay');
function openQuoteModal(service){
  overlay.classList.add('open');
  document.getElementById('quote-service').value = service || 'Datacenter / Serveurs';
}
function closeQuoteModal(){ overlay.classList.remove('open'); }
overlay.addEventListener('click', (e) => { if(e.target === overlay) closeQuoteModal(); });

function handleQuoteSubmit(event){
  event.preventDefault();
  const payload = {
    type: 'devis',
    name: document.getElementById('quote-name').value,
    email: document.getElementById('quote-email').value,
    phone: document.getElementById('quote-phone').value,
    service: document.getElementById('quote-service').value,
    message: 'Demande depuis la page Datacenter'
  };
  fetch('../contact.php', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload) })
    .then(res => res.json())
    .then(data => {
      const toast = document.getElementById('success-toast');
      document.getElementById('toast-msg').textContent = data.success ? t('toast.success') : (t('toast.error') + (data.error||''));
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 4000);
      closeQuoteModal();
      document.getElementById('gtel-quote-form').reset();
    })
    .catch(() => alert('Erreur de connexion avec le serveur PHP.'));
}

/* ================= SCROLL REVEAL ================= */
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

/* ================= HEADER SHOW/HIDE CTA on scroll (desktop) ================= */
const ctaDesktop = document.getElementById('cta-desktop');
function syncCta(){ ctaDesktop.style.display = window.innerWidth >= 900 ? 'inline-flex' : 'none'; }
syncCta(); window.addEventListener('resize', syncCta);

/* ================= I18N ================= */
const translations = {
  fr: {
    'nav.home':'Accueil','nav.solutions':'Solutions','nav.datacenter':'Datacenter','nav.cyber':'Cybersécurité','nav.video':'Vidéosurveillance','nav.tel':'Téléphonie IP','nav.contact':'Nous contacter',
    'lang.choose':'Choisir la langue',
    'ticker.status':'SYSTÈME OPÉRATIONNEL','ticker.uptime':'UPTIME MOYEN CLIENTS : 99.98%','ticker.loc':'CASABLANCA · MAROC','ticker.sla':'SUPERVISION 24/7',
    'hero.badge':"Infrastructure & Réseaux / Datacenter & Salle Serveur",
    'hero.title':'Votre salle serveur, conçue pour ne jamais être <span class="accent">votre point faible</span>.',
    'hero.desc':"Conception, équipements actifs et passifs, alimentation ondulée, climatisation et supervision environnementale. Une salle serveur professionnelle est un système où chaque composant est dimensionné pour les défaillances de tous les autres.",
    'hero.cta':'Auditer ma salle serveur','hero.cta2':'Voir notre périmètre',
    'hero.stat1':'Redondance énergie','hero.stat2':'Supervision active','hero.stat3':'Couches critiques',
    'diag.eyebrow':'Diagnostic Critique','diag.title':"L'importance d'un environnement normé",
    'diag.desc':"Beaucoup d'entreprises hébergent leurs serveurs dans des locaux non conçus pour cet usage : bureau réaffecté, placard ventilé, sous-sol. Les conséquences se manifestent toujours au pire moment.",
    'diag.s1.t':'Climatisation de bureau standard pour des serveurs','diag.s1.d':"La température dépasse les seuils en été. Les serveurs s'arrêtent ou se dégradent prématurément. La durée de vie du matériel est divisée par deux.",
    'diag.s2.t':'Onduleur sous-dimensionné ou inexistant','diag.s2.d':'À chaque micro-coupure, les serveurs redémarrent brutalement. Risque de corruption de données et indisponibilité de plusieurs heures.',
    'diag.s3.t':'Câblage en spaghetti dans la baie','diag.s3.d':'Toute intervention devient un risque. Diagnostiquer un incident prend des heures. Les pannes se multiplient à chaque manipulation.',
    'diag.s4.t':'Aucune supervision environnementale','diag.s4.d':"Une fuite d'eau ou un départ de feu nocturne n'est détecté que le lendemain. Les pertes peuvent dépasser 100 000 MAD pour une PME.",
    'diag.s5.t':'Salle serveur accessible à tous','diag.s5.d':'N\'importe qui peut débrancher, modifier, voler. Aucune traçabilité. Risque opérationnel et de conformité.',
    'diag.swipe':'Glisser pour voir les 5 risques',
    'scope.eyebrow':"Périmètre d'Intervention",'scope.title':'Expertise Datacenter','scope.desc':"Nous concevons l'habitat critique de vos données, du génie civil technique à l'intelligence de supervision.",
    'scope.1.t':'Conception de salle serveur','scope.1.d':"Étude thermique, calcul de charge, plan d'implantation des baies.",
    'scope.2.t':'Baies & câblage structuré','scope.2.d':'Racks, panneaux de brassage, organisation, étiquetage normé.',
    'scope.3.t':'Alimentation ondulée (UPS)','scope.3.d':'Onduleurs en ligne, redondance N+1, autonomie calculée selon le scénario de coupure.',
    'scope.4.t':'Climatisation de précision','scope.4.d':"Climatiseurs dédiés, gestion des points chauds, contrôle d'humidité.",
    'scope.5.t':'Supervision environnementale','scope.5.d':"Capteurs température, humidité, fumée, fuite d'eau, accès physique.",
    'scope.6.t':'Sécurité physique','scope.6.d':"Contrôle d'accès, vidéosurveillance dédiée, détection incendie.",
    'scope.swipe':'Glisser pour explorer les 6 modules',
    'layers.eyebrow':'Notre Ingénierie','layers.title':'Notre approche : la salle comme système','layers.desc':"Une salle serveur professionnelle repose sur des couches indépendantes mais coordonnées. Si l'une cède, les autres tiennent.",
    'layers.1.t':'Couche énergie','layers.1.d':"Onduleurs redondés N+1, by-pass automatique, lien vers groupe électrogène si site critique.",
    'layers.2.t':'Couche thermique','layers.2.d':'Climatisation dédiée, surdimensionnée. Allées chaudes/froides séparées et flux d\'air optimisés.',
    'layers.3.t':'Couche supervision','layers.3.d':'Sondes environnementales sur tous les paramètres critiques. Alertes SMS et email 24/7 en temps réel.',
    'method.eyebrow':'Notre Démarche','method.title':'Méthodologie','method.desc':'Une démarche structurée pour établir, déployer et superviser une salle serveur résistante et opérationnelle.',
    'method.1.t':'Audit thermique et électrique','method.1.d':"Nous mesurons l'existant : charge électrique réelle, dissipation thermique, points de défaillance, capacité résiduelle. Cet audit détermine si une rénovation suffit ou si une nouvelle salle est nécessaire.",
    'method.2.t':'Conception','method.2.d':"Plan d'implantation, calcul de redondance, dimensionnement de la climatisation, schéma électrique. Livrable : un dossier de conception détaillé auditable par un tiers indépendant.",
    'method.3.t':'Déploiement coordonné','method.3.d':"Coordination avec les corps d'état (électricien, climaticien, sécurité incendie). Mise en service par phases pour préserver la continuité d'activité. Tests de bascule sur onduleurs et de coupure simulée.",
    'method.4.t':'Mise en supervision','method.4.d':"Activation de la supervision environnementale, paramétrage des seuils d'alerte, formation de vos équipes.",
    'faq.eyebrow':'Questions des décideurs','faq.title':'Vos questions sur la salle serveur',
    'faq.1.q':'Faut-il refaire toute la salle ou peut-on rénover par étapes ?','faq.1.a':"Cela dépend de l'audit initial. Dans 60% des cas, une rénovation par phases (urbanisation modulaire) est possible : nous remplaçons la climatisation en priorité, puis le système d'onduleurs (UPS), et enfin le recâblage des baies. Cette approche permet d'étaler l'investissement financier sur plusieurs mois tout en évitant l'arrêt critique de l'activité (zero downtime).",
    'faq.2.q':"Quelle autonomie d'onduleur (UPS) est raisonnable pour mon Datacenter ?",'faq.2.a':"L'autonomie standard d'un onduleur dimensionné pour une entreprise se situe entre 15 et 30 minutes. Le but de l'onduleur n'est pas de tenir des heures lors d'une coupure, mais de permettre un arrêt propre et sécurisé des serveurs pour éviter la corruption des données, ou de donner le temps à un groupe électrogène de prendre le relais. Si votre activité exige un uptime de 100%, nous recommandons le couplage avec un groupe électrogène.",
    'faq.3.q':'Pouvez-vous intervenir (câblage et serveurs) en site occupé ?','faq.3.a':"Absolument. C'est même la majorité de nos interventions. Le déménagement ou la restructuration d'une salle serveur pour une entreprise en pleine activité exige une planification extrêmement rigoureuse : bascule (failover) progressive, travail de nuit ou lors des fenêtres de maintenance hors heures critiques. Notre équipe garantit la continuité de votre production.",
    'cta.title':'Protégez vos serveurs avant le prochain incident','cta.desc':"Auditer votre salle serveur thermique et électrique pour détecter les faiblesses avant qu'elles n'affectent votre production.",'cta.btn':'Demander un audit thermique & électrique →',
    'footer.desc':'Expert marocain en solutions réseaux, cyber-intelligence et infrastructures de télécommunications intégrées à Casablanca et sur tout le royaume.',
    'footer.nav':'Navigation','footer.diag':'Demander un diagnostic','footer.contact':'Informations de contact','footer.langs':'Langues',
    'footer.rights':'© 2025 GTEL. Tous droits réservés. Intégré avec expertise au Maroc.','footer.legal':'Mentions Légales','footer.privacy':'Politique de Confidentialité',
    'modal.badge':"Demande d'étude & contact",'modal.title':'Demande de Devis','modal.desc':"Demandez l'intervention d'un ingénieur GTEL. Traitement sous 24h.",
    'modal.name':'Nom / Entreprise *','modal.phone':'Téléphone *','modal.email':'Email *','modal.service':'Solution ciblée','modal.submit':'Envoyer',
    'toast.success':'✓ Demande envoyée avec succès !','toast.error':'⚠ Erreur : '
  },
  en: {
    'nav.home':'Home','nav.solutions':'Solutions','nav.datacenter':'Datacenter','nav.cyber':'Cybersecurity','nav.video':'Video Surveillance','nav.tel':'IP Telephony','nav.contact':'Contact us',
    'lang.choose':'Choose language',
    'ticker.status':'SYSTEM OPERATIONAL','ticker.uptime':'AVERAGE CLIENT UPTIME: 99.98%','ticker.loc':'CASABLANCA · MOROCCO','ticker.sla':'24/7 MONITORING',
    'hero.badge':'Infrastructure & Networks / Datacenter & Server Room',
    'hero.title':'Your server room, engineered to never be <span class="accent">your weak point</span>.',
    'hero.desc':"Design, active and passive equipment, UPS power, cooling and environmental monitoring. A professional server room is a system where every component is sized for the failure of all the others.",
    'hero.cta':'Audit my server room','hero.cta2':'View our scope',
    'hero.stat1':'Power redundancy','hero.stat2':'Active monitoring','hero.stat3':'Critical layers',
    'diag.eyebrow':'Critical Diagnosis','diag.title':'Why a compliant environment matters',
    'diag.desc':'Many companies host their servers in spaces never designed for it: a repurposed office, a ventilated closet, a basement. The consequences always surface at the worst possible time.',
    'diag.s1.t':'Standard office AC used for servers','diag.s1.d':'Temperature exceeds safe thresholds in summer. Servers shut down or degrade prematurely. Hardware lifespan is cut in half.',
    'diag.s2.t':'Undersized or missing UPS','diag.s2.d':'Every micro-outage causes a brutal server restart. Risk of data corruption and downtime lasting several hours.',
    'diag.s3.t':'Spaghetti cabling in the rack','diag.s3.d':'Every intervention becomes a risk. Diagnosing an incident takes hours. Failures multiply with every manipulation.',
    'diag.s4.t':'No environmental monitoring','diag.s4.d':'A water leak or a night-time fire start is only detected the next day. Losses can exceed 100,000 MAD for an SME.',
    'diag.s5.t':'Server room accessible to everyone','diag.s5.d':'Anyone can unplug, tamper, or steal. No traceability. Operational and compliance risk.',
    'diag.swipe':'Swipe to see the 5 risks',
    'scope.eyebrow':'Scope of Intervention','scope.title':'Datacenter Expertise','scope.desc':'We engineer the critical habitat of your data, from technical civil works to supervision intelligence.',
    'scope.1.t':'Server room design','scope.1.d':'Thermal study, load calculation, rack layout plan.',
    'scope.2.t':'Racks & structured cabling','scope.2.d':'Racks, patch panels, organization, standardized labeling.',
    'scope.3.t':'UPS power supply','scope.3.d':'Online UPS units, N+1 redundancy, autonomy calculated for the outage scenario.',
    'scope.4.t':'Precision cooling','scope.4.d':'Dedicated air conditioners, hot-spot management, humidity control.',
    'scope.5.t':'Environmental monitoring','scope.5.d':'Temperature, humidity, smoke, water leak and physical access sensors.',
    'scope.6.t':'Physical security','scope.6.d':'Access control, dedicated video surveillance, fire detection.',
    'scope.swipe':'Swipe to explore the 6 modules',
    'layers.eyebrow':'Our Engineering','layers.title':'Our approach: the room as a system','layers.desc':'A professional server room relies on independent but coordinated layers. If one fails, the others hold.',
    'layers.1.t':'Power layer','layers.1.d':'N+1 redundant UPS units, automatic bypass, link to a generator for critical sites.',
    'layers.2.t':'Thermal layer','layers.2.d':'Dedicated, oversized cooling. Separated hot/cold aisles and optimized airflow.',
    'layers.3.t':'Supervision layer','layers.3.d':'Environmental sensors on all critical parameters. Real-time SMS and email alerts, 24/7.',
    'method.eyebrow':'Our Process','method.title':'Methodology','method.desc':'A structured approach to build, deploy and monitor a resilient, operational server room.',
    'method.1.t':'Thermal and electrical audit','method.1.d':'We measure what exists: real electrical load, thermal dissipation, failure points, remaining capacity. This audit determines whether a renovation is enough or a new room is required.',
    'method.2.t':'Design','method.2.d':'Layout plan, redundancy calculation, cooling sizing, electrical diagram. Deliverable: a detailed design file that can be audited by an independent third party.',
    'method.3.t':'Coordinated deployment','method.3.d':'Coordination with all trades (electrician, HVAC technician, fire safety). Phased commissioning to preserve business continuity. Failover tests on UPS units and simulated outages.',
    'method.4.t':'Supervision go-live','method.4.d':'Activation of environmental monitoring, alert threshold configuration, training for your teams.',
    'faq.eyebrow':"Decision-makers' questions",'faq.title':'Your questions about the server room',
    'faq.1.q':'Should we rebuild the whole room or renovate in stages?','faq.1.a':'It depends on the initial audit. In 60% of cases, a phased renovation (modular upgrade) is possible: we replace cooling first, then the UPS system, and finally the rack recabling. This approach spreads the investment over several months while avoiding critical business downtime (zero downtime).',
    'faq.2.q':'What UPS autonomy is reasonable for my Datacenter?','faq.2.a':"Standard UPS autonomy sized for a business is between 15 and 30 minutes. The goal of a UPS is not to last hours during an outage, but to allow a clean, safe server shutdown to avoid data corruption, or to give a generator time to take over. If your business requires 100% uptime, we recommend pairing it with a generator.",
    'faq.3.q':'Can you work (cabling and servers) on an occupied site?','faq.3.a':"Absolutely. It's actually the majority of our interventions. Relocating or restructuring a server room for an active business requires extremely rigorous planning: progressive failover, night work or maintenance windows outside critical hours. Our team guarantees the continuity of your production.",
    'cta.title':'Protect your servers before the next incident','cta.desc':'Audit your server room thermally and electrically to detect weaknesses before they affect your production.','cta.btn':'Request a thermal & electrical audit →',
    'footer.desc':'Moroccan expert in network solutions, cyber-intelligence and integrated telecommunications infrastructure across Casablanca and the whole kingdom.',
    'footer.nav':'Navigation','footer.diag':'Request a diagnosis','footer.contact':'Contact information','footer.langs':'Languages',
    'footer.rights':'© 2025 GTEL. All rights reserved. Integrated with expertise in Morocco.','footer.legal':'Legal Notice','footer.privacy':'Privacy Policy',
    'modal.badge':'Consultation & contact request','modal.title':'Request a Quote','modal.desc':'Request the intervention of a GTEL engineer. Processed within 24h.',
    'modal.name':'Name / Company *','modal.phone':'Phone *','modal.email':'Email *','modal.service':'Targeted solution','modal.submit':'Send',
    'toast.success':'✓ Request sent successfully!','toast.error':'⚠ Error: '
  },
  ar: {
    'nav.home':'الرئيسية','nav.solutions':'الحلول','nav.datacenter':'مركز البيانات','nav.cyber':'الأمن السيبراني','nav.video':'المراقبة بالفيديو','nav.tel':'الهاتف عبر الإنترنت','nav.contact':'اتصل بنا',
    'lang.choose':'اختر اللغة',
    'ticker.status':'النظام يعمل بشكل طبيعي','ticker.uptime':'متوسط توفر النظام لدى العملاء: 99.98%','ticker.loc':'الدار البيضاء · المغرب','ticker.sla':'إشراف على مدار الساعة',
    'hero.badge':'البنية التحتية والشبكات / مركز البيانات وغرفة الخوادم',
    'hero.title':'غرفة الخوادم الخاصة بك، مصممة لكي لا تكون أبداً <span class="accent">نقطة ضعفك</span>.',
    'hero.desc':'التصميم، المعدات النشطة والسلبية، التغذية الكهربائية غير المنقطعة، التبريد والإشراف البيئي. غرفة الخوادم الاحترافية هي نظام تُحسب فيه كل مكوّن لمواجهة أعطال جميع المكوّنات الأخرى.',
    'hero.cta':'تدقيق غرفة الخوادم','hero.cta2':'اطّلع على مجال تدخلنا',
    'hero.stat1':'ازدواجية الطاقة','hero.stat2':'إشراف نشط','hero.stat3':'طبقات حساسة',
    'diag.eyebrow':'تشخيص حاسم','diag.title':'أهمية بيئة معيارية',
    'diag.desc':'تستضيف العديد من الشركات خوادمها في أماكن لم تُصمّم لهذا الغرض: مكتب مُعاد تخصيصه، خزانة مهوّاة، أو قبو. وتظهر العواقب دائماً في أسوأ لحظة.',
    'diag.s1.t':'تكييف مكتبي عادي للخوادم','diag.s1.d':'ترتفع الحرارة فوق الحدود المسموحة صيفاً. تتوقف الخوادم أو تتدهور قبل الأوان. يُقتصر عمر المعدات إلى النصف.',
    'diag.s2.t':'مُموّن طاقة غير كافٍ أو منعدم','diag.s2.d':'مع كل انقطاع دقيق، تُعيد الخوادم التشغيل بشكل مفاجئ. خطر تلف البيانات وتوقف قد يستمر لساعات.',
    'diag.s3.t':'كابلات فوضوية داخل الخزانة','diag.s3.d':'يصبح أي تدخل محفوفاً بالمخاطر. يستغرق تشخيص أي عطل ساعات. تتضاعف الأعطال مع كل تدخل.',
    'diag.s4.t':'غياب الإشراف البيئي','diag.s4.d':'لا يتم اكتشاف تسرب مياه أو بداية حريق ليلاً إلا في اليوم التالي. قد تتجاوز الخسائر 100.000 درهم لمقاولة صغيرة.',
    'diag.s5.t':'غرفة خوادم متاحة للجميع','diag.s5.d':'يمكن لأي شخص فصل الأجهزة أو التلاعب بها أو سرقتها. دون أي تتبع. خطر تشغيلي وامتثالي.',
    'diag.swipe':'اسحب لعرض المخاطر الخمسة',
    'scope.eyebrow':'مجال التدخل','scope.title':'خبرة مركز البيانات','scope.desc':'نصمم البيئة الحيوية لبياناتكم، من الأشغال المدنية التقنية إلى ذكاء الإشراف.',
    'scope.1.t':'تصميم غرفة الخوادم','scope.1.d':'دراسة حرارية، حساب الأحمال، مخطط توزيع الخزانات.',
    'scope.2.t':'الخزانات والكابلات المنظمة','scope.2.d':'خزانات، لوحات توزيع، تنظيم، ووسم معياري.',
    'scope.3.t':'التغذية غير المنقطعة (UPS)','scope.3.d':'مُموّنات طاقة خطية، ازدواجية N+1، استقلالية محسوبة حسب سيناريو الانقطاع.',
    'scope.4.t':'تبريد دقيق','scope.4.d':'مكيفات مخصصة، إدارة النقاط الساخنة، التحكم في الرطوبة.',
    'scope.5.t':'الإشراف البيئي','scope.5.d':'حساسات الحرارة، الرطوبة، الدخان، تسرب المياه، والولوج الفعلي.',
    'scope.6.t':'الأمن المادي','scope.6.d':'مراقبة الولوج، مراقبة بالفيديو مخصصة، كشف الحرائق.',
    'scope.swipe':'اسحب لاستكشاف الوحدات الستة',
    'layers.eyebrow':'هندستنا','layers.title':'مقاربتنا: الغرفة كنظام متكامل','layers.desc':'تعتمد غرفة الخوادم الاحترافية على طبقات مستقلة لكنها منسّقة. إن فشلت إحداها، تبقى البقية صامدة.',
    'layers.1.t':'طبقة الطاقة','layers.1.d':'مُموّنات طاقة مزدوجة N+1، تحويل تلقائي، وربط بمولد كهربائي للمواقع الحساسة.',
    'layers.2.t':'الطبقة الحرارية','layers.2.d':'تبريد مخصص وذو قدرة إضافية. ممرات ساخنة وباردة منفصلة وتدفق هواء محسّن.',
    'layers.3.t':'طبقة الإشراف','layers.3.d':'حساسات بيئية على جميع المعايير الحرجة. تنبيهات فورية عبر الرسائل والبريد الإلكتروني على مدار الساعة.',
    'method.eyebrow':'منهجيتنا','method.title':'المنهجية','method.desc':'مقاربة منظمة لإنشاء ونشر ومراقبة غرفة خوادم قوية وتشغيلية.',
    'method.1.t':'تدقيق حراري وكهربائي','method.1.d':'نقيس الوضع الحالي: الحمل الكهربائي الفعلي، التبديد الحراري، نقاط الضعف، والقدرة المتبقية. يحدد هذا التدقيق ما إذا كان الترميم كافياً أو تلزم غرفة جديدة.',
    'method.2.t':'التصميم','method.2.d':'مخطط التوزيع، حساب الازدواجية، تحديد قدرة التبريد، المخطط الكهربائي. المُخرج: ملف تصميم مفصل قابل للتدقيق من طرف ثالث مستقل.',
    'method.3.t':'نشر منسّق','method.3.d':'التنسيق مع مختلف الحرفيين (كهربائي، فني تكييف، سلامة من الحرائق). التشغيل على مراحل للحفاظ على استمرارية النشاط. اختبارات تحويل على المُموّنات وانقطاع محاكى.',
    'method.4.t':'تفعيل الإشراف','method.4.d':'تفعيل الإشراف البيئي، ضبط عتبات التنبيه، وتكوين فرقكم.',
    'faq.eyebrow':'أسئلة صناع القرار','faq.title':'أسئلتكم حول غرفة الخوادم',
    'faq.1.q':'هل يجب إعادة بناء الغرفة بالكامل أم يمكن الترميم على مراحل؟','faq.1.a':'يعتمد ذلك على التدقيق الأولي. في 60% من الحالات، يكون الترميم على مراحل ممكناً: نستبدل التبريد أولاً، ثم نظام مُموّنات الطاقة، وأخيراً إعادة تمديد الكابلات. تتيح هذه المقاربة توزيع الاستثمار المالي على عدة أشهر مع تجنب التوقف الحرج للنشاط.',
    'faq.2.q':'ما هي الاستقلالية المعقولة لمُموّن الطاقة الخاص بمركز بياناتي؟','faq.2.a':'تتراوح الاستقلالية القياسية لمُموّن طاقة مُخصص لشركة بين 15 و30 دقيقة. الهدف من المُموّن ليس الصمود لساعات أثناء الانقطاع، بل السماح بإيقاف تشغيل آمن ونظيف للخوادم لتجنب تلف البيانات، أو منح الوقت لمولد كهربائي لتولي المهمة. إذا كان نشاطكم يتطلب توفراً بنسبة 100%، نوصي بالجمع مع مولد كهربائي.',
    'faq.3.q':'هل يمكنكم التدخل (الكابلات والخوادم) في موقع مأهول؟','faq.3.a':'بالتأكيد. بل إن ذلك يمثل غالبية تدخلاتنا. يتطلب نقل أو إعادة هيكلة غرفة خوادم لشركة نشطة تخطيطاً دقيقاً للغاية: تحويل تدريجي، عمل ليلي أو خلال نوافذ الصيانة خارج ساعات الذروة. يضمن فريقنا استمرارية إنتاجكم.',
    'cta.title':'احموا خوادمكم قبل الحادث القادم','cta.desc':'قوموا بتدقيق غرفة الخوادم حرارياً وكهربائياً لاكتشاف نقاط الضعف قبل أن تؤثر على إنتاجكم.','cta.btn':'← طلب تدقيق حراري وكهربائي',
    'footer.desc':'خبير مغربي في حلول الشبكات والذكاء السيبراني والبنية التحتية للاتصالات المتكاملة في الدار البيضاء وعبر المملكة.',
    'footer.nav':'التصفح','footer.diag':'طلب تشخيص','footer.contact':'معلومات الاتصال','footer.langs':'اللغات',
    'footer.rights':'© 2025 GTEL. جميع الحقوق محفوظة. مُنجز بخبرة في المغرب.','footer.legal':'الإشعار القانوني','footer.privacy':'سياسة الخصوصية',
    'modal.badge':'طلب دراسة واتصال','modal.title':'طلب عرض سعر','modal.desc':'اطلبوا تدخل مهندس من GTEL. المعالجة خلال 24 ساعة.',
    'modal.name':'الاسم / الشركة *','modal.phone':'الهاتف *','modal.email':'البريد الإلكتروني *','modal.service':'الحل المستهدف','modal.submit':'إرسال',
    'toast.success':'✓ تم إرسال الطلب بنجاح!','toast.error':'⚠ خطأ: '
  }
};

let currentLang = 'fr';
function t(key){ return (translations[currentLang] && translations[currentLang][key]) || key; }

function changeLanguage(lang){
  currentLang = lang;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if(val.includes('<span')) el.innerHTML = val; else el.textContent = val;
  });

  const flags = { fr:'🇫🇷', ar:'🇲🇦', en:'🇬🇧' };
  document.getElementById('lang-flag').textContent = flags[lang];
  document.getElementById('lang-code').textContent = lang.toUpperCase();
  document.querySelectorAll('.lang-menu button, .lang-chip').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  langBox.classList.remove('open');
  try{ localStorage.setItem('gtel-lang', lang); }catch(e){}
}

document.querySelectorAll('[data-lang]').forEach(btn => btn.addEventListener('click', () => changeLanguage(btn.dataset.lang)));

(function initLang(){
  let saved;
  try{ saved = localStorage.getItem('gtel-lang'); }catch(e){}
  changeLanguage(saved || 'fr');
})();