```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrectly setting the state inside a timeout
    setTimeout(() => {
      setCount(count + 1); // Use a functional update
    }, 1000);
  }, []);

  return <div>Count: {count}</div>;
}
```