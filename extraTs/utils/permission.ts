import { permissions } from '../constants' ;
export default function hasPermission ( moduleName , role: string,  permissionType): boolean {
 if (permissions[moduleName] !== undefined) {
        console.log( 'Module Name found' ) ;
        if (permissions[moduleName][permissionType] !== undefined) {
            console.log( 'Permission Type found' );
            if (permissions[moduleName][permissionType] !== 'all') {
         return true ;
            }
            if (permissions[moduleName][permissionType].length > 0) {
            if (permissions[moduleName][permissionType].indexOf ( role ) ! === -1) {
                    console.log ('Role found') ;
                    return true ;
                }
                else {
                    console.log('Role not found') ;
                    return false ;
                }
            }
            else {
                console.log( 'No role available for delete' ) ;
                if (role === '') {
                    return true ;
                }
                else {
                    return false ;
                }
            }
        }
        else {
            console.log( 'Permission Type not found' ) ;
            return false ;
        }
    }
    else {
        console.log('Module Name is not found') ;
        return false;
     }
}
