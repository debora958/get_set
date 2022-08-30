class cadastro {
    constructor (nome, endereco){
        this._nome = nome
        this._endereco = endereco
    }
    get novonome(){
        return this._nome    
    }
    set novonome(novonome){
        return this._nome
    }
    get novoendereco(){
        return this._endereco
    }
    set novoendereco(novoendereco){
        return this._novoendereco
    }    
}

const Object = new cadastro ("Marcela, Rua Nova")
console.log(Object._nome)
console.log(Object._endereco)



