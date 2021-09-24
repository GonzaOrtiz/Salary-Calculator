import { Application } from "express";
import CommonRoutes from "./common.routes";

class RateRoutes extends CommonRoutes {
  constructor(app: Application) {
    super(app, 'Rate');
  }

  setUpRoutes(): Application {

    return this.app;
  }
}

export default RateRoutes;
