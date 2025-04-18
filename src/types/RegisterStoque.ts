export type Camara = {
    entrada: number;
    saida: number;
  };
  
  export type RegistroEstoque = {
    id: number;
    data: string;
    camara1: Camara;
    camara2: Camara;
    camara3: Camara;
    camara4: Camara;
    camara5: Camara;
  };
  