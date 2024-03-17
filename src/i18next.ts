import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  // lenguaje por defecto
  lng: "es",
  // lenguaje en caso de no encontrar la traducción que quiere el user
  fallbackLng: "es",
  // para evitar los ataques xss pero ya react lo hace, asi que false.
  interpolation: {
    escapeValue: false,
  },
  // traducciones
  resources: {
    en: {
      translation: {
        // navBar
        navCompany: "Our Company",
        navServices: "Our Services",
        navContact: "Contact Us",
        navShortCompany: "Company",
        navShortServices: "Services",
        navShortContact: "Contact",
        userPortal: "User Portal",
        //sideMenu
        sideLocation: "Location",
        sideWhyUs: "Wy Us?",

        // header
        homeHeaderTitle: "Your well-being is our priority",
        aboutHeaderTitle: "Our Company",
        aboutWhyUsTitle: "Why Us",
        servicesHeaderTitle: "Our services",
        contactHeaderTitle: "Contact Us",
        // buttons
        btnContact: "Contact Us",
        btnSeeMore: "See more",

        // services
        injuryCare: "Injury Care",
        drugAlcoholTesting: "Drug and alcohol testing",
        physicalExam: "Physical Exam",
        preventiveMedicine: "Preventive medicine",
        immigrationMedicalExamination: "Immigration medical examination",
        fastAttention: "Fast attention",
        servicesMRO: "MRO Services",
        employeeProgram: "Employee Program",
        normativeCompliance: "Normative compliance",
        sampleCollection: "24h sample collection",
        collectionSites: "Network of collection sites",
        servicesDOT: "DOT Services",

        // subtítulos
        moyaMedical: "Moya Medical",
        exploreServices: "Explore all our services",
        ourMission: "Our Mission",
        whyUs: "Why Us",
        testimonies: "Testimonies",
        contact: "Contact",
        services: "Services",
        details: "Details",
        // copyRight
        copyRight: "Moya Medical. All right reserved",
      },
    },
    es: {
      translation: {
        // navBar
        navCompany: "Nuestra compañía",
        navServices: "Nuestros servicios",
        navContact: "Contáctenos",
        navShortCompany: "Compañía",
        navShortServices: "Servicios",
        navShortContact: "Contáctenos",
        userPortal: "Portal de usuario",
        //sideMenu
        sideLocation: "Ubicación en el mapa",
        sideWhyUs: "¿Por qué nosotros?",
        // header
        homeHeaderTitle: "Tu bienestar es nuestra prioridad",
        aboutHeaderTitle: "Nuestra compañía",
        aboutWhyUsTitle: "Por qué nosotros",
        servicesHeaderTitle: "Nuestros servicios",
        contactHeaderTitle: "Contáctenos",
        // buttons
        btnContact: "Contáctenos",
        btnSeeMore: "Ver más",
        // services
        injuryCare: "Atención a lesiones",
        drugAlcoholTesting: "Pruebas de droga y alcohol",
        physicalExam: "Examen físico",
        preventiveMedicine: "Medicina preventiva",
        immigrationMedicalExamination: "Examen médico de inmigración",
        fastAttention: "Atención rápida",
        servicesMRO: "Servicios MRO",
        employeeProgram: "Programa de asistencia a empleados",
        normativeCompliance: "Cumplimiento normativo",
        sampleCollection: "Recolección de muestras 24h",
        collectionSites: "Red de sitios de recolección",
        servicesDOT: "Servicios DOT",

        // subtítulos
        exploreServices: "Explora todos nuestros servicios",
        moyaMedical: "Moya Medical",
        ourMission: "Nuestra misión",
        whyUs: "Por qué nosotros",
        testimonies: "Testimonios",
        contact: "Contáctenos",
        services: "Servicios",
        details: "Detalles",
        // copyRight
        copyRight: "Moya Medical. Todos los derechos reservados",
      },
    },
  },
});

export default i18next;
