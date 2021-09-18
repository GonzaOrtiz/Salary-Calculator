import shortid from "shortid";
import { Technology } from "./technology.entity";
import { SeniorityEnum } from "../enums/seniority.enum";
import { LanguageEnum } from "../enums/language.enum";

class Rate {
  private id: string;
  private technology: Technology;
  private seniority: SeniorityEnum;
  private language: LanguageEnum;
  private average_salary: string;
  private gross_margin: string;
  private currency: string;

  constructor(technology: Technology,
    seniority: SeniorityEnum,
    language: LanguageEnum,
    average_salary: string,
    gross_margin: string,
    currency: string) 
  {
    this.id = shortid.generate();
    this.technology = technology;
    this.seniority = seniority;
    this.language = language;
    this.average_salary = average_salary;
    this.gross_margin = gross_margin;
    this.currency = currency;
  }


  public getId(): string {
    return this.getId();
  }
  public getSeniority(): string {
    return this.getSeniority();
  }
  public getTechnologyId(): string {
    return this.getTechnologyId();
  }
  public getLanguage(): string {
    return this.getLanguage();
  }
  public getAverageSalary(): string {
    return this.getAverageSalary();
  }
  public getGrossMargin(): string {
    return this.getGrossMargin();
  }
  public getCurrency(): string {
    return this.getCurrency();
  }


  public total(): string {
    let result;
    result = parseFloat(this.gross_margin) + parseFloat(this.average_salary);
    return result.toString();
  }

  public percentage(): string {
    let result;
    result = parseFloat(this.gross_margin) / parseFloat(this.total());
    return result.toString();
  }
}

export default Rate;