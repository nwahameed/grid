const movies = ["Avatar", "Avengers", "Encanto", "Maleficent"];
let ul = document.createElement("ul");
let li = document.createElement("li");

document.querySelector("#names").appendChild(ul);
movies.forEach((movie) => {
  li.innerHTML += movie;

  ul.appendChild(li);

  li = document.createElement("li");
});
