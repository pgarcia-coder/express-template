import controllerHandler from './middlewares/controller-handler';

export = (server: any, controller: any) => {
  // Health
  server.get('/health', controllerHandler(controller.health));
};