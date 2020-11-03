import { NextFunction, Request, Response } from 'express';

export default ( config ) => ( req: Request, res: Response, next: NextFunction  ) => {
    const inValid = [];
    console.log(Object.keys( req.query ).length );

    for (const  index of Object.keys(config)) {
        const check = config[index];
         const values = check.in.map( ( val ) => {
            return req[ val ][ index ];
        });

        if (Object.keys( req[check.in] ).length === 0) {
            inValid.push({
                index: {index},
                location: check.in,
                message: check.errorMessage || `Values should be gone through ${check.in}`,
            });
        }

        console.log('values is' , values);
        if (check.required) {
            if (isNull(values[0])) {
                inValid.push({
                    index: {index},
                    location: check.in,
                    message: check.errorMessage || `${index} is must required`,
                });
            }
        }

        if (check.string) {
            if ( !( typeof ( values[0] ) === 'string' ) ) {
                inValid.push({
                    index: {index},
                    location: check.in,
                    message: check.errorMessage || `${index} must be a String`,
                });
            }
        }

        if (check.isObject) {
            if ( !( typeof ( values ) === 'object' ) ) {
                inValid.push({
                    index: {index},
                    location: check.in,
                    message: check.errorMessage || `${index} Should be an object`,
                });
            }
        }

        if (check.regex) {
            const regex = check.regex;
            if (!regex.test(values[0])) {
                inValid.push({
                    index: {index},
                    location: check.in,
                    message: check.errorMessage || `${index} is not valid `,
                });
            }
        }

        if (check.default) {
            if ( isNull (values[0]) || values === undefined ) {
                inValid.push ( {
                    index: {index},
                    location: check.in,
                    message: check.errorMessage || `${index}  must be an default` ,
                });
            }
        }

        if (check.number) {
            if (isNull(values[0]) || values[0] === undefined) {
                inValid.push({
                    index: {index},
                    location: check.in,
                    message: check.errorMessage || `${index}  must be number ` ,
                });
            }
        }
    }

    if (inValid.length > 0) {
        res.status(400).send({ inValid});
    }
    else {
        next();
    }
};

function isNull ( check ) {
    const n = ( check === undefined || check === null );
    return n;
  }
