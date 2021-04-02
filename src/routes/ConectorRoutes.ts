import { Router } from 'express';
import SessionService from '../services/Conector/sessionService';
import ConectorController from '../controllers/Conector/ConectorController';

const route = Router();
const conectorController = new ConectorController();
const sessionService = new SessionService();

route.post('/conector', conectorController.create);
route.delete('/conector/:id', conectorController.delete);
route.get('/conector', conectorController.read);
route.put('/conector', conectorController.update);
route.get('/conector/filters', conectorController.filter);
route.get('/jwt', sessionService.createSession);

export default route;
