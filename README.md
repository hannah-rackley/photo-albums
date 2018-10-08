# Photo Album

## Getting Started
In order to get started - please clone this repository into a local file on your computer. You should then navigate into that file in your terminal and run the `npm install` command. Once you have installed the necessary node packages, you should be able to run the app by typing `npm start` into your terminal as long as you are still within this file. The app will then open up in your browser and you should be able to test it out from there.

## Overview
This app starts you out with a list of users. Each user's name is a link that will take you to a list of their albums. From there, you can either return 'Home' to the list of users, or move onwards by clicking on any of the thumbnails for the albums in the user's albums list. Once you have navigated to a specific album by clicking on it, o=you can again choose to navigate back to the Home page or view the full size of any of the images by clicking on one. 

## Work-arounds
I noticed I was unable to use PUT, POST, or DELETE requests with this data. In order to provide the experience of being able to manipualte the data while using the app, had to do a bit of a work-around. I decided to store the state in local storage and only do new fetch requests to get the data if local storage does not contain users, albums, or photos in that state. This allows for 'deletions' of users, albums, and photos that persist even when you navigate to a new page or reload the page. Normally, I would be doing a 'DELETE' fetch request, but in this case I simply dispatched an action for deletion. 
