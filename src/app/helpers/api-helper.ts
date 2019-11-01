import * as _ from "lodash";
import { environment } from "src/environments/environment";

export class ApiHelper{
   constructor(){

   }
   getSpaUrl(url){
       const uri = environment.v_uri;
       return _.trim(uri) + _.trim(url, '/');
   }
}