import { Ticket } from "./Ticket";
import { SavedRoute } from "./SavedRoute";

export interface User{
    email: string;
    firstname: string;
    lastname: string;
    password: string;
    isloggedIn: boolean;
    isregisteredIn: boolean;
    isAdmin: boolean;
    isStudent: boolean;
    studentID?:string;
    tickets:Ticket[];
    cardNumber?:string;
    savedRoutes:SavedRoute[];

}