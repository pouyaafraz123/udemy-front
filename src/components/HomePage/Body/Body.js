import Layout from "../../../containers/Layout/Layout";
import FeatureSection from "./FeatureSection";
import FeedbackSection from "./FeedbackSection";

const Body = () => {
    return (
        <>
            <Layout>
                <FeatureSection/>
                <FeedbackSection/>
            </Layout>
        </>
    );
}

export default Body;