// Variable to select the overview div //
const overviewDiv = document.querySelector(".overview")
const username = "shelbycoyle13";
const getProfileInfo = async function() {
    const res = await fetch(`https://api.github.com/users/${username}`);
    const data = await res.json();
    console.log(data);
    displayProfileInfo(data);
};
getProfileInfo();

const displayProfileInfo = function(data) {
    const createUserInfoDiv = document.createElement("div");
    createUserInfoDiv.classList.add("user-info");
    createUserInfoDiv.innerHTML =
        `<figure>
            <img alt="user avatar" src=${data.avatar_url} />
         </figure>
      <div>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Bio:</strong> ${data.bio}</p>
        <p><strong>Location:</strong> ${data.location}</p>
        <p><strong>Number of public repos:</strong> ${data.public_repos}</p>
      </div>`;
    overviewDiv.append(createUserInfoDiv);
};