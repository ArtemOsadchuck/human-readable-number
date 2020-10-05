module.exports = function toReadable (number) {
   if (number === 0) return "zero"
  
 

  const simle = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
  const dual = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen",]
  const decaDigits = ["", "", "twenty ", "thirty ", "forty ", "fifty ", "sixty ", "seventy ", "eighty ", "ninety "]


    const result = () =>{
     if (number < 10){
       return simle[number] 
      } else if (number >=10 && number < 20){
        return dual[number - 10]
      } else if (number >= 20 && number < 30){
        return decaDigits[2] + simle[number - 20]
      } else if (number >= 30 && number < 100){
        return decaDigits[Math.floor(number/10)] + simle[number % 10]
      } else if (number >= 100){
        return simle[Math.floor(number/100)] + " hundred " + (number % 100 ? "" + toReadable(number % 100) : " " )
     }


    }

    return result(number).replace(/\s$/, "").replace(/\s$/, "")
}
