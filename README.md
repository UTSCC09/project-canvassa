# Canvassa

## Presentation

[Presentation Video](https://youtu.be/MKy910K6rUg)

## Accessing the Deployed Version

Visit http://canvassa.tech

For a full experience of how the app works, you can try the following.

First, create an account (say A) and sign in. Create a room. This will take you to the a page where you can start playing with the canvas. Feel free to use the tools to draw, change colour, change brush stroke, undo, or redo. You can also open the menu and copy the join link.

From here, you can simulate sending a friend or acquantance the link by opening an incognito tab and pasting the link in the search bar. This will ensure you can signin to a different account without conflicting with your first one. The link will ask you to create an account first (say B), and then you can join the canvas page. Notice how on join, the canvas will look like how A left it, and any change by either A or B will now synchronously update on both pages. You can continue to have fun here!

Once you are done, you can open the menu and exit back to the landing page.

## The Dev Env

The dev environment consists of 4 parts:
- [Database](./doc/Database.md)
- [Canvassa Server](./doc/Backend.md)
- [Rooms Server](./doc/roomserver.md)
- [Canvassa Frontend](./doc/Frontend.md)
- [Kubernetes Deployment](./doc/kubernetes.md)
- [Docker Deployment](./doc/dockerdeployment.md)

Consult the documentation on each part to learn how to set it up for the local environment and for further details on how they work.

# Project Proposal

## Project Information

Project Title: Canvassa

Team Members:

- Mohammad Rahman
- Shammo Talukder
- Farhan Chowdhury

### Description

Canvassa is a web app that allows users to create or join rooms with their friends or the general public, with whom they can paint, write, sketch, colour, and do more on a whiteboard-like canvas. The rooms will offer messaging and private rooms will also feature audio chat so that users can collaborate more freely. The goal of the app is to provide people with a collaborative experience with a canvas that they can customise to their own desire, no matter what that may be.

Public rooms will allow anyone to join and contribute to collaborative work with strangers all over the world.

Groups of friends can create and join private rooms for a more intimate experience. Here they can freely work together to compose something on the canvas, or they can take advantage of the various game modes to make the experience more geared towards entertainment instead of art. The round robin game mode offers rounds wherein each person will get a limited amount of time to contribute to a drawing to address a common prompt that will ask them to draw something. At the end of the round, the players will get to see how their collaborative effort sizes up to the expectation set by the prompt.

Presentation rooms offer opportunities for more recreational or instructional experiences, where certain participants will act as presenters and be able to use the canvas while others function as audience members who can witness the canvas as it shifts. This mode is ideal when a small subset of the participants want to address a much larger subset.

## Challenge Factors - Beta Release

For the beta release, Canvassa will allow users to create and join rooms. They will be able to create the room in any of the aforementioned modes. An authentication and authorization system will be implemented to ensure private rooms remain restricted. The creator of the room can share the room code which their friends can use to enter the room. Each room will feature a canvas, an exit button to leave the room, a list of individuals in the room, and a toolbar with the following tools to customise the canvas:

- Paintbrush
- Colour picker
- Slider for stroke size
- Fill tool
- Square select
- Text input
- Eraser

### In-depth work with specific web technology

In order to implement the canvas and its tools, three.js, a 3D graphics rendering framework will be utilised. three.js natively supports the creation and manipulation of a scene wherein users can create renderable objects and update the scene. Canvassa will leverage this by designing the canvas tools to create the objects and update the scene on rerenders of the webpage to mimic manipulating a canvas. three.js is an optimal choice to implement Canvassa’s features as it:

- allows any object to be rendered which Canvassa can leverage if it were to expand its own toolbar in the future
- natively supports many features that a Canvassa canvas must support (e.g. zoom, object colouring, panning, etc.)
- supports 3D rendering so Canvassa can expand to 3D canvases in future modes

### Scalability + real-time interaction

A crucial goal for the app is to ensure it is developed with scalability in mind. This means the app should be able to comfortably support high traffic with many active rooms at the same time. Since the canvas will be heavy in terms of data, only the updates to the canvas will be communicated to avoid desynchronizing users in the same room with slow communication, with the rest of the canvas data being cached on the frontend. Timestamp data will accompany the updates to the canvas so that receivers can ensure they have the most updated canvases. If not, they must reload the canvas from the database. Moreover, although general room information will be acquired through CRUD operations, the canvas data will be communicated through sockets, as frequent back and forth must be available to ensure all users in a room are synchronised.

### Authentication + OAuth

Canvassa will also support persistent accounts so users can keep records of the rooms they created (i.e. timestamps on creation and termination, attendance list, final canvas snapshot). This will also mean a more robust authentication and authorization system will have to be in place to support independent accounts.

### End-to-end testing

In order to ensure confidence in the correctness of development and to prevent new features from introducing bugs in previous ones, all features will be pushed with fully supported end to end test suites using Cypress.io.

## Challenge Factors - Final Release

### Real-time interaction (extended)

For the final release, the rooms will support text and audio chat among members. Collapsable sub-windows will be available to ensure users can collaborate more effectively with others in the room without compromising screen space. This will also need to be supported with sockets as correspondence will require a lot of back and forth between the server and clients.

## Tech Stack

React.js will be used for the frontend. This is because although it makes adherence to the MVVM protocol and keeping the JS, HTML, and CSS independent more difficult, the utilitarian approach React provides is ideal for rapid development, which can be crucial as we are dealing with hard deadlines for the progression of the project and other courses can prevent us from spending as much time as we would want to on development. Most importantly however, we are most experienced with React so choosing it allows our learning to focus on the web problems we tackle rather than the specific framework.

Node.js and Express.js will be used for the server, and the data will be stored in a MongoDB database. A NoSQL database is ideal as the data is sparse in terms of relationships and the canvas does not require complex queries to operate.
