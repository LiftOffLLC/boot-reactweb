export default {
  'User is displayed Welcome page': (client) => {



    const homePage = client.page.homePage();
    console.log(client.page.homePage.element);
    homePage.expect.element('@welcomeMessage').to.be.visible;

    client.end();
  }
};
