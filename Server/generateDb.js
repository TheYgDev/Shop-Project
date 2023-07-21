const fs = require("fs").promises;

const writeDb = async (json) => {
  await fs.writeFile("./db/db.json", JSON.stringify(json));
};

function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

async function logMovies() {
  const response = await fetch("https://fakestoreapi.com/products");
  let r = await response.json();
  console.log(r[0].title);
  return r

}

const gDB = async () => {
  let db = await fs.readFile("./db/db.json", "utf-8");
  let json = await logMovies();
  db = JSON.parse(db);
  let counter = 0;
  for (let i in db.items) {
    db.items[i] = {
      id: db.items[i].id,
      name: json[counter++].title,
      price: db.items[i].price,
      description: db.items[i].description,
      image: db.items[i].image,
      city: rCity(),
        phone_of_seller: rPhone(),
        category: gCate(db.items[i].category.name),
      dateOfPublish : db.items[i].dateOfPublish,
    };
  }
  writeDb(db);
};

function gCate(cate) {

  switch (cate) {
    case "electronics":
      return { id: 1, name: "electronics" }
      break;
      case "jewelery":
        return { id: 2, name: "jewelery" }
      break;
      case "men's clothing":
        return { id: 3, name: "men's clothing" }
      break;
      case "women's clothing":
        return { id: 4, name: "women's clothing" }
        break;
  }
}
function rCity() {
  let list = [
    "Tel Aviv",
    "Lod",
    "Ramat Gan",
    "Holon",
    "Haifa",
    "Jerusalam",
    "Rishon Letzion",
  ];
  return list[Math.floor(Math.random() * list.length)];
}
function rPhone() {
  let list = ["052-", "054-", "053-", "050-"];
  let numList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let phone = list[Math.floor(Math.random() * list.length)];
  for (let i = 0; i < 7; i++) {
    if (i == 3) {
      phone += "-";
      }
      phone +=numList[Math.floor(Math.random() * numList.length)];
    }
    return phone;
}
// gDB();


