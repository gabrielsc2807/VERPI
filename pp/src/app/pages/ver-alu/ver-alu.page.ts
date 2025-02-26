import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { LoadingController, ToastController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Aluno } from 'src/app/model/aluno';
import { Usuario } from 'src/app/model/usuario';
import { UsualunoService } from 'src/app/services/usualuno.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-ver-alu',
  templateUrl: './ver-alu.page.html',
  styleUrls: ['./ver-alu.page.scss'],
})
export class VerAluPage implements OnInit {

  aluno: Aluno
  usuario:Usuario

  constructor(private formBuilder: FormBuilder,
    private toastController: ToastController,
    private activatedRoute: ActivatedRoute,
    private navController: NavController,
    private usuAluService: UsualunoService,
    private usuService: UsuarioService,
    private loadingController: LoadingController,) {
      this.aluno = new Aluno()
      this.usuario = new Usuario()
     }

  ngOnInit() {
    this.iniciar()
  }

  async iniciar() {
    let id = parseFloat(this.activatedRoute.snapshot.params['id']);
    this.aluno = <Aluno> await this.usuAluService.buscarPorId(id)
    this.usuario = <Usuario> await this.usuService.buscarPorId(id)
  }

}
