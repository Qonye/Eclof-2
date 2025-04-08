// API Keys Configuration
// This file should be added to .gitignore to keep keys out of version control

const CONFIG = {
    // API Provider Selection - uncomment the provider you want to use
    API_PROVIDER: "openai", // Options: "openai", "anthropic", "cohere", "azure", "gemini", "grok", "deepseek", "local"
    
    // OpenAI Configuration
OPENAI_API_KEY: "YOUR_OPENAI_KEY_HERE",
OPENAI_API_ENDPOINT: "https://api.openai.com/v1/chat/completions",
    OPENAI_MODEL: "gpt-4o",
    
    // Anthropic Configuration
    ANTHROPIC_API_KEY: "YOUR_ANTHROPIC_KEY_HERE",
    ANTHROPIC_API_ENDPOINT: "https://api.anthropic.com/v1/messages",
    ANTHROPIC_MODEL: "claude-3-opus-20240229",
    
    // Cohere Configuration
    COHERE_API_KEY: "YOUR_COHERE_KEY_HERE",
    COHERE_API_ENDPOINT: "https://api.cohere.ai/v1/generate",
    COHERE_MODEL: "command",
    
    // Azure OpenAI Configuration
    AZURE_API_KEY: "YOUR_AZURE_KEY_HERE",
    AZURE_API_ENDPOINT: "https://your-resource-name.openai.azure.com/openai/deployments/your-deployment-name/chat/completions?api-version=2023-05-15",
    AZURE_MODEL: "gpt-4",
    
    // Google Gemini Configuration
    GEMINI_API_KEY: "YOUR_GEMINI_KEY_HERE",
    GEMINI_API_ENDPOINT: "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent",
    GEMINI_MODEL: "gemini-pro",
    
    // xAI Grok Configuration
    GROK_API_KEY: "YOUR_GROK_KEY_HERE",
    GROK_API_ENDPOINT: "https://api.grok.x/v1/chat/completions",
    GROK_MODEL: "grok-1",
    
    // DeepSeek Configuration
    DEEPSEEK_API_KEY: "YOUR_DEEPSEEK_KEY_HERE",
    DEEPSEEK_API_ENDPOINT: "https://api.deepseek.com/v1/chat/completions",
    DEEPSEEK_MODEL: "deepseek-chat",
    
    // Common Settings
    TEMPERATURE: 0.7,
    MAX_TOKENS: 1000,
    
    // ECLOF Kenya Brand Colors - update these with the actual brand colors from the logo
    BRAND_COLORS: {
        primaryColor: "#006633", // Green - adjust this to match the actual green in the logo
        secondaryColor: "#CC9900", // Gold/Yellow - adjust this to match the actual gold/yellow in the logo
        textColor: "#333333",
        lightBackground: "#f9f9f9",
        borderColor: "#dddddd"
    }
};