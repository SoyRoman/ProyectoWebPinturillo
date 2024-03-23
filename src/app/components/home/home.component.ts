import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showAvatarPanel: boolean = false;

  toggleAvatarPanel() {
    this.showAvatarPanel = !this.showAvatarPanel;
  }

  selectAvatar(avatar: string) {
    // Puedes hacer lo que necesites con el avatar seleccionado, como enviarlo al servidor
    console.log("Avatar seleccionado:", avatar);
    // Oculta el panel de avatares después de seleccionar uno
    this.showAvatarPanel = false;
  }
}
