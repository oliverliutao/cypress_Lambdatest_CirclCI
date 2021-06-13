describe('my first test', function(){
    
    it.only('Visits the GI Home', () => {
        cy.visit('/hm')
        
        cy.contains('Landlord').click()

        cy.get('select').select('Detached')

        cy.contains('Choose plan').click()

        cy.url().should('include', '/addOns')

        cy.wait(10000)


        

        // cy.url().should('include', '/addRider')

        // cy.contains('Go to personal details').click()

        // cy.url().should('include', '/completeQuote')

        // // salutation
        // cy.get('select').select('Mr')

        

      })

})