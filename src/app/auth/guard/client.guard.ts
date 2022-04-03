import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class ClientGuard implements CanActivate {
  constructor(private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const user:any = (localStorage.getItem('user'));
      const ax:User = JSON.parse(user);
      if(user){
        if(ax.rol_id == 2){
          return true;
        }else{
          return false;
        }
      }else{
        this.router.navigateByUrl('auth');
        return false;
      }
  }

}
