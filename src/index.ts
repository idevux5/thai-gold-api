import express from 'express';
import cors from 'cors';
import priceRouter from './routers/price';

const app = express();
app.use(cors());
app.use('/api', priceRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
