import ConectorRepositoryDTO from './ConectorReposotiryDTO';
import connection from '../../database/connection';
import Conector from '../../models/Conector/Conector';

export default class ConectorRepository implements ConectorRepositoryDTO {
  response: Array<any> | number;

  async findByName(data: Conector) {
    if (!data.name) {
      throw new Error('You need provide a name to execute this method');
    }

    try {
      this.response = await connection('conectors')
        .select('*')
        .where('name', data.name);

      return this.response;
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async deleteById(data: Conector) {
    try {
      this.response = await connection('conectors').del().where('id', data.id);
      return this.response;
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async insertNewConector(conector: Conector) {
    if (!conector) {
      throw new Error('You need provide a conector data for muse this mesthod');
    }

    try {
      this.response = await connection('conectors').insert({
        id: conector.id,
        name: conector.name,
        type: conector.type,
        privacy: conector.privacy,
        base_url: conector.base_URL,
        logo_url: conector.logo_URL,
        category: conector.category,
        description: conector.description,
        status: conector.status,
      });
      if (this.response === 1) {
        return [conector.id, conector.name];
      }

      return 0;
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async findBySplitData(conector: Conector) {
    try {
      const response = await connection.raw(
        `select * from conectors where name like '%${conector.name}%' or type = '${conector.type}' or privacy = '${conector.privacy}' or category = '${conector.category}'`,
      );
      return response;
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async listAllConectors() {
    try {
      const response = await connection('conectors').select('*');
      return response;
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async updateConector(conector: Conector) {
    try {
      const response = await connection('conectors')
        .where('id', conector.id)
        .update({
          name: conector.name,
          type: conector.type,
          privacy: conector.privacy,
          base_url: conector.base_URL,
          logo_url: conector.logo_URL,
          category: conector.category,
          description: conector.description,
          status: conector.status,
        });

      return response;
    } catch (err) {
      throw new Error(err.message);
    }
  }
}
