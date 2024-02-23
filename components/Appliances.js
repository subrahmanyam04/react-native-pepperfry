import React, { useState } from 'react';
import { styles } from "./Categorystyles";
import controls from "./Imports";
const Appliances = () => {
    const [isContainer2Visible, setContainer2Visible] = useState(false);
    const [isnestedcontainer1Visible, setnestedcontainer1Visible] = useState(false);
    const [isnestedcontainer2Visible, setnestedcontainer2Visible] = useState(false);
    const handleContainerClick = () => {
        setContainer2Visible(!isContainer2Visible);
        setnestedcontainer1Visible('');
        setnestedcontainer2Visible('');
    };
    const handlenestedcontainer1Click = () => { setnestedcontainer1Visible(!isnestedcontainer1Visible); };
    const handlenestedcontainer2Click = () => { setnestedcontainer2Visible(!isnestedcontainer2Visible); };
    const titles = [
        { id: 1, tilname: 'Futons', onpressind: '', icon: "" },
        { id: 2, tilname: 'Chaise Loungers', onpressind: '', icon: "" },
        { id: 3, tilname: 'Bean Bags', onpressind: '', icon: "" },
        { id: 4, tilname: 'Recliners', onpressind: '', icon: "plus" },
        { id: 5, tilname: 'Sofa Chairs', onpressind: '', icon: "plus" },
        { id: 6, tilname: 'Settees & Benches', onpressind: '', icon: "plus" },
        { id: 7, tilname: 'Ottomans', onpressind: '', icon: "" },
        { id: 8, tilname: 'Chairs', onpressind: '', icon: "plus" },
        { id: 9, tilname: 'Gaming Chairs', onpressind: '', icon: "" },
        { id: 10, tilname: 'Stool & Pouffes', onpressind: '', icon: "plus" },
        { id: 11, tilname: 'Shoe Racks', onpressind: '', icon: "plus" },
        { id: 12, tilname: 'Center Tables', onpressind: '', icon: "plus" },
        { id: 13, tilname: 'Side Tables', onpressind: '', icon: "plus" },
        { id: 14, tilname: 'TV & Media Units', onpressind: '', icon: "" },
        { id: 15, tilname: 'Ceabinets & Sideboards', onpressind: '', icon: "" },
        { id: 16, tilname: 'Book Shalves', onpressind: '', icon: "" },
        { id: 17, tilname: 'Book Cases', onpressind: '', icon: "" },
        { id: 18, tilname: 'Dining Sets', onpressind: '', icon: "plus" },
        { id: 19, tilname: 'Dining Chairs', onpressind: '', icon: "" },
        { id: 20, tilname: 'Dining Tables', onpressind: '', icon: "" },
        { id: 21, tilname: 'Crockery Units', onpressind: '', icon: "" },
        { id: 22, tilname: 'Bar Furniture', onpressind: '', icon: "plus" },
        { id: 23, tilname: 'Beds', onpressind: '', icon: "plus" },
        { id: 24, tilname: 'Besides Tables', onpressind: '', icon: "" },
        { id: 25, tilname: 'Linen Trunks', onpressind: '', icon: "" },
        { id: 26, tilname: 'Chest of Drawers', onpressind: '', icon: "" },
        { id: 27, tilname: 'Dressing Tables', onpressind: '', icon: "plus" }
    ]
    const navigation = controls.useNavigation();
    const navigateToScreen = (screenName) => { navigation.navigate('Tabcontent', { screen: screenName }); };
    return (
            <controls.View style={styles.mainconatiner}>
                <controls.TouchableOpacity onPress={handleContainerClick} activeOpacity={1}>
                    <controls.View style={styles.container}>
                        <controls.View style={styles.subcontainer}>
                            <controls.View style={styles.imagecontainer}>
                                <controls.Image source={{ uri: 'https://ii1.pepperfry.com/media/wysiwyg/banners/appliances_13042023.jpg' }} style={styles.image} />
                            </controls.View>
                            <controls.View style={{width:"76%"}}>
                                <controls.Text style={styles.headingtext}>Appliances</controls.Text>
                                <controls.Text style={styles.subtext} numberOfLines={1} ellipsizeMode="tail">Sofas,Sectional Sofas,Sofa Cum Beds, Futons,Chaise Loungers</controls.Text>
                            </controls.View>
                            <controls.View style={styles.iconcontainer}>
                                {isContainer2Visible ? ( <controls.MaterialIcons name='keyboard-arrow-up' color={'#5B5B5B'} size={24} /> ) : <controls.MaterialIcons name='keyboard-arrow-down' color={'#5B5B5B'} size={24} />}
                            </controls.View>
                        </controls.View>
                    </controls.View>
                </controls.TouchableOpacity>
                {isContainer2Visible ? (
                    <controls.View style={styles.dropdowmpannelcontainer}>
                        <controls.View style={styles.pannelinnercontainer}>
                            <controls.TouchableOpacity onPress={handlenestedcontainer1Click} activeOpacity={1}>
                                <controls.View style={styles.innercontainer}>
                                    <controls.View>
                                        <controls.Text style={styles.innercontainerheadtext}>Breakfast Appliances</controls.Text>
                                    </controls.View>
                                    <controls.View style={styles.iconcontainer}>
                                        {isnestedcontainer1Visible ? ( <controls.AntDesign name='minus' color={'#5B5B5B'} size={18} /> ) : <controls.AntDesign name='plus' color={'#5B5B5B'} size={18} />}
                                    </controls.View>
                                </controls.View>
                            </controls.TouchableOpacity>
                        </controls.View>
                    </controls.View>
                ) : null}
                {isnestedcontainer1Visible ? (
                    <controls.View style={styles.nestedmaincontainer}>
                        <controls.View style={styles.nestedcontainer}>
                            <controls.View><controls.Text style={styles.Activetextcolor} onPress={()=>navigateToScreen('Bread and Waffle Makers')}>Bread and Waffle Makers</controls.Text></controls.View>
                            <controls.View><controls.Text style={styles.nestedtext}>Sandwich Makers</controls.Text></controls.View>
                            <controls.View><controls.Text style={styles.nestedtext}>Pop-up Toasters</controls.Text></controls.View>
                            <controls.View><controls.Text style={styles.nestedtext}>Coffe Makers</controls.Text></controls.View>
                        </controls.View>
                    </controls.View>
                ) : null}
                {isContainer2Visible ? (
                    <controls.View style={styles.dropdowmpannelcontainer}>
                        <controls.View style={styles.pannelinnercontainer}>
                            <controls.TouchableOpacity onPress={handlenestedcontainer2Click} activeOpacity={1}>
                                <controls.View style={styles.innercontainer}>
                                    <controls.View><controls.Text style={styles.innercontainerheadtext}>Sectional Sofas</controls.Text></controls.View>
                                    <controls.View style={styles.iconcontainer}>
                                        {isnestedcontainer2Visible ? ( <controls.AntDesign name='minus' color={'#5B5B5B'} size={18} /> ) : <controls.AntDesign name='plus' color={'#5B5B5B'} size={18} />}
                                    </controls.View>
                                </controls.View>
                            </controls.TouchableOpacity>
                        </controls.View>
                    </controls.View>
                ) : null}
                {isnestedcontainer2Visible ? (
                    <controls.View style={styles.nestedmaincontainer}>
                        <controls.View style={styles.nestedcontainer}>
                            <controls.View><controls.Text style={styles.nestedtext}>LHS Sectional</controls.Text></controls.View>
                            <controls.View><controls.Text style={styles.nestedtext}>RHS Sectional</controls.Text></controls.View>
                            <controls.View><controls.Text style={styles.nestedtext}>Corner Sofas</controls.Text></controls.View></controls.View>
                    </controls.View>
                ) : null}
                {isContainer2Visible ? (
                    <controls.View style={styles.dropdowmpannelcontainer}>
                        <controls.View style={styles.pannelinnercontainer}>
                            <controls.TouchableOpacity activeOpacity={1}>
                                <controls.View style={styles.innercontainer}>
                                    <controls.View><controls.Text style={styles.Activeheadertext} onPress={()=>navigateToScreen('Iron & Steamers')}>Iron & Steamers</controls.Text></controls.View>
                                </controls.View>
                            </controls.TouchableOpacity>
                        </controls.View>
                    </controls.View>
                ) : null}
                {titles.map((add) => (
                    <React.Fragment key={add.id}>
                        {isContainer2Visible ? (
                            <controls.View style={styles.dropdowmpannelcontainer}>
                                <controls.View style={styles.pannelinnercontainer}>
                                    <controls.TouchableOpacity activeOpacity={1}>
                                        <controls.View style={styles.innercontainer}>
                                            <controls.View><controls.Text style={styles.innercontainerheadtext}>{add.tilname}</controls.Text></controls.View>
                                            <controls.View style={styles.iconcontainer}>
                                                <controls.AntDesign name={add.icon} color={'#5B5B5B'} size={18} />
                                            </controls.View>
                                        </controls.View>
                                    </controls.TouchableOpacity>
                                </controls.View>
                            </controls.View>
                        ) : null}
                    </React.Fragment>
                ))}
            </controls.View>  
    )
}
export default Appliances;

