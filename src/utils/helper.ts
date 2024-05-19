export const isSlashHandler=(str:string)=>{
    const regex = /\\$/;
    const hasBackslash = regex.test(str);    
    return hasBackslash
}
