// Acciones
interface Action {
    type: string;
    payload?: any;
}

// Reducer: Es una funcion comun con dos parametros
// Debe ser una funcion pura, todo se resuleve con el estado y la accion que se obtiene
// Una aplicacion puede tener varios reducer
function reducer(state = 10, action: Action) {
    if (action.type === 'INCREMENTAR') state++;

    switch (action.type) {
        case 'INCREMENTAR':
            return state++;
        case 'DECREMENTAR':
            return state--;
        case 'MULTIPLICAR':
            return state * action.payload;
        case 'DIVIDIR':
            return state / action.payload;
        default:
            return state;
    }
}

// Usar el reducer
const incrementadorAction: Action = {
    type: 'INCREMENTAR',
};

console.log(reducer(10, incrementadorAction)); // 11

const decrementadorAction: Action = {
    type: 'DECREMENTAR',
};

console.log(reducer(10, decrementadorAction)); // 9

const multiplicarAction: Action = {
    type: 'MULTIPLICAR',
    payload: 2,
};

console.log(reducer(10, multiplicarAction));

const dividirAction: Action = {
    type: 'DIVIDIR',
    payload: 2,
};

console.log(reducer(10, dividirAction));
