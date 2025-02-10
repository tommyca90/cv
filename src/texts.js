import {
  IconSvgBackback,
  IconSvgBatteryCharging,
  IconSvgBook,
  IconSvgBoomBox,
  IconSvgClipboard,
  IconSvgDatabase,
  IconSvgFiles,
  IconSvgHealth,
  IconSvgLayers,
  IconSvgMusic,
  IconSvgTv,
  IconSvgWifi1,
  IconSvgWifi2,
} from "./icons";

export const DEGREES = [
  {
    title: "Bachelor of Engineering",
    dateStart: "März 2012",
    dateEnd: "August 2015",
    paragraphs: [
      "Ich habe an der Hochschule für Technik, Wirtschaft und Gestaltung Konstanz (HTWG-Konstanz) den Bachelor-Studiengang Elektro- und Informationstechnik mit dem Schwerpunkt Software Engineering studiert.",
      'Thema meiner Bachelorarbeit war die "Realisierung einer günstigen Handschrift-Digitalisierung mit Hilfe von Infrarot-Technologie".',
    ],
    imgUrl: "./images/htwg_konstanz.jpg",
    imgTitle:
      "Hochschule für Technik, Wirtschaft und Gestaltung Konstanz (HTWG-Konstanz)",
    imgAlt: "Hochschulgebäude",
  },
  {
    title: "Master of Engineering",
    dateStart: "September 2015",
    dateEnd: "Februar 2017",
    paragraphs: [
      "Direkt im Anschluss studierte ich ebenfalls an der HTWG-Konstanz den Master-Studiengang Elektrische Systeme. Den Schwerpunkt habe ich dabei auf Embedded Software Engineering gelegt.",
      'Thema der Masterarbeit war die "Erweiterung eines Technologie Demonstrators um ein Industrie 4.0 Interface".',
    ],
    imgUrl: "./images/htwg_konstanz_2.jpg",
    imgTitle:
      "Hochschule für Technik Wirtschaft und Gestaltung Konstanz (HTWG-Konstanz)",
    imgAlt: "Hochschulgebäude",
  },
];

export const WORK_EXPERIENCES = [
  {
    title: "Precision Motors Deutsche Minebea GmbH",
    dateStart: "September 2016",
    dateEnd: "Februar 2017",
    paragraphs: [
      "Die Precision Motors Deutsche Minebea GmbH entwickelt und produziert Bürstenlose Gleichstrommotoren (BLDCs). Sie werden unter anderem in Festplatten und im automotiven Sektor verwendet.",
      "Als Masterand habe ich an der Erweiterung eines Technologie-Demonstrators um eine kabellose Schnittstelle gearbeitet. Nach dem Vergleich verschiedener Technologien wurde die Firmware des Technologie-Demonstrator in der Programmiersprache C um eine DECT Schnittstelle erweitert.",
    ],
    imgUrl: "./images/pmdm_bldc.png",
    imgTitle: "Bürstenloser Gleichstrommotor (BLDC) der Firma PMDM",
    imgAlt: "Bürstenloser Gleichstrommotor",
  },
  {
    title: "Chromasens GmbH",
    dateStart: "März 2017",
    dateEnd: "November 2018",
    paragraphs: [
      "Die Chromasens GmbH entwickelt und produziert Zeilenkameras die hauptsächlich in OEM Produkten zu Einsatz kommen. Sie werden in Produktionen für Hochgeschwindigkeits-Qualitätskontrollen eingesetzt.",
      "Als Embedded Software Engineer war ich verantwortlich für die Portierung der bestehenden Kamera Firmware (C-Code) auf die neu zu entwickelnde allPIXA evo Plattform. Die Firmware wurde erweitert, sodass sie mit dem GenICam Standard angesteuert werden kann.",
    ],
    imgUrl: "./images/chromasens_allPIXAevo.png",
    imgTitle: "Chromasens Zeilenkamera allPIXAevo",
    imgAlt: "Zeilenkamera",
  },
  {
    title: "Bernina International AG",
    dateStart: "Dezember 2018",
    dateEnd: "März 2024",
    paragraphs: [
      "Die Bernina International AG produziert High-End Näh- und Stickmaschinen für die private und semi-professionelle Nutzung.",
      "Als Software Engineer war ich für die Erweiterung des bereits bestehenden Bernina Software Frameworks (C++14) um Kamera und Scanner Komponenten verantwortlich, die mit der Bernina B990 auf den Markt gekommen sind.",
    ],
    imgUrl: "./images/bernina_b990.jpg",
    imgTitle: "Bernina B990 Näh- und Stickmaschine",
    imgAlt: "Näh- und Stickmaschine",
  },
];

export const TRAININGS = [
  {
    title:
      "Micro Consult: Embedded-Echtzeit-Linux vom Bootloader bis zum Realtime-System",
    dateStart: "August 2018",
    paragraphs: [
      "Der von Micro Consult angebotene Kurs vermittelt das Wissen wie man ein Linux Image in Bezug auf Footprint, Libraries, RT-Anforderungen und Device-Tree an die eigenen Bedürfnissen anpassen kann.",
    ],
  },

  {
    title: "Seminar-Experts GmbH: openCV",
    dateStart: "Januar 2019",
    paragraphs: [
      "Die durch Seminar-Experts GmbH durchgeführte Schulung vermittelt das Wissen wie man mit Hilfe von openCV Bildmanipulationen und Bildauswertungen durchführen kann.",
    ],
  },
  {
    title: "iSAQB CPSA Foundation Level",
    dateStart: "Juli 2020",
    paragraphs: [
      "Die iSAQB CPSA Foundation Level Schulung vermittelt die Grundlagen von Software-Architekturen, Komponenten, Schnittstellen, Architekturziele, Qualitätsziele und Werkzeuge.",
    ],
  },
  {
    title: "iSAQB CPSA Advanced Level Modul DDD (Domain Driven Design)",
    dateStart: "Oktober 2020",
    paragraphs: [
      "Die iSAQB CPSA DDD Schulung vermittelt das Wissen wie in Zusammenarbeit mit Stakeholdern die Domänen und Schnittstellen der zu erstellenden Software identifiziert werden können.",
    ],
  },
  {
    title:
      "iSAQB CPSA Advanced Level Modul IMPROVE (Evolution und Verbesserung von Softwarearchitekturen)",
    dateStart: "Februar 2021",
    paragraphs: [
      "Die iSAQB CPSA IMPROVE Schulung vermittelt verschiedene Strategien und Werkzeuge die dazu genutzt werden können bereits bestehende Software zu optimieren.",
    ],
  },
  {
    title:
      "iSAQB CPSA Advanced Level Modul SOFT (Soft Skills für Softwarearchitekten)",
    dateStart: "November 2021",
    paragraphs: [
      "Die iSAQB CPSA SOFT Schulung vermittelt Soft Skills die dabei Helfen die Kommunikation mit Stakeholdern konstruktiv zu gestalten. Dazu gehören unter anderem Gesprächstechniken, Fragetechniken und Konstruktives Feedback.",
    ],
  },
  {
    title:
      "Udemy - Denis Panjuta: Lerne Flutter & Dart und erstelle native iOS & Android Apps",
    dateStart: "Mai 2024",
    dateEnd: "Juni 2024",
    paragraphs: [
      'Die Udemy Schulung "Lerne Flutter & Dart und erstelle native iOS & Android Apps" vermittelt durch mehrere Mit-Mach-Projekte das Wissen, wie iOS und Android Apps mit Flutter erstellt werden können. Dazu gehört der allgemeine Aufbau einer Flutter App, einbinden externer Libaries, API Einbindung und der Ablauf einer Veröffentlichung der erstellten App in einem Appstore.',
    ],
  },
  {
    title: "Udemy - Angela Yu: The Complete 2024 Web Development Bootcamp",
    dateStart: "Juni 2024",
    dateEnd: "August 2024",
    paragraphs: [
      'Die auf 3 Monate Lernzeit ausgelegte Udemy Schulung "The Complete 2024 Web Development Bootcamp" vermittelt durch Mit-Mach-Projekte und Theorie-Einheiten Wissen über HTML, CSS, JS, Bootstrap, EJS, React, node.js, PostgreSQL, API Nutzung, API Erstellung, Nutzer Authentifizierung (Hashing, Salting, OAuth).',
    ],
  },
  {
    title:
      "Udemy - Jonas Schmedtmann: Master modern React from beginner to advanced",
    dateStart: "September 2024",
    dateEnd: "aktuell",
    paragraphs: [
      'Die Udemy Schulung "Master modern React from beginner to advanced" vermittelt anhand von Mit-Mach-Projekten und Theorie-Einheiten das Wissen wie React Apps aufgebaut werden können und die allgemeine Funktionsweise von React.',
    ],
  },
];

export const SAMPLES = [
  {
    title: "",
    dateStart: "",
    paragraphs: [],
  },
  {
    title: "",
    dateStart: "",
    paragraphs: [],
  },
];

export const SKILLS = [
  {
    title: "Enthusiastisch",
    description: "Reinschnuppern. Begeistern. Anfangen. Fertigstellen. Freuen.",
    icon: IconSvgBatteryCharging(),
  },
  {
    title: "Selbstständig",
    description:
      "Anforderungen sammeln. Projekte managen. Stakeholder einbeziehen.",
    icon: IconSvgBackback(),
  },
  {
    title: "Zuverlässig",
    description: "Testen. Dokumentieren. Abliefern.",
    icon: IconSvgDatabase(),
  },
];

export const TECHNOLOGIES = [
  {
    title: "Professionell",
    description: "C++14. QML. Qt 5.12.",
    icon: IconSvgWifi2(),
  },
  {
    title: "Anfänger",
    description: "Python. Flutter. React.",
    icon: IconSvgWifi1(),
  },
];

export const TOOLS = [
  {
    title: "Aufgabenverwaltung",
    description: "Jira",
    icon: IconSvgClipboard(),
  },
  {
    title: "Dokumentation",
    description: "Confluence",
    icon: IconSvgFiles(),
  },
  {
    title: "Versionsverwaltung",
    description: "SVN. GitHub.",
    icon: IconSvgLayers(),
  },
];

export const HOBBIES = [
  {
    title: "Tanz",
    description: "Salsa. Jive.",
    icon: IconSvgMusic(),
  },
  {
    title: "Musik",
    description: "Live-Konzerte. Klavier spielen.",
    icon: IconSvgBoomBox(),
  },
  {
    title: "TV",
    description: "Monk. Psych. Castle.",
    icon: IconSvgTv(),
  },
  {
    title: "Lesen",
    description: "Fantasy. Abenteuer. Krimis.",
    icon: IconSvgBook(),
  },
  {
    title: "Gesundheit",
    description: "Spaziergänge. Velo. Yoga. Kochen.",
    icon: IconSvgHealth(),
  },
];

export const SHOP_ITEMS = [
  {
    imgUrl: "./images/shop_login.png",
    title: "Log-In Seite",
    alt: "Log-In Seite",
  },
  {
    imgUrl: "./images/shop_landing_page.png",
    title: "Hauptseite",
    alt: "Hauptseite",
  },
  {
    imgUrl: "./images/shop_menu.png",
    title: "Menü Leiste",
    alt: "Menü Leiste",
  },
  {
    imgUrl: "./images/shop_own_products.png",
    title: "Eigene Waren Seite",
    alt: "Eigene Waren Seite",
  },
  {
    imgUrl: "./images/shop_cart.png",
    title: "Einkaufswagen",
    alt: "Einkaufswagen",
  },
];

export const PMT_ITEMS = [
  {
    imgUrl: "./images/pmt_active_sprints.png",
    title: "Aktive Sprints",
    alt: "Aktive Sprints",
  },
  {
    imgUrl: "./images/pmt_sprint_planner.png",
    title: "Sprint Planer",
    alt: "Sprint Planer",
  },
  {
    imgUrl: "./images/pmt_database_browser.png",
    title: "Aufgabenverwaltung",
    alt: "Aufgabenverwaltung",
  },
  {
    imgUrl: "./images/pmt_timeline.png",
    title: "Projektplanung",
    alt: "Projektplanung",
  },
];
