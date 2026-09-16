// GTEL — Catalogue product data (FR / EN / AR)
const GTEL_CATEGORIES = {
  "server": {
    "fr": "Serveurs & Stockage",
    "en": "Servers & Storage",
    "ar": "الخوادم والتخزين"
  },
  "network": {
    "fr": "Réseaux & Sécurité",
    "en": "Networking & Security",
    "ar": "الشبكات والأمن"
  },
  "comms": {
    "fr": "Collaboration & VoIP",
    "en": "Collaboration & VoIP",
    "ar": "التعاون والاتصالات"
  },
  "cctv": {
    "fr": "Contrôle d'Accès & CCTV",
    "en": "Access Control & CCTV",
    "ar": "مراقبة الدخول والكاميرات"
  }
};

const GTEL_PRODUCTS = [
  {
    "id": 1,
    "category": "server",
    "brand": "HPE",
    "img": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
    "model": "DL380 Gen10 Plus 4314",
    "status": {
      "fr": "En Stock",
      "en": "In Stock",
      "ar": "متوفر بالمخزون"
    },
    "statusClass": "in-stock",
    "title": {
      "fr": "HPE ProLiant DL380 Gen10 Plus (P55247-B21)",
      "en": "HPE ProLiant DL380 Gen10 Plus (P55247-B21)",
      "ar": "HPE ProLiant DL380 Gen10 Plus (P55247-B21)"
    },
    "desc": {
      "fr": "Serveur rack d'entreprise hautement disponible équipé d'un processeur Intel Xeon 4314 à 16 cœurs, de 32 Go RDIMM et de contrôleurs de stockage robustes.",
      "en": "A highly available enterprise rack server powered by a 16-core Intel Xeon 4314 processor, 32 GB RDIMM memory, and robust storage controllers.",
      "ar": "خادم رفوف (رَاك) للمقاولات بتوافرية عالية، مزوّد بمعالج Intel Xeon 4314 بـ16 نواة، وذاكرة 32 غيغا RDIMM، ووحدات تحكم تخزين قوية."
    },
    "specs": [
      {
        "label": {
          "fr": "Processeur :",
          "en": "Processor:",
          "ar": "المعالج:"
        },
        "value": {
          "fr": "Intel Xeon 4314 (16 Cœurs / 2.4 GHz)",
          "en": "Intel Xeon 4314 (16 Cores / 2.4 GHz)",
          "ar": "Intel Xeon 4314 (16 نواة / 2.4 غيغاهرتز)"
        }
      },
      {
        "label": {
          "fr": "Mémoire :",
          "en": "Memory:",
          "ar": "الذاكرة:"
        },
        "value": {
          "fr": "32 Go RDIMM DDR4 (Double Rangée)",
          "en": "32 GB RDIMM DDR4 (Dual Rank)",
          "ar": "32 غيغا RDIMM DDR4 (صف مزدوج)"
        }
      },
      {
        "label": {
          "fr": "Baies :",
          "en": "Bays:",
          "ar": "الفتحات:"
        },
        "value": {
          "fr": "Châssis 8 SFF SAS/SATA/NVMe",
          "en": "8-Bay SFF SAS/SATA/NVMe Chassis",
          "ar": "هيكل 8 فتحات SFF لـ SAS/SATA/NVMe"
        }
      }
    ],
    "retail": "71 200 DH",
    "final": "58 900 DH"
  },
  {
    "id": 2,
    "category": "comms",
    "brand": "Samsung",
    "img": "https://images.unsplash.com/photo-1545156521-77bd85671d30?auto=format&fit=crop&w=600&q=80",
    "model": "Freestyle 2nd Gen (SP-LFF3CLAX)",
    "status": {
      "fr": "En Stock",
      "en": "In Stock",
      "ar": "متوفر بالمخزون"
    },
    "statusClass": "in-stock",
    "title": {
      "fr": "Vidéoprojecteur Samsung Freestyle (SP-LFF3CLAX)",
      "en": "Samsung Freestyle Projector (SP-LFF3CLAX)",
      "ar": "جهاز عرض Samsung Freestyle (SP-LFF3CLAX)"
    },
    "desc": {
      "fr": "Vidéoprojecteur LED intelligent ultra-compact mobile avec mise au point automatique et ajustement trapézoïdal pour afficher une image géante de 100 pouces.",
      "en": "An ultra-compact, portable smart LED projector with auto-focus and keystone correction, capable of a giant 100-inch display.",
      "ar": "جهاز عرض LED ذكي فائق الصغر وقابل للتنقل، بتركيز تلقائي وتصحيح شبه منحرف، لعرض صورة عملاقة تصل إلى 100 بوصة."
    },
    "specs": [
      {
        "label": {
          "fr": "Taille Image :",
          "en": "Image Size:",
          "ar": "حجم الصورة:"
        },
        "value": {
          "fr": "Jusqu'à 100 pouces de diagonale",
          "en": "Up to 100 inches diagonal",
          "ar": "حتى 100 بوصة قطريًا"
        }
      },
      {
        "label": {
          "fr": "Résolution :",
          "en": "Resolution:",
          "ar": "الدقة:"
        },
        "value": {
          "fr": "Full HD (1920 x 1080) Smart LED",
          "en": "Full HD (1920 x 1080) Smart LED",
          "ar": "Full HD (1920 × 1080) بتقنية LED ذكية"
        }
      },
      {
        "label": {
          "fr": "Interface :",
          "en": "Interface:",
          "ar": "الواجهة:"
        },
        "value": {
          "fr": "Smart TV Tizen / Connexion Sans Fil",
          "en": "Tizen Smart TV / Wireless Connection",
          "ar": "نظام Tizen الذكي / اتصال لاسلكي"
        }
      }
    ],
    "retail": "11 200 DH",
    "final": "9 400 DH"
  },
  {
    "id": 3,
    "category": "comms",
    "brand": "HP",
    "img": "https://images.unsplash.com/photo-1496181130204-7552cc145cdb?auto=format&fit=crop&w=600&q=80",
    "model": "ProBook 460 G11 (A38F5ET-BH4)",
    "status": {
      "fr": "En Stock",
      "en": "In Stock",
      "ar": "متوفر بالمخزون"
    },
    "statusClass": "in-stock",
    "title": {
      "fr": "HP ProBook 460 G11 Intel Ultra 5",
      "en": "HP ProBook 460 G11 Intel Ultra 5",
      "ar": "HP ProBook 460 G11 Intel Ultra 5"
    },
    "desc": {
      "fr": "Ordinateur portable d'affaires robuste de 16 pouces avec processeur de dernière génération Intel Ultra 5, assurant performances optimales et cybersécurité.",
      "en": "A rugged 16-inch business laptop with the latest-generation Intel Ultra 5 processor, delivering top performance and built-in cybersecurity.",
      "ar": "حاسوب محمول للأعمال بشاشة 16 بوصة ومتانة عالية، بمعالج Intel Ultra 5 من الجيل الأحدث، يوفر أداءً مثاليًا وأمنًا سيبرانيًا."
    },
    "specs": [
      {
        "label": {
          "fr": "Processeur :",
          "en": "Processor:",
          "ar": "المعالج:"
        },
        "value": {
          "fr": "Intel Ultra 5 125U (12 Cœurs / AI Hybrid)",
          "en": "Intel Ultra 5 125U (12 Cores / AI Hybrid)",
          "ar": "Intel Ultra 5 125U (12 نواة / AI Hybrid)"
        }
      },
      {
        "label": {
          "fr": "RAM & SSD :",
          "en": "RAM & SSD:",
          "ar": "الذاكرة والقرص:"
        },
        "value": {
          "fr": "8 Go DDR5 / 512 Go SSD PCIe NVMe",
          "en": "8 GB DDR5 / 512 GB SSD PCIe NVMe",
          "ar": "8 غيغا DDR5 / قرص 512 غيغا SSD PCIe NVMe"
        }
      },
      {
        "label": {
          "fr": "Écran & OS :",
          "en": "Display & OS:",
          "ar": "الشاشة والنظام:"
        },
        "value": {
          "fr": "16\" WUXGA Slim-Bezel / FreeDOS (2 ans gar)",
          "en": "16\" WUXGA Slim-Bezel / FreeDOS (2-yr warranty)",
          "ar": "شاشة 16 بوصة WUXGA رفيعة الإطار / FreeDOS (ضمان سنتين)"
        }
      }
    ],
    "retail": "9 900 DH",
    "final": "8 200 DH"
  },
  {
    "id": 4,
    "category": "server",
    "brand": "HPE",
    "img": "https://images.unsplash.com/photo-1547082299-de196ea013d6?auto=format&fit=crop&w=600&q=80",
    "model": "ML30 Gen11 E-2414",
    "status": {
      "fr": "En Stock",
      "en": "In Stock",
      "ar": "متوفر بالمخزون"
    },
    "statusClass": "in-stock",
    "title": {
      "fr": "HPE ProLiant ML30 Gen11 (P65093-421)",
      "en": "HPE ProLiant ML30 Gen11 (P65093-421)",
      "ar": "HPE ProLiant ML30 Gen11 (P65093-421)"
    },
    "desc": {
      "fr": "Serveur tour résistant, évolutif et économique, optimisé pour les bases de données d'agences, serveurs d'impression et sauvegarde sur place.",
      "en": "A resilient, scalable and cost-effective tower server, optimized for branch-office databases, print servers, and on-site backup.",
      "ar": "خادم برجي متين وقابل للتوسع واقتصادي، مُحسّن لقواعد بيانات الفروع وخوادم الطباعة والنسخ الاحتياطي الموقعي."
    },
    "specs": [
      {
        "label": {
          "fr": "Processeur :",
          "en": "Processor:",
          "ar": "المعالج:"
        },
        "value": {
          "fr": "Intel Xeon E-2414 (4 Cœurs / 2.6 GHz)",
          "en": "Intel Xeon E-2414 (4 Cores / 2.6 GHz)",
          "ar": "Intel Xeon E-2414 (4 أنوية / 2.6 غيغاهرتز)"
        }
      },
      {
        "label": {
          "fr": "Mémoire :",
          "en": "Memory:",
          "ar": "الذاكرة:"
        },
        "value": {
          "fr": "16 Go UDIMM DDR5 SDRAM",
          "en": "16 GB UDIMM DDR5 SDRAM",
          "ar": "16 غيغا UDIMM DDR5 SDRAM"
        }
      },
      {
        "label": {
          "fr": "Format :",
          "en": "Form Factor:",
          "ar": "الشكل:"
        },
        "value": {
          "fr": "Tour 4U Haute Densité Compacte",
          "en": "Compact High-Density 4U Tower",
          "ar": "برج 4U مضغوط عالي الكثافة"
        }
      }
    ],
    "retail": "23 900 DH",
    "final": "19 500 DH"
  },
  {
    "id": 5,
    "category": "server",
    "brand": "HPE",
    "img": "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?auto=format&fit=crop&w=600&q=80",
    "model": "DL380 Gen10+ 4309Y",
    "status": {
      "fr": "Sur Commande",
      "en": "On Order",
      "ar": "عند الطلب"
    },
    "statusClass": "on-demand",
    "title": {
      "fr": "HPE ProLiant DL380 (P77170-425)",
      "en": "HPE ProLiant DL380 (P77170-425)",
      "ar": "HPE ProLiant DL380 (P77170-425)"
    },
    "desc": {
      "fr": "Version rack serveur 2U dotée de processeurs Xeon 4309Y à grand cache, conçue pour les charges d'applications cloud locales et virtualisation complexe.",
      "en": "A 2U rack server variant with large-cache Xeon 4309Y processors, built for on-premises cloud workloads and complex virtualization.",
      "ar": "نسخة خادم رفوف بحجم 2U مزوّدة بمعالجات Xeon 4309Y بذاكرة تخزين مؤقت كبيرة، مصمّمة لأحمال السحابة المحلية والفرضنة المعقدة."
    },
    "specs": [
      {
        "label": {
          "fr": "Processeur :",
          "en": "Processor:",
          "ar": "المعالج:"
        },
        "value": {
          "fr": "Intel Xeon Silver 4309Y (8 Cœurs)",
          "en": "Intel Xeon Silver 4309Y (8 Cores)",
          "ar": "Intel Xeon Silver 4309Y (8 أنوية)"
        }
      },
      {
        "label": {
          "fr": "Mémoire :",
          "en": "Memory:",
          "ar": "الذاكرة:"
        },
        "value": {
          "fr": "32 Go RDIMM DDR4 (Double Rangée)",
          "en": "32 GB RDIMM DDR4 (Dual Rank)",
          "ar": "32 غيغا RDIMM DDR4 (صف مزدوج)"
        }
      },
      {
        "label": {
          "fr": "Contrôleur :",
          "en": "Controller:",
          "ar": "وحدة التحكم:"
        },
        "value": {
          "fr": "MR416i-a Gen10+ Raid",
          "en": "MR416i-a Gen10+ RAID",
          "ar": "MR416i-a Gen10+ RAID"
        }
      }
    ],
    "retail": "54 000 DH",
    "final": "46 900 DH"
  },
  {
    "id": 6,
    "category": "server",
    "brand": "ADATA",
    "img": "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80",
    "model": "SU650 SATA (ASU650SS-512GT-R)",
    "status": {
      "fr": "En Stock",
      "en": "In Stock",
      "ar": "متوفر بالمخزون"
    },
    "statusClass": "in-stock",
    "title": {
      "fr": "Disque Dur SSD ADATA 512 Go Internal",
      "en": "ADATA 512 GB Internal SSD Drive",
      "ar": "قرص SSD داخلي من ADATA سعة 512 غيغا"
    },
    "desc": {
      "fr": "Composant de stockage Flash haute vitesse robuste avec algorithmes d'autocorrection d'erreurs, parfait pour revivifier les PC et serveurs de bureau.",
      "en": "A robust, high-speed Flash storage component with error self-correction algorithms, ideal for reviving desktop PCs and servers.",
      "ar": "مكوّن تخزين فلاش قوي وعالي السرعة بخوارزميات تصحيح ذاتي للأخطاء، مثالي لتجديد أداء الحواسيب المكتبية والخوادم."
    },
    "specs": [
      {
        "label": {
          "fr": "Capacité :",
          "en": "Capacity:",
          "ar": "السعة:"
        },
        "value": {
          "fr": "512 Go mémoire SSD haute sécurité",
          "en": "512 GB high-reliability SSD memory",
          "ar": "ذاكرة SSD بسعة 512 غيغا وموثوقية عالية"
        }
      },
      {
        "label": {
          "fr": "Format :",
          "en": "Form Factor:",
          "ar": "الشكل:"
        },
        "value": {
          "fr": "2.5 pouces Standard / SATA III 6Gb/s",
          "en": "Standard 2.5\" / SATA III 6Gb/s",
          "ar": "مقاس قياسي 2.5 بوصة / SATA III بسرعة 6 جيغابت/ث"
        }
      },
      {
        "label": {
          "fr": "Vitesse :",
          "en": "Speed:",
          "ar": "السرعة:"
        },
        "value": {
          "fr": "L : 520 Mo/s - É : 450 Mo/s (NAND 3D)",
          "en": "Read: 520 MB/s - Write: 450 MB/s (3D NAND)",
          "ar": "قراءة: 520 م.ب/ث - كتابة: 450 م.ب/ث (3D NAND)"
        }
      }
    ],
    "retail": "490 DH",
    "final": "390 DH"
  },
  {
    "id": 7,
    "category": "comms",
    "brand": "Epson",
    "img": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
    "model": "EB-W53 WXGA (V11HB57042)",
    "status": {
      "fr": "En Stock",
      "en": "In Stock",
      "ar": "متوفر بالمخزون"
    },
    "statusClass": "in-stock",
    "title": {
      "fr": "Projecteur Epson 3LCD WXGA EB-W53",
      "en": "Epson 3LCD WXGA EB-W53 Projector",
      "ar": "جهاز عرض Epson 3LCD WXGA EB-W53"
    },
    "desc": {
      "fr": "Projecteur de réunion professionnel à technologie 3LCD éclatante, assurant d'excellents rapports de luminosité même dans les environnements éclairés.",
      "en": "A professional meeting-room projector with vivid 3LCD technology, delivering excellent brightness even in well-lit rooms.",
      "ar": "جهاز عرض احترافي لقاعات الاجتماعات بتقنية 3LCD زاهية، يوفر سطوعًا ممتازًا حتى في الأماكن المضاءة."
    },
    "specs": [
      {
        "label": {
          "fr": "Luminosité :",
          "en": "Brightness:",
          "ar": "السطوع:"
        },
        "value": {
          "fr": "4 000 Ansi Lumens Haute Précision",
          "en": "4,000 ANSI Lumens High Precision",
          "ar": "4000 لومن ANSI بدقة عالية"
        }
      },
      {
        "label": {
          "fr": "Résolution :",
          "en": "Resolution:",
          "ar": "الدقة:"
        },
        "value": {
          "fr": "WXGA Widescreen (1280 x 800) HD",
          "en": "WXGA Widescreen (1280 x 800) HD",
          "ar": "WXGA بانورامي (1280 × 800) HD"
        }
      },
      {
        "label": {
          "fr": "Contraste :",
          "en": "Contrast:",
          "ar": "التباين:"
        },
        "value": {
          "fr": "Technologie Active Iris 16 000:1",
          "en": "Active Iris Technology 16,000:1",
          "ar": "تقنية Active Iris بنسبة 16000:1"
        }
      }
    ],
    "retail": "7 800 DH",
    "final": "6 200 DH"
  },
  {
    "id": 8,
    "category": "comms",
    "brand": "Barco",
    "img": "https://images.unsplash.com/photo-1517502884422-41eaaced0168?auto=format&fit=crop&w=600&q=80",
    "model": "CX-50 GEN2 (R9861622EUB2)",
    "status": {
      "fr": "Sur Commande",
      "en": "On Order",
      "ar": "عند الطلب"
    },
    "statusClass": "on-demand",
    "title": {
      "fr": "Système Barco ClickShare CX-50 Gen2",
      "en": "Barco ClickShare CX-50 Gen2 System",
      "ar": "نظام Barco ClickShare CX-50 Gen2"
    },
    "desc": {
      "fr": "Visioconférence BYOD et partage multi-écrans instantané de salle de conseil en un clic sur le bouton transmetteur ou via l'application mobile ClickShare.",
      "en": "BYOD video conferencing and instant multi-screen boardroom sharing at the click of the transmitter button or via the ClickShare mobile app.",
      "ar": "مؤتمرات فيديو BYOD ومشاركة فورية متعددة الشاشات لقاعة الاجتماعات بضغطة زر على جهاز الإرسال أو عبر تطبيق ClickShare."
    },
    "specs": [
      {
        "label": {
          "fr": "Sortie Vidéo :",
          "en": "Video Output:",
          "ar": "مخرج الفيديو:"
        },
        "value": {
          "fr": "4K UHD double-écran (Dual-Display)",
          "en": "4K UHD dual-screen (Dual-Display)",
          "ar": "4K UHD بشاشتين (Dual-Display)"
        }
      },
      {
        "label": {
          "fr": "Boutons :",
          "en": "Buttons:",
          "ar": "الأزرار:"
        },
        "value": {
          "fr": "2x boutons ClickShare USB-C fournis",
          "en": "2x ClickShare USB-C buttons included",
          "ar": "زرّان من ClickShare بمنفذ USB-C مرفقان"
        }
      },
      {
        "label": {
          "fr": "Sécurité :",
          "en": "Security:",
          "ar": "الأمان:"
        },
        "value": {
          "fr": "Cryptage TLS validé sécurité réseau bancaire",
          "en": "TLS encryption validated to banking network security",
          "ar": "تشفير TLS معتمد بمعايير أمان الشبكات المصرفية"
        }
      }
    ],
    "retail": "34 000 DH",
    "final": "28 500 DH"
  },
  {
    "id": 9,
    "category": "network",
    "brand": "Cudy",
    "img": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80",
    "model": "LT400 N300 LTE",
    "status": {
      "fr": "En Stock",
      "en": "In Stock",
      "ar": "متوفر بالمخزون"
    },
    "statusClass": "in-stock",
    "title": {
      "fr": "Routeur Wi-Fi 4G LTE Cudy LT400",
      "en": "Cudy LT400 4G LTE Wi-Fi Router",
      "ar": "راوتر Cudy LT400 واي فاي 4G LTE"
    },
    "desc": {
      "fr": "Routeur Wi-Fi sans fil polyvalent équipé d'un modem 4G LTE Cat 4 intégré et d'une fente micro-SIM pour diffuser de l'internet haut débit.",
      "en": "A versatile wireless Wi-Fi router with a built-in 4G LTE Cat 4 modem and a micro-SIM slot for broadcasting high-speed internet.",
      "ar": "راوتر واي فاي لاسلكي متعدد الاستخدامات بمودم 4G LTE من الفئة 4 مدمج وفتحة شريحة micro-SIM لبث إنترنت عالي السرعة."
    },
    "specs": [
      {
        "label": {
          "fr": "Connectivité :",
          "en": "Connectivity:",
          "ar": "الاتصال:"
        },
        "value": {
          "fr": "Emplacement micro-SIM débloqué tout opérateur",
          "en": "Unlocked micro-SIM slot, any carrier",
          "ar": "فتحة micro-SIM غير مقفلة تعمل مع أي مشغل"
        }
      },
      {
        "label": {
          "fr": "Wifi :",
          "en": "Wi-Fi:",
          "ar": "الواي فاي:"
        },
        "value": {
          "fr": "Vitesse N300 (jusqu'à 300 Mbps à 2.4 GHz)",
          "en": "N300 speed (up to 300 Mbps at 2.4 GHz)",
          "ar": "سرعة N300 (حتى 300 ميغابت/ث على تردد 2.4 غيغاهرتز)"
        }
      },
      {
        "label": {
          "fr": "Antennes :",
          "en": "Antennas:",
          "ar": "الهوائيات:"
        },
        "value": {
          "fr": "4x antennes amovibles 5dBi à gain élevé",
          "en": "4x removable high-gain 5dBi antennas",
          "ar": "4 هوائيات قابلة للفك بكسب عالٍ 5dBi"
        }
      }
    ],
    "retail": "850 DH",
    "final": "650 DH"
  },
  {
    "id": 10,
    "category": "comms",
    "brand": "Acer",
    "img": "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=600&q=80",
    "model": "TravelMate P2 i7 (NX.BLSEF.008)",
    "status": {
      "fr": "En Stock",
      "en": "In Stock",
      "ar": "متوفر بالمخزون"
    },
    "statusClass": "in-stock",
    "title": {
      "fr": "Acer TravelMate P215 Intel Core i7",
      "en": "Acer TravelMate P215 Intel Core i7",
      "ar": "Acer TravelMate P215 Intel Core i7"
    },
    "desc": {
      "fr": "Ordinateur portable professionnel robuste avec processeur i7 à haute performance, cryptage par puce TPM 2.0 matérielle et pavé numérique.",
      "en": "A rugged business laptop with a high-performance i7 processor, hardware TPM 2.0 encryption chip, and a numeric keypad.",
      "ar": "حاسوب محمول للأعمال متين بمعالج i7 عالي الأداء، وشريحة تشفير TPM 2.0 مادية، ولوحة مفاتيح رقمية."
    },
    "specs": [
      {
        "label": {
          "fr": "Processeur :",
          "en": "Processor:",
          "ar": "المعالج:"
        },
        "value": {
          "fr": "Intel Core i7-1165G7 (4 Cœurs / 4.70 GHz)",
          "en": "Intel Core i7-1165G7 (4 Cores / 4.70 GHz)",
          "ar": "Intel Core i7-1165G7 (4 أنوية / 4.70 غيغاهرتز)"
        }
      },
      {
        "label": {
          "fr": "Mémoire :",
          "en": "Memory:",
          "ar": "الذاكرة:"
        },
        "value": {
          "fr": "16 Go DDR4 SDRAM / 512 Go SSD PCIe NVMe",
          "en": "16 GB DDR4 SDRAM / 512 GB SSD PCIe NVMe",
          "ar": "16 غيغا DDR4 SDRAM / قرص 512 غيغا SSD PCIe NVMe"
        }
      },
      {
        "label": {
          "fr": "Solidité :",
          "en": "Durability:",
          "ar": "المتانة:"
        },
        "value": {
          "fr": "Châssis conforme aux normes militaires US",
          "en": "Chassis compliant with US military standards",
          "ar": "هيكل مطابق للمعايير العسكرية الأمريكية"
        }
      }
    ],
    "retail": "10 500 DH",
    "final": "8 900 DH"
  },
  {
    "id": 11,
    "category": "comms",
    "brand": "Acer",
    "img": "https://images.unsplash.com/photo-1496181130204-7552cc145cdb?auto=format&fit=crop&w=600&q=80",
    "model": "TravelMate P2 i5 (NX.BLSEF.006)",
    "status": {
      "fr": "En Stock",
      "en": "In Stock",
      "ar": "متوفر بالمخزون"
    },
    "statusClass": "in-stock",
    "title": {
      "fr": "Acer TravelMate P215 Intel Core i5",
      "en": "Acer TravelMate P215 Intel Core i5",
      "ar": "Acer TravelMate P215 Intel Core i5"
    },
    "desc": {
      "fr": "L'équilibre parfait pour les secrétariats et les forces de vente d'entreprises, équipé d'un processeur Core i5 et d'un écran FHD de 15.6 pouces.",
      "en": "The perfect balance for office administration and sales teams, with a Core i5 processor and a 15.6-inch FHD display.",
      "ar": "التوازن المثالي لموظفي السكرتارية وفرق المبيعات في الشركات، بمعالج Core i5 وشاشة FHD مقاس 15.6 بوصة."
    },
    "specs": [
      {
        "label": {
          "fr": "Processeur :",
          "en": "Processor:",
          "ar": "المعالج:"
        },
        "value": {
          "fr": "Intel Core i5-1135G7 (4 Cœurs / 4.20 GHz)",
          "en": "Intel Core i5-1135G7 (4 Cores / 4.20 GHz)",
          "ar": "Intel Core i5-1135G7 (4 أنوية / 4.20 غيغاهرتز)"
        }
      },
      {
        "label": {
          "fr": "Mémoire :",
          "en": "Memory:",
          "ar": "الذاكرة:"
        },
        "value": {
          "fr": "16 Go DDR4 SDRAM / 512 Go SSD PCIe",
          "en": "16 GB DDR4 SDRAM / 512 GB SSD PCIe",
          "ar": "16 غيغا DDR4 SDRAM / قرص 512 غيغا SSD PCIe"
        }
      },
      {
        "label": {
          "fr": "Sécurité :",
          "en": "Security:",
          "ar": "الأمان:"
        },
        "value": {
          "fr": "Lecteur d'empreintes digitales / puce TPM",
          "en": "Fingerprint reader / TPM chip",
          "ar": "قارئ بصمة الإصبع / شريحة TPM"
        }
      }
    ],
    "retail": "8 200 DH",
    "final": "6 900 DH"
  },
  {
    "id": 12,
    "category": "comms",
    "brand": "Acer",
    "img": "https://images.unsplash.com/photo-1496181130204-7552cc145cdb?auto=format&fit=crop&w=600&q=80",
    "model": "Extensa 15 i5 (NX.EJBEF.005)",
    "status": {
      "fr": "En Stock",
      "en": "In Stock",
      "ar": "متوفر بالمخزون"
    },
    "statusClass": "in-stock",
    "title": {
      "fr": "Notebook Acer Extensa 15 Intel i5",
      "en": "Acer Extensa 15 Intel i5 Notebook",
      "ar": "حاسوب Acer Extensa 15 Intel i5"
    },
    "desc": {
      "fr": "Un outil bureautique rigoureux pour l'appel de données, équipé d'un clavier ergonomique confortable et de multiples liaisons physiques filaires.",
      "en": "A rigorous office tool for data-entry work, with a comfortable ergonomic keyboard and multiple wired connection ports.",
      "ar": "أداة مكتبية موثوقة لأعمال إدخال البيانات، بلوحة مفاتيح مريحة مريحة ومنافذ اتصال سلكية متعددة."
    },
    "specs": [
      {
        "label": {
          "fr": "Processeur :",
          "en": "Processor:",
          "ar": "المعالج:"
        },
        "value": {
          "fr": "Intel Core i5-1135G7 de 11e Génération",
          "en": "11th-Gen Intel Core i5-1135G7",
          "ar": "Intel Core i5-1135G7 من الجيل الـ11"
        }
      },
      {
        "label": {
          "fr": "RAM & SSD :",
          "en": "RAM & SSD:",
          "ar": "الذاكرة والقرص:"
        },
        "value": {
          "fr": "8 Go DDR4 SDRAM / 512 Go SSD NVMe",
          "en": "8 GB DDR4 SDRAM / 512 GB SSD NVMe",
          "ar": "8 غيغا DDR4 SDRAM / قرص 512 غيغا SSD NVMe"
        }
      },
      {
        "label": {
          "fr": "Connecteurs :",
          "en": "Ports:",
          "ar": "المنافذ:"
        },
        "value": {
          "fr": "Port RJ45 Gigabit, HDMI, Bluetooth, USB 3.2",
          "en": "Gigabit RJ45, HDMI, Bluetooth, USB 3.2 ports",
          "ar": "منفذ RJ45 غيغابت، HDMI، بلوتوث، USB 3.2"
        }
      }
    ],
    "retail": "5 800 DH",
    "final": "4 800 DH"
  },
  {
    "id": 13,
    "category": "comms",
    "brand": "HP",
    "img": "https://images.unsplash.com/photo-1496181130204-7552cc145cdb?auto=format&fit=crop&w=600&q=80",
    "model": "ProBook 440 G10 (B39P2AT)",
    "status": {
      "fr": "En Stock",
      "en": "In Stock",
      "ar": "متوفر بالمخزون"
    },
    "statusClass": "in-stock",
    "title": {
      "fr": "HP ProBook 440 G10 Slim Aluminium",
      "en": "HP ProBook 440 G10 Slim Aluminum",
      "ar": "HP ProBook 440 G10 رفيع من الألمنيوم"
    },
    "desc": {
      "fr": "Ordinateur portable professionnel élégant, compact et léger de 14 pouces avec processeur de pointe Intel de 13e génération, conçu pour la mobilité.",
      "en": "An elegant, compact and lightweight 14-inch business laptop with a cutting-edge 13th-gen Intel processor, built for mobility.",
      "ar": "حاسوب محمول أنيق ومدمج وخفيف مقاس 14 بوصة، بمعالج Intel من الجيل الـ13 المتطور، مصمم للتنقل."
    },
    "specs": [
      {
        "label": {
          "fr": "Processeur :",
          "en": "Processor:",
          "ar": "المعالج:"
        },
        "value": {
          "fr": "Intel Core i5-1335U de 13e Génération",
          "en": "13th-Gen Intel Core i5-1335U",
          "ar": "Intel Core i5-1335U من الجيل الـ13"
        }
      },
      {
        "label": {
          "fr": "RAM & SSD :",
          "en": "RAM & SSD:",
          "ar": "الذاكرة والقرص:"
        },
        "value": {
          "fr": "8 Go DDR4 SDRAM / 512 Go SSD PCIe NVMe",
          "en": "8 GB DDR4 SDRAM / 512 GB SSD PCIe NVMe",
          "ar": "8 غيغا DDR4 SDRAM / قرص 512 غيغا SSD PCIe NVMe"
        }
      },
      {
        "label": {
          "fr": "Écran :",
          "en": "Display:",
          "ar": "الشاشة:"
        },
        "value": {
          "fr": "14\" FHD IPS Antireflet Slim-Bez (2yw)",
          "en": "14\" FHD IPS Anti-Glare Slim-Bezel (2yr warranty)",
          "ar": "شاشة 14 بوصة FHD IPS مضادة للانعكاس رفيعة الإطار (ضمان سنتين)"
        }
      }
    ],
    "retail": "9 900 DH",
    "final": "8 600 DH"
  },
  {
    "id": 14,
    "category": "comms",
    "brand": "Asus",
    "img": "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600&q=80",
    "model": "VP229HF Eye Care (90LM06B0-B05B70)",
    "status": {
      "fr": "En Stock",
      "en": "In Stock",
      "ar": "متوفر بالمخزون"
    },
    "statusClass": "in-stock",
    "title": {
      "fr": "Écran Asus VP229HF IPS 100Hz",
      "en": "Asus VP229HF IPS 100Hz Monitor",
      "ar": "شاشة Asus VP229HF IPS بتردد 100 هرتز"
    },
    "desc": {
      "fr": "Moniteur professionnel de bureau offrant un taux de rafraîchissement rapide de 100Hz, d'excellentee couleurs IPS et une protection d'assombrissement oculaire certifiée.",
      "en": "A professional desktop monitor offering a fast 100Hz refresh rate, excellent IPS color, and certified eye-care protection.",
      "ar": "شاشة مكتبية احترافية بمعدل تحديث سريع 100 هرتز، وألوان IPS ممتازة، وحماية معتمدة للعين."
    },
    "specs": [
      {
        "label": {
          "fr": "Dalle :",
          "en": "Panel:",
          "ar": "اللوحة:"
        },
        "value": {
          "fr": "21.5 pouces IPS LED Frameless Full HD",
          "en": "21.5\" IPS LED Frameless Full HD",
          "ar": "21.5 بوصة IPS LED بدون إطار Full HD"
        }
      },
      {
        "label": {
          "fr": "Taux / Latence:",
          "en": "Rate / Latency:",
          "ar": "التردد/زمن الاستجابة:"
        },
        "value": {
          "fr": "100Hz Rapide / Latence 1ms MPRT",
          "en": "Fast 100Hz / 1ms MPRT response time",
          "ar": "100 هرتز سريع / زمن استجابة 1 مللي ثانية MPRT"
        }
      },
      {
        "label": {
          "fr": "Technologies :",
          "en": "Technologies:",
          "ar": "التقنيات:"
        },
        "value": {
          "fr": "Flicker Free & Low Blue Light Asus",
          "en": "Asus Flicker-Free & Low Blue Light",
          "ar": "تقنية Asus بدون وميض وضوء أزرق منخفض"
        }
      }
    ],
    "retail": "1 450 DH",
    "final": "1 150 DH"
  },
  {
    "id": 15,
    "category": "comms",
    "brand": "Jabra",
    "img": "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80",
    "model": "PanaCast Table Stand (14207-70)",
    "status": {
      "fr": "En Stock",
      "en": "In Stock",
      "ar": "متوفر بالمخزون"
    },
    "statusClass": "in-stock",
    "title": {
      "fr": "Jabra Support de table PanaCast",
      "en": "Jabra PanaCast Table Stand",
      "ar": "حامل طاولة Jabra PanaCast"
    },
    "desc": {
      "fr": "Un support d'assise de table en métal lourd, robuste et officiel de la marque Jabra spécialement calibré pour sécuriser la caméra panoramique Jabra PanaCast.",
      "en": "An official heavy-metal, sturdy Jabra table stand, precisely calibrated to securely hold the Jabra PanaCast panoramic camera.",
      "ar": "حامل طاولة رسمي من Jabra مصنوع من معدن ثقيل ومتين، مُعاير خصيصًا لتثبيت كاميرا Jabra PanaCast البانورامية بأمان."
    },
    "specs": [
      {
        "label": {
          "fr": "Compatibilité :",
          "en": "Compatibility:",
          "ar": "التوافق:"
        },
        "value": {
          "fr": "Caméra Jabra PanaCast uniquement",
          "en": "Jabra PanaCast camera only",
          "ar": "كاميرا Jabra PanaCast فقط"
        }
      },
      {
        "label": {
          "fr": "Matériau :",
          "en": "Material:",
          "ar": "المادة:"
        },
        "value": {
          "fr": "Alliage métallique dense anti-vibration",
          "en": "Dense anti-vibration metal alloy",
          "ar": "سبيكة معدنية كثيفة مضادة للاهتزاز"
        }
      },
      {
        "label": {
          "fr": "Ajustement :",
          "en": "Adjustment:",
          "ar": "الضبط:"
        },
        "value": {
          "fr": "Élévation manuelle précise et sécurisée",
          "en": "Precise, secure manual height adjustment",
          "ar": "ضبط ارتفاع يدوي دقيق وآمن"
        }
      }
    ],
    "retail": "1 750 DH",
    "final": "1 350 DH"
  },
  {
    "id": 16,
    "category": "cctv",
    "brand": "Xiaomi",
    "img": "https://images.unsplash.com/photo-1621360841013-c7683c659ec6?auto=format&fit=crop&w=600&q=80",
    "model": "Smart Air Purifier 4 (AC-M16-SC)",
    "status": {
      "fr": "En Stock",
      "en": "In Stock",
      "ar": "متوفر بالمخزون"
    },
    "statusClass": "in-stock",
    "title": {
      "fr": "Xiaomi Smart Air Purifier 4",
      "en": "Xiaomi Smart Air Purifier 4",
      "ar": "مُنقّي هواء Xiaomi الذكي 4"
    },
    "desc": {
      "fr": "Purificateur d'air haut de gamme intégrant un puissant filtre HEPA 3-en-1 éliminant 99.97% des polluants urbains et des poussières pour des espaces sains.",
      "en": "A premium air purifier with a powerful 3-in-1 HEPA filter removing 99.97% of urban pollutants and dust for healthier spaces.",
      "ar": "مُنقّي هواء راقٍ بفلتر HEPA قوي ثلاثي الوظائف يزيل 99.97% من ملوثات المدينة والغبار لبيئة صحية."
    },
    "specs": [
      {
        "label": {
          "fr": "Filtration :",
          "en": "Filtration:",
          "ar": "الترشيح:"
        },
        "value": {
          "fr": "HEPA actif 3 couches haute protection",
          "en": "Active 3-layer high-protection HEPA",
          "ar": "فلتر HEPA نشط ثلاثي الطبقات بحماية عالية"
        }
      },
      {
        "label": {
          "fr": "Débit Clean :",
          "en": "Clean Air Rate:",
          "ar": "معدل تنقية الهواء:"
        },
        "value": {
          "fr": "CADR de 400 m³/h (pièces de 48m²)",
          "en": "CADR of 400 m³/h (rooms up to 48 m²)",
          "ar": "معدل CADR يبلغ 400 م³/س (لغرف حتى 48 م²)"
        }
      },
      {
        "label": {
          "fr": "Contrôle :",
          "en": "Control:",
          "ar": "التحكم:"
        },
        "value": {
          "fr": "Écran tactile OLED / Application Mi Home",
          "en": "OLED touchscreen / Mi Home app",
          "ar": "شاشة لمس OLED / تطبيق Mi Home"
        }
      }
    ],
    "retail": "2 800 DH",
    "final": "2 200 DH"
  }
];
