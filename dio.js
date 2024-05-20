class contabancaria{
    constructor(agencia,numero,tipo,saldo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = saldo;
    }

    get saldo(){
        return this._saldo;
    }

    set saldo(valor){
        this._saldo = valor;
    }

    sacar(valor){
        if(valor > this._saldo){
            return "Saldo Insuficiente!";
        }
        this._saldo = this._saldo - valor;

        return this._saldo;
    }

    depositar(valor){
        this._saldo = this._saldo + valor;

        return this._saldo;
    }


}

class ContaCorrente extends contabancaria { 
    constructor(agencia, numero, saldo, CartaoCredito){
        super(agencia,numero,saldo);

        this.tipo = 'corrente';
        this._CartaoCredito = 'CartaoCredito';
    }
    
    get CartaoCredito(){ 
        return this._CartaoCredito;
    }

    set CartaoCredito(valor){
        this._CartaoCredito = valor;
    }
    
}

class ContaPoupanca extends contabancaria{
    constructor(agencia, numero, saldo, ){
        super(agencia,numero,saldo);
        this.tipo = 'poupanca';
}
}

class ContaUniversitaria extends contabancaria{
    constructor(agencia, numero, saldo, ){
        super(agencia,numero,saldo);
        this.tipo = 'univeritaria';
}

sacar(valor){
    if(valor > 500){
        return 'Consulte o gerente para saques maiores!';
    }
    
    return this._saldo = this.saldo - valor;
}
}



