import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Aboutusinthenews = () => {

    const car = [
        {
            id: 1,
            url: 'https://www.pepperfry.ltd/wp-content/uploads/2023/03/Rectangle-4310.jpg',
            date: 'SEP 13, 2022',
            title: 'Pepperfry Appoints Two Independent Directors',
            information: 'Furniture retailer Pepperfry, on Tuesday announced the appointment of OnMobile chief Sanjay Baweja and Stonesoup.in co-founder Malini Parmar as independent directors on its board.',
        },
        {
            id: 2,
            url: 'https://www.pepperfry.ltd/wp-content/uploads/2023/03/Rectangle-4311.jpg',
            date: 'OCT 7, 2022',
            title: 'Crunching delivery window: The sooner the better',
            information: 'Pepperfry looks to expand its 24-hrs-to-doorstep service.',
        },
        {
            id: 3,
            url: 'https://www.pepperfry.ltd/wp-content/uploads/2023/03/shutterstock_1949071369-3.jpg',
            date: 'SEP 13, 2022',
            title: 'Why Pepperfry isn’t worried about the entry of IKEA or Pottery Barn ',
            information: '“When a player like this comes in, we’re happy; we are all collectively going to organise the unorganised sector,” explains Murty.',
        },
    ]




    return (
        <View style={styles.container}>
            <View style={styles.innercontainer}>

                <View style={{marginTop:15,marginBottom:20}}>
                      <Text style={{color:'black',fontSize:32,fontWeight:'bold',textAlign:'center'}}>
                        IN THE NEWS
                      </Text>
                </View>

                {car.map((user) => (

                    <View style={styles.subcontainer} key={user.id}>
                        <View style={{ marginBottom: 2 }}>
                            <Image source={{ uri: user.url }} style={{ width: 'auto', height: 228, resizeMode: 'contain' }} />
                        </View>


                        <View style={styles.subinnercontainer}>

                            <View style={{ marginVertical: 12 }}>
                                <Text style={{ textAlign: 'right', color: 'grey', fontSize: 16, fontWeight: '400' }}>
                                    {user.date}
                                </Text>
                            </View>

                            <View>
                                <Text style={{ fontWeight: '500', fontSize: 20, color: 'black', textAlign: 'justify', lineHeight: 26 }}>
                                    {user.title}
                                </Text>
                            </View>

                            <View style={{ marginTop: 8 }}>
                                <Text style={{ fontSize: 18, color: 'black', fontWeight: '400', lineHeight: 26, paddingHorizontal: 2 }}>
                                    {user.information}
                                </Text>
                            </View>

                            <View style={{ marginBottom: 32 }}>
                                <Text style={styles.readmorelink}>
                                    Read more
                                </Text>
                            </View>

                        </View>


                    </View>


                ))}


            </View>

        </View>
    )
}

export default Aboutusinthenews;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
    },
    innercontainer: {
        flex: 1,
        marginHorizontal: 20,

        // borderColor:'black',
        // borderWidth:2
    },
    subcontainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F0F8FF',
        marginBottom:30
    },
    subinnercontainer: {
        flex: 1,
        flexDirection: 'column',
        marginHorizontal: 12
    },
    readmorelink: {
        color: '#ff4500',
        fontSize: 16,
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid',
        textAlign: 'justify',
        marginTop: 4,
    },
})