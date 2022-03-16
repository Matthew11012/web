const greeting = document.querySelector('.')


const logOut = document.querySelector('.logout')

logOut.onclisk = () =>{
    sessionStorage.clear();
    location.load();
}