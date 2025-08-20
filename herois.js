personagens = [
    {
        nome: "T'Challa",
        codinome: "Pantera Negra",
        armaPrincipal: "Garras de Vibranium",
        armaSecundaria: "Chakrams",
        velocidade: 70,
        forca: 80,
        resistencia: 65
    },
    {
        nome: "Wade Winston Wilson",
        codinome: "Deadpool",
        armaPrincipal: "Armas em geral",
        armaSecundaria: "Katana",
        velocidade: 60,
        forca: 70,
        resistencia: 100
    },
    {
        nome: "Peter Parker",
        codinome: "Homem Aranha",
        armaPrincipal: "Teia",
        armaSecundaria: "",
        velocidade: 85,
        forca: 75,
        resistencia: 80
    },
    {
        nome: "Namor McKenzie",
        codinome: "Namor",
        armaPrincipal: "Tridente",
        armaSecundaria: "",
        velocidade: 80,
        forca: 70,
        resistencia: 65
    }, 
    {
        nome: "Daniel Rand",
        codinome: "Punho de Ferro",
        armaPrincipal: "Soco",
        armaSecundaria: "",
        velocidade: 60,
        forca: 60,
        resistencia: 50
    },
    {
        nome: "Erik Magnus Lehnsherr",
        codinome: "Magneto",
        armaPrincipal: "Controle do metal",
        armaSecundaria: "",
        velocidade: 50,
        forca: 85,
        resistencia: 70
    },
    {
        nome: "Illyana Rasputina",
        codinome: "Magia",
        armaPrincipal: "Magia demoníaca",
        armaSecundaria: "Espada",
        velocidade: 70,
        forca: 60,
        resistencia: 80
    },
    {
        nome: "Thanos",
        codinome: "Thanos",
        armaPrincipal: "Luva do infinito",
        armaSecundaria: "",
        velocidade: 90,
        forca: 90,
        resistencia: 90
    }
];

    for(let x = 0; x < personagens.length; x ++){
        const personagem1 = personagens[x];
        for(let y = x + 1; y < personagens.length; y ++) {
            const personagem2 = personagens[y]
            console.log('Comparando: ' + personagem1.codinome + ' vs '+ personagem2.codinome)

            let pontos1 = 0
            let pontos2 = 0

        if (personagem1.velocidade > personagem2.velocidade) {
            pontos1 += 1;
        } else if (personagem2.velocidade > personagem1.velocidade) {
            pontos2 += 1;
        }

        if (personagem1.forca > personagem2.forca) {
            pontos1 += 1;
        } else if (personagem2.forca > personagem1.forca) {
            pontos2 += 1;
        }

        if (personagem1.resistencia > personagem2.resistencia) {
            pontos1 += 1;
        } else if (personagem2.resistencia > personagem1.resistencia) {
            pontos2 += 1;
        }

        
        if (pontos1 > pontos2){
            console.log('Esse personagem ganhou!: ' + personagem1.codinome + '\nPontos feitos: ' + pontos1);
        }
            else if (pontos2 > pontos1){
            console.log ('Esse personagem ganhou!:' + personagem2.codinome + '\nPontos feitos:' + pontos2);
        }
            else {
            console.log('Empate!');
        }
    }
}