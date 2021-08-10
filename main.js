// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
// When a user clicks on an empty heart:
  // Invoke mimicServerCall to simulate making a server request    
  const likerButtons = document.querySelectorAll('.like-glyph')
  for (let inst of likerButtons) {
    inst.addEventListener('click', handleClickOnLike)
  }

  function handleClickOnLike (e) {
    let heart = e.target
    mimicServerCall()
    .then(() => {
      if(heart.textContent === EMPTY_HEART)
        //if its empty
        // When the "server" returns a success status:
        // Change the heart to a full heart
        // Add the .activated-heart class to make the heart appear red
      {
        heart.textContent = FULL_HEART
        heart.classList.add('activated-heart')
      }else if (heart.textContent === FULL_HEART) {
        //if its full
        // When a user clicks on a full heart:
          // Change the heart back to an empty heart
          // Remove the .activated-heart class
        heart.classList.remove('activated-heart')
        heart.textContent = EMPTY_HEART
      }
    })
// When the "server" returns a failure status:
  // Respond to the error using a .catch(() => {}) block after your .then(() => {}) block.
  
  
    .catch( (e) => {
      debugger
      // Display the error modal by removing the .hidden class
      const modal = document.querySelector('#modal')
      modal.classList.remove('hidden')
      // Display the server error message in the modal
      const message = document.querySelector('#modal-message')
      message.innerText = e

      // Use setTimeout to hide the modal after 3 seconds (add the .hidden class)
      setTimeout(document.getElementById('modal').className = 'hidden', 3000)
    })
  }
  
  
  // Keep all your styling rules entirely in style.css. Do not manipulate any .style properties.
  // Only manipulate the DOM once the server request responds. Do not make the heart full until you're inside a successful .then block.

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
