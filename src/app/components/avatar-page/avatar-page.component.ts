import { Component } from '@angular/core';

@Component({
  selector: 'app-avatar-page',
  templateUrl: './avatar-page.component.html',
  styleUrls: ['./avatar-page.component.css']
})
export class AvatarPageComponent {
  avatars = [
    { img: './assets/svg/avatar.svg'},
    { img: './assets/svg/avatar.svg'},
    { img: './assets/svg/avatar.svg'},
    { img: './assets/svg/avatar.svg'},
    { img: './assets/svg/avatar.svg'},
    { img: './assets/svg/avatar.svg'},
    { img: './assets/svg/avatar.svg'},
  ]

}
