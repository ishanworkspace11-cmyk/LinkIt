# 🔗 LinkIt - Firefox Browser Extension

> A lightweight, privacy-first browser extension that lets you instantly save, organize, and manage your essential web links with a single click.

---

## 📌 Overview

Ever found the perfect competitive programming problem, a crucial piece of documentation, or a great tutorial, only to accidentally close the tab? 

LinkIt is a distraction-free Firefox extension designed to keep your digital workspace organized. 

It is perfect for tracking daily coding challenges, compiling research, or simply bookmarking articles to read later without cluttering your browser's default bookmark manager.

<br>

## ✨ Features

* **One-Click Save:** Instantly capture and save the currently active tab's URL.

* **Manual Entry:** Easily paste custom URLs directly into the tracker.

* **Persistent Storage:** Utilizes browser `localStorage` to ensure your links are saved securely on your device across sessions.

* **Privacy First:** 100% local operation. No external servers, no data tracking, and no background data collection.

* **Secure Rendering:** Implements `document.createElement()` instead of `innerHTML` to strictly prevent Cross-Site Scripting (XSS) vulnerabilities.

<br>

## 🛠️ Tech Stack

* **HTML5:** Popup UI structure.
* **CSS3:** Minimalist, distraction-free styling.
* **Vanilla JavaScript:** DOM manipulation, event handling, and local storage.
* **Firefox WebExtensions API:** Tab querying and permissions.

<br>

## 🚀 How to Install and Run Locally

If you want to clone this repository and run the extension on your own machine, follow these steps:

1. **Clone this repository:**
   ```bash
   git clone [https://github.com/ishanworkspace11-cmyk/LinkIt](https://github.com/ishanworkspace11-cmyk/LinkIt)
