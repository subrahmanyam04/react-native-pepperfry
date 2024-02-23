import Aboutuslayout from "../components/Aboutuslayout";
import controls from "../components/Imports";

const Aboutus = () => {
    return (
        <controls.SafeAreaView>
            <controls.PagesTopborder />
            <controls.ScrollView bounces={false} alwaysBounceHorizontal={false} alwaysBounceVertical={false} style={styles.scrollbackground}>
                <Aboutuslayout />
            </controls.ScrollView>
        </controls.SafeAreaView>
    )
}
export default Aboutus;
const styles = controls.StyleSheet.create({ scrollbackground: { backgroundColor: 'white' }, })