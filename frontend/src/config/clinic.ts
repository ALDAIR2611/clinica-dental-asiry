const whatsappNumber = (
  import.meta.env.VITE_WHATSAPP_NUMBER ?? '51902504815'
).replace(/\D/g, '');

if (!/^51\d{9}$/.test(whatsappNumber)) {
  throw new Error(
    'Configura VITE_WHATSAPP_NUMBER con un celular peruano válido.'
  );
}

export const clinic = {
  name: 'Clínica Dental Asiry',
  tagline: 'Cuidamos tu sonrisa',
  address:
    'Pj. Los Girasoles, Mz. C, Lt. 19, Urb. Villa Génova, San Martín de Porres',
  locationShort: 'San Martín de Porres, Lima, Perú',
  phoneDisplay: '928 162 075',
  alternatePhoneDisplay: '929 306 335',
  whatsappNumber,
  whatsappMessage:
    'Hola, Clínica Dental Asiry. Quisiera información sobre sus servicios y cómo agendar una cita.',
  services: [
    {
      id: 'extracciones',
      title: 'Extracción dental',
      description:
        'Evaluación profesional y atención según las necesidades de cada paciente.',
      icon: 'tooth'
    },
    {
      id: 'endodoncia',
      title: 'Endodoncia',
      description:
        'Tratamientos orientados a conservar las piezas dentales.',
      icon: 'activity'
    },
    {
      id: 'limpieza',
      title: 'Limpieza dental',
      description:
        'Profilaxis dental y orientación sobre higiene bucal.',
      icon: 'sparkles'
    },
    {
      id: 'brackets',
      title: 'Ortodoncia',
      description:
        'Evaluación de la alineación dental y opciones de tratamiento.',
      icon: 'smile'
    },
    {
      id: 'blanqueamiento',
      title: 'Blanqueamiento dental',
      description:
        'Consulta sobre alternativas de blanqueamiento supervisado.',
      icon: 'sun'
    },
    {
      id: 'coronas-puentes',
      title: 'Coronas y puentes',
      description:
        'Alternativas para restaurar piezas dentales según evaluación.',
      icon: 'layers'
    },
    {
      id: 'protesis',
      title: 'Prótesis dentales',
      description:
        'Orientación sobre prótesis parciales y totales.',
      icon: 'heart-pulse'
    }
  ]
} as const;

export function getWhatsAppUrl(
  message: string = clinic.whatsappMessage
): string {
  const params = new URLSearchParams({ text: message });

  return `https://wa.me/${clinic.whatsappNumber}?${params.toString()}`;
}
