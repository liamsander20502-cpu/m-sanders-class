@echo off
cd /d "%~dp0"

echo.
echo Classroom Calendar Publisher
echo ----------------------------
echo.

set /p msg="Describe this update: "

if "%msg%"=="" set msg=Update website

git add .
git commit -m "%msg%"
git push

echo.
echo Website update sent to GitHub.
echo GitHub Pages may take a minute or two to update.
echo.

pause