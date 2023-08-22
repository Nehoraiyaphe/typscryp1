// תרגיל 1
const big = (a: number, b: number): number => {
    return a >= b ? a : b;

};
console.log(big(3, 5));


// // תרגיל 2

const bigPrint = (a: number, b: number): void=> {
    


    console.log(a >= b ? a : b);
    
};
bigPrint(4,5)


// // תרגיל 3
const oddValue = (a: number): string => {
   if (0 === 2 % a){
       return "even"
   }else{
        return "odd"
   }


}
console.log(oddValue(3));


// // תרגיל 4
const lenString = (a: string): number => {
    return a.length
}
console.log(lenString("abcdef"))



// // תרגיל 5
const longNumber = (a: number):number[] =>{
    let arr:number[] = []
    for(let i = 1 ; i <=a; i++) {
        arr.push(i);
    }
    return arr
}
console.log(longNumber(17));



// // תרגיל 6


const findMaxNumber = (arr: number[]): number => {
    let maxNumber: number = arr[0]; 
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxNumber) {
            maxNumber = arr[i];
        }
    }
    return maxNumber;
};

console.log(findMaxNumber([3, 8, 2, 10, 5])); 



// תרגיל 7


// const Person:{
//     name:string;
//     age:number;
//     isStudent: boolean;
// }

// תרגיל 8

// type Person = {
//     name: string;
//     age: number;
//     isStudent: boolean;
// };

// const printPerson = (person: Person): void => {

    
// };

// let x: Person = {
//     name: "John",
//     age: 19,
//     isStudent: true
// };

// printPerson(x);


// // תרגיל 9
type Person = {
    name: string;
    age: number;
    isStudent: boolean;
};

const isMinor = (person: Person): boolean => {
    if (person.age < 18) {
        return true;
    } else {
        return false;
    }
};

let x: Person = {
    name: "John",
    age: 19,
    isStudent: true
};

console.log(isMinor(x));



// // תרגיל 10

interface Book{
    Title:string;
    Author:string; 
    Year:number;
}


// תרגיל 11


// interface Person {
//     name: string;
//     age: number;
//     isStudent: boolean;
// }

type Reader = Person & {
    favoriteBook: Book;
};

const printReader = (reader: Reader): void => {
    console.log(`Name: ${reader.name}`);
    console.log(`Age: ${reader.age}`);
    console.log(`Is Student: ${reader.isStudent}`);
    console.log(`Favorite Book Title: ${reader.favoriteBook.Title}`);
    console.log(`Favorite Book Author: ${reader.favoriteBook.Author}`);
};

let read: Reader = {
    name: "John",
    age: 25,
    isStudent: false,
    favoriteBook: {
        Title: "The Great Gatsby",
        Author: "F. Scott Fitzgerald",
        Year:2011
    }
};

// printReader(read);


// // תרגיל 12
const MostOldReader = (readers: Reader[]): Reader => {
   
    let oldReader = readers[0]; 
    for (let i = 1; i < readers.length; i++) {
        if (readers[i].age > oldReader.age) {
            oldReader = readers[i];
        }
    }

    return oldReader;
};


const reader: Reader[] = [
    {

        name: "John",
        age: 25,
        isStudent: false,
        favoriteBook: {
            Title: "The Great Gatsby",
            Author: "F. Scott Fitzgerald",
            Year:2014
        }
    },
    {
        name: "Jane",
        age: 30,
        isStudent: false,
        favoriteBook: {
            Title: "Pride and Prejudice",
           Author: "Jane Austen",
           Year:2013
        }
    },
    {
        name: "David",
        age: 22,
        isStudent: true,
        favoriteBook: {
            Title: "1984",
            Author: "George Orwell",
            Year:2011
        }
    },

];

// console.log(MostOldReader(reader));


// תרגיל 13


const MostOldBook = (arr: Reader[]): Reader => {
   
    let oldBook = arr[0]; 
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].favoriteBook.Year > oldBook.favoriteBook.Year) {
            oldBook = arr[i];
        }
    }

    return oldBook;
};


const readers: Reader[] = [
    {

        name: "John",
        age: 25,
        isStudent: false,
        favoriteBook: {
            Title: "The Great Gatsby",
            Author: "F. Scott Fitzgerald",
            Year:2011
        }
    },
    {
        name: "Jane",
        age: 30,
        isStudent: false,
        favoriteBook: {
            Title: "Pride and Prejudice",
            Author: "Jane Austen",
            Year:2000
            

        }
    },
    {
        name: "David",
        age: 22,
        isStudent: true,
        favoriteBook: {
            Title: "1984",
            Author: "George Orwell",
            Year:2013
        }
    },

];

console.log(MostOldBook(readers));






