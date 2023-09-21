import { Company } from "./Company"

export class Department {
    dept_id   !: number
    dept_name !: string
    company : Company = new Company()
    comp !: Company;
}