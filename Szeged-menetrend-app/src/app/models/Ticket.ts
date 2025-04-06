import { SeasonTickets } from "./SeasonTicketTypes";
import { DiscountSeasonTickets } from "./SeasonTicketTypes";
import { TicketTypes } from "./TicketType";

export interface Ticket{
    price: number;
    isTicket: boolean;
    isSeasonTicket: boolean;
    isDiscounted: boolean;
    type: SeasonTickets | DiscountSeasonTickets | TicketTypes;
    validUntil?: Date;
    validFrom: Date;
    purchaseDate?: Date;

}