import Rate from "../../domain/entities/rate.entity";

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

    async update(rate: Rate): Promise<void> {
        this.rates = this.rates.map(function(r) {
            return r.getId() === rate.getId() ? rate : r;
        });
    }

    async deleteById(id: string): Promise<void> {
        this.rates = this.rates.filter(u => u.getId() !== id);
    }

    async findOneById(id: string): Promise<Rate | null> {
        const rate = this.rates.find(r => r.getId() === id);

        return (rate) ? rate : null;
    }

    async findAllBy(technologyIds?: string[],
        seniority?: string,
        language?: string,
        currency?: string): Promise<Rate[]>{
        
            let query = this.rates;

        if(technologyIds){
            query = query.filter(u => technologyIds.includes(u.getTechnology().getId()))
        }

        if(seniority){
            query = query.filter(u => u.getSeniority().toString() === seniority);
        }
        
        if(language){
            query = query.filter(u => u.getLanguage().toString() === language);
        }

        if(currency){
            query = query.filter(u => u.getCurrency().toString() === currency);
        }

        return query;
    } 

}

export default new RateRepository();