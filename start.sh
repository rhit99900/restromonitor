#!/bin/bash

# Navigate to frontend directory and start Vite
echo "Starting Frontend Application"
(
  cd frontend || exit
  npm run dev
) &

# Navigate to backend directory and start Express
echo "Starting Backend"
(
  cd server || exit
  npm run dev
) &

# Wait for both background processes to complete
wait
