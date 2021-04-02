import Conector from '../../models/Conector/Conector';

export default interface ConectorRepositoryDTO {
  insertNewConector(data: Conector): Object;
  findByName(data: Conector): Object;
  deleteById(data: Conector): void;
  findBySplitData(data: Conector): Object;
  listAllConectors(): Promise<Array<any>>;
  updateConector(data: Conector): Object;
}
