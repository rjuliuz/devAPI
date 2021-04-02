import { Request, Response, NextFunction } from 'express';
import SessionRepository from '../../services/Conector/sessionService';

class SessionComtroller {
  async create(request: Request, response: Response) {
    try {
      const sessionRepository = new SessionRepository();
      const resp = await sessionRepository.createSession();
      return response.status(200).json(resp);
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }

  async read(request: Request, response: Response, next: NextFunction) {
    try {
      const token = request.headers.authorization;
      const sessionRepository = new SessionRepository();
      const validToken = token.split(':');
      const resp = await sessionRepository.verifySession(validToken[1]);
      if (resp) {
        return next();
      }
      return null;
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

export default new SessionComtroller();
