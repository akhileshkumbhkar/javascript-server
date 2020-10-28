import * as express from 'express' ;
class Server {
app;
 constructor (private config) {
 this.app = express() ;
}

bootstrap() {
this.setupRoutes();
return this ;
}

setupRoutes() {
const { app } = this;
app.use('./health-check' , (req, res, next) => {
res.send('i am ok') ;
 }) ;
 return this ;
}

run() {
const { app , config: { PORT} } = this ;
app.listen(PORT , (err) => {
if (err) {
 console.log(err) ;
 }
 console.log(`app is running on port ${PORT}` ) ;
  }) ;
}
}
export default Server ;
