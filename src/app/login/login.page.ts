import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user=
  {
    usuario: "laura2001",
    contraseña: "123"
  }

  constructor(private loadingCtrl: LoadingController,public navCtrl: NavController) { }

  ngOnInit() {
  }

  async login(forma: NgForm ){ 
    console.log("Ingrese a login");
    if (forma.valid) 
    {
      const loading = await this.loadingCtrl.create({
        message: 'Validando...',
        spinner: 'bubbles'
      });
      loading.present();
      this.loadingCtrl.dismiss();
      if(forma.value.user === this.user.usuario && forma.value.password === this.user.contraseña)
      {
        console.log("Bienvenido: ");
        this.navCtrl.navigateForward('mapa')

      }
      else
      {
        console.log("User o password incorrecto");
      }
      
    }
      //this.userForm.Correo = forma.value.email;
      //this.userForm.Clave = forma.value.clave;
  }

}
