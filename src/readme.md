# Life Cycle of useEffect in react 
### Life cycle of components and useEffect are not same. Component has 3 states what are mount, unmount, and update whereas useEffect has 2 states what are synchronizing and clean up.
## when a component does mount (appear on the screen ) for the first time .
At first, component render the jsx then it starts rendering another logics and sees the useEffects and starts executing.
Finally, useEffect create a connection or sync with external API, server and so on.
In development mode, it does unmount after rendering everything of that component then again it does mount. 
This time, it renders all jsx then execute all logics and clean up the useEffect then create connection or sync again .
