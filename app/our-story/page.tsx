// @ts-nocheck

import {Box, Flex} from "@chakra-ui/react";
import {Navbar} from "@/app/components/navigation/navbar";
import {OurStoryHeader} from "@/app/components/our-story/Header";
import {Stats} from "@/app/components/our-story/Numbers";
import SmoothScroll from "@/app/SmoothScroll";
import {sanityFetch} from "@/app/sanity/client";
import {urlFor} from "@/app/sanity/urlFor";
import {OurStoryClientWrapper} from "@/app/components/our-story/OurStoryClientWrapper";
import {Footer} from "@/app/components/footer/Footer";

const BRANDS_QUERY = `*[_type == "brands"] {
  brand_name,
  "slug": slug.current,
  "mainImage": mainImage.asset->url,
  "categories": categories[]->title
}`;

const OUR_STORY_QUERY = `*[_type == "ourStory"]{
  header,
  stats,
  timeline,
  gallery
}[0]`;

const OurStoryPage = async () => {
    const brands = await sanityFetch({
        query: BRANDS_QUERY,
    });

    const ourStory = await sanityFetch({
        query: OUR_STORY_QUERY,
    });

    const timelineWithImages = ourStory.timeline.map(item => ({
        ...item,
        imageUrl: item.image ? urlFor(item.image).url() : null
    }));

    const imageUrlHeader = ourStory.header?.backgroundImage ? urlFor(ourStory.header.backgroundImage).url() : null;

    const galleryWithImages = ourStory.gallery.map(item => ({
        ...item,
        imageUrl: item ? urlFor(item).url() : null
    }));

    return (
        <>
            <Navbar brands={brands}/>
            {/*<SmoothScroll>*/}
                <Flex direction="column">
                    <OurStoryHeader header={ourStory?.header} imageUrlHeader={imageUrlHeader}/>
                    <Stats stats={ourStory?.stats}/>
                    <OurStoryClientWrapper
                        timelineWithImages={timelineWithImages}
                        galleryWithImages={galleryWithImages}
                        brands={brands}
                    />
                </Flex>
                {/*<Box position="relative" mt={10}>*/}
                {/*    <Footer brands={brands}/>*/}
                {/*</Box>*/}
            {/*</SmoothScroll>*/}

        </>
    );
};

export default OurStoryPage;
