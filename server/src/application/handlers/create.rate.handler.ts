import Rate from "../../domain/entities/rate.entity";
import CreateRateCommand from "../commands/create.rate.command";
import RateRepository from "../../infrastructure/repositories/rate.repository";
import technologyRepository from "../../infrastructure/repositories/technology.repository";

class CreateRateHandler {

    async execute(command: CreateRateCommand) {

        const technology = await technologyRepository.findOneById(command.getTechnologyId());

        //Validar si existe
        if (!technology) {
            throw new Error('Technology not found');
        }
        const rate: Rate = new Rate(technology, command.getSeniority(),
            command.getLanguage(), command.getAverageSalary(),
            command.getGrossMargin(), command.getCurrency());

        await RateRepository.save(rate);
    }
}

export default new CreateRateHandler();