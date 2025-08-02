class Aventureiro{
    constructor (nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo.toLowerCase();


    }
    
    ataque (){

        const ataques ={

            mago: "magia",
            guerreiro: "espada",
            monge: "artes marciais",
            ninja: "shuriken"
           
        };
        
        const tipoAtaque = ataques[this.tipo] || "um ataque desconhecido";
        console.log(`o ${this.tipo} atacou usando ${tipoAtaque}`);
        
        
    }
}

const listaDeHerois = [
    new Aventureiro ("Pedro", 43, "guerreiro"),
    new Aventureiro ("João", 42, "mago"),
    new Aventureiro ("Paulo", 41, "monge"),
    new Aventureiro ("Alex", 40, "ninja"),
]

for (let i = 0; i < listaDeHerois.length; i++){
    listaDeHerois[i].ataque();
}
