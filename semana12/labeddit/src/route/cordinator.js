export const goToLogin = (history) => {
    history.push("/login");
};

export const goToSingUp = (history) => {
    history.push("/SingUp");
};


export const goToPostsList = (history) => {
    history.push("/");
};

export const goToPost = (history,postId) => {
    history.push(`/Post/${postId}`);
};

export const goToLastPage =(history)=>{
    history.goBack();
}

