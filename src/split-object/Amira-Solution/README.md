# Split Object

Split an object into an array of objects. Each entry in the array will be one
key/value pair from the object.

---

## Strategy

to use an easy one-line function code

---

## Implementation

Using `Object.entries()`
method to returns an array containing key-value pairs found directly in the object.

<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries>

---

## Use Cases

- You have an object list of Group `Name and Gender`
and you want to log its key-value pairs.
Splitting this object into an array of key-value pairs
makes it easier to log each pair individually

>here is the code of this case:

```js

const obj = {
  'Amira': 'F',
  'Ashraf': 'M',
  'Youns': 'M'
};

const splitPairs = (obj) => {
  return Object.entries(obj);
};

const keyValueArray = splitPairs(obj);

keyValueArray.forEach(([key, value]) => {
  console.log(`Name: ${key}, Gender: ${value}`);
});



```

>This code will return:

```js
Name: Amira, Gender: F
Name: Ashraf, Gender: M
Name: Youns, Gender: M
```

## Inspiration

here is a page explain about Object.keys, values, entries:

<https://javascript.info/keys-values-entries>
