# Summary
This guide takes you through creating configurable Web Components. It explains
how to setup your environment, how Web Components work, how to add
attributes to them, making them responsive, walks you through an example
component, and gets you started on making one on your own.

# Git Setup
I started a landing-page branch from development for us to start committing
source code to the repo. It won't be in your local repo by default so run if
you're working on the landing-page:


```
git checkout -b landing-page origin/landing-page
```


This command creates a new branch called landing-page that tracks the
landing-page branch in the GitHub repo.

If you're starting a new branch, first switch to development

```
git chekout development
```

create a new branch which is named after the feature or page you're working on
and switch to it with

```
git chekout -b some-feature-branch
```

then set push the branch to GitHub via

```
git push -u origin some-feature-branch
```

This new branch should now be visible on GitHub.

# Dev setup
You can add the source code of your component to `source/components`. In order to see what you're working on, replace the `<h2></h2>` element under the `<main></main>` component with the name of your new component in `index.html`.

**IMPORTANT** this step is only for you to be able to see your changes while you're developing your component. **Don't commit this step to the repo. After you're done developing, revert to the `<h2></h2>` element that was there before**. 

This is because your component will be one component of many in an umbrella
component for the page it's being developed for (it doesn't exist yet though). 
We do this so that when we're dealing with the router, we can change tabs by
just removing and adding a single component to flip between pages. 

We'll address adding your component in a different guide.

Finally, make sure you have the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension installed in VS Code. That way, you can open `index.html` in VS Code and hit `Go Live` at the bottom of your screen
<img width="1920" alt="Screen Shot 2021-05-26 at 7 50 32 PM" src="https://user-images.githubusercontent.com/44106252/119758639-b604c780-be5b-11eb-9eb9-547077dfb987.png">

# How to: Web Components
If you need a refresher, here's the [official Web Components documentation](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements).

This guide dives deeper than what's mentioned in the documentation linked
above so if you're not comfortable with the basics, read through the official
documentation first.

Apart from that, feel free to refer to `components/aFeature.js` (I couldn't think of a better name when I was writing this component for each of the individual features on the feature-page but I promise the name will change soon). Also, this component's name is written in camelCase but **all components must be in kebab-case**. I will change this file's name to kebab-case when I go back to update the name.


# How to: Make one Web Component configurable to have different styles
In this section, we'll walk through working on the yellow starred sections of
the landing page on Figma.

At the core of both sections, there is a title, button, and some media (there's supposed to be an svg animation on the right side of the first section as well but it's still being made). 

The places where the two components differ is in their background colors, the location of the media, alignment and size of the text, and the size of the button.

However, since these sections are roughly the same, we can create one component for both.

We do this by letting the component be configured via **attributes**.

### Component Attributes
For example, an image element has different attributes like src, height, width, and alt are configured like so:

```
<img class="some-class" 
     src="/path/to/file" 
     alt="alternate text if the file can't be shown">
```

You can access these attributes in your component with `this.getAttribute('some-attribute')` after the html written in the component is appended to the shadow root like so:

```
...
 this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))

    // Get attributes
    const title = this.getAttribute('title');
    const description = this.getAttribute('description');
    const imgSrc = this.getAttribute('src');
    const imgWidth = this.getAttribute('width');
    const alternateBackgroundColor = this.getAttribute('alternateBackgroundColor');
    const swapImageAndText = this.getAttribute('swapImageAndText');
...
```

(This example is from `components/aFeature.js`. You can check it out _after_ you're done reading the rest of the section on Web Components)

These attributes are defined in the element and can be directly accessed like above without doing anything else.

Now that you have a reference to an attribute, you can use it to manipulate the html you defined earlier in the file.

For example, if you want to change the text of the title of your component, you can do something like this:

```
    if(title) {
      this.shadowRoot.querySelector('.title-text').innerText = title;
    } else {
      this.shadowRoot.querySelector('.title-text').innerText = "Enter Title"
    }
```

In this code, you get a reference to the element with class `title-text` (which happens to be an `<h3></h3>` element and set what's in between it to `title`. 

If a title wasn't specified, the default title is used instead so the final code would like this in the shadowDOM (it won't look like this in your actual code since we're making these changes dynamically):

```
<h3>
    Enter Title
</h3>
```

In summary, attributes allow you to make your component configurable and have
different styles.

### Changing styling
In the previous sub-section, we looked at how to change the HTML itself. But, what if we wanted to change the styling based on the value of an attribute?

In that case, we could define different css blocks that have different styling and apply them based on the value of an attribute by appending and removing class names from the name of the component.

For example, let's say we have an attribute called `mainBackgroundColor`. 

If it's set to `true`, the background color of your component should be darker. 

If it's `false`, the background color should be lighter.

In a Web Component, all of the html lives under a `<section>` element. You can
give it a class name like this: `<section class="class-name">`. You also probably have some css defined for this class:

```
.class-name {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding-top: 91px;
}
```

Since a background-color wasn't defined, the background color will be rendered as white. 

If you want the background color to be different depending on the value of `mainBackgroundColor` you can define some css blocks like so:

```
.class-name.main-background-color {
    background-color: #F0EBCC
}
```

and another class called `.secondary-background-color`:

```
.class-name.secondary-background-color {
    background-color: #F9F6E7
}
```

These blocks only apply to elements which have two class names and are defined like this `<section class="class-name main-background-color">` or `<section class="class-name secondary-background-color">` (class names are separated by a space).

The first css block applies to the first section element above and the second block applies to the second section.

Now, you can grab the `<section class="class-name">` element that holds all the component's html with:

```
    this.shadowRoot.querySelector('.class-name');
```

and append some code to access and manipulate the classes of `section`:

```
    this.shadowRoot.querySelector('.class-name').classList.add("main-background-color");
    // or
    this.shadowRoot.querySelector('.class-name').classList.add("secondary-background-color");
```

Viola! You've successfully made your component configurable. It can be use like so:

```
    <your-component main-background-color=true></your-component>
```

if you want to have the main background color or 

```
    <your-component main-background-color=false></your-component>
```

if you want the secondary background color.

These two examples should help you figure out how to handle the rest of the styling updates as well (you should look at how to setup `aFeature.js` for things like changing text and image alignment).

# display: flex
The best way to learn flex is by messing around with it on your own. Here's a [cheatsheet](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) for your reference.

# How to: Flexbox for having a responsive website
One of the key aspects of flexbox is that allows us to define how elements should behave when the browser window becomes larger or smaller.

The key property here is `flex-wrap`. You want to set it to `flex-wrap: column` in a css block so that when the browser window resizes, any elements that are configured as a row are wrapped under each other into a column if there isn't enough available space for the elements to be side by side.

# Buttons
You can check `feautre-page.js` to see how I made a button and how to have them `transition` to different colors when you hover or them (you should be able to copy over the css for the most part, just make sure that the button styling is supposed to be the same- on figma you can click on the button, head to the inspect column on inspector on the right hand side, and scroll down to the css section. don't copy everything though because it also gives you absolute positions for the css which we don't want).

# Conclusion
If after reading this guide there are have any questions, shoot me a DM!
We can also hop on a call at any time to pair program if you feel lost.
