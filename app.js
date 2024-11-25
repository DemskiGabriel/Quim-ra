const express = require('express');
const cors = require('cors');
const app = express();

const chacalRoute = require('./src/routes/chacal.route');
const userRoute = require('./src/routes/user.route');

const connectDatabase = require('./src/database/db');
const port = 3000;

connectDatabase();

app.use(cors());

// Configuração para aceitar payloads maiores
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

app.use("/chacal", chacalRoute);
app.use("/", userRoute);

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));  