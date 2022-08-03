# Room Server

The room server is a seperate nodejs application that clients can connect to and their edits
to the shared canvas will be able to be shared to all users. The communication is done
primarily through the Socket API. The updates to the canvas are priodically saved to the
main database.

What it does:
  * Privilege / Authentication Verification
  * Communicate Changes to the shared canvas to all users
  * Load and Save the shared canvas to the main database
  * Communicate Server Status (ie ping, number of clients, location)




