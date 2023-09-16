import { Employee } from "./Employee"

export class Appointment {
    appoint_id  !: number
    vis_name    !: string
    vis_email   !: string
    vis_contact !: string
    vis_purpose !: string
    vcomp_name  !: string
    apdate  !: string
    aptime  !: string
    status  !: string
    otp_num !: number
    new_otp !: number
    app_name!: string
    admemail!: string
    employee : Employee = new Employee()
 }