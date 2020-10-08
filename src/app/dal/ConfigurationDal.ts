import { DataBase } from "src/app/dal/DataBase";
import { Log } from "src/app/utilities/Log";

export class ConfigurationDal extends DataBase{ 
  constructor(){
     super();
  }

  static CreateDataBase(){
     var list:string[] = 
    [ 
        "CREATE TABLE CAIXA (ID BIGINT PRIMARY KEY, USU_ID INTEGER, DATA_ABERTURA TIMESTAMP, DATA_FECHAMENTO TIMESTAMP, VALOR_ABERTURA DECIMAL(12, 2), VALOR_FECHAMENTO DECIMAL(12, 2), EQP_ID INTEGER, INDENVIO BOOLEAN, STATUS BOOLEAN, TROCO DECIMAL);"
    ];
  }

  static UpdateDataBase(){
     var list:string[] = 
    [ 
    ]; 
  }
}