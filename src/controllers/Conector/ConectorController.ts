import { Request, Response } from 'express';
import ConectorControllerDTO from './ConectorControllerDTO';
import Conector from '../../models/Conector/Conector';
import ConectorService from '../../services/Conector/ConectorServices';

interface RequestBody {
  id?: string;
  name: string;
  type: string;
  privacy: string;
  base_url: string;
  logo_url: string;
  category: string;
  description: string;
  status: string;
}

export default class ConectorController implements ConectorControllerDTO {
  async create(request: Request, response: Response) {
    try {
      const {
        name,
        type,
        privacy,
        base_url,
        logo_url,
        category,
        description,
        status,
      }: RequestBody = request.body;
      const conector = new Conector();
      const conectorService = new ConectorService();
      conector.name = name;
      conector.type = type;
      conector.privacy = privacy;
      conector.base_URL = base_url;
      conector.logo_URL = logo_url;
      conector.category = category;
      conector.description = description;
      conector.status = status;
      const resp = await conectorService.createConectorService(conector);

      return response.json(resp);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }

  async delete(request: Request, response: Response) {
    try {
      let { id } = request.params;
      id = id.toString();
      const conector = new Conector();
      conector.id = id;
      const conectorService = new ConectorService();
      return response
        .status(200)
        .json(await conectorService.deleteConectorService(conector));
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }

  async read(request: Request, response: Response) {
    try {
      const conectorService = new ConectorService();
      const resp = await conectorService.listAllConectorService();
      return response.status(200).json(resp);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }

  async update(request: Request, response: Response) {
    try {
      const {
        id,
        name,
        type,
        privacy,
        base_url,
        logo_url,
        category,
        description,
        status,
      }: RequestBody = request.body;
      const conector = new Conector();
      const conectorService = new ConectorService();
      conector.id = id;
      conector.name = name;
      conector.type = type;
      conector.privacy = privacy;
      conector.base_URL = base_url;
      conector.logo_URL = logo_url;
      conector.category = category;
      conector.description = description;
      conector.status = status;
      const resp = await conectorService.updateConectorService(conector);

      return response.json(resp);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }

  async filter(request: Request, response: Response) {
    try {
      const { name, category, type, privacy } = request.body;

      const conector = new Conector();
      conector.name = name || null;
      conector.category = category || null;
      conector.type = type || null;
      conector.privacy = privacy || null;

      const conectorService = new ConectorService();
      return response
        .status(200)
        .json(await conectorService.listByFiltersService(conector));
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}
