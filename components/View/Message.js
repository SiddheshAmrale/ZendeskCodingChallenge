/**
 * File contains Messages to be displayed on console.
 */

 const set = {
    // Values for padding the table titles.
    subjectPadding: 10,
    descriptionPadding: 54,
    // Sets font settings for text.
  
  }
  
  module.exports = {
    main:
      `\nType "menu" to view options` +
      ` or "exit" to close the program.\n`,
    menu:
      `\n* Press 1 to view all tickets\n` +
      `* Press 2 to view a ticket\n* Type` +
      ` exit to close the program`,
    id: `\n Enter ticket id : `,
    welcome: `Welcome to the Ticket Viewer`,
    exit:
      `\nThanks for using the viewer, Goodbye.`,
    invalidInput: `\nPlease Enter a valid input!`,
    success: `\nTickets retrieved successfully\n`,
    fetch: `\n Retrieving tickets from Zendesk`,
    tableTitles:
      'Ticket Id' +
      'Subject'.padStart(set.subjectPadding, ' ') +
      'Description'.padStart(set.descriptionPadding, ' '),
    moreTicketsComing: `Fetching more tickets.`,
    allTicketsReceived: `\nAll tickets retrieved`,
    continueScrolling:
      `\nPress enter to continue scrolling or type anything to stop.\n`,
    cancel: `\nExiting Page Scroll`
  }
  