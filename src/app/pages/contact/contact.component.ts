import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  
  formulario!: FormGroup;

  constructor(private formbuilder: FormBuilder){
    this.formulario = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['', [Validators.required, Validators.minLength(10)]]
    })
  }
  
  ngOnInit(): void {
    
  }

  enviar(event: Event){
    event.preventDefault();
    console.log(this.formulario);
  }
  hasError(field: string, typeError: string){
    return this.formulario.get(field)?.hasError(typeError) && this.formulario.get(field)?.touched;
  }

}
