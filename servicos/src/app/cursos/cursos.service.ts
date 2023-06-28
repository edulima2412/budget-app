import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  cursos: string[] = ['Angular2','Java','C#'];

  getCursos(){
    return this.cursos;
  }

  addCursos(curso: string){
    this.cursos.push(curso);
  }

  constructor() { }
}
