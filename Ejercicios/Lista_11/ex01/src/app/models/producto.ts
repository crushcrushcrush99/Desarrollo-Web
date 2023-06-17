export default class Producto{
  nombre: string;
  descripcion: string;
  imagen: string;
  valor: number;

  constructor(nombre: string, descripcion: string, imagen: string, valor: number){
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.imagen = imagen;
    this.valor = valor;
  }
}
