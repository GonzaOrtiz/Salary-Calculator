import Technology from "../../../domain/entities/technology.entity";
import CreateTechnologyCommand from "../../commands/technology/create.technology.command";
import TechnologyRepository from "../../../infrastructure/repositories/technology.repository";

class CreateTechnologyHandler {

    async execute(command: CreateTechnologyCommand) {

        //Validar si existe
        // if (!technology) {
        //     throw new Error('Technology not found');
        // }
        const technogloy: Technology = new Technology(command.getName());

        await TechnologyRepository.save(technogloy);
    }
}

export default new CreateTechnologyHandler();