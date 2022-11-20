// primeiro passo criar interface com os metodos comuns que todos fazem
type IPersonagem = {
  correr: () => void
  andar: () => void
  agachar: () => void
  atirar: () => void
  tomarDano: (dano: number) => void
  morrer: () => void
}
//---------------------------------------

// segundo passo interface que ira extender da interface principal
interface ICT extends IPersonagem {
  desarmar: () => void
}
interface ITR extends IPersonagem {
  armar: () => void
}

// setimo interface das props que sera colocadas no contructor
interface IPersonagemProps {
  vida: number
  colete: number
}

interface ICTProps extends IPersonagemProps {
  kitDeDesarme: boolean
}

interface ITRProps extends IPersonagemProps {
  C4: boolean
}

//terceiro, criação de class
class Personagem implements IPersonagem {
  //propriedades
  //private usa apenas dentro da class, os metodos que irao modificar elas

  // quarto propriedas que serao utilizadas dentro da class
  private vida: number
  private colete: number
  private estaVivo: boolean = true

  // sexto o que vai receber na criacao do personagem
  constructor({ vida, colete }: IPersonagemProps) {
    this.vida = vida
    this.colete = colete
  }

  // quinto efetuar a montagem dos metodos
  tomarDano(dano: number): void {
    this.vida = this.vida - dano
    this.colete = this.colete - dano * 0.125
    if (this.vida <= 0) {
      this.morrer()
    }
  }
  morrer(): void {
    this.estaVivo = false
  }
  correr(): void {
    if (this.estaVivo) {
      console.log('Correndo')
    } else {
      console.log('Spec')
    }
  }
  andar(): void {
    if (this.estaVivo) {
      console.log('Andando')
    } else {
      console.log('Spec')
    }
  }
  agachar(): void {
    if (this.estaVivo) {
      console.log('Agachado')
    } else {
      console.log('Spec')
    }
  }
  atirar(): void {
    if (this.estaVivo) {
      console.log('Só bala tensa')
    } else {
      console.log('Spec')
    }
  }
}

// class do ict
class CT extends Personagem implements ICT {
  private temKitDeDesarme: boolean

  constructor({ vida, colete, kitDeDesarme }: ICTProps) {
    //super pq vem de outro construtor da classe pai(personagem)
    // super envia o valor recebido para a classe pai
    super({ vida, colete })
    this.temKitDeDesarme = kitDeDesarme
  }
  desarmar(): void {
    if (this.temKitDeDesarme) {
      console.log('desarmando em 5 segundos')
    } else {
      console.log('Desarmando em 10 segundos')
    }
  }
}

class TR extends Personagem implements ITR {
  private temC4: boolean

  constructor({ vida, colete, C4 }: ITRProps) {
    super({ vida, colete })
    this.temC4 = C4
  }
  armar(): void {
    if (this.temC4) {
      console.log('plantando a bomba')
    } else {
      console.log('Baaah meu deixaram a c4 na base')
    }
  }
}

// criação dos personagens
const tr1 = new TR({ vida: 100, colete: 100, C4: true })
const ct1 = new CT({ vida: 100, colete: 100, kitDeDesarme: false })

// utilizacao dos metodos com os personagens criados
tr1.tomarDano(50)
tr1.tomarDano(20)
tr1.andar()
tr1.armar()
ct1.desarmar()
