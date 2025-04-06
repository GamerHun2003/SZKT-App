import { Ticket } from "./Ticket";
import { SavedRoute } from "./SavedRoute";

export interface User{
    email: string;
    name: string;
    age: number;
    studentID?:string;
    tickets:Ticket[];
    savedRoutes:SavedRoute[];

}