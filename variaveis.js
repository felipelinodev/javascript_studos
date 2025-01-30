/* var -> Essa é a forma mais antiga de usar variáveis no javascript, mas muito pouco usada hoje em dia, visto que esse variáveis declarada com (var) não tem escopo.
   Vou demonstrar isso.
*/

console.log(nome) // Undefined, fignifica que a variável foi declara lá no topo do código. Aqui podemos notar que o javascript não estár sefuindo a ordem, ou seja ela foi declarada mas não definida.
var nome = 'João' //Variáveis com (var), tem escopo global ou de função,se não for em uma função tem escopo global, se for tem escopo apenas de função, isso pode gerar diversos problemas.

console.log(idade) // Aqui já dá um erro, pois diferente de (var) const não tem escopo global e sim escopo de bloco.
const idade = 18 //(const) vem de constante ou seja, ela não pode ser atualizada nem declarada novamente
idade = 20 // Isso aqui vai dar erro, pois (const) não pode ser atualziada.

let cidade = "Uberlandia" //(let) tem todas as caracterís de const, não tem escopo global e sim escopo de bloco. Mas diferente de const ele pode ser atualizada a qualquer momento.
cidade = "São Paulo" // Isso aqui não dá erro.

