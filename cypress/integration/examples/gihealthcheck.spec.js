describe('my first test', function(){
    
    it.only('Visits the GI Home', () => {

        // cy.viewport('ipad-mini')
        cy.log('Cypress.version : ' + Cypress.version)
        cy.log('platform : ' + Cypress.platform)
        cy.log('CPU architecture : ' + Cypress.arch)
        cy.log('testing browser : ' + Cypress.browser.name)
        cy.log('specs under testing : ' + Cypress.spec.name)
        cy.log('Cypress.testingType : ' + Cypress.testingType)


        cy.visit('/hm')
        
        cy.contains('Landlord').click()

        cy.get('select').select('Detached')

        cy.contains('Choose plan').click()

        cy.url().should('include', '/addOns')
        
        // first "Select" btn
        // cy.get('tbody a').first().click()

        // last "Select" btn
        cy.get('tbody a').last().click().pause()
        
        // cy.log('this is log')

        //second "Select" btn
        // cy.get('tbody td:first').next().get('a').click()

        cy.url().should('include', '/addRider')

        


        // cy.contains('Go to personal details').click()

        // cy.url().should('include', '/completeQuote')

        // // salutation
        // cy.get('select').select('Mr')

        

      })

})