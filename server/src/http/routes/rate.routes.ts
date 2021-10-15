import { Application } from "express";
import CommonRoutes from "./common.routes";
import ListRatesAction from "../actions/rates/list.rates.action";

class RateRoutes extends CommonRoutes {
  constructor(app: Application) {
    super(app, 'Rate');
  }

  setUpRoutes(): Application {
    this.app.get('/rates', ListRatesAction.run);
    return this.app;
  }
}

export default RateRoutes;
