///<reference types ="Cypress"/>
///<reference types ="@cypress/xpath"/>
beforeEach(() => {
    cy.visit("https://demo.guru99.com/test/newtours/register.php")
});
describe('guru99testcase', () => {
    it('register', () => {
        cy.visit("https://demo.guru99.com/test/newtours/register.php")
        cy.get('input[name="firstName"]').type('Harshitha')
        cy.get('input[name="lastName"]').type('K')
        cy.get('input[name="phone"]').type('1234567890')
        cy.get('input[name="userName"]').type('harshithak@gmail.com')
        cy.get('input[name="address1"]').type('skanda nilaya , Venkatapura')
        cy.get('input[name="city"]').type('Bangalore')
        cy.get('input[name="state"]').type('Karnataka')
        cy.get('input[name="postalCode"]').type('560034')
        cy.get('#email').type('harshithak@gmail.com')
        cy.get('input[name="password"]').type('hr321')
        cy.get('input[name="confirmPassword"]').type('hr321')
        cy.get('input[name="submit"]').click()
        cy.url().should('contain','register_sucess')
    });
    it('Home', () => {
        cy.xpath('//a[contains(text(),"Home")]').click()//y "//a[href^="index"] is not working
        cy.get('input[name="userName"]').type('harshithak@gmail.com')
        cy.get('input[name="password"]').type('hr321')
        cy.get('input[name="submit"]').click()
      cy.document().contains('Login Successfully')
     // cy.url().should('include','Login Successfully')-->Assertion not working
    });
    it('flight', () => {
        cy.get('a[href^="reservation"]').click()
        cy.get('input[name="tripType"]').eq(0).check()
        cy.get('select[name="passCount"]').select('4')
        cy.get('select[name="fromPort"]').select('Frankfurt')
        cy.get('select[name="fromMonth"]').select('9')
        cy.get('select[name="fromDay"]').select('4')
        cy.get('select[name="toPort"]').select('Zurich').should('have.value','Zurich')
        cy.get('select[name="toMonth"]').select('5')
        cy.get('select[name="toDay"]').select('31')
        cy.get('input[name="servClass"]').eq('2').check()
        cy.get('select[name="airline"]').select('Pangea Airlines')
        cy.get('input[name="findFlights"]').click()   
        if(cy.document().contains("No Seats Avaialble")){
            cy.log('No Seats Avaialble')
          }
    cy.get('img[src^="images/home"]').click()
});

it('Hotel', () => {
    cy.get('a[href^="support"]').eq(0).click()
    if(cy.document().contains("This section of our web site is currently under construction.")){
        cy.log('SITE IS UNDER CONSTRUCTION')
      }
   cy.get('img[src^="images/home"]').click()

});
it('Car Rentals', () => {
    cy.xpath('//a[contains(text(),"Car Rentals")]').click()
    if(cy.document().contains("This section of our web site is currently under construction.")){
        cy.log('SITE IS UNDER CONSTRUCTION')
      }
      
    cy.get('img[src^="images/home"]').click()
});
it('Cruises', () => {
    cy.get('a[href^="index"]').eq(1).click()
    cy.get('input[name="userName"]').type('harshithak@gmail.com')
    cy.get('input[name="password"]').type('hr321')
    cy.get('input[name="submit"]').click()
  
});
it('Destinations', () => {
 //   cy.get('//a[contains(text(),"Destinations")]').click()
    cy.xpath('//a[contains(text(),"Destinations")]').click()
    cy.document().should('have.a.property','title','Under Construction: Mercury Tours')
    cy.log('SITE IS UNDER CONSTRUCTION')
    cy.get('img[src^="images/home"]').click()

});
it('Vacations', () => {
    cy.xpath('//a[contains(text(),"Vacations")]').click()
  if(cy.document().contains("This section of our web site is currently under construction.")){
    cy.log('SITE IS UNDER CONSTRUCTION')
  }
    cy.get('img[src^="images/home"]').click()

});
});