var cyndaquil = {
    nome: "Cyndaquil",
    numeroPokedex: 155,
    tipo: "Fogo",
    nivel: 10,
    vida: 100,
    energia: 80,
    altura: 0.5,
    peso: 7.9,
    forca: 52,
    defesa: 43,
    velocidade: 65,
    habilidade: "Blaze",

    atacar: function() {
        if (this.energia < 10) {
            mostrarMensagem("Cyndaquil está sem energia para atacar!");
            return;
        }

        this.energia -= 10;
        mostrarMensagem("Cyndaquil atacou!");
    },

    usarBrasas: function() {
        if (this.energia < 15) {
            mostrarMensagem("Cyndaquil está sem energia para usar Brasas!");
            return;
        }

        this.energia -= 15;
        mostrarMensagem("Cyndaquil usou Brasas!");
    },

    receberDano: function(dano) {
        this.vida -= dano;

        if (this.vida < 0) {
            this.vida = 0;
        }

        mostrarMensagem("Cyndaquil recebeu " + dano + " de dano.");
    },

    descansar: function() {
        this.energia += 20;

        if (this.energia > 100) {
            this.energia = 100;
        }

        mostrarMensagem("Cyndaquil descansou e recuperou energia.");
    },

    comer: function() {
        this.energia += 10;

        if (this.energia > 100) {
            this.energia = 100;
        }

        mostrarMensagem("Cyndaquil comeu e recuperou energia.");
    },

    treinar: function() {
        this.nivel += 1;
        this.forca += 2;
        mostrarMensagem("Cyndaquil treinou e ficou mais forte!");
    }
};

var nome = document.querySelector("#nome");
var tipo = document.querySelector("#tipo");
var nivel = document.querySelector("#nivel");
var vida = document.querySelector("#vida");
var energia = document.querySelector("#energia");
var altura = document.querySelector("#altura");
var peso = document.querySelector("#peso");
var habilidade = document.querySelector("#habilidade");
var barraVida = document.querySelector("#barraVida");
var barraEnergia = document.querySelector("#barraEnergia");
var mensagem = document.querySelector("#mensagem");
var sprite = document.querySelector("#sprite");
var gameArea = document.querySelector("#gameArea");

var posicaoX = 50;
var posicaoY = 50;
var velocidadeMovimento = 3;

function atualizarTela() {
    nome.textContent = cyndaquil.nome;
    tipo.textContent = cyndaquil.tipo;
    nivel.textContent = cyndaquil.nivel;
    vida.textContent = cyndaquil.vida + "/100";
    energia.textContent = cyndaquil.energia + "/100";
    altura.textContent = cyndaquil.altura;
    peso.textContent = cyndaquil.peso;
    habilidade.textContent = cyndaquil.habilidade;

    barraVida.style.width = cyndaquil.vida + "%";
    barraEnergia.style.width = cyndaquil.energia + "%";

    if (cyndaquil.vida <= 25) {
        barraVida.style.background = "#d93636";
    } else {
        barraVida.style.background = "#55ad54";
    }

    sprite.style.left = posicaoX + "%";
    sprite.style.top = posicaoY + "%";
}

function mostrarMensagem(texto) {
    mensagem.textContent = texto;
    atualizarTela();
}

function moverCyndaquil(tecla) {
    if (tecla === "ArrowUp") {
        posicaoY -= velocidadeMovimento;
        sprite.src = "assets/img/cyndaquil_up.png";
    }

    if (tecla === "ArrowDown") {
        posicaoY += velocidadeMovimento;
        sprite.src = "assets/img/cyndaquil_down.png";
    }

    if (tecla === "ArrowLeft") {
        posicaoX -= velocidadeMovimento;
        sprite.src = "assets/img/cyndaquil_left.png";
    }

    if (tecla === "ArrowRight") {
        posicaoX += velocidadeMovimento;
        sprite.src = "assets/img/cyndaquil_right.png";
    }

    if (posicaoX < 7) {
        posicaoX = 7;
    }

    if (posicaoX > 93) {
        posicaoX = 93;
    }

    if (posicaoY < 12) {
        posicaoY = 12;
    }

    if (posicaoY > 88) {
        posicaoY = 88;
    }

    atualizarTela();
}

document.addEventListener("keydown", function(event) {
    if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(event.key)) {
        event.preventDefault();
        moverCyndaquil(event.key);
    }
});

document.querySelector("#btnAtacar").addEventListener("click", function() {
    cyndaquil.atacar();
});

document.querySelector("#btnComer").addEventListener("click", function() {
    cyndaquil.comer();
});

document.querySelector("#btnDescansar").addEventListener("click", function() {
    cyndaquil.descansar();
});

document.querySelector("#btnTreinar").addEventListener("click", function() {
    cyndaquil.treinar();
});

document.querySelector("#btnBrasas").addEventListener("click", function() {
    cyndaquil.usarBrasas();
});

document.querySelector("#btnDano").addEventListener("click", function() {
    cyndaquil.receberDano(15);
});

atualizarTela();
