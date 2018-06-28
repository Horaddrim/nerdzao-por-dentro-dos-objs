class Nerdzao {
    constructor() {
        this.community = "10/10";
        this.day = "27/06";
    }
}

// Aqui pegamos uma instância da class;
const bestCommunity = new Nerdzao();

function NerdzaoViaFunction() {
    this.community = "10/10";
    this.day = "27/06";
}

const bestCommunityViaFunction = new NerdzaoViaFunction();

// Como definir um PropertyDescriptor!
Object.defineProperty(bestCommunity, 'example',{
    enumerable: false,
    writable: true,
    configurable: true,
    value: "Deu errado meu exemplo anterior",
});


// Como setar uma "trap" para gets!
const communityProxy = new Proxy(bestCommunity, {
    get: (target, propName) => {
        console.log(JSON.stringify(target));

        if(propName === 'community') {
            return "LIVE CODE DA MERDA";
        } else {
            return target[propName];
        }
    },
});

console.log(communityProxy.community);

// Como setar uma "trap" para um set!
const Rick = {
    nome: 'Rick',
    dimensao: 'C-137',
    jaErrou: false
};

const egoDoRick = {
    set: (obj, propName, value) => {
        if(propName === 'jaErrou') {
            console.log("AAAA, o RICK NUNCA ERRA!");
        } else {
            return Reflect.set(obj, propName, value);
        }
    }
}


const realidade = new Proxy(Rick, egoDoRick);

console.log(realidade.nome);

console.log(realidade.jaErrou);

realidade.jaErrou = true;

console.log(realidade.jaErrou);


// Como pegar um propertyDescriptor de algo "nativo"?
const propertyDescriptor = Object.getOwnPropertyDescriptor([1,2,3], "0");

console.log(JSON.stringify(propertyDescriptor, null, 2));

// LINKS: 
// lucasfcosta.com
// https://www.youtube.com/nodebrjs
// https://meetup.com/pt-BR/nodebr
