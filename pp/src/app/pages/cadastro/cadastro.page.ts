import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

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
        'nome': [this.usuario.nome, Validators.compose([
          Validators.required
        ])],
        'tipo': [this.usuario.tipo, Validators.compose([
          Validators.required
        ])],
        'senha': [this.usuario.senha, Validators.compose([
          Validators.required
        ])],

      }
    )
   }

  ngOnInit() {
  }

  async salvar(){
    this.usuario.nome=this.formGroup.value.nome
    this.usuario.tipo=Number(this.formGroup.value.tipo)
    this.usuario.senha=this.formGroup.value.senha
    await this.usuarioService.salvar(this.usuario).then((json) => {
      this.usuario = <Usuario>(json);
      if (this.usuario) {
        this.exibirMensagem("Cadastrado com sucesso!!!");
        this.navController.navigateBack('/login');
      }
    }).catch((erro) => {
      this.exibirMensagem("Erro ao cadastrar! Erro: " + erro['message']);
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
