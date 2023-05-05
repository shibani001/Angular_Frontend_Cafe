import { Injectable } from "@angular/core";

export interface Menu {
    state: string;
    name: string;
    icon: string;
    role:string;
}

const MENUITEMS = [
    {state: 'dashboard',name:'Dashboard',icon:'dashboard',role:''},   // accessible by both admin and user
    {state: 'category',name:'Manage Category',icon:'category',role:'admin'},  //role is blank so that both user and admin can use the dashboard
    {state: 'product',name:'Manage Product',icon:'inventory_2',role:'admin'},
    {state: 'order',name: 'Manage order',icon:'list_alt',role:''},      //accessible by both admin and user
    {state: 'bill',name: 'View Bill',icon:'import_contacts',role:''},     // accessible by both admin and user
    {state: 'user',name: 'View User',icon:'people',role:'admin'}, 
];

@Injectable()
export class MenuItems{
    getMenuitem(): Menu[] {
        return MENUITEMS;
    }
}