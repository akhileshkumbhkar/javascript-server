export default function hasPermission2( moduleName , role , permissionType ) {
    let type ;
    console.log( 'Module Name is', moduleName );
    console.log( 'permission type is', permissionType );
    const { all , read , write , Delete } = moduleName ;
    if ( permissionType === 'all' )
        type = all ;
    if ( permissionType === 'read' )
        type = read ;
    if ( permissionType === 'write' )
        type = write ;
    if ( permissionType === 'delete' )
        type = Delete ;

    if ( role === 'head-trainer' ) {
        return true ;
    }
    else {
        if ( type.includes (role) )
            return true;
        else
            return false;
    }
}
