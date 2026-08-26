let nomeUsuario = prompt("Digite seu nome:");
let sobreNomeUsuario = prompt("Digite seu sobrenome:");
let data = new Date().toLocaleString("pt-BR",{dateStyle: "full", timeStyle: "short"});

let dia = data.getdate();
const semana = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];
let mes = data.getMonth();
let horas = data.getHours();
let minutos = data.getMinutes();

let datahoje = `${semana[dia]}, ${dia}/${mes}/${data.getFullYear()} - ${horas}:${minutos}`;

console.log(`Olá, ${nomeUsuario} ${sobreNomeUsuario}! Hoje é ${data}.`);

setInterval(() => {
    let bemVindoElement = document.getElementById("bemvindo");
    if (bemVindoElement) {
        bemVindoElement.innerHTML = `Bem-vindo, ${nomeUsuario} ${sobreNomeUsuario}! Hoje é ${data}`;
    }
}, 3000);






