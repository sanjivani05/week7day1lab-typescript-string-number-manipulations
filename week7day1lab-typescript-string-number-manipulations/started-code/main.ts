import { StringManipulationService } from './main-service';
import { NumberManipulationService } from './main-service';
class StringManipulations implements StringManipulationService{

    print(word:string): void{
        console.log(word);
        console.log(word.toUpperCase());
        console.log(word.toLowerCase());
        console.log(word.charAt(2));
        console.log(word.concat("Hi"));
        console.log(word.slice(2,-2));
        console.log(word.length);     
    }

    printWithSpace(sentence:string) : void{
        console.log(sentence.split('').join(' '));
    }

    findVowel(str: string) : void{
        console.log((str.match(/[aeiou]/gi) || []).length);
    }
}

let obj = new StringManipulations();
  obj.print("sanjivani");
  obj.printWithSpace("sanjivani");
  obj.findVowel("sanjivani");

class NumbersManipulations implements NumberManipulationService{
    findPrime(num: number) : void{
        
        if(num % 2=== 0)
        console.log(num+"is a not prime number");
        else
        console.log(num+"is a prime number"); 
      
    }
    findMagic(num: number) : void
    {
        let sum:number=0;
        while (num) {
             sum += num % 10;
            num = Math.floor(num / 10);
        }
        if(num==1){ 
            console.log("It is a Magic Number");
        }
        else
        console.log("It is not a Magic Number");
    }


}
let obj1 = new NumbersManipulations();
  obj1.findPrime(7);
  obj1.findMagic(199);
