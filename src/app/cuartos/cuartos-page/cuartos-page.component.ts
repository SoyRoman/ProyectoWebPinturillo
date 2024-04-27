import { Component } from '@angular/core';

@Component({
  selector: 'app-cuartos-page',
  templateUrl: './cuartos-page.component.html',
  styleUrls: ['./cuartos-page.component.css']
})
export class CuartosPageComponent {
  rooms = [
    { name: 'Sala#1', img: './assets/svg/paintbrush.svg', code: '3WY', users: '6/6', language: 'SPA', trophies: '13/70' },
    { name: 'Sala#2', img: './assets/svg/paintbrush.svg', code: '3WY', users: '6/6', language: 'SPA', trophies: '13/70' },
    { name: 'Sala#3', img: './assets/svg/paintbrush.svg', code: '3WY', users: '6/6', language: 'SPA', trophies: '13/70' },
    { name: 'Sala#4', img: './assets/svg/paintbrush.svg', code: '3WY', users: '6/6', language: 'SPA', trophies: '13/70' },
    { name: 'Sala#5', img: './assets/svg/paintbrush.svg', code: '3WY', users: '6/6', language: 'SPA', trophies: '13/70' },
    { name: 'Sala#6', img: './assets/svg/paintbrush.svg', code: '3WY', users: '6/6', language: 'SPA', trophies: '13/70' },
    { name: 'Sala#7', img: './assets/svg/paintbrush.svg', code: '3WY', users: '6/6', language: 'SPA', trophies: '13/70' },
    { name: 'Sala#8', img: './assets/svg/paintbrush.svg', code: '3WY', users: '6/6', language: 'SPA', trophies: '13/70' },
    { name: 'Sala#9', img: './assets/svg/paintbrush.svg', code: '3WY', users: '6/6', language: 'SPA', trophies: '13/70' },
    { name: 'Sala#10', img: './assets/svg/paintbrush.svg', code: '3WY', users: '6/6', language: 'SPA', trophies: '13/70' },
    { name: 'Sala#11', img: './assets/svg/paintbrush.svg', code: '3WY', users: '6/6', language: 'SPA', trophies: '13/70' },
    { name: 'Sala#12', img: './assets/svg/paintbrush.svg', code: '3WY', users: '6/6', language: 'SPA', trophies: '13/70' },
    { name: 'Sala#13', img: './assets/svg/paintbrush.svg', code: '3WY', users: '6/6', language: 'SPA', trophies: '13/70' },
    { name: 'Sala#14', img: './assets/svg/paintbrush.svg', code: '3WY', users: '6/6', language: 'SPA', trophies: '13/70' },
    { name: 'Sala#15', img: './assets/svg/paintbrush.svg', code: '3WY', users: '6/6', language: 'SPA', trophies: '13/70' },
    { name: 'Sala#16', img: './assets/svg/paintbrush.svg', code: '3WY', users: '6/6', language: 'SPA', trophies: '13/70' },
    { name: 'Sala#17', img: './assets/svg/paintbrush.svg', code: '3WY', users: '6/6', language: 'SPA', trophies: '13/70' },
    { name: 'Sala#18', img: './assets/svg/paintbrush.svg', code: '3WY', users: '6/6', language: 'SPA', trophies: '13/70' },
    { name: 'Sala#19', img: './assets/svg/paintbrush.svg', code: '3WY', users: '6/6', language: 'SPA', trophies: '13/70' },
    { name: 'Sala#20', img: './assets/svg/paintbrush.svg', code: '3WY', users: '6/6', language: 'SPA', trophies: '13/70' },
    { name: 'Sala#21', img: './assets/svg/paintbrush.svg', code: '3WY', users: '6/6', language: 'SPA', trophies: '13/70' },
    { name: 'Sala#22', img: './assets/svg/paintbrush.svg', code: '3WY', users: '6/6', language: 'SPA', trophies: '13/70' },
    { name: 'Sala#23', img: './assets/svg/paintbrush.svg', code: '3WY', users: '6/6', language: 'SPA', trophies: '13/70' },
    { name: 'Sala#24', img: './assets/svg/paintbrush.svg', code: '3WY', users: '6/6', language: 'SPA', trophies: '13/70' },
    { name: 'Sala#25', img: './assets/svg/paintbrush.svg', code: '3WY', users: '6/6', language: 'SPA', trophies: '13/70' },
    { name: 'Sala#26', img: './assets/svg/paintbrush.svg', code: '3WY', users: '6/6', language: 'SPA', trophies: '13/70' },
    { name: 'Sala#27', img: './assets/svg/paintbrush.svg', code: '3WY', users: '6/6', language: 'SPA', trophies: '13/70' },
    { name: 'Sala#28', img: './assets/svg/paintbrush.svg', code: '3WY', users: '6/6', language: 'SPA', trophies: '13/70' },

  ]

  selectedRoom(event: { target: any; }) {

    const previouslySelected = document.querySelector('.selected');
    if (previouslySelected) {
      previouslySelected.classList.remove('selected');
    }

    const roomElement = event.target;

    if (roomElement.classList.contains('room')) {
      roomElement.classList.add('selected');
    }
  }

}
