import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  // funcion que comprueba las credenciales
  authUser(values: any): Promise<any> {
    const promise = new Promise((resolve, reject) => {
      try {
        if(values.user == '191317' && values.password == 'Miguel20'){
          const res = {
            status: 200,
            err: false,
            cont: 0
          }
          resolve(res)
        }else {
          const res = {
            status: 404,
            err: true,
            cont: 'Usuario o contraseña incorrectos'
          }
          resolve(res)
        } 
      } catch (err) {
        reject(err)
      }
    })

    return promise
  }

  // funcion que activa las cuentas desactivadas
  recoverAccount(values: any): Promise<any> {
    const promise = new Promise((resolve, reject) => {
      try {
        if(values.user == '191317' && values.date == '2000-04-04'){
          const res = {
            status: 200,
            err: false,
            cont: 0
          }
          resolve(res)
        }else {
          const res = {
            status: 404,
            err: true,
            cont: 'Por favor verifícalo, he inténtalo nuevamente'
          }
          resolve(res)
        } 
      } catch (err) {
        reject(err)
      }
    })

    return promise
  }
}
