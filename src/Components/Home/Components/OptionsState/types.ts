import { ResponseInterface } from "../../../../utils/types";

export interface OptionsStateInterface{
    text:string;
    sendDatahandler:(param:string,type:string)=>void;
    customContext:string;
    setCustomContext:(value:string)=>void;
    response:ResponseInterface[];
    loading:boolean;
}