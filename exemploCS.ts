// primeiro passo criar interface com os metodos que são necessarios
interface IPersonagem {
  correr: () => void
  andar: () => void
  agachar: () => void
  atirar: () => void
  tomarDano: (dano: number) => void
  morrer: () => void
}
//---------------------------------------

// segundo passo interface que ira extender da interface principal
interface CT extends IPersonagem {
  desarmar: () => void
}
interface TR extends IPersonagem {
  armar: () => void
}
//-----------------------------------------

//terceiro, criação de class 
class Personagem implements IPersonagem {
  //propriedades
  //private usa apenas dentro da class, os metodos que irao modificar elas
  private vida: number;
  private colete: number;
  private estaVivo: boolean = true;

  tomarDano(dano: number): void {
    this.vida = this.vida - dano;
    if(this.vida <= 0)
  }
  correr(): void {}
  andar(): void {}
  agachar(): void {}
  atirar(): void {}
}
