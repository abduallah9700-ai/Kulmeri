#!/bin/bash
# ========================================================
# Kulmeri Academic - Localhost Startup Script
# ========================================================

cd "$(dirname "$0")"

PORT=8080

echo "--------------------------------------------------------"
echo "  Starting Kulmeri Academic Landing Page Server..."
echo "  Opening http://localhost:$PORT in your default browser"
echo "--------------------------------------------------------"

# Open browser after a brief delay
(sleep 1 && open "http://localhost:$PORT") &

# Start the Ruby server
/usr/bin/ruby server.rb
