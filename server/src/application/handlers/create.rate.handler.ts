import { Rate } from "../../domain/entities/rate.entity";
import CreateRateCommand from "../commands/create.rate.command";
import RateRepository from "../../infrastructure/repositories/rate.repository";

class CreateRateHandler {
    async execute(command: CreateRateCommand) {
        const rate: Rate = {
            technology_id: command.getTechnologyId(),
            seniority: command.getSeniority().toString(),
            language: command.getLanguage().toString(),
            average_salary: command.getAverageSalary(),
            gross_margin: command.getGrossMargin(),
            currency: command.getCurrency()
        };

        await RateRepository.save(rate);
    }
}

export default new CreateRateHandler();