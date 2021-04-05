import './infrastructure/common/env';
import Server from './infrastructure/server';
import routes from './infrastructure/routes';
import errorHandler from './infrastructure/middlewares/errorHandler';

const port = parseInt(process.env.PORT);

export default new Server()
  .registerRoutes(routes)
  .registerMiddleware(errorHandler)
  .listen(port);
