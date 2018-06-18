import { Color } from './color';
export interface Event {
    id?: number;
    title: string;
    description: string;
    startDateAndTime: number;
    duration: number;
    whenCreated?: number;
    whenLastUpdated?: number;
    colors: Color[];
}
