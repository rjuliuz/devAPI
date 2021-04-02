import jwt from 'jsonwebtoken';

class SessionRepository {
  secretKey: string;

  constructor() {
    this.secretKey = '1620927fa5996575ab95e839a4cb1b69';
  }

  async createSession() {
    try {
      const response = jwt.sign({ acess: 'Ok' }, this.secretKey);
      return { accessToken: response };
    } catch (err) {
      throw new Error(err.message);
    }
  }

  async verifySession(token: string) {
    try {
      const validation = jwt.verify(token, this.secretKey);
      return validation;
    } catch (err) {
      throw new Error(err.message);
    }
  }
}

export default SessionRepository;
