# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

Check out the [screenshot](/screenshot.png)

### Links

- FrontEnd Mentor Solution URL: [Here](https://your-solution-url.com)
- Live Site URL: [Here](https://lighthearted-queijadas-414b80.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- BEM
- Vanilla JS

### What I learned

- HTML: 
With the HTML, I really enjoyed the practice with forms, buttons, and email validation. I definitely learned a lot!

```html
<input type="email" id="emailInput" placeholder="email@company.com" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required>
<button class="email--button" id="emailButton" type="submit" onclick="submitForm()">Subscribe to monthly newsletter</button>
```

- CSS: 
This was my first experiementation with ::before and ::after. I had no idea what they were before this project, now I feel I can cofidently use them.

```css
.email--button {
    width: 101%;
    height: 3.5em;
    background-color: hsl(234, 29%, 20%);
    color: white;
    border-radius: 0.5em;
    font-size: 1.1em;
    font-weight: 700;
    border: none;
    margin-bottom: 2.5em;
    position: relative;
    overflow: hidden;
    z-index: 1;
}

.email--button::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0%;
    background: linear-gradient(to right, #FF527B, #FF624E);
    transition: width 0.3s;
    z-index: -1;
}

.email--button:hover::before {
    width: 100%;
}
```

- Javascript:
I am still pretty new to JS. I had trouble with changing the background color on the input box. The thing that took the longest was realizing that my syntax was wrong. I will code carefully.

```js
function submitForm(event) {
    event.preventDefault();
  
    if (input.checkValidity()) {
        main.style.display = "none";
        success.style.display = "flex";
    } else {
        input.style.backgroundColor = "rgba(242, 44, 33, 0.25)";
        valid.style.display = "block";
    }
}
```