import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Lock, Wallet, ChevronRight, ExternalLink, CheckCircle, AlertTriangle, Download, RefreshCw, Settings, Shield as Shield2, Key, Smartphone } from 'lucide-react';

interface CryptoPrice {
  symbol: string;
  price: number;
}

function App() {
  const [prices, setPrices] = useState<CryptoPrice[]>([
    { symbol: 'BTC', price: 0 },
    { symbol: 'ETH', price: 0 },
    { symbol: 'XRP', price: 0 },
    { symbol: 'DOGE', price: 0 },
    { symbol: 'ADA', price: 0 }
  ]);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    const updatePrices = () => {
      setPrices(prev => prev.map(crypto => ({
        ...crypto,
        price: Math.random() * (crypto.symbol === 'BTC' ? 50000 : crypto.symbol === 'ETH' ? 3000 : 2)
      })));
    };

    updatePrices();
    const interval = setInterval(updatePrices, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Crypto Ticker */}
      <div className="bg-trezor-dark text-white py-2 overflow-hidden">
        <div className="flex animate-[scroll_20s_linear_infinite]">
          {prices.map((crypto, index) => (
            <div key={index} className="flex items-center mx-4">
              <span className="font-bold">{crypto.symbol}:</span>
              <span className="ml-2">${crypto.price.toFixed(2)}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-r from-trezor-dark to-trezor-green text-white py-20"
      >
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Complete Guide to Trezor.io/start Setup</h1>
          <p className="text-xl mb-8">Your comprehensive resource for setting up and securing your Trezor hardware wallet</p>
          <a 
            href="https://trezor.io/start" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-trezor-dark px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all"
          >
            Begin Setup at Trezor.io/start <ChevronRight className="ml-2" />
          </a>
        </div>
      </motion.section>

      {/* Main Content */}
      <motion.section 
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 py-16"
      >
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Shield className="w-12 h-12 text-trezor-green mb-4" />
            <h3 className="text-xl font-semibold mb-4">Bank-Grade Security</h3>
            <p>Visit Trezor.io/start to begin securing your crypto assets with military-grade encryption and protection.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Lock className="w-12 h-12 text-trezor-green mb-4" />
            <h3 className="text-xl font-semibold mb-4">User-Friendly Setup</h3>
            <p>Simple step-by-step guide at Trezor.io/start ensures a smooth and secure wallet configuration process.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Wallet className="w-12 h-12 text-trezor-green mb-4" />
            <h3 className="text-xl font-semibold mb-4">Multi-Asset Support</h3>
            <p>Manage Bitcoin, Ethereum, and thousands of other cryptocurrencies from one secure device.</p>
          </div>
        </div>

        <div className="prose max-w-none">
          <h2 id="comprehensive-guide" className="text-3xl font-bold text-trezor-dark mb-8">Comprehensive Guide to Trezor Wallet Setup at Trezor.io/start</h2>
          
          <p className="text-lg mb-6">Welcome to your definitive guide for setting up your Trezor hardware wallet through Trezor.io/start. This comprehensive tutorial will walk you through every aspect of initializing, securing, and managing your cryptocurrency assets with your Trezor device.</p>

          <h3 className="text-2xl font-semibold text-trezor-dark mb-6">1. Getting Started with Trezor.io/start</h3>
          
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h4 className="text-xl font-semibold mb-4">Initial Setup Requirements</h4>
            <ul className="list-none space-y-3">
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-trezor-green mr-3" />
                A genuine Trezor device (Model One or Model T)
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-trezor-green mr-3" />
                USB cable (provided with your device)
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-trezor-green mr-3" />
                Computer with internet access
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-5 h-5 text-trezor-green mr-3" />
                Access to Trezor.io/start website
              </li>
            </ul>
          </div>

          <h3 className="text-2xl font-semibold text-trezor-dark mb-6">2. Verifying Your Trezor Device</h3>
          
          <div className="bg-yellow-50 p-6 rounded-lg mb-8">
            <h4 className="flex items-center text-xl font-semibold mb-4">
              <AlertTriangle className="w-6 h-6 text-yellow-600 mr-2" />
              Security Verification Steps
            </h4>
            <ul className="list-disc pl-6 space-y-3">
              <li>Check the holographic seal for tampering</li>
              <li>Verify package integrity</li>
              <li>Confirm authenticity through Trezor.io/start</li>
              <li>Inspect for any physical damage</li>
            </ul>
          </div>

          <h3 className="text-2xl font-semibold text-trezor-dark mb-6">3. Installing Trezor Suite</h3>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Download className="w-8 h-8 text-trezor-green mb-4" />
              <h4 className="text-xl font-semibold mb-4">Download Process</h4>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Visit Trezor.io/start</li>
                <li>Select your operating system</li>
                <li>Download Trezor Suite</li>
                <li>Verify the download signature</li>
              </ol>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Settings className="w-8 h-8 text-trezor-green mb-4" />
              <h4 className="text-xl font-semibold mb-4">Installation Steps</h4>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Run the installer</li>
                <li>Follow security prompts</li>
                <li>Complete installation</li>
                <li>Launch Trezor Suite</li>
              </ol>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-trezor-dark mb-6">4. Device Initialization at Trezor.io/start</h3>
          
          <div className="space-y-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-semibold mb-4">Step-by-Step Initialization</h4>
              <ol className="list-decimal pl-6 space-y-3">
                <li>Connect your Trezor to your computer</li>
                <li>Access Trezor.io/start through Trezor Suite</li>
                <li>Follow the on-screen instructions</li>
                <li>Create a new wallet or recover an existing one</li>
                <li>Set up your PIN protection</li>
                <li>Generate and secure your recovery seed</li>
              </ol>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-trezor-dark mb-6">5. Security Best Practices</h3>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Shield2 className="w-8 h-8 text-trezor-green mb-4" />
              <h4 className="text-lg font-semibold mb-3">Physical Security</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Store in a secure location</li>
                <li>Keep backup in separate location</li>
                <li>Protect from physical damage</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Key className="w-8 h-8 text-trezor-green mb-4" />
              <h4 className="text-lg font-semibold mb-3">Recovery Seed</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Write down manually</li>
                <li>Never store digitally</li>
                <li>Use metal backup solution</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Smartphone className="w-8 h-8 text-trezor-green mb-4" />
              <h4 className="text-lg font-semibold mb-3">Device Management</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Regular firmware updates</li>
                <li>Strong PIN selection</li>
                <li>Enable all security features</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-trezor-dark mb-6">6. Advanced Features and Tips</h3>
          
          <div className="space-y-6 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Enhanced Security Options</h4>
              <ul className="list-disc pl-6 space-y-3">
                <li>Passphrase protection for additional security layer</li>
                <li>Multiple wallet accounts for privacy</li>
                <li>Hidden wallets for plausible deniability</li>
                <li>Regular security audits and checks</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-semibold text-trezor-dark mb-6">7. Troubleshooting Common Issues</h3>
          
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h4 className="text-xl font-semibold mb-4">Quick Solutions</h4>
            <ul className="list-disc pl-6 space-y-3">
              <li>Device not recognized: Check USB connection and cable</li>
              <li>Bridge issues: Reinstall Trezor Bridge</li>
              <li>Firmware problems: Visit Trezor.io/start for updates</li>
              <li>Connection errors: Try different USB ports</li>
            </ul>
          </div>

          <h3 className="text-2xl font-semibold text-trezor-dark mb-6">8. Regular Maintenance</h3>
          
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <RefreshCw className="w-8 h-8 text-trezor-green mb-4" />
            <h4 className="text-xl font-semibold mb-4">Maintenance Schedule</h4>
            <ul className="list-disc pl-6 space-y-3">
              <li>Monthly firmware checks at Trezor.io/start</li>
              <li>Quarterly security audit</li>
              <li>Semi-annual recovery seed verification</li>
              <li>Annual backup review and update</li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-trezor-dark to-trezor-green text-white rounded-lg p-8 mt-12">
          <h3 className="text-2xl font-bold mb-4">Ready to Secure Your Digital Assets?</h3>
          <p className="mb-6">Visit Trezor.io/start now to begin your journey towards complete cryptocurrency security with the world's most trusted hardware wallet.</p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="https://trezor.io/start" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-trezor-dark px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all"
            >
              Get Started Now <ExternalLink className="ml-2" />
            </a>
            <a 
              href="https://trezor.io/start" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-trezor-dark transition-all"
            >
              Learn More <ChevronRight className="ml-2" />
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default App;