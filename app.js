const yargs = require("yargs");
const logicFile = require("./logic");

yargs.command({
    command: "add",
    describe: "add new items",
    builder: {
        id: {
            describe: "id of the person",
            demandOption: true,
            type: "string"
        },
        fname: {
            describe: "the first name",
            demandOption: true,
            type: "string",
        },
        lname: {
            describe: "the last name",
            demandOption: true,
            type: "string",
        },
        age: {
            describe: "age of the person",
            demandOption: false,
            type: "number"
        },
        city: {
            describe: "city of the person",
            demandOption:false,
            type: "string"
        }
    },
    handler: (x) => {
        logicFile.addPerson(x);
    },
});
yargs.command({
    command:"viewAll",
    describe:"view all data",
    handler:()=>{
        logicFile.viewAll()
    }
})
yargs.command({
    command:"viewOne",
    describe:"view specific data",
    builder:{
        id:{
            describe:"id for person",
            demandOption:true,
            type:"string"
        }
    },
    handler:(x)=>{
        logicFile.viewOne(x.id)
    }
})
yargs.command({
    command:"viewNameCity",
    describe:"view name and city for all data",
    handler:()=>{
        logicFile.viewNameCity()
    }
})
yargs.command({
    command:"deleteAll",
    describe:"delete all data",
    handler:()=>{
        logicFile.deleteAll()
    }
})
yargs.command({
    command:"deleteOne",
    describe:"delete one specific person",
    builder:{
        id:{
            describe:"id for person",
            demandOption:true,
            type:"string"
        }
    },
    handler:(x)=>{
        logicFile.deleteOne(x.id)
    }
})

yargs.argv;