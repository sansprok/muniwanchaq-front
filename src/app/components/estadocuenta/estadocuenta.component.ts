import { Component, OnInit } from '@angular/core';
import { CuentaService } from '../../services/cuenta.service';
import { Cuenta } from 'src/app/interfaces/cuenta';

@Component({
  selector: 'app-estadocuenta',
  templateUrl: './estadocuenta.component.html',
  styleUrls: ['./estadocuenta.component.css']
})
export class EstadocuentaComponent implements OnInit {

  constructor(private cuentaService: CuentaService) { }

  id: string = '5ef0c78b77025b3fd4914835';
  idciudadano: string = '00047027S';
  cuenta: Cuenta ={
    IDCIUDADANO:'',
    TRIBUTO:'',
    ANIO:'',
    PERIODOS:0,
    DEUDA:0,
    GASADMIN:0,
    MORA:0,
    DIRECCION:'',
    NUMERO:'',
    NOMBRECOMPLETO:'',
    FECHAGENERACION: new Date(),
    ESTADO:'',
    DESCTRIBUTO:''
  };

  ngOnInit(): void {
    this.getCuenta();
  }

  getCuentas(){
    this.cuentaService.getCuentas()
    .subscribe(
      res=>console.log(res),
      err=>console.log(err)  
    )
  }
  getCuenta(){
    this.cuentaService.getCuentaByIDCiudadano(this.idciudadano)
    .subscribe(
      res=>console.log(res),
      err=>console.log(err)  
    )
  }
  
  submitCuenta(){
    //console.log(this.cuenta)
    this.cuentaService.createCuenta(this.cuenta)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      )
  }

}
