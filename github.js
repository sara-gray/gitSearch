class GitHub {
  constructor() {
    this.client_id = '78f6b8e54190439f0883';
    this.client_secret = '6b3c47e28d3ec463f104d44c49bc10ec4ca9dc46';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      // profile: profile;
      profile
    }
  }
}