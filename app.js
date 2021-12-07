

// SIMPLE TXT FILE FETCH local 
// Button grab 
/*
document.getElementById('button1').addEventListener('click', getText);

// Get text function 
function getText() {
  // using fetch to call it and then pass in what even we want to get. for example filename.txt file
  // Fetch returns promises and you will get a response with .then 
  // with that pass a function with a response. look to see what the console.log returns .With response .text this returns a promise  
  // making the response.text a promise we need to add another .then 
  // after then can we extract the data with function cal. this because this is what the promise returns 
  fetch('test.txt')
  .then(function (response) {
    // console.log(response.text());
    return response.text();
  })
  .then(function (data) {
    // console.log(data);
    document.querySelector('.output').innerHTML = data
  })
  // for errors we use .catch with reject and this will throw an error e.g. if the file does not exist and return use the status code 
  .catch(function (error) {
    console.log(error);
  })
}



// JSON FILE FETCH local
document.getElementById('button2').addEventListener('click', getJson);

function getJson() {
  fetch('post.json')
  .then(function (response) {
    // console.log(response.text());
    return response.json();
  })
  .then(function (data) {
    // console.log(data);

    // As it is an array we will need to loop through the array and print. define out then run the forEach 
    let output = '';
    data.forEach(function (post) {
      // to append we will add to each time 
      output += `
      <dl>
        <dt>${post.title}</dt>
        <dd>${post.body}</dd>
        <dd>${post.tag}</dd>
      </dl> `
    })
    document.querySelector('.output').innerHTML = output
    
  })

  .catch(function (error) {
    console.log(error);
  })
}

// FETCH API EXTERNAL

document.getElementById('button3').addEventListener('click', getExternal);

function getExternal() {
  fetch('https://api.github.com/users')
  .then(function (response) {
    // console.log(response.text());
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    let output = '';
    data.forEach(function (user) {
      // to append we will add to each time 
      output += `
      <dl>
        <img src="${user.avatar_url}" alt="Avatar" class="avatar">
        <dt>Name: ${user.login}</dt>
        <dt>Url: <a href="${user.html_url}">${user.html_url}</a></dt>
      </dl> `
    })
    document.querySelector('.output').innerHTML = output
    
  })

  .catch(function (error) {
    console.log(error);
  })
}
*/


// Using Arrow function 


document.getElementById('button1').addEventListener('click', getText);

// Get text function 
function getText() {
  fetch('test.txt')
  // .then(function (response) {
  //   // console.log(response.text());
  //   return response.text();
  // })
  .then(response => response.text())
  .then( data  => {
    // console.log(data);
    document.querySelector('.output').innerHTML = data
  })

  .catch(error => console.log(error));
}




// JSON FILE FETCH local using Arrow Functions
document.getElementById('button2').addEventListener('click', getJson);

function getJson() {
  fetch('post.json')
  .then(response => response.json())
  .then(data => {
    // console.log(data);

    // As it is an array we will need to loop through the array and print. define out then run the forEach 
    let output = '';
    data.forEach(post => {
      // to append we will add to each time 
      output += `
      <dl>
        <dt>${post.title}</dt>
        <dd>${post.body}</dd>
        <dd>${post.tag}</dd>
      </dl> `
    })
    document.querySelector('.output').innerHTML = output
    
  })

  .catch(error => console.log(error))
}

// FETCH API EXTERNAL using arrow functions

document.getElementById('button3').addEventListener('click', getExternal);

function getExternal() {
  fetch('https://api.github.com/users')
  .then(response => response.json())
  .then( data => { 
    console.log(data);
    let output = '';
    data.forEach( function(user) {
      // to append we will add to each time 
      output += `
      <dl>
        <img src="${user.avatar_url}" alt="Avatar" class="avatar">
        <dt>Name: ${user.login}</dt>
        <dt>Url: <a href="${user.html_url}">${user.html_url}</a></dt>
      </dl> `
    });
    document.querySelector('.output').innerHTML = output
  })
  .catch( error => console.log(error));
}