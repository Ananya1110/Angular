import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";
//  const numbresCollection = new NumbersCollection([50,3,-5,0]);
//  numbresCollection.sort();
 
// //  const sorter= new Sorter(numbresCollection);
// //  sorter.sort();
//   console.log(numbresCollection.data);
//  const charactersCollection = new CharactersCollection('ananyX');
//  charactersCollection.sort();
 
// console.log(charactersCollection.data);
// const numbersCollection =new NumbersCollection([50,3,-5,0]);
// numbersCollection.sort();
const linkedList=new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(-4);


linkedList.sort();
linkedList.print();

