import AuctionSection from "@/components/AuctionSection";
import BlogPostsSection from "@/components/BlogPostsSection";
import CategorySection from "@/components/CategorySection";
import ExclusiveNFTDrops from "@/components/ExclusiveNFTDrops";
import NFTMarketplaceHero from "@/components/NFTMarketplaceHero";
import TopSellersSection from "@/components/TopSellersSection";
import WalletSection from "@/components/WalletSection";


export default function Home() {
  return (
    <>
    < NFTMarketplaceHero />
    < WalletSection />
    < AuctionSection />
    < CategorySection />
    < TopSellersSection />
    < ExclusiveNFTDrops />
    < BlogPostsSection />
    </>
  );
}
