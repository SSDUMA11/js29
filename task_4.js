function MakeUsers(name, age){
    this.name = name;
    this.age = age;
}
let user = new MakeUsers('Mike');//*Forgot to pass the second parameter
    function showMovie (user){
            if(user.age >= 18){//undefined
                console.log('You can watch this movie');
            } else {
                console.log('Sorry, you are too young');
            }
        }
        showMovie(user);