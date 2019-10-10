import Router from '@koa/router';
import * as testCtrl from 'routes/test/test.ctrl';

const test = new Router();

test.get('/hello', testCtrl.helloWorld);
test.get('/prisma', testCtrl.getUser);

export default test;
