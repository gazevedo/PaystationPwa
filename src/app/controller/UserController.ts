import { Result } from 'src/app/model/Result';

export class UserController{
  static async UserOperatorLogin(user: any, password: string) {
    await delay(3000);
    if(!user || !password){
      return new Result("Preencha os campos corretamente.");
    }
    else{      
      return new Result("Usuário inválido");
    } 
  } 
}

function delay(ms: number) { 
  return new Promise( resolve => setTimeout(resolve, ms) );
}