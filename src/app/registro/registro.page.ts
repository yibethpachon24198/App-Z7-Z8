import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertController, NavController} from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  user=
  {
    email: "laura@laura.com",
    usuario: "laura2001",
    contraseña: "12345",
    confirmacontraseña: "12345"

  }

  constructor(private alertController: AlertController, public navCtrl: NavController) { }

  ngOnInit() {
  }

  async login(forma: NgForm )
  { 
    if (forma.valid) 
    {
      console.log("Login de registro");
      const alert = await this.alertController.create({
        message: 'Recuerde revisar su correo dentro de las 24 horas siguientes para confirmar si su cuenta fue autorizada',
        buttons: ['OK']
      });
      await alert.present();
      this.navCtrl.navigateForward('')
      }
    }
  }

