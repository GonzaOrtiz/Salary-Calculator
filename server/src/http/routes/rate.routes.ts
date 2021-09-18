import { Application } from "express";
// import listRatesAction from "../actions/rates/list.rate.action";
// import listRatesAction from "../actions/rates/list.rates.action";
import listRateAction from "../actions/rates/list.rate.action";

import createRateAction from "../actions/rates/create.rate.action";
import CommonRoutes from "./common.routes";
import updateRateAction from "../actions/rates/update.rate.action";
import deleteRateAction from "../actions/rates/delete.rate.action";

class RateRoutes extends CommonRoutes {
  constructor(app: Application) {
    super(app, 'Rate');
  }

  setUpRoutes(): Application {
    this.app.get('/rates', listRateAction.run);

    this.app.post('/rates', createRateAction.run);

    this.app.put('/rates/:id', updateRateAction.run);

    this.app.delete('/rates/:id', deleteRateAction.run);

    return this.app;
  }
}

export default RateRoutes;
