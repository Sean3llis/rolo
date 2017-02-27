export default class Resume {
  constructor(email) {
    this.email = email;
    this.name = 'Your Name';
    this.title = 'Your Title';
    this.skills = ['eating', 'breathing', 'talking'];
    this.themeColor = '#2aa079';
    this.projects = [{
      title: 'My First Project',
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      link: 'https://www.google.com',
      tags: ['JS', 'CSS', 'HTML']
    }];
    this.contacts = [
      {
        icon: 'envelope',
        value: email,
      },
      {
        icon: 'phone',
        value: '',
      },
      {
        icon: 'github',
        value: '',
      },
      {
        icon: 'twitter',
        value: ''
      },
      {
        icon: 'linkedin',
        value: ''
      },
      {
        icon: 'facebook',
        value: ''
      }
    ];
  }
}
