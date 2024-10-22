"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const GradientText = ({ children }: { children: React.ReactNode }) => (
  <span className="text-transparent bg-clip-text bg-gradient-to-tr from-red-700 via-red-500 via-pink-500 via-purple-500 via-purple-700 via-blue-700 to-blue-500">
    {children}
  </span>
);

const PageHeader = () => (
  <header className="text-center mb-12">
    <h1 className="pokemon-solid text-6xl mb-2" style={{ color: '#2a75bb', WebkitTextStroke: '2px #ffcb05' }}>
      Pokéfarm
    </h1>
    <p className="press-start-2p-regular text-sm mb-8">
      <GradientText>Pulse Version</GradientText>
    </p>
  </header>
);

const OptionsPage = ({ onBack, onSelectOption }: { onBack: () => void; onSelectOption: (option: string) => void }) => (
  <div className="flex flex-col items-center justify-center h-full">
    <PageHeader />
    <div className="bg-white border-8 border-black p-8 rounded-lg w-80">
      <h2 className="pokemon-solid text-2xl mb-4 text-center">Menu</h2>
      {['Pokédex', 'Pokémon', 'Bags', 'Upload Memes', 'Connect Wallet', 'Settings'].map((option) => (
        <button
          key={option}
          onClick={() => onSelectOption(option)}
          className="w-full text-left press-start-2p-regular text-sm py-2 px-4 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {option}
        </button>
      ))}
    </div>
    <button onClick={onBack} className="mt-4 mb-4 press-start-2p-regular text-sm px-4 py-2 border-2 border-black hover:bg-black hover:text-white">
      Back
    </button>
    <div>
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pokemon-red-red-sprite-ExLKFYfJwpYxcX6TQVwLpSGaj2SxNG.gif"
        alt="Pokemon Trainer"
        width={100}
        height={100}
      />
    </div>
  </div>
);

const StartFarmingPage = ({ onBack }: { onBack: () => void }) => (
  <div className="container mx-auto px-4 py-8">
    <PageHeader />
    <div className="text-box mb-8">
      <h2 className="text-2xl mb-4 pokemon-solid">Start Farming</h2>
      <p className="press-start-2p-regular mb-4">Welcome to the Pokéfarm! Here you can start farming your favorite Pokémon tokens and earn rewards.</p>
      <p className="press-start-2p-regular mb-4">Choose your farming strategy wisely and watch your assets grow!</p>
    </div>
    <button onClick={onBack} className="press-start-2p-regular text-sm px-4 py-2 border-2 border-black hover:bg-black hover:text-white">
      Back to Main Menu
    </button>
  </div>
);

const StakingOverviewPage = ({ onBack }: { onBack: () => void }) => (
  <div className="container mx-auto px-4 py-8">
    <PageHeader />
    <div className="text-box mb-8">
      <h2 className="text-2xl mb-4 pokemon-solid">Staking Overview</h2>
      <p className="press-start-2p-regular mb-4">Stake your Pokémon tokens to earn rewards and power up your portfolio!</p>
      <p className="press-start-2p-regular mb-4">You can stake your Squirtle, Blastoise, or Squirtle Squad tokens on this page.</p>
      <ul className="list-disc list-inside press-start-2p-regular">
        <li>Squirtle: 10% APY</li>
        <li>Blastoise: 15% APY</li>
        <li>Squirtle Squad: 20% APY</li>
      </ul>
    </div>
    <button onClick={onBack} className="press-start-2p-regular text-sm px-4 py-2 border-2 border-black hover:bg-black hover:text-white">
      Back to Main Menu
    </button>
  </div>
);

const LearnMorePage = ({ onBack }: { onBack: () => void }) => (
  <div className="container mx-auto px-4 py-8">
    <PageHeader />
    <div className="text-box mb-8">
      <h2 className="text-2xl mb-4 pokemon-solid">Learn More</h2>
      <p className="press-start-2p-regular mb-4">Pokéfarm is a unique DeFi platform that combines the fun of Pokémon with the power of blockchain technology.</p>
      <p className="press-start-2p-regular mb-4">Explore our ecosystem, learn about different farming strategies, and discover how to maximize your rewards!</p>
    </div>
    <button onClick={onBack} className="press-start-2p-regular text-sm px-4 py-2 border-2 border-black hover:bg-black hover:text-white">
      Back to Main Menu
    </button>
  </div>
);

export default function Component() {
  const [gameStarted, setGameStarted] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState('main');
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowTitle(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const startGame = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setGameStarted(true);
    }, 2000);
  };

  const enterPokéfarm = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setCurrentPage('options');
    }, 2000);
  };

  const handlePageInteraction = () => {
    if (!textVisible) {
      setTextVisible(true);
    }
  };

  return (
    <div className="min-h-screen w-full relative p-8" onClick={handlePageInteraction}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
        @import url('https://fonts.cdnfonts.com/css/pokemon-solid');

        .pokemon-solid {
          font-family: 'Pokemon Solid', sans-serif;
        }
        .press-start-2p-regular {
          font-family: 'Press Start 2P', cursive;
        }
        .pokeball-corner {
          position: absolute;
          width: 15px;
          height: 15px;
          background-image: url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aaxkid3f6-yhbJFll3eyf2ZtyxZ3eJsC1QPYI0KX.webp');
          background-size: cover;
        }
        .pokeball-tl { top: 4px; left: 4px; }
        .pokeball-tr { top: 4px; right: 4px; }
        .pokeball-bl { bottom: 4px; left: 4px; }
        .pokeball-br { bottom: 4px; right: 4px; }
        .text-box {
          background-color: white;
          border: 8px solid black;
          border-radius: 12px;
          padding: 16px;
        }
      `}</style>
      <div className="absolute inset-4 border-8 border-black bg-white rounded-lg">
        <div className="pokeball-corner pokeball-tl"></div>
        <div className="pokeball-corner pokeball-tr"></div>
        <div className="pokeball-corner pokeball-bl"></div>
        <div className="pokeball-corner pokeball-br"></div>
      </div>
      <div className="relative z-10 min-h-[calc(100vh-2rem)]">
        <AnimatePresence>
          {!gameStarted ? (
            <motion.div
              key="landing"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center h-full p-4"
            >
              {showTitle && (
                <div className="text-center">
                  <PageHeader />
                  <p className="text-sm mb-2 pokemon-solid">
                    A new world of DeFi farming and staking begins!
                  </p>
                  <p className="text-sm mb-8 pokemon-solid">
                    Powered by Pulsechain
                  </p>
                  {isLoading ? (
                    <div className="flex justify-center">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pixel-art-rolling-F8rXT2TH28yulTej7xiS5t2ra9cfQU.gif"
                        alt="Loading"
                        width={50}
                        height={50}
                      />
                    </div>
                  ) : (
                    <motion.button
                      onClick={startGame}
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                      className="px-4 py-2 border-2 border-black hover:bg-black hover:text-white press-start-2p-regular"
                    >
                      Press Start to Begin
                    </motion.button>
                  )}
                  <div className="mt-[150px] flex justify-center">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pokemon-pokememes-kodfYVDKFpyYO7tEK3CPPf1LCoCi5S.gif"
                      alt="Pokémon-inspired creature"
                      width={400}
                      height={400}
                    />
                  </div>
                </div>
              )}
            </motion.div>
          ) : currentPage === 'options' ? (
            <motion.div
              key="options"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <OptionsPage
                onBack={() => setCurrentPage('main')}
                onSelectOption={(option) => setCurrentPage(option.toLowerCase().replace(' ', '-'))}
              />
            </motion.div>
          ) : currentPage === 'start-farming' ? (
            <StartFarmingPage onBack={() => setCurrentPage('main')} />
          ) : currentPage === 'staking-overview' ? (
            <StakingOverviewPage onBack={() => setCurrentPage('main')} />
          ) : currentPage === 'learn-more' ? (
            <LearnMorePage onBack={() => setCurrentPage('main')} />
          ) : (
            <motion.div
              key="main"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="container mx-auto px-4 py-8"
            >
              <PageHeader />
              <div className="text-box mb-8">
                {textVisible && (
                  <>
                    <p className="mb-4 press-start-2p-regular">Explore the world of DeFi like never before! Collect rare tokens, evolve your assets, and become a DeFi Master.</p>
                    <p className="press-start-2p-regular">Pokéfarm is where the thrill of staking meets the adventure of farming. Choose your strategy, grow your rewards, and join us in the Pulsechain ecosystem!</p>
                  </>
                )}
              </div>
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <button onClick={() => setCurrentPage('start-farming')} className="px-4 py-2 bg-blue-500 text-white hover:bg-blue-600 press-start-2p-regular px-4 py-2 border-2 border-black hover:bg-black hover:text-white">
                  Start Farming
                </button>
                <button onClick={() => setCurrentPage('staking-overview')} className="px-4 py-2 bg-green-500 text-white hover:bg-green-600 press-start-2p-regular px-4 py-2 border-2 border-black hover:bg-black hover:text-white">
                  Staking Overview
                </button>
                <button onClick={() => setCurrentPage('learn-more')} className="px-4 py-2 bg-yellow-500 text-white hover:bg-yellow-600 press-start-2p-regular px-4 py-2 border-2 border-black hover:bg-black hover:text-white">
                  Learn More
                </button>
              </div>

              <main>
                <section className="mb-12">
                  <h2 className="text-2xl mb-4 pokemon-solid">Farm Your Rewards!</h2>
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="flex-1 mb-4 md:mb-0 md:mr-4 text-box">
                      {textVisible && (
                        <>
                          <p className="press-start-2p-regular mb-4">Catch the best APYs and cultivate your assets. Choose from a variety of farms with unique rewards, just like catching different types of Pokémon. The stronger your strategy, the higher your returns!</p>
                          <p className="press-start-2p-regular mb-4">Stake your Squirtle/PLS or Blastoise/PLS LP tokens to farm incredible rewards:</p>
                          <ul className="list-disc list-inside press-start-2p-regular">
                            <li>Squirtle/PLS LP: Earn 150% APY</li>
                            <li>Blastoise/PLS LP: Earn 300% APY</li>
                          </ul>
                        </>
                      )}
                    </div>
                    <div className="w-full md:w-1/3 text-center">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gggg-HhZMIcu4vcqGgonBQo8spEtNbwLMNF.gif"
                        alt="Squirtle"
                        width={100}
                        height={100}
                        className="inline-block mb-4"
                      />
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pokemon-blastoise-S8OhbdaTeaVXEl4Fo4oyyssqv2we53.gif"
                        alt="Blastoise"
                        width={100}
                        height={100}
                        className="inline-block mb-4"
                      />
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/O4k4-yanBZydSBo8Hi4RCQtR1sqWxf6QLPN.gif"
                        alt="Dancing Squirtle"
                        width={100}
                        height={100}
                        className="inline-block"
                      />
                    </div>
                  </div>
                </section>

                <section className="mb-12">
                  <h2 className="text-2xl mb-4 pokemon-solid">Stake and Grow Stronger!</h2>
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="flex-1 mb-4 md:mb-0 md:mr-4 text-box">
                      {textVisible && (
                        <p className="press-start-2p-regular">Evolve your holdings by staking tokens on Pokéfarm. Like leveling up your Pokémon, your tokens will grow stronger over time. Stake today and watch your earnings evolve with Pulsechain's speed and efficiency!</p>
                      )}
                    </div>
                    <div className="w-full md:w-1/3 text-center">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gengar-pokemon-wzgqKkZBfXtkrxxhPycXQI1qPR2IeS.gif"
                        alt="Gengar"
                        width={100}
                        height={100}
                        className="inline-block"
                      />
                    </div>
                  </div>
                </section>

                <section className="text-center mb-12">
                  <h2 className="text-2xl mb-4 pokemon-solid">Are you ready to become a DeFi Master?</h2>
                  {isLoading ? (
                    <div className="flex justify-center">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pixel-art-rolling-F8rXT2TH28yulTej7xiS5t2ra9cfQU.gif"
                        alt="Loading"
                        width={50}
                        height={50}
                      />
                    </div>
                  ) : (
                    <button
                      onClick={enterPokéfarm}
                      className="px-6 py-3 bg-red-500 text-white hover:bg-red-600 rounded-lg press-start-2p-regular px-4 py-2 border-2 border-black hover:bg-black hover:text-white"
                    >
                      Enter the Pokéfarm
                    </button>
                  )}
                </section>
              </main>

              <footer className="fixed bottom-0 left-0 right-0 text-center py-4 bg-white border-t-2 border-black">
                <div className="press-start-2p-regular text-sm">
                  Thank you for visiting Pokéfarm, where DeFi meets adventure. Powered by Pulse
                </div>
              </footer>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}