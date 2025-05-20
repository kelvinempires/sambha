# Sambha - Blockchain-Enhanced Event Management Platform

[![WIP](https://img.shields.io/badge/Status-Work%20In%20Progress-yellow)](https://github.com/your-repo/sambha)
[![License: GPL-3.0](https://img.shields.io/badge/License-GPL--3.0-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
[![Powered by Stellar](https://img.shields.io/badge/Powered%20by-Stellar-brightgreen)](https://stellar.org)
[![Smart Contracts: Soroban](https://img.shields.io/badge/Smart%20Contracts-Soroban-orange)](https://soroban.stellar.org)
[![OnlyDust](https://img.shields.io/badge/Contributions-OnlyDust-purple)](https://app.onlydust.com)

<!-- [![Made with React Native](https://img.shields.io/badge/Made%20with-React%20Native-61dafb)](https://reactnative.dev/)
[![Backend: Node.js](https://img.shields.io/badge/Backend-Node.js-339933)](https://nodejs.org) -->

## Problem Statement

Event management today remains fragmented, inefficient, and often lacks
transparency. Event planners struggle with coordinating multiple vendors,
managing payments, and providing secure access control for attendees. Vendors
face challenges with inconsistent payment schedules and lack of standardized
booking processes. Attendees often deal with ticket fraud and cumbersome event
access processes.

Sambha addresses these challenges by leveraging blockchain technology to create
a unified platform that streamlines event planning, enhances security through
NFT-based event passes, and introduces transparent milestone-based payments for
vendors. The platform further enhances the experience with AI-driven task
generation and budget estimation.

## Features

- **NFT-Based Event Passes**: Secure, unique digital passes for event attendees
- **Blockchain-Powered Vendor Payments**: Transparent milestone-based payments
  using Stellar's Soroban smart contracts
- **AI-Enhanced Planning Tools**: Automated task generation and budget
  estimation
- **Comprehensive Event Management**: End-to-end tools for planners, guests, and
  vendors
- **Real-time Communication**: Integrated chat and notification system
- **Vendor Marketplace**: Discovery and booking of verified vendors

## Technology Stack

- **Backend**: Node.js, Hono framework, TypeScript
- **Database**: MongoDB
- **Mobile Application**: React Native
- **Blockchain**: Stellar Network with Soroban smart contracts
- **Caching**: Redis
- **File Storage**: Cloud storage & IPFS (for NFT metadata)

## Development Roadmap

### Phase 1: Core Platform & Basic Guest Experience

- **Project Setup**
  - Repository structure and development environment
  - CI/CD pipeline configuration
  - Development, staging, and production environments

- **Web Landing Page**
  - Marketing website with platform information
  - User registration and login functionality

- **Backend Development**
  - User authentication system (JWT, OAuth integration)
  - Basic API endpoints for event creation and management
  - Database schema design and implementation

- **Smart Contract Development**
  - Basic Stellar asset for NFT event passes
  - Contract testing and security review

- **Mobile App - Guest Experience**
  - User registration and profile management
  - Event discovery and RSVP functionality
  - Basic NFT pass viewing and management

- **Planner Web App - Basic Features**
  - Event creation and management dashboard
  - Guest invitation and management tools
  - Basic subscription management

### Phase 2: Enhanced Planner Tools & Initial Vendor Integration

- **Backend Enhancements**
  - Integration of real-time chat functionality
  - Vendor profile and discovery system
  - File management system

- **Smart Contract Development**
  - Enhanced NFT functionality
  - Initial escrow contract design

- **Mobile App Enhancements**
  - Chat functionality
  - Event details page improvements
  - Push notifications

- **Planner Web App - Advanced Features**
  - Advanced event configuration options
  - Template-based AI task suggestion integration
  - Task management dashboard

- **Vendor Web App - Initial Release**
  - Vendor registration and profile management
  - Service listing and catalog management
  - Basic booking management

### Phase 3: Blockchain-Powered Vendor Payments & Advanced AI

- **Backend Enhancements**
  - AI integration for cost estimation
  - Advanced vendor recommendation algorithms
  - Payment processing infrastructure

- **Smart Contract Development**
  - Soroban escrow implementation for milestone payments
  - Payment release mechanisms
  - Initial dispute resolution functionality

- **Mobile App Enhancements**
  - Wallet integration for guests
  - Enhanced NFT experience
  - Rating and review system

- **Planner Web App Enhancements**
  - Budget management tools
  - Milestone payment tracking
  - Vendor hiring and payment flow

- **Vendor Web App Enhancements**
  - Blockchain wallet integration
  - Milestone tracking and payment acceptance
  - Enhanced booking management

- **Admin Dashboard - Initial Release**
  - User management
  - Platform monitoring tools
  - Basic analytics

### Phase 4: Full Feature Set & Platform Maturity

- **Backend Optimization**
  - Performance tuning
  - Enhanced security measures
  - Advanced analytics infrastructure

- **Smart Contract Refinement**
  - Complete dispute resolution system
  - Contract upgradeability
  - Advanced security features

- **Mobile App - Complete Feature Set**
  - Calendar integration
  - Seating arrangements view
  - Comprehensive offline functionality
  - Enhanced UI/UX refinements

- **Planner Web App - Premium Features**
  - Advanced analytics dashboard
  - Email campaign tools
  - Comprehensive event planning workflow

- **Vendor Web App - Full Feature Set**
  - Enhanced financial reporting
  - Advanced dispute management
  - Marketing tools

- **Admin Dashboard - Complete**
  - Comprehensive platform oversight
  - Blockchain transaction monitoring
  - Advanced reporting and analytics

## Contributing

We welcome contributions to Sambha! This project uses the OnlyDust platform to
manage contributions and reward contributors.

### How to Contribute

1. **Find an Issue**: Browse our project on
   [OnlyDust](https://app.onlydust.com/projects/sambha) to find open issues that
   match your skills and interests.

2. **Fork and Clone**: Fork this repository and clone it to your local machine.

3. **Create a Branch**: Create a branch for your contribution.

4. **Make Changes**: Implement your solution following our coding standards and
   practices.

5. **Test**: Ensure your changes pass all tests and add new tests if necessary.

6. **Submit a Pull Request**: Push your changes to your fork and submit a pull
   request to our repository.

### OnlyDust Platform

We use [OnlyDust](https://app.onlydust.com/projects/sambha) to:

- Track open contributions
- Manage contribution assignments
- Reward contributors for their work
- Build a community of developers

To get started, create an account on OnlyDust and check out our project page to
see available tasks and how to claim them.

## License

This project is licensed under the GNU General Public License v3.0 - see the
[LICENSE](LICENSE) file for details.
