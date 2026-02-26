#!/bin/bash
cd ~/Desktop/storeview-scanning-prototype
git add app.js
git commit -m "Fix UPC counts to match product data"
git push origin main
echo "Done! Changes pushed to GitHub."
