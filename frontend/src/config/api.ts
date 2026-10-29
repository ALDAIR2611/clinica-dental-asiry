
const API_URL = (
  import.meta.env.VITE_API_URL ?? 'http://localhost:3000/api'
).replace(/\/+$/, '');

export interface ApiService {
  id: string;
  name: string;
  description: string;
  icon: string;
}

interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

export async function getServices(): Promise<ApiService[]> {
  const response = await fetch(`${API_URL}/services`, {
    headers: {
      Accept: 'application/json'
    }
  });

  if (!response.ok) {
    throw new Error(`No se pudieron cargar los servicios (${response.status}).`);
  }

  const result = (await response.json()) as ApiResponse<ApiService[]>;

  if (!result.success || !Array.isArray(result.data)) {
    throw new Error('La API devolvió una respuesta no válida.');
  }

  return result.data;
}

export async function checkApiHealth(): Promise<boolean> {
  const response = await fetch(`${API_URL}/health`, {
    headers: {
      Accept: 'application/json'
    }
  });

  if (!response.ok) {
    return false;
  }

  const result = (await response.json()) as {
    success?: boolean;
  };

  return result.success === true;
}
