window.addEventListener('load', function () {
    
// Idades de exemplo
const idades = [20, 30, 25, 18, 16, 22, 19];

// a) A soma das idades
const somaIdades = idades.reduce((acc, idade) => acc + idade, 0);
document.write(`<p>A soma das idades é: ${somaIdades}</p>`);

// b) A média aritmética simples das idades
const mediaIdades = somaIdades / idades.length;
document.write(`<p>A média das idades é: ${mediaIdades}</p>`);

// c) A maior idade
const maiorIdade = Math.max(...idades);
document.write(`<p>A maior idade é: ${maiorIdade}</p>`);

// d) As idades ímpares
const idadesImpares = idades.filter(idade => idade % 2 !== 0);
document.write(`<p>As idades ímpares são: ${idadesImpares.join(', ')}</p>`);

// e) Verificar se todos são maiores de idade (idade >= 18)
const todosMaioresIdade = idades.every(idade => idade >= 18);
document.write(`<p>Todos são maiores de idade? ${todosMaioresIdade}</p>`);

// f) Verificar se todas as idades são maiores ou iguais a um valor informado pelo usuário
const valorInformado = parseInt(prompt("Informe um valor para verificar se todas as idades são maiores ou iguais a ele:"));
const todasMaioresQueValor = idades.every(idade => idade >= valorInformado);
document.write(`<p>Todas as idades são maiores ou iguais a ${valorInformado}? ${todasMaioresQueValor}</p>`);

// g) Exibir todas as idades maiores ou iguais a determinada idade
const idadeLimite = parseInt(prompt("Informe uma idade para exibir todas as idades maiores ou iguais a ela:"));
const idadesMaioresOuIguais = idades.filter(idade => idade >= idadeLimite);
document.write(`<p>As idades maiores ou iguais a ${idadeLimite} são: ${idadesMaioresOuIguais.join(', ')}</p>`);

// h) A média das idades das pessoas com idades maiores ou iguais a determinada idade
const idadeLimiteMedia = parseInt(prompt("Informe uma idade para calcular a média das idades maiores ou iguais a ela:"));
const idadesMaioresOuIguaisMedia = idades.filter(idade => idade >= idadeLimiteMedia);
const somaIdadesMaioresOuIguais = idadesMaioresOuIguaisMedia.reduce((acc, idade) => acc + idade, 0);
const mediaIdadesMaioresOuIguais = somaIdadesMaioresOuIguais / idadesMaioresOuIguaisMedia.length;
document.write(`<p>A média das idades das pessoas com idade maior ou igual a ${idadeLimiteMedia} é: ${mediaIdadesMaioresOuIguais}</p>`);
})