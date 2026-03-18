'use client';

import { useLocale } from '@/hooks/useLocale';

export default function LegalPage() {
  const { locale } = useLocale();

  const legalContent = {
    es: {
      title: 'Aviso Legal',
      sections: [
        {
          heading: '1. Denominación y Datos de la Empresa',
          content: 'Denominación social: Pulso - Agencia Audiovisual\nTerritorio de operación: Principat d\'Andorra\nContacto: info@pulso.ad'
        },
        {
          heading: '2. Objeto Social',
          content: 'Pulso es una agencia especializada en servicios de producción audiovisual y marketing de contenidos. Nuestras actividades incluyen: producción y dirección de vídeo, fotografía profesional, estrategia de contenidos audiovisuales y consultoría en presencia digital para marcas, emprendedores y agencias.'
        },
        {
          heading: '3. Legislación Aplicable',
          content: 'Este sitio web y todas las relaciones derivadas del mismo se rigen por la legislación de Andorra. Las partes se someten a la jurisdicción de los juzgados y tribunales competentes de Andorra.'
        },
        {
          heading: '4. Limitación de Responsabilidad',
          content: 'Pulso no garantiza la disponibilidad ininterrumpida del sitio web. No somos responsables de daños y perjuicios causados por el acceso, uso o no uso de este sitio web, ni por errores, omisiones o fallos técnicos.'
        },
        {
          heading: '5. Propiedad Intelectual',
          content: 'Todo el contenido del sitio web (textos, imágenes, vídeos, diseños, logotipos) es propiedad de Pulso o de terceros que nos han otorgado permiso para su uso. Queda prohibida la reproducción, distribución o transmisión sin consentimiento previo.'
        },
        {
          heading: '6. Política de Enlaces',
          content: 'Pulso no se responsabiliza de los contenidos de terceros vinculados desde nuestro sitio web. El acceso a enlaces externos se realiza por cuenta y riesgo del usuario.'
        },
        {
          heading: '7. Modificaciones',
          content: 'Pulso se reserva el derecho de modificar este aviso legal en cualquier momento. Los cambios entrarán en vigor desde el momento de su publicación en el sitio web.'
        }
      ]
    },
    fr: {
      title: 'Avis Juridique',
      sections: [
        {
          heading: '1. Dénomination et Données de l\'Entreprise',
          content: 'Dénomination sociale : Pulso - Agence Audiovisuelle\nTerritoire d\'opération : Principat d\'Andorre\nContact : info@pulso.ad'
        },
        {
          heading: '2. Objet Social',
          content: 'Pulso est une agence spécialisée dans les services de production audiovisuelle et de marketing de contenu. Nos activités incluent : production et réalisation vidéo, photographie professionnelle, stratégie de contenu audiovisuel et conseil en présence numérique pour les marques, entrepreneurs et agences.'
        },
        {
          heading: '3. Législation Applicable',
          content: 'Ce site web et toutes les relations qui en découleront sont régis par la législation d\'Andorre. Les parties se soumettent à la juridiction des tribunaux compétents d\'Andorre.'
        },
        {
          heading: '4. Limitation de Responsabilité',
          content: 'Pulso ne garantit pas la disponibilité ininterrompue du site web. Nous ne sommes pas responsables des dommages causés par l\'accès, l\'utilisation ou non-utilisation de ce site web, ni des erreurs, omissions ou défaillances techniques.'
        },
        {
          heading: '5. Propriété Intellectuelle',
          content: 'Tout contenu du site web (textes, images, vidéos, designs, logos) est la propriété de Pulso ou de tiers qui nous ont autorisé son utilisation. La reproduction, distribution ou transmission sans consentement préalable est interdite.'
        },
        {
          heading: '6. Politique de Liens',
          content: 'Pulso n\'est pas responsable du contenu de tiers liés depuis notre site web. L\'accès aux liens externes se fait aux risques et périls de l\'utilisateur.'
        },
        {
          heading: '7. Modifications',
          content: 'Pulso se réserve le droit de modifier cet avis juridique à tout moment. Les modifications prendront effet dès leur publication sur le site web.'
        }
      ]
    },
    ca: {
      title: 'Avís Legal',
      sections: [
        {
          heading: '1. Denominació i Dades de l\'Empresa',
          content: 'Denominació social: Pulso - Agència Audiovisual\nTerritorio d\'operació: Principat d\'Andorra\nContacte: info@pulso.ad'
        },
        {
          heading: '2. Objecte Social',
          content: 'Pulso és una agència especialitzada en serveis de producció audiovisual i màrqueting de continguts. Les nostres activitats inclouen: producció i direcció de vídeo, fotografia professional, estratègia de continguts audiovisuals i consultoria en presència digital per a marques, emprenedors i agències.'
        },
        {
          heading: '3. Legislació Aplicable',
          content: 'Aquest lloc web i totes les relacions que se\'n derivin es regeixen per la legislació d\'Andorra. Les parts se sotmeten a la jurisdicció dels jutjats i tribunals competents d\'Andorra.'
        },
        {
          heading: '4. Limitació de Responsabilitat',
          content: 'Pulso no garanteix la disponibilitat ininterrompuda del lloc web. No som responsables dels danys i perjudicis causats per l\'accés, ús o no ús d\'aquest lloc web, ni per errors, omissions o fallades tècniques.'
        },
        {
          heading: '5. Propietat Intel·lectual',
          content: 'Tot el contingut del lloc web (textos, imatges, vídeos, dissenys, logos) és propietat de Pulso o de tercers que ens han otorgat permís per al seu ús. Queda prohibida la reproducció, distribució o transmissió sense consentiment previ.'
        },
        {
          heading: '6. Política d\'Enllaços',
          content: 'Pulso no es responsable dels continguts de tercers vinculats des del nostre lloc web. L\'accés a enllaços externs es realitza per compte i risc de l\'usuari.'
        },
        {
          heading: '7. Modificacions',
          content: 'Pulso es reserva el dret de modificar aquest avís legal en qualsevol moment. Els canvis entraran en vigor des del moment de la seva publicació al lloc web.'
        }
      ]
    }
  };

  const content = legalContent[locale as keyof typeof legalContent] || legalContent.es;

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
