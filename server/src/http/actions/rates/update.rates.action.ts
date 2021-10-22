import { Request, Response } from "express";
import UpdateRateCommand from "../../../application/commands/update.rate.command";
import updateRateHandler from "../../../application/handlers/update.rate.handler";

class UpdateRateAction {
    async run(req: Request, res: Response) {
        const command: UpdateRateCommand = {
            id: req.params.id,
            ...req.body,
        };

        try {
            await updateRateHandler.execute(command);
        } catch (error) {
            return res.status(404).json({message: error});
        }

        return res.status(200).json({message: "User updated"});
    }
}

export default new UpdateRateAction();