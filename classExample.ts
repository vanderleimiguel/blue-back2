// enum, limitador de opcoes
enum TamanhoCaneca {
  PEQUENA,
  MEDIA,
  GRANDE
}

//tipagem
interface CanecaProps {
  cor: string
  material: string
  tamanho: TamanhoCaneca
  estampa: string
}

class Caneca {
  //propriedades
  //public pode ser alterado pelos dados que vier de fora da class
  //private sera alterado apenas internamente na class
  public cor: string
  public material: string
  public tamanho: TamanhoCaneca
  public estampa: string
  private conteudo: string | undefined

  //metodos
  Beber() {
    if (!this.conteudo) {
      console.log('Caneca vazia')
    }
    if (this.conteudo?.toUpperCase() === 'VENENO') {
      console.log('Vou tomar isso não meu patrão')
    }
    if (this.conteudo?.toUpperCase() === 'FARINHA') {
      console.log('Estou tentando fazer um bolo')
    }
    return 'Que delicia esse ' + this.conteudo
  }
  Encher(conteudo: string) {
    if (!this.conteudo) {
      this.conteudo = conteudo
    } else {
      console.log('A caneca ta cheia')
    }
  }
  Quebrar() {
    console.log('Foi se a caneca')
  }
  Medir() {
    if (this.conteudo?.toUpperCase() === 'FARINHA') {
      console.log('Esse bolo vai ficar top')
    }
  }
}

//instanciar canecaDaBlue com uma nova class(objeto)
const canecaDaBlue = new Caneca()

canecaDaBlue.cor = 'azul'
canecaDaBlue.tamanho = TamanhoCaneca.GRANDE
canecaDaBlue.estampa = 'Logo da Blue'
canecaDaBlue.material = 'Cerâmica'
canecaDaBlue.Encher('Café')
canecaDaBlue.Encher('Veneno')

console.log(canecaDaBlue.Beber())

//--------------------------------------------------------------------------------------------

//tipar propriedades
type PetProps = {
  nome: string
  especie: string
  tamanho: string
  sexo: string
}

class Pet {
  //private so podem ser alterados dentro da class
  private name: string
  private especie: string
  private tamanho: number
  private sexo: string

  //construtor pode ter validacao e centralizar tudo em apenas algum lugar
  //e obriga a ter todos os parametros para criacao do objeto
  constructor({ especie, tamanho, sexo, nome }: PetProps) {
    this.especie = especie
    this.name = nome
    this.sexo = sexo
    this.tamanho = parseFloat(tamanho)
  }

  Comer() {
    console.log('Hmmmm comidinha')
  }
  Evacuar() {
    console.log('Me deixa em paz')
  }
  Andar() {
    console.log('Andando')
  }
  get nome() {
    return this.name
  }
  set nome(name: string) {
    this.name = name
  }
}

const Gato = new Pet({
  nome: 'Bichano',
  especie: 'Gato',
  sexo: 'Masculino',
  tamanho: 'Pequeno'
})

console.log(Gato.nome)
Gato.nome = 'Peco'
console.log(Gato.nome)

//-------------------------------------------------------
//implementar uma class com metodos obrigatorios na interface
interface IAluno {
  dormir: () => string
  codar: () => string
  estudar: () => string
  makeCoffe: (cafe: boolean) => string
}

class Aluno implements IAluno {
  dormir() {
    return 'Sonequinha'
  }
  codar() {
    return 'Virando Surfista'
  }
  estudar() {
    return 'Aula até amanhecer'
  }
  makeCoffe(cafe: boolean) {
    if (cafe) {
      return 'Que delicia cafézinho'
    } else {
      return 'No coffe no code'
    }
  }
  Procrastinar() {
    return 'To fora codo muito'
  }
}

interface IAnimal {
  correr: () => void
  comer: () => void
}

interface IAnimalProps {
  cor: string
  especie: string
  tamanho: number
}

interface ILeao extends IAnimal {
  rugir: () => void
}

class Animal implements IAnimal {
  private cor: string
  private especie: string
  private tamanho: number

  constructor(animalProps: IAnimalProps) {
    this.cor = animalProps.cor
    this.especie = animalProps.especie
    this.tamanho = animalProps.tamanho
  }

  correr() {
    console.log('correndo')
  }
  comer() {
    console.log('Comendo')
  }
}

class Leao extends Animal implements ILeao {
  rugir() {
    console.log('Rugindo')
  }
}

interface ILeaoEspecifico extends IAnimalProps {
  skill: string
}

class LeaoEspecifico extends Leao {
  public skill: string
  constructor(animalProps: ILeaoEspecifico) {
    super(animalProps)
    this.skill = animalProps.skill
  }

  dancar() {
    console.log('Leão circense')
  }
}

const leao1 = new Leao({ cor: 'laranja', especie: 'lião', tamanho: 20 })
const alex = new LeaoEspecifico({
  cor: 'Verde',
  especie: 'Liãobaio',
  tamanho: 30,
  skill: 'Dançarino'
})