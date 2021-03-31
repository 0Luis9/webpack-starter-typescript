
import db from'./Firebase/Config';
import {retornaDocumentos} from './helpers/mostrar-documentos';

const usuariosRef = db.collection('usuarios');

usuariosRef
.orderBy('nombre')
.orderBy('salario')
.get().then(retornaDocumentos)
