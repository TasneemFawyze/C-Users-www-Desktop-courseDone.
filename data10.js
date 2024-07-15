

  const fs = require("fs")
//const alldata=require("./alldata")
//1makeing func to pass it 2value
  const addPerson = (id , fname , lname , city , age) => {
    //2 that because we need load data to push the data
       const allData = loadInfo()

       const duplicatedData = allData.filter((obj) =>{
          return  obj.id === id 
       })

        if (duplicatedData.length == 0  ){
//5 make the push operating
       allData.push({
         id : id,
         fname : fname,
         lname : lname,
         city : city,
         age : age
       })
       //5 save data
       savealldata(allData)
      } else {
        console.log("ERROR DUPLICATED DATA")
      }
  }
//3 load data func:read data in file ,and parsing to obj

  const loadInfo = () => {
    try { 
        const dataJson = fs.readFileSync("data10.json").toString()
        return  JSON.parse(dataJson)
    }
    catch {
        return []
    }
     
  }
////////////////////////////////
 
  const savealldata = (allData) => {
     const saveallDataJson  = JSON.stringify(allData)
     fs.writeFileSync("data10.json" , saveallDataJson)
  }

/////////////////////////////////////////

// delete data :

   const deleteData  = (id) =>{
      const allData = loadInfo()

       const dataTokeep = allData.filter((obj) => {
          return obj.id !== id
       })

      //  console.log(dataTokeep)
      //  console.log("you have successfully deleted an item")

       savealldata(dataTokeep)
      
   }
//////////////////////////////////////////////////////

  // read data 

    const readData = (id) => {
        const allData = loadInfo()

        const itemNeeded = allData.find((obj) => {
           return  obj.id == id 
        })

        // console.log(itemNeeded)
        if (itemNeeded) {
          console.log(itemNeeded)
        }else {
          console.log("ID NEEDED NOT FOUND")
        }
    }
  
//////////////////////////////////////////

// list 
          const listData = () => {
             const  allData = loadInfo()

              allData.forEach((obj) => {
                console.log(obj.fname , obj.city)
              })

          }
       

module.exports = {
    addPerson,
    deleteData,
    readData,
    listData
}