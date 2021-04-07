import firebase from '../../Config/firebase'


const set_data = () => {
    return (dispatch) => {
        console.log("Running...")
        dispatch({
            type: "SET_DATA", user: { name: "Affan Ahmed", email: "affanahmed@gmail.com " }
        })
    }
}


const facebookLogin = () => {
    console.log("Facebook_Login")
    return (dispatch) => {
        var provider = new firebase.auth.FacebookAuthProvider();

        firebase
            .auth()
            .signInWithPopup(provider)
            .then((result) => {
                var credential = result.credential;
                var user = result.user;
                var accessToken = credential.accessToken;
                console.log('user=>>>',user)
                console.log("accessToken--->" , accessToken)
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage)
                console.log('errorCode' , errorCode)
            });
            
    }
}

export {
    set_data,
    facebookLogin
}