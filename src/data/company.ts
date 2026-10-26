export const company = {
  name: 'SDI Ingenieros',
  legalName: 'SDI Ingenieros SA',
  email: 'soporte@sdi.com.pe',
  phone: '+51 997 084 825',
  whatsapp: '51997084825',
  address: 'Vittore Carpaccio 326, Santiago de Surco',
  // Agregar únicamente los perfiles oficiales confirmados. Se muestran automáticamente.
  socials: [] as { name: string; url: string }[],
};

export const whatsappUrl = (message = 'Hola, SDI Ingenieros. Me gustaría recibir información sobre sus servicios de puesta a tierra.') =>
  `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`;

export const services = [
  { id: 'diseno', title: 'Diseño de sistemas', category: 'Ingeniería', icon: 'plan', brief: 'Cada terreno es distinto. Cada solución también.', description: 'Ingeniería detallada de sistemas de puesta a tierra, cálculos de resistividad, selección de materiales y planos de instalación optimizados para cada tipo de suelo y requerimiento del proyecto.' },
  { id: 'verticales', title: 'Puesta a tierra vertical', category: 'Instalación', icon: 'ground', brief: 'Seguridad que empieza desde la base.', description: 'Instalación de electrodos verticales, varillas, tubos o placas mediante técnicas especializadas para obtener bajas resistencias en distintos terrenos, con profundidad y contacto efectivos.' },
  { id: 'horizontales', title: 'Puesta a tierra horizontal', category: 'Instalación', icon: 'grid', brief: 'Protección distribuida para tus instalaciones.', description: 'Instalación de conductores, cintas, cables y perfiles enterrados en mallas o anillos que distribuyen las corrientes de falla, para terrenos de alta resistividad o de cobertura extensa.' },
  { id: 'mediciones', title: 'Pruebas y mediciones', category: 'Diagnóstico', icon: 'pulse', brief: 'Medir con precisión para decidir con confianza.', description: 'Estudios de resistividad del suelo con el método Wenner de cuatro puntas. Mediciones de resistencia de puesta a tierra, continuidad y potenciales de paso y contacto para el diseño y evaluación de tus instalaciones.' },
  { id: 'mantenimiento', title: 'Mantenimiento integral', category: 'Mantenimiento', icon: 'tool', brief: 'Un sistema seguro hoy y a lo largo del tiempo.', description: 'Mantenimiento preventivo y correctivo: inspección periódica, limpieza, protección contra la corrosión, reparación y pruebas de resistencia. Documentación de hallazgos y acciones correctivas.' },
  { id: 'asesoria', title: 'Asesoría técnica y normativa', category: 'Consultoría', icon: 'shield', brief: 'Experiencia técnica en cada decisión.', description: 'Asesoría sobre normas técnicas locales e internacionales relacionadas con puesta a tierra, incluyendo IEEE, IEC y NFPA. Estudios de factibilidad, evaluaciones de riesgo y recomendaciones para optimizar diseños existentes.' },
];

export const clients = [
  'Policlínico Parroquial La Trinidad',
  'Águilas Metálicas · Venta y Alquileres de Andamios',
  'Centro Oftalmológico Oftalmo RETINA',
  'Infiglass SA',
  'Ceron Glass EIRL',
  'Colegio Parroquial La Anunciación',
  'Centro de Estética Amarantha Salón EIRL',
  'Maderera Hnos. Rodriguez SRL',
];

export const testimonials = [
  { quote: 'La precisión y profesionalismo de SDI Ingenieros en nuestros proyectos de puesta a tierra han sido fundamentales para garantizar la seguridad de nuestras instalaciones médicas. Cumplen con todos los estándares internacionales y locales.', author: 'Dra. Elena Vargas', role: 'Directora de Ingeniería Clínica', company: 'Policlínico Parroquial La Trinidad' },
  { quote: 'Gracias a la expertise de SDI en sistemas de puesta a tierra horizontales y verticales, nuestros proyectos de andamios han mantenido los más altos niveles de seguridad eléctrica. Su trabajo es meticuloso y siempre cumplen con los plazos acordados.', author: 'Carlos Méndez', role: 'Gerente de Proyectos', company: 'Águilas Metálicas' },
  { quote: 'Los servicios de pruebas y mediciones de resistividad realizados por SDI Ingenieros nos han permitido optimizar nuestros diseños de puesta a tierra, asegurando eficiencia y cumplimiento normativo en nuestras instalaciones oftalmológicas.', author: 'Dr. Roberto Silva', role: 'Jefe de Mantenimiento Técnico', company: 'Centro Oftalmológico Oftalmo RETINA' },
  { quote: 'Valoramos altamente el compromiso de SDI Ingenieros con la calidad y la seguridad. Su asesoría técnica y normativa ha sido invaluable para asegurar que nuestras instalaciones de vidrio cumplan con todos los requisitos eléctricos de seguridad.', author: 'Patricia López', role: 'Responsable de Seguridad Industrial', company: 'Infiglass SA' },
];
