import { VehicleTypes } from "./VehiclesType";

export interface Vehicle{
    id: string;
    type: VehicleTypes;
    onboardTicketPrice: number;
}