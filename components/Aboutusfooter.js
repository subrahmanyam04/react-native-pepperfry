import React from "react";
import controls from "./Imports";
const Aboutusfooter = () => {
    const headings = [
        {
            id: 1,
            head1: 'WHAT ARE WE',
            head2: 'WHAT WE DO'
        },
        {
            id: 2,
            head1: 'ESG INITIATIVES',
            head2: 'INVESTOR RELATIONS'
        }
    ]
    const socialicons = [
        {
            id: 1,
            iconname: 'instagram-with-circle',
            color: '#FF2800',
            url: 'https://help.instagram.com/372819389498306'
        },
        {
            id: 2,
            iconname: 'facebook-with-circle',
            color: '#3b5998',
            url: 'https://www.google.com/search?q=facebook&rlz=1C1UEAD_enIN999IN999&oq=fac&gs_lcrp=EgZjaHJvbWUqDwgAECMYJxjjAhiABBiKBTIPCAAQIxgnGOMCGIAEGIoFMhIIARAuGCcYxwEY0QMYgAQYigUyBggCEEUYQDIGCAMQRRg5MhIIBBAAGBQYgwEYhwIYsQMYgAQyDQgFEAAYgwEYsQMYgAQyDAgGEAAYQxiABBiKBTIHCAcQABiABNIBCTM2MjFqMGoxNagCALACAA&sourceid=chrome&ie=UTF-8'
        },

        {
            id: 4,
            iconname: 'linkedin-with-circle',
            color: 'blue',
            url: 'https://in.linkedin.com/'
        },

        {
            id: 6,
            iconname: 'twitter-with-circle',
            color: '#00ABFF',
            url: 'https://twitter.com/?lang=en'
        },
    ]
    return (
        <controls.View style={styles.container}>
            <controls.View style={styles.innercontainer}>
                <controls.View style={styles.headingtextcontainer}>
                    <controls.Text style={styles.headingtext}>QUICK LINKS</controls.Text>
                </controls.View>
                {headings.map((titles) => (
                    <controls.View style={styles.headingrowcontainers} key={titles.id}>
                        <controls.View style={styles.headingrowcontainerinner}>
                            <controls.Text style={styles.headingrowcontainerinnertext}>{titles.head1}</controls.Text>
                        </controls.View>
                        <controls.View style={styles.headingrowcontainerinner}>
                            <controls.Text style={styles.headingrowcontainerinnertext}>{titles.head2}</controls.Text>
                        </controls.View>
                    </controls.View>
                ))}
                <controls.View style={styles.socialcontainer}>
                    <controls.View><controls.Text style={styles.liketext}>JOIN OUR COMMUNITY</controls.Text></controls.View>
                    <controls.View style={styles.insideinnercontainer}>
                        {socialicons.map((media) => (
                            <controls.TouchableOpacity key={media.id} style={styles.iconspaces} onPress={() => controls.Linking.openURL(media.url)}>
                                <controls.Entypo name={media.iconname} size={36} color={media.color} />
                            </controls.TouchableOpacity>
                        ))}
                    </controls.View>
                </controls.View>
                <controls.View style={styles.policycontainer}>
                    <controls.View><controls.Text style={styles.policytext}>PRIVACY POLICY</controls.Text></controls.View>
                    <controls.View><controls.Text style={styles.policytext}>TERMS OF USE</controls.Text></controls.View>
                    <controls.View><controls.Text style={styles.policytext}>DATA & SECURITY</controls.Text></controls.View>
                </controls.View>
            </controls.View>
        </controls.View>
    )
}
export default Aboutusfooter;
const styles = controls.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F8FF',
        marginTop: 38
    },
    innercontainer: {
        flex: 1,
        flexDirection: 'column',
        marginHorizontal: 22
    },
    headingrowcontainers: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 15,
    },
    headingrowcontainerinner: {
        width: '50%'
    },
    headingrowcontainerinnertext: {
        fontSize: 14,
        fontWeight: '300',
        color: '#2A292B',
        textAlign: 'center'
    },
    insideinnercontainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 8
    },
    iconspaces: {
        marginHorizontal: 1
    },
    liketext: {
        color: 'black',
        fontWeight: '600',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20
    },
    socialcontainer: {
        marginTop: 20,
        marginBottom: 22
    },
    policycontainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-around",
        marginBottom: 8,
        marginTop: 16
    },
    policytext: {
        fontSize: 12,
        color: 'black'
    },
    headingtextcontainer: {
        marginTop: 16,
        marginBottom: 10
    },
    headingtext: {
        fontSize: 20,
        color: 'black',
        fontWeight: '600',
        textAlign: 'center'
    }
})