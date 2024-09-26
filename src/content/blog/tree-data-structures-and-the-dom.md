---
title: 'Tree Data Structures and the DOM'
excerpt: 'How the "most important nonlinear [structure]... in computer algorithms" helps organize the sites we build.'
publishDate: 'Nov 19 2022'
isFeatured: true
tags:
  - Web
  - Data
seo:
  image:
    src: '/dom-1.jpg'
    alt: 'A tree with many branches' 
---

_How the "most important nonlinear [structure]... in computer algorithms"[^1] helps organize the sites we build._

![A tree with many branches](/dom-1.jpg)
_Photo by [Subtle Cinematics](https://unsplash.com/@subtlecinematics?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com/?utm_source=medium&utm_medium=referral)_

Understanding the Document Object Model (DOM) interface is an integral part of learning to develop in JavaScript, and can help newcomers decipher blocks of nebulous HTML. The DOM organizes the elements that make up an HTML file and represents them as data in a tree data structure, allowing for clearer navigation and simpler targeting of individual assets. Being able to confidently interact with the DOM allows a developer to indirectly manipulate HTML’s styling, content, and behaviour from external JavaScript files.

Using the DOM to render HTML (or XML) is a standard that web developers have come to accept, but new and seasoned developers may stop to ask, “what is a tree data structure?” We will be walking through the definitions and applications of this model in hopes to solidify our understanding of the DOM we use so often.

## The Tree Data Structure

A tree structure is a hierarchical representation of data, with one piece of data acting as the **root** and every node “below” it being connected to from exactly one other node.[^2]

```
        -> [node]
      /
[root]             -> [node] -> [node]
      \          /
        -> [node]
                 \
                   -> [node]
```

In the diagram we see below, the node A acts as the root, which in turn has two **children**, B and C. The **siblings** D and E share the same **parent** node, C. Nodes with no children (B, D, and E) are referred to as a **leaf**.

![A basic representation of a general tree data structure](/dom-2.png)

In a general tree there is no limit to how many children a node can have, while a _specialized_ tree may have strict restraints on the number of children. For example, a widely-used structure known as a _binary tree_ can only ever have a maximum of two children. Regardless of type, a node may never have more than one parent and may not be its own parent, as that would undermine the tree’s hierarchical nature or create never-ending self-referencing cycles.

The nature of tree structures allow for each node apart from the root to be viewed as **its own unique tree**. We can isolate the node C and its children to analyze it as a tree structure of its own.

![Each node of a tree can be represented as its own unique tree](/dom-3.png)

If we are able to repeat this process for each individual node of a tree, where each step produces its own tree to be navigated, this allows for rapid recursive navigation. Being able to simplify a tree structure in this manner lets algorithms traverse them in efficient, elegant ways. As described by Knuth, this recursive character of tree structures is also present in nature itself, since “young buds eventually grow into subtrees with buds of their own.”[^3]

Now that we have a simple understanding of general tree structure, we will explore the numerous uses that trees bring to computer science and web development.

## Application of Trees

One of the most familiar uses of the tree data structure may be our computers’ file systems. If you were to open your file explorer now, you may be presented with a Desktop folder, a Documents folder, or a Downloads folder (all nodes), which in turn contain their own folders (nodes with their own children) or files (endpoints, or leaves of the tree). Unix users may also be familiar with the topmost file directory being called the **root**.

![An Ubuntu terminal](/dom-4.jpg)
_Photo by [Gabriel Heinzer](https://unsplash.com/@6heinz3r?utm_source=medium&utm_medium=referral) on [Unsplash](https://unsplash.com/?utm_source=medium&utm_medium=referral)_

Having directories structured in this way allows for fast searching of files within the computer and faster allocation and linking of data in storage. Chances are that your local library has implemented the Dewey Decimal System, a hierarchical tree-like data structure itself!

Using tree structures also allow for fascinating advancements in other fields of science, such as the Barnes-Hut simulation’s division of space into quadrants, allowing for dynamic particle simulations of n-body problems (see GitHub user Elucidation’s implementation of this simulation in the browser [here](https://www.tetralark.com/Barnes-Hut-Tree-N-body-Implementation-in-HTML-Js/)).

Lastly, we encounter the tree data structure extensively in the framework of HTML sites: the Document Object Model.

## The DOM as a Tree

Let us take a look at a simple HTML file for an example of the tree-like structure of the DOM:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Example Page</title>
  </head>
  <body>
    <header>
      <p>Home</p>
    </header>
    <main>
      <h1>Welcome to my example website!</h1>
      <div class="example-div">
        <p>This is an example paragraph.</p>
        <div class="another-div">
          <p>For some reason this paragraph is placed inside a div.</p>
        </div>
      </div>
    </main>
    <footer>
      <p>About us</p>
    </footer>
  </body>
</html>
```

HTML can be understandably overwhelming for web development beginners — especially if the file has fallen guilty to the horrors of '[div soup](https://www.chillybin.co/would-you-like-another-bowl-of-div-soup/)' — but can be clarified when viewed as a tree data structure.

To do so, the DOM treats every element (those parts wrapped in angle brackets: `<title>`, `<body>`, etc.) as a distinct node of the tree, with the `<html>` tag acting as the root. Anything within an element is treated as another node, potentially having other children of its own.

If we were to represent the above file as a (very simple) tree, we may see something like this:

![The above HTML rendered as a tree with many branches](/dom-5.png)

This view allows us as developers to visualize the hierarchical relationships between each element of the HTML, and more importantly allows our JavaScript to traverse these elements when performing DOM queries.

Consider this document query from Mozilla’s web docs:[^4]

```js
const paragraphs = document.querySelectorAll("p");
```

The DOM API is asked to select all `<p>` elements and push them to an array. This is accomplished by the DOM running down the branches of the tree outlined above, where it will initially discover the `<p>` node that is defined as the child of `<header>` in `<body>`.

![](/dom-6.png)

Having reached the end of the branch, it will navigate back up to `<body>` node and its children, dive into the `<main>` element and its children, and uncover `<p>` as the child of our first `<div>`.

![](/dom-7.png)

Next, the lowest `<p>` of the tree will be found in another `<div>`.

![](/dom-8.png)

Finally, the DOM returns to the `<body>` node and a `<p>` element is found in the `<footer>`.

![](/dom-9.png)

With an array of `<p>` elements now saved in the `paragraphs` variable, the developer is free to manipulate the saved objects in whichever way they need.

## Conclusion

While tree data structures have innumerable applications throughout many disciplines, web developers are encouraged to develop a familiarity with trees as they pertain to the Document Object Model that has organized our web for decades. Trees allow algorithms, APIs, and even humans to better traverse and understand complicated data relationships, and comfort with the topic allows developers to confidently build and debug the sites they create.

---

## References

[^1]: Donald E. Knuth, _The Art of Computer Programming, Vol. 1_, (Mass.: Addison-Wesley, 1997), 308.
[^2]: “Tree Data Structure”, Carnegie Mellon University, https://www.cs.cmu.edu/~clo/www/CMU/DataStructures/Lessons/lesson4_1.htm.
[^3]: _Computer Programming_, 308.
[^4]: “Introduction to the DOM”, mdn web docs, https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction.