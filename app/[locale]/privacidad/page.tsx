'use client';

import { useLocale } from '@/hooks/useLocale';

export default function PrivacyPage() {
  const { locale } = useLocale();

  const privacyContent = {
    es: {
      title: 'Política de Privacidad',
      sections: [
        {
          heading: '1. Responsable del Tratamiento',
          content: 'Pulso - Agencia Audiovisual\nContacto: hola@pulso.ad\nUbicación: Principat d\'Andorra'
        },
        {
          heading: '2. Datos Personales Recogidos',
          content: 'A través de nuestros formularios y servicios, podemos recopilar los siguientes datos personales:\n• Nombre completo\n• Correo electrónico\n• Teléfono de contacto\n• Información sobre tu negocio o proyecto\n• Información de ubicación (país, ciudad)'
        },
        {
          heading: '3. Finalidad del Tratamiento',
          content: 'Los datos personales que recopilamos se utilizan exclusivamente para:\n• Responder a solicitudes de información\n• Gestionar propuestas de proyectos\n• Mantener contacto sobre servicios audiovisuales\n• Enviar actualizaciones relevantes sobre nuestros servicios (con consentimiento previo)'
        },
        {
          heading: '4. Base Legal',
          content: 'El tratamiento de tus datos se basa en tu consentimiento explícito al rellenar nuestros formularios. No realizamos tratamiento basado en otras bases legales sin tu conocimiento.'
        },
        {
          heading: '5. Plazo de Conservación',
          content: 'Conservaremos tus datos personales mientras exista una relación comercial activa o potencial. Una vez concluida, los datos se eliminarán en un plazo de 12 meses, salvo obligación legal que requiera su conservación.'
        },
        {
          heading: '6. Derechos del Usuario',
          content: 'Tienes los siguientes derechos sobre tus datos personales:\n• Derecho de acceso: solicitar qué datos tenemos sobre ti\n• Derecho de rectificación: corregir datos incorrectos\n• Derecho de supresión: pedir la eliminación de tus datos\n• Derecho de portabilidad: obtener una copia de tus datos en formato estructurado\n• Derecho de oposición: oponerte al tratamiento de tus datos\n\nPara ejercer estos derechos, contacta con hola@pulso.ad'
        },
        {
          heading: '7. Cookies',
          content: 'Utilizamos cookies técnicas y analíticas para mejorar tu experiencia en nuestro sitio. Obtenemos tu consentimiento a través de nuestro banner de cookies. Puedes gestionar o retirar tu consentimiento en cualquier momento a través de la configuración de tu navegador.'
        },
        {
          heading: '8. Seguridad',
          content: 'Implementamos medidas de seguridad técnicas y organizativas para proteger tus datos contra acceso no autorizado, alteración, divulgación o destrucción.'
        },
        {
          heading: '9. Cambios en esta Política',
          content: 'Pulso puede modificar esta política de privacidad en cualquier momento. Te notificaremos sobre cambios significativos mediante la publicación de una nueva versión en nuestro sitio web.'
        }
      ]
    },
    fr: {
      title: 'Politique de Confidentialité',
      sections: [
        {
          heading: '1. Responsable du Traitement',
          content: 'Pulso - Agence Audiovisuelle\nContact : hola@pulso.ad\nLocalisation : Principat d\'Andorre'
        },
        {
          heading: '2. Données Personnelles Collectées',
          content: 'Grâce à nos formulaires et services, nous pouvons collecter les données personnelles suivantes :\n• Nom complet\n• Adresse e-mail\n• Numéro de téléphone\n• Informations sur votre entreprise ou votre projet\n• Informations de localisation (pays, ville)'
        },
        {
          heading: '3. Finalité du Traitement',
          content: 'Les données personnelles que nous collectons sont utilisées exclusivement pour :\n• Répondre aux demandes d\'information\n• Gérer les propositions de projets\n• Maintenir le contact concernant les services audiovisuels\n• Envoyer des mises à jour pertinentes sur nos services (avec consentement préalable)'
        },
        {
          heading: '4. Base Juridique',
          content: 'Le traitement de vos données est basé sur votre consentement explicite lors du remplissage de nos formulaires. Nous n\'effectuons aucun traitement basé sur d\'autres bases juridiques sans votre connaissance.'
        },
        {
          heading: '5. Période de Conservation',
          content: 'Nous conserverons vos données personnelles tant qu\'il existe une relation commerciale active ou potentielle. Une fois conclue, les données seront supprimées dans un délai de 12 mois, sauf obligation légale.'
        },
        {
          heading: '6. Droits de l\'Utilisateur',
          content: 'Vous avez les droits suivants concernant vos données personnelles :\n• Droit d\'accès : demander quelles données nous avons sur vous\n• Droit de rectification : corriger les données incorrectes\n• Droit à l\'oubli : demander la suppression de vos données\n• Droit à la portabilité : obtenir une copie de vos données\n• Droit d\'opposition : vous opposer au traitement de vos données\n\nPour exercer ces droits, contactez hola@pulso.ad'
        },
        {
          heading: '7. Cookies',
          content: 'Nous utilisons des cookies techniques et analytiques pour améliorer votre expérience sur notre site. Nous obtenons votre consentement via notre banneau de cookies. Vous pouvez gérer ou retirer votre consentement à tout moment via les paramètres de votre navigateur.'
        },
        {
          heading: '8. Sécurité',
          content: 'Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles pour protéger vos données contre l\'accès non autorisé, la modification, la divulgation ou la destruction.'
        },
        {
          heading: '9. Modifications de cette Politique',
          content: 'Pulso peut modifier cette politique de confidentialité à tout moment. Nous vous notifierons des modifications importantes en publiant une nouvelle version sur notre site web.'
        }
      ]
    },
    ca: {
      title: 'Política de Privacitat',
      sections: [
        {
          heading: '1. Responsable del Tractament',
          content: 'Pulso - Agència Audiovisual\nContacte: hola@pulso.ad\nUbicació: Principat d\'Andorra'
        },
        {
          heading: '2. Dades Personals Recollides',
          content: 'A través dels nostres formularis i serveis, podem recopilar les següents dades personals:\n• Nom complet\n• Correu electrònic\n• Número de telèfon\n• Informació sobre el teu negoci o projecte\n• Informació de localització (país, ciutat)'
        },
        {
          heading: '3. Finalitat del Tractament',
          content: 'Les dades personals que recopilem s\'utilitzen exclusivament per a:\n• Respondre a sol·licituds d\'informació\n• Gestionar propostes de projectes\n• Mantenir contacte sobre serveis audiovisuals\n• Enviar actualitzacions rellevants sobre els nostres serveis (amb consentiment previ)'
        },
        {
          heading: '4. Base Legal',
          content: 'El tractament de les teves dades es basa en el teu consentiment explícit en omplir els nostres formularis. No realitzem tractament basat en altres bases legals sense el teu coneixement.'
        },
        {
          heading: '5. Termini de Conservació',
          content: 'Conservarem les teves dades personals mentre existeixi una relació comercial activa o potencial. Un cop concloesa, les dades s\'eliminaran en un termini de 12 mesos, tret que hi hagi obligació legal.'
        },
        {
          heading: '6. Drets de l\'Usuari',
          content: 'Tens els següents drets sobre les teves dades personals:\n• Dret d\'accés: sol·licitar quines dades tenim sobre tu\n• Dret de rectificació: corregir dades incorrectes\n• Dret a l\'oblit: demanar l\'eliminació de les teves dades\n• Dret a la portabilitat: obtenir una còpia de les teves dades\n• Dret d\'oposició: oposar-te al tractament de les teves dades\n\nPer exercir aquests drets, contacta amb hola@pulso.ad'
        },
        {
          heading: '7. Cookies',
          content: 'Utilitzem cookies tècniques i analítiques per millorar la teva experiència al nostre lloc. Obtenim el teu consentiment a través del nostre bàner de cookies. Pots gestionar o retirar el teu consentiment en qualsevol moment a través de la configuració del teu navegador.'
        },
        {
          heading: '8. Seguretat',
          content: 'Implementem mesures de seguretat tècniques i organitzatives per protegir les teves dades contra accés no autoritzat, alteració, divulgació o destrucció.'
        },
        {
          heading: '9. Canvis en aquesta Política',
          content: 'Pulso pot modificar aquesta política de privacitat en qualsevol moment. Et notificarem sobre canvis significatius publicant una nova versió al nostre lloc web.'
        }
      ]
    }
  };

  const content = privacyContent[locale as keyof typeof privacyContent] || privacyContent.es;

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#000000', color: '#ffffff', padding: '4rem 2rem' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '3rem', color: '#D4AF37' }}>
          {content.title}
        </h1>

        {content.sections.map((section, idx) => (
          <section key={idx} style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: '#D4AF37' }}>
              {section.heading}
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: '1.7', color: '#cccccc', whiteSpace: 'pre-wrap' }}>
              {section.content}
            </p>
          </section>
        ))}

        <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid #333', color: '#888' }}>
          <p style={{ fontSize: '0.875rem' }}>Última actualización: {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </main>
  );
}
