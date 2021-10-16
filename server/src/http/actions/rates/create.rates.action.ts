import { Request, Response } from "express";
import CreateRateCommand from "../../../application/commands/create.rate.command";
import createRateHandler from "../../../application/handlers/create.rate.handler";

class CreateRateAction {
    async run(req: Request, res: Response){
        const command: CreateRateCommand = req.body;

        if (!command.getTechnologyId ||
            !command.getSeniority ||
            !command.getLanguage ||
            !command.getCurrency) {
            
                return res.status(400).json({message: "Required fields"})
        }

        await createRateHandler.execute(command);

        return res.status(201).json({message: "Rate created"});
    }
}

export default new CreateRateAction();