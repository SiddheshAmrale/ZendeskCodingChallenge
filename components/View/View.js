'use-strict'
const console = require('console')
const readline = require('readline-sync')
const message = require('./Message')

class View {
  /**
   * Gets input from user in menu.
   *
   * @param {String} question Question to be displayed to user.
   * @returns {String} Input from user.
   */ 
  getInput(question) {
    return readline.question(question).toLowerCase()
  }

  /**
   * Prints message to console.
   *
   * @param {String} message Message to be displayed to console.
   */
  print(message) {
    console.log(message)
  }

  /**
   * Prints cancel message if the user decides to stop paging through ticket results,
   * or prints the update message depending on if a next page exists.
   *
   * @param {Boolean} continueScrolling Whether the user would like to cancel scrolling.
   * @param {Mixed} nextPageExists Whether or not there are more tickets to be displayed.
   */
  printNextPageMessage(continueScrolling, nextPageExists) {
    if (continueScrolling) {
      this.print(nextPageExists ? message.moreTicketsComing : message.allTicketsReceived)
    } else this.print(message.cancel)
  }

  /**
   * Prints out all tickets in summary form.
   *
   * @param {Array} Tickets list of all tickets retrieved from Zendesk API.
   */
  printAllTickets(tickets) {
    this.print(message.success)
    this.print(message.tableTitles)
    tickets.forEach(ticket => this.print(ticket.getSummaryDetails()))
    // Prints current page / total number of pages
    this.print(`\nPage : ${tickets.page}/${parseInt(tickets.count / tickets.perPage) + 1}`)
  }

  /**
   * Prints out a single ticket's details if object is not null
   *
   * @param {Object} ticket Ticket returned from Zendesk API.
   */
  printSingleTicket(ticket) {
    if (ticket) {
      this.print(message.success)
      this.print(ticket.getAllDetails())
    }
  }
}

module.exports = View
