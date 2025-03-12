'use client'
import CategoryItem from '@/components/CategoryItem'
import SectionHeading from './SectionHeading';
const CategorySection = () => {
    const categories = [
      {
        title: "Digital Art",
        images: [
          "/images/nft-item/category/01.jpg",
          "/images/nft-item/category/02.jpg",
          "/images/nft-item/category/03.jpg"
        ]
      },
      {
        title: "Music",
        images: [
          "/images/nft-item/category/04.jpg",
          "/images/nft-item/category/05.jpg",
          "/images/nft-item/category/06.jpg"
        ]
      },
      {
        title: "Domain Name",
        images: [
          "/images/nft-item/category/07.jpg",
          "/images/nft-item/category/08.jpg",
          "/images/nft-item/category/09.jpg"
        ]
      },
      {
        title: "Sports",
        images: [
          "/images/nft-item/category/10.jpg",
          "/images/nft-item/category/11.jpg",
          "/images/nft-item/category/12.jpg"
        ]
      },
      {
        title: "Utilities",
        images: [
          "/images/nft-item/category/13.jpg",
          "/images/nft-item/category/14.jpg",
          "/images/nft-item/category/15.jpg"
        ]
      },
      {
        title: "All NFT's",
        images: [
          "/images/nft-item/category/16.jpg",
          "/images/nft-item/category/17.jpg",
          "/images/nft-item/category/18.jpg"
        ]
      }
    ];
  
    return (
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading title="BROWSE BY CATERGORY" />
          
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <CategoryItem
                key={index}
                title={category.title}
                images={category.images}
              />
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default CategorySection;