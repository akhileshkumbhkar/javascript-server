import { Request, Response, NextFunction } from 'express';
export default ( err, req: Request , res: Response , next: NextFunction ) => {

  res.send({
        'error' : err.err,
        'message' : err.code,
        'status' : err.message || 'Error',
        timeStamp : new Date()
    });
};
