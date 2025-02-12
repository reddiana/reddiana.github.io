cd /d "%~dp0"
rmdir /S /Q public

npm update

explorer http://localhost:8080
npx quartz build --serve