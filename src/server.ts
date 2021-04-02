import express from 'express';
import cors from 'cors';
import conectorRoutes from './routes/ConectorRoutes';
import sessionController from './controllers/Conector/sessionController';

const app = express();
app.use(express.json());
const port = process.env.PORT || 3333;
app.use(sessionController.read);
app.use(conectorRoutes);

app.use(cors());
app.listen(port, () => console.log(`🕹 rodando na porta ${port}!! ⚛`));
