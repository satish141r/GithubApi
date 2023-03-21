const url = "https://api.github.com/users/";
const Name = document.querySelector("[data-name]");
const email = document.querySelector("[data-email]");
const bio = document.querySelector("[data-bio]");
const repos = document.querySelector("[data-repos]");
const followers = document.querySelector("[data-followers]");
const following = document.querySelector("[data-following]");
const gitio = document.querySelector("[data-gitio]");
const twitter = document.querySelector("[data-twitter]");
const company = document.querySelector("[data-company]");
const searchForm = document.querySelector("[data-searchForm]");
const searchInput = document.querySelector("[data-searchInput]");
const date = document.querySelector("[data-date]")
const container = document.querySelector(".container");
const loc = document.querySelector("[data-location]");
const image = document.querySelector("[data-profileImage]");
const link = document.querySelector("[data-anchor]");
const gitLink = document.querySelector("[data-gitLink]");
const twitterLink = document.querySelector("[data-twitterLink]");
const err=document.querySelector("[data-error]");


//starting of the page
const urlSatish="https://api.github.com/users/satish141r";
fetchProfileDetails(urlSatish);
searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    profileName = searchInput.value;
    console.log(profileName);
    if (profileName === "") {
        return;

    }
    else {
        fetchProfileDetails(url + profileName);
    }
});


async function fetchProfileDetails(url) {
    let response = await fetch(url);
    let data = await response.json()
    console.log(data);
    renderProfile(data);
}



function renderProfile(data) {
    console.log(data?.message);
    if(data?.message==="Not Found"){
     console.log("yes");
       err.innerText="No Result Found";
       container.classList.remove("active");
       err.classList.remove("active");
    }
    else{
       err.classList.add("active");
        container.classList.add("active");
        console.log(data?.name);
        Name.innerText = data?.name;
        email.innerText = `@${data?.login}`;
        bio.innerText = data?.bio;
        repos.innerText = data?.public_repos;
        followers.innerText = data?.followers;
        following.innerText = data?.following;
        if (data?.location) {
            loc.innerText = data?.location;
    
        }
        else {
            loc.innerText = "Not Available";
        }
        if (data?.blog) {
            gitio.innerText = data?.blog;
        }
        else {
            gitio.innerText = "Not Available";
    
        }
        if (data?.twitter_username) {
            twitter.innerText = data?.twitter_username;
        }
        else {
            twitter.innerText = "Not Available";
    
        }
        if (data?.company) {
            company.innerText = data?.company;
    
        }
        else {
            company.innerText = "NotAvailable";
    
        }
        image.src = data?.avatar_url;
        var createdDate = new Date(data?.created_at);
        let a = createdDate.toDateString();
        date.innerText = `Joined ${a}`;
    
        if (data?.blog) {
            link.href = data?.blog;
        }
        else {
            link.href = "#";
        }
        gitLink.href = data?.html_url;
    
    
        if (data?.twitter_username) {
            twitterLink.href = `https://twitter.com/${data?.twitter_username}`;
    
        }
        else {
            twitterLink.href = "#";
        }
    }
   
}


//changing dark to lght theme

let mode=document.querySelector("#btn-mode");
let body=document.querySelector("body");
let header=document.querySelector(".header");
let modePara=document.querySelector("[data-btnPara]");
let subcontainer=document.querySelector(".subcontainer");
let toggle=document.getElementById("toggledark");

toggle.addEventListener("click",function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle("bi-brightness-high-fill")){
        body.classList.add("active");
        header.classList.add("active");
        modePara.innerText="LIGHT";
        searchForm.classList.add("active");
        searchInput.classList.add("active");
        container.classList.add("active1");
        subcontainer.classList.add("active");
        searchForm.classList.add("active");
        body.style.transition='1s';
    }
    else{
        body.classList.remove("active");
        header.classList.remove("active");
        modePara.innerText="DARK";
        searchForm.classList.remove("active");
        searchInput.classList.remove("active");
        container.classList.remove("active1");
        subcontainer.classList.remove("active");
        searchForm.classList.remove("active");
  }
//     if(modePara.innerText="DARK"){

//     }



   
     
});
