import React from "react";
import controls from "./Imports";

const Tabcard23infor = () => {
    return (
        <>
            <controls.View style={{ marginTop: 8, flex: 1, flexDirection: 'row' }}>
                <controls.View style={{ borderColor: 'grey', borderWidth: 1, padding: 3, borderRadius: 30, marginHorizontal: 10 }}>
                    <controls.Image source={{ uri: "https://cdn.pixabay.com/photo/2013/07/12/19/20/rainbow-colors-154569_1280.png" }} style={{ height: 14, width: 14, resizeMode: 'contain' }} />
                </controls.View>
                <controls.View>
                    <controls.Text style={{ color: "#242424", fontWeight: '800', fontSize: 12, marginTop: 1 }}>+4 more colors</controls.Text>
                </controls.View>
            </controls.View>
            <controls.View style={{ flex: 1, flexDirection: 'column', marginHorizontal: 4 }}>
                <controls.View><controls.Text style={{ color: '#292929', fontWeight: '700', fontSize: 14, lineHeight: 20, marginTop: 6 }}>Baley 3 Seater Sofa In Lama Black Colour</controls.Text></controls.View>
                <controls.View><controls.Text style={{ color: '#707070', fontWeight: '700', fontSize: 12, marginVertical: 4 }}>By Trevi Furniture</controls.Text></controls.View>
                <controls.View style={{ flex: 1, flexDirection: 'row' }}>
                    <controls.Entypo name="star" size={16} color="rgb(255, 169, 134)" />
                    <controls.Entypo name="star" size={16} color="rgb(255, 169, 134)" />
                    <controls.Entypo name="star" size={16} color="rgb(255, 169, 134)" />
                    <controls.Entypo name="star" size={16} color="rgb(255, 169, 134)" />
                    <controls.Entypo name="star" size={16} color="#CCCCCC" />
                    <controls.Text style={{ color: "black", fontSize: 14, fontWeight: '500' }}>{'(106 Sold)'}</controls.Text>
                </controls.View>
                <controls.View><controls.Text style={{ color: 'green', fontWeight: 'bold', fontSize: 14, marginVertical: 2 }}>Today's Deal</controls.Text></controls.View>
                <controls.View ><controls.Text style={{ color: 'black', fontWeight: 'bold', fontSize: 18 }}>₹18,199 <controls.Text style={{ color: '#6B6B6B', fontWeight: '700', fontSize: 14, textDecorationLine: 'line-through' }}> ₹10,199</controls.Text></controls.Text>
                </controls.View>
                <controls.View style={{ marginVertical: 2 }}>
                    <controls.Text style={{ color: '#5C5C5C', fontSize: 14, fontWeight: '900' }}>You Save ₹1,199 <controls.Text style={{ color: 'green', fontSize: 14, fontWeight: '900' }}>{'(44% off)'}</controls.Text></controls.Text>
                </controls.View>
                <controls.View>
                    <controls.Text numberOfLines={2} ellipsizeMode='tail' style={{ color: 'blue', fontSize: 12, fontWeight: '500' }}>Earn 250 Extra pepperfry Credits {'(worth'}<controls.Text style={{ fontWeight: '800' }}>{' ₹250)'}</controls.Text></controls.Text>
                </controls.View>
                <controls.View style={{ marginTop: 3, marginBottom: 8 }}>
                    <controls.Text style={{ color: '#5C5C5C', fontWeight: '700', fontSize: 12 }}>Ships in<controls.Text style={{ fontWeight: '900' }}> 6 days</controls.Text></controls.Text>
                </controls.View>
            </controls.View>
        </>
    )
}
export default Tabcard23infor;