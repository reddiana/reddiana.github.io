cd /d "%~dp0"
rmdir /S /Q public

@REM call npm update

explorer http://localhost:8080
call npx quartz build --serve