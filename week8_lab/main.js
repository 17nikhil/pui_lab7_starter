
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

    var animal = JSON.parse(localStorage.getItem("savedAnimal"));
    var savedAnimal = false; //flag if saved

  //does animal exist in local storage?
  if (animal === null) 
  {
    document.getElementById("storage-button").textContent = "Save";
    animal = generateRandomAnimal();
  } 
  else 
  {
    document.getElementById("storage-button").textContent = "Clear Me";
    savedAnimal = true;
  }

  document.getElementById("animal-properties").textContent = "Name:" + animal.name + ", " + animal.age + "years old";
  document.getElementById("animal-img").setAttribute("src", animal.image);


  document.getElementById("storage-button").addEventListener("click", function() {

    if (savedAnimal) 
    {
      // clearing from local storage
      localStorage.removeItem("savedAnimal");

      //hide button and show message to user
      document.getElementById("storage-button").style.display = "none";
      document.getElementById("feedback").textContent = "Cleared!";
      document.getElementById("feedback").style.display = "block";
    }
    //when we save the animal
    else 
    {
      localStorage.setItem("savedAnimal", JSON.stringify(animal));

      //hide button and show message to user
      document.getElementById("storage-button").style.display = "none";
      document.getElementById("feedback").textContent = "Saved!";
      document.getElementById("feedback").style.display = "block";
    }
  });
  
  }