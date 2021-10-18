
  function Dog(name, age) {
    this.name = name;
    this.age = age;
    this.image_alt = "Golden Retriever";
    this.image = "dog.png"
  }
  
  function Snake(name, age) {
    this.name = name;
    this.age = age;
    this.image_alt = "A friendly snake";
    this.image = "snake.png";
  }

  function Cat(name, age) {
    this.name = name;
    this.age = age;
    this.image_alt = "Furball";
    this.image = "cat.png";
  }
  
  let animals = [new Dog(), new Snake(), new Cat()];
  let nameList = ["Ruffy", "Slytherin", "Catty", "Max", "Caesar", "Oscar", "Daisy", "Catthew", "May"];
  
  function getRandomIndex(maxIndex) {
    return Math.floor(Math.random() * maxIndex);
  }
  
  function generateRandomName() {
    let randomIdx = getRandomIndex(nameList.length);
    return nameList[randomIdx];
  }
  
  function generateRandomAge() {
    return getRandomIndex(9) + 2;
  }

  function generateRandomAnimal() {
    let randomIdx = getRandomIndex(animals.length);
    let randomAnimal = animals[randomIdx];
  
    if (randomAnimal instanceof Dog) 
    {
      return new Dog(generateRandomName(), generateRandomAge());
    } 
    else if (randomAnimal instanceof Snake) 
    {
      return new Snake(generateRandomName(), generateRandomAge());
    } 
    else if (randomAnimal instanceof Cat) 
    {
      return new Cat(generateRandomName(), generateRandomAge());
    }
  }
  
 
  function onLoad() {
  
    let animal = generateRandomAnimal();
    // displaying a random animal
    console.log(animal)
    // display the animal's properties
    document.getElementById("animal-properties").textContent = "Name:" + animal.name + ", " + animal.age + "years old";
    let imageTag = document.getElementById("animal-img");
    imageTag.setAttribute("src", animal.image);
    imageTag.setAttribute("alt", animal.image_alt);
  
  }