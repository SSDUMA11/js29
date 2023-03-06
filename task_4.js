function MakeUsers(name, age){
    this.name = name;
    this.age = age;
}

let user;

while (!user) {
  try {
    let name = prompt('What is your name?');
    let age = prompt('What is your age?');

    if (isNaN(age)) {
      throw new Error('Invalid age');
    }

    user = new MakeUsers(name, age);

  } catch (error) {
    alert('Invalid input. Please try again.');
  }
}

function showMovie (user){
    if(user.age >= 18){
        console.log('You can watch this movie');
    } else {
        console.log('Sorry, you are too young');
    }
}
showMovie(user);