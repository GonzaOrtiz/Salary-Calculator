import LanguageEnum from "../../domain/enums/language.enum";
import SeniorityEnum from "../../domain/enums/seniority.enum";

export interface UpdateRateCommand {
      technologyId: string;
      seniority: SeniorityEnum;
      language: LanguageEnum;
      paverage_salary: string;
      gross_margin: string;
      currency: string;
}