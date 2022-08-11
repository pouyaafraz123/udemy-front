import Layout from "../../../containers/Layout/Layout";
import FeatureSection from "./Feature/FeatureSection";
import FeedbackSection from "./Feedback/FeedbackSection";
import Questions from "./Questions/Questions";

const Body = () => {
    return (
        <>
            <Layout>
                <FeatureSection/>
                <Questions />
                <FeedbackSection/>
            </Layout>
        </>
    );
}

export default Body;