const MongoClient = require('mongodb').MongoClient;

const url = "mongodb+srv://admin:admin@cluster0.sflja.mongodb.net/backend?retryWrites=true&w=majority";


module.exports = class Posts{

    static async insertUser(name,email,password){
        const conn = await MongoClient.connect(url);
        const db = conn.db();
        let result = await db.collection('users').insertOne({data:{
            name : name, 
            email :email,
            password : password,
            avatar: "https://i.pravatar.cc/300"

        },           
            token: ""
            
           
        });

        conn.close();

        return result;
    }

    static async findUser(email,password){
        const conn = await MongoClient.connect(url);
        const db = conn.db();
        let result = await db.collection('users').findOne({
            email:email,
            password : password
        });
        conn.close();

        return result;
    }

    static async select(){
        const conn = await MongoClient.connect(url);
        const db = conn.db();
       
        let result = await db.collection('users').find().toArray();
        conn.close();
        return result;

    }

    
}