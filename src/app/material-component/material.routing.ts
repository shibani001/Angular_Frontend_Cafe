import { Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ManageCategoryComponent } from './manage-category/manage-category.component';
import { RouteGuardService } from '../services/route-guard.service';
import { ManageProductComponent } from './manage-product/manage-product.component';
import { ManageOrderComponent } from './manage-order/manage-order.component';
import { ViewBillComponent } from './view-bill/view-bill.component';
import { ManageUserComponent } from './manage-user/manage-user.component';



export const MaterialRoutes: Routes = [  
    {
        path: 'category',
        component:ManageCategoryComponent,
        canActivate:[RouteGuardService],      //importing all the components cerated in material-component part and then go to the shared folder
                                                // and there in the menu-items mention the path for it
        data:{
            expectedRole:['admin']  
        }
    },

    {
        path: 'product',
        component:ManageProductComponent,       // only admin can access all these fields so expected role is only for admin not for users
        canActivate:[RouteGuardService],
        data:{
            expectedRole:['admin']
        }
    },

    {
        path: 'order',
        component:ManageOrderComponent,       // accessible by both admin and user
        canActivate:[RouteGuardService],
        data:{
            expectedRole:['admin','user']     
        }
    },
    
    {
        path: 'bill',
        component:ViewBillComponent,       // accessible by both admin and user
        canActivate:[RouteGuardService],
        data:{
            expectedRole:['admin','user']     
        }
    },

     //for user concept
    {
        path: 'user',
        component:ManageUserComponent,       // accessible by both admin and user
        canActivate:[RouteGuardService],
        data:{
            expectedRole:['admin']     
        }
    },

];
