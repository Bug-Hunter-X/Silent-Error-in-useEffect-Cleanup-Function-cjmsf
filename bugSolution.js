```javascript
import React, { useState, useEffect, useRef } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);
  const mounted = useRef(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (mounted.current) {
        setCount(prevCount => prevCount + 1);
      }
    }, 1000);

    return () => {
      mounted.current = false;
      clearInterval(interval);
    };
  }, []);

  return (
    <Text>Count: {count}</Text>
  );
};
```