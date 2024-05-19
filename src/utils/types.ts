export interface ResponseInterface{
    text:string;
    isSeen?:boolean;
    isLiked?:string;
}

export type MutableRefObject<T> = {
    current: T | null;  // generic type 
};