//Importation de mysql
import mysql from "mysql"

//Création d'une connection avec ma base de donnée
export const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"social"
});