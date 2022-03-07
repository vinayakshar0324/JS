const courses = [
    {
        name : "Complete ReactJs course",
        price: "2.3",
    },
    {
        name : "Complete C++ course",
        price: "2.4",
    },
    {
        name : "Complete Pyhton course",
        price: "2.5",
    },
    {
        name : "Complete Angular course",
        price: "2.3",
    },

    {
        name : "Django Course",
        price: "5.7"
    }

];


// {/* <li class="list-group-item">Complete C++ course
//     <span class= "float-right"></span>
// </li> */}

function generateLIST(){
    const ul = document.querySelector(".list-group");
    ul.innerHTML = ""
    courses.forEach( courses => {
        const li = document.createElement("p");
        li.classList.add("list-group-item")
    
        const name = document.createTextNode(courses.name)
        li.appendChild(name)

        const span = document.createElement("span")
        span.classList.add("float-right")

        const price = document.createTextNode("$" + courses.price)
        span.appendChild(price)

        li.appendChild(span);
        ul.appendChild(li);
    });
}


// generateLIST();

window.addEventListener("load", generateLIST);

const button = document.querySelector(".sort-btn")

button.addEventListener("click", () => {
    courses.sort((a, b) => a.price - b.price);
    generateLIST()
})