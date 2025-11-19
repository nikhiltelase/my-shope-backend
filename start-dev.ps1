# PowerShell script to start Connect Robo backend server
$ErrorActionPreference = "Stop"

Write-Host "Starting Connect Robo Backend Server..." -ForegroundColor Green
Write-Host "Current directory: $PWD" -ForegroundColor Yellow

# Change to script directory
$scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $scriptPath

# Set environment variables if .env doesn't exist
if (-not (Test-Path ".env")) {
    Write-Host "⚠️  .env file not found. Using default values." -ForegroundColor Yellow
    $env:PORT = "5000"
    $env:FRONTED_URL = "http://localhost:5173"
    $env:JWT_SECRET = "connect-robo-secret-key-12345"
    $env:OTP_SECRET = "connect-robo-otp-secret-12345"
}

# Start the server
Write-Host "Starting backend server on http://localhost:5000" -ForegroundColor Green
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow
Write-Host ""

try {
    node index.js
} catch {
    Write-Host "Error starting server: $_" -ForegroundColor Red
    Read-Host "Press Enter to exit"
}

