
function toggleSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.toggle("active");
}


const userProfile = document.getElementById("userProfile");

const data = localStorage.getItem("user");
if (!data) location.href = "/";
let userData = JSON.parse(data);
let userType = userData.UserType;

if (userType !== "MONITOR") {
  window.location.href = "/";
}

const div = document.createElement("div");
div.classList.add("profile");

let template = `
<img class="profileImage" src="${userData.ProfilePicture}" alt="" />
        <p class="profileUserName">Hi, ${userData.Username} ▼ </p>
`;
div.innerHTML = template;

userProfile.append(div);
