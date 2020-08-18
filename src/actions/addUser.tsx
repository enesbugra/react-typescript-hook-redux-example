const addUser = (userObj: any) => {
    return {
        type: "ADD",
        payload: userObj
    }
}

export default addUser;