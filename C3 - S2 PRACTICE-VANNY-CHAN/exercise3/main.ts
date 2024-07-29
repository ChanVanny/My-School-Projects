

import { DomElement } from "./domElement";

// Create new objects 
let html = new DomElement("html");
let head = new DomElement("head");
let body = new DomElement("body");
let title = new DomElement("title");
let a = new DomElement("a");
let h1 = new DomElement("h1");


html.addChild(head, body);

// Add child and setparent to head 
head.addChild(title);
head.setParent(html)

// Add child and setparent to body 
body.addChild(a,h1);
body.setParent(html);

// Setparent to a, h1, title
a.setParent(body);
h1.setParent(body);
title.setParent(head);

console.log(html.isRoot());
console.log(body.isRoot());