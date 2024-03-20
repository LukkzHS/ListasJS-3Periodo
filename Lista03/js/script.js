window.addEventListener("load", () => {
    document.getElementById("filtro").addEventListener("change", () => {
        clear();
        const filtrar = document.getElementById("filtro").value;
        selecionar(filtrar);
    });
});

const selecionar = filtrar => {
    fetch(`https://wilton-filho.github.io/PFJS-GitHub/bases/alunos.json`)
        .then(response => response.json())
        .then(conteudo => {
            switch (filtrar) {
                case "todos":
                    conteudo.forEach(elemento => create(elemento));
                    break;
                case "homens":
                    conteudo.filter(elemento => elemento.sexo === "M").forEach(elemento => create(elemento));
                    break;
                case "mulheres":
                    conteudo.filter(elemento => elemento.sexo === "F").forEach(elemento => create(elemento));
                    break;
                case "aprovados":
                    conteudo.filter(elemento => (elemento.notaBim1 + elemento.notaBim2) >= 60.0).forEach(elemento => create(elemento));
                    break;
                case "reprovados":
                    conteudo.filter(elemento => (elemento.notaBim1 + elemento.notaBim2) < 60.0).forEach(elemento => create(elemento));
                    break;
                case "media":
                    const notaTotal = conteudo.reduce((acumulador, elemento) => acumulador + elemento.notaBim1 + elemento.notaBim2, 0);
                    const alunos = conteudo.length;
                    const media = notaTotal / alunos;
                    const p = document.createElement(`p`);
                    p.textContent = `Média da Turma: ${media.toFixed(1)}`;
                    document.getElementById("resposta").appendChild(p);
                    break;
                case "verificarAprovacao":
                    const todosAprovados = conteudo.every(elemento => (elemento.notaBim1 + elemento.notaBim2) >= 60.0);
                    const pAprovados = document.createElement(`p`);
                    pAprovados.textContent = `Todos Aprovados: ${todosAprovados ? 'Sim' : 'Não'}`;
                    document.getElementById("resposta").appendChild(pAprovados);
                    break;
            }
        })
}

const clear = () => {
    document.getElementById("resposta").innerHTML = "";
}

const create = elemento => {
    const p = document.createElement(`p`);
    p.textContent = `${elemento.nome}: ${(elemento.notaBim1).toFixed(1)} (bimestre 1) e ${(elemento.notaBim2).toFixed(1)} (bimestre 2) = ${(elemento.notaBim1 + elemento.notaBim2).toFixed(1)}`;
    document.getElementById("resposta").appendChild(p);
}
