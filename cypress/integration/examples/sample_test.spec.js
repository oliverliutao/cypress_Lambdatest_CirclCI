describe('my first test', function(){
    
    it.only('Visits the Kitchen Sink', () => {
        cy.visit('https://login.aviva.com.sg/hm')
        
        cy.contains('Landlord').click()

        cy.get('select').select('Detached')

        cy.contains('Choose plan').click()

        cy.url().should('include', '/addOns')
      })

})