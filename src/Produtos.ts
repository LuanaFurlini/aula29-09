export class Produtos{
    private id: number;
    private descricao: string;
    private preco: number;

    constructor(id: number, desc: string, preco: number){
        this.id = id;
        this.descricao =  desc;
        this.preco = preco;
    }

    getDesc(){
        return(this.descricao);
    }

    getPreco(){
        return(this.preco);
    }
}


export let lista_objetos = [
    new Produtos(1, "tenis nike", 110),
    new Produtos(2, "tenis nike", 110),
    new Produtos(3, "tenis nike", 110),
    new Produtos(4, "tenis nike", 110),
    new Produtos(5, "tenis nike", 110),
    new Produtos(6, "tenis nike", 110),
    new Produtos(7, "tenis nike", 110),
    new Produtos(8, "tenis nike", 110),
    new Produtos(9, "tenis nike", 110),
    new Produtos(10, "tenis nike", 110),
    new Produtos(11, "tenis nike", 110),
    new Produtos(12, "tenis nike", 110),
    new Produtos(13, "tenis nike", 110),
    new Produtos(14, "tenis nike", 110),
    new Produtos(15, "tenis nike", 110),
]

console.log(lista_objetos);