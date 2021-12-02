'use-strict';
(async function(){
  const View = require('./components/view/view')
  const { MENU, EXIT, GET_ALL_TICKETS, GET_TICKET_BY_ID, TOKEN } = require('./constant')
  const view = new View()
  const message = require('./components/View/Message')
  const TicketFetcher = require('./components/TicketFetcher/TicketFetcher')
  
  const requester = new TicketFetcher(TOKEN)
  let PROGRAM_RUNNING = true


  view.print(message.welcome)

  // All user actions
  const actions = {
    [MENU]: () => {
      view.print(message.menu)
    },

    [EXIT]: () => {
      view.print(message.exit)
      PROGRAM_RUNNING = false
    },

    [GET_TICKET_BY_ID]: async () => {
      const ticketId = view.getInput(message.id)
      view.print(message.fetch)
      view.printSingleTicket(await requester.fetchTicketById(ticketId))
    },

    [GET_ALL_TICKETS]: async () => {
      const apiCaller = await requester.fetchAllTickets()
      let scrolling = true
      view.print(message.fetch)

      while (scrolling) {
        const tickets = await apiCaller()
        if (tickets != null) {
          view.printAllTickets(tickets)
          scrolling = tickets.nextPage && !view.getInput(message.continueScrolling)
          view.printNextPageMessage(scrolling, tickets.nextPage)
        } else scrolling = false
      }
    }
  }

  // Keep running till user exits
  while (PROGRAM_RUNNING) {
    userInput =  await view.getInput(message.main)

    if (userInput in actions) {
       await actions[userInput]()
    } else {
      view.print(message.invalidInput)
    }
  }
})()
