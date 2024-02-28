window.addEventListener('load', function () {

    somaIdades = (vet) => {
        soma = 0;
        for (i = 0; i < vet.length; i++) soma += vet[i];
        return soma;
    }
    vetIdades = [10, 21, 31, 40];
    document.write(`<p>Soma das idades = ${somaIdades(vetIdades)}</p>`);

    // a) 
    let mediaIdade = (vet) => {
        let soma = 0;
        for (let i = 0; i < vet.length; i++) soma += vet[i];
        return soma / vet.length;
    }
    document.write(`<p>Média das idades = ${mediaIdade(vetIdades)}</p>`);

    // b) 
    let maiorIdade = (vet) => Math.max(...vet);
    document.write(`<p>Maior idade = ${maiorIdade(vetIdades)}</p>`);

    // c) 
    let idadesImpares = (vet) => vet.filter(idade => idade % 2 !== 0);
    document.write(`<p>Idades ímpares = ${idadesImpares(vetIdades)}</p>`);

    // d) 
    let todosMaioresIdade = (vet) => vet.every(idade => idade >= 18);
    document.write(`<p>Todos são maiores de idade = ${todosMaioresIdade(vetIdades)}</p>`);

    // e) 
    let todosMaioresOuIguais = (vet, idade) => vet.every(idadeVet => idadeVet >= idade);
    let idadeUsuario = prompt("Digite uma idade:");
    document.write(`<p>Todas as idades são maiores ou iguais a ${idadeUsuario} = ${todosMaioresOuIguais(vetIdades, idadeUsuario)}</p>`);

    // f) 
    let idadesMaioresOuIguais = (vet, idade) => vet.filter(idadeVet => idadeVet >= idade);
    let certaIdade = prompt("Digite uma idade:");
    document.write(`<p>Idades maiores ou iguais a ${certaIdade} = ${idadesMaioresOuIguais(vetIdades, certaIdade)}</p>`);

    // g) 
    let mediaIdadeMaioresOuIguais = (vet, idade) => {
        let idadesFiltradas = vet.filter(idadeVet => idadeVet >= idade);
        return mediaIdade(idadesFiltradas);
    }
    document.write(`<p>Média das idades das pessoas com idades maiores ou iguais a ${certaIdade} = ${mediaIdadeMaioresOuIguais(vetIdades, certaIdade)}</p>`);


});