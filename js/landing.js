let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

let button = document.querySelector("#fetched");


button.addEventListener('click', () => {
    let inpValue = document.querySelector("input");
    console.log(inpValue.value)
    data(inpValue.value);
})
let outDiv = document.querySelector("#outDiv");



let data = async (inpValue) => {
      let result;
    try {

        let response = await fetch(`http://localhost:3000/${inpValue}`);
         result = await response.json();
        console.log(result);
        outDiv.innerHTML=`<p>Id : ${result.id}</p>
                          <p>First_Name : ${result.first_name}</p>
                          <p>Last_Name : ${result.last_name}</p>
                          <p>Email : ${result.email}</p>
                          <p>Gender : ${result.gender}</p>
                          <p>Last_Name : ${result.last_name}</p>`
        outDiv.style.border = "2px solid black"
    }
        

     catch {
        outDiv.innerHTML=`<h1>Invalid Ids</h1>`
        
    }
   
};

