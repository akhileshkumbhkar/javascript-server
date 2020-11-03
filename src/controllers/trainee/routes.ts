import * as express from 'express';
import TraineeController from './controller';
import validationHandler from '../../libs/routes/validationHandler';
import config from './validation';

const traineeRoutes = express.Router();

traineeRoutes.route('/')
        .get( validationHandler( config.get ) , TraineeController.get )
        .post( validationHandler( config.create ) , TraineeController.post )
        .put( validationHandler( config.update ) , TraineeController.put )
        .delete( validationHandler( config.Delete ) , TraineeController.delete );

export default traineeRoutes;