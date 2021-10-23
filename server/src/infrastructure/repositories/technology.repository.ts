import Technology from "../../domain/entities/technology.entity";

class TechnologyRepository {
    private technologies: Technology[];

    constructor() {
        this.technologies = [
            new Technology("java"),
            new Technology("javascript"),
            new Technology("C++")
        ];

        console.log(this.technologies);
    }

    async findOneById(id: string): Promise<Technology | null> {
        const technology = this.technologies.find(t => t.getId() === id);

        return (technology) ? technology : null;
    }

    async findOneByName(name: string): Promise<Technology | null> {
        const technology = this.technologies.find(t => t.getName() === name);

        return (technology) ? technology : null;
    }

    async findAll(): Promise<Technology[]> {
        return this.technologies;
    }

    async save(technology: Technology): Promise<void> {
        this.technologies.push(technology);
    }

    async deleteById(id: string): Promise<void> {
        this.technologies = this.technologies.filter(t => t.getId() !== id);
    }
}

export default new TechnologyRepository;