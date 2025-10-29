#!/bin/bash

# Simplicity AI Agent - Setup Script
echo "🚀 Setting up Simplicity AI Agent Landing Page..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ and try again."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18+ is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js $(node -v) detected"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Check if installation was successful
if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

# Create .env.local if it doesn't exist
if [ ! -f .env.local ]; then
    echo "🔧 Creating environment configuration..."
    cat > .env.local << EOF
# AI SDK Configuration
# Add your API keys here for production use

# OpenAI API Key (optional)
# OPENAI_API_KEY=your_openai_api_key_here

# Anthropic API Key (optional)
# ANTHROPIC_API_KEY=your_anthropic_api_key_here

# Vercel AI SDK Configuration
# AI_SDK_SETTINGS={"provider":"openai","model":"gpt-4"}

EOF
    echo "✅ Environment file created (.env.local)"
    echo "ℹ️  Note: Add your API keys to .env.local for production use"
else
    echo "✅ Environment file already exists"
fi

# Generate Prisma client (if needed)
# npx prisma generate

echo ""
echo "🎉 Setup complete!"
echo ""
echo "📝 Next steps:"
echo "   1. Run 'npm run dev' to start the development server"
echo "   2. Open http://localhost:3000 in your browser"
echo "   3. Customize the content in app/page.tsx and components/chatbot.tsx"
echo ""
echo "🔧 Available commands:"
echo "   npm run dev     - Start development server"
echo "   npm run build   - Build for production"
echo "   npm run start   - Start production server"
echo "   npm run lint    - Run ESLint"
echo ""
echo "📚 Documentation:"
echo "   README.md       - Complete project documentation"
echo "   Tailwind CSS    - https://tailwindcss.com/docs"
echo "   Next.js         - https://nextjs.org/docs"
echo "   AI SDK          - https://ai-sdk.dev/docs"
echo ""
echo "🐛 Found an issue? Check the README.md or create an issue on GitHub"