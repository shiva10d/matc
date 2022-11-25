 interface routes{
    path:string,
    name: string,
    isAuth: boolean,
    component: any,
   
}
export interface RoutesItem extends Array<routes>{}
