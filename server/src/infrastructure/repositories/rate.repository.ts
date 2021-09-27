import Rate from "../../domain/entities/rate.entity";
import Technology from "../../domain/entities/technology.entity";
import LanguageEnum from "../../domain/enums/language.enum";
import SeniorityEnum from "../../domain/enums/seniority.enum";

class RateRepository {
    private rates: Rate[];

    constructor() {
        this.rates = [];
    }
    async findAll(): Promise<Rate[]> {
        return this.rates;
    }

    async save(rate: Rate): Promise<void> {
            this.rates.push(rate);
    }

    async deleteById(id: string): Promise<void> {
        this.rates = this.rates.filter(u => u.getId() !== id);
    }

    async findOneById(id: string): Promise<Rate | null> {
        const rate = this.rates.find(r => r.getId() === id);

        return (rate) ? rate : null;
    }

    async findOneBySeniority(seniority: SeniorityEnum): Promise<Rate | null> {
        const rate = this.rates.find(r => r.getSeniority() === seniority);

        return (rate) ? rate : null;
    }
    async findOneByLanguage(language: LanguageEnum): Promise<Rate | null> {
        const rate = this.rates.find(r => r.getLanguage() === language);

        return (rate) ? rate : null;
    }
    async findOneByTechnology(technology: Technology): Promise<Rate | null> {
        const rate = this.rates.find(r => r.getTechnology() === technology);

        return (rate) ? rate : null;
    }
    async findOneByAverageSalary(averageSalary: string): Promise<Rate | null> {
        const rate = this.rates.find(r => r.getAverageSalary() === averageSalary);

        return (rate) ? rate : null;
    }
    async findOneGrossMargin(grossMargin: string): Promise<Rate | null> {
        const rate = this.rates.find(r => r.getGrossMargin() === grossMargin);

        return (rate) ? rate : null;
    }

    async findOneCurrency(currency: string): Promise<Rate | null> {
        const rate = this.rates.find(r => r.getCurrency() === currency);

        return (rate) ? rate : null;
    }

}

export default new RateRepository();