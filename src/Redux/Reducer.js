
const initialState = require("../Assests/InitialState.json")
export default function(state = initialState, action) {
    const tabArray =["requests","services","payments"]
    switch (action.type) {
        case 'SET_TAB':
            
          
            return { ...state,status: action.payload.tab }
        case 'SET_EVENT':


            return { ...state,selectedEventId: action.payload.index }


            case 'ACCEPT_REQUEST':
                return { ...state,data:setService(action.payload.data,state.selectedEventId,state.data) }
    
                case 'GENERATE_INVOICE':
                    return { ...state,data:setPayment(action.payload.data,state.selectedEventId,state.data) }
        

    }
    return state
}

 function setService(newVal,selected,allData){
let fullData = JSON.parse(JSON.stringify(allData))
fullData[selected].requests = removeByAttr(fullData[selected].requests, 'id', newVal.id); 
fullData[selected].services.push({...newVal,selectedTime:1585397513000})  
return fullData
}
function setPayment(newVal,selected,allData){
    let fullData = JSON.parse(JSON.stringify(allData))
    fullData[selected].services = removeByAttr(fullData[selected].services, 'id', newVal.id); 
    fullData[selected].payments.push(newVal)  
    return fullData
    }


var removeByAttr = function(arr, attr, value){
    var i = arr.length;
    while(i--){
       if( arr[i] 
           && arr[i].hasOwnProperty(attr) 
           && (arguments.length > 2 && arr[i][attr] === value ) ){ 

           arr.splice(i,1);

       }
    }
    return arr;
}