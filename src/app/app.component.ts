import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '01-bin2dec';
  numero = new FormControl('',[Validators.maxLength(8),Validators.pattern('[0-1]*'),Validators.required]);
  input = ''
  resultadoFinal = 0


  binarioToDecimal(valueInput:string){
    //En caso de error 
    let input = ''
    
    if (valueInput === ''){
      input = 'Error'
    }
    //Caso exitoso
      //Invierto el string
    else if (valueInput){
      for (let i = valueInput.length-1;i >= 0; i--){
        input += valueInput[i]
      }

      //Ejecucion se la funcion matematica
      let aux = 0
      let exponente = 0
      for (let char of input){
        if(char ==='1'){
          aux += Math.pow(2,exponente++)
        }
        else {
          Math.pow(2,exponente++)
        }
        this.resultadoFinal =  aux
      }
    }
  }
}
