import { Request, Response } from 'express';

export default interface UserControllerDTO {
  create(request: Request, response: Response): void;
  delete(request: Request, response: Response): void;
  update(request: Request, response: Response): void;
  read(request: Request, response: Response): void;
  filter(request: Request, response: Response): void;
}
