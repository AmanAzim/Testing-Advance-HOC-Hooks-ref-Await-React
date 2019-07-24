class createRoom{
    constructor(name){
        this.table=`${name}'s table`
    }
    cleanTable(soap){
        console.log(`clening ${this.table} with ${soap}`);
    }
}

const John=new createRoom('John')
John.cleanTable('JonSoap')

const Don=new createRoom('Don')
Don.cleanTable('DonSoap')