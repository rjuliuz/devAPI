import { v4, validate } from 'uuid';
import Conector from '../../models/Conector/Conector';
import ConectorRepository from '../../repositories/Conector/ConectorRepository';

export default class ConectorServices {
  conectorRepository: ConectorRepository;

  constructor() {
    this.conectorRepository = new ConectorRepository();
  }

  async createConectorService(conector: Conector) {
    conector.id = v4();

    try {
      const conectorExist = await this.conectorRepository.findByName(conector);

      if (conectorExist.length !== 0) {
        throw new Error('conector or conectoname already exist.');
      } else {
        await this.conectorRepository.insertNewConector(conector);

        return conector;
      }
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async deleteConectorService(data: Conector) {
    try {
      const isValidId = validate(data.id);
      if (isValidId) {
        const deleteConector = await this.conectorRepository.deleteById(data);

        return { status: 'Conector delete with successfully' };
      }

      throw new Error('The ID provide is not valid.');
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async listAllConectorService() {
    try {
      const updateConector = await this.conectorRepository.listAllConectors();
      return updateConector;
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async updateConectorService(conector: Conector) {
    try {
      const response = await this.conectorRepository.updateConector(conector);
      if (response === 1) {
        return { status: 'Conector update with successfully' };
      }

      throw new Error('somethig wrong with database');
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async listByFiltersService(conector: Conector) {
    try {
      const response = await this.conectorRepository.findBySplitData(conector);
      return response;
    } catch (err) {
      throw new Error(err.message);
    }
  }
}
