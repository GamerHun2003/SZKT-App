import { ScheduleEntry } from "./ScheduleEntry";
import { Vehicle } from "./Vehicle";

export interface Route{
    Vehicle: Vehicle;
    localTicketPrice: number;
    schedule: ScheduleEntry[];

}