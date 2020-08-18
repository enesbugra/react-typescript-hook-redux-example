export interface initialDataType {
    userList: Array<User>;
}

let initialState: initialDataType;
const userList = (state: initialDataType = initialState, action: any) => {
    switch(action.type){
        case "ADD":
            return {
                ...state,
                userList: [...state.userList, action.payload]
            }
        case "DELETE":
            return {

            }
        default: 
            return state
    }
}

export interface User {
    firstName: String,
    lastName: String,
    age: String,
    profession: String
}

export default userList