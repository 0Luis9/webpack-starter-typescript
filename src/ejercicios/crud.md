# Referencia
 const usuariosRef = db.collection('usuarios');

# Objeto

const usuario = {
    nombre: 'Susana',
    activo: false,
    fechaNaci: 0,
    salario: 2500
 } 

## Insert into usuarios...

db.collection('usuarios')
.add(usuario)
.then( docRef => {
    console.log( docRef )
})
.catch(e => console.log('error', e))

usuariosRef
.doc('mW7L4akxWWBLtoHa2VCz')
.set({
    activo: false, 
      adad: 44,
    casado: true,
    id: 123
});

Borrar
usuariosRef
.doc('mW7L4akxWWBLtoHa2VCz')
.delete()
.then( () => console.log('Borrado') )
.catch( e => console.log ('error', e ));

Select * from usuario;
usuariosRef
.onSnapshot( retornaDocumentos )
    
usuariosRef.get().then( retornaDocumentos );


Select * from usuarios
where activo = true


usuariosRef.where('activo','==', true).get().then( retornaDocumentos);


Select * from usuarios
where salario > 1800


usuariosRef.where('salario','>', 1800)
.get().then( retornaDocumentos)


Select * from usuarios
where salario > 1800 and salario < 2300
where salario between 1800 and 2300


usuariosRef
.where('salario','>=', 1800)
.where('salario','<=',2300 )
.get().then( retornaDocumentos);


Select * from usuarios
where salario > 1800
 and activo == true
*/

usuariosRef
.where('salario','>=', 1800)
.where('activo','==', true )
.get().then( retornaDocumentos);