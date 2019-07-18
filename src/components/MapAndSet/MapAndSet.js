import React, {Component} from 'react';

//https://javascript.info/map-set-weakmap-weakset

class MapAndSet extends Component {
    //Map mainly used save an object as key for a value and to be able to add key of different types in the same structure
    testMap=()=>{
        let map1=new Map();

        map1.set('1', 'Aman');
        map1.set(1,'tansen');
        map1.set(true, 'bool');
        map1.set(3,'three').set(false, 4);

        let obj1={id:1};
        map1.set(obj1,'ObjectASKey');

        console.log('map1',map1.get('1'))
        console.log('map1',map1.get(1))
        console.log('map1',map1.get(true))
        console.log('map1',map1.get(3))
        console.log('map1',map1.get(false))
        console.log('map1',map1.get(obj1))

        for(let key of map1.keys()){// To iterate over the keys
            console.log('map1 key:',key)
        }
        for(let entry of map1){//To iterate over the the whole entries
            console.log('map1 [key, value]:',entry)
        }
        for(let [key, val] of map1){//To iterate over the the whole entries
           // console.log('map1 [key, value]:', key, val)
        }
        //Create an array with all the keys of the map1
        let map1KeysArr=Array.from(map1.keys());// That’s because map.keys() returns an iterable, but not an array so first need to convert it into an array
          console.log('map1 keys array :',map1KeysArr);
        /////////////////////////////////////////////////////////
        let map2 = new Map([
            ['1',  'str1'],
            [1,    'num1'],
            [true, 'bool1']
        ]);
        for(let val of map2.values()){// To iterate over the values
            console.log('map2 value:', val);
        }
        map2.forEach((val, key, map)=>{
            console.log('map2 [key, value]:', val, key)
        })
        ////////////////////////////////////////////////////////
        //There is a built-in method Object.entries(obj) that returns an array of key/value pairs for an object exactly in that format.
        let map3 = new Map(Object.entries({
            name: "John",
            age: 30
        }));
        for(let val of map3.values()){// To iterate over the values
            console.log('map3 value:', val);
        }
        map3.forEach((val, key, map)=>{
            console.log('map3 [key, value]:', key, val)
        })
        //Here, Object.entries returns the array of key/value pairs: [ ["name","John"], ["age", 30] ]. That’s what Map needs.
        //////////////////////////////////////////////////////////////////////////////////////////////////////////////
        let arr=[...map1];
        console.log('arr from map:',arr);
        console.log('raw map1:',map1);
        //////////////////////////////////////////
        let o={};
        o[1]='a'// {1:'a'}
        console.log('o=',o)
    };

    arrySortWithUniqueKeys=()=>{
        let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
        let map = new Map();

        for (let word of arr) {
            // split the word by letters, sort them and join back
            let sorted = word.toLowerCase().split('').sort().join(''); // (*)
            map.set(sorted, word); //make the key value pair with the same word. like this any duplicate key will be overwritten
        }
        map.forEach((val, key, map)=>{
            console.log('mapfromArr with unique entry [key, value]:', key, val)
        })

    };

     //Map mainly used to store unique entries
    testSet=()=>{
       let set1 = new Set();

       let john = { name: "John" };
       let pete = { name: "Pete" };
       let mary = { name: "Mary" };

        // visits, some users come multiple times
        set1.add(john); //it will be saved as [ { name: "John" }, { name: "John" } ] same entry one time as key and one time as value
        set1.add('1', pete); //We cannot create keys in Set it will always be same as values. in this case it will take the first entry "1" both as keay and value and will ignore "pete"
        set1.add(mary);
        set1.add(john);
        set1.add(mary);

        for(let entry of set1.keys()){
            console.log('set1 [key]:', entry)
        }
        for(let entry of set1.values()){
            console.log('set1 [value]:', entry)
        }
        for(let entry of set1.entries()){
            console.log('set1 [key, value]:', entry)
        }
        /////////////////////////////////////////////
        let set2 = new Set(["oranges", "apples", "bananas"]);

        set2.forEach((value, valueAgain, set) => {
           console.log('set2', value)
        });
        console.log('Raw set1:',set2);
    };

    exerciseSet=()=>{
        let values = ["Hare", "Krishna", "Hare", "Krishna",
        "Krishna", "Krishna", "Hare", "Hare", ":-O"];

        let set=new Set(values);
        let arr=Array.from(set);
        console.log('ArrayFromSet:',arr);

        let messages = [
            {text: "Hello", from: "John"},
            {text: "How goes?", from: "John"},
            {text: "See you soon", from: "Alice"}
        ];

        let readMap = new WeakMap();

        readMap.set(messages[0], new Date(2017, 1, 1));
        console.log('weakset:',readMap.get(messages[0]));
    }

    render() {
        const obj={a:1, a:2};// Not allowed. Key must be unique only the last assignment of the key will be accepted.
        this.testMap();
        this.arrySortWithUniqueKeys();
        this.testSet();
        this.exerciseSet();

        return (
            <div>
                {obj.a }||{obj.b}
            </div>
        );
    }
}

export default MapAndSet;