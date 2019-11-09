// Init GitHub
const github = new GitHub;

// Init UI
const ui = new UI;

// Search input field

const serachUser = document.getElementById('searchUser');

serachUser.addEventListener('keyup', (e) => {
  // Get input text every time the key pressed is released
  const userText = e.target.value;

  if (userText !== '') {
    // Make http call
    github.getUser(userText)
      .then(data => {
        if (data.profile.message === 'Not Found') {
          // Show alert

        } else {
          // Show profile
          ui.showProfile(data.profile);
        }
      })
  } else {
    // Clear profile

  }
});