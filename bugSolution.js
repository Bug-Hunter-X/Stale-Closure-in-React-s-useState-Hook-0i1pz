```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1); // Correct usage of functional update
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup function to prevent memory leaks
  }, []);

  return <div>Count: {count}</div>;
}
```