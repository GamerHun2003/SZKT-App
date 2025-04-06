import { Station } from "./Stations";

export interface SavedRoute{
    name: string;
    startStation: Station;
    endStation: Station;
    isRoundTrip: boolean;
}