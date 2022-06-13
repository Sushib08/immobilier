import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import Header from "../../components/sections/header";
import Footer from "../../components/sections/footer";
import styled from "styled-components";
import ButtonMessage from "../../components/elements/buttonMessage";
import ButtonFavoris from "../../components/elements/buttonFavoris";
import { getAllDocIds, getDocData } from "../../lib/locations";
import { ReturnTypeAsync } from "../../common/interface";

const Description = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
  margin-bottom: 30px;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const Title = styled.h1`
  font-size: 50px;
  margin-bottom: 25px;
  color: #c2ad74;
  font-weight: 600;
  letter-spacing: 0.5rem;
  text-align: center;
`;

const LodgmentTitle = styled.h2`
  font-size: 35px;
  font-family: "Segoe UI"
  font-weight: 600;
  margin-bottom: 10px;
`;

const Dimension = styled.h3`
  font-size: 30px;
  font-family: "Segoe UI"
  margin-bottom: 5px;
`;

const Price = styled.h2`
  font-size: 30px;
  font-family: "Segoe UI";
  font-weight: 600;
  margin-bottom: 25px;
  color: #c2ad74;
  letter-spacing: 0.1rem;
`;

const City = styled.p`
  font-size: 20px;
  font-family: "Georgia";
  color: #707070;
  font-weight: 700;
  margin-bottom: 25px;
`;

const Details = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: 25px;

  @media (max-width: 1024px) {
    margin: 0;
    align-items: center;
  }
`;

const OtherDetails = styled.div`
  max-width: 600px;
  color: #707070;
  margin-left: 40px;

  @media (max-width: 1024px) {
    margin-left: 25px;
  }
`;


interface IPost {
    postData: ReturnTypeAsync<typeof getDocData>;
  }

const Locations: NextPage<IPost> = (props) => {
  const {postData} = props;
  return (
    <div>
      <Head>
        <title>Orthimmo - {postData.title}</title>
      </Head>

      <Header className={""} />

      <main>
      <div>
      <Title className=" text-5xl mb-6 text-[#C2AD74] font-bold">
      {postData.title}
      </Title>
      <Title />
      <Image
        className=" rounded-[50px] bg-center"
        priority
        src={`/image/locations/${postData.imgPath}`}
        width={1100}
        height={600}
        alt={postData.title}
      />
      <Description>
        <Details>
          <LodgmentTitle className=" text-4xl font-sans font-bold mb-2">
           {postData.room}
          </LodgmentTitle>
          <Dimension> {postData.superficie}</Dimension>
          <City> {postData.city}</City>
          <Price>Prix : {postData.price}</Price>
          <div className=" flex justify-center">
            <div className=" mx-1">
              <ButtonFavoris fill="red" />
            </div>
            <div className=" mx-1"></div>
            <ButtonMessage fill="" />
          </div>
        </Details>
        <OtherDetails>
          <p className=" mb-4 mt-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
            quaerat eum temporibus placeat distinctio animi, ut molestiae, illum
            neque voluptatibus nemo iste doloremque in deleniti hic sunt amet
            vero praesentium. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Voluptas suscipit dolorem, impedit adipisci rerum
            esse? Placeat aliquid doloremque impedit quas natus, omnis fugiat
            assumenda inventore modi sequi tenetur exercitationem obcaecati.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi rem
            iusto, deleniti doloribus omnis, cupiditate unde doloremque quam,
            facilis recusandae sed. Perferendis aperiam vitae ex harum, sint est
            iusto quibusdam?
          </p>
        </OtherDetails>
      </Description>
    </div>
      </main>

      <Footer className="" />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllDocIds();
    return {
      paths,
      fallback: false
    };
  };
  
  export const getStaticProps: GetStaticProps = async ({ params }) => {
    const postData = await getDocData(params!.id as string);
    return {
      props: {
        postData
      }
    };
  };
  
//   Post.getLayout = getLayout;

export default Locations;