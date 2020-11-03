import { Request , Response , NextFunction } from 'express';

class TraineeController {
    static instance: TraineeController ;

    static getInstance() {
        if ( TraineeController.instance ) {
            return TraineeController.instance;
        }
        TraineeController.instance = new TraineeController();
        return TraineeController.instance;
    }

get( req: Request, res: Response , next: NextFunction ) {
    try {
        console.log( `Insode Get route of Trainee Controller ` );
        res.status(200).json( {
            message : 'Trainee Displayed Successfully',
            data : {
                name : 'Akhilesh',
                branch : 'Noida'
            }
        });
    }
    catch ( err ) {
        console.log( `Error occured ${ err }` );
    }
}

post( req: Request, res: Response , next: NextFunction ) {
    try {
        console.log(`Inside Post/Create route of Trainee Controller `);
        res.status( 200 ).json( {
            message: 'Trainee Added Successfully',
            data: {
                id: req.body.id,
                name: req.body.name
                }
        });
    }
    catch ( err ) {
        console.log(`Error occured ${err}`);
    }
}

put( req: Request, res: Response , next: NextFunction ) {
    try {
        console.log(`Insode put route of Trainee Controller `);
        res.status(200).json({
            message : 'Trainee Updated Successfully',
            data : {
                name : 'Akhilesh',
                branch : 'Noida'
            }
        });
    }
    catch ( err ) {
        console.log(`Error occured ${err}`);
    }
}

delete( req: Request, res: Response , next: NextFunction ) {
    try {
        console.log(`Insode delte route of Trainee Controller `);

        res.status(200).json({
            message : 'Trainee Deleted Successfully',
            data : {
                name : 'Akhilesh',
                branch : 'Noida'
            }
        });
    }
    catch ( err ) {
        console.log(`Error occured ${err}`);
    }
}
}

export default TraineeController.getInstance();
