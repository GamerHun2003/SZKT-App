import { Station } from "./Stations";

export interface ScheduleEntry{
    station: Station;
    arrivalTime: Date;
    departureTime: Date;
}