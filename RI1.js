const personagem = {
    nome: "T'Challa",
    codinome: "Pantera Negra",
    armaPrincipal: "Garras de Vibranium",
    armaSecundaria: "Chakrams",
    velocidade: 70,
    forca: 80,
    resistencia: 65,
    descricao: function(){
        return "Nome do personagem: " + this.nome + "\n"
        + "Codinome: " + this.codinome + "\n"
        + "Arma Principal: " + this.armaPrincipal + "\n" 
        + "Arma Secundaria: " + this.armaSecundaria + "\n"
        + "Nivel de força: " + this.forca + "\n"
        + "Nivel de velocidade: " + this.velocidade + "\n"
        + "Nivel de resistencia: " + this.resistencia + "\n"    
    }
}

const personagem2 = {
    nome: "Wade Winston Wilson",
    codinome: "Deadpool",
    armaPrincipal: "Armas em geral",
    armaSecundaria: "Katana",
    velocidade: 60,
    forca: 70,
    resistencia: 100,
    descricao: function(){
        return "Nome do personagem: " + this.nome + "\n"
        + "Codinome: " + this.codinome + "\n"
        + "Arma Principal: " + this.armaPrincipal + "\n" 
        + "Arma Secundaria: " + this.armaSecundaria + "\n"
        + "Nivel de força: " + this.forca + "\n"
        + "Nivel de velocidade: " + this.velocidade + "\n"
        + "Nivel de resistencia: " + this.resistencia + "\n"   
    }
}

const personagem3 = {
    nome: "Peter Parker",
    codinome: "Homem Aranha",
    armaPrincipal: "Teia",
    armaSecundaria: "",
    velocidade: 85,
    forca: 75,
    resistencia: 80,
    descricao: function(){
        return "Nome do personagem: " + this.nome + "\n"
        + "Codinome: " + this.codinome + "\n"
        + "Arma Principal: " + this.armaPrincipal + "\n" 
        + "Arma Secundaria: " + this.armaSecundaria + "\n"
        + "Nivel de força: " + this.forca + "\n"
        + "Nivel de velocidade: " + this.velocidade + "\n"
        + "Nivel de resistencia: " + this.resistencia + "\n"    
    }
}

const personagem4 = {
     nome: "Namor McKenzie",
    codinome: "Namor",
    armaPrincipal: "Tridente",
    armaSecundaria: "",
    velocidade: 80,
    forca: 70,
    resistencia: 65,
    descricao: function(){
        return "Nome do personagem: " + this.nome + "\n"
        + "Codinome: " + this.codinome + "\n"
        + "Arma Principal: " + this.armaPrincipal + "\n" 
        + "Arma Secundaria: " + this.armaSecundaria + "\n"
        + "Nivel de força: " + this.forca + "\n"
        + "Nivel de velocidade: " + this.velocidade + "\n"
        + "Nivel de resistencia: " + this.resistencia + "\n"    
    }
}

const personagem5 = {
   nome: "Daniel Rand",
    codinome: "Punho de Ferro",
    armaPrincipal: "Soco",
    armaSecundaria: "",
    velocidade: 60,
    forca: 60,
    resistencia: 50,
    descricao: function(){
        return "Nome do personagem: " + this.nome + "\n"
        + "Codinome: " + this.codinome + "\n"
        + "Arma Principal: " + this.armaPrincipal + "\n" 
        + "Arma Secundaria: " + this.armaSecundaria + "\n"
        + "Nivel de força: " + this.forca + "\n"
        + "Nivel de velocidade: " + this.velocidade + "\n"
        + "Nivel de resistencia: " + this.resistencia + "\n"    
    }
}

const personagem6 = {
    nome: "Erik Magnus Lehnsherr",
    codinome: "Magneto",
    armaPrincipal: "Controle do metal",
    armaSecundaria: "",
    velocidade: 50,
    forca: 85,
    resistencia: 70,
    descricao: function(){
        return "Nome do personagem: " + this.nome + "\n"
        + "Codinome: " + this.codinome + "\n"
        + "Arma Principal: " + this.armaPrincipal + "\n" 
        + "Arma Secundaria: " + this.armaSecundaria + "\n"
        + "Nivel de força: " + this.forca + "\n"
        + "Nivel de velocidade: " + this.velocidade + "\n"
        + "Nivel de resistencia: " + this.resistencia + "\n"   
    }
}

const personagem7 = {
    nome: "Illyana Rasputina",
    codinome: "Magia",
    armaPrincipal: "Magia demoníaca",
    armaSecundaria: "Espada",
    velocidade: 70,
    forca: 60,
    resistencia: 80,
    descricao: function(){
        return "Nome do personagem: " + this.nome + "\n"
        + "Codinome: " + this.codinome + "\n"
        + "Arma Principal: " + this.armaPrincipal + "\n" 
        + "Arma Secundaria: " + this.armaSecundaria + "\n"
        + "Nivel de força: " + this.forca + "\n"
        + "Nivel de velocidade: " + this.velocidade + "\n"
        + "Nivel de resistencia: " + this.resistencia + "\n"   
    }
}

const personagem8 = {
    nome: "Thanos",
    codinome: "Thanos",
    armaPrincipal: "Luva do infinito",
    armaSecundaria: "",
    velocidade: 90,
    forca: 90,
    resistencia: 90,
    descricao: function(){
        return "Nome do personagem: " + this.nome + "\n"
        + "Codinome: " + this.codinome + "\n"
        + "Arma Principal: " + this.armaPrincipal + "\n" 
        + "Arma Secundaria: " + this.armaSecundaria + "\n"
        + "Nivel de força: " + this.forca + "\n"
        + "Nivel de velocidade: " + this.velocidade + "\n"
        + "Nivel de resistencia: " + this.resistencia + "\n"   
    }
}

const personagens = []
personagens.push(personagem,personagem2,personagem3,personagem4,personagem5,personagem6,personagem7,personagem8)

    for(let x = 0; x < personagens.length; x ++){
        const p1 = personagens[x];
        for(let y = x + 1; y < personagens.length; y ++) {
            const p2 = personagens[y]
            console.log('Comparando: ' + p1.codinome + ' vs '+ p2.codinome)

            let pontos1 = 0
            let pontos2 = 0

        if (p1.velocidade > p2.velocidade) {
            pontos1 += 1;
        } else if (p2.velocidade > p1.velocidade) {
            pontos2 += 1;
        }

        if (p1.forca > p2.forca) {
            pontos1 += 1;
        } else if (p2.forca > p1.forca) {
            pontos2 += 1;
        }

        if (p1.resistencia > p2.resistencia) {
            pontos1 += 1;
        } else if (p2.resistencia > p1.resistencia) {
            pontos2 += 1;
        }

        
        if (pontos1 > pontos2){
            console.log('Esse personagem ganhou!: ' + p1.codinome + '\nPontos feitos: ' + pontos1);
        }
            else if (pontos2 > pontos1){
            console.log ('Esse personagem ganhou!:' + p2.codinome + '\nPontos feitos:' + pontos2);
        }
            else {
            console.log('Empate!');
        }
    }
    
}

for (let x = 0; x < personagens.length; x++){
    console.log(personagens[x].descricao())
}