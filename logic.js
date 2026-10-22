const fs = require("fs");

const loadInfo = () => {
  try {
    const dataJson = fs.readFileSync("DataBase.json").toString();
    return JSON.parse(dataJson);
  } catch {
    return [];
  }
};

const saveData = (allData) => {
  const allDataJson = JSON.stringify(allData);
  fs.writeFileSync("dataBase.json", allDataJson);
};

const addPerson = (userInfo) => {
  const allData = loadInfo();
  const duplicatedDate = allData.filter((obj) => {
    return obj.id === userInfo.id;
  });
  if (duplicatedDate == 0) {
    allData.push({
      id: userInfo.id,
      firstName: userInfo.fname,
      lastName: userInfo.lname,
      age: userInfo.age,
      city: userInfo.city,
    });
    saveData(allData);
  } else {
    console.log("Error Duplicate Data");
  }
};
const viewAll = () => {
  const allData = loadInfo();
  allData.forEach((obj) => {
    console.log(obj);
  });
};
const viewNameCity = () => {
  const allData = loadInfo();
  allData.forEach((obj) => {
    console.log(obj.firstName, obj.lastName, obj.city);
  });
};
const viewOne = (id) => {
  const allData = loadInfo();
  const itemNeeded = allData.find((obj) => {
    return obj.id === id;
  });
  if (itemNeeded) {
    console.log(itemNeeded);
  } else {
    console.log("ID not found");
  }
};
const deleteAll = () => {
  saveData([]);
};
const deleteOne = (id) => {
  const allData = loadInfo();

  const filteredData = allData.filter((obj) => {
    return obj.id !== id;
  });
  
  saveData(filteredData)
  
};

module.exports = {
  addPerson,
  viewAll,
  viewOne,
  viewNameCity,
  deleteAll,
  deleteOne
};
