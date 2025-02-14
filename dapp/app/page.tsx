import Link from "next/link"
import Image from "next/image"
import { MoonIcon, SunIcon, Sword } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <Image
        src="/village-mountains.webp"
        alt="Village and mountains"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="opacity-30"
      />
      <div className="relative z-10">
        <header className="container mx-auto p-4">
          <nav className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-white">Baby Jin</h1>
            <ul className="flex space-x-4">
              <li>
                <Link href="#story" className="text-white hover:text-blue-300 transition-colors">
                  Story
                </Link>
              </li>
              <li>
                <Link href="#tokenomics" className="text-white hover:text-blue-300 transition-colors">
                  Tokenomics
                </Link>
              </li>
              <li>
                <Link href="#roadmap" className="text-white hover:text-blue-300 transition-colors">
                  Roadmap
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <main className="container mx-auto p-4 text-white">
          <section id="hero" className="text-center py-20">
            <h2 className="text-5xl font-bold mb-4">Baby Jin: The Warrior Cub</h2>
            <p className="text-xl mb-8">Join the legend of the Eternal Peaks with $BBJIN</p>
            <div className="flex justify-center space-x-4">
              <MoonIcon className="w-12 h-12 text-blue-300" />
              <Sword className="w-12 h-12 text-blue-300" />
              <SunIcon className="w-12 h-12 text-blue-300" />
            </div>
          </section>

          <section id="story" className="mb-20">
            <h3 className="text-3xl font-bold mb-4">The Legend Begins</h3>
            <div className="space-y-4 bg-blue-900 bg-opacity-75 p-6 rounded-lg">
              <p>
                In the land of the Eternal Peaks, where the mist never fully fades and the wind carries whispers of
                ancient warriors, a young cub was born under the light of a crimson moon. His name was Baby Jin, the
                heir to the legendary warrior, Jin the White Tiger.
              </p>
              <p>
                From the moment he opened his icy blue eyes, it was clear that Jin&apos;s legacy would live on through him.
                Though small, Baby Jin possessed a spirit as fierce as a raging storm and a heart as pure as a mountain
                spring. Unlike his father, who had mastered the way of the blade through years of discipline and
                hardship, Baby Jin was playful, curious, and often found himself in trouble—whether it was sneaking out
                to spar with wandering swordsmen or chasing fireflies when he should have been meditating.
              </p>
              <p>
                But deep inside, Baby Jin knew that one day, the weight of his lineage would rest on his tiny shoulders.
                Under his father&apos;s watchful eye, he trained tirelessly, his small hands gripping a katana too big for
                him, his determination unshaken. The world saw him as just a cub, but within him burned the soul of a
                warrior.
              </p>
              <p>
                Legends whisper that one day, when darkness threatens to consume the Eternal Peaks, Baby Jin will
                rise—not as a child, but as a warrior whose name will be sung across the ages. Until then, he trains,
                learns, and grows, guided by the wisdom of his father and the boundless courage of his own heart.
              </p>
              <p>For even the mightiest warriors were once just cubs dreaming of battle.</p>
            </div>
          </section>

          <section id="tokenomics" className="mb-20">
            <h3 className="text-3xl font-bold mb-4">$BBJIN Tokenomics</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-blue-900 bg-opacity-75 p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-2">Total Supply</h4>
                <p>1,000,000,000 $BBJIN</p>
              </div>
              <div className="bg-blue-900 bg-opacity-75 p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-2">Distribution</h4>
                <ul className="list-disc list-inside">
                  <li>69.5% Liquidity Pool</li>
                  <li>15% Team</li>
                  <li>10% Community Rewards</li>
                  <li>5.5% Dev Holdings (to be burned)</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 bg-blue-900 bg-opacity-75 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-2">Dev Holdings Burn</h4>
              <p>The 5.5% allocated to Dev Holdings will be burned, reducing the total supply and potentially increasing the value for holders.</p>
            </div>
          </section>


          <section id="roadmap" className="mb-20">
            <h3 className="text-3xl font-bold mb-4">Roadmap</h3>
            <div className="space-y-8">
              <div className="bg-blue-900 bg-opacity-75 p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-2">Phase 1: The Cub Awakens</h4>
                <ul className="list-disc list-inside">
                  <li>Launch $BBJIN token</li>
                  <li>Community building and social media presence</li>
                  <li>Listing on decentralized exchanges</li>
                </ul>
              </div>
              <div className="bg-blue-900 bg-opacity-75 p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-2">Phase 2: Training Begins</h4>
                <ul className="list-disc list-inside">
                  <li>Develop Baby Jin NFT collection</li>
                  <li>Implement staking rewards for $BBJIN holders</li>
                  <li>Launch Baby Jin merchandise store</li>
                </ul>
              </div>
              <div className="bg-blue-900 bg-opacity-75 p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-2">Phase 3: The Warrior&apos;s Path</h4>
                <ul className="list-disc list-inside">
                  <li>Introduce AI-powered Baby Jin virtual assistant</li>
                  <li>Develop blockchain-based battle game featuring Baby Jin</li>
                  <li>Establish partnerships with major crypto projects</li>
                </ul>
              </div>
              <div className="bg-blue-900 bg-opacity-75 p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-2">Phase 4: Legend Ascends</h4>
                <ul className="list-disc list-inside">
                  <li>Launch Baby Jin metaverse experience</li>
                  <li>Implement AI-driven tokenomics optimization</li>
                  <li>Establish Baby Jin Foundation for supporting young martial artists</li>
                </ul>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-blue-900 bg-opacity-75 py-4 text-center text-white">
          <p>&copy; 2025 Baby Jin Project. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}

