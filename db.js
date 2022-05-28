conn = new Mongo();
db = conn.getDB("db01");

db.usuarios.insert(
  [
   {nombre: 'Juan Diego', apellido: 'Chu', email: 'juan.chu@utec.edu.pe', celular:'915486524', codAlum:'201920069', carrera:'Ing. Electronica', created_at: new Date('01/23/2020')}
 ]);
