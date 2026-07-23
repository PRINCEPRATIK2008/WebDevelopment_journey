let a = prompt("Enter first number");
let b = prompt("Enter second number");

if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry this is not allowed")
}
let sum = parseInt(a) +parseInt(b) 
function main(){
    
    const x = 1;
    try {
        console.log("The sum is ", sum*x);
        return true;
    } catch (error) {
        console.log("Error agyaa bhaii oii")
        return false;
    }
    finally{
        console.log("files are being closes and db connection is being closed")
    }
}

let c = main()

// finally is very usefull specially inside functions as we know the function stops after return stat but if we write somthing in finally it will still run.. so thats the use of finally func;