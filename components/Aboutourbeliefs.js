import React from "react";
import controls from "./Imports";

const Aboutourbeliefs = () => {
    const beliefsdata = [
        {
            id: 1, imgurl: 'https://www.pepperfry.ltd/wp-content/uploads/2023/03/Frame-427320329.jpg', imgtitle: "OWN, DON'T RENT", imgdes: 'Revolutions are won by true believers. Be inspiring'
        },
        {
            id: 2, imgurl: 'https://www.pepperfry.ltd/wp-content/uploads/2023/03/Frame-427320330.jpg', imgtitle: 'MAKE MAGIC', imgdes: 'Find the gap between perception and reality. Seek breakthroughs that will stand the test of time. Treat the world as a puzzle to be solved with enthusiasm.'
        },
        {
            id: 3, imgurl: 'https://www.pepperfry.ltd/wp-content/uploads/2023/03/Frame-427320383.jpg', imgtitle: 'BE GRITTY', imgdes: 'When faced with challenges, put everything you have on the line to overcome them.'
        },
        {
            id: 4, imgurl: 'https://www.pepperfry.ltd/wp-content/uploads/2023/03/Frame-427320382.jpg', imgtitle: 'HUSTLE', imgdes: 'Get more done with less. Work longer, harder and smarter, not just two out of three.'
        },
        {
            id: 5, imgurl: 'https://www.pepperfry.ltd/wp-content/uploads/2023/03/Frame-427320331.jpg', imgtitle: 'STEP ON TOES', imgdes: 'The best idea must always win. Don’t sacrifice the truth to ‘be friends’ and don’t hesitate to challenge the boss. Confront. Sometimes the world and its institutions need to change for the future to get a chance.'
        },
        {
            id: 6, imgurl: 'https://www.pepperfry.ltd/wp-content/uploads/2023/03/Rectangle-4319.jpg', imgtitle: 'BE YOURSELF', imgdes: 'Each of us should be authentic. Celebrate being different.'
        },
    ]
    return (
        <controls.View style={styles.container}>
            <controls.View style={styles.innercontainer}>
                <controls.View style={styles.headcontainer}>
                    <controls.Text style={styles.headtext}>OUR BELIEFS</controls.Text>
                </controls.View>
                {beliefsdata.map((data) => (
                    <controls.View style={styles.informationcontainer} key={data.id}>
                        <controls.View style={styles.imgcontainer}>
                            <controls.Image source={{ uri: data.imgurl }} alt="hbdf" style={styles.img} />
                        </controls.View>
                        <controls.View>
                            <controls.Text style={styles.imgtitle}>{data.imgtitle}</controls.Text>
                        </controls.View>
                        <controls.View>
                            <controls.Text style={styles.imgdescription}>{data.imgdes}</controls.Text>
                        </controls.View>
                    </controls.View>
                ))}
            </controls.View>
        </controls.View>
    )
}
export default Aboutourbeliefs
const styles = controls.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F8FF',
        marginTop: 10
    },
    innercontainer: {
        flex: 1,
        marginHorizontal: 22,
        flexDirection: 'column'
    },
    informationcontainer: {
        flex: 1,
        flexDirection: 'column',
        marginBottom: 26
    },
    headcontainer: {
        marginTop: 34,
        marginBottom: 20
    },
    headtext: {
        textAlign: 'center',
        color: '#000000',
        fontSize: 26,
        fontWeight: '900'
    },
    img: {
        height: 220,
        width: '100%',
        resizeMode: 'contain'
    },
    imgtitle: {
        color: '#000000',
        fontSize: 16,
        fontWeight: '500',
        textAlign: 'center',
        marginTop: 2
    },
    imgdescription: {
        color: '#000000',
        fontSize: 12,
        fontWeight: '400',
        textAlign: 'center',
        marginVertical: 4
    }
})