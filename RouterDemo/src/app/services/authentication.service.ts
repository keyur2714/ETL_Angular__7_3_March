import { User } from '../model/user.model';
import { Observable, of } from 'rxjs';

export class AuthenticationService {

    isLoggedIn : boolean = false;    
    successUrl : string = 'home';

    authenticate(userName : string,password : string): Observable<boolean>{
        let user : User = this.getAllUsers().find(user => user.userName === userName && user.password === password);
        if(user){
            this.isLoggedIn = true;
            sessionStorage.setItem("user",JSON.stringify(user));
            return of(true);
        }
        return of(false);
    }

    getIsLoggedIn() : boolean {
        return this.isLoggedIn;
    }

    getSuccessUrl() : string {
        return this.successUrl;
    }

    getAllUsers():User[]{
        let users : User[] = [];

        let user1 = new User();
        user1.name = 'keyur';
        user1.password = 'India@123';
        user1.token = 'keyurjava';
        user1.userRole = 'ADMIN';
        user1.userName = 'keyur27';

        let user2 = new User();
        user2.name = 'denish';
        user2.password = 'Bharat@123';
        user2.token = 'denishjava';
        user2.userRole = 'USER';
        user2.userName = 'densih26';

        users.push(user1);
        users.push(user2);

        return users;
    }
}