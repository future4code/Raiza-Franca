export const goToHome = (history) => {
    history.push("/");
};

export const goToLogin = (history) => {
    history.push("/login");
};

export const goToApplicationForm = (history) => {
    history.push(`/application-form`);
        
};

export const goToCreateTrip = (history) => {
    history.push("/trips/create");
};

export const goToListTrip = (history) => {
    history.push("/trips/list");
};

export const goToTripDetails = (history,id) => {
    history.push(`/trips/details/${id}`);
    
};


export const goToLastPage =(history)=>{
    history.goBack();
}


