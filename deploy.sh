#!/bin/bash

# Install dependencies
npm install

# Build the application
npm run build

# Deploy to Vercel
vercel --prod 