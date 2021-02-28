/*function botao(){
    alert("Valew por cliclar!")
}*/
function botao(){
    document.getElementById("agradecimento").innerHTML="<b>Obrigada por clicar"
}
function redirecionar(){
    window.open("https://www.google.com/"); (abre em outra aba)
    //window.location.href="https://www.google.com/"; //(abre na mesma aba)
}
function trocar(){
    document.getElementById("mousemove").innerHTML="Obrigada por passar o mouse!"
    //alert("trocar texto")
}
function voltar(){
    document.getElementById("mousemove").innerHTML="Passe o mouse aqui!"
}
function load(){
    alert("Página carregada")
}
function funcaoChange(elemento){
    console.log(elemento.value) //(sempre guarda o valor que foi selecionado num select)
}
/*function validaIdade(idade){
    var validar;
    if(idade>=18){
        validar=true
    }else{
        validar=false
    }
    return validar;
}
var idade = prompt("Qual a sua idade?");
console.log(validaIdade(idade));*/

/*function setReplace(frase, nome, novoNome){
    return frase.replace(nome, novoNome)
}
alert (setReplace("Vai Galão","Galão", "Galão da massa"))*/

/*function soma(n1,n2){
    return n1+n2;
}
alert (soma(12,1));*/


/*var d= new Date();
alert(d.getMonth());(.get imprime a informação específica da data)
*/

/*var d= new Date(); (exibir a data atual)
alert(d);*/

/*var count;
for(count=0; count<=5; count++){
alert(count);
}*/


/*var count = 0;(a primeira posição é o 0 da estrutura de repetição)
while (count<5){
    console.log(count);
    count=count+1; (vai receber ele mesmo + 1)
}*/

/*var idade  = prompt("Qual sua idade?")
if(idade>=18){
    alert("maior de idade")
}else{
    "menor de idade"
}*/


/*var frutas = [{ nome:"uva", cor:"roxa"},{nome: "banana", cor:"amarela"}](dicionário de lista)
console.log(frutas)
alert(frutas[1].nome)*/

/*var fruta = { nome:"uva", cor:"roxa"}(dicionário)
console.log(fruta)
alert(fruta.nome)*/

//var lista = ["maçã", "pera", "uva"];
//console.log(lista.join("*")) (separa os itens do array com o caracter informado entre aspas)
//console.log(lista.toString())(imprime o array como uma String, sem as características naturais)
//console.log(lista.reverse()) (imprime os itens da lista ao contrário)
//console.log(lista.length) (imprime quantos itens tem na lista)
//lista.pop("maçã"); (retira um item da lista específico, se não especificar, retira o último item)
//lista.push("laranja"); (acrescenta um item a lista)
//alert (lista[2])


//var nome = "Iara Haizer";
//var n1 = 20;
//var n2 = 21;
//var frase = "Atlético é o melhor time de Minas";
//alert(n1 + n2);
//alert(nome + " tem " + n1 + " anos.");
//console.log(nome);
//console.log(n1);
//console.log(frase.replace("de Minas", "do Brasil"));
//alert(frase.replace("de Minas", "do Brasil"));