import { Component, OnInit, Output, EventEmitter, ɵConsole } from '@angular/core';
import { CuentaService } from 'src/app/services/cuenta.service';
import { DatePipe } from '@angular/common';
//import { CuentaService } from 'src/app/services/cuenta.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private cuentaService:CuentaService) { }

  codigo: string;
  resultadoconsutla: any;
  nombrecompleto: string;
  direccion: string;
  numero:string;
  fechageneracion:Date  ;

  deudatotal = 0;
  gasadmitotal =0;
  moratotal =0;
  totaltotal =0;

  pipe = new DatePipe('en-US'); 

  fechacorta: any;
  ngOnInit(): void {
  }

  onAgregarPersona(){
    console.log(this.codigo);
    this.cuentaService.getCuentaByIDCiudadano(this.codigo).subscribe(
      res=> {
        console.log(res)
        
        this.resultadoconsutla = res;
        this.nombrecompleto= this.resultadoconsutla[0].NOMBRECOMPLETO;
        this.direccion = this.resultadoconsutla[0].DIRECCION;
        this.numero = this.resultadoconsutla[0].NUMERO;
        this.fechageneracion= this.resultadoconsutla[0].FECHAGENERACION;
        this.fechacorta= this.pipe.transform(this.fechageneracion, 'short');
        //console.log(this.resultadoconsutla);
        //console.log(this.nombrecompleto);
        this.totales();
      }
    );
  }
  totales(){
    
    this.resultadoconsutla.forEach(element => {
      this.deudatotal += element.DEUDA;  
      this.gasadmitotal+= element.GASADMIN;
      this.moratotal += element.MORA;
      this.totaltotal +=element.DEUDA+element.GASADMIN+element.MORA;
      
    });
    
  }
/*
  getCuentas(){
    this.cuentaService.getCuenta(this.codigo).subscribe(res=>{
      console.log(res);
    })

  }
*/
}
