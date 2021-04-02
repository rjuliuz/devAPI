import IConector from './IConector';

export default class Conector implements IConector {
  id?: string;

  name: string;

  type: string;

  privacy: string;

  base_URL: string;

  logo_URL: string;

  category: string;

  description: string;

  status: string;
}
