class DeleteRateCommand {

    private id: string;
    
    constructor(id: string){
        this.id = id; 
    }

    public getId(): string {
        return this.id;
    }  
}

export default DeleteRateCommand;