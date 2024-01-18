let heroi = "Arqueiro"
let qtdexp = "2500"

if (qtdexp <= 1000) {
    console.log("ferro")
}else if ((qtdexp === 1001) || (qtdexp <= 2000)) {
    console.log("O herói de nome " + heroi + " está no nível de bronze.")
}else if ((qtdexp === 2001) || (qtdexp <= 5000)) {
    console.log("O herói de nome " + heroi + " está no nível de prata.")
}else if ((qtdexp === 5001) || (qtdexp <= 7000)) {
    console.log("O herói de nome " + heroi + " está no nível de ouro.")
}else if ((qtdexp === 7001) || (qtdexp <= 8000)) {
    console.log("O herói de nome " + heroi + " está no nível de platina.")
}else if ((qtdexp === 8001) || (qtdexp <= 9000)) {
    console.log("O herói de nome " + heroi + " está no nível de ascendente.")
}else if ((qtdexp === 9001) || (qtdexp <= 10000)) {
    console.log("O herói de nome " + heroi + " está no nível de imortal.")
}else {
    console.log("O herói de nome " + heroi + " está no nível de radiante.")
}