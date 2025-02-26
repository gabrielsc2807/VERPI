import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { Aluno } from 'src/app/model/aluno';
import { Usuario } from 'src/app/model/usuario';
import { UsualunoService } from 'src/app/services/usualuno.service';

@Component({
  selector: 'app-alu-notas',
  templateUrl: './alu-notas.page.html',
  styleUrls: ['./alu-notas.page.scss'],
})
export class AluNotasPage implements OnInit {
  formGroup: FormGroup;
  logado: Usuario
  alunoLogado: Aluno
  
  constructor(private formBuilder: FormBuilder,
    private loadingController: LoadingController,
    private toastController: ToastController,
    private navController: NavController,
    private alertController: AlertController,
    private usualunoService: UsualunoService
  ) { 
    this.logado = new Usuario()
    this.alunoLogado = new Aluno()
    this.formGroup = this.formBuilder.group(
      {
        'nota1': [this.alunoLogado.nota1, Validators.compose([
          Validators.required
        ])],

        'nota2': [this.alunoLogado.nota2, Validators.compose([
          Validators.required
        ])],

        'nota3': [this.alunoLogado.nota3, Validators.compose([
          Validators.required
        ])],
      }
    )
  }

  ngOnInit() {
    let logado = JSON.parse(localStorage.getItem('usuarioAutenticado') || '-1')
    if (logado === -1){
      this.requisitarLogin()
    }else{
      this.logado = <Usuario>logado
      this.attNotas()
    }
  }

  async attNotas(){
    this.alunoLogado = <Aluno> await this.usualunoService.buscarPorId(this.logado.id)
    this.formGroup.get('nota1')?.setValue(this.alunoLogado.nota1);
    this.formGroup.get('nota2')?.setValue(this.alunoLogado.nota2);
    this.formGroup.get('nota3')?.setValue(this.alunoLogado.nota3);
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

  async salvar(){
    this.alunoLogado.nota1 = this.formGroup.value.nota1
    this.alunoLogado.nota2 = this.formGroup.value.nota2
    this.alunoLogado.nota3 = this.formGroup.value.nota3
    await this.usualunoService.salvarNota(this.alunoLogado).then((json) => {
      let foi = <number>json
      if (foi > 0) {
        this.exibirMensagem("Salvo com sucesso!!!");
        this.navController.navigateBack('/inicio');
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
