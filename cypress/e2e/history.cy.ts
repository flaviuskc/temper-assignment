import HistoryFunctions from "../support/functions/HistoryFunctions"

const historyFunctions = new HistoryFunctions()

describe('history component', () => {
    beforeEach('', () => {
        cy.visit('/')
    })
    it('should appears the corresponding history as the post is moved', () => {
        historyFunctions.loadsCorrectly()
    })
    it('should undo correctly the action clicked', () => {
        historyFunctions.undoAction()
    })
})