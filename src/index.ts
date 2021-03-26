import './infrastructure/common/env';
import Server from './infrastructure/common/server';
import routes from './infrastructure/routes';

const port = parseInt(process.env.PORT);
export default new Server().registerRoutes(routes).listen(port);
