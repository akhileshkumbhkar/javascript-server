import ValidateEmail from './helper' ;
const valid = [] ;
const invalid = [] ;
export  default function ValidateUser( users: IUsers[] ): void {
for ( const  user of users) {
    if ( ValidateEmail ( user.traineeEmail ) && ValidateEmail ( user.reviewerEmail ) ) {
         valid.push( user ) ;
        }
        else {
         invalid.push(user) ;
        }
    }
console.log( 'valid count is: ', valid.length ) ;
console.log(valid) ;
console.log('Invalid count is: ', invalid.length) ;
console.log( invalid ) ;
}
