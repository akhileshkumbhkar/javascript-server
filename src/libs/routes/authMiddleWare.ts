import * as jwt from 'jsonwebtoken';
import hasPermission2 from './Permission';
export default ( module: any , permissionType: string ) => ( req, res, next ) => {

    try {
  const token = req.headers.authorization;
  const User = jwt.verify( token, 'qwertyuiopasdfghjklzxcvbnm123456' );
  const result = hasPermission2( module , User.Role , permissionType );
    if ( result === true )
        next();
    else {
        next ( {
            message: 'Unauthorised',
            status: 403
        } );
    }
    }
    catch ( err ) {
        next ( {
            message: err
        } );
    }
};
