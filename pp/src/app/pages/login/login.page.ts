import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/services/usuario.service'
import { ActivatedRoute } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario: Usuario;
  
  formGroup: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private toastController: ToastController,
    private activatedRoute: ActivatedRoute,
    private navController: NavController,) {
    this.usuario = new Usuario()
    this.formGroup = this.formBuilder.group(
      {
        'nome': ['', Validators.compose([
          Validators.required
        ])],

        'senha': ['', Validators.compose([
          Validators.required
        ])],
      }
    )
   }

  ngOnInit() {
    localStorage.setItem('usuarioAutenticado', '-1')
  }

  async logar(){
    await this.usuarioService.logar(this.formGroup.value.nome, this.formGroup.value.senha).then((json) => {
      this.usuario = <Usuario>(json);
      if (this.usuario) {
        this.exibirMensagem("Logado com sucesso!!!");
        localStorage.setItem('usuarioAutenticado', JSON.stringify(this.usuario))
        this.navController.navigateBack('/inicio');
      }
    }).catch((erro) => {
      this.exibirMensagem("Erro ao logar!");
      console.log("Erro: " + erro['message'])
    });
  }

  async exibirMensagem(texto: string) {
    const toast = await this.toastController.create({
      message: texto,
      duration: 1500
    });
    toast.present();
  }

}
