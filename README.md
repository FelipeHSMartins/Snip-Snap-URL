# Snip Snap URL

## What is Snip Snap URL:

Snip Snap URL is a web application that allows the user to input a link and receive its shortened version.

## To access the hosted DEMO on Render:

You can access the DEMO here: [link](https://snip-snap-url.onrender.com/)

## To access on a local server:

In the cloned folder, use:

```console
foo@bar:~$ npm install
```
And then:

```console
foo@bar:~$ node index.js
```
By default, the site will be available online at http://localhost:3000/

## How it works:


Snip Snap URL takes the link entered by the user and sends a post request to the [CleanURI API](https://cleanuri.com/docs), which shortens the link and returns a shorter version. 

The link is then passed back to the Snip Snap page for the user to copy.
