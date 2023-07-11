echo "# BootCamp" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/MitchStockley/BootCamp.git
git push -u origin main

git config --global user.email "you@example.com"
git config --global user.name "Your Name"