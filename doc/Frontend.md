# The Canvassa Frontned

The portal for the Canvassa app.

## Setting it up for the dev env

Note: The backend and rooms server should be running before the frontend can behave as expected.

From the project directory, enter `cd frontend`. This brings you to the Canvassa Frontend directory. Run `npm i` and then `npm run start`. If the react server successfuly runs, you are good to go.

## File Structure

The majority of the code lies in the `/src` directory.

`/src`
- `/assets`: The images and icons used throughout the app.
- `/shared`
  - `/api`: Hooks that abstract the api calls to the Canvassa Server. There is a 1:1 relationship between the (used) controllers in the backend and the hooks on the frontend.
  - `/constants.js`: Constants used throughout the app.
  - `/components`: A series of utility components designed generically for modular use.
- `/pages`: All the pages accessible on the frontend. The most notable of these is the `RoomPage` and the `CanvasPage`, which we talk about below.

## The Room Page.

This the page that establishes metadata and does preliminary work and renders the Canvas page. It makes initiates a socket connection with the Canvassa Server to get up-to-date metadata regarding the room.

## The Canvas Page

The Canvas page makes heavy use of Three.js to offer a drawable whiteboard for the user and uses sockets to keep the data synchronized within the rooms. A Three.js scene is established with a fixed camera and spotlight.

The drawing tools are designed by calculating the position of and input from the mouse. When the mouse is clicked, the app adds curves at the position of the mouse to offer the "drawing" feature.

Tools to modify the drawing tools (i.e. change color, brush size, etc.) change settings that the drawing tools use to determine the parameters of the curves generated. Buttons like 'Redo' and 'Undo' manipulate the states that manage the curves generated.

A socket connection is generated to the Rooms Server to regularly update it with the changes made by the user, and listen for changes from others in the same room.