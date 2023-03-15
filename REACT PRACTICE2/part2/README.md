# React Use Context Hokk 

In simple definition react context is used to handle state globally without using or passing any props in the components.In React, the components are the building blocks of the product. These components are defined in the tree hierarchy where one component is the parent of the child component.

## The useContext hook is a great hook to use when you need to send props down through multiple, nested child components.

Instead of passing it through every single component on the way down, you can define it in the parent component. Then, bring it into the nested component where you need it while bypassing the middle components you’d normally have to send it through.

# React useMemo hook

useMemo() is a built-in React hook that accepts two arguments — a function compute that computes a result and the dependencies array:

## const memoizedResult = useMemo(compute, dependencies);

1. During the first rendering, useMemo(compute, dependencies) invokes the compute function, which is the first argument, memoizes the calculation result, and returns it to the component.


1. If during the next renderings the dependencies change, then useMemo() invokes compute, memoizes the new value, and returns it. But if dependencies don't change during re-rendering, then useMemo() doesn't invoke compute but returns the memoized value.


React useMemo helps developers memoize expensive functions so that they don't have to retrieve information whenever they need to change input. The useMemo hook recomputes the specific memoized value when a user changes an input. It saves time by stopping the rerunning functions in each computation.


# useMemo is used to speed up slow functions in React applications. It optimizes the functions and reduces the time spent on re-rendering each computation.

