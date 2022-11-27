# DOM Manipulation using JS

### Introduction
- What is DOM?
- DOM Tree
- A brief on `Window`, `Navigator` & `Document` objects

### DOM Manipulation
- Accessing the Elements
```js
document.getElementById(id)
document.getElementsByClass(classes)

document.querySelector(selectors)
ducument.querySelectorAll(selectors)

document.getElementByTag(tag)
document.getElementsByName(name)
```
- Traversing the Elements
```js
element.parentNode

element.childNodes
element.firstChild
element.secondChild

element.previousSibling
element.nextSibling
```
- Creating Elements
```js
document.createElement(tag)

document.createTextNode(text)
```
- Appending/Removing/Modifying Elements
```js
document.append(element)
document.appendChild(child)
document.insertBefore(element, oldNode)

document.replaceChild(newNode, existingNode)

document.removeChild(child)
```
- Modifying Text
```js
element.innerText = text
element.innerHTML = html
```
- Manipulating Attributes
```js
document.createAttribute(attr)
element.setAttribute(attr, value);

const myAttr = document.createAttribute("my-attr");
myAttr.value = "value";
```

### Manipulating Styles
- Styling an Element
```js
element.style.property = value

const myDiv = document.querySelector(".my-div");
myDiv.style.color = "#E63946";
```
- Modifying Classes
```js
element.classList.add(class)
element.classList.toggle(class)
element.classList.replace(oldClass, newClass)
element.classList.remove(class)
```

### Events
- Events
- Event Listeners
