echo "Enter the Commit Message"
read x
git init
git add .
git commit -m "$x"
git push