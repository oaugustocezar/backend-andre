const MongoClient = require('mongodb').MongoClient;

const url = "mongodb+srv://admin:admin@cluster0.sflja.mongodb.net/backend?retryWrites=true&w=majority";


module.exports = class Posts{

    static async insertUser(name,email,password){
        const conn = await MongoClient.connect(url);
        const db = conn.db();
        let result = await db.collection('users').insertOne({
            name : name, 
            email :email,
            password : password,        

            data:{
            avatar: "https://i.pravatar.cc/300"

        },          
            token: "",
            error: ""
            
           
        });

        conn.close();

        return result;
    }

    static async findUser(email,password){
        console.log(email,password);
        const conn = await MongoClient.connect(url);
        const db = conn.db();
        let result = await db.collection('users').findOne({
            email :email, 
            password:password
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

    static async insertBarber(name, star){

        const conn = await MongoClient.connect(url);
        const db = conn.db();

        let result = await db.collection('barbers').insertOne({data:{

           avatar: "https://i.pravatar.cc/300",
           name: name,
           stars : star


        }, error: ""})

    }

    static async getBarbers(lat, lng, locationText){

        const conn = await MongoClient.connect(url);
        const db = conn.db();
        let result = await db.collection('barbers').find().toArray();
        conn.close();
        return result;

    }

    

    
}