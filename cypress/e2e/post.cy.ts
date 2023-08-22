import PostFunctions from "../support/functions/PostFunctions"

const postFunctions = new PostFunctions()

describe('post component', () => {
    beforeEach('', () => {
        cy.visit('/')
    }),
    it('should render correctly with only 5 posts', () => {
        postFunctions.loadFivePosts()
    })
    it('should move down the post correctly', () => {
        postFunctions.moveDown()
    }),
    it('should move up the post correctly', () => {
        postFunctions.moveUp()
    })
    it('successfully load API', () => {
        postFunctions.loadAPI()
    })
})