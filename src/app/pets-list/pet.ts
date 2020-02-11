export class Pet {
  constructor(
    public id: number ,
    public nombre: string ,
    public fechaNacimiento: string,
    public raza: string,
    public especie: string,
    public sexo: string,
    public color: string,
    public senasParticulares: string,
    public fotoMascota: string,
    public aceptada: boolean,
    public duenoId: number,
    public veterinarioTexto?: string,
    public veterinarioId?: number ) {
  }
}
