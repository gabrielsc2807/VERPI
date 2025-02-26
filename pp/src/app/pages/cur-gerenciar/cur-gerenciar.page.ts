import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { Aluno } from 'src/app/model/aluno';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioAluno } from 'src/app/model/usuarioAluno';
import { CurGerenciarService } from 'src/app/services/cur-gerenciar.service';

@Component({
  selector: 'app-cur-gerenciar',
  templateUrl: './cur-gerenciar.page.html',
  styleUrls: ['./cur-gerenciar.page.scss'],
})
export class CurGerenciarPage implements OnInit {

  alunos: UsuarioAluno[]
  aparecer: number
  alunosDis: UsuarioAluno[]
  formGroup: FormGroup
  logado: Usuario

  constructor(private formBuilder: FormBuilder, private cursinhoService:CurGerenciarService, private toastController: ToastController, private navController: NavController, private alertController: AlertController, private loadingController: LoadingController) {
    this.alunos = []
    this.aparecer = 0
    this.alunosDis = []
    this.formGroup = this.formBuilder.group({
      'addAlu': [0, Validators.compose([Validators.required])],
    })
    this.logado = JSON.parse(localStorage.getItem('usuarioAutenticado') || '-1')
  }

  ngOnInit() {
    console.log(this.aparecer)
  }

  async ionViewWillEnter() {
    this.carregarLista()
  }

  async carregarLista(){
    this.exibirLoader();
    await this.cursinhoService.listarA(this.logado.id).then((json)=>{      
      this.alunos = <UsuarioAluno[]> (json);
    });
    await this.cursinhoService.listarADis().then((json)=>{      
      this.alunosDis = <UsuarioAluno[]> (json);
    });
    this.fecharLoader();
  }

  mudarF(){
    if(this.aparecer == 0){
      this.aparecer = 1
    }
    else{
      this.aparecer = 0
    }
  }

  async salvar(){
    await this.cursinhoService.salvar(this.logado.id, this.formGroup.value.addAlu)
    location.reload()
  }

  async excluir(aluno: Aluno){
    const alert = await this.alertController.create({
      header: 'Confirma a exclusão?',
      buttons: [
        {
          text: 'Cancelar'
        },
        {
          text: 'Confirmar',
          cssClass: 'danger',
          handler: () => {
            this.cursinhoService.excluirA(aluno.id)
            location.reload()
            this.exibirMensagem('Registro excluído com sucesso!!!')

          }
        }
      ]
    });
    await alert.present();
  }

  async exibirMensagem(texto: string) {
    const toast = await this.toastController.create({
      message: texto,
      duration: 1500
    });
    toast.present();
  }

  exibirLoader() {
    this.loadingController.create({
      message: 'Carregando...'
    }).then((res) => {
      res.present();
    });
  }

  fecharLoader() {
    setTimeout(() => {
      this.loadingController.dismiss().then(() => {
      }).catch((erro) => {
        console.log('Erro: ', erro);
      });
    }, 500);
  }
}
