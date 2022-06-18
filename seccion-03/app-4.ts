import { createStore, Store } from 'redux';
import { contadorReducer } from './contador/contador.reducer';
import { incrementadorAction } from './contador/contador.actions';

const store: Store = createStore(contadorReducer);

// Suscripsion al store para notificarme cuando el state cambie
store.subscribe(() => {
    console.log('Actual State:', store.getState());
});

// Cuando cambie el store por medio del dispatch, voy a ser notificado que el state cambio
store.dispatch(incrementadorAction);
