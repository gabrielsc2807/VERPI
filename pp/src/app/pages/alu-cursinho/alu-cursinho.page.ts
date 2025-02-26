import { Component, OnInit } from '@angular/core';
import { Usuario} from 'src/app/model/usuario';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Cursinho } from 'src/app/model/cursinho';

@Component({
  selector: 'app-alu-cursinho',
  templateUrl: './alu-cursinho.page.html',
  styleUrls: ['./alu-cursinho.page.scss'],
})
export class AluCursinhoPage implements OnInit {
  
  cursinho: Cursinho;
  formGroup: FormGroup;
  usuarios: Usuario [];
  constructor(private toastController: ToastController, private navController: NavController, private alertController: AlertController, private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute) { 
    this.cursinho = new Cursinho();
    this.usuarios = [];
    this.formGroup = this.formBuilder.group(
      {
        'usuario': [this.cursinho.alunos[1/*So pra n dar erro*/], Validators.compose([
          Validators.required
        ])],
      }
      )
  }


  ngOnInit() {
  }

}
