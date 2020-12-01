import * as express from 'express';
import * as bodyparser from 'body-parser';
import { notFoundRoute, errorHandler } from './libs/routes';
import Database from './libs/Database';
import mainRouter from './router';
import * as swaggerUi from 'swagger-ui-express';
import * as swaggerDoc from './swagger.json';

class Server {
    app;
    constructor(private config) {
        this.app = express();
    }

    public initBodyParser() {
        this.app.use(bodyparser.json());
    }

    bootstrap() {
        this.initBodyParser();
        this.setupRoutes();
        return this;
    }

    public setupRoutes() {
        this.app.use('/health-check', (req, res, next) => {
            res.send('I am Ok');
            next();
        });
        this.app.use('/api', mainRouter);
        this.app.use(notFoundRoute);
        this.app.use(errorHandler);
        this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
        return this;
    }

    run() {
        const { app, config: { PORT, MONGO_URL } } = this;
        Database.open(MONGO_URL)
            .then((res) => {

                app.listen(PORT, (err) => {
                    if (err) {
                        console.log(err);
                    }
                    console.log(`App is running on port ${PORT}`);
                });
            })
            .catch(err => console.log(err));
    }
}

export default Server;
