import type { NextPage } from "next";
import Image from "next/image";
import PageLayout from "../components/PageLayout";

const Home: NextPage = () => {
  const mobile = true;

  return (
    <PageLayout title="home">
      <div className="">
        {/* <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} className="bg-green-400" /> */}
        {mobile ? (
          <div>
            <p className="text-xs text-gray-500">J. S. Bautista Parra</p>
            <h1 className="text-5xl font-bold text-orange-600 ">Frontend Developer</h1>
          </div>
        ) : (
          <div>
            <p className="text-xs text-gray-500">I'm Johan,</p>
            <p className="text-gray-500">
              I’m a front end developer specializing in projects with technologies for build SPA’s i like the design
              also the user experience. If you knowmy last projects click here or if you know the artist behind this
              spectacular pictures for your works, please click here. Thanks!
            </p>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default Home;
