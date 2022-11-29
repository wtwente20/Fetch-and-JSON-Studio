// TODO: add code here

window.addEventListener("load", function() {
  fetch('https://handlers.education.launchcode.org/static/astronauts.json')
      .then( function(response) {
          response.json().then( function(data) {
              const div = document.getElementById("container");

              const numAstronauts = document.getElementById("numAstronauts")

              //console.log(data.length);

              numAstronauts.innerHTML = data.length;

              // let newArray = data.sort();

              // console.log(newArray)
              
              for (let i = 0; i < data.length; i++) {

                  if (data[i].active === true) {
                      div.innerHTML += `
                          div class="astronaut"
                              div class="bio"
                                  h3${data[i].firstName} ${data[i].lastName}/h3
                                  ul
                                      liHours in space: ${data[i].hoursInSpace}/li
                                      li style="color:green;"Active: ${data[i].active}/li
                                      liSkills: ${data[i].skills}/li
                                  /ul
                              /div
                              img class="avatar" src=${data[i].picture}
                          /div
                      `;
                  }

                  else {
                      div.innerHTML += `
                          div class="astronaut"
                              div class="bio"
                                  h3${data[i].firstName} ${data[i].lastName}/h3
                                  ul
                                      liHours in space: ${data[i].hoursInSpace}/li
                                      liActive: ${data[i].active}/li
                                      liSkills: ${data[i].skills}/li
                                  /ul
                              /div
                              img class="avatar" src=${data[i].picture}
                          /div
                      `;
                  }

              }
          });
      }
  );
});