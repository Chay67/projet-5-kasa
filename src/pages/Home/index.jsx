import Banner from "../../components/Banner";
import Gallery from "../../components/Gallery";
import imgHomeBanner from "../../assets/images/banner/homeBanner.png";
import useLocalData from "../../hooks/useLocalData";
import LoadingSpinner from "../../components/LoadingSpinner";

const Home = () => {
  const { data, loading, error } = useLocalData();


  return (
    <div className="home">
        <Banner title={<>Chez vous, <span>partout et ailleurs</span></>} image={imgHomeBanner} />
        {loading && (!data || !data.length) ? <LoadingSpinner /> : <Gallery data={data} />}
    </div>
  );
};

export default Home;
