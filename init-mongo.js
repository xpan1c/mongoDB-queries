conn = new Mongo();
db = conn.getDB('mydb');
if (!db.getCollectionNames().includes('restaurantes')) {
    
  db.createCollection('restaurantes');
  db = conn.getDB('admin');
  db.runCommand({
    eval: `
      var command = 'mongoimport --host localhost --db mydb --collection restaurantes --type json --file /data/restaurantes.json -u rootuser -p rootpass --authenticationDatabase admin';
      runProgram("bash", "-c", command);
    `,
    args: [],
    nolock: true,
  });
} else {
  print("La colección restaurantes ya existe y contiene documentos, no se importará.");
}
