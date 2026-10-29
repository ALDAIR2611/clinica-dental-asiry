
import { Router } from 'express';
import { z } from 'zod';

const router = Router();

const services = [
  {
    id: 'extracciones',
    name: 'Extracción dental',
    description: 'Evaluación y atención odontológica para extracciones.',
    icon: 'tooth'
  },
  {
    id: 'endodoncia',
    name: 'Endodoncia',
    description: 'Tratamientos destinados a conservar piezas dentales.',
    icon: 'activity'
  },
  {
    id: 'limpieza',
    name: 'Limpieza dental',
    description: 'Profilaxis y orientación para la higiene bucal.',
    icon: 'sparkles'
  },
  {
    id: 'brackets',
    name: 'Ortodoncia',
    description: 'Evaluación de la alineación dental y alternativas de tratamiento.',
    icon: 'smile'
  },
  {
    id: 'blanqueamiento',
    name: 'Blanqueamiento dental',
    description: 'Evaluación profesional de opciones de blanqueamiento.',
    icon: 'sun'
  },
  {
    id: 'coronas-puentes',
    name: 'Coronas y puentes',
    description: 'Opciones de restauración y rehabilitación dental.',
    icon: 'layers'
  },
  {
    id: 'protesis',
    name: 'Prótesis dentales',
    description: 'Evaluación de alternativas protésicas parciales o totales.',
    icon: 'heart-pulse'
  }
];

const serviceQuerySchema = z.object({
  search: z.string().trim().max(80).optional()
});

router.get('/', (req, res) => {
  const parsed = serviceQuerySchema.safeParse(req.query);

  if (!parsed.success) {
    return res.status(400).json({
      success: false,
      message: 'Parámetros de búsqueda no válidos.'
    });
  }

  const search = parsed.data.search?.toLocaleLowerCase('es') ?? '';

  const results = services.filter((service) => {
    const content =
      `${service.name} ${service.description}`.toLocaleLowerCase('es');

    return content.includes(search);
  });

  return res.status(200).json({
    success: true,
    data: results
  });
});

router.get('/:id', (req, res) => {
  const service = services.find((item) => item.id === req.params.id);

  if (!service) {
    return res.status(404).json({
      success: false,
      message: 'Servicio no encontrado.'
    });
  }

  return res.status(200).json({
    success: true,
    data: service
  });
});

export default router;
