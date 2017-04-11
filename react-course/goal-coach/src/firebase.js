import * as firebase from 'firebase';
const config = {
    apiKey: "AIzaSyBk8sB_WuI5q6XcliPnZgHPL_bp3PnWHng",
    authDomain: "goalcoach-e12da.firebaseapp.com",
    databaseURL: "https://goalcoach-e12da.firebaseio.com",
    projectId: "goalcoach-e12da",
    storageBucket: "goalcoach-e12da.appspot.com",
    messagingSenderId: "548272361890"
};

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');
