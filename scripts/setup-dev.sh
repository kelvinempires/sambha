#!/bin/bash

# Sambha Development Environment Setup Script
set -e

echo "🚀 Setting up Sambha development environment..."

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}✓${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

print_error() {
    echo -e "${RED}✗${NC} $1"
}

print_info() {
    echo -e "${BLUE}ℹ${NC} $1"
}

# Check if required tools are installed
check_requirements() {
    echo "🔍 Checking requirements..."
    
    # Check Node.js
    if ! command -v node &> /dev/null; then
        print_error "Node.js is not installed. Please install Node.js 18+ first."
        exit 1
    fi
    
    # Check pnpm
    if ! command -v pnpm &> /dev/null; then
        print_warning "pnpm is not installed. Installing pnpm..."
        npm install -g pnpm@9.0.0
    fi
    
    # Check Docker
    if ! command -v docker &> /dev/null; then
        print_warning "Docker is not installed. Some features may not work."
    fi
    
    # Check Scarb (Cairo package manager)
    if ! command -v scarb &> /dev/null; then
        print_warning "Scarb is not installed. Installing Scarb..."
        curl --proto '=https' --tlsv1.2 -sSf https://docs.swmansion.com/scarb/install.sh | sh
        source ~/.bashrc 2>/dev/null || source ~/.zshrc 2>/dev/null || true
    fi
    
    # Check Starknet Foundry
    if ! command -v snforge &> /dev/null; then
        print_warning "Starknet Foundry is not installed. Installing..."
        curl -L https://raw.githubusercontent.com/foundry-rs/starknet-foundry/master/scripts/install.sh | sh
        source ~/.bashrc 2>/dev/null || source ~/.zshrc 2>/dev/null || true
    fi
    
    print_status "Requirements check completed"
}

# Setup environment files
setup_env_files() {
    echo "📝 Setting up environment files..."
    
    # Root .env
    if [ ! -f .env ]; then
        cat > .env << EOF
# Sambha Development Environment
NODE_ENV=development
DATABASE_URL=mongodb://admin:sambha123@localhost:27017/sambha?authSource=admin
REDIS_URL=redis://localhost:6379
JWT_SECRET=your-jwt-secret-key-change-in-production
STARKNET_RPC_URL=http://localhost:5050
ENCRYPTION_KEY=your-32-character-encryption-key-here
EOF
        print_status "Created root .env file"
    fi
    
    # Backend .env
    if [ ! -f apps/backend/.env.local ]; then
        cat > apps/backend/.env.local << EOF
# Backend Environment
PORT=3001
CORS_ORIGIN=http://localhost:3000,http://localhost:3002
MONGODB_URI=mongodb://admin:sambha123@localhost:27017/sambha?authSource=admin
REDIS_URL=redis://localhost:6379
JWT_SECRET=your-jwt-secret-key
JWT_EXPIRES_IN=7d
STARKNET_PRIVATE_KEY=0x1234567890abcdef
STARKNET_RPC_URL=http://localhost:5050
UPLOAD_MAX_SIZE=10MB
RATE_LIMIT_WINDOW=15
RATE_LIMIT_MAX_REQUESTS=100
EOF
        print_status "Created backend .env.local file"
    fi
    
    # Web app .env
    if [ ! -f apps/web/.env.local ]; then
        cat > apps/web/.env.local << EOF
# Web App Environment
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_STARKNET_NETWORK=goerli
NEXT_PUBLIC_STARKNET_RPC_URL=http://localhost:5050
NEXT_PUBLIC_ENVIRONMENT=development
EOF
        print_status "Created web app .env.local file"
    fi
    
    # Landing page .env
    if [ ! -f apps/landing/.env.local ]; then
        cat > apps/landing/.env.local << EOF
# Landing Page Environment
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_ENVIRONMENT=development
EOF
        print_status "Created landing page .env.local file"
    fi
    
    # Mobile app .env
    if [ ! -f apps/mobile/.env ]; then
        cat > apps/mobile/.env << EOF
# Mobile App Environment
API_URL=http://localhost:3001
STARKNET_NETWORK=goerli
ENVIRONMENT=development
EOF
        print_status "Created mobile app .env file"
    fi
}

# Install dependencies
install_dependencies() {
    echo "📦 Installing dependencies..."
    
    # Install root dependencies
    pnpm install
    print_status "Installed root dependencies"
    
    # Build shared packages first
    pnpm run build --filter="./packages/*"
    print_status "Built shared packages"
}

# Setup contracts
setup_contracts() {
    echo "⚡ Setting up Cairo contracts..."
    
    cd apps/contracts
    
    # Build contracts
    if command -v scarb &> /dev/null; then
        scarb build
        print_status "Built Cairo contracts"
        
        # Run tests
        scarb test
        print_status "Cairo contract tests passed"
    else
        print_warning "Scarb not found, skipping contract setup"
    fi
    
    cd ../..
}


# Start development services
start_services() {
    echo "🐳 Starting development services..."
    
    if command -v docker &> /dev/null && command -v docker-compose &> /dev/null; then
        # Start only infrastructure services
        docker-compose up -d mongodb redis starknet-devnet
        print_status "Started infrastructure services (MongoDB, Redis, StarkNet Devnet)"
        
        # Wait for services to be ready
        print_info "Waiting for services to be ready..."
        sleep 10
    else
        print_warning "Docker not available. Please start MongoDB, Redis, and StarkNet Devnet manually."
    fi
}

# Create helpful scripts
create_scripts() {
    echo "📜 Creating helpful scripts..."
    
    # Create development script
    cat > scripts/dev.sh << 'EOF'
#!/bin/bash
# Start all development services

echo "🚀 Starting Sambha development environment..."

# Start infrastructure
docker-compose up -d mongodb redis starknet-devnet

# Wait a bit for services to start
sleep 5

# Start all applications in parallel
echo "Starting applications..."
pnpm run dev --parallel
EOF
    chmod +x scripts/dev.sh
    
    # Create test script
    cat > scripts/test-all.sh << 'EOF'
#!/bin/bash
# Run all tests

echo "🧪 Running all tests..."

# Test contracts
echo "Testing Cairo contracts..."
pnpm run test:contracts

# Test applications
echo "Testing applications..."
pnpm run test

echo "✅ All tests completed!"
EOF
    chmod +x scripts/test-all.sh
    
    # Create build script
    cat > scripts/build-all.sh << 'EOF'
#!/bin/bash
# Build all components

echo "🔨 Building all components..."

# Build contracts
echo "Building Cairo contracts..."
pnpm run build:contracts

# Build applications
echo "Building applications..."
pnpm run build

echo "✅ All builds completed!"
EOF
    chmod +x scripts/build-all.sh
    
    print_status "Created helper scripts"
}

# Main setup function
main() {
    echo "🎯 Sambha Development Environment Setup"
    echo "======================================"
    
    check_requirements
    setup_env_files
    install_dependencies
    setup_contracts
    start_services
    create_scripts
    
    echo ""
    echo "🎉 Setup completed successfully!"
    echo ""
    echo "📋 Next steps:"
    echo "  1. Review and update the .env files with your specific configuration"
    echo "  2. Start development: ./scripts/dev.sh"
    echo "  3. Run tests: ./scripts/test-all.sh"
    echo "  4. Build all: ./scripts/build-all.sh"
    echo ""
    echo "🌐 Development URLs:"
    echo "  • Web App: http://localhost:3000"
    echo "  • Backend API: http://localhost:3001"
    echo "  • Landing Page: http://localhost:3002"
    echo "  • StarkNet Devnet: http://localhost:5050"
    echo "  • MongoDB: mongodb://localhost:27017"
    echo "  • Redis: redis://localhost:6379"
    echo ""
    echo "Happy coding! 🚀"
}

# Run main function
main "$@" 