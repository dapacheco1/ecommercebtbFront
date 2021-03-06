import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/interfaces/User';

@Injectable({
  providedIn: 'root'
})

export class LogoutGuard implements CanActivate {

  constructor(private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const user:any = (localStorage.getItem('user'));
      const aux:User = JSON.parse(user);
      if(user){
        if(aux.rol_id == 1){
          this.router.navigateByUrl('admin');
        }
          this.router.navigateByUrl('');

        return false;
      }else{

        return true;
      }
  }

}
