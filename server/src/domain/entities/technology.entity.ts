import shortid from "shortid";

class Technology {
    private id: string;
    private name: string;

    constructor(name: string) {
        this.id = shortid.generate();
        this.name = name;
      }

      public getId(): string {
        return this.id;
      }
    public getName(): string {
        return this.name;
    }
}

export default Technology;