export interface Scanning {


    s_no:string;
    name:string;
    age:string;
    gender:string;
    dd:string;
    count_of_patient:string;

}
export interface Register
{
 
  name:string;
    phone_number:string;
    email:string;
    password:string;
    confirm_password:string;

  
}
export interface Doctor
{
    id_no:string;
    name:string;
    phone_number:string;
    age:string;
    experience:string;

}

  export interface UniqueConstraintError {
    errorNum: Number;
    offset: Number;
  }
  export interface InsertedSuccess {
    lastRowid: String;
    rowsAffected: Number;
  }
  export interface Read {
    Result: [];
  }
