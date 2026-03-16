export type Locale = 'es' | 'fr' | 'ca';

export const locales: Locale[] = ['es', 'fr', 'ca'];
export const defaultLocale: Locale = 'es';

export type LocaleContent = {
  // Hero
  heroHeadline: string;
  heroSubheadline: string;
  heroMicrocopy: string;
  heroCTAPrimary: string;
  heroCTASecondary: string;

  // ForWhom
  forWhomTitle: string;
  forWhomWorksIf: string;
  forWhomWorksIfItems: string[];
  forWhomDoesNotWorkIf: string;
  forWhomDoesNotWorkIfItems: string[];

  // Problem
  problemTitle: string;
  problemCopy: string;
  problemQuotePart1: string;
  problemQuotePart2: string;
  problemQuotePart3: string;

  // Solution
  solutionTitle: string;
  solutionCopy: string;
  solutionObjective: string;
  solutionObjectiveItems: string[];

  // HowWorks
  howWorksTitle: string;
  howWorksItems: Array<{ label: string; description: string }>;

  // WhatIncludes
  whatIncludesTitle: string;
  whatIncludesItems: Array<{ title: string; items: string[] }>;

  // Investment
  investmentTitle: string;
  investmentCopy: string;
  investmentCTA: string;

  // ApplicationCTA
  applicationCtaTitle: string;
  applicationCtaCopy: string;
  applicationCtaCTA: string;

  // FAQ
  faqTitle: string;
  faqItems: Array<{ question: string; answer: string }>;

  // Closing
  closingHeadline: string;
  closingSubcopy: string;
  closingCTA: string;

  // Header & Footer
  headerCTA: string;
  footerText: string;
  languageSelector: string;

  // Additional UI texts
  heroSecondaryHelper: string;
  investmentEyebrow: string;
  investmentSubtitle: string;
  investmentIntro: string;
  howWorksIntro: string;
  whatIncludesIntro: string;
  applicationEyebrow: string;
  formSelectPlaceholder: string;
  formCurrentChallenge: string;
  formCurrentChallengePlaceholder: string;
  formRevenueOptions: {
    option1: string;
    option2: string;
    option3: string;
    option4: string;
  };
  formResetButton: string;
  formConfirmationSuccess: string;
  formConfirmationDelay: string;
  formSubmissionDisclaimer: string;
  closingSubmissionDisclaimer: string;
  problemAgencyDisclaimer: string;

  // Form
  formBrand: string;
  formBrandPlaceholder: string;
  formWhatSell: string;
  formWhatSellPlaceholder: string;
  formWantChange: string;
  formWantChangePlaceholder: string;
  formProblem: string;
  formProblemPlaceholder: string;
  formRevenue: string;
  formInvestment: string;
  formInvestmentOptions: {
    option1: string;
    option2: string;
    option3: string;
    option4: string;
  };
  formWhenStart: string;
  formWhyPulso: string;
  formWhyPulsoPaceholder: string;
  formSubmit: string;
};

const es: LocaleContent = {
  // Hero
  heroHeadline: "Si tu marca factura premium pero se ve como una más, estás perdiendo autoridad antes de vender.",
  heroSubheadline: "En Pulso construimos sistemas de contenido audiovisual para marcas, expertos y agencias que necesitan una presencia visual sólida, coherente y claramente superior. No hacemos piezas sueltas. Diseñamos percepción, posicionamiento y confianza.",
  heroMicrocopy: "Pocos clientes al mes. Implicación alta. Criterio creativo real.",
  heroCTAPrimary: "Aplicar para trabajar con Pulso",
  heroCTASecondary: "Ver si nos acoplamos",

  // ForWhom
  forWhomTitle: "No trabajamos con todo el mundo. Y es buen signo.",
  forWhomWorksIf: "Encaja si:",
  forWhomWorksIfItems: [
    "Tu negocio ya se toma en serio su posicionamiento.",
    "Quieres que tu imagen esté a la altura de lo que cobras.",
    "Buscas estrategia, dirección y ejecución, no solo publicaciones.",
    "Valoras el criterio creativo y la coherencia de marca.",
  ],
  forWhomDoesNotWorkIf: "No encaja si:",
  forWhomDoesNotWorkIfItems: [
    "Buscas contenido barato.",
    "Solo quieres que alguien 'te gestione Instagram'.",
    "Necesitas volumen sin dirección.",
    "Quieres resultados serios sin involucrarte en marca, mensaje y visión.",
  ],

  // Problem
  problemTitle: "El problema no es publicar poco. Es comunicar por debajo de tu nivel.",
  problemCopy: "Muchas marcas hacen buen trabajo e igual proyectan poco valor. No por falta de talento, sino porque su contenido no sostiene su posicionamiento.\n\nCuando tu imagen no transmite autoridad:\n• atraes clientes más sensibles al precio,\n• reduces confianza antes de la conversación,\n• compites donde no deberías,\n• y te obligas a vender con más esfuerzo del necesario.\n\nUna marca premium no solo debe ser buena. Debe parecer inevitable.",
  problemQuotePart1: "Una marca premium no solo debe ser buena.",
  problemQuotePart2: "Debe parecer inevitable.",
  problemQuotePart3: "",

  // Solution
  solutionTitle: "No vendemos contenido. Construimos una presencia que eleva tu percepción.",
  solutionCopy: "Pulso reúne estrategia, dirección creativa, producción audiovisual y coherencia de marca en un solo sistema.\n\nEl objetivo no es tener más vídeos.\nEl objetivo es que tu presencia digital haga tres cosas:",
  solutionObjective: "El objetivo es que tu presencia digital haga tres cosas:",
  solutionObjectiveItems: [
    "Posicionarte con más autoridad.",
    "Hacerte más deseable para el cliente correcto.",
    "Y filtrar mejor al cliente que no valora calidad.",
  ],

  // HowWorks
  howWorksTitle: "Cómo funciona",
  howWorksItems: [
    {
      label: "Diagnóstico",
      description: "Revisamos tu imagen, tu mensaje, tu oferta y tu percepción actual.",
    },
    {
      label: "Dirección",
      description: "Definimos narrativa, estilo visual y criterio de comunicación.",
    },
    {
      label: "Producción",
      description: "Creamos piezas con estándar alto, pensadas para reforzar marca y confianza.",
    },
    {
      label: "Sistema",
      description: "Organizamos publicación, coherencia y continuidad para que no deprendas de improvización.",
    },
    {
      label: "Optimización",
      description: "Ajustamos según respuesta del mercado, evolución del negocio y posicionamiento.",
    },
  ],

  // WhatIncludes
  whatIncludesTitle: "Qué incluye el sistema",
  whatIncludesItems: [
    {
      title: "Estrategia y posicionamiento",
      items: [
        "Auditoría de percepción de marca.",
        "Definición de narrativa y ángulos de comunicación.",
        "Enfoque de contenido alineado con autoridad y captación.",
      ],
    },
    {
      title: "Dirección creativa",
      items: [
        "Criterio visual y narrativo centralizado.",
        "Supervisión de coherencia entre piezas, formatos y mensajes.",
        "Decisiones pensadas para elevar percepción, no solo para verse bien.",
      ],
    },
    {
      title: "Producción audiovisual",
      items: [
        "Producción foto y vídeo con estándar profesional.",
        "Piezas adaptadas a campañas, marca personal o contenido de autoridad.",
        "Ejecución cuidadosa para que la marca se vea al nivel que quiere cobrar.",
      ],
    },
    {
      title: "Sistema de publicación",
      items: [
        "Organización del contenido con continuidad.",
        "Estructura para mantener presencia sin improvización constante.",
        "Calidad y frecuencia con sentido.",
      ],
    },
  ],

  // Investment
  investmentTitle: "Inversión",
  investmentCopy: "Nuestros proyectos comienzan a 3.000 €/mes.\n\nTrabajamos con pocos clientes para mantener nivel, focus y criterio. No presupuestamos por pieza, porque ese modelo rompe lo que importa: la consistencia. Lo que construimos no es volumen de entregables. Es un sistema completo de percepción, posicionamiento de marca y captación.",
  investmentCTA: "Aplicar para trabajar con Pulso",

  // ApplicationCTA
  applicationCtaTitle: "Antes de hablar, necesitamos confirmar encaje.",
  applicationCtaCopy: "No abrimos llamada directa como primer paso. Primero revisamos si hay encaje real en objetivo, momento, nivel de exigencia e inversión.",
  applicationCtaCTA: "Completar candidatura de 2 minutos",

  // FAQ
  faqTitle: "Preguntas frecuentes",
  faqItems: [
    {
      question: "¿Trabajan solo con marcas personales?",
      answer: "No. Trabajamos también con marcas y agencias que necesitan contenido audiovisual fuerte y dirección clara.",
    },
    {
      question: "¿Hacen proyectos puntuales?",
      answer: "En algunos casos sí, pero nuestro mejor trabajo llega cuando construimos continuidad, no acciones aisladas.",
    },
    {
      question: "¿Por qué no ofrecen precio por pieza?",
      answer: "Porque el problema raramente es una pieza. Es la falta de sistema, coherencia y dirección.",
    },
    {
      question: "¿Qué pasa después de aplicar?",
      answer: "Revisamos tu caso. Si vemos encaje, te invitamos a una llamada. Si no, no te hacemos perder tiempo.",
    },
  ],

  // Closing
  closingHeadline: "Si quieres una marca que se vea tan fuerte como el negocio detrás, aplica.",
  closingSubcopy: "Si solo buscas contenido barato, aquí no es. Si buscas percepción, criterio y una presencia que suba el nivel de cómo te percibe el mercado, hablemos.",
  closingCTA: "Aplicar para trabajar con Pulso",

  // Header & Footer
  headerCTA: "Aplicar",
  footerText: "© 2024 Pulso. Todos los derechos reservados.",
  languageSelector: "Idioma",

  // Additional UI texts
  heroSecondaryHelper: "O aprende qué hace diferente a Pulso",
  investmentEyebrow: "Inversión",
  investmentSubtitle: "Comprometidos. Sin distracciones.",
  investmentIntro: "No trabajamos con 50 clientes a la vez. Seleccionamos 3–5 negocios por año. Inversión mínima que garantiza que tu proyecto es prioridad. Los resultados vienen de ahí.",
  howWorksIntro: "Cada proyecto es único. Te lo hacemos simple: investigamos fondo, diseñamos estrategia audiovisual específica para ti, ejecutamos con rigor, medimos y ajustamos. Obsesionados con resultados, no con horas.",
  whatIncludesIntro: "Cada proyecto es a medida. Estos son los pilares que nunca faltan en nuestro trabajo.",
  applicationEyebrow: "Aplicar",
  formSelectPlaceholder: "Seleccionar...",
  formCurrentChallenge: "Tu reto actual",
  formCurrentChallengePlaceholder: "¿Dónde necesitas escalar? Marca visual débil, conversión baja, no sabes cómo comunicar en vídeo...",
  formRevenueOptions: {
    option1: "Menos de 10k€/mes",
    option2: "10k–30k€/mes",
    option3: "30k–100k€/mes",
    option4: "Más de 100k€/mes",
  },
  formResetButton: "Volver",
  formConfirmationSuccess: "✓ Hemos recibido tu solicitud.",
  formConfirmationDelay: "Te contactamos en 24-48h si vemos encaje.",
  formSubmissionDisclaimer: "Revisamos tu caso. Si vemos encaje, te invitamos a una llamada. Si no, no te hacemos perder tiempo.",
  closingSubmissionDisclaimer: "Tu solicitud es revisada por nuestro equipo. Si hay encaje, te llamamos en 24–48h. Si no, te lo decimos directo.",
  problemAgencyDisclaimer: "Ninguna agencia te lo dice claro. Todas prometen \"transformación digital\" o \"vídeo que convierte\". Nosotros no. Te decimos exactamente qué haremos, por qué funciona, y qué esperar. Sin humo.",

  // Form
  formBrand: "¿Cuál es tu marca o negocio?",
  formBrandPlaceholder: "Tu marca o negocio",
  formWhatSell: "¿Qué vendes y a qué tipo de cliente?",
  formWhatSellPlaceholder: "Describe tu oferta y cliente ideal",
  formWantChange: "¿Qué quieres que cambie en tu presencia o contenido en los próximos 90 días?",
  formWantChangePlaceholder: "Describe los cambios que esperas",
  formProblem: "¿Qué problema sientes hoy con tu imagen, contenido o posicionamiento?",
  formProblemPlaceholder: "Cuéntanos el problema que ves",
  formRevenue: "¿Cuál es la facturación mensual actual del negocio?",
  formInvestment: "¿Cuál es el rango de inversión que estás dispuesto a asumir?",
  formInvestmentOptions: {
    option1: "Menos de 1.500 €",
    option2: "1.500 € – 3.000 €",
    option3: "3.000 € – 5.000 €",
    option4: "5.000 €+",
  },
  formWhenStart: "¿Cuándo quieres empezar?",
  formWhyPulso: "¿Por qué crees que Pulso puede ser el partner adecuado?",
  formWhyPulsoPaceholder: "Cuéntanos por qué crees que encajamos",
  formSubmit: "Enviar candidatura",
};

const fr: LocaleContent = {
  // Hero
  heroHeadline: "Si ta marque facture premium mais se voit comme une autre, tu perds ton autorité avant même de vendre.",
  heroSubheadline: "Chez Pulso, nous construisons des systèmes de contenu audiovisuel pour les marques, experts et agences qui ont besoin d'une présence visuelle solide, cohérente et clairement supérieure. Nous ne faisons pas de pièces isolées. Nous créons la perception, le positionnement et la confiance.",
  heroMicrocopy: "Peu de clients par mois. Implication forte. Vrai jugement créatif.",
  heroCTAPrimary: "Postuler pour travailler avec Pulso",
  heroCTASecondary: "Voir si on est faits pour travailler ensemble",

  // ForWhom
  forWhomTitle: "On ne travaille pas avec tout le monde. Et c'est bon signe.",
  forWhomWorksIf: "Ça marche si:",
  forWhomWorksIfItems: [
    "Ton business prend son positionnement au sérieux.",
    "Tu veux que ton image soit à la hauteur de ce que tu factures.",
    "Tu cherches la stratégie, la direction et l'exécution, pas juste des publications.",
    "Tu valorises le jugement créatif et la cohérence de marque.",
  ],
  forWhomDoesNotWorkIf: "Ça ne marche pas si:",
  forWhomDoesNotWorkIfItems: [
    "Tu cherches du contenu bon marché.",
    "Tu veux juste que quelqu'un 'gère ton Instagram'.",
    "Tu as besoin de volume sans direction.",
    "Tu veux des résultats sérieux sans t'impliquer dans la marque, le message et la vision.",
  ],

  // Problem
  problemTitle: "Le problème n'est pas de publier peu. C'est de communiquer en dessous de ton niveau.",
  problemCopy: "Beaucoup de marques font du bon travail et projettent quand même peu de valeur. Pas par manque de talent, mais parce que leur contenu ne soutient pas leur positionnement.\n\nQuand ton image ne transmet pas l'autorité:\n• tu attires des clients plus sensibles au prix,\n• tu réduis la confiance avant la conversation,\n• tu te retrouves à concurrencer là où tu ne devrais pas être,\n• et tu es obligé de vendre avec plus d'effort que nécessaire.\n\nUne marque premium ne doit pas juste être bonne. Elle doit sembler inévitable.",
  problemQuotePart1: "Une marque premium ne doit pas juste être bonne.",
  problemQuotePart2: "Elle doit sembler inévitable.",
  problemQuotePart3: "",

  // Solution
  solutionTitle: "Nous ne vendons pas du contenu. Nous construisons une présence qui élève ta perception.",
  solutionCopy: "Pulso réunit stratégie, direction créative, production audiovisuelle et cohérence de marque en un seul système.\n\nL'objectif n'est pas d'avoir plus de vidéos.\nL'objectif est que ta présence digitale fasse trois choses:",
  solutionObjective: "L'objectif est que ta présence digitale fasse trois choses:",
  solutionObjectiveItems: [
    "Te positionner avec plus d'autorité.",
    "Te rendre plus désirable pour le bon client.",
    "Et mieux filtrer le client qui ne valorise pas la qualité.",
  ],

  // HowWorks
  howWorksTitle: "Comment ça marche",
  howWorksItems: [
    {
      label: "Diagnostic",
      description: "Nous revoyons ton image, ton message, ton offre et ta perception actuelle.",
    },
    {
      label: "Direction",
      description: "Nous définissons la narration, le style visuel et le critère de communication.",
    },
    {
      label: "Production",
      description: "Nous créons des pièces au haut niveau, pensées pour renforcer la marque et la confiance.",
    },
    {
      label: "Système",
      description: "Nous organisons la publication, la cohérence et la continuité pour que tu n'aies pas à improviser.",
    },
    {
      label: "Optimisation",
      description: "Nous ajustons selon la réaction du marché, l'évolution du business et le positionnement.",
    },
  ],

  // WhatIncludes
  whatIncludesTitle: "Ce que le système inclut",
  whatIncludesItems: [
    {
      title: "Stratégie et positionnement",
      items: [
        "Audit de la perception de la marque.",
        "Définition de la narration et des angles de communication.",
        "Approche du contenu alignée avec l'autorité et la captation.",
      ],
    },
    {
      title: "Direction créative",
      items: [
        "Jugement visuel et narratif centralisé.",
        "Supervision de la cohérence entre les pièces, formats et messages.",
        "Décisions pensées pour élever la perception, pas juste pour être belles.",
      ],
    },
    {
      title: "Production audiovisuelle",
      items: [
        "Production photo et vidéo au niveau professionnel.",
        "Pièces adaptées aux campagnes, brand personnel ou contenu d'autorité.",
        "Exécution soignée pour que la marque se voit au niveau qu'elle veut facturer.",
      ],
    },
    {
      title: "Système de publication",
      items: [
        "Organisation du contenu avec continuité.",
        "Structure pour maintenir une présence sans improvisation constante.",
        "Qualité et fréquence avec sens.",
      ],
    },
  ],

  // Investment
  investmentTitle: "Investissement",
  investmentCopy: "Nos projets commencent à 3 000 €/mois.\n\nNous travaillons avec peu de clients pour maintenir le niveau, le focus et le jugement. Nous n'établissons pas de devis par pièce, car ce modèle casse ce qui importe: la consistance. Ce que nous construisons n'est pas un volume de livrables. C'est un système complet de perception, de position de marque et de captation.",
  investmentCTA: "Postuler pour travailler avec Pulso",

  // ApplicationCTA
  applicationCtaTitle: "Avant de parler, nous devons confirmer l'adéquation.",
  applicationCtaCopy: "Nous n'ouvrons pas d'appel direct comme première étape. D'abord nous revoyons s'il y a un vrai fit en objectif, moment, niveau d'exigence et investissement.",
  applicationCtaCTA: "Remplir la candidature de 2 minutes",

  // FAQ
  faqTitle: "Questions fréquentes",
  faqItems: [
    {
      question: "Travaillez-vous uniquement avec des marques personnelles?",
      answer: "Non. Nous travaillons aussi avec des marques et agences qui ont besoin d'un contenu audiovisuel solide et d'une direction claire.",
    },
    {
      question: "Faites-vous des projets ponctuels?",
      answer: "Dans certains cas oui, mais notre meilleur travail arrive quand nous construisons la continuité, pas des actions isolées.",
    },
    {
      question: "Pourquoi n'offrez-vous pas un prix par pièce?",
      answer: "Parce que le problème n'est rarement une pièce. C'est le manque de système, de cohérence et de direction.",
    },
    {
      question: "Qu'est-ce qui se passe après avoir postulé?",
      answer: "Nous revoyons ton cas. Si nous voyons de l'adéquation, nous t'invitons à un appel. Si non, nous ne te faisons pas perdre de temps.",
    },
  ],

  // Closing
  closingHeadline: "Si tu veux une marque qui se voit aussi forte que le business derrière, postule.",
  closingSubcopy: "Si tu cherches juste du contenu bon marché, ici ce n'est pas l'endroit. Si tu cherches la perception, le jugement et une présence qui élève le niveau de ta perception sur le marché, discutons.",
  closingCTA: "Postuler pour travailler avec Pulso",

  // Header & Footer
  headerCTA: "Postuler",
  footerText: "© 2024 Pulso. Tous droits réservés.",
  languageSelector: "Langue",

  // Additional UI texts
  heroSecondaryHelper: "Ou découvrez ce qui rend Pulso différent",
  investmentEyebrow: "Investissement",
  investmentSubtitle: "Engagés. Sans distractions.",
  investmentIntro: "Nous ne travaillons pas avec 50 clients à la fois. Nous sélectionnons 3–5 projets par an. Investissement minimum qui garantit que ton projet est prioritaire. Les résultats en dépendent.",
  howWorksIntro: "Chaque projet est unique. Nous te le rendons simple : nous investigons en profondeur, concevons une stratégie audiovisuelle spécifique pour toi, exécutons avec rigueur, mesurons et ajustons. Obsédés par les résultats, pas par les heures.",
  whatIncludesIntro: "Chaque projet est sur mesure. Ce sont les piliers qui ne manquent jamais dans notre travail.",
  applicationEyebrow: "Postuler",
  formSelectPlaceholder: "Sélectionner...",
  formCurrentChallenge: "Ton enjeu actuel",
  formCurrentChallengePlaceholder: "Où dois-tu progresser ? Image faible, conversion basse, tu ne sais pas comment communiquer en vidéo...",
  formRevenueOptions: {
    option1: "Moins de 10k€/mois",
    option2: "10k–30k€/mois",
    option3: "30k–100k€/mois",
    option4: "Plus de 100k€/mois",
  },
  formResetButton: "Retour",
  formConfirmationSuccess: "✓ Nous avons reçu ta candidature.",
  formConfirmationDelay: "Nous te recontacterons en 24-48h si nous voyons un fit.",
  formSubmissionDisclaimer: "Nous examinons ton cas. Si nous voyons un fit, nous t\'invitons à un appel. Sinon, nous ne te faisons pas perdre de temps.",
  closingSubmissionDisclaimer: "Ta candidature est examinée par notre équipe. S\'il y a un fit, nous t\'appelons en 24–48h. Sinon, nous te le disons directement.",
  problemAgencyDisclaimer: "Aucune agence ne te le dit clairement. Toutes promettent \"transformation numérique\" ou \"vidéo qui convertit\". Pas nous. Nous te disons exactement ce que nous ferons, pourquoi ça marche, et à quoi t\'attendre. Sans poudre aux yeux.",

  // Form
  formBrand: "Quelle est ta marque ou ton business?",
  formBrandPlaceholder: "Ta marque ou business",
  formWhatSell: "Qu'est-ce que tu vends et à quel type de client?",
  formWhatSellPlaceholder: "Décris ton offre et client idéal",
  formWantChange: "Qu'est-ce que tu veux qui change dans ta présence ou ton contenu dans les 90 prochains jours?",
  formWantChangePlaceholder: "Décris les changements que tu espères",
  formProblem: "Quel problème tu sens aujourd'hui avec ton image, ton contenu ou ton positionnement?",
  formProblemPlaceholder: "Dis-nous le problème que tu vois",
  formRevenue: "Quel chiffre d'affaires mensuel a actuellement le business?",
  formInvestment: "Quel investissement es-tu prêt à assumer?",
  formInvestmentOptions: {
    option1: "Moins de 1 500 €",
    option2: "1 500 € – 3 000 €",
    option3: "3 000 € – 5 000 €",
    option4: "5 000 €+",
  },
  formWhenStart: "Quand veux-tu commencer?",
  formWhyPulso: "Pourquoi tu crois que Pulso est le bon partner?",
  formWhyPulsoPaceholder: "Dis-nous pourquoi tu crois qu'on s'entend",
  formSubmit: "Envoyer la candidature",
};

const ca: LocaleContent = {
  // Hero
  heroHeadline: "Si la teva marca factúra com a premium però es veu com una més, estàs perdent autoritat abans de vendre.",
  heroSubheadline: "A Pulso construïm sistemes de contingut audiovisual per a marques, experts i agències que necessiten una presència visual sòlida, coherent i clarament superior. No fem peces soltes. Dissenyem percepció, posicionament i confiança.",
  heroMicrocopy: "Pocs clients al mes. Implicació alta. Criteri creatiu real.",
  heroCTAPrimary: "Optar per treballar amb Pulso",
  heroCTASecondary: "Veure si encaixem",

  // ForWhom
  forWhomTitle: "No treballem per a tothom. I és bon signe.",
  forWhomWorksIf: "Encaixa si:",
  forWhomWorksIfItems: [
    "El teu negoci ja es pren en serio el seu posicionament.",
    "Vols que la teva imatge estigui a l'altura del que cobres.",
    "Busques estratègia, direcció i execució, no només publicacions.",
    "Values el criteri creatiu i la coherència de marca.",
  ],
  forWhomDoesNotWorkIf: "No encaixa si:",
  forWhomDoesNotWorkIfItems: [
    "Busques contingut barat.",
    "Només vols que algú 'et gestioni Instagram'.",
    "Necessites volum sense direcció.",
    "Vols resultats seriosos sense implicar-te en marca, missatge i visió.",
  ],

  // Problem
  problemTitle: "El problema no és publicar poc. És comunicar per sota del teu nivell.",
  problemCopy: "Moltes marques fan bon treball i igualment projecten poc valor. No per falta de talent, sinó perquè el seu contingut no sosté el seu posicionament.\n\nQuant la teva imatge no transmet autoritat:\n• atraues clients més sensibles al preu,\n• reduïs confiança abans de la conversa,\n• competeixes on no hauríes,\n• i t'obliges a vendre amb més esforç del necessari.\n\nUna marca premium no només ha de ser bona. Ha de semblar inevitable.",
  problemQuotePart1: "Una marca premium no només ha de ser bona.",
  problemQuotePart2: "Ha de semblar inevitable.",
  problemQuotePart3: "",

  // Solution
  solutionTitle: "No vendem contingut. Construïm una presència que eleva com et perceben.",
  solutionCopy: "Pulso uneix estratègia, direcció creativa, producció audiovisual i coherència de marca en un sol sistema.\n\nL'objectiu no és tenir més vídeos.\nL'objectiu és que la teva presència digital faci tres coses:",
  solutionObjective: "L'objectiu és que la teva presència digital faci tres coses:",
  solutionObjectiveItems: [
    "Posicionar-te amb més autoritat.",
    "Fer-te més desitjable per al client correcte.",
    "I filtrar millor el client que no valora qualitat.",
  ],

  // HowWorks
  howWorksTitle: "Com funciona",
  howWorksItems: [
    {
      label: "Diagnòstic",
      description: "Revisem imatge, missatge, oferta i percepció actual.",
    },
    {
      label: "Direcció",
      description: "Definim narrativa, estil visual i criteri de comunicació.",
    },
    {
      label: "Producció",
      description: "Creem peces amb estàndard alt, pensades per refforçar marca i confiança.",
    },
    {
      label: "Sistema",
      description: "Ordenem publicació, coherència i continuïtat perquè no hagis de dependre de la improvisació.",
    },
    {
      label: "Optimització",
      description: "Ajustem segons resposta del mercat, evolució del negoci i posicionament.",
    },
  ],

  // WhatIncludes
  whatIncludesTitle: "Què inclou el sistema",
  whatIncludesItems: [
    {
      title: "Estratègia i posicionament",
      items: [
        "Auditoria de percepció de marca.",
        "Definició de narrativa i angles de comunicació.",
        "Enfocament de contingut alineat amb autoritat i captació.",
      ],
    },
    {
      title: "Direcció creativa",
      items: [
        "Criteri visual i narratiu centralitzat.",
        "Supervisió de coherència entre peces, formats i missatges.",
        "Decisions pensades per elevar percepció, no només per veure's bé.",
      ],
    },
    {
      title: "Producció audiovisual",
      items: [
        "Producció fotografia i vídeo amb estàndard professional.",
        "Peces adaptades a campanyes, marca personal o contingut d'autoritat.",
        "Execució acurada perquè la marca es vegi al nivell que vol cobrar.",
      ],
    },
    {
      title: "Sistema de publicació",
      items: [
        "Organització del contingut amb continuïtat.",
        "Estructura per mantenir presència sense improvisació constant.",
        "Qualitat i freqüència amb sentit.",
      ],
    },
  ],

  // Investment
  investmentTitle: "Inversió",
  investmentCopy: "Els nostres projectes comencen a 3.000 €/mes.\n\nTreballem amb pocs clients per mantenir nivell, focus i criteri. No pressupostem per peça, perquè aquest model trenca el que importa: la consistència. El que construïm no és volum de lliurables. És un sistema complet de percepció, posicionament de marca i captació.",
  investmentCTA: "Optar per treballar amb Pulso",

  // ApplicationCTA
  applicationCtaTitle: "Abans de parlar, necessitem confirmar encaixada.",
  applicationCtaCopy: "No obrim trucada directa com a primer pas. Primer revisem si hi ha encaixada real en objectiu, moment, nivell d'exigència i inversió.",
  applicationCtaCTA: "Completar candidatura de 2 minuts",

  // FAQ
  faqTitle: "Preguntes freqüents",
  faqItems: [
    {
      question: "Treballeu només amb marques personals?",
      answer: "No. Treballem també amb marques i agències que necessiten contingut audiovisual fort i direcció clara.",
    },
    {
      question: "Feu projectes puntuals?",
      answer: "En alguns casos sí, però el nostre millor treball passa quan construïm continuïtat, no accions aïllades.",
    },
    {
      question: "Per què no doneu preu per peça?",
      answer: "Perquè el problema rarament és una peça. És la falta de sistema, coherència i direcció.",
    },
    {
      question: "Què passa després d'optar?",
      answer: "Revisem el teu cas. Si veiem encaixada, t'invitem a una trucada. Si no, no et fem perdre temps.",
    },
  ],

  // Closing
  closingHeadline: "Si vols una marca que es vegi tan forta com el negoci que hi ha darrera, opta.",
  closingSubcopy: "Si només busques contingut barat, aquí no és. Si busques percepció, criteri i una presència que pugui el nivell de com et percep el mercat, parlem.",
  closingCTA: "Optar per treballar amb Pulso",

  // Header & Footer
  headerCTA: "Optar",
  footerText: "© 2024 Pulso. Tots els drets reservats.",
  languageSelector: "Idioma",

  // Additional UI texts
  heroSecondaryHelper: "O descobreix què fa diferent a Pulso",
  investmentEyebrow: "Inversió",
  investmentSubtitle: "Comprometits. Sense distraccions.",
  investmentIntro: "No treballem amb 50 clients alhora. Seleccionem 3–5 projectes per any. Inversió mínima que garanteix que el teu projecte és prioritari. Els resultats en depenen.",
  howWorksIntro: "Cada projecte és únic. Te'l fem simple: investiguem a fons, dissenyem estratègia audiovisual específica per a tu, executem amb rigor, mesurem i ajustem. Obsessionats pels resultats, no per les hores.",
  whatIncludesIntro: "Cada projecte és a mida. Aquests són els pilars que mai falten en el nostre treball.",
  applicationEyebrow: "Optar",
  formSelectPlaceholder: "Seleccionar...",
  formCurrentChallenge: "El teu repte actual",
  formCurrentChallengePlaceholder: "On necessites escalar? Imatge feble, conversió baixa, no saps com comunicar en vídeo...",
  formRevenueOptions: {
    option1: "Menys de 10k€/mes",
    option2: "10k–30k€/mes",
    option3: "30k–100k€/mes",
    option4: "Més de 100k€/mes",
  },
  formResetButton: "Enrere",
  formConfirmationSuccess: "✓ Hem rebut la teva candidatura.",
  formConfirmationDelay: "Et recontactarem en 24-48h si veiem encaixa.",
  formSubmissionDisclaimer: "Examinem el teu cas. Si veiem encaixa, t'invitem a una trucada. Sinó, no et fem perdre temps.",
  closingSubmissionDisclaimer: "La teva candidatura és examinada pel nostre equip. Si hi ha encaixa, et cridem en 24–48h. Sinó, te'l diem directament.",
  problemAgencyDisclaimer: "Cap agència te'l diu clar. Totes prometen \"transformació digital\" o \"vídeo que converteix\". Nosaltres no. Et diem exactament què farem, per què funciona, i què esperar. Sense fum.",

  // Form
  formBrand: "Quina és la teva marca o negoci?",
  formBrandPlaceholder: "La teva marca o negoci",
  formWhatSell: "Què vens i a quin tipus de client?",
  formWhatSellPlaceholder: "Descriu la teva oferta i client ideal",
  formWantChange: "Què vols que canviï en la teva presència o contingut en els propers 90 dies?",
  formWantChangePlaceholder: "Descriu els canvis que esperes",
  formProblem: "Quin problema sents avui amb la teva imatge, contingut o posicionament?",
  formProblemPlaceholder: "Cuéntanos el problema que veus",
  formRevenue: "Quina facturació mensual té actualment el negoci?",
  formInvestment: "Quina inversió estàs disposat a assumir?",
  formInvestmentOptions: {
    option1: "Menys de 1.500 €",
    option2: "1.500 € – 3.000 €",
    option3: "3.000 € – 5.000 €",
    option4: "5.000 €+",
  },
  formWhenStart: "Quan vols començar?",
  formWhyPulso: "Per què creus que Pulso pot ser el partner adequat?",
  formWhyPulsoPaceholder: "Cuéntanos per què creus que encaixem",
  formSubmit: "Enviar candidatura",
};

export const messages: Record<Locale, LocaleContent> = {
  es,
  fr,
  ca,
};

export function getLocale(locale?: string): Locale {
  if (locale && locales.includes(locale as Locale)) {
    return locale as Locale;
  }
  return defaultLocale;
}

export function getMessage(locale: Locale): LocaleContent {
  return messages[locale];
}
