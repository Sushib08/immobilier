import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
// import styles from "../../styles/Home.module"
import Header from "../../components/sections/header";
import Footer from "../../components/sections/footer";
import styled from "styled-components";
import ButtonMessage from "../../components/elements/buttonMessage";
import ButtonFavoris from "../../components/elements/buttonFavoris";
import { ReturnTypeAsync } from "../../lib/common/interface";
import { getAllDocIds, getDocData } from "../../lib/posts";

const Description = styled.div``;

const Title = styled.h1`
  font-size: 50px;
  color: #c2ad74;
  font-weight: 600;
  text-align: center;
`;

const LodgmentTitle = styled.h2`
  font-size: 35px;
  font-weight: 600;
`;

const Dimension = styled.span`
  font-size: 30px;
`;

const Price = styled.span`
  font-weight: 600;
  color: #c2ad74;
  letter-spacing: 0.1rem;
`;

const City = styled.span`
  font-size: 20px;
  color: #707070;
  font-weight: 700;
`;

const Details = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

const OtherDetails = styled.div`
  max-width: 600px;
  color: #707070;
`;

interface IAchatBohem {
  postData: ReturnTypeAsync<typeof getDocData>;
}

const AchatBohem: NextPage<IAchatBohem> = (props) => {
  const { postData } = props;
  return (
    <div>
      <Head>
        <title>ORTHIMMO - Appart Bohem</title>
      </Head>

      <Header className={""} />

      <main className="w-full flex justify-center my-8">
        <div className="w-4/5">
          <Title className=" text-xl mb-6 text-[#C2AD74] font-bold">
            {postData.title}
          </Title>
          <Title />
          <Image
            className=" rounded-[50px] bg-center"
            priority
            src={`/image/achats/${postData.imgPath}`}
            objectFit="cover"
            width={1100}
            height={600}
            alt="houses"
          />
          <Description className="flex flex-col justify-between lg:flex-row my-12 ">
            <Details>
              <LodgmentTitle className="text-left text-4xl font-sans font-bold mb-2 md:(text-center)">
                {postData.title}
              </LodgmentTitle>
              <Dimension>{postData.superficie}</Dimension>
              <City>{postData.city}</City>
              <Price className="mt-2 text-lg">Prix : {postData.price}</Price>
              <div className="  flex  my-5">
                <ButtonFavoris fill="#ccc" />
                <ButtonMessage fill="#9f9f9f" tw="ml-2" />
              </div>
            </Details>
            <OtherDetails>
              <p className=" mb-4 mt-2">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Possimus quaerat eum temporibus placeat distinctio animi, ut
                molestiae, illum neque voluptatibus nemo iste doloremque in
                deleniti hic sunt amet vero praesentium. Lorem ipsum, dolor sit
                amet consectetur adipisicing elit. Voluptas suscipit dolorem,
                impedit adipisci rerum esse? Placeat aliquid doloremque impedit
                quas natus, omnis fugiat assumenda inventore modi sequi tenetur
                exercitationem obcaecati.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                rem iusto, deleniti doloribus omnis, cupiditate unde doloremque
                quam, facilis recusandae sed. Perferendis aperiam vitae ex
                harum, sint est iusto quibusdam?
              </p>
            </OtherDetails>
          </Description>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllDocIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getDocData(params!.id as string);
  return {
    props: {
      postData,
    },
  };
};

//   Post.getLayout = getLayout;

export default AchatBohem;
