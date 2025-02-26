import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { Usuario } from 'src/app/model/usuario';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  logado: Usuario
  constructor(private loadingController: LoadingController,
    private toastController: ToastController,
    private navController: NavController,
    private alertController: AlertController) {
    this.logado = new Usuario()
  }

  ngOnInit() {
    
  }

  async ionViewWillEnter(){
    let logado = JSON.parse(localStorage.getItem('usuarioAutenticado') || '-1')
    if (logado === -1){
      this.requisitarLogin()
    }else{
      this.logado = logado
    }
  }

  async requisitarLogin() {
    var cad = false
    const alert = await this.alertController.create({
      header: 'Você não está logado',
      message: "Vá para a página de login ou crie uma conta",
      buttons: [
        {
          text: 'Logar',
        },
        {
          text: 'Criar conta',
          handler: () => {
            cad = true
            this.navController.navigateBack('/cadastro');
          }
        }
      ]
    });
    await alert.present();
    alert.onDidDismiss().then((data) => {
      if(!cad){
        this.navController.navigateBack('/login')
      }
    })
  }
}
