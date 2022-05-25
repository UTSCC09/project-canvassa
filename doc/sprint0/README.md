# Canvassa


## Project Doc

Description:

Canvassa is a web app that allows multiple uses to draw on the same infinite canvas at the same time. It focuses on providing a collaborative drawing/whiteboard experience.

Features:



* Users can visit the webpage to enter the landing page.
* The landing page will have cards for public canvases. There will be a subheading and a short description of how public canvases work.
* Each canvas card will feature a snapshot of what the canvas looks like, its name, and number of active users. Clicking on it will allow the user to join the canvas room.
* The landing page will have a button to create a room. Clicking on the button will lead to a form to choose a username and room mode (normal, round-robin-drawing, presenting). The user can submit this information to enter a room as a host and get a room code.
* The landing page will have a button to enter a room. Clicking on the button will lead to a form to choose a username and enter a room code. The user can submit this information to enter the room with the code as a member.
* When the user enters a room, they will see a whiteboard, toolbar, back button, members list and be able to zoom in/out and pan. The canvas will be infinitely large. [To Research]

Modes:



* Public - Anyone can join and do whatever they want
* Normal Sessional - Group of friends with room code can enter and do whatever they want
* Round-robin-drawing - Group of friends with room code can enter. The host can start a round. Once the round is started, a prompt will be announced. Each person will get a turn round-robin style. Each turn will exist for a short time and a timer will indicate the amount of time left. During their turn, a user can draw as much of the prompt as possible. When time is up, the turn will transfer to the next user to continue the drawing until all users have had a turn.
* Presenting - A presenter (host) can create the room and others can join with the room code as audience members. A presenter can assign/remove a presenter role or a temporary drawer role to other members. The presenters and drawers can manipulate the whiteboard. Everyone can also pan to different “points in history” to view various states of the board at different times.

Future Features



* Use mobile gyroscope to draw (mobile only)
* Audio for sessional canvases

Challenges To Cover:



* Scalability (Hug of death)
* Real-time interaction
* Multi-tenancy 
* End-end-testing

Stack



* React
* Node/Express
* MongoDB