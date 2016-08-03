export default {
  'User is displayed Welcome page': (client) => {

    const homePage = client.page.homePage();
    
    homePage
      .navigate()
      
    homePage.expect.element('@welcomeMessage').to.be.visible;

    client.end();
  }
};
