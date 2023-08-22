class PostFunctions{
    moveUp(){
        cy.getByData('title-post-list')
            .should('contain.text', 'Sortable Post List')
        cy.getByData('post-2')
            .should('contain.text', 'Post 2')
        cy.getByData('post-2')
            .children('div')
            .children('svg')
            .eq(0)
            .click()
        cy.getByData('card-history-span-0')
            .should('contain.text', 'Moved post 2 from index 1 to index 0')
    }

    moveDown(){
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

    loadAPI(){
        cy.request({
            url: 'https://jsonplaceholder.typicode.com/posts',
            method: 'GET'
        }).then((resp) => {
            expect(resp.status).to.eq(200)
            expect(resp.body).to.be.length(100)
        })
    }

    loadFivePosts(){
        this.loadAPI()
        cy.getByData('post-list')
            .children()
            .should('be.visible')
            .its('length')
            .should('eq', 5)
    }
}

export default PostFunctions