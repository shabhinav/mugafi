import { ResponseInterface } from "../../utils/types";


export interface DyanamicGeneratorInterface {
    text:string;
    index:number;
    response:ResponseInterface[],
    setResponse:(response:ResponseInterface[])=>void;
}