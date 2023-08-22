class HistoryFunctions{
    loadsCorrectly(){
        cy.contains('List of actions commited')
        cy.contains('None actions commited yet.')
        cy.getByData('title-post-list')
            .should('contain.text', 'Sortable Post List')
        cy.getByData('post-1')
            .should('contain.text', 'Post 1')
        cy.getByData('post-1')
            .children('div')
            .children('svg')
            .click()
        cy.getByData('card-history-span-0')
            .should('contain.text', 'Moved post 1 from index 0 to index 1')
    }

    undoAction(){
        this.loadsCorrectly()
        cy.get('button').click()
        cy.contains('None actions commited yet.')
        cy.getByData('post-list')
            .children()
            .first()
            .should('contain.text', 'Post 1')
    }
}

export default HistoryFunctions