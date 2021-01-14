import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  value = ''

  gotoSearch(value: string): void {
    console.log("Click, ", value);
    this.router.navigate(['/searchmovies-component'], { queryParams: { searchquery: value } });
  }

  ngOnInit(): void {
  }

}
