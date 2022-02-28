import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: User | undefined;

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    const login = this.route.snapshot.paramMap.get('login');
    if (login) {
      this.userService.getUser(login).subscribe((res: any) => { this.user = res; });
    }
  }

}
