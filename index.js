/**
 *Name: Xavier Huang
 *Date: April 19th 2022
 *Section: CSE 154 AE
 *This is the index.js file for CP2. It declares the interaction
 *happening in the webpages. It defines several eventlisteners.
 *First, it replaces the child in the NCL section, showing my rank.
 *Second, it displays images once images are clicked.
 *Third, it toggles between hidden and no class of the book time section.
 */

/** Show hidden image by clicking*/
"use strict";
(function() {

  window.addEventListener("load", init);

  /** Respond after click*/
  function init() {
    id("first-img").addEventListener("click", function() {
      displayImg(this, "image/light.jpg");
    });
    id("second-img").addEventListener("click", function() {
      displayImg(this, "image/travel.jpg");
    });
    id("third-img").addEventListener("click", function() {
      displayImg(this, "image/uw.jpg");
    });
    id("fourth-img").addEventListener("click", function() {
      displayImg(this, "image/wolf.jpg");
    });
    id("fifth-img").addEventListener("click", function() {
      displayImg(this, "image/sky.jpg");
    });
    id("sixth-img").addEventListener("click", function() {
      displayImg(this, "image/winter.jpg");
    });
    id("result").addEventListener("click", displayResult);
    id("book-time").addEventListener("click", togglePage);
  }

  /**
   *Changes the src of the image to display actual images.
   *@param {Element} element - The current element.
   *@param {String} image - The name of the image.
   */
  function displayImg(element, image) {
    element.src = image;
  }

  /** Displays the rank information by replacing the children*/
  function displayResult() {
    let display = document.createElement("p");
    display.textContent = "Rank 630 / 6042 players!";
    id("result-section").replaceChild(display, id("result"));
  }

  /** Toggles the section between hidden and unhidden by toggling the .hidden class*/
  function togglePage() {
    id("calendar").classList.toggle("hidden");
  }

  /**
   *Helper function
   *@param {String} id - The id of target tag
   *@return {Element} The element found with the id
   */
  function id(id) {
    return document.getElementById(id);
  }

})();
