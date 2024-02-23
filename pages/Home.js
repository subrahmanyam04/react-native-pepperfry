import Homebanner from "../components/Homebanner";
import Homeminislider from "../components/Homeminislider";
import Homebanner2 from "../components/Homebanner2";
import Homestatictime from "../components/Homestatictime";
import Homeslider2 from "../components/Homeslider2";
import Homecard from "../components/Homecard";
import Homeslider3 from "../components/Homeslider3";
import Homecard2 from "../components/Homecard2";
import Homecard3 from "../components/Homecard3";
import Homebanner3 from "../components/Homebanner3";
import Homefooter from "../components/Homefooter";
import Homedbcardslider from "../components/Homedbcardslider";
import Homedbcardslider2 from "../components/Homedbcardslider2";
import controls from "../components/Imports";

const Home = () => {
    return (
        <controls.View style={styles.container}>
            <controls.PagesTopborder />
            <controls.SafeAreaView>
                <controls.ScrollView alwaysBounceVertical={false} bounces={false} style={[{ backgroundColor: 'white' }]}>
                    <controls.View style={styles.container}>
                        <Homedbcardslider />
                        <Homebanner />
                        <Homeminislider />
                        <Homebanner2 />
                        <Homestatictime />
                        <Homeslider2 />
                        <Homecard />
                        <Homeslider3 />
                        <Homecard2 />
                        <Homedbcardslider2 />
                        <Homecard3 />
                        <Homebanner3 />
                        <Homefooter />
                    </controls.View>
                </controls.ScrollView>
            </controls.SafeAreaView>
        </controls.View>
    )
}
export default Home;
const styles = controls.StyleSheet.create({ container: { flex: 1, }, })