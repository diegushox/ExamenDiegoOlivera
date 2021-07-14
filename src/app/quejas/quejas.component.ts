import { Component, OnInit } from '@angular/core';
import {FormGroup,Validators,FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-quejas',
  templateUrl: './quejas.component.html',
  styleUrls: ['./quejas.component.scss']
})
export class QuejasComponent implements OnInit 
{
  quejas:FormGroup;
  quejasAUX:any;
  submitted = false;
  isVisible = true;
  htmlStr: string = '';
  constructor(private formBuilder: FormBuilder) {
    this.quejas = this.formBuilder.group({
    }); 
  }

  ngOnInit(): void 
  {
    this.quejas = this.formBuilder.group
    ({
        nombrecompleto: ['', Validators.required],     
        pais: ['', Validators.required],  
        observacion: ['', Validators.required]      
    });
  }

  get f() { return this.quejas.controls; }

    onSubmit() 
    { 
      this.submitted = true;
      if (this.quejas.invalid) {
          return;
      }
      this.isVisible=false;
      this.htmlStr="Su queja fue recibida. Muy pronto nos estaremos comunicando con usted.";
    }

    
      
    
}
