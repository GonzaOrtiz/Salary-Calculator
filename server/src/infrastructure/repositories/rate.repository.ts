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
    async findAllBy(technologyIds?: [],
        seniority?: string,
        language?: string,
        currency?: string){
        
            let query;

        if(technologyIds){
            query;
        }

        if(seniority){
            query;
        }
        
        if(language){
            query;
        }

        if(currency){
            query;
        }
    } 


}

export default new RateRepository();