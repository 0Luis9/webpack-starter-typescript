
import db from'./Firebase/Config';

const usuario = {
    nombre: 'Maria',
    activo: true,
    fechaNaci: 0,
 } 

 const usuariosRef = db.collection('usuarios');

// Insert into usuarios...

//db.collection('usuarios')
//.add(usuario)
//.then( docRef => {
//    console.log( docRef )
//})
//.catch(e => console.log('error', e))


//usuariosRef
//.doc('mW7L4akxWWBLtoHa2VCz')
//.set({
//    activo: false,
//   adad: 44,
//    casado: true,
//    id: 123
//});

//Borrar
usuariosRef
.doc('mW7L4akxWWBLtoHa2VCz')
.delete()
.then( () => console.log('Borrado') )
.catch( e => console.log ('error', e ));
