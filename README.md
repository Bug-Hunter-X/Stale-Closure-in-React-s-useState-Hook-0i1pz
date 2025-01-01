# Stale Closure Bug in React useState
This repository demonstrates a common error in React applications involving stale closures within the `useEffect` hook when updating state.  The `bug.js` file contains the buggy code, while `bugSolution.js` provides the corrected implementation.

**Problem:**
The incorrect usage of `setCount` inside `setTimeout` causes a stale closure, where the value of `count` used inside `setTimeout` is the value from when the `useEffect` was initially called, not the current value. This leads to the counter only incrementing by one, instead of incrementing at each interval.