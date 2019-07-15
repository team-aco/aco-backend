import Koa from 'koa';
import logger from 'koa-logger';


export default class Server {
    app; // Koa instance

    constructor() {
        this.app = new Koa();
        this.middleware();
    }

    middleware() {
        const { app } = this;
        app.use(logger());
    }
    // server start
    listen(port) {
        const { app } = this;
        app.listen(port);
        console.log(`Listening to port : ${port}`);
    }
}