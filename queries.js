const username = 'rootuser';
const password = 'rootpass';

conn = new Mongo(`mongodb://${username}:${password}@localhost:27017/admin`);
mydb = conn.getDB('mydb');
//Consultas
print("Muestra todos los restaurantes")
printjson(db.restaurantes.find())
printjson(db.restaurantes.find({},{restaurant_id: 1, name: 1, borough: 1, cuisine: 1}))
printjson(db.restaurantes.find({},{restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id:0}))