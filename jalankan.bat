@echo off
echo ========================================
echo  Running Pure TypeScript Solutions
echo  NIM: 051438428
echo ========================================
echo.

REM Try to run with tsx first
where tsx >nul 2>&1
if %ERRORLEVEL% EQU 0 (
    echo Using tsx...
    tsx jalankan-semua.ts
    goto :end
)

REM Try to run with ts-node
where ts-node >nul 2>&1
if %ERRORLEVEL% EQU 0 (
    echo Using ts-node...
    ts-node jalankan-semua.ts
    goto :end
)

REM Try to install tsx globally
echo tsx not found. Installing tsx...
powershell -ExecutionPolicy Bypass -Command "npm install -g tsx"
if %ERRORLEVEL% EQU 0 (
    echo Running with tsx...
    tsx jalankan-semua.ts
    goto :end
)

REM Fallback: compile and run
echo Compiling TypeScript...
powershell -ExecutionPolicy Bypass -Command "npx -y typescript@latest tsc jalankan-semua.ts --target ES2020 --module commonjs"
if exist jalankan-semua.js (
    echo Running compiled JavaScript...
    node jalankan-semua.js
    del jalankan-semua.js
) else (
    echo.
    echo ERROR: Could not run TypeScript files.
    echo Please install tsx manually:
    echo   npm install -g tsx
    echo Then run:
    echo   tsx jalankan-semua.ts
)

:end
echo.
pause
