let a=5;
export let b=10;
export default a// if we do not write default then in the importing file one have to call it by the same name as defined in exporting file with in curly braces
// importing functions:
let str="hello";
export function sum(a,b){
    console.log(a+b)
}
// export  {str,sum}// exporting the function//
// one can export many variable and frunction with single export under curly braces
//by default a program can have only one default keyword.there is no need to put the varaible and function in curly basis if we are exporting it along with function/variable declaration17