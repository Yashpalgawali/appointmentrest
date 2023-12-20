import { Department } from "./Department"
import { Designation } from "./Designation"

export class Employee {
    emp_id   !: number
    emp_name !: string
    emp_email!: string
    emp_status !:number
    department : Department = new Department()
    designation: Designation = new Designation()
}