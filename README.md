# Silent Error in React Native useEffect Cleanup

This repository demonstrates a subtle bug in React Native where an error thrown within the cleanup function of a `useEffect` hook is silently swallowed.  The error occurs when trying to access component state after the component has unmounted.

## Bug Description
The provided `bug.js` file contains a component that uses `setInterval` to update a counter. The cleanup function attempts to log the counter's value after the interval is cleared. Because the component might unmount before the cleanup function is fully executed, accessing `count` might throw an error.  However, this error is not reported in the usual way, making debugging challenging.

## Solution
The solution, shown in `bugSolution.js`, addresses this by checking if the component is still mounted before accessing the state variable.  This is achieved using a ref to track the component's mount status.