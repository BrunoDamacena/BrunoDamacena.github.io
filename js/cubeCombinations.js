var combinations;
function calculate() {
    var layers = document.getElementById("layers").value;
    if(typeof layers == 'undefined' || layers == '') return;
    document.getElementById("possible").innerHTML = "O número de combinações possíveis do " + layers + "x" + layers + "x" + layers + " é:";
    combinations = cubeCombinations(layers).toString();
    if(combinations.length > 501) {
        document.getElementById("combinations").innerHTML = "Esse número é da ordem de 10<sup>" + (combinations.length - 1) + '</sup>. <a href="#" onclick="show()">Clique aqui se quiser vê-lo.</a>';
    }
    else {
        document.getElementById("combinations").innerHTML = combinations;
    }    
    document.getElementById("quote").innerHTML = getQuote(layers);
}

function show() {
    document.getElementById("combinations").innerHTML = combinations;
}

function cubeCombinations(layers) {
    if(layers == 1) return bigInt(1);
    return getNumerator(layers).divide(getDenominator(layers));
}

function getNumerator(layers) {
    return getFirstTerm(layers).multiply(getSecondTerm(layers)).multiply(getThirdTerm(layers));
}

function getDenominator(layers) {
    return factorial(4).pow(getExp2(layers));
}

function getFirstTerm(layers) {
    if(bigInt(layers).isEven()) return bigInt(1);
    var firstTerm = bigInt(24).multiply(bigInt(2).pow(10)).multiply(factorial(12));
    return firstTerm;
}

function getSecondTerm(layers) {
    var secondTerm = factorial(7);
    return secondTerm.multiply(bigInt(3).pow(6));
}

function getThirdTerm(layers) {
    var exp = getExp1(layers);
    return factorial(24).pow(exp);
}

function getExp1(layers) {
    var exp = bigInt(layers).pow(2);
    exp = exp.subtract(bigInt(layers).multiply(2));
    exp = exp.divide(4);
    return exp;
}

function getExp2(layers) {
    var exp = bigInt(layers-2).pow(2);
    exp = exp.divide(4);
    exp = exp.multiply(6);
    return exp;
}

function factorial(num) {
    if(num == 1) return bigInt(num);
    return bigInt(num).multiply(factorial(num-1));
}

function getQuote(layers) {
    if(layers == 1) {
        return "Ha ha ha... Que engraçado...";
    }
    else if(layers == 2) {
        return "O número de combinações possíveis do 2x2x2 é relativamente pequeno comparado a outros cubos. Na real, se você gira um 2x2x2 uma vez por segundo durante 8 horas do seu dia, todo dia, você vai resolver o cubo 2 a 3 vezes por ano!";
    }
    else if(layers == 3) {
        return "Aqui o número é um pouquiiiinho grande... Se você estivesse fazendo um giro no 3x3x3 por segundo desde que o Universo passou a existir, você provavelmente ainda não teria resolvido o cubo. O número de combinações é aproximadamente igual a população da Terra (7.442 bilhões em 2016) ao quadrado!";
    }
    else if(layers == 4) {
        return "Esse número já é bem grande! Digamos que você tem essa mesma quantidade de colheres de chá de açúcar. Você teria açúcar suficiente para preencher o nosso Sistema Solar, a partir do Sol, em um raio 3.5 vezes maior que a órbita de Plutão. E também o peso do açúcar ia sofrer um colapso que geraria um buraco negro, e causaria uma explosão capaz de destruir toda a Via Láctea, além de causar uns tremores lá por Andrômeda!";
    }
    else if(layers == 5) {
        return "Esse número é GIGANTE! É quase o número de átomos do nosso Universo!";
    }
    else if(layers == 6) {
        return "Esse número é imensurável! É maior que o número de átomos do Universo ao quadrado!";
    }
    else if(layers == 7) {
        return "ISSO É INSANO! Esse número é tão grande que chega a ser maior que as combinações possíveis de 8 cubos 3x3x3 independentes! Essa comparação não convenceu da magnitude do número? Okay! Imagina o número de átomos do nosso Universo. Agora imagina que para cada átomo no Universo você atribua um novo Universo do tamanho do nosso. Basicamente isso é o número de átomos do Universo elevado ao número de átomos do Universo! E esse número ainda é menor que as combinações possíveis do 7x7x7...";
    }
    else if(layers == 42) {
        return "Esse número é aproximadamente igual a ordem de complexidade do algoritmo que calcula o Sentido da Vida, do Universo e Tudo Mais!";
    }
    else if(layers > 7) {
        return "Esse número é mais que astronômico... É imensurável para qualquer ser humano!";
    }
}


