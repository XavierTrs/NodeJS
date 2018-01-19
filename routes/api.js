/*
Importer les composants de la route
*/
    const express = require('express');
    const router = express.Router();
    const mySql = require('mysql');
//

/*
Configurer la connexion à la BDD
*/
    const connection = mySql.createConnection({
        host     : 'localhost',
        port     : '3306',
        user     : 'root',
        password : '',
        database : 'dbtest'
    });
//

/*
Définition des routes
*/
    router.get( '/', (req, res) => {
        // Ouvrir la connexion à la BDD
        connection.connect();
        connection.query('SELECT * FROM tasks', (error, results, fields) => 
        {
            if(error){
                res.json({content:error})
            }
            else{
                res.json({content:results, fields:fields})
            }
        });
            // Renvoyer un flux JSON dans la réponse    

        // Fermer la connexion à la BDD
        connection.end();
    });
//

/*
Exporter le module de route
*/
    module.exports = router;
//