const inialState=20000;
const decreaseTheNumber=(state=inialState,action)=>{
    switch(action.type){
        case "decrementbyfive" : if(state>0){ return state - action.payload;}
        case "decrementbyten" : return state - action.payload;

        default:return state;
    }
}

export default decreaseTheNumber;