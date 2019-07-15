import Koa from 'koa';
import router from 'routes';
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
        app.use(router.routes()).use(router.allowedMethods());
    }
    // server start
    listen(port) {
        const { app } = this;
        app.listen(port);
        console.log(`Listening to port : ${port}`);
    }
}