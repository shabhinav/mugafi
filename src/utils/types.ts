export interface ResponseInterface{
    text:string;
    isSeen?:boolean;
}

export type MutableRefObject<T> = {
    current: T | null;  // generic type 
};