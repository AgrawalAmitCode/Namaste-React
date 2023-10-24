## Steps I followed to setup the repository with my Github account in local

Step 1 - Created the Github repository on Github account (browser)

Step 2 - Created a Practice folder in Desktop and then cloned the repository :
            git clone https://github.com/AgrawalAmitCode/Namaste-React.git
        This created a folder same like the repository /Desktop/AmitPractice/Namaste-React

Step 3 - Then created a file called README.md. 
        Need to push this empty file from master branch to remote

Step 4 - git add --all

Step 5 - git status -> resulted in saying "On branch main" -> need to change it to master

Step 6 - git branch -M master -> renamed the branch from main to master

Step 7 - git commit -m "added README.MD" -> seems like it got commited with "Amit Agrawal <amit.agrawal@hilabs.com>"

Step 8 - Did this - 
        Your branch is based on 'origin/main', but the upstream is gone.
            (use "git branch --unset-upstream" to fixup)  

Step 9 - git push -> resutled in "git push --set-upstream origin master"

Step 10 - git push --set-upstream origin master
        This asked to login to gitHub account and then authenticated and then pushed the file

This all was done from master branch.
Now need to create a develop branch and keep using the same.
---------------------------

Step 1 - git checkout -b develop


